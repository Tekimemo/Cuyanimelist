import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaBars } from "react-icons/fa";

const AnimeDetails = () => {
  const { mal_id } = useParams();
  const [animeDetail, setAnimeDetail] = useState(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${mal_id}`
        );
        setAnimeDetail(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAnimeData();
  }, [mal_id]);

  if (animeDetail === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-wrapper flex flex-row bg-color-primary xl:w-2/3 lg:w-3/4 md:w-4/5 sm:w-4/5 w-5/6 p-6 my-20 rounded-lg">
        <img
          src={animeDetail.images.jpg.image_url}
          alt=""
          className="w-48 h-72 object-cover rounded-md mr-6"
        />
        <div className="detail-text p-2">
          <div className="text-3xl font-bold mb-2">{animeDetail.title}</div>
          <div className="flex items-center">
            <FaBars className="text-sm pb-0.5 mr-1" />
            <div className="text-sm mr-1">{animeDetail.episodes} Episodes</div>
            <div className="text-sm bg-color-accent rounded-md p-0.5 font-bold">
              {animeDetail.status}
            </div>
          </div>
          <div>Duration : {animeDetail.duration}</div>
          <div>Score : {animeDetail.score}</div>
          <div>Favorites : {animeDetail.favorites}</div>
          <a
            href={animeDetail.trailer.embed_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-color-dark text-color-accent text-sm font-bold rounded-3xl px-3 py-2 my-3 shadow-2xl">
              Tonton Sekarang
            </button>
          </a>
          <div>Synopsis : {animeDetail.synopsis.slice(0, 200)}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
