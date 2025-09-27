import React, { useState } from "react";

//create your first component
const Home = () => {
  const [color, setColor] = useState("red");
  const toggleColor = () => {
    setColor((prevColor) => {
      if (prevColor === "red") return "green";
      if (prevColor === "green") return "yellow";
      return "red";
    });
  };

  const getButtonStyleAndText = () => {
    switch (color) {
      case "green":
        return {
          text: "GO",
          buttonColor: "green",
        };
      case "yellow":
        return {
          text: "Caution",
          buttonColor: "yellow",
          textColor: "#222", // black text for visibility
        };
      case "red":
        return {
          text: "STOP",
          buttonColor: "#d32f2f", // Use a more visible red
        };
      default:
        return { text: "GO", buttonColor: "green" };
    }
  };
  const { buttonColor, text, textColor } = getButtonStyleAndText();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundImage:
            "url(https://hips.hearstapps.com/hmg-prod/images/abbey-road-vinyl-mockup-s-1569445881.jpg?crop=0.538xw:0.538xh;0.238xw,0.248xh&resize=640:*)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            background: "#222",
            borderRadius: "40px",
            width: "140px",
            padding: "40px 0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "6px solid #444",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: color === "red" ? "#ff2a2a" : "#440000",
              borderRadius: "50%",
              margin: "18px 0",
              boxShadow: color === "red" ? "0 0 32px 10px #ff2a2a" : "none",
              border: "4px solid #900",
            }}
          ></div>
          <div
            style={{
              width: "80px",
              height: "80px",
              background: color === "yellow" ? "#ffe066" : "#444400",
              borderRadius: "50%",
              margin: "18px 0",
              boxShadow: color === "yellow" ? "0 0 32px 10px #ffe066" : "none",
              border: "4px solid #aa0",
            }}
          ></div>
          <div
            style={{
              width: "80px",
              height: "80px",
              background: color === "green" ? "#2aff2a" : "#004400",
              borderRadius: "50%",
              margin: "18px 0",
              boxShadow: color === "green" ? "0 0 32px 10px #2aff2a" : "none",
              border: "4px solid #090",
            }}
          ></div>
        </div>
        <button
          style={{
            marginTop: "16px",
            padding: "8px 20px",
            fontSize: "1em",
            borderRadius: "8px",
            border: "none",
            background: buttonColor,
            color: color === "yellow" ? textColor || "#222" : "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={toggleColor}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default Home;
