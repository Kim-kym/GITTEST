import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styled/Start.css"; // CSS 파일 import

function Start() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 재생 속도 설정
    }
  }, []);

  const handleStartClick = () => {
    navigate("/home"); // "/home" 경로로 이동
  };

  return (
    <div className="root-start" onClick={handleStartClick}>
      <video ref={videoRef} autoPlay muted loop className="background-video">
        <source src="/video/video4.mp4" type="video/mp4" />
      </video>
      <div className="content-start">
        <p>
          어서오세요. <br />
          화면을 터치해주세요.
        </p>
      </div>
    </div>
  );
}

export default Start;
