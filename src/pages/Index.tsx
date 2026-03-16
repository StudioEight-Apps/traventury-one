import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ChevronDown } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import Overlay from "@/components/Overlay";
import logo from "@/assets/logo.jpg";
import iphoneMockup from "@/assets/iphone-mockup.png";

const categories = ["Cars", "Yachts", "Villas", "Jets", "Chauffeur"];

// X (formerly Twitter) icon
const XIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Index() {
  const [activeView, setActiveView] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  return (
    <div className="relative h-svh w-full overflow-hidden text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <AuroraBackground />

      {/* Nav */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Traventury" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-xs font-medium tracking-[0.2em] text-foreground uppercase hidden sm:inline">
            Traventury United
          </span>
        </div>
        <button
          onClick={() => setActiveView("menu")}
          className="text-xs font-medium tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
        >
          Menu
        </button>
      </nav>

      {/* Hero */}
      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center h-[calc(100svh-180px)] px-6 md:px-12">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border text-[10px] font-medium tracking-[0.15em] uppercase mb-8"
            style={{
              borderColor: "rgba(0, 186, 124, 0.4)",
              color: "#00BA7C",
              backgroundColor: "rgba(0, 186, 124, 0.06)",
              boxShadow: "0 0 20px rgba(0, 186, 124, 0.1)",
            }}
          >
            ✦ Launching Soon — Early Access ✦
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] font-semibold tracking-[-0.03em] mb-6 text-foreground">
            Thousands of assets.
            <br />
            <span className="text-foreground/90">One private network.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-[600px] leading-relaxed mb-10" style={{ color: "#bbb" }}>
            A private network of vetted luxury operators.
            <br className="hidden md:block" /> Cars. Yachts. Villas. Jets. Chauffeur.
          </p>

          <button
            onClick={() => setActiveView("access")}
            className="px-10 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:brightness-110 transition-all active:scale-95"
          >
            Request Early Access
          </button>
        </div>

        <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center">
          {/* Teal/blue glow behind phone */}
          <div
            className="absolute w-[320px] h-[320px] blur-[120px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,186,124,0.12) 0%, rgba(29,155,240,0.08) 60%, transparent 100%)" }}
          />
          <motion.img
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            src={iphoneMockup}
            alt="App Preview"
            className="relative z-10 w-full max-w-[340px] drop-shadow-2xl"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 w-full z-10 flex flex-col items-center gap-3">
        <div className="flex gap-6 text-foreground/40">
          <Instagram size={18} className="hover:text-foreground cursor-pointer transition-colors" />
          <XIcon size={18} className="hover:text-foreground cursor-pointer transition-colors" />
        </div>
        <span className="text-[10px] tracking-[0.15em] uppercase text-foreground/30">
          © 2026 Traventury LLC
        </span>
      </footer>

      {/* Menu Overlay */}
      <Overlay isOpen={activeView === "menu"} onClose={() => setActiveView(null)}>
        <div className="flex flex-col gap-8">
          {[
            { label: "About", key: "about" },
            { label: "How It Works", key: "how-it-works" },
            { label: "Request Early Access", key: "access" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveView(item.key)}
              className="text-4xl md:text-6xl font-semibold tracking-tighter text-left hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </Overlay>

      {/* About */}
      <Overlay isOpen={activeView === "about"} onClose={() => setActiveView(null)} title="About">
        <p className="text-xl md:text-2xl leading-relaxed max-w-3xl" style={{ color: "#bbb" }}>
          Traventury United is a closed B2B network built exclusively for luxury rental operators.
          Every member is vetted. Every transaction is protected. One platform with a combined
          inventory of thousands of assets across five categories — backed by real operators you can
          trust.
          <br /><br />
          Source what your clients need, earn from what you already own, and operate like a company
          with a fleet ten times your size.{" "}
          <span className="text-foreground">Built by Traventury LLC.</span>
        </p>
      </Overlay>

      {/* How It Works */}
      <Overlay isOpen={activeView === "how-it-works"} onClose={() => setActiveView(null)} title="How It Works">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { t: "Find What You Need", d: "Browse thousands of listings across cars, yachts, villas, jets, and chauffeur services. Filter by category, city, dates, and price." },
            { t: "Post What You're Looking For", d: "Can't find the exact asset? Post an ISO to the entire network. Operators respond with options." },
            { t: "Book With Confidence", d: "Request to book directly through the platform. Payment protection is built into every transaction." },
            { t: "List Your Fleet & Earn", d: "Add your inventory in minutes. Set your rates. When another operator books your asset, you get paid automatically." },
          ].map((item, i) => (
            <div key={i} className="space-y-3">
              <span className="font-medium text-sm tracking-[0.15em] uppercase" style={{ color: "#00BA7C" }}>
                0{i + 1}
              </span>
              <h3 className="text-2xl font-semibold">{item.t}</h3>
              <p className="leading-relaxed" style={{ color: "#bbb" }}>{item.d}</p>
            </div>
          ))}
        </div>
      </Overlay>

      {/* Request Access Form */}
      <Overlay isOpen={activeView === "access"} onClose={() => setActiveView(null)} title="Request Early Access">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="border border-input p-4 rounded-sm text-foreground placeholder:text-foreground/40 focus:border-accent outline-none transition-colors" style={{ background: "hsl(0 0% 100% / 0.05)" }} />
          <input type="email" placeholder="Email Address" className="border border-input p-4 rounded-sm text-foreground placeholder:text-foreground/40 focus:border-accent outline-none transition-colors" style={{ background: "hsl(0 0% 100% / 0.05)" }} />
          <input type="tel" placeholder="Phone Number" className="border border-input p-4 rounded-sm text-foreground placeholder:text-foreground/40 focus:border-accent outline-none transition-colors" style={{ background: "hsl(0 0% 100% / 0.05)" }} />
          <input type="text" placeholder="Company Name" className="border border-input p-4 rounded-sm text-foreground placeholder:text-foreground/40 focus:border-accent outline-none transition-colors" style={{ background: "hsl(0 0% 100% / 0.05)" }} />
          <div className="md:col-span-2">
            <input type="text" placeholder="City" className="w-full border border-input p-4 rounded-sm text-foreground placeholder:text-foreground/40 focus:border-accent outline-none transition-colors" style={{ background: "hsl(0 0% 100% / 0.05)" }} />
          </div>

          <div className="md:col-span-2 space-y-3">
            <label className="text-xs font-medium tracking-[0.15em] uppercase text-foreground/50">
              Select Categories
            </label>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`px-5 py-2 rounded-full border text-xs font-medium tracking-wide transition-all ${
                    selectedCategories.includes(cat)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-foreground/20 text-foreground/60 hover:border-foreground/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 relative">
            <select className="w-full appearance-none border border-input p-4 rounded-sm text-foreground/60 focus:border-accent outline-none transition-colors" style={{ background: "hsl(0 0% 100% / 0.05)" }}>
              <option>Fleet Size</option>
              <option>1-5</option>
              <option>6-20</option>
              <option>20+</option>
            </select>
            <ChevronDown className="absolute right-4 top-5 text-foreground/30 pointer-events-none" size={18} />
          </div>

          <button
            type="submit"
            className="md:col-span-2 mt-2 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:brightness-110 transition-all"
          >
            Submit Request
          </button>
        </form>
      </Overlay>
    </div>
  );
}
