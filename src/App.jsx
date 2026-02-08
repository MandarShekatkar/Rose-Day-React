import { useState } from "react";
import Envelope from "./components/Envelope/Envelope";
import MessageCard from "./components/MessageCard/MessageCard";
import "./App.css";

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showRose, setShowRose] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleEnvelopeOpen = () => {
    if (isEnvelopeOpen) return;

    setIsEnvelopeOpen(true);
    setTimeout(() => setShowRose(true), 500);
    setTimeout(() => setShowHearts(true), 700);
    setTimeout(() => setShowMessage(true), 1300);
  };

  const handleReplay = () => {
    setIsEnvelopeOpen(false);
    setShowRose(false);
    setShowHearts(false);
    setShowMessage(false);
  };

  return (
    <div className="page">
      <div className="stage">

        {/* 🔥 ENVELOPE + REPLAY (GROUPED) */}
        <div className="envelope-block">
          <Envelope
            isOpen={isEnvelopeOpen}
            onOpen={handleEnvelopeOpen}
            showRose={showRose}
            showHearts={showHearts}
          />

          {showMessage && (
            <button className="replay-btn" onClick={handleReplay}>
              Replay 💌
            </button>
          )}
        </div>

        {/* 💌 MESSAGE CARD (SEPARATE LAYER) */}
        <MessageCard show={showMessage} />

      </div>
    </div>
  );
}

export default App;
