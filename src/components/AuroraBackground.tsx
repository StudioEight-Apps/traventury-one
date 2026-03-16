import { motion } from "framer-motion";

const AuroraBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden" style={{ backgroundColor: "#0c0f14" }}>
    {/* Large drifting teal blob */}
    <motion.div
      animate={{
        x: ["-10%", "15%", "-5%", "10%", "-10%"],
        y: ["-5%", "10%", "20%", "5%", "-5%"],
        scale: [1, 1.15, 0.95, 1.1, 1],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full opacity-[0.18] blur-[140px]"
      style={{ backgroundColor: "var(--aurora-teal)" }}
    />

    {/* Blue energy pulse */}
    <motion.div
      animate={{
        x: ["10%", "-15%", "5%", "-10%", "10%"],
        y: ["5%", "-5%", "15%", "-10%", "5%"],
        scale: [1.1, 0.95, 1.15, 1, 1.1],
      }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-[0.18] blur-[140px]"
      style={{ backgroundColor: "var(--aurora-blue)" }}
    />

    {/* Subtle teal (#00BA7C) accent glow */}
    <motion.div
      animate={{
        x: ["0%", "20%", "-10%", "15%", "0%"],
        y: ["0%", "-15%", "10%", "5%", "0%"],
        opacity: [0.04, 0.08, 0.05, 0.07, 0.04],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-[30%] left-[10%] w-[50%] h-[50%] rounded-full blur-[160px]"
      style={{ backgroundColor: "#00BA7C" }}
    />

    {/* Shooting star / energy streaks */}
    <motion.div
      animate={{
        x: ["-100%", "200%"],
        opacity: [0, 0.12, 0],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
      className="absolute top-[25%] left-0 w-[40%] h-[2px] blur-[2px] rounded-full"
      style={{ background: "linear-gradient(90deg, transparent, #00BA7C, transparent)" }}
    />
    <motion.div
      animate={{
        x: ["200%", "-100%"],
        opacity: [0, 0.08, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatDelay: 6 }}
      className="absolute top-[55%] right-0 w-[30%] h-[1px] blur-[1px] rounded-full"
      style={{ background: "linear-gradient(90deg, transparent, #1D9BF0, transparent)" }}
    />

    {/* Bottom purple drift */}
    <motion.div
      animate={{
        y: ["-10%", "15%", "-10%"],
        x: ["5%", "-10%", "5%"],
        opacity: [0.06, 0.12, 0.06],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-15%] left-[20%] w-[50%] h-[50%] rounded-full blur-[140px]"
      style={{ backgroundColor: "var(--aurora-purple)" }}
    />

    {/* Noise texture */}
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

export default AuroraBackground;
