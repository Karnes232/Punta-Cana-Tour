import React, { useContext, useEffect, useState } from "react";
import { TravelAgentCartContext } from "../../../context/travelAgentCart";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const HiddenInputs = ({ formData, setFormData }) => {
  const [user, setUser] = useState({});
  const { cartItems } = useContext(TravelAgentCartContext);
  const findUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
  };
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        findUser(currentUser.uid);
        // setLoggedIn(true);
      }
    });
  }, []);

  const handleChange = ({ target }) => {
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
        value={`- ` + formData.PickUp1 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Date2"
        value={`- ` + formData.Date1 || 0}
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
        value={`- ` + formData.PickUp1 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Date3"
        value={`- ` + formData.Date1 || 0}
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
        value={`- ` + formData.PickUp1 || 0}
        onChange={handleChange}
      />
      <input
        type="hidden"
        name="Date4"
        value={`- ` + formData.Date1 || 0}
        onChange={handleChange}
      />
      <input type="hidden" name="Tour Rep" value={user.name} />
    </div>
  );
};

export default HiddenInputs;
