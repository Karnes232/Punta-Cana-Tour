import React, { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ReviewPhotoGrid = ({ photos = [] }) => {
  const safePhotos = Array.isArray(photos) ? photos : [];
  const [mainPhoto, ...additionalPhotos] = safePhotos;
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePhotoClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main large photo */}
        <div className="flex-1 shadow-2xl">
          <img
            src={mainPhoto?.url}
            alt="Main review photo"
            className="w-full h-96 object-cover rounded-lg cursor-pointer"
            onClick={() => handlePhotoClick(0)} // Open lightbox for main photo
          />
        </div>

        {/* Right side smaller photos */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 h-96">
            {additionalPhotos.slice(0, 3).map((photo, index) => (
              <img
                key={index}
                src={photo?.url}
                alt={`Review photo ${index + 2}`}
                className="w-full h-[11.5rem] object-cover rounded-lg shadow-2xl cursor-pointer"
                onClick={() => handlePhotoClick(index + 1)} // Open lightbox for additional photos
              />
            ))}
            {additionalPhotos.length > 3 && (
              <div className="relative">
                <img
                  src={additionalPhotos[3]?.url}
                  alt="More photos"
                  className="w-full h-[11.5rem] object-cover rounded-lg brightness-50"
                  onClick={() => handlePhotoClick(4)} // Open lightbox for more photos
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold"
                  onClick={() => handlePhotoClick(4)}
                >
                  <span className="text-3xl">
                    +{additionalPhotos.length - 3}
                  </span>
                  <span className="text-xl">User photos</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox for displaying photos */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[mainPhoto, ...additionalPhotos].map((photo) => ({
          src: photo?.url,
        }))}
        index={currentIndex}
      />
    </div>
  );
};

export default ReviewPhotoGrid;
