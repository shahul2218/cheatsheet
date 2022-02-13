import axios from "axios";
import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import { popular } from "../src/Home";

const MainPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="text-center py-16">
          <h1 className="sm:text-3xl text-2xl font-semibold text-center title-font capitalize text-gray-900 mb-4">
            all trending movies
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {popular.map((c) => {
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
    </>
  );
};

export default MainPage;
