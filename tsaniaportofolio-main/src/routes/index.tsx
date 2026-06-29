import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Users,
  Award,
  Sparkles,
  Instagram,
  Linkedin,
  MessageCircle,
  Music2,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import portrait from "@/assets/Buthak1.jpeg";
import lilyPink from "@/assets/lily-pink.png";
import lilyBeige from "@/assets/lily-beige.png";
import orchidGreen from "@/assets/orchid-green.png";
import helleboreGreen from "@/assets/hellebore-green.png";

import sertif1 from "@/assets/sertif1.jpg";
import sertif2 from "@/assets/sertif2.jpeg";
import sertif3 from "@/assets/sertif3.png";
import sertif4 from "@/assets/sertif4.jpg";
import sertif5 from "@/assets/sertif5.jpg";
import sertif6 from "@/assets/sertif6.jpg";
import sertif7 from "@/assets/sertif7.png";
import sertif8 from "@/assets/sertif8.jpg";
import sertif9 from "@/assets/sertif9.png";
import sertif10 from "@/assets/sertif10.jpg";
import sertif11 from "@/assets/sertif11.png";
import sertif12 from "@/assets/sertif12.jpg";

import ascincin from "@/assets/ascincin.jpg";
import askalung from "@/assets/askalung.jpg";
import asgelang from "@/assets/asgelang.jpeg";
import aspacking from "@/assets/aspacking.jpg";
import askeychain from "@/assets/askeychain.jpg";
import asvid1 from "@/assets/asvid1.mp4";
import asvid2 from "@/assets/asvid2.mp4";

import flobikin from "@/assets/flobikin.jpg";
import flobiru from "@/assets/flobiru.jpg";
import flocoklat from "@/assets/flocoklat.jpg";
import floinst from "@/assets/floinst.jpg";
import flojepit from "@/assets/flojepit.jpg";
import flomerah from "@/assets/flomerah.jpg";
import flovid1 from "@/assets/flovid1.mp4";

import tikproduk from "@/assets/tikproduk.jpg";
import tikprofil from "@/assets/tikprofil.jpg";
import tikuang from "@/assets/tikuang.jpg";
import tikvid1 from "@/assets/tikvid1.png";
import tikvid2 from "@/assets/tikvid2.png";

import won3 from "@/assets/won3.jpg";
import woninst from "@/assets/woninst.jpg";
import wonposter from "@/assets/wonposter.jpg";
import wonreview1 from "@/assets/wonreview1.jpg";
import wonreview2 from "@/assets/wonreview2.jpg";
import wonvid1 from "@/assets/wonvid1.mp4";

import expo1 from "@/assets/expo1.jpg";
import expo2 from "@/assets/expo2.jpg";

import pimba1 from "@/assets/pimba1.jpg";
import pimba2 from "@/assets/pimba2.jpg";

import dig1 from "@/assets/dig1.jpg";
import dig2 from "@/assets/dig2.jpg";

import kartar1 from "@/assets/kartar1.jpg";
import kartar2 from "@/assets/kartar2.jpg";

import clc1 from "@/assets/clc1.jpg";
import clc2 from "@/assets/clc2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tsania Rahma Ardhiyati — Creative Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Tsania Rahma Ardhiyati — Digital Business student, entrepreneur, and creative content maker from Surabaya.",
      },
      { property: "og:title", content: "Tsania Rahma Ardhiyati — Creative Portfolio" },
      { property: "og:description", content: "digital marketer · entrepreneur · content creator." },
    ],
  }),
  component: Portfolio,
});

// ----------------------------- DATA (edit me) -----------------------------
const SOCIALS = {
  instagram: "https://www.instagram.com/tsaniaardh/",
  tiktok: "https://www.tiktok.com/@t0bangaado?_r=1&_t=ZS-9782WaoxOK7",
  linkedin: "https://www.linkedin.com/in/tsaniarahmaa",
  whatsapp: "https://wa.me/6289616639312",
};

// Replace with your Google Drive CV link
const CV_LINK =
  "https://drive.google.com/file/d/1JzxG_Nu19I-srxXXflVh7QeIPfoV1ZUW/view?usp=drivesdk/";

const NAV = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "work", label: "Working Experience", icon: Briefcase },
  { id: "org", label: "Organizational Experience", icon: Users },
  { id: "awards", label: "Honors & Awards", icon: Award },
  { id: "skills", label: "Skills", icon: Sparkles },
];

const EDUCATION = [
  {
    school: "SMP Negeri 35 Surabaya",
    degree: "",
    year: "2018 — 2021",
    note: "",
    map: "https://maps.app.goo.gl/LCSjgy9A5TsfrXg29?g_st=ac",
  },
  {
    school: "SMA Negeri 20 Surabaya",
    degree: "Ilmu Pengetahuan Sosial",
    year: "2021 — 2024",
    note: "",
    map: "https://maps.app.goo.gl/EitvhUCtvtqzw8gZ6?g_st=ac",
  },
  {
    school: "Universitas Negeri Surabaya",
    degree: "S1 Bisnis Digital",
    year: "2024 — sekarang",
    note: "IPK 3.70/4.00",
    map: "https://maps.app.goo.gl/NnZEfLx1tuDr9Vdz7?g_st=ac",
  },
];

const PLACEHOLDER_9_16 = (label: string, hue: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 640'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='${hue}'/><stop offset='1' stop-color='#fdf6ec'/></linearGradient></defs><rect width='360' height='640' fill='url(%23g)'/><text x='50%25' y='50%25' font-family='Georgia' font-size='28' fill='#5b4a3f' text-anchor='middle' dominant-baseline='middle'>${label}</text></svg>`,
  )}`;
const PLACEHOLDER_SQ = (label: string, hue: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='${hue}'/><stop offset='1' stop-color='#fdf6ec'/></linearGradient></defs><rect width='600' height='600' fill='url(%23g)'/><text x='50%25' y='50%25' font-family='Georgia' font-size='34' fill='#5b4a3f' text-anchor='middle' dominant-baseline='middle'>${label}</text></svg>`,
  )}`;
const PLACEHOLDER_16_9 = (label: string, hue: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='${hue}'/><stop offset='1' stop-color='#fdf6ec'/></linearGradient></defs><rect width='1600' height='900' fill='url(%23g)'/><text x='50%25' y='50%25' font-family='Georgia' font-size='56' fill='#5b4a3f' text-anchor='middle' dominant-baseline='middle'>${label}</text></svg>`,
  )}`;

const WORK = [
  {
    role: "Founder & Owner",
    company: "Aster Glory",
    period: "2022 — Present",
    desc: "Aster Glory adalah usaha aksesoris handmade yang saya dirikan dan kelola secara mandiri dengan fokus pada pembuatan berbagai aksesoris berbahan manik-manik. Berawal dari hobi dan ketertarikan saya pada dunia kreativitas, saya mengembangkan Aster Glory menjadi usaha yang memproduksi aksesoris dengan desain yang unik, menarik, dan mengikuti tren. Produk yang saya buat dipasarkan melalui toko online di Shopee, media sosial Instagram, serta penjualan secara langsung. Dalam menjalankan usaha ini, saya terlibat dalam seluruh proses bisnis, mulai dari pembuatan produk, pengelolaan stok, pengemasan pesanan, promosi, hingga pelayanan pelanggan. Selain mengasah kreativitas dan ketelitian dalam membuat produk, pengalaman ini juga membantu saya mengembangkan kemampuan komunikasi, pemasaran, problem solving, serta memahami cara membangun dan mengelola usaha secara mandiri. Melalui Aster Glory, saya belajar bahwa kualitas produk dan kepuasan pelanggan merupakan faktor penting dalam mempertahankan dan mengembangkan sebuah bisnis.",
    instagram: "https://www.instagram.com/_asterglory?igsh=MW5tZTdsOGd0OTBqeQ==",
    tiktok: "https://shopee.co.id/_asterglory",
    media: [ascincin, asgelang, asvid1, askalung, askeychain, asvid2, aspacking],
  },
  {
    role: "TikTok Affiliate Creator",
    company: "TikTok Shop",
    period: "2025 — Present",
    desc: "Saya aktif membuat konten promosi produk fashion dan pakaian melalui program TikTok Affiliate. Dalam kegiatan ini, saya bertanggung jawab mencari produk yang sesuai dengan target pasar, menyusun konsep konten, membuat materi promosi, melakukan editing, serta mengikuti tren yang sedang berkembang di media sosial. Saya juga mempelajari strategi pemasaran digital dan perilaku konsumen untuk menghasilkan konten yang menarik dan relevan bagi audiens. Dalam proses pembuatan konten, saya memanfaatkan teknologi Artificial Intelligence (AI) untuk menghasilkan visual promosi produk fashion dengan model virtual, tanpa menggunakan atau menampilkan identitas maupun wajah individu tertentu. Saya menyusun prompt dan mengarahkan AI agar menghasilkan visual yang sesuai dengan kebutuhan promosi dan konsep konten. Melalui pengalaman ini, saya mengembangkan kemampuan content creation, digital marketing, AI prompting, serta pemanfaatan teknologi digital secara kreatif dan bertanggung jawab.",
    tiktok: "https://www.tiktok.com/@picksbyardh?_r=1&_t=ZS-97B5n4AVACG",
    media: [tikprofil, tikvid1, tikvid2, tikuang, tikproduk],
  },
  {
    role: "Founder & Owner",
    company: "WarmFloralHaven",
    period: "2025 — Present",
    desc: "WarmFloralHaven adalah usaha handmade yang saya bangun dari ketertarikan saya pada dunia kerajinan dan dekorasi. Usaha ini berfokus pada pembuatan bunga dekoratif berbahan bulu kawat (pipe cleaner) yang dirangkai menjadi berbagai bentuk bunga dengan tampilan yang estetik dan unik. Setiap produk dibuat secara manual dengan penuh ketelitian, mulai dari proses pembentukan kelopak bunga, perakitan rangkaian, hingga pengemasan dalam wadah yang menarik agar siap diberikan sebagai hadiah maupun dekorasi. Dalam menjalankan usaha ini, saya terlibat langsung dalam seluruh proses, mulai dari mencari inspirasi desain, membuat produk, mengatur stok bahan, mempromosikan produk, hingga melayani pelanggan. Melalui WarmFloralHaven, saya tidak hanya mengembangkan kreativitas dan ketelitian, tetapi juga belajar mengelola usaha secara mandiri, membangun komunikasi dengan pelanggan, serta menciptakan produk yang memiliki nilai estetika dan nilai jual.",
    instagram: "https://www.instagram.com/warmfloralhaven?igsh=MWZucWVhZXkzM2ZxYQ==",
    media: [flobiru, flomerah, floinst, flovid1, flocoklat, flobikin, flojepit],
  },
  {
    role: "F&B Small Business Owner",
    company: "Wontoniasterly",
    period: "2024 — Present",
    desc: "Usaha wonton ini saya jalankan sebagai bentuk pengembangan minat saya di bidang kuliner dan kewirausahaan. Produk yang saya jual terdiri dari berbagai varian wonton, seperti wonton kuah dan wonton kering, yang dipasarkan melalui sistem pre-order (PO) serta platform GrabFood. Dalam menjalankan usaha ini, saya terlibat langsung dalam proses persiapan produk, pengelolaan pesanan, promosi, hingga pelayanan pelanggan. Melalui usaha ini, saya belajar bagaimana melayani pelanggan dengan baik, mengelola pesanan secara tepat, serta menjaga kualitas produk agar pelanggan merasa puas. Selain itu, saya juga memperoleh pengalaman dalam pemasaran, komunikasi dengan pelanggan, dan pengelolaan usaha secara mandiri. Pengalaman ini membantu saya mengembangkan kemampuan beradaptasi, bekerja dengan target, serta memahami pentingnya pelayanan yang baik dalam menjalankan sebuah bisnis kuliner.",
    instagram: "https://www.instagram.com/wontoniasterly?igsh=MTV0OWFjN3dsZW9xaQ==",
    media: [won3, woninst, wonvid1, wonreview1, wonreview2, wonposter],
  },
];

const ORG = [
  {
    title: "Secretary — DIGCOFEST International Competition",
    org: "HMP Bisnis Digital, Universitas Negeri Surabaya",
    period: "Aug — Nov 2025",
    caption:
      "DIGCOFEST merupakan kompetisi berskala internasional yang diselenggarakan oleh program studi. Sebagai sekretaris, saya bertanggung jawab dalam mengelola administrasi kegiatan, menyusun dan mengarsipkan dokumen, membuat notulensi rapat, serta membantu penyusunan surat-menyurat yang berkaitan dengan pelaksanaan acara. Saya juga berkoordinasi dengan ketua dan anggota panitia untuk memastikan informasi dan kebutuhan setiap divisi dapat tersampaikan dengan baik. Melalui pengalaman ini, saya mengembangkan kemampuan administrasi, komunikasi profesional, ketelitian, manajemen waktu, serta kerja sama tim dalam lingkungan organisasi.",
    media: [dig1, dig2],
  },
  {
    title: "Mentor — PIMBA Faculty Organization",
    org: "BEM Fakultas Ekonomika dan Bisnis, Universitas Negeri Surabaya",
    period: "July — Nov 2025",
    caption:
      "Sebagai mentor dalam kegiatan PIMBA, saya bertugas mendampingi dan membimbing mahasiswa dalam memahami Program Kreativitas Mahasiswa (PKM). Saya membantu peserta dalam menemukan ide, memberikan arahan terkait penyusunan proposal, serta mendukung proses diskusi dan pengembangan gagasan. Selain itu, saya juga berperan sebagai penghubung antara peserta dan penyelenggara kegiatan untuk memastikan informasi dapat tersampaikan dengan baik. Pengalaman ini meningkatkan kemampuan komunikasi, kepemimpinan, public speaking, serta kemampuan membimbing dan bekerja sama dengan berbagai individu.",
    media: [pimba1, pimba2],
  },
  {
    title: "Campus Expo Committee",
    org: "Ikatan Alumni SMAN 20 Surabaya",
    period: "January 2025",
    caption:
      "Sebagai panitia Campus Expo SMA Negeri 20 Surabaya, saya terlibat dalam persiapan dan pelaksanaan kegiatan yang bertujuan memperkenalkan lingkungan perkuliahan khususnya Universitas Negeri Surabaya kepada calon mahasiswa. Tugas saya meliputi membantu koordinasi acara, mendampingi peserta, memberikan informasi yang dibutuhkan, serta memastikan kegiatan berjalan sesuai dengan susunan acara yang telah direncanakan. Pengalaman ini membantu saya mengembangkan kemampuan komunikasi, pelayanan peserta, koordinasi kegiatan, serta kemampuan bekerja dalam tim yang dinamis.",
    media: [expo1, expo2],
  },
  {
    title: "Member — UKM Kewirausahaan",
    org: "Universitas Negeri Surabaya",
    period: "2025 — 2026",
    caption:
      "Sebagai anggota UKM, saya aktif mengikuti berbagai kegiatan yang bertujuan mengembangkan kemampuan organisasi, kerja sama tim, dan pengembangan diri. Saya terlibat dalam diskusi, kegiatan kepanitiaan, serta berbagai program yang diselenggarakan oleh UKM. Melalui pengalaman ini, saya belajar beradaptasi dengan berbagai karakter individu, membangun relasi, serta meningkatkan kemampuan komunikasi dan kolaborasi dalam lingkungan organisasi.",
    media: [],
  },
  {
    title: "Karang Taruna – Committee & Community Volunteer",
    org: "Karang Taruna RT 03 / RW 08, Kelurahan Wonorejo",
    period: "2022 — 2025",
    caption:
      "Aktif berpartisipasi dalam kegiatan Karang Taruna di tingkat RT dan Kelurahan dengan membantu pelaksanaan berbagai kegiatan kemasyarakatan, seperti jalan sehat, peringatan Hari Kemerdekaan, serta berbagai perlombaan dan acara warga lainnya. Bertanggung jawab dalam membantu koordinasi kegiatan, pencatatan administrasi, menjaga ketertiban peserta, serta memastikan rangkaian acara berjalan dengan lancar. Melalui pengalaman ini, saya mengembangkan kemampuan komunikasi, kerja sama tim, koordinasi acara, problem solving, serta rasa tanggung jawab dalam mendukung kegiatan sosial dan kemasyarakatan.",
    media: [kartar1, kartar2],
  },
  {
    title: "Member — Chinese Language Club (CLC)",
    org: "PGSD Universitas Negeri Surabaya",
    period: "March 2025 — Present",
    caption:
      "Aktif sebagai anggota Chinese Language Club (CLC) di PGSD UNESA Lidah Wetan sejak Maret 2025. Melalui klub ini, saya mendalami bahasa dan budaya Tiongkok secara intensif. Pengalaman ini tidak hanya mengasah kemampuan komunikasi bahasa Mandarin saya, tetapi juga melatih kedisiplinan dan memperluas wawasan lintas budaya yang sangat bermanfaat dalam lingkungan akademik maupun profesional.",
    media: [clc1, clc2],
  },
];

const AWARDS = Array.from({ length: 12 }, (_, i) => {
  const list = [
    {
      title: "KAI Innovation Challenge 2025",
      issuer: "PT Kereta Api Indonesia (Persero)",
      date: "September 2025",
      desc: "Berpartisipasi aktif dalam kompetisi inovasi tingkat nasional untuk merumuskan ide kreatif dan solusi strategis terkait pemecahan masalah operasional serta transformasi digital di industri transportasi.",
      image: sertif1,
      img: sertif1,
    },
    {
      title: "HSK Level 1 Certificate",
      issuer: "Coursera × Peking University",
      date: "Februari 2026",
      desc: "Sertifikasi kompetensi bahasa Mandarin tingkat dasar (HSK Level 1), mencakup penguasaan kosakata esensial, struktur kalimat sederhana, dan kemampuan komunikasi harian.",
      image: sertif2,
      img: sertif2,
    },
    {
      title: "Secretary — DIGCOFEST International Competition",
      issuer: "HMP Bisnis Digital UNESA",
      date: "Agustus - November 2025",
      desc: "Sebagai sekretaris, Bertanggung jawab dalam manajemen kehadiran dan tertib administrasi acara, mencakup pembuatan formulir digital (Google Form) serta rekapitulasi absensi berkala untuk seluruh peserta dan panitia kompetisi.",
      image: sertif3,
      img: sertif3,
    },
    {
      title: "Mentor — PIMBA Faculty Organization",
      issuer: "BEM Fakultas Ekonomika dan Bisnis UNESA",
      date: "Juli - November 2025",
      desc: "Bertindak sebagai mentor untuk membimbing mahasiswa baru dalam penalaran, pengenalan organisasi kampus, serta penyusunan proposal Program Kreativitas Mahasiswa (PKM).",
      image: sertif4,
      img: sertif4,
    },
    {
      title: "DIGCOFEST Business Case Competition (BCC)",
      issuer: "HMP Bisnis Digital UNESA",
      date: "Desember 2024",
      desc: "Berpartisipasi dalam kompetisi studi kasus bisnis internasional yang diselenggarakan oleh HMP Bisnis Digital UNESA bekerja sama dengan PDAM Surya Sembada Surabaya. Fokus kompetisi mencakup pengembangan pola pikir kritis (critical thinking) dan perumusan ide transformasi digital untuk mendukung inovasi start-up berkelanjutan melalui analisis kasus bisnis dan kolaborasi tim yang intensif.",
      image: sertif5,
      img: sertif5,
    },
    {
      title: "DIGCOFEST Start-Up Competition",
      issuer: "HMP Bisnis Digital UNESA",
      date: "Desember 2024",
      desc: "Berpartisipasi aktif dalam kompetisi bisnis internasional yang berfokus pada pengembangan ide startup inovatif, model bisnis berkelanjutan, dan pemanfaatan teknologi digital.",
      image: sertif6,
      img: sertif6,
    },
    {
      title: "Program Kreativitas Mahasiswa (PKM) 2024",
      issuer: "BEM Fakultas Ekonomika dan Bisnis UNESA",
      date: "November 2024",
      desc: "Berpartisipasi aktif sebagai peserta dalam Program Kreativitas Mahasiswa (PKM) 2024 dengan menyusun gagasan kreatif dan proposal inovatif bersama kelompok tim.",
      image: sertif7,
      img: sertif7,
    },
    {
      title: "DBL X Bazaar Participation",
      issuer: "HMP Bisnis Digital UNESA",
      date: "September 2024",
      desc: "Berpartisipasi aktif dalam program DBL X Bazaar bertema “DIGI-LEAD” yang bertujuan mengembangkan kompetensi kepemimpinan, komunikasi, kerja sama tim, dan adaptabilitas di ekosistem bisnis digital.",
      image: sertif8,
      img: sertif8,
    },
    {
      title: "TEP X Bazaar Workshop Participation",
      issuer: "HMP Bisnis Digital UNESA",
      date: "September 2024",
      desc: 'Berpartisipasi aktif dalam "TEP X Bazaar Workshop" bertema "Exploring Global Opportunities" guna memperluas wawasan mengenai peluang global serta meningkatkan kemampuan komunikasi dan penguasaan bahasa Inggris untuk mencapai keunggulan linguistik.',
      image: sertif9,
      img: sertif9,
    },
    {
      title:
        "Industrial Visit at PT Amerta Indah Otsuka & Malang Creative Center | Traveling Company 2025",
      issuer: "HMP Bisnis Digital UNESA",
      date: "Oktober 2025",
      desc: 'Berpartisipasi dalam program "Traveling Company 2025" dengan tema "Driving Digital Business Innovation Through Collaborative Exploration & Team Empowerment". Melalui kunjungan industri ke PT Amerta Indah Otsuka dan Malang Creative Center, saya mendapatkan wawasan mendalam mengenai inovasi bisnis digital, pengembangan industri kreatif, kerja sama tim, dan kolaborasi profesional di dunia kerja nyata.',
      image: sertif10,
      img: sertif10,
    },
    {
      title: "PKKMB Universitas Negeri Surabaya 2024",
      issuer: "Universitas Negeri Surabaya",
      date: "Agustus 2024",
      desc: "Berpartisipasi aktif dalam program Pengenalan Kehidupan Kampus bagi Mahasiswa Baru (PKKMB) UNESA 2024. Program ini memberikan fondasi awal mengenai kehidupan akademik, nilai-nilai universitas, serta pengembangan karakter mahasiswa yang mengasah kemampuan kepemimpinan, komunikasi, kerja sama tim, dan adaptabilitas di lingkungan kampus.",
      image: sertif11,
      img: sertif11,
    },
    {
      title: "Campus Expo Twenty 2025 Committee",
      issuer: "Ikatan Alumni SMAN 20 Surabaya",
      date: "Januari 2025",
      desc: "Berperan sebagai anggota panitia dalam Campus Expo Twenty 2025 yang bertema “Down the Rabbit Hole: Uncover Your Next Adventure!”. Bertanggung jawab dalam mendukung kelancaran operasional acara, koordinasi logistik, dan kolaborasi tim guna memfasilitasi siswa dalam mengeksplorasi berbagai peluang jenjang pendidikan tinggi dan karier masa depan.",
      image: sertif12,
      img: sertif12,
    },
  ];
  const base = list[i % list.length];
  return { ...base };
});

const SKILLS = [
  {
    name: "Digital Marketing",
    items: ["Social Media", "Content Strategy", "Affiliate Marketing", "Digital Marketing"],
  },
  {
    name: "E-Commerce & Marketplace",
    items: [
      "Shopee Seller Management",
      "TikTok Shop Management",
      "Marketplace Operations",
      "Order Management",
    ],
  },
  {
    name: "Content & Design",
    items: ["Canva", "AI Prompting", "Reels & TikTok", "Product Photography"],
  },
  {
    name: "Communication & Leadership",
    items: ["Communication", "Time Management", "Teamwork & Collaboration", "Event Coordination"],
  },
  {
    name: "Languages & Tools",
    items: [
      "Bahasa Indonesia · Native",
      "English · Basic",
      "Mandarin · HSK 1",
      "MS Office, Google Workspace",
      "Capcut,  Canva,  AI Tools",
    ],
  },
];

// ----------------------------- COMPONENTS -----------------------------

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

function Lightbox({
  src,
  onClose,
  onPrev,
  onNext,
}: {
  src: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-cream hover:scale-110 transition"
        onClick={onClose}
      >
        <X className="size-8" />
      </button>
      {onPrev && (
        <button
          className="absolute left-4 text-cream hover:scale-110 transition"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <ChevronLeft className="size-10" />
        </button>
      )}
      {onNext && (
        <button
          className="absolute right-4 text-cream hover:scale-110 transition"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight className="size-10" />
        </button>
      )}
      <img
        src={src}
        alt=""
        className="max-h-[88vh] max-w-[88vw] rounded-2xl shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function LightbulbCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px) rotate(${(e.clientX + e.clientY) / 12}deg)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[200] hidden md:block transition-transform duration-150 ease-out"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        className="drop-shadow-[0_2px_8px_rgba(244,180,200,0.7)]"
      >
        <g>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx="18"
              cy="9"
              rx="5"
              ry="7"
              fill="#f9c8d4"
              stroke="#d98aa0"
              strokeWidth="0.8"
              transform={`rotate(${a} 18 18)`}
            />
          ))}
          <circle cx="18" cy="18" r="3.2" fill="#fde68a" stroke="#c79a3a" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

function FloatingDecor() {
  const items = [
    { src: lilyPink, top: "6%", left: "3%", size: 90, delay: "0s", rot: -10 },
    { src: orchidGreen, top: "18%", right: "4%", size: 110, delay: "1.2s", rot: 12 },
    { src: lilyBeige, top: "50%", left: "2%", size: 80, delay: "2s", rot: 18 },
    { src: helleboreGreen, top: "72%", right: "3%", size: 95, delay: "0.6s", rot: -8 },
    { src: lilyPink, top: "88%", left: "10%", size: 70, delay: "1.6s", rot: 6 },
  ];
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((it, i) => (
        <img
          key={i}
          src={it.src}
          alt=""
          className="absolute animate-float opacity-80 drop-shadow-md"
          style={{
            top: it.top,
            left: it.left,
            right: it.right,
            width: it.size,
            ["--r" as never]: `${it.rot}deg`,
            animationDelay: it.delay,
          }}
        />
      ))}
      <div className="absolute top-[35%] right-[14%] size-16 rounded-full border-4 border-pink/40 animate-spin-slow" />
      <div className="absolute bottom-[18%] left-[12%] size-14 bg-sage/30 rotate-12 rounded-md" />
      <div className="absolute top-[12%] right-[35%] size-10 bg-accent/70 rounded-full" />
    </div>
  );
}

function Nav({ active }: { active: string }) {
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="font-display text-xl md:text-2xl font-semibold text-ink hover:text-pink transition"
        >
          tsania<span className="text-pink">.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === id ? "bg-pink/50 text-ink shadow-sm" : "text-ink/70 hover:bg-sage/40 hover:text-ink"}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#footer"
          className="lg:hidden text-sm font-medium px-3 py-1.5 rounded-full bg-pink/50"
        >
          Menu
        </a>
      </div>
    </header>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="font-script text-2xl text-sage">{kicker}</p>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink mt-1">{title}</h2>
      <div className="mx-auto mt-3 h-[2px] w-20 bg-gradient-to-r from-transparent via-pink to-transparent" />
    </div>
  );
}

// ----------------------------- PAGE -----------------------------
function Portfolio() {
  const active = useActiveSection(NAV.map((n) => n.id));
  const [lightbox, setLightbox] = useState<{ list: string[]; idx: number } | null>(null);
  const open = (list: string[], idx: number) => setLightbox({ list, idx });
  const close = () => setLightbox(null);

  return (
    <>
      <LightbulbCursor />
      <FloatingDecor />
      <Nav active={active} />

      <main className="relative z-10">
        {/* HERO */}
        <section id="home" className="mx-auto max-w-7xl px-4 md:px-8 pt-12 md:pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 relative">
              <Badge className="bg-sage/50 text-ink border-sage hover:bg-sage/60">
                Creative Portfolio Tsania ✿
              </Badge>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[1.05]">
                Tsania <span className="italic text-pink">Rahma</span>
                <br />
                Ardhiyati
              </h1>
              <p className="font-script text-3xl text-sage -mt-2">
                digital marketer · entrepreneur · content creator
              </p>
              <p className="text-base md:text-lg text-ink/80 max-w-xl leading-relaxed">
                Halo, saya Tsania — mahasiswa S1 Bisnis Digital FEB Universitas Negeri Surabaya.
                Saya memiliki passion di bidang digital marketing, e-commerce, dan content creation,
                serta berpengalaman membangun brand sendiri sejak masa SMA. Selalu antusias untuk
                belajar, berkolaborasi, dan berkontribusi di industri bisnis digital & kreatif.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full bg-pink text-ink hover:bg-pink/80 hover:scale-105 transition"
                >
                  <a href="#work">See my work</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-sage bg-sage/30 hover:bg-sage/50 text-ink"
                >
                  <a href="mailto:tsaniarahmaardhiyati@gmail.com">
                    <Mail className="size-4 mr-2" /> Contact me
                  </a>
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-accent text-ink hover:bg-accent/80 hover:scale-105 transition"
                >
                  <a href={CV_LINK} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4 mr-2" /> Download CV
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-ink/70 pt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="size-4" /> Surabaya, ID
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="size-4" /> 0896-1663-9312
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-pink/30 via-accent/40 to-sage/40 rounded-[2.5rem] blur-2xl" />
              <div className="relative glass rounded-[2rem] p-4 rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src={portrait}
                  alt="Tsania Rahma Ardhiyati"
                  width={768}
                  height={1024}
                  className="rounded-[1.5rem] w-full h-auto"
                />
                <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-2 -rotate-6 animate-wobble">
                  <p className="font-script text-xl text-pink">hi, I'm Tsa! ♡</p>
                </div>
              </div>
              <img
                src={lilyPink}
                alt=""
                className="absolute -top-8 -right-6 w-28 animate-float drop-shadow-md"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <SectionTitle kicker="get to know me" title="About Me" />
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 glass rounded-3xl p-6 lift">
              <img src={portrait} alt="" loading="lazy" className="rounded-2xl w-full mb-4" />
              <p className="font-script text-2xl text-pink">
                Tsania, 21. hobi lainnya suka naik gunung!
              </p>
              <p className="text-sm text-ink/70">Digital Business · UNESA</p>

              <div className="mt-5 pt-5 border-t border-beige/60 space-y-2">
                <p className="font-display text-sm uppercase tracking-widest text-ink/60">
                  Let's connect
                </p>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-sage/30 hover:bg-sage/50 transition group"
                >
                  <span className="size-9 grid place-items-center rounded-full bg-ink text-cream group-hover:scale-110 transition">
                    <Linkedin className="size-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-ink/60">LinkedIn</p>
                    <p className="text-sm font-medium text-ink truncate">in/tsaniarhmaa</p>
                  </div>
                  <ExternalLink className="size-4 text-ink/50" />
                </a>
                <a
                  href={CV_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-pink/30 hover:bg-pink/50 transition group"
                >
                  <span className="size-9 grid place-items-center rounded-full bg-pink text-ink group-hover:scale-110 transition">
                    <ExternalLink className="size-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-ink/60">Download CV</p>
                    <p className="text-sm font-medium text-ink truncate">View my CV</p>
                  </div>
                </a>
                <a
                  href="mailto:tsaniarahmaardhiyati@gmail.com"
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-accent/40 hover:bg-accent/60 transition group"
                >
                  <span className="size-9 grid place-items-center rounded-full bg-accent text-ink group-hover:scale-110 transition">
                    <Mail className="size-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-ink/60">Email</p>
                    <p className="text-sm font-medium text-ink truncate">
                      tsaniarahmaardhiyati@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="md:col-span-3 space-y-5">
              <p className="text-lg leading-relaxed text-ink/85">
                Tsania, mahasiswa S1 Bisnis Digital FEB Universitas Negeri Surabaya angkatan 2024
                yang passionate di{" "}
                <em className="text-pink not-italic font-medium">
                  digital marketing, e-commerce, content creation, dan entrepreneurship
                </em>
                , Perjalanan bisnis dimulai sejak SMA — dari jualan kecil-kecilan sampai punya brand
                sendiri. Mulai dari online shop aksesori handmade Aster Glory, usaha bunga handmade
                WarmFloralHaven, bisnis F&B pre-order, hingga affiliate marketing TikTok dengan AI
                prompting untuk konten fashion. Semua pengalaman itu jadi bekal berharga dalam
                memahami product design, branding, customer service, dan strategi pemasaran digital.
                Selain bisnis, juga aktif di organisasi kampus — DIGCOFEST, PIMBA, dan UKM
                Kewirausahaan — yang makin mengasah kemampuan teamwork, koordinasi, problem solving,
                dan leadership.
              </p>
              <p className="text-base text-ink/75">
                Orangnya komunikatif, teliti, kreatif, dan selalu semangat belajar hal baru. Saat
                ini sedang excited mengeksplorasi lebih dalam dunia bisnis digital dan industri
                kreatif! ✿
              </p>
              <h3 className="font-display text-2xl mt-8 text-ink">Education</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {EDUCATION.map((e, i) => (
                  <a
                    key={i}
                    href={e.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass rounded-2xl p-5 lift relative overflow-hidden block group"
                  >
                    <div className="absolute -top-4 -right-4 size-16 rounded-full bg-pink/30 group-hover:bg-pink/50 transition" />
                    <GraduationCap className="size-7 text-sage relative" />
                    <p className="font-display text-lg font-semibold mt-2 leading-tight relative">
                      {e.school}
                    </p>
                    <p className="text-sm text-ink/70 mt-1 relative">{e.degree}</p>
                    <p className="text-xs text-pink font-medium mt-2 relative">{e.year}</p>
                    <p className="text-xs text-ink/60 mt-2 relative">{e.note}</p>
                    <p className="text-xs text-sage font-medium mt-3 relative flex items-center gap-1">
                      <MapPin className="size-3" /> View on Google Maps{" "}
                      <ExternalLink className="size-3" />
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <SectionTitle kicker="things I've built" title="Working Experience" />
          <div className="space-y-10">
            {WORK.map((w, i) => (
              <article key={i} className="glass rounded-3xl p-6 md:p-8 lift">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-ink">{w.role}</h3>
                    <p className="font-script text-2xl text-pink">{w.company}</p>
                    <p className="text-sm text-ink/60">{w.period}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={w.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="size-10 grid place-items-center rounded-full bg-pink/50 hover:bg-pink hover:scale-110 transition"
                    >
                      <Instagram className="size-5" />
                    </a>
                    <a
                      href={w.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="size-10 grid place-items-center rounded-full bg-sage/50 hover:bg-sage hover:scale-110 transition"
                    >
                      <Music2 className="size-5" />
                    </a>
                  </div>
                </div>
                <p className="text-ink/80 max-w-none mb-5">{w.desc}</p>
                <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory -mx-2 px-2">
                  {w.media.map((src, mi) => (
                    <button
                      key={mi}
                      onClick={() => open(w.media, mi)}
                      className="shrink-0 snap-start group relative w-[180px] md:w-[220px] aspect-[9/16] rounded-2xl overflow-hidden ring-1 ring-beige hover:ring-pink transition"
                    >
                      {src.endsWith(".mp4") ? (
                        <video
                          src={src}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          muted
                          playsInline
                          autoPlay // Tambahkan ini agar bergerak otomatis
                          loop // Tambahkan ini agar tidak berhenti
                        />
                      ) : (
                        <img
                          src={src}
                          alt={`${w.company} ${mi + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ORG */}
        <section id="org" className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <SectionTitle kicker="where I've contributed" title="Organizational Experience" />
          <div className="grid md:grid-cols-2 gap-6">
            {ORG.map((o, i) => (
              <article key={i} className="glass rounded-3xl p-6 lift">
                <div className="flex items-start gap-3">
                  <div className="size-10 shrink-0 grid place-items-center rounded-full bg-sage/50 text-ink">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-ink leading-tight">{o.title}</h3>
                    <p className="text-sm text-pink font-medium mt-1">{o.org}</p>
                    <p className="text-xs text-ink/60">{o.period}</p>
                  </div>
                </div>
                <p className="text-sm text-ink/80 mt-4 leading-relaxed">{o.caption}</p>
                {o.media.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {o.media.map((src, mi) => (
                      <button
                        key={mi}
                        onClick={() => open(o.media, mi)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-beige bg-cream/40 cursor-zoom-in"
                      >
                        <img
                          src={src}
                          alt={`${o.title} ${mi + 1}`}
                          className="size-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* AWARDS CAROUSEL */}
        <AwardsCarousel onOpen={open} />

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-7xl px-4 md:px-8 py-20">
          <SectionTitle kicker="my toolbox" title="Skills" />
          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS.map((s, i) => (
              <div key={i} className="glass rounded-3xl p-6 lift">
                <h3 className="font-display text-xl text-ink flex items-center gap-2 mb-4">
                  <Sparkles className="size-5 text-pink" /> {s.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-full bg-cream/70 border border-beige text-xs text-ink/80 hover:bg-pink/30 hover:border-pink transition"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="footer" className="relative mt-10 border-t border-white/40 glass">
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 grid md:grid-cols-3 gap-8 relative">
            <img src={lilyBeige} alt="" className="absolute -top-12 right-8 w-20 animate-float" />
            <img
              src={helleboreGreen}
              alt=""
              className="absolute -top-10 left-8 w-16 animate-wobble"
            />
            <div>
              <p className="font-display text-2xl text-ink">
                tsania<span className="text-pink">.</span>
              </p>
              <p className="font-script text-xl text-sage">keep learning, keep growing ♡</p>
              <p className="text-sm text-ink/70 mt-3">tsaniarahmaardhiyati@gmail.com</p>
            </div>
            <div>
              <p className="font-display text-sm uppercase tracking-widest text-ink/70 mb-3">
                Explore
              </p>
              <ul className="space-y-1.5">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="text-sm text-ink/80 hover:text-pink transition">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm uppercase tracking-widest text-ink/70 mb-3">
                Find me
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
                  { Icon: MessageCircle, href: SOCIALS.whatsapp, label: "WhatsApp" },
                  { Icon: Instagram, href: SOCIALS.instagram, label: "Instagram" },
                  { Icon: Music2, href: SOCIALS.tiktok, label: "TikTok" },
                ].map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="size-11 grid place-items-center rounded-full bg-pink/50 hover:bg-pink hover:scale-110 hover:-rotate-6 transition"
                  >
                    <Icon className="size-5 text-ink" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/40 py-4 text-center text-xs text-ink/60">
            © {new Date().getFullYear()} Tsania Rahma Ardhiyati · Personal Portfolio and Made with
            ♡.
          </div>
        </footer>
      </main>

      {lightbox && (
        <Lightbox
          src={lightbox.list[lightbox.idx]}
          onClose={close}
          onPrev={
            lightbox.list.length > 1
              ? () =>
                  setLightbox(
                    (l) => l && { ...l, idx: (l.idx - 1 + l.list.length) % l.list.length },
                  )
              : undefined
          }
          onNext={
            lightbox.list.length > 1
              ? () => setLightbox((l) => l && { ...l, idx: (l.idx + 1) % l.list.length })
              : undefined
          }
        />
      )}
    </>
  );
}

function AwardsCarousel({ onOpen }: { onOpen: (list: string[], idx: number) => void }) {
  const [i, setI] = useState(0);
  const len = AWARDS.length;
  const prev = () => setI((v) => (v - 1 + len) % len);
  const next = () => setI((v) => (v + 1) % len);
  const images = AWARDS.map((a) => a.image);
  const a = AWARDS[i];
  const previousIndex = (i - 1 + len) % len;
  const nextIndex = (i + 1) % len;
  const previousAward = AWARDS[previousIndex];
  const nextAward = AWARDS[nextIndex];

  // auto-advance, paused on hover
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % len), 4500);
    return () => clearInterval(t);
  }, [paused, len]);

  // touch swipe
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section id="awards" className="mx-auto max-w-7xl px-4 md:px-8 py-20">
      <SectionTitle kicker="my journey achievements" title="Honors & Awards" />
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="relative grid grid-cols-1 md:grid-cols-[minmax(220px,1fr)_minmax(420px,560px)_minmax(220px,1fr)] items-stretch gap-6 min-h-[520px] select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {[-1, 0, 1].map((offset) => {
            const idx = (i + offset + len) % len;
            const isCenter = offset === 0;
            const item = AWARDS[idx];
            const side = offset < 0 ? "left" : "right";
            return (
              <button
                key={offset}
                onClick={() => {
                  if (isCenter) onOpen(images, idx);
                  else if (offset < 0) prev();
                  else next();
                }}
                aria-label={isCenter ? "Open certificate" : offset < 0 ? "Previous" : "Next"}
                className={`glass rounded-3xl transition-all duration-500 text-left
                  ${
                    isCenter
                      ? "p-4 w-full max-w-[580px] mx-auto scale-100 opacity-100 z-10 cursor-zoom-in"
                      : "p-6 hidden md:flex flex-col justify-center items-center min-h-[480px] scale-90 opacity-80 hover:opacity-100 cursor-pointer relative overflow-hidden"
                  }`}
              >
                {!isCenter && (
                  <>
                    <div
                      className={`absolute size-16 rounded-[1.35rem] bg-sage/35 ${
                        side === "left"
                          ? "bottom-28 left-1/2 -translate-x-1/2 rotate-12"
                          : "top-16 left-1/2 -translate-x-1/2 rounded-full border-4 border-pink/30 bg-transparent"
                      }`}
                    />
                    <img
                      src={side === "left" ? lilyPink : helleboreGreen}
                      alt=""
                      className={`pointer-events-none absolute w-20 opacity-80 drop-shadow-lg ${
                        side === "left"
                          ? "bottom-8 left-1/2 -translate-x-1/2"
                          : "bottom-10 right-8"
                      }`}
                    />
                  </>
                )}
                <div className="relative w-full ring-stamp rounded-2xl p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-video object-cover rounded-xl bg-cream"
                  />
                </div>
                {isCenter && (
                  <div className="mt-4 text-center">
                    <p className="font-script text-xl text-sage">
                      certificate {idx + 1} / {len}
                    </p>
                    <h3 className="font-display text-lg md:text-xl text-ink leading-tight mt-1">
                      {a.title}
                    </h3>
                    <p className="text-sm text-ink/70 mt-1">
                      {a.issuer} · {a.date}
                    </p>
                    <p className="text-xs text-ink/60 mt-2">{a.desc}</p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 size-12 rounded-full glass grid place-items-center hover:bg-pink hover:scale-110 transition z-20"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 size-12 rounded-full glass grid place-items-center hover:bg-pink hover:scale-110 transition z-20"
        >
          <ChevronRight className="size-6" />
        </button>

        <div className="flex justify-center flex-wrap gap-1.5 mt-6">
          {AWARDS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-pink" : "w-2 bg-beige hover:bg-sage"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
