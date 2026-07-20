import { useState } from "react";
import bg2 from "./img/bg2.png";

const OrderModal = ({ isOpen, onClose }) => {
  // 1. State to track which tab is selected. Defaults to 'residential'.
  const [serviceType, setServiceType] = useState("residential");
  const [isHovered, setIsHovered] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* The Main Modal Box (Updated to a single column dark theme) */}
      <div
        style={{
          backgroundColor: "#000000", // Deep black background
          backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.9)0%, rgba(0,0,0,0.9)100%),url(${bg2}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px",
          borderRadius: "12px",
          width: "800px", // Thinner box since there is no image
          maxWidth: "90%",
          position: "relative",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
          border: "1px solid #000000", // Subtle gray border like the image
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          itemAlign: "flex-start",
         
        }}
      >
        {/* The Close "X" Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            backgroundColor: "transparent",
            color: "#888",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ width: "250px", marginRight:'auto' }}>
          <h2
            style={{
              margin: "0 0 30px 0",
              fontSize: "24px",
             
              color: "white",
              textAlign: "center",
            }}
          >
            Select a plan.
          </h2>
        </div>

        {/* The Tab Toggles */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          {/* Residential Tab */}
          <div
            onClick={() => setServiceType("residential")}
            onMouseEnter={() => setIsHovered("residential")} // Turns hover state ON
            onMouseLeave={() => setIsHovered(null)} // Turns hover state OFF
            style={{
              width: "350px",
              border:
                serviceType === "residential"
                  ? "2px solid white"
                  : "1px solid #444", // Fixed border logic
              borderRadius: "5px",
              padding: "15px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "left",
              flexDirection: "column",
              marginLeft: "10px", // Fixed capital L
             backgroundColor: isHovered === "residential" ? "#212121f0" : "#000000",
              cursor: "pointer",
              transition: "all 0.2s ease",
              color:'white'
            }}
          >
            <span
              style={{
                paddingBottom: "8px",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              RESIDENTIAL
            </span>
            <p style={{ fontSize: "12px" }}>
              High-speed, affordable internet at home.
            </p>
          </div>

          {/* Roam Tab */}
          <div
            onClick={() => setServiceType("roam")}
            onMouseEnter={() => setIsHovered("roam")} // Turns hover state ON
            onMouseLeave={() => setIsHovered(null)} // Turns hover state OFF
            style={{
              width: "350px",
              border:
                serviceType === "roam" ? "2px solid white" : "1px solid #444", // Fixed border logic
              borderRadius: "5px",
              padding: "15px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "left",
              flexDirection: "column",
              marginLeft: "10px", // Fixed capital L
              backgroundColor: isHovered === "roam" ? "#212121f0" : "#000000",
              cursor: "pointer",
              transition: "all 0.2s ease",
              color:'white'
            }}
          >
            <span
              style={{
                paddingBottom: "8px",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              Roam
            </span>
            <p style={{ fontSize: "12px" }}>
              Connect on the go with 160+ markets.
            </p>
          </div>
        </div>

        {/* 2. Conditional Rendering: This input ONLY exists if 'residential' is selected */}
        {serviceType === "residential" && (
          <input
            type="text"
            placeholder="Service Address"
            style={{
              padding: "16px",
              border: "1px solid #444",
              backgroundColor: "#111",
              color: "white",
              borderRadius: "4px",
              marginBottom: "20px",
              fontSize: "16px",
              outline: "none",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
        )}

        {/* Order Button */}
        <button
          style={{
            padding: "16px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            width: "150px",
            marginLeft: "auto",
          }}
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
