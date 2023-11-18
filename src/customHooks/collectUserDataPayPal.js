import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
const collectUserDataPayPal = async (details, redirectHref, depositString) => {
  const createdAt = new Date();

  await setDoc(doc(db, "paidClientes", uuidv4()), {
    id: details.payer.payer_id,
    name: details.payer.name,
    email: details.payer.email_address,
    address: details.payer.address,
    createdAt: createdAt,
  });
  window.location.href = redirectHref + depositString;
};

export default collectUserDataPayPal;
