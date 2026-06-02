import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  wide?: boolean;
}

const Overlay = ({ isOpen, onClose, children, title, wide }: OverlayProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto overscroll-contain backdrop-blur-xl"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Layered background with depth */}
        <div className="fixed inset-0" style={{ background: "linear-gradient(180deg, #0a0c12 0%, #0d1018 35%, #0b0e16 65%, #080a0f 100%)" }} />
        <div className="fixed inset-0 opacity-40" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.06) 0%, transparent 60%)" }} />
        <div className="fixed inset-0 opacity-30" style={{ background: "radial-gradient(ellipse 60% 40% at 30% 80%, rgba(59, 130, 246, 0.04) 0%, transparent 50%)" }} />

        <button
          onClick={onClose}
          className="fixed top-5 left-5 md:top-10 md:left-10 z-10 text-foreground/40 hover:text-foreground transition-colors duration-300"
        >
          <X size={26} />
        </button>
        <div className="relative min-h-full flex items-start md:items-center justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`${wide ? "max-w-6xl" : "max-w-4xl"} w-full px-5 py-16 md:px-8 md:py-24`}
          >
            {title && (
              <h2 className={`text-2xl md:text-4xl font-light text-foreground mb-8 md:mb-12 tracking-tight ${wide ? "md:text-center" : ""}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {title}
              </h2>
            )}
            {children}
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Overlay;
