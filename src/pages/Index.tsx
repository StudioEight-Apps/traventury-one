import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Menu, X, Send, Check, Loader2, Globe, Megaphone, ShieldCheck, TrendingUp } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import Overlay from "@/components/Overlay";

import logo from "@/assets/logo.jpg";
import phoneMockup3 from "@/assets/phone-mockup-3.png";
import phoneMockupSingle from "@/assets/phone-mockup-single.png";

const categories = ["Cars", "Yachts", "Villas", "Jets", "Chauffeur"];

const navLinks = [
  { label: "About", key: "about" },
  { label: "How It Works", key: "how-it-works", scroll: true },
  { label: "Contact", key: "contact" },
];

export default function Index() {
  const [activeView, setActiveView] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  return (
    <div className="relative min-h-svh w-full overflow-x-hidden text-foreground font-sans selection:bg-white/20 selection:text-white">
      <AuroraBackground />

      {/* Nav — logo left, links right */}
      <nav className="fixed top-0 inset-x-0 z-50 px-5 md:px-10 lg:px-16 py-3 md:py-5 bg-[#060810]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2.5 md:gap-3">
            <img src={logo} alt="Traventury" className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover" />
            <span className="text-[12px] md:text-[14px] font-medium tracking-[0.12em] text-white uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Traventury
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => {
                  if ("scroll" in link && link.scroll) {
                    document.getElementById(link.key)?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setActiveView(link.key);
                  }
                }}
                className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => setActiveView("access")}
              className="px-6 py-2.5 bg-primary text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-full transition-all duration-300 hover:brightness-110"
              style={{ boxShadow: "0 0 20px hsl(217 70% 55% / 0.4), 0 0 40px hsl(217 70% 55% / 0.15)" }}
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-3 p-4 bg-white/[0.06] backdrop-blur-xl rounded-2xl border border-white/[0.08] md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.key}
                    onClick={() => {
                      if ("scroll" in link && link.scroll) {
                        document.getElementById(link.key)?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        setActiveView(link.key);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-sm font-medium text-white/60 hover:text-white py-3 px-3 rounded-xl hover:bg-white/[0.05] transition-all duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero — flex column so the phone can NEVER overlap the CTAs.
          Text+CTAs are a fixed top block (shrink-0); the phone lives in its
          own flex-1 region beneath them and is clipped from the bottom by the
          main's overflow-hidden. When a Safari privacy banner or the address
          bar eats vertical space, the phone region just shrinks (less peek) —
          the buttons stay put and are never pushed into the screenshot. */}
      <main className="relative z-10 h-svh overflow-hidden shrink-0 flex flex-col items-center">
        {/* Centered text content */}
        <div className="relative z-20 shrink-0 w-full flex flex-col items-center text-center px-6 md:px-16 lg:px-24 pt-[100px] md:pt-[120px]">
          <h1
            className="leading-[1.1] font-light tracking-[-0.02em] mb-4 md:mb-3 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="block text-[30px] sm:text-4xl md:text-5xl lg:text-[56px]">Thousands of Assets</span>
            <span className="block text-[23px] sm:text-3xl md:text-4xl lg:text-[44px] text-white/50 mt-1">One Private Network</span>
          </h1>

          <p className="text-[14px] md:text-[15px] max-w-[340px] md:max-w-[520px] leading-[1.65] mb-10 md:mb-12 text-white/45">
            A members-only marketplace for verified operators to source, list, and book luxury assets with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
            <a
              href="https://apps.apple.com/app/id6766409256"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 pl-4 pr-6 py-3 bg-white text-black rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95"
              style={{ boxShadow: "0 0 24px rgba(255,255,255,0.16)" }}
            >
              <svg viewBox="0 0 384 512" className="w-6 h-6 fill-black shrink-0" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-medium tracking-wide opacity-70">Download on the</span>
                <span className="text-[17px] font-semibold tracking-tight -mt-0.5">App Store</span>
              </span>
            </a>
          </div>
        </div>

        {/* Phone mockups: single on mobile, 3 on desktop. Own flex region
            below the CTAs, top-aligned + clipped at the bottom — so it adapts
            to any viewport height without ever colliding with the buttons. */}
        <div className="relative z-10 w-full flex-1 min-h-0 flex justify-center items-start mt-8 md:mt-10 pointer-events-none">
          <motion.img
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            src={phoneMockupSingle}
            alt="App Preview"
            className="md:hidden w-[78%] max-w-[320px] drop-shadow-2xl"
          />
          <motion.img
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            src={phoneMockup3}
            alt="App Preview"
            className="hidden md:block md:w-[70%] lg:w-[62%] max-w-none drop-shadow-2xl"
          />
        </div>
      </main>

      {/* About */}
      <Overlay isOpen={activeView === "about"} onClose={() => setActiveView(null)} title="About">
        <p className="text-[15px] md:text-2xl leading-[1.8] md:leading-relaxed max-w-3xl" style={{ color: "hsl(var(--chrome))" }}>
          Traventury is a closed B2B network built exclusively for luxury rental operators. Every member is vetted. Every transaction is protected.
          <br /><br />
          One platform with a combined inventory of thousands of assets across five categories, backed by real operators you can trust.
          <br /><br />
          Source what your clients need, earn from what you already own, and operate like a company with a fleet ten times your size.{" "}
          <span className="text-foreground">Built by Traventury LLC.</span>
        </p>
      </Overlay>

      {/* How It Works — phone-centered showcase; the four points sit AROUND the device */}
      <section id="how-it-works" className="relative z-10 px-5 md:px-10 lg:px-16 py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #080a0f 0%, #0c0f18 50%, #080a0f 100%)" }}>
        <p className="text-center text-[11px] md:text-[12px] font-semibold tracking-[0.22em] uppercase text-primary/80 mb-4">
          How It Works
        </p>
        <h2
          className="text-[26px] sm:text-3xl md:text-[40px] font-light text-white mb-16 md:mb-24 tracking-tight text-center max-w-[18ch] md:max-w-[24ch] mx-auto leading-[1.12]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Source inventory <span className="text-white/50">globally</span> for your rental business
        </h2>

        <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-x-4 gap-y-10 md:gap-x-10 md:gap-y-20">
          {/* Phone — full width on top (mobile), center column spanning both
              rows (desktop). This keeps the four points as a tidy 2×2 block on
              mobile instead of a sparse, strung-out column. */}
          <div className="col-span-2 md:col-span-1 md:col-start-2 md:row-span-2 order-first md:order-none relative flex justify-center mb-2 md:mb-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/25 blur-[100px] pointer-events-none" />
            <img src={phoneMockupSingle} alt="Traventury app" className="relative w-[200px] sm:w-[230px] lg:w-[260px] drop-shadow-2xl" />
          </div>

          {/* Four points: tight 2×2 grid on mobile; flanking the phone (2 left,
              2 right) on desktop via explicit grid placement. */}
          {[
            { icon: Globe, t: "Source Anything, Anywhere", d: "Any asset, any city. Book at wholesale, keep the spread.", pos: "md:col-start-1 md:row-start-1" },
            { icon: Megaphone, t: "Post What You Need", d: "Post a request. Operators compete to fill it.", pos: "md:col-start-3 md:row-start-1" },
            { icon: ShieldCheck, t: "Vetted & Protected", d: "Every operator vetted. Every payment protected.", pos: "md:col-start-1 md:row-start-2" },
            { icon: TrendingUp, t: "Monetize Your Fleet", d: "Turn idle assets into income, booked worldwide.", pos: "md:col-start-3 md:row-start-2" },
          ].map((item, i) => (
            <div key={i} className={`flex flex-col items-center text-center gap-2.5 md:max-w-[260px] md:mx-auto ${item.pos}`}>
              <div className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-primary/[0.1] border border-primary/[0.2]">
                <item.icon size={20} strokeWidth={1.5} className="text-primary" />
              </div>
              <div>
                <h3 className="text-[14px] lg:text-[17px] font-medium text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.t}</h3>
                <p className="text-[12px] lg:text-[13px] leading-[1.5] text-white/45">{item.d}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06]" style={{ background: "#060810" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-0">
            {/* Logo + tagline */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <img src={logo} alt="Traventury" className="w-9 h-9 rounded-full object-cover" />
                <span className="text-[12px] font-medium tracking-[0.12em] text-white uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Traventury</span>
              </div>
              <p className="text-[13px] text-white/30 max-w-[260px] leading-[1.7]">A members-only marketplace for verified luxury rental operators.</p>
            </div>

            {/* Links */}
            <div className="flex gap-16 md:gap-20">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-white/25">Navigate</span>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-[13px] text-white/45 hover:text-white transition-colors text-left">Home</button>
                <button onClick={() => setActiveView("about")} className="text-[13px] text-white/45 hover:text-white transition-colors text-left">About</button>
                <button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="text-[13px] text-white/45 hover:text-white transition-colors text-left">How It Works</button>
                <button onClick={() => setActiveView("contact")} className="text-[13px] text-white/45 hover:text-white transition-colors text-left">Contact</button>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-white/25">Connect</span>
                <a href="tel:+12013701556" className="text-[13px] text-white/45 hover:text-white transition-colors">201-370-1556</a>
                <a href="mailto:traventury@gmail.com" className="text-[13px] text-white/45 hover:text-white transition-colors">traventury@gmail.com</a>
                <a href="https://www.instagram.com/traventury/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] text-white/45 hover:text-white transition-colors">
                  <Instagram size={14} />
                  @traventury
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row md:justify-between gap-2">
            <p className="text-[11px] text-white/20 tracking-wide">&copy; {new Date().getFullYear()} Traventury LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact */}
      <Overlay isOpen={activeView === "contact"} onClose={() => setActiveView(null)} title="Contact">
        <form
          className="flex flex-col gap-4 md:gap-5 max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
            const name = data.get("name");
            const email = data.get("email");
            const message = data.get("message");
            window.location.href = `mailto:traventury@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
          }}
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="border border-white/10 bg-white/[0.04] p-3.5 md:p-4 rounded-lg text-sm md:text-base text-foreground placeholder:text-foreground/35 focus:border-primary focus:bg-white/[0.06] outline-none transition-all duration-300"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="border border-white/10 bg-white/[0.04] p-3.5 md:p-4 rounded-lg text-sm md:text-base text-foreground placeholder:text-foreground/35 focus:border-primary focus:bg-white/[0.06] outline-none transition-all duration-300"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Your Message"
            className="border border-white/10 bg-white/[0.04] p-3.5 md:p-4 rounded-lg text-sm md:text-base text-foreground placeholder:text-foreground/35 focus:border-primary focus:bg-white/[0.06] outline-none transition-all duration-300 resize-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-3.5 md:py-4 bg-primary text-primary-foreground font-semibold text-xs md:text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(204_89%_53%/0.3)]"
          >
            <Send size={15} />
            Send Message
          </button>
        </form>
        <div className="flex flex-col items-center gap-3 mt-8 pt-6 border-t border-white/[0.06]">
          <a href="tel:+12013701556" className="text-base md:text-lg hover:text-foreground transition-colors duration-300" style={{ color: "hsl(var(--chrome))" }}>
            201-370-1556
          </a>
          <a href="https://www.instagram.com/traventury/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors duration-300">
            <Instagram size={18} />
            <span className="text-sm">@traventury</span>
          </a>
        </div>
      </Overlay>

      {/* Apply Form */}
      <Overlay isOpen={activeView === "access"} onClose={() => { setActiveView(null); if (formStatus === "success") { setFormStatus("idle"); } }} title="Join the Waitlist">
        {formStatus === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6">
              <Check size={32} className="text-green-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-light text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>You're on the List</h3>
            <p className="text-sm md:text-base text-white/45 max-w-sm">Thank you for joining. Our team will review your details and reach out within 48 hours.</p>
          </div>
        ) : (
          <>
            <p className="text-sm md:text-base text-white/40 -mt-4 md:-mt-8 mb-6 md:mb-8">Membership is limited to verified luxury operators. Tell us about your business and we'll be in touch.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus("loading");
              setFormError("");
              const form = e.target as HTMLFormElement;
              const fd = new FormData(form);
              try {
                const resp = await fetch("/api/send-notification", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    full_name: fd.get("full_name") as string,
                    email: fd.get("email") as string,
                    phone: (fd.get("phone") as string) || undefined,
                    company: (fd.get("company") as string) || undefined,
                    city: (fd.get("city") as string) || undefined,
                    categories: selectedCategories.length > 0 ? selectedCategories : undefined,
                    fleet_size: (fd.get("fleet_size") as string) !== "Fleet Size" ? (fd.get("fleet_size") as string) : undefined,
                  }),
                });
                if (!resp.ok) throw new Error("Submission failed");
                setFormStatus("success");
                setSelectedCategories([]);
                form.reset();
              } catch (err: unknown) {
                setFormStatus("error");
                setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
              }
            }}>
              {[
                { name: "full_name", placeholder: "Full Name", type: "text" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Phone Number", type: "tel" },
                { name: "company", placeholder: "Company Name", type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.name === "full_name" || field.name === "email"}
                  placeholder={field.placeholder}
                  className="border border-white/10 bg-white/[0.04] p-3.5 md:p-4 rounded-lg text-sm md:text-base text-foreground placeholder:text-foreground/35 focus:border-primary focus:bg-white/[0.06] outline-none transition-all duration-300"
                />
              ))}
              <div className="md:col-span-2">
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  className="w-full border border-white/10 bg-white/[0.04] p-3.5 md:p-4 rounded-lg text-sm md:text-base text-foreground placeholder:text-foreground/35 focus:border-primary focus:bg-white/[0.06] outline-none transition-all duration-300"
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                <label className="text-xs font-medium tracking-[0.15em] uppercase text-foreground/40">
                  Select Categories
                </label>
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`px-4 md:px-5 py-2 rounded-full border text-xs font-medium tracking-wide transition-all duration-300 hover:scale-[1.05] ${
                        selectedCategories.includes(cat)
                          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_16px_hsl(204_89%_53%/0.25)]"
                          : "border-white/15 text-foreground/50 hover:border-primary/50 hover:text-foreground/80"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 relative">
                <select name="fleet_size" className="w-full appearance-none border border-white/10 bg-white/[0.04] p-3.5 md:p-4 rounded-lg text-sm md:text-base text-foreground/50 focus:border-primary outline-none transition-all duration-300">
                  <option>Fleet Size</option>
                  <option>1-5</option>
                  <option>6-20</option>
                  <option>20+</option>
                </select>
              </div>

              {formStatus === "error" && (
                <div className="md:col-span-2 text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {formError}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="md:col-span-2 mt-2 py-3.5 md:py-4 bg-primary text-primary-foreground font-semibold text-xs md:text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(204_89%_53%/0.3)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formStatus === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          </>
        )}
      </Overlay>
    </div>
  );
}
