import React from 'react';

function RoomTabs({ rooms, currentRoom, setCurrentRoom }) {
  return (
    <div className="room-tabs">
      {rooms.map((room) => (
        <button
          key={room}
          onClick={() => setCurrentRoom(room)}
          className={`room-tab-button ${currentRoom === room ? 'active' : ''}`}
        >
          #{room}
        </button>
      ))}
    </div>
  );
}

export default RoomTabs;
