import React, { useState } from 'react';
import useSimulatedMessages from '../hooks/useSimulatedMessages';
import MessageList from './MessageList';

function ChatRoom({ room }) {
  const { messages, addMessage } = useSimulatedMessages(room);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setTyping(true);
    setTimeout(() => {
      addMessage({ sender: 'You', text: input });
      setTyping(false);
    }, 2000);
    setInput('');
  };

  return (
    <div className="chat-room">
      <MessageList messages={messages} typing={typing} />
      <div className="input-container">
        <input
          className="message-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatRoom;
