import axios from "axios";
import { useState, useEffect } from "react";
import SinglePost from "../../components/SinglePost";

const UpCommingMovies = () => {
  const [hindi, setHindi] = useState([]);
  const fetchHindi = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=5348e308ac5c456c4e7f76cec211f57a&language=en&region=IN&with_original_language=hi`
    );
    setHindi(data.results);
  };

  useEffect(() => {
    fetchHindi();
  }, []);
  const [telugu, setTelugu] = useState([]);
  const fetchTelugu = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=5348e308ac5c456c4e7f76cec211f57a&language=en&region=IN&with_original_language=te`
    );
    setTelugu(data.results);
  };

  useEffect(() => {
    fetchTelugu();
  }, []);
  const [tamil, setTamil] = useState([]);
  const fetchTamil = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=5348e308ac5c456c4e7f76cec211f57a&language=en&region=IN&with_original_language=ta`
    );
    setTamil(data.results);
  };

  useEffect(() => {
    fetchTamil();
  }, []);
  const [english, setEnglish] = useState([]);
  const fetchEnglish = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=5348e308ac5c456c4e7f76cec211f57a&language=en&region=IN&with_original_language=en`
    );
    setEnglish(data.results);
  };

  useEffect(() => {
    fetchEnglish();
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="text-center py-16">
        <h1 className="sm:text-3xl text-2xl font-semibold text-center title-font capitalize text-gray-900 mb-4">
          all upcoming movies
        </h1>
      </div>
      <h2 className="text-green-500 font-semibold text-center text-6xl uppercase">
        hindi
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
        {hindi &&
          hindi.map((c) => {
            return (
              <SinglePost
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.release_date}
              />
            );
          })}
      </div>
      <h2 className="text-green-500 font-semibold text-center text-6xl uppercase">
        telugu
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
        {telugu &&
          telugu.map((c) => {
            return (
              <SinglePost
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.release_date}
              />
            );
          })}
      </div>
      <h2 className="text-green-500 font-semibold text-center text-6xl uppercase">
        tamil
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
        {tamil &&
          tamil.map((c) => {
            return (
              <SinglePost
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.release_date}
              />
            );
          })}
      </div>
      <h2 className="text-green-500 font-semibold text-center text-6xl uppercase">
        english
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
        {english &&
          english.map((c) => {
            return (
              <SinglePost
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.release_date}
              />
            );
          })}
      </div>
    </section>
  );
};

export default UpCommingMovies;
