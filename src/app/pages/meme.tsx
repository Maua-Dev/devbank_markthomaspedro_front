import React from "react";
import video from "../../assets/meme.mp4";

const Meme = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <video
        src={video}
        autoPlay
        loop
        controls
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default Meme;
