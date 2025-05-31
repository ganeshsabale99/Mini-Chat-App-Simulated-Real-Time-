import React, { useState } from 'react';
import RoomTabs from './components/RoomTabs';
import ChatRoom from './components/ChatRoom';
import './App.css';

const rooms = ['general', 'random'];

function App() {
  const [currentRoom, setCurrentRoom] = useState('general');

  return (
    <div className="app-container">
      <h1 className="app-title">Mini Chat App</h1>
      <RoomTabs rooms={rooms} currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
      <ChatRoom room={currentRoom} />
    </div>
  );
}

export default App;
