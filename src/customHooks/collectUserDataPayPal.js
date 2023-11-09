import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const collectUserDataPayPal = async (details, redirectHref, depositString) => {
  const createdAt = new Date();
  console.log(createdAt);
  await setDoc(
    doc(db, "paidClientes", createdAt.toString().split(" ").slice(1).join(" ")),
    {
      id: details.payer.payer_id,
      name: details.payer.name,
      email: details.payer.email_address,
      address: details.payer.address,
      createdAt: createdAt,
    },
  );
  window.location.href = redirectHref + depositString;
};

export default collectUserDataPayPal;
