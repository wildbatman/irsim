import { createFileRoute } from "@tanstack/react-router";
import heroLoco from "@/assets/hero-loco.jpg";
import signalImg from "@/assets/signal.jpg";
import junctionImg from "@/assets/junction.jpg";
import irsimLogo from "@/assets/irsim-logo.png";

const ROBLOX_URL = "https://www.roblox.com/games/119297331402283/IR-Sim";
const DISCORD_URL = "https://discord.gg/VRaGeNJYwr";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IRSIM — Indian Railways Simulation on Roblox" },
      {
        name: "description",
        content:
          "IRSIM is a hyper-realistic Indian Railways roleplay & operations experience on Roblox. Drive WAP-7s, work signal cabins, dispatch trains, and run an entire railway network.",
      },
      { property: "og:title", content: "IRSIM — Indian Railways Simulation" },
      {
        property: "og:description",
        content:
          "Loco pilots, station masters, controllers — operate the Indian Railways network inside Roblox.",
      },
      { property: "og:image", content: heroLoco },
    ],
  }),
  component: Index,
});

const ROLES = [
  { name: "Loco Pilot", desc: "Drive WAP-7, WDP-4, WAG-9 and MEMU consists. Read aspects, manage notch, brake on the dot.", code: "LP" },
  { name: "Guard", desc: "Authorise departures, monitor BPC, flag clearance, watch the rear of the formation.", code: "GD" },
  { name: "Station Master", desc: "Run the panel, set routes, clear signals, control crossings at your block.", code: "SM" },
  { name: "Pointsman", desc: "Operate manual points, attend trains, assist the SM during dense traffic.", code: "PM" },
  { name: "Section Controller", desc: "Supervise an entire section. Decide overtakes, precedences and platforming.", code: "SC" },
  { name: "Signal Operator", desc: "Work the interlocking, manage conflicting moves, keep the junction breathing.", code: "SO" },
];

const SIGNALS = [
  { color: "var(--signal-red)", label: "Stop", aspect: "ON" },
  { color: "var(--signal-amber)", label: "Caution", aspect: "1Y" },
  { color: "var(--signal-green)", label: "Proceed", aspect: "1G" },
];

const LOCOS = [
  { class: "WAP-7", type: "Electric Passenger", power: "6,350 hp", top: "140 km/h" },
  { class: "WAG-9", type: "Electric Freight", power: "6,120 hp", top: "100 km/h" },
  { class: "WDP-4D", type: "Diesel Passenger", power: "4,500 hp", top: "120 km/h" },
  { class: "MEMU", type: "EMU Suburban", power: "EMU set", top: "100 km/h" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <a href="#" className="flex items-center gap-3">
            <img
              src={irsimLogo}
              alt="IRSIM logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain drop-shadow-[0_0_12px_oklch(0.62_0.24_27/0.5)]"
            />
            <div className="font-display tracking-widest text-xl">IRSIM</div>
            <span className="hidden md:inline font-mono-rail text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">
              Z-CR / DIV-RBL
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono-rail text-xs uppercase tracking-widest">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#roles" className="hover:text-primary transition">Roles</a>
            <a href="#operations" className="hover:text-primary transition">Operations</a>
            <a href="#fleet" className="hover:text-primary transition">Fleet</a>
            <a href="#play" className="hover:text-primary transition">Play</a>
          </nav>
          <a
            href={ROBLOX_URL}
            target="_blank"
            rel="noreferrer"
            className="font-mono-rail text-xs uppercase tracking-widest bg-primary text-primary-foreground px-4 py-2 rounded-sm hover:opacity-90 transition shadow-[var(--shadow-glow)]"
          >
            Play on Roblox
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pt-16">
        <img
          src={heroLoco}
          alt="WAP-7 locomotive at a foggy night platform"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Marquee ticker */}
        <div className="absolute top-16 inset-x-0 border-y border-border bg-background/60 backdrop-blur overflow-hidden">
          <div className="flex marquee whitespace-nowrap py-2 font-mono-rail text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12 px-6 shrink-0">
                <span><span className="text-accent">●</span> 12951 RAJDHANI · ON TIME · PF 4</span>
                <span><span className="text-secondary">●</span> 22691 SBC RAJ · DELAYED 14M · PF 7</span>
                <span><span className="text-primary">●</span> CAUTION ORDER · KM 142–148 · 30 KMPH</span>
                <span><span className="text-accent">●</span> 12009 SHATABDI · DEPARTED · BCT</span>
                <span><span className="text-secondary">●</span> BLOCK SECTION CLEAR · NDLS–GZB</span>
                <span><span className="text-primary">●</span> WAP-7 #30420 · LINK 142 · UP MAIN</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-24 pt-32 w-full">
          <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-secondary" />
            Indian Railways Simulation · Roblox
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase max-w-5xl">
            Run the
            <span className="block text-primary text-shadow-glow">Indian Railways</span>
            one signal at a time.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            IRSIM is a deep-systems railway roleplay built on Roblox. Drive real loco classes,
            work the panel at a live junction, dispatch expresses, and keep an entire network
            moving — with people, not bots.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#play"
              className="group bg-primary text-primary-foreground font-mono-rail uppercase tracking-widest text-sm px-8 py-4 rounded-sm shadow-[var(--shadow-glow)] hover:translate-y-[-2px] transition"
            >
              ▶ Join the Network
            </a>
            <a
              href="#operations"
              className="border border-border text-foreground font-mono-rail uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:border-primary hover:text-primary transition backdrop-blur"
            >
              See operations
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden backdrop-blur">
            {[
              ["12+", "Loco Classes"],
              ["40+", "Stations"],
              ["6", "Operational Roles"],
              ["24/7", "Live Network"],
            ].map(([n, l]) => (
              <div key={l} className="bg-background/80 p-6">
                <div className="font-display text-4xl text-primary">{n}</div>
                <div className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
              §01 — The Brief
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight">
              Not a train game.
              <span className="block text-primary">A railway.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Most train games on Roblox let you drive anywhere, ignore signals, and crash for
              fun. IRSIM does not. Every movement on this network is governed by the same
              rules that move millions on the real Indian Railways — block working, signal
              aspects, caution orders, line clearance, the lot.
            </p>
            <p>
              You don't progress by buying upgrades. You progress by learning the rulebook,
              passing supervised tests, and proving you can hold a panel under pressure.
              When a controller hands you a precedence change at 03:14 IST and three trains
              are queued behind you, that is the game.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 font-mono-rail text-xs uppercase tracking-widest">
              {["Block Working", "Absolute Signalling", "Token-less", "Form T/A 912", "MACLS"].map(
                (t) => (
                  <span key={t} className="border border-border px-3 py-1 rounded-sm text-foreground">
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SIGNAL ASPECTS */}
      <section className="relative py-32 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-sm overflow-hidden border border-border">
            <img
              src={signalImg}
              alt="Multi-aspect colour-light signal at dusk"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent" />
          </div>
          <div>
            <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
              §02 — Read the Aspect
            </div>
            <h2 className="font-display text-5xl uppercase leading-tight mb-10">
              Three lights.
              <br />
              <span className="text-primary">Every decision.</span>
            </h2>

            <div className="space-y-4">
              {SIGNALS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-6 p-5 border border-border rounded-sm bg-background/60"
                >
                  <div
                    className="w-12 h-12 rounded-full signal-pulse shrink-0"
                    style={{ backgroundColor: s.color, color: s.color }}
                  />
                  <div className="flex-1">
                    <div className="font-display text-2xl uppercase">{s.label}</div>
                    <div className="font-mono-rail text-xs text-muted-foreground uppercase tracking-widest">
                      Aspect code · {s.aspect}
                    </div>
                  </div>
                  <div className="font-mono-rail text-xs text-muted-foreground">
                    {s.label === "Stop" && "Train must halt before signal"}
                    {s.label === "Caution" && "Proceed expecting next ON"}
                    {s.label === "Proceed" && "Run at MPS, route clear"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section id="roles" className="relative py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
                §03 — Pick Your Post
              </div>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight max-w-2xl">
                Six departments.
                <span className="block text-primary">One running line.</span>
              </h2>
            </div>
            <p className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground max-w-sm">
              Every role is trained and tested in-game by senior crew before you're cleared for live duty.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {ROLES.map((r) => (
              <div
                key={r.code}
                className="group bg-background p-8 hover:bg-card transition cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 font-display text-[8rem] leading-none text-primary/5 select-none">
                  {r.code}
                </div>
                <div className="relative">
                  <div className="font-mono-rail text-xs uppercase tracking-widest text-secondary mb-3">
                    DEPT · {r.code}
                  </div>
                  <div className="font-display text-3xl uppercase mb-4 group-hover:text-primary transition">
                    {r.name}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  <div className="mt-6 font-mono-rail text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition">
                    Apply →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONS / JUNCTION */}
      <section id="operations" className="relative py-32 border-t border-border">
        <img
          src={junctionImg}
          alt="Indian railway junction at sunset"
          loading="lazy"
          width={1280}
          height={832}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
              §04 — A Day on Section
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight mb-6">
              Down line clear.
              <span className="block text-primary">Starter off.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every shift is unpredictable. Crossings, overtakes, late running, signal failures
              — and the only thing keeping the network moving is the voice on the other end of
              the line.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                t: "04:12 IST",
                k: "LP → SM",
                m: "12951 cleared at home signal, request line.",
                c: "var(--signal-amber)",
              },
              {
                t: "04:13 IST",
                k: "SM → CTLR",
                m: "Permit precedence to 12951 over 22691 at PF 4?",
                c: "var(--signal-red)",
              },
              {
                t: "04:14 IST",
                k: "CTLR → SM",
                m: "Confirmed. Hold 22691 in loop. 12951 through main.",
                c: "var(--signal-green)",
              },
              {
                t: "04:16 IST",
                k: "SM → LP",
                m: "Starter off. Run through. Caution 30 KMPH KM 142.",
                c: "var(--signal-green)",
              },
            ].map((msg) => (
              <div
                key={msg.t}
                className="border border-border bg-background/80 backdrop-blur p-6 rounded-sm relative"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: msg.c }}
                />
                <div className="flex items-center justify-between font-mono-rail text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  <span>{msg.t}</span>
                  <span className="text-secondary">{msg.k}</span>
                </div>
                <div className="font-mono-rail text-base">{msg.m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="relative py-32 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
              §05 — Motive Power
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight">
              The shed,
              <span className="text-primary"> stocked.</span>
            </h2>
          </div>

          <div className="border border-border rounded-sm overflow-hidden">
            <div className="grid grid-cols-12 bg-background font-mono-rail text-xs uppercase tracking-widest text-muted-foreground border-b border-border">
              <div className="col-span-3 p-4">Class</div>
              <div className="col-span-5 p-4">Type</div>
              <div className="col-span-2 p-4">Power</div>
              <div className="col-span-2 p-4 text-right">MPS</div>
            </div>
            {LOCOS.map((l, i) => (
              <div
                key={l.class}
                className={`grid grid-cols-12 items-center hover:bg-card transition ${
                  i !== LOCOS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="col-span-3 p-5 font-display text-2xl text-primary">{l.class}</div>
                <div className="col-span-5 p-5 text-sm">{l.type}</div>
                <div className="col-span-2 p-5 font-mono-rail text-sm text-muted-foreground">{l.power}</div>
                <div className="col-span-2 p-5 font-mono-rail text-sm text-right text-secondary">{l.top}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREW / DIRECTORS */}
      <section id="crew" className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-rails opacity-[0.07]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
            §06 — The Crew
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight mb-16 max-w-3xl">
            Built and directed by
            <span className="text-primary"> two operators.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {[
              { name: "Neel", role: "Director / Co-Founder" },
              { name: "Aviator_firebird", role: "Director / Co-Founder" },
            ].map((p) => (
              <div key={p.name} className="bg-background p-10 relative group">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-sm bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display text-3xl text-primary-foreground shadow-[var(--shadow-glow)]">
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-3xl uppercase">{p.name}</div>
                    <div className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground mt-2">
                      {p.role}
                    </div>
                  </div>
                </div>
                <div className="mt-8 font-mono-rail text-xs uppercase tracking-widest text-muted-foreground">
                  CADRE · OPS · 01
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAY CTA */}
      <section id="play" className="relative py-40 border-t border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-6">
            <span className="w-2 h-2 rounded-full bg-accent signal-pulse text-accent" />
            Network is LIVE
          </div>
          <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
            Report for
            <span className="block text-primary text-shadow-glow">duty.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Servers run 24/7 IST. New crew briefings every weekend. No prior experience required —
            just patience and a working radio.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.roblox.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-primary-foreground font-mono-rail uppercase tracking-widest text-sm px-10 py-5 rounded-sm shadow-[var(--shadow-glow)] hover:translate-y-[-2px] transition"
            >
              ▶ Play IRSIM on Roblox
            </a>
            <a
              href="#about"
              className="border border-border font-mono-rail uppercase tracking-widest text-sm px-10 py-5 rounded-sm hover:border-primary hover:text-primary transition"
            >
              Read the Rulebook
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 font-mono-rail text-xs uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-display text-sm">
              IR
            </div>
            <span>IRSIM · Indian Railways Simulation</span>
          </div>
          <div>Directed by Neel & Aviator_firebird</div>
          <div>Not affiliated with Indian Railways. Roblox fan project.</div>
        </div>
      </footer>
    </div>
  );
}
