import React, { useContext } from "react";
import { CartContext } from "../../context/cart";

const HiddenInputs = ({ formData, setFormData }) => {
  const { cartItems } = useContext(CartContext);
  const handleChange = ({ target }) => {
    console.log(formData)
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <div className="hidden">
      <input
        type="hidden"
        name="Tour1"
        value={`- ` + cartItems[0]?.name || "None"}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Pax1"
        value={`- ` + cartItems[0]?.quantity || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="PickUpTime1"
        value={`- ` + formData.PickUp1 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Date1"
        value={`- ` + formData.Date1 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Tour2"
        value={`- ` + cartItems[1]?.name || "None"}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Pax2"
        value={`- ` + cartItems[1]?.quantity || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="PickUpTime2"
        value={`- ` + formData.PickUp2 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Date2"
        value={`- ` + formData.Date2 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Tour3"
        value={`- ` + cartItems[2]?.name || "None"}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Pax3"
        value={`- ` + cartItems[2]?.quantity || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="PickUpTime3"
        value={`- ` + formData.PickUp3 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Date3"
        value={`- ` + formData.Date3 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Tour4"
        value={`- ` + cartItems[3]?.name || "None"}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Pax4"
        value={`- ` + cartItems[3]?.quantity || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="PickUpTime4"
        value={`- ` + formData.PickUp4 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Date4"
        value={`- ` + formData.Date4 || 0}
        onChange={handleChange}
      />
    </div>
  );
};

export default HiddenInputs;
