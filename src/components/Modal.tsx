import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function Modal({ src, onClose }: { src: string | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/80 p-6 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, rotateX: -10 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="neon-border relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl"
          >
            <img src={src} alt="Preview" className="max-h-[85vh] max-w-[90vw] object-contain" />
            <button
              onClick={onClose}
              aria-label="Close"
              className="glass absolute right-3 top-3 rounded-full p-2 text-foreground hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
