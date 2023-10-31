import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopAnimeList = ({ apiUrl }) => {
  const [topAnimeList, setTopAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}/top/anime?limit=12`);
        setTopAnimeList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnimeData();
  }, [apiUrl]);

  return (
    <div className='bg-color-dark'>
      <div className="flex justify-between items-center md:p-4 md:px-8 p-3 text-start">
        <h1 className="text-2xl font-bold text-color-primary ">Paling Populer</h1>
        <Link
          to={``}
          className="md:text-xl text-md border-b-2 border-accent text-color-primary hover:text-color-accent transition-all-ease-in-out duration-300"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 md:px-4 px-2">
      {topAnimeList.map((anime) => (
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
            <h3 className="text-md font-semibold mb-2">{anime.title.slice(0, 40)}</h3>
            <p className="text-sm text-gray-600 absolute bottom-4 left-8">Score: {anime.score}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default TopAnimeList;
