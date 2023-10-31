import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Loading = () => {
  return (
    <h1 className="text-2xl text-color-accent font-bold">Loading brooo ...</h1>
  );
};

const SearchComponent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("q");
  const [isLoading, setIsLoading] = useState(true);
  const [getAnimeByName, setGetAnimeByName] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${keyword}`
        );
        setGetAnimeByName(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    fetchAnimeData();
  }, [keyword]);

  return (
    <div className="bg-color-dark">
      <div className="flex justify-between items-center md:p-4 md:px-8 p-3 text-start">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h1 className="text-2xl font-bold text-color-primary">
              Hasil Pencarian {keyword} . . .
            </h1>
          </>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 md:px-4 px-2">
        {getAnimeByName.map((anime) => (
          <Link
            to={`/detail/${anime.mal_id}`}
            key={anime.mal_id}
            className="animelist-card shadow-lg p-4 border border-color-sw hover:shadow-xl rounded-lg  transition-transform transform hover:-translate-y-1 mb-8 text-color-primary hover:text-color-accent"
          >
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2">
                {anime.title.slice(0, 40)}
              </h3>
              <p className="text-sm text-gray-600 absolute bottom-4 left-8">
                Score: {anime.score}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
