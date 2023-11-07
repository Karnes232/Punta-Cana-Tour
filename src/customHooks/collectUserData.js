import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const collectUserData = async (formData) => {
  const formDataObj = {};
  formData.forEach((value, key) => (formDataObj[key] = value));

  await setDoc(doc(db, "reservationsClientes", formDataObj.email), {
    email: formDataObj.email,
    name: formDataObj.name,
    phone: formDataObj.phone,
    hotel: formDataObj.location,
    excursionDate: formDataObj.Date,
    message: formDataObj.additional,
    formInfo: formDataObj,
  });
};

export default collectUserData;
