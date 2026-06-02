import { motion } from "framer-motion";

const AuroraBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden" style={{ backgroundColor: "#09090b" }}>
    {/* Large grey sphere — top right, clearly visible, slow drift */}
    <motion.div
      animate={{
        x: ["0%", "5%", "-3%", "0%"],
        y: ["0%", "-4%", "3%", "0%"],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="hidden md:block absolute -top-[25%] -right-[15%] w-[800px] h-[800px] rounded-full"
      style={{
        background: "radial-gradient(circle at 40% 40%, #222228 0%, #161619 30%, #09090b 60%)",
      }}
    />

    {/* Large grey sphere — bottom left, slow opposite drift */}
    <motion.div
      animate={{
        x: ["0%", "-4%", "6%", "0%"],
        y: ["0%", "5%", "-3%", "0%"],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="hidden md:block absolute -bottom-[30%] -left-[12%] w-[750px] h-[750px] rounded-full"
      style={{
        background: "radial-gradient(circle at 55% 55%, #1e1e24 0%, #141417 30%, #09090b 60%)",
      }}
    />

    {/* Medium sphere — mid-left, gentle float */}
    <motion.div
      animate={{
        x: ["0%", "8%", "-4%", "0%"],
        y: ["0%", "-6%", "4%", "0%"],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="hidden md:block absolute top-[25%] -left-[5%] w-[450px] h-[450px] rounded-full"
      style={{
        background: "radial-gradient(circle at 50% 45%, #1c1c22 0%, #121215 35%, transparent 60%)",
      }}
    />

    {/* Smaller sphere — center right, subtle motion */}
    <motion.div
      animate={{
        x: ["0%", "-6%", "3%", "0%"],
        y: ["0%", "5%", "-5%", "0%"],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="hidden md:block absolute top-[15%] right-[5%] w-[350px] h-[350px] rounded-full"
      style={{
        background: "radial-gradient(circle at 50% 50%, #1a1a20 0%, #111114 35%, transparent 60%)",
      }}
    />

    {/* Small accent sphere — bottom right area */}
    <motion.div
      animate={{
        x: ["0%", "7%", "-5%", "0%"],
        y: ["0%", "-8%", "4%", "0%"],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="hidden md:block absolute bottom-[10%] right-[10%] w-[280px] h-[280px] rounded-full"
      style={{
        background: "radial-gradient(circle at 45% 50%, #19191f 0%, #0f0f12 35%, transparent 60%)",
      }}
    />

    {/* Noise / grain texture */}
    <div
      className="absolute inset-0 opacity-[0.035] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

export default AuroraBackground;
