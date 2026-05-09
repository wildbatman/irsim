import { createFileRoute } from "@tanstack/react-router";
import heroLoco from "@/assets/hero-loco.jpg";
import signalImg from "@/assets/signal-section.jpg";
import junctionImg from "@/assets/irsim-collage.jpg";
import stationsImg from "@/assets/stations.png";
import irsimLogo from "@/assets/irsim-logo.png";
import { ThemeToggle } from "@/components/ThemeToggle";

const ROBLOX_URL = "https://www.roblox.com/games/119297331402283/IR-Sim";
const DISCORD_URL = "https://discord.gg/VRaGeNJYwr";
const YOUTUBE_URL = "https://www.youtube.com/@swiftrailofficial";

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
  { name: "Driver", desc: "Loco pilot duties — start the engine, read aspects, manage notch and brake the rake on the dot.", code: "DR" },
  { name: "Guard", desc: "Authorise departures, watch the rear, monitor BPC and flag clearance to the LP.", code: "GD" },
  { name: "Ticket Checker", desc: "Patrol coaches, verify tickets, handle on-board passenger interactions.", code: "TC" },
  { name: "Passenger", desc: "Board, ride, ticket up — experience the network from the seat side of the window.", code: "PX" },
];

const STATIONS = [
  { name: "Waltan Junction", tag: "Major Junction · 6 Main + 6 Side PF", code: "WTJ" },
  { name: "Ludhiyana Bypass", tag: "Bypass · 2 Passing + 1 Terminating PF", code: "LDB" },
  { name: "Sulivar South", tag: "Through Station · 2 PF", code: "SVS" },
  { name: "Milindagar", tag: "Terminus · 4 PF", code: "MDG" },
];


const SIGNALS = [
  { color: "var(--signal-red)", label: "Stop", aspect: "ON" },
  { color: "var(--signal-amber)", label: "Caution", aspect: "1Y" },
  { color: "var(--signal-green)", label: "Proceed", aspect: "1G" },
];

const LOCOS = [
  { class: "WAG9-HC", type: "Electric Freight · High Capacity", power: "9,000 hp", top: "100 km/h" },
  { class: "WAP-7", type: "Electric Passenger", power: "6,350 hp", top: "140 km/h" },
  { class: "WDG-6G-SHF", type: "Diesel Freight · Short Hood Forward", power: "6,000 hp", top: "100 km/h" },
  { class: "WDG-6G-LHF", type: "Diesel Freight · Long Hood Forward", power: "6,000 hp", top: "100 km/h" },
];

const SERVICES = [
  { no: 1, name: "Gangetic Express", down: "10872", up: "10871", tag: "Mail / Express" },
  { no: 2, name: "Superfast Express", down: "11320", up: "11321", tag: "Superfast" },
  { no: 3, name: "Otto Express", down: "32001", up: "32002", tag: "Express" },
  { no: 4, name: "Dakshin Darshan Express", down: "15562", up: "15563", tag: "Mail / Express" },
  { no: 5, name: "Sanchar Express", down: "23400", up: "23401", tag: "Express" },
  { no: 6, name: "Maharami Express", down: "21446", up: "21445", tag: "Express" },
  { no: 7, name: "Duronto Express", down: "12260", up: "12259", tag: "Premium · Non-Stop" },
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
            <a href="#stations" className="hover:text-primary transition">Stations</a>
            <a href="#fleet" className="hover:text-primary transition">Fleet</a>
            <a href="#services" className="hover:text-primary transition">Services</a>
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
          <div className="mt-6 inline-flex items-center gap-3 font-mono-rail text-[11px] uppercase tracking-[0.3em] border border-secondary/60 text-secondary px-3 py-1.5 rounded-sm bg-background/40">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary signal-pulse" />
            Alpha · Singleplayer Build
          </div>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            IRSIM is a deep-systems Indian Railways simulation built on Roblox by Swift Rail.
            Start the loco yourself, read every aspect, dispatch coaches, manage EOG power
            and ticket passengers — a full railway, one operator at a time.
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
              ["4", "Loco Classes"],
              ["7", "Named Services"],
              ["4", "Playable Roles"],
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
              IR-Sim is a railway simulation game on Roblox created by the group{" "}
              <span className="text-foreground">Swift Rail</span>. It focuses on realistic
              Indian railway-style operations and train management — block working, signal
              aspects, engine startup, EOG coach handling, and the small procedural
              details most train games skip.
            </p>
            <p>
              The game is currently in <span className="text-foreground">Alpha / Pre-Alpha</span>{" "}
              and primarily supports singleplayer gameplay. Features, mechanics and maps
              evolve continuously — Roblox train sim communities tend to keep building
              long after most players have moved on. Evolution is beautiful.
            </p>
            <div className="flex flex-wrap gap-2 pt-4 font-mono-rail text-xs uppercase tracking-widest">
              {["Manual Operations", "Engine Startup", "Signal Handling", "EOG Coaches", "Ticketing", "Singleplayer · Alpha"].map(
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
                Four current roles.
                <span className="block text-primary">More on application.</span>
              </h2>
            </div>
            <p className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground max-w-sm">
              Currently anyone can play as Driver, Ticket Checker, Guard or Passenger. Senior posts open through future applications on Discord.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
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
                </div>
              </div>
            ))}
          </div>

          {/* Future applications callout */}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 group flex flex-wrap items-center justify-between gap-6 p-6 md:p-8 border border-border rounded-sm bg-card/60 hover:bg-card hover:border-primary transition"
          >
            <div>
              <div className="font-mono-rail text-xs uppercase tracking-[0.3em] text-secondary mb-2">
                Future Applications
              </div>
              <div className="font-display text-2xl md:text-3xl uppercase leading-tight">
                Want to be a <span className="text-primary">Driver, Guard or Ticket Checker</span> on duty?
              </div>
              <div className="font-mono-rail text-xs text-muted-foreground mt-2">
                Senior crew posts open through applications on the Swift Rail Discord.
              </div>
            </div>
            <div className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition">
              Apply on Discord →
            </div>
          </a>
        </div>
      </section>

      {/* STATIONS */}
      <section id="stations" className="relative py-32 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
                §04 — On the Network
              </div>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight max-w-2xl">
                The stations
                <span className="block text-primary">on line.</span>
              </h2>
            </div>
            <p className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground max-w-sm">
              Four operational stations across the IRSIM network — junctions, bypasses, through halts and a terminus.
            </p>
          </div>

          <div className="rounded-sm overflow-hidden border border-border bg-background">
            <img
              src={stationsImg}
              alt="IRSIM stations: Waltan Junction, Ludhiyana Bypass, Sulivar South, Milindagar"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {STATIONS.map((st) => (
              <div key={st.code} className="bg-background p-6">
                <div className="font-mono-rail text-xs uppercase tracking-widest text-secondary mb-2">
                  {st.code}
                </div>
                <div className="font-display text-2xl uppercase">{st.name}</div>
                <div className="font-mono-rail text-xs text-muted-foreground mt-1">{st.tag}</div>
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
              §05 — A Day on Section
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
              §06 — Motive Power
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

      {/* SERVICES / TIMETABLE BOARDS */}
      <section id="services" className="relative py-32 border-t border-border">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <div className="font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
                §07 — Named Services
              </div>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight max-w-3xl">
                Boards on the
                <span className="block text-primary">platform.</span>
              </h2>
            </div>
            <p className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground max-w-sm">
              Live named expresses available to drive, guard or dispatch on the IRSIM network.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.no}
                className="relative rounded-sm border-2 border-[oklch(0.55_0.20_55)] bg-gradient-to-b from-[oklch(0.62_0.22_45)] to-[oklch(0.50_0.20_35)] p-5 text-[oklch(0.15_0.05_40)] shadow-[var(--shadow-glow)] hover:translate-y-[-3px] transition overflow-hidden"
              >
                <div className="absolute top-2 right-3 font-display text-6xl text-black/10 select-none">
                  {String(s.no).padStart(2, "0")}
                </div>
                <div className="flex items-center justify-between font-mono-rail text-xs tracking-widest font-bold">
                  <span>{s.down} DN</span>
                  <span>{s.up} UP</span>
                </div>
                <div className="mt-6 border-t border-black/30 pt-4">
                  <div className="font-display text-2xl uppercase leading-tight tracking-wide">
                    {s.name}
                  </div>
                  <div className="font-mono-rail text-[11px] uppercase tracking-widest mt-2 opacity-80">
                    Waltan Junction ⇌ Milindagar
                  </div>
                </div>
                <div className="mt-5 inline-block font-mono-rail text-[10px] uppercase tracking-widest border border-black/40 px-2 py-1 rounded-sm bg-black/10">
                  {s.tag}
                </div>
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
            §08 — The Crew
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight mb-16 max-w-3xl">
            Directed, managed and
            <span className="text-primary"> kept on time.</span>
          </h2>

          {/* Directors */}
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {[
              { name: "Neel", role: "Director" },
              { name: "Aviator_firebird", role: "Director" },
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

          {/* Crew tiers */}
          <div className="mt-10 grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                tier: "LD-GROM",
                title: "Lead General Railway Operations Manager",
                people: ["Wolv", "Milan", "Czech-Mate", "Monster"],
              },
              {
                tier: "GROM",
                title: "General Railway Operations Manager",
                people: ["Notis", "Rick Astley", "Firebird", "Tan"],
              },
              {
                tier: "HOE",
                title: "Head of Engagement",
                people: ["Draco", "SoulRisHop", "Voltix", "Sucharit"],
              },
            ].map((g) => (
              <div key={g.tier} className="bg-background p-8">
                <div className="font-mono-rail text-xs uppercase tracking-[0.3em] text-secondary mb-2">
                  {g.tier}
                </div>
                <div className="font-display text-2xl uppercase leading-tight mb-5">
                  {g.title}
                </div>
                <ul className="space-y-2">
                  {g.people.map((n) => (
                    <li
                      key={n}
                      className="flex items-center gap-3 font-mono-rail text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROBLOX BANNER */}
      <section id="play" className="relative py-32 border-t border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden border border-border rounded-sm bg-gradient-to-br from-card via-background to-card shadow-[var(--shadow-glow)]">
            {/* animated rail line */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-rails opacity-60" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />

            <div className="relative grid md:grid-cols-[auto_1fr_auto] items-center gap-10 p-10 md:p-14">
              {/* Logo */}
              <div className="relative mx-auto md:mx-0">
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />
                <img
                  src={irsimLogo}
                  alt="IRSIM official logo"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="relative w-44 h-44 object-contain drop-shadow-[0_0_30px_oklch(0.62_0.24_27/0.6)]"
                />
              </div>

              {/* Copy */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-3 font-mono-rail text-xs uppercase tracking-[0.4em] text-secondary mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent signal-pulse text-accent" />
                  Live on Roblox · Network Active
                </div>
                <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
                  Play <span className="text-primary text-shadow-glow">IR-Sim</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-lg mx-auto md:mx-0">
                  Boot the official IRSIM experience on Roblox. Pick up your post, grab the
                  radio, and join thousands keeping the network running.
                </p>
                <div className="mt-3 font-mono-rail text-xs uppercase tracking-widest text-muted-foreground">
                  Game ID · 119297331402283
                </div>
              </div>

              {/* CTA */}
              <a
                href={ROBLOX_URL}
                target="_blank"
                rel="noreferrer"
                className="group shrink-0 mx-auto md:mx-0 bg-primary text-primary-foreground font-mono-rail uppercase tracking-widest text-sm px-8 py-5 rounded-sm shadow-[var(--shadow-glow)] hover:translate-y-[-2px] transition flex items-center gap-3"
              >
                <span className="text-lg">▶</span>
                Play on Roblox
              </a>
            </div>
          </div>

          {/* Discord card */}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 group flex flex-wrap items-center justify-between gap-6 p-6 md:p-8 border border-border rounded-sm bg-card/50 hover:bg-card hover:border-[#5865F2] transition"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-sm flex items-center justify-center bg-[#5865F2] text-white shadow-[0_0_30px_#5865F255]">
                <svg viewBox="0 0 127.14 96.36" className="w-8 h-8 fill-current" aria-hidden>
                  <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.7 1.76 1.38 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" />
                </svg>
              </div>
              <div>
                <div className="font-mono-rail text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  Official Discord
                </div>
                <div className="font-display text-2xl md:text-3xl uppercase">
                  Join the Crew Lounge
                </div>
                <div className="font-mono-rail text-xs text-muted-foreground mt-1">
                  discord.gg/VRaGeNJYwr
                </div>
              </div>
            </div>
            <div className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground group-hover:text-[#5865F2] transition">
              Join server →
            </div>
          </a>

          {/* YouTube card */}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 group flex flex-wrap items-center justify-between gap-6 p-6 md:p-8 border border-border rounded-sm bg-card/50 hover:bg-card hover:border-[#FF0033] transition"
          >
            <div className="flex items-center gap-5">
              <div className="relative w-14 h-14 rounded-sm overflow-hidden shadow-[0_0_30px_oklch(0.62_0.24_27/0.5)] ring-2 ring-[#FF0033]/60">
                <img
                  src={irsimLogo}
                  alt="SwiftRail YouTube avatar"
                  width={56}
                  height={56}
                  loading="lazy"
                  className="w-full h-full object-cover bg-background"
                />
              </div>
              <div>
                <div className="font-mono-rail text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#FF0033]" aria-hidden>
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                  </svg>
                  YouTube Channel
                </div>
                <div className="font-display text-2xl md:text-3xl uppercase">
                  SwiftRail Official
                </div>
                <div className="font-mono-rail text-xs text-muted-foreground mt-1">
                  youtube.com/@swiftrailofficial
                </div>
              </div>
            </div>
            <div className="font-mono-rail text-xs uppercase tracking-widest text-muted-foreground group-hover:text-[#FF0033] transition">
              Subscribe →
            </div>
          </a>
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
