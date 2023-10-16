import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useAppContext } from "./context/AppContext";

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeCartItem, decreaseCartItemAmount, increaseCartItemAmount } =
    useAppContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeCartItem(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => increaseCartItemAmount(id)}
        >
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => decreaseCartItemAmount(id)}
        >
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
