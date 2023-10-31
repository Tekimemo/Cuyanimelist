import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarker,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="text-center m-2 bg-color-dark rounded-2xl w-63 h-38 p-2 flex justify-start items-center flex-col">
      <h4 className="text-lg font-semibold text-color-accent">Tentang Kami</h4>
      <p className="text-color-accent">
        Kami adalah tim yang bersemangat tentang dunia peranimean dan juga manga
        di indonesia.
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="text-center m-2 bg-color-dark rounded-2xl w-63 h-38 p-2 flex justify-start items-center flex-col">
      <h4 className="text-xl font-semibold mb-2 text-color-accent">
        Hubungi Kami
      </h4>
      <div className="flex items-center justify-center ">
        <FaEnvelope className="mr-2 text-color-accent" />
        <a href="mailto:teki@filmmovie.com" className="text-color-accent">
          teki@filmmovie.com
        </a>
      </div>
      <div className="flex items-center justify-center ">
        <FaPhone className="mr-2 text-color-accent" />
        <p className="text-color-accent">0857-1555-9779</p>
      </div>
      <div className="flex items-center justify-center">
        <FaWhatsapp className="mr-2 text-color-accent text-xl" />
        <p className="text-color-accent">0857-1555-9779</p>
      </div>
    </div>
  );
};

const Location = () => {
  return (
    <div className="text-center m-2 bg-color-dark rounded-2xl w-63 h-38 p-2 flex justify-start items-center flex-col">
      <h4 className="text-xl font-semibold mb-2 text-color-accent">
        Lokasi Kami
      </h4>
      <div className="flex items-center justify-center">
        <FaMapMarker className="mr-2 text-color-accent" />
        <p className="text-color-accent">Jl. Menara No.2</p>
      </div>
      <p className="text-color-accent">RT/RW 02/06</p>
      <p className="text-color-accent">Banyumas, Patikraja</p>
    </div>
  );
};

const FollowUs = () => {
  return (
    <div className="text-center m-2 bg-color-dark rounded-2xl w-63 h-38 p-2 flex justify-start items-center flex-col">
      <h4 className="text-lg font-semibold text-color-accent">Ikuti Kami</h4>
      <p className="text-color-accent">
        Ikuti kami di sosial media untuk mendapatkan berita terbaru seputar anime & manga
      </p>
      <ul className="ulia flex my-2">
        <li>
          <a href="..." className="text-color-accent text-xl">
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href="..." className="text-color-accent text-xl">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="..." className="text-color-accent text-xl">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="..." className="text-color-accent text-lg">
            <FaTwitch />
          </a>
        </li>
      </ul>
    </div>
  );
};

const Copyright = () => {
  return (
    <div className="text-center mt-4 font-bold text-color-dark">
      &copy; {new Date().getFullYear()} TekiFilm_Movie. Hak Cipta Dilindungi.
    </div>
  );
};

const FooterComponent = () => {
  return (
    <footer className="bg-color-accent text-black py-8">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          <AboutUs />
          <Contact />
          <Location />
          <FollowUs />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default FooterComponent;
