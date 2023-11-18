import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const collectUserDataTransfer = async (details, formDataObj, redirectHref) => {
  const createdAt = new Date();

  await setDoc(
    doc(
      db,
      "transferClientes",
      createdAt.toString().split(" ").slice(1).join(" "),
    ),
    {
      id: details.payer.payer_id,
      name: details.payer.name,
      email: details.payer.email_address,
      address: details.payer.address,
      amount: details.purchase_units[0].amount.value,
      formData: formDataObj,
      createdAt: createdAt,
    },
  );
  window.location.href = redirectHref;
};

export default collectUserDataTransfer;
