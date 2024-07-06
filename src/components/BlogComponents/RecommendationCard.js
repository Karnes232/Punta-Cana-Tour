import { Link } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const RecommendationCard = ({ blog }) => {
  console.log(blog);
  const image = getImage(blog.backgroundImage[0].gatsbyImage);
  return (
    <>
      <Link to={`/blog/${blog.slug}`}>
        <div className="w-80 mx-auto my-5 rounded-lg overflow-hidden shadow-lg">
          <GatsbyImage
            image={image}
            alt={blog.title}
            className="w-full object-cover object-top h-40"
            imgClassName="object-cover object-top"
            objectPosition="top"
          />
          <div className="px-6 py-4">
            <div className="font-bold h-8 text-base mb-2 flex justify-between">
              <div className="truncate mr-3">{blog.title}</div>
            </div>
            <p className="text-gray-700 h-32 text-sm whitespace-pre-wrap truncate">
              {blog.description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecommendationCard;
