import React from "react";

function CartList({ cart, removeFromCart, updateQuantity }) {
  // 카테고리별 금액 합산
  const categories = [...new Set(cart.map((item) => item.category))];
  const categoryTotals = categories.map((category) => {
    const categoryTotal = cart
      .filter((item) => item.category === category)
      .reduce((total, item) => {
        const toppingsTotal = item.toppings
          ? item.toppings.reduce(
              (toppingTotal, topping) =>
                toppingTotal + topping.price * topping.quantity,
              0
            )
          : 0;
        return total + item.price * item.quantity + toppingsTotal;
      }, 0);
    return { category, total: categoryTotal };
  });

  const totalAmount = cart.reduce((total, item) => {
    const toppingsTotal = item.toppings
      ? item.toppings.reduce((toppingTotal, topping) => {
          const toppingPrice = isNaN(topping.price) ? 0 : topping.price;
          return toppingTotal + toppingPrice * topping.quantity;
        }, 0)
      : 0;

    return total + item.price * item.quantity + toppingsTotal;
  }, 0);

  return (
    <div id="cart">
      <h2>장바구니</h2>

      {/* 카테고리별 합산금액 표시 */}
      {categoryTotals.map((categoryTotal, index) => (
        <div key={`${categoryTotal.category}-${index}`}>
          <h3>
            {categoryTotal.category} 합계: {categoryTotal.total}원
          </h3>
        </div>
      ))}

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <span>{item.name}</span> <p>{item.price}원</p>
              {/* 선택된 토핑 표시 */}
              {item.toppings && item.toppings.length > 0 && (
                <ul>
                  {item.toppings.map((topping, index) => (
                    <li key={`${item.id}-topping-${topping.id}-${index}`}>
                      {topping.name} x {topping.quantity}개 ({topping.price}원)
                    </li>
                  ))}
                </ul>
              )}
              <div className="quantity-container">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <input
                  className="quantity-input"
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  min="1"
                />
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* 합계 금액 */}
            <div className="item-total">
              {item.price * item.quantity +
                (item.toppings
                  ? item.toppings.reduce(
                      (sum, topping) => sum + topping.price * topping.quantity,
                      0
                    )
                  : 0)}
              원
            </div>

            {/* 삭제 버튼 */}
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      <div className="total">
        <h3>총액: {totalAmount}원</h3>
      </div>
    </div>
  );
}

export default CartList;