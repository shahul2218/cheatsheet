import Image from "next/image";
import Link from "next/link";
import React from "react";
import { img_300, unavailable } from "../src/config/config";

const SinglePost = ({ id, poster, title, votes, date }) => {
  return (
    <div className="morphic-card-flat p-2 my-2 w-auto relative" id={id}>
      <Image
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
        width={300}
        height={400}
      />
        <h2 className="text-emerald-700 font-semibold">{title}</h2>
      <span className="text-pink-500">{date}</span>
      <section className="mt-1 top-2 right-3 absolute">
        <span className={getColor(votes)}>{votes}</span>
      </section>
    </div>
  );
};

export default SinglePost;

function getColor(vote) {
  if (vote > 7) {
    return `text-emerald-800 bg-emerald-300 font-semibold rounded-full px-2`;
  } else if (vote > 4.5) {
    return `text-orange-800 bg-orange-300 font-semibold rounded-full px-2`;
  } else {
    return `text-red-800 bg-red-300 font-semibold rounded-full px-2`;
  }
}
