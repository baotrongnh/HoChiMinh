'use client';

import { useEffect, useState } from 'react';
import VideoModal from './VideoModal';

export default function WelcomeVideo() {
     const [isOpen, setIsOpen] = useState(false);

     useEffect(() => {
          // Check if user has seen the video before
          const hasSeenVideo = localStorage.getItem('hasSeenWelcomeVideo');

          if (!hasSeenVideo) {
               // Show modal after a short delay for better UX
               const timer = setTimeout(() => {
                    setIsOpen(true);
               }, 1000);

               return () => clearTimeout(timer);
          }
     }, []);

     const handleClose = () => {
          setIsOpen(false);
          // Mark as seen
          localStorage.setItem('hasSeenWelcomeVideo', 'true');
     };

     return (
          <VideoModal
               isOpen={isOpen}
               onClose={handleClose}
               videoUrl="https://youtu.be/66tLc02zoNs"
          />
     );
}
