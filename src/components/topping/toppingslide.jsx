import "../../styled/slideTopping.css";
export default function SlideToping({
  item,
  quantityMap,
  handleQuantityChange,
}) {
  console.log("아이템 정보" + item.price);
  return (
    // {/* <h3>토핑 추가</h3> */}
    // {/* <Carousel responsive={responsive}> */}
    <div className="card">
      <img className="product" src={item.imgurl} alt={item.imgurl}></img>
      <h2>{item.name}</h2>
      {item.extraPrice !== undefined ? (
        <p className={`price ${item.hidePrice ? "hidden" : ""}`}>
          {item.extraPrice > 0
            ? `+${item.extraPrice}원`
            : `${item.extraPrice}원`}
        </p>
      ) : (
        <p className={`price ${item.hidePrice ? "hidden" : ""}`}>
          {item.price}원
        </p>
      )}
      {/* </button> */}
      <div className="count-btn">
        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
        <span>{quantityMap[item.id] || 0}</span>
        <button onClick={() => handleQuantityChange(item.id, +1)}>+</button>
      </div>
    </div>
    // {/* </Carousel> */}
  );
}
