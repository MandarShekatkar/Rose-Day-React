import { motion } from "framer-motion";
import FloatingHearts from "../FloatingHearts/FloatingHearts";
import "./Envelope.css";

function Envelope({ isOpen, onOpen, showRose, showHearts }) {
  return (
    <div className="envelope-screen">
      <motion.div
        className={`envelope ${isOpen ? "open" : ""}`}
        onClick={!isOpen ? onOpen : undefined}
      >
        {showRose && <div className="rose-inside">🌹</div>}

        <FloatingHearts show={showHearts} />

        <div className="envelope-back" />
        <motion.div
          className="envelope-flap"
          animate={{ rotateX: isOpen ? -180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <div className="envelope-front" />
      </motion.div>
    </div>
  );
}

export default Envelope;
