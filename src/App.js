import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import SearchComponent from "./Components/SearchComponent";
import TopAnimeList from "./Components/TopAnimeList";
import SeasonsAnimeList from "./Components/SeasonsAnimeList";
import AnimeDetails from "./Components/AnimeDetails";
import FooterComponent from "./Components/FooterComponent";

const App = () => {
  const AnimeList = () => {
    return (
      <section>
        <TopAnimeList />
        <SeasonsAnimeList />
      </section>
    );
  };

  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<AnimeList />} />
          <Route path="/top" element={<TopAnimeList />} />
          <Route path="/seasons" element={<SeasonsAnimeList />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/detail/:mal_id" element={<AnimeDetails />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
