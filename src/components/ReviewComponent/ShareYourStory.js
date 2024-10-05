import React from "react";
import { Description, Input, Textarea } from "@headlessui/react";
const ShareYourStory = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="lg:max-w-3xl lg:mx-auto space-y-4">
      <Description className="font-bold text-center text-xl">
        Share your story!
      </Description>
      <Input
        name="title"
        type="text"
        className="w-full border px-4 py-2 rounded-lg"
        placeholder="Create a title for your review"
        onChange={handleChange}
      />
      <Textarea
        name="description"
        className="w-full h-60 border px-4 py-2 rounded-lg"
        placeholder="How was your experience? We'd love to hear your thoughts!"
        onChange={handleChange}
      ></Textarea>
    </div>
  );
};

export default ShareYourStory;
