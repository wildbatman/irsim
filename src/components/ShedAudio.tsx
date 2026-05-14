import { useEffect, useRef, useState } from "react";

/**
 * Plays /audio/shed.mp3 once when the #fleet ("The shed") section enters view.
 * Will not restart while the audio is playing. After it finishes, it only plays
 * again if the user has scrolled out of the section and back into it.
 */
export function ShedAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // True when the user is currently outside the section OR has been outside since the last play finished.
  const hasLeftSinceEndRef = useRef(true);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const target = document.getElementById("fleet");
    if (!target) return;

    const audio = new Audio("/audio/shed.mp3");
    audio.preload = "auto";
    audioRef.current = audio;

    const handleEnded = () => {
      isPlayingRef.current = false;
      setIsPlaying(false);
      // Require leave + re-enter before next play
      hasLeftSinceEndRef.current = false;
    };
    audio.addEventListener("ended", handleEnded);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!isPlayingRef.current && hasLeftSinceEndRef.current) {
              audio.currentTime = 0;
              audio
                .play()
                .then(() => {
                  isPlayingRef.current = true;
                  setIsPlaying(true);
                })
                .catch(() => {
                  // Autoplay blocked — will retry on next intersection after user gesture.
                });
            }
          } else {
            hasLeftSinceEndRef.current = true;
          }
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  return null;
}
