import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
const collectUserDataTransfer = async (details, formDataObj, redirectHref) => {
  const createdAt = new Date();
  const id = uuidv4();
  await setDoc(doc(db, "transferClientes", id), {
    id: id,
    name: details.payer.name,
    email: details.payer.email_address,
    address: details.payer.address,
    amount: details.purchase_units[0].amount.value,
    formData: formDataObj,
    createdAt: createdAt,
  });
  window.location.href = redirectHref;
};

export default collectUserDataTransfer;
