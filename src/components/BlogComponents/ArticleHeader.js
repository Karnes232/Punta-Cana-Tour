import React from "react";
import { Link } from "gatsby";
import { publicationDate } from "../../utils/editorial";
import { breadcrumbsFor } from "../../data/blog-categories";

export default function ArticleHeader({ post }) {
  const breadcrumbs = breadcrumbsFor(post);
  const date = publicationDate(post.publishedDate);
  return (
    <header className="max-w-5xl mx-5 xl:mx-auto my-8">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2 text-sm">
          {breadcrumbs.map((item, i) => (
            <li key={item.path}>
              {i > 0 && (
                <span aria-hidden="true" className="mr-2">
                  /
                </span>
              )}
              {i === breadcrumbs.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link to={item.path} className="underline">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="font-semibold text-3xl md:text-4xl my-5">{post.title}</h1>
      {date && (
        <p>
          Published:{" "}
          <time dateTime={date}>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            }).format(new Date(date))}
          </time>
        </p>
      )}
    </header>
  );
}
