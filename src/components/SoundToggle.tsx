import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const KEY = "irsim-sound";

let ctx: AudioContext | null = null;
function getCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = (window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    ctx = new AC();
  }
  return ctx;
}

export function playClick() {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(KEY) !== "on") return;
  const c = getCtx();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "square";
  o.frequency.value = 1400;
  g.gain.value = 0.04;
  o.connect(g).connect(c.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.06);
  o.stop(c.currentTime + 0.07);
}

export function SoundToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(localStorage.getItem(KEY) === "on");
  }, []);

  const toggle = () => {
    const next = !on;
    localStorage.setItem(KEY, next ? "on" : "off");
    setOn(next);
    if (next) playClick();
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={on ? "Mute switch sounds" : "Enable switch sounds"}
      title={on ? "Sounds on" : "Sounds off"}
      className="font-mono-rail text-xs uppercase tracking-widest border border-border px-2.5 py-2 rounded-sm hover:border-primary hover:text-primary transition flex items-center"
    >
      {on ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
    </button>
  );
}
