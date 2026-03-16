import { motion } from "framer-motion";

const AuroraBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden bg-background">
    <motion.div
      animate={{ x: [-20, 20, -20], y: [0, 30, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full opacity-[0.15] blur-[120px]"
      style={{ backgroundColor: "var(--aurora-teal)" }}
    />
    <motion.div
      animate={{ x: [20, -20, 20], y: [20, -10, 20], scale: [1.1, 1, 1.1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-[0.15] blur-[120px]"
      style={{ backgroundColor: "var(--aurora-blue)" }}
    />
    <motion.div
      animate={{ y: [-20, 20, -20], opacity: [0.05, 0.1, 0.05] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full opacity-[0.10] blur-[120px]"
      style={{ backgroundColor: "var(--aurora-purple)" }}
    />
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

export default AuroraBackground;
