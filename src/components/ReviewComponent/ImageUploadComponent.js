import React, { useState } from "react";
import { Description } from "@headlessui/react";
import imageCompression from "browser-image-compression";
const ImageUploadComponent = ({ formData, setFormData }) => {
  const [images, setImages] = useState([]);

  // Function to compress image to WebP format
  const compressImageToWebP = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      fileType: "image/webp", // Convert to WebP
    };
    return await imageCompression(file, options);
  };

  const handleImageUpload = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    const compressedImages = [];

    try {
      for (const file of selectedFiles) {
        const compressedFile = await compressImageToWebP(file);
        const originalName = file.name.split(".").slice(0, -1).join(".");
        const newName = `${originalName}.webp`; // Change the extension to .webp
        const renamedFile = new File(
          [compressedFile], // File data
          newName, // New file name
          { type: compressedFile.type }, // File type (WebP)
        );
        compressedImages.push(renamedFile);
      }
      setImages(compressedImages);
      setFormData({
        ...formData,
        Images: compressedImages,
      });
    } catch (error) {
      console.error("Error compressing images:", error);
    }
  };
  return (
    <div className="lg:max-w-3xl lg:mx-auto space-y-4">
      <Description className="font-bold text-center text-xl">
        Add photos to your review{" "}
        <span className="font-normal text-base text-gray-400">(Optional)</span>
      </Description>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            multiple
          />
        </label>
      </div>
      {images.length > 0 && (
        <div>
          <ul>
            {images.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUploadComponent;
