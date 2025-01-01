import React from "react";
import Category from "./Category";
import MenuList from "./MenuList";

const formatPrice = (price) => {
  if (typeof price !== "number") {
    price = parseFloat(price); // 숫자가 아닌 경우 변환
  }
  return price.toLocaleString("ko-KR");
};

function MenuDisplay({
  currentMenu,
  setCurrentMenu,
  addToCart,
  handleMenuClick,
  menuListData,
}) {
  console.log("Menu Display:", menuListData);
  return (
    <div className="menu-display">
      {/* 카테고리 버튼 */}
      <Category setCurrentMenu={setCurrentMenu} />
      <MenuList
        menuData={menuListData[currentMenu]}
        addToCart={addToCart}
        handleMenuClick={handleMenuClick}
      />
    </div>
  );
}

export default MenuDisplay;
