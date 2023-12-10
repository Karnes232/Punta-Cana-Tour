import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
const collectUserDataTravelAgent = async (
  details,
  redirectHref,
  depositString,
  amount,
  formData,
  clearCart,
) => {
  const createdAt = new Date();
  const id = uuidv4();
  const name = formData["Tour Rep"];
  await setDoc(doc(db, "travelAgent", id), {
    id: id,
    tourRep: formData["Tour Rep"],
    email: details.payer.email_address,
    address: details.payer.address,
    deposit: details.purchase_units[0].amount.value,
    totalPrice: amount,
    formData: formData,
    createdAt: createdAt,
  });
  clearCart();
  window.location.href = `https://puntacanatourstore.com/travelagent/contact/thankyou/?name=${name}`;
};

export default collectUserDataTravelAgent;
