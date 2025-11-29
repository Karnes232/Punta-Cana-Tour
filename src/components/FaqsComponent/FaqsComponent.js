import React from "react";
import TextComponent from "../TextComponent/TextComponent";

import Question from "./Question";
const FaqsComponent = ({ faqs }) => {
  return (
    <div className="mb-5">
      <TextComponent
        title="Punta Cana FAQS"
        heading="h2"
        className="mt-5 mb-2 text-2xl md:text-3xl"
      />

      <Question question={faqs.question1} answer={faqs.answer1.answer1} />
      <Question question={faqs.question2} answer={faqs.answer2.answer2} />
      <Question question={faqs.question3} answer={faqs.answer3.answer3} />
    </div>
  );
};

export default FaqsComponent;
