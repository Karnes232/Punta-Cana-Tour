import React from "react";

const TextComponent = ({
  title,
  heading,
  paragraph,
  className,
  pClassName,
}) => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center max-w-5xl mx-5 lg:p-2 xl:mx-auto">
        {title && heading === "h1" ? (
          <h1
            className={`font-lato tracking-wider font-semibold  ${className}`}
          >
            {title}
          </h1>
        ) : (
          <></>
        )}
        {title && (heading === "h2" || heading === undefined) ? (
          <h2
            className={`font-lato tracking-wider font-semibold  ${className}`}
          >
            {title}
          </h2>
        ) : (
          <></>
        )}
        {heading === "h3" ? (
          <h3
            className={`font-lato tracking-wider font-semibold  ${className}`}
          >
            {title}
          </h3>
        ) : (
          <></>
        )}
        {heading === "h4" ? (
          <h4
            className={`font-lato tracking-wider font-semibold  ${className}`}
          >
            {title}
          </h4>
        ) : (
          <></>
        )}
        {heading === "h5" ? (
          <h5
            className={`font-lato tracking-wider font-semibold  ${className}`}
          >
            {title}
          </h5>
        ) : (
          <></>
        )}
        {heading === "h6" ? (
          <h6
            className={`font-lato tracking-wider font-semibold  ${className}`}
          >
            {title}
          </h6>
        ) : (
          <></>
        )}
        {paragraph ? (
          <p
            className={`font-montserrat lg:text-lg text-gray-700 ${pClassName}`}
            // dangerouslySetInnerHTML={{ __html: paragraph }}
          >
            {paragraph}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TextComponent;
