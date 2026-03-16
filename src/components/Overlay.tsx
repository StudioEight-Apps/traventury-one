import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Overlay = ({ isOpen, onClose, children, title }: OverlayProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-foreground/50 hover:text-foreground transition-colors"
        >
          <X size={32} />
        </button>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl w-full"
        >
          {title && (
            <h2 className="text-4xl font-bold text-foreground mb-12 tracking-tight">
              {title}
            </h2>
          )}
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Overlay;
