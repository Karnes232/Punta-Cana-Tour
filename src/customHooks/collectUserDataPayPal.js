import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
const collectUserDataPayPal = async (
  details,
  redirectHref,
  depositString,
  amount,
) => {
  const createdAt = new Date();
  const id = uuidv4();
  await setDoc(doc(db, "paidClientes", id), {
    id: id,
    name: details.payer.name,
    email: details.payer.email_address,
    address: details.payer.address,
    deposit: details.purchase_units[0].amount.value,
    totalPrice: amount,
    createdAt: createdAt,
  });
  window.location.href = redirectHref + depositString;
};

export default collectUserDataPayPal;
