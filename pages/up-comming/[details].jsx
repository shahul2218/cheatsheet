// import React from "react";

// export const getStaticPaths = async () => {
//   const req = await fetch(
//     "https://api.themoviedb.org/3/movie/upcoming?api_key=5348e308ac5c456c4e7f76cec211f57a&language=en&region=IN"
//   );
//   const data = await req.json();
//   const paths = data.map((upcoming) => {
//     return {
//       params: { id: upcoming.id.toString() },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(
//     "https://api.themoviedb.org/3/movie/upcoming?api_key=5348e308ac5c456c4e7f76cec211f57a&language=en&region=IN" +
//       id
//   );

//   const data = res.json();
// };

// const upCommingDetailPage = () => {
//   return <div>hello world</div>;
// };

// export default upCommingDetailPage;
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

const detailPage = () => {
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/896737?api_key=5348e308ac5c456c4e7f76cec211f57a&language=en-US`
    );
    setContent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      {content &&
        content.map((c) => {
          return (
            <div key={c.id}>
              <h1>{original_title}</h1>
            </div>
          );
        })}
    </section>
  );
};

export default detailPage;
