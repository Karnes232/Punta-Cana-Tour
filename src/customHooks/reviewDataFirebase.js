import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";

const reviewDataFirebase = async (
  formData,
  userEmail,
  userName,
  userPhoto,
  redirectHref,
  imageArray = [],
) => {
  const createdAt = new Date();
  const id = uuidv4();
  let reviewCollectionName = `reviews-${formData.tourUrl}`;
  let reviewCollectionImages = `reviews-${formData.tourUrl}-Images`;
  let overAllRating =
    (formData.qualityOfService +
      formData.responsiveness +
      formData.professionalism +
      formData.value +
      formData.flexibility) /
    5;

  if (imageArray.length > 0) {
    await setDoc(doc(db, reviewCollectionImages, id), {
      id: id,
      createdAt: createdAt,
      ImagesUrl: imageArray,
    });
  }
  console.log(imageArray);
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
    overAllRating: overAllRating,
    title: formData.title,
    description: formData.description,
    ImagesUrl: imageArray,
  });
  window.location.href = redirectHref;
};

export default reviewDataFirebase;
