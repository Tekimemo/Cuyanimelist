import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const NavbarComponent = ({ keyword }) => {
  const searchRef = useRef();
  const router = useNavigate();

  const handleSearch = () => {
    keyword = searchRef.current.value;
    if (keyword === "") {
      router("/");
    } else {
      router(`/search?q=${keyword}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="bg-color-accent px-4">
      <div className="flex sm:flex-row flex-col justify-between p-4 gap-2">
        <Link to={"/"} className="font-bold text-color-dark text-3xl">
          CuyAnime.list
        </Link>
        <div className="relative">
          <input
            ref={searchRef}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Cari Anime..."
            className="p-2 rounded-lg w-full"
          />
          <button className="absolute top-2.5 right-2" onClick={handleSearch}>
            <MagnifyingGlass size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
