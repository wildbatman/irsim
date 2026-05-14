import { useEffect, useRef } from "react";

/**
 * Plays /audio/shed.mp3 when the #fleet ("The shed") section enters view.
 * - Won't restart while currently playing.
 * - After audio ends, requires the user to scroll OUT of the section and back IN
 *   before it will play again.
 */
export function ShedAudio() {
  const isPlayingRef = useRef(false);
  const hasLeftSinceEndRef = useRef(true);

  useEffect(() => {
    const target = document.getElementById("fleet");
    if (!target) return;

    const audio = new Audio("/audio/shed.mp3");
    audio.preload = "auto";

    const handleEnded = () => {
      isPlayingRef.current = false;
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
                })
                .catch(() => {
                  // Autoplay blocked — silent fail; will retry on next entry after user gesture.
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
    };
  }, []);

  return null;
}
