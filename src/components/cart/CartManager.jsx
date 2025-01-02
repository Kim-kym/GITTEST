import React from "react";
import CartList from "./cartList";
import { useState } from "react";

function CartManager({ cart, removeFromCart, updateQuantity }) {
  const [isCartOpen, setIsCartOpen] = useState(false); // 장바구니 열림/닫힘 상태

  return (
    <div>
      {/* 장바구니 열기/닫기 */}
      <div
        className={`cart-container ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <span>장바구니</span>
      </div>

      {/* 장바구니 리스트 */}
      {isCartOpen && (
        <CartList
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
    </div>
  );
}

export default CartManager;