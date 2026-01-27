'use client';

import { useEffect } from 'react';

interface VideoModalProps {
     isOpen: boolean;
     onClose: () => void;
     videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
     useEffect(() => {
          const handleEscape = (e: KeyboardEvent) => {
               if (e.key === 'Escape') onClose();
          };

          if (isOpen) {
               document.addEventListener('keydown', handleEscape);
               document.body.style.overflow = 'hidden';
          }

          return () => {
               document.removeEventListener('keydown', handleEscape);
               document.body.style.overflow = 'unset';
          };
     }, [isOpen, onClose]);

     if (!isOpen) return null;

     // Extract YouTube video ID
     const getYouTubeEmbedUrl = (url: string) => {
          const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          const match = url.match(regExp);
          const videoId = match && match[2].length === 11 ? match[2] : null;
          return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
     };

     return (
          <div
               className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
               onClick={onClose}
          >
               <div
                    className="relative w-full max-w-5xl bg-gradient-to-br from-red-dark/95 to-red-main/95 rounded-2xl shadow-2xl overflow-hidden animate-modalSlideIn border-2 border-gold/30"
                    onClick={(e) => e.stopPropagation()}
               >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gold/20">
                         <div>
                              <h2 className="text-2xl font-bold text-gold-light">Video giới thiệu</h2>
                              <p className="text-white/80 text-sm mt-1">Tìm hiểu về Chủ tịch Hồ Chí Minh</p>
                         </div>
                         <button
                              onClick={onClose}
                              className="text-white/90 hover:text-white hover:bg-white/10 w-12 h-12 rounded-full transition-all duration-300 hover:rotate-90 flex items-center justify-center text-3xl shadow-lg"
                              title="Đóng (ESC)"
                         >
                              ×
                         </button>
                    </div>

                    {/* Video Container */}
                    <div className="relative aspect-video bg-black">
                         <iframe
                              src={getYouTubeEmbedUrl(videoUrl)}
                              className="absolute inset-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title="Video giới thiệu"
                         ></iframe>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-red-dark/50 text-center">
                         <p className="text-white/70 text-sm">
                              Nhấn <span className="text-gold font-semibold">ESC</span> hoặc click bên ngoài để đóng
                         </p>
                    </div>
               </div>
          </div>
     );
}
