"use client";
import { useState, useRef } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Menggunakan .catch untuk menangkap error jika browser memblokir suara
        audioRef.current.play().catch((err) => {
          console.log("Browser memblokir autoplay, silakan klik tombol lagi:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
      {/* Label keterangan */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-ink/70 font-medium border border-white/20 shadow-sm pointer-events-none">
        {isPlaying ? "Now Playing" : "Play Music"}
      </span>

      {/* Elemen Audio - path relatif agar aman di GitHub Pages project site. */}
      {/* Ganti baris <audio> kamu dengan yang ini: */}
      <audio ref={audioRef} loop src="./public/soundport.mp3" preload="auto" />

      {/* Tombol Bulat */}
      <button
        onClick={toggleMusic}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-lg border border-white/40 shadow-xl text-ink hover:bg-white/50 hover:scale-105 transition-all duration-300"
      >
        {isPlaying ? <Volume2 className="size-5 animate-pulse" /> : <Music className="size-5" />}
      </button>
    </div>
  );
}
