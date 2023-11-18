import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
const collectUserData = async (formData) => {
  const createdAt = new Date();
  const formDataObj = {};
  formData.forEach((value, key) => (formDataObj[key] = value));
  const id = uuidv4();
  await setDoc(doc(db, "reservationsClientes", id), {
    id: id,
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
