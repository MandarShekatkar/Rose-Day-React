import { motion } from "framer-motion";
import "./MessageCard.css";

function MessageCard({ show }) {
  if (!show) return null;

  return (
    <motion.div
      className="message-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
>
  Happy Rose Day 🌹
</motion.p>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  This Rose Is For Someone Who Makes My Days Brighter
  And My Smiles Bigger 💖
</motion.p>

      <span className="from-text">— From Mandar</span>
    </motion.div>
  );
}

export default MessageCard;
