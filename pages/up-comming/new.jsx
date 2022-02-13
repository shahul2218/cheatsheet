import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { img_300, unavailable } from "../../src/config/config";

const TestNew = ({ id, poster_path, title, vote_average, release_date }) => {
  const [contentP1, setContentP1] = useState([]);
  const fetchTrendingP1 = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=5348e308ac5c456c4e7f76cec211f57a&language=en&page=1&region=IN`);
    setContentP1( data.results );
    console.log(data.results)
  };
  useEffect(() => {
    fetchTrendingP1();
  }, [] );
  const [contentP2, setContentP2] = useState([]);
  const fetchTrendingP2 = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=5348e308ac5c456c4e7f76cec211f57a&language=en&page=2&region=IN`);
    setContentP2( data.results );
  };
  useEffect(() => {
    fetchTrendingP2();
  }, [] );
  
  return (
    <section className="text-gray-600 body-font">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
        {contentP1 &&
          contentP1.map((c) => {
            return (
              <div className="morphic-card-flat p-2 my-2 w-auto relative" key={ c.id }>
                    <Image src={c.poster_path ? `${img_300}${c.poster_path}` : unavailable} alt={c.title} width={300} height={400} priority/>
                    <h2 className="text-emerald-700 font-semibold">{c.title}</h2>
                    <span className="text-pink-500">{c.release_date}</span>
                    <section className="mt-1 top-2 right-3 absolute">
                      <span className={getColor(c.vote_average)}>{c.vote_average}</span>
                </section>
                
              </div>
            );
          } ) }
        {contentP2 &&
          contentP2.map((c) => {
            return (
              <div className="morphic-card-flat p-2 my-2 w-auto relative" key={ c.id }>
                    <Image src={c.poster_path ? `${img_300}${c.poster_path}` : unavailable} alt={c.title} width={300} height={400} priority/>
                    <h2 className="text-emerald-700 font-semibold">{c.title}</h2>
                    <span className="text-pink-500">{c.release_date}</span>
                    <section className="mt-1 top-2 right-3 absolute">
                      <span className={getColor(c.vote_average)}>{c.vote_average}</span>
                </section>
                
              </div>
            );
          } ) }
      </div>
    </section>
  )
}

export default TestNew;

function getColor(vote) {
  if (vote > 7) {
    return `text-emerald-800 bg-emerald-300 font-semibold rounded-full px-2`;
  } else if (vote > 4.5) {
    return `text-orange-800 bg-orange-300 font-semibold rounded-full px-2`;
  } else {
    return `text-red-800 bg-red-300 font-semibold rounded-full px-2`;
  }
}