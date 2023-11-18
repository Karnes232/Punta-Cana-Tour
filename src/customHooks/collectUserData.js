import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
const collectUserData = async (formData) => {
  const createdAt = new Date();
  const formDataObj = {};
  formData.forEach((value, key) => (formDataObj[key] = value));

  await setDoc(doc(db, "reservationsClientes", uuidv4()), {
    email: formDataObj.email,
    name: formDataObj.name,
    phone: formDataObj.phone,
    hotel: formDataObj.location,
    excursionDate: formDataObj.Date,
    message: formDataObj.additional,
    formInfo: formDataObj,
    createdAt: createdAt,
  });
};

export default collectUserData;
