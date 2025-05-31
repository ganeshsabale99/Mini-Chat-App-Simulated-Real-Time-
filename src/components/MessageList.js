import React from 'react';
import TypingIndicator from './TypingIndicator';

function MessageList({ messages, typing }) {
  return (
    <div className="message-list">
      {messages.map((msg, i) => (
        <div key={i} className="message">
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
      {typing && <TypingIndicator />}
    </div>
  );
}

export default MessageList;
