import React from "react";
import TextComponent from "../TextComponent/TextComponent";
import Step from "./Step";

const HowItWorks = ({ data }) => {
  return (
    <div>
      <TextComponent
        title="How it Works"
        className="mt-5 mb-2 text-2xl md:text-3xl"
        // pClassName="mb-4 2xl:mb-10"
      />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:max-w-6xl lg:mx-auto">
        <Step
          title={data.step1Title}
          description={data.step1Description.step1Description}
          image={data.step1Image.gatsbyImage}
        />
        <Step
          title={data.step2Title}
          description={data.step2Description.step2Description}
          image={data.step2Image.gatsbyImage}
        />
        <Step
          title={data.step3Title}
          description={data.step3Description.step3Description}
          image={data.step3Image.gatsbyImage}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
