import React, { useCallback, useRef, useEffect, useState } from "react";
import Slider from "react-slick";

function MenuList({
  menuData = [],
  handleMenuClick,
  setCurrentMenu,
  currentMenu,
}) {
  const [sliderData, setSliderData] = useState(menuData); // 슬라이더 데이터를 상태로 관리

  // menuData가 변경될 때만 sliderData를 업데이트
  useEffect(() => {
    setSliderData(menuData || []); // menuData가 비어있을 경우 빈 배열로 처리
  }, [menuData]);

  // 가격 포맷 함수
  const formatPrice = (price) => {
    if (typeof price !== "number") {
      price = parseFloat(price); // 숫자가 아닌 경우 변환
    }
    return price.toLocaleString("ko-KR");
  };

  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    dots: true, // 슬라이더 하단에 점 표시
    infinite: true, // 무한 반복 활성화
    speed: 500, // 슬라이더 전환 속도
    slidesToShow: 3, // 한 번에 보여지는 슬라이드 개수
    slidesToScroll: 3, // 한 번에 이동하는 슬라이드 개수
    rows: 2, // 행 개수 (기본값: 2)
    swipeToSlide: true, // 슬라이드로 스와이프 가능
    arrows: true, // 좌우 화살표 표시
    draggable: false, // 슬라이드를 드레그로 변경 못하게 함
  };

  console.log("DATA:", menuData);
  console.log("Slider Data:", menuData);
  console.log("Current Menu:", currentMenu);

  return (
    <div className="menu-list">
      {menuData.length === 0 ? (
        <p>메뉴가 없습니다.</p>
      ) : (
        <Slider {...settings} ref={slickRef}>
          {menuData.map((menu) => (
            <div key={menu.id}>
              <div
                onClick={() => {
                  handleMenuClick(menu);
                }}
                className="menu-item"
              >
                <img
                  src={menu.imgurl}
                  alt={menu.name}
                  style={{ width: "100px", height: "120px" }}
                />
                <p>{menu.name}</p>
                <p>가격: {formatPrice(menu.price)}원</p>
                {menu.allergy && <p>알레르기: {menu.allergy}</p>}
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default MenuList;
