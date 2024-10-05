import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";

const reviewDataFirebase = async (
  formData,
  userEmail,
  userName,
  userPhoto,
  redirectHref,
) => {
  const createdAt = new Date();
  const id = uuidv4();
  let reviewCollectionName = `reviews-${formData.tourUrl}`;
  await setDoc(doc(db, reviewCollectionName, id), {
    id: id,
    createdAt: createdAt,
    name: userName,
    email: userEmail,
    photoUrl: userPhoto,
    tour: formData.tour,
    tourUrl: formData.tourUrl,
    recommend: formData.recommend,
    qualityOfService: formData.qualityOfService,
    responsiveness: formData.responsiveness,
    professionalism: formData.professionalism,
    value: formData.value,
    flexibility: formData.flexibility,
    title: formData.title,
    description: formData.description,
  });
  window.location.href = redirectHref;
};

export default reviewDataFirebase;
