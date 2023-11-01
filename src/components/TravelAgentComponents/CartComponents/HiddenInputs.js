import React, { useContext, useEffect, useState } from "react";
import { TravelAgentCartContext } from "../../../context/travelAgentCart";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const HiddenInputs = () => {
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

  return (
    <div className="hidden">
      <input
        type="hidden"
        name="Tour 1"
        value={`- ` + cartItems[0]?.name || "None"}
      />
      <input
        type="hidden"
        name="Pax 1"
        value={`- ` + cartItems[0]?.quantity || 0}
      />
      <input
        type="hidden"
        name="Tour 2"
        value={`- ` + cartItems[1]?.name || "None"}
      />
      <input
        type="hidden"
        name="Pax 2"
        value={`- ` + cartItems[1]?.quantity || 0}
      />
      <input
        type="hidden"
        name="Tour 3"
        value={`- ` + cartItems[2]?.name || "None"}
      />
      <input
        type="hidden"
        name="Pax 3"
        value={`- ` + cartItems[2]?.quantity || 0}
      />
      <input
        type="hidden"
        name="Tour 4"
        value={`- ` + cartItems[3]?.name || "None"}
      />
      <input
        type="hidden"
        name="Pax 4"
        value={`- ` + cartItems[3]?.quantity || 0}
      />
      <input type="hidden" name="Tour Rep" value={user.name} />
    </div>
  );
};

export default HiddenInputs;
