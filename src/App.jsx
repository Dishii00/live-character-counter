import React, { useState } from "react";
import "./App.css";

function App() {
  const maxCharacters = 200;
  const warningLimit = 160;
  const [text, setText] = useState("");

  const characterCount = text.length;
  const remaining = maxCharacters - characterCount;

  const getStatusClass = () => {
    if (characterCount >= maxCharacters) return "danger";
    if (characterCount >= warningLimit) return "warning";
    return "safe";
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Live Character Counter</h1>
        <p className="subtitle">
          Type your message below and watch the character count update in real
          time.
        </p>

        <textarea
          className={`textarea ${getStatusClass()}`}
          placeholder="Start typing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={maxCharacters}
        />

        <div className="info-row">
          <span className={`count ${getStatusClass()}`}>
            Characters: {characterCount}/{maxCharacters}
          </span>
          <span className={`remaining ${getStatusClass()}`}>
            Remaining: {remaining}
          </span>
        </div>

        <div className="progress-bar">
          <div
            className={`progress-fill ${getStatusClass()}`}
            style={{ width: `${(characterCount / maxCharacters) * 100}%` }}
          ></div>
        </div>

        <p className="message">
          {characterCount === 0 && "Start typing to see the live counter."}
          {characterCount > 0 && characterCount < warningLimit &&
            "You are within the safe character range."}
          {characterCount >= warningLimit && characterCount < maxCharacters &&
            "Warning: You are close to the maximum character limit."}
          {characterCount === maxCharacters &&
            "Limit reached: You cannot enter more characters."}
        </p>
      </div>
    </div>
  );
}

export default App;