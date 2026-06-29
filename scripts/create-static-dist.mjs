import { copyFile, cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";

const execFileAsync = promisify(execFile);
const require = createRequire(import.meta.url);
const root = process.cwd();
const distDir = path.join(root, "dist");
const clientDir = path.join(distDir, "client");
const assetsDir = path.join(clientDir, "assets");

const assets = await readdir(assetsDir);
let hasClientEntry = false;

for (const file of assets.filter((asset) => asset.endsWith(".js"))) {
  const source = await readFile(path.join(assetsDir, file), "utf8");
  if (source.includes("hydrateRoot(document")) {
    hasClientEntry = true;
    break;
  }
}

if (!hasClientEntry) {
  throw new Error("Could not find the built client entry file in dist/client/assets.");
}

const distEntries = await readdir(distDir, { withFileTypes: true });
for (const entry of distEntries) {
  if (entry.name !== "client" && entry.name !== "server") {
    await rm(path.join(distDir, entry.name), { recursive: true, force: true });
  }
}

await rm(path.join(distDir, "assets"), { recursive: true, force: true });
await rm(path.join(distDir, "music"), { recursive: true, force: true });
await rm(path.join(distDir, "public"), { recursive: true, force: true });
await cp(assetsDir, path.join(distDir, "assets"), { recursive: true, force: true });

const clientEntries = await readdir(clientDir, { withFileTypes: true });
for (const entry of clientEntries) {
  if (entry.isFile()) {
    await copyFile(path.join(clientDir, entry.name), path.join(distDir, entry.name));
  }
}

await mkdir(path.join(distDir, "public"), { recursive: true });
await mkdir(path.join(distDir, "music"), { recursive: true });

const sourceAudio = path.join(root, "public", "Soundport.mp3");
const publicAudio = path.join(distDir, "public", "soundport.mp3");
try {
  const ffmpegPath = require("ffmpeg-static");
  await execFileAsync(ffmpegPath, [
    "-y",
    "-i",
    sourceAudio,
    "-vn",
    "-codec:a",
    "libmp3lame",
    "-b:a",
    "96k",
    publicAudio,
  ]);
} catch {
  await copyFile(sourceAudio, publicAudio);
}
await copyFile(publicAudio, path.join(distDir, "Soundport.mp3"));
await copyFile(publicAudio, path.join(distDir, "music", "soundport.mp3"));
await copyFile(publicAudio, path.join(distDir, "music", "Soundport.mp3"));

for (const file of assets.filter((asset) => asset.endsWith(".js"))) {
  const filePath = path.join(distDir, "assets", file);
  const source = await readFile(filePath, "utf8");
  const patched = source
    .replaceAll('"/./assets/', '"./assets/')
    .replaceAll("'/./assets/", "'./assets/")
    .replaceAll('"/assets/', '"./assets/')
    .replaceAll("'/assets/", "'./assets/")
    .replaceAll('"/./public/', '"./public/')
    .replaceAll("'/./public/", "'./public/")
    .replaceAll('"/public/', '"./public/')
    .replaceAll("'/public/", "'./public/")
    .replaceAll('"/./music/', '"./music/')
    .replaceAll("'/./music/", "'./music/")
    .replaceAll('"/music/', '"./music/')
    .replaceAll("'/music/", "'./music/");
  if (patched !== source) {
    await writeFile(filePath, patched, "utf8");
  }
}

const serverEntry = await import(pathToFileURL(path.join(distDir, "server", "server.js")).href);
const response = await serverEntry.default.fetch(new Request("http://localhost/"), {}, {});
if (!response.ok) {
  throw new Error(`Static prerender failed with status ${response.status}.`);
}

const html = (await response.text())
  .replaceAll('href="/./assets/', 'href="./assets/')
  .replaceAll('src="/./assets/', 'src="./assets/')
  .replaceAll('href="/assets/', 'href="./assets/')
  .replaceAll('src="/assets/', 'src="./assets/')
  .replaceAll('href="/./public/', 'href="./public/')
  .replaceAll('src="/./public/', 'src="./public/')
  .replaceAll('href="/public/', 'href="./public/')
  .replaceAll('src="/public/', 'src="./public/')
  .replaceAll('href="/./music/', 'href="./music/')
  .replaceAll('src="/./music/', 'src="./music/')
  .replaceAll('href="/music/', 'href="./music/')
  .replaceAll('src="/music/', 'src="./music/');
await writeFile(path.join(distDir, "index.html"), html, "utf8");

await writeFile(path.join(distDir, ".nojekyll"), "", "utf8");

await rm(clientDir, { recursive: true, force: true });
await rm(path.join(distDir, "server"), { recursive: true, force: true });

const redirects = `/* /index.html 200
`;
await writeFile(path.join(distDir, "_redirects"), redirects, "utf8");

const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`;
await writeFile(path.join(distDir, ".htaccess"), htaccess, "utf8");

const vercelConfig = `{
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
`;
await writeFile(path.join(distDir, "vercel.json"), vercelConfig, "utf8");
