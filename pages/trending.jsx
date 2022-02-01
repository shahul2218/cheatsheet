import axios from "axios";
import { useState, useEffect } from "react";
import SinglePost from "../components/SinglePost";

const Movies = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(`{process.env.apiKey}`);
    console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="text-center py-16">
        <h1 className="sm:text-3xl text-2xl font-semibold text-center title-font capitalize text-gray-900 mb-4">
          all movies - movies and flims page
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
          pug.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
        {content &&
          content.map((c) => {
            return (
              <SinglePost
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                votes={c.vote_average}
                date={c.release_date}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Movies;
