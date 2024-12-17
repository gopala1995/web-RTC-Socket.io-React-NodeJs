import React from "react";
import { useSocket } from "../providers/Socket";

const Home = () => {
  const { socket } = useSocket();

  socket.emit("join-room", { roomId: "1", emailId: "test@gmail.com" });
  console.log("Socket", socket);

  return (
    <div className="home-page-container">
      <div className="input-container">
        <input type="email" placeholder="Enter your email here!" />
        <input type="text" placeholder="Enter your room code here!" />
        <button>Enter Room</button>
      </div>
    </div>
  );
};

export default Home;
