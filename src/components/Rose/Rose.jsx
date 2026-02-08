import { motion } from "framer-motion";
import "./Rose.css";

function Rose({ show }) {
  if (!show) return null;

  return (
    <motion.div
      className="rose-container"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      🌹
    </motion.div>
  );
}

export default Rose;
