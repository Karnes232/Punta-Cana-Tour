import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const collectUserDataPayPal = async (details, redirectHref, depositString) => {
  await setDoc(doc(db, "paidClientes", details.id), {
    id: details.payer.payer_id,
    name: details.payer.name,
    email: details.payer.email_address,
    address: details.payer.address,
  });
  window.location.href = redirectHref + depositString;
};

export default collectUserDataPayPal;
