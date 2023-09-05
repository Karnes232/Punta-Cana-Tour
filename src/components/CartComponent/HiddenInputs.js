import React, { useContext } from "react";
import { CartContext } from "../../context/cart";

const HiddenInputs = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="hidden">
      <input type="hidden" name="Tour 1" value={cartItems[0]?.name} />
      <input type="hidden" name="Pax 1" value={cartItems[0]?.quantity} />
      <input type="hidden" name="Tour 2" value={cartItems[1]?.name} />
      <input type="hidden" name="Pax 2" value={cartItems[1]?.quantity} />
      <input type="hidden" name="Tour 3" value={cartItems[2]?.name} />
      <input type="hidden" name="Pax 3" value={cartItems[2]?.quantity} />
      <input type="hidden" name="Tour 4" value={cartItems[3]?.name} />
      <input type="hidden" name="Pax 4" value={cartItems[3]?.quantity} />
    </div>
  );
};

export default HiddenInputs;
