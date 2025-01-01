import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  let isVisible = false;
  let orderOption = "";
  const navigate = useNavigate();

  const orderOptionSelect = (option) => {
    orderOption = option;
    pageChange();
  };

  const pageChange = () => {
    console.log(orderOption);
    navigate("/test", { state: { orderOption: orderOption } });
    isVisible = true;
  };

  const handleClick = () => {
    isVisible = false;
  };

  return (
    <div>
      <div>
{isVisible && 
<div style={{backgroundColor : "white", height : "60%", width : "60%"}}>
  <p>{orderOption}</p>
  <p> 음료 수정</p>
  <p> 사이드 교체</p>
  <button onClick={() => handleClick()}>닫기</button>
</div>
}
</div>
    <div
      style={{
        // 배경 이미지
        backgroundImage: "url('/image/side/배경사진.jpg')", // 배경 소스
        height: "100%", // 화면 꽉 체움 (세로 기준)
        backgroundSize: "cover", // 이미지 비율 유지
      }}
    >
      <div
        style={{
          //상단 여유공간 확보 ( 나중에 로고 추가 )
          height: "5vw",
        }}
      ></div>
  <p 
    style={{
      //상단 여유공간 확보 ( 나중에 로고 추가 )
      height: "20vw",
      fontSize: "10vw",
      textAlign: "center",
      color: "rgb(235, 232, 61)",
    }}>Krusty Krab</p>

<div style={{ display: "flex", justifyContent: "center" }}>
  {/* 포장 버튼 */}
  <div
    style={{
      position: "relative",
      width: "30vw",
      height: "30vw",
      marginRight: "0.8vw",
    }}
  >
    {/* 흐릿한 배경 */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/image/button1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(3px)", // 배경 흐릿하게
        zIndex: 0,
      }}
    ></div>

    {/* 선명한 텍스트 버튼 */}
    <button
      id="test"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "transparent", // 배경 제거
        fontSize: "8vw",
        color: "rgb(218, 68, 138)",
         WebkitTextStroke: "1px black",
        border: "none", // 테두리 제거
        zIndex: 1, // 텍스트 위에 표시
      }}
      onClick={() => orderOptionSelect("포장")}
    >
      포장
    </button>
  </div>

  {/* 매장 버튼 */}
  <div
    style={{
      position: "relative",
      width: "30vw",
      height: "30vw",
    }}
  >
    {/* 흐릿한 배경 */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/image/button3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(3px)", // 배경 흐릿하게
        zIndex: 0,
      }}
    ></div>

    {/* 선명한 텍스트 버튼 */}
    <button
      id="test"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "transparent", // 배경 제거
        fontSize: "8vw",
        color: "rgb(50, 245, 50)",
         WebkitTextStroke: "1px black",
        border: "none", // 테두리 제거
        zIndex: 1, // 텍스트 위에 표시
      }}
      onClick={() => orderOptionSelect("매장")}
    >
      매장
    </button>
  </div>
</div>
      <div
        style={{
          //상단 여유공간 확보 ( 나중에 로고 추가 )
          height: "15vh",
        }}
      ></div>
    </div>
    </div>
  );
}
export default Home;
