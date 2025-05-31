import { useEffect, useRef, useState } from 'react';

const predefinedMessages = [
  'Hello!',
  'How’s it going?',
  'Did you see the news?',
  'What are you working on?',
  'Let’s grab lunch later.',
  'Anyone up for a call?',
];

export default function useSimulatedMessages(room) {
  const [messagesByRoom, setMessagesByRoom] = useState({});
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const randomMessage = predefinedMessages[Math.floor(Math.random() * predefinedMessages.length)];
      setMessagesByRoom((prev) => ({
        ...prev,
        [room]: [...(prev[room] || []), { sender: 'Bot', text: randomMessage }],
      }));
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [room]);

  const addMessage = (msg) => {
    setMessagesByRoom((prev) => ({
      ...prev,
      [room]: [...(prev[room] || []), msg],
    }));
  };

  return {
    messages: messagesByRoom[room] || [],
    addMessage,
  };
}
