import React from "react";
import Step from "./Step";

const WhoWhatWhyComponent = ({ data }) => {
  return (
    <div className="my-5 flex flex-col justify-center lg:justify-around items-center lg:max-w-6xl lg:mx-auto">
      <Step
        title={data.faqsTitle1}
        description={data.faqsDescription1.faqsDescription1}
        image={data.faqsIcon1.gatsbyImage}
      />
      <Step
        title={data.faqsTitle2}
        description={data.faqDescription2.faqDescription2}
        image={data.faqsIcon2.gatsbyImage}
      />
      <Step
        title={data.faqsTitle3}
        description={data.faqDescription3.faqDescription3}
        image={data.faqsIcon3.gatsbyImage}
      />
    </div>
  );
};

export default WhoWhatWhyComponent;
