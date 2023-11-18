import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const collectUserData = async (formData) => {
  const createdAt = new Date();
  const formDataObj = {};
  formData.forEach((value, key) => (formDataObj[key] = value));

  await setDoc(
    doc(
      db,
      "reservationsClientes",
      createdAt.toString().split(" ").slice(1).join(" "),
    ),
    {
      email: formDataObj.email,
      name: formDataObj.name,
      phone: formDataObj.phone,
      hotel: formDataObj.location,
      excursionDate: formDataObj.Date,
      message: formDataObj.additional,
      formInfo: formDataObj,
      createdAt: createdAt,
    },
  );
};

export default collectUserData;
