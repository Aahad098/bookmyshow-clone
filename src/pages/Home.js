import React, { useState } from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import MovieModal from "../components/MovieModal";


const movies = [
  {
    id: 1,
    title: "Animal",
    image: "/images/animal.jpg"
  },
  {
    id: 2,
    title: "Kgf 2",
    image: "/images/kgf2.jpg"
  },
  {
    id: 3,
    title: "Pushpa 2",
    image: "/images/pushpa2.jpg"
  },
  {
    id: 4,
    title: "War 2",
    image: "/images/war2.jpg"
  },
  {
    id: 5,
    title: "Salaar",
    image: "/images/salaar.jpg"
  },
  {
    id: 6,
    title: "Stree 2",
    image: "/images/stree2.jpg"
  },
];


const banners = [
  "/images/sequel.jpg",
  "/images/upcoming.avif",
  "/images/sitare.jpg",
];

const premiumMovies = [
  {
    id: 101,
    title: "Avatar",
    image: "/images/preavatar.jpg",
    rating: 9.2,
    price: "₹299",
  },
  {
    id: 102,
    title: "Joker",
    image: "/images/prejoker.jpg",
    rating: 8.4,
    price: "₹249",
  },
  {
    id: 103,
    title: "TopGun Maverick",
    image: "/images/pregun.jpg",
    rating: 8.8,
    price: "₹279",
  },
  {
    id: 104,
    title: "Tiger3",
    image: "/images/pretiger3.jpg",
    rating: 7.8,
    price: "₹239",
  },
  {
    id: 105,
    title: "Jawan",
    image: "/images/prejawan.jpg",
    rating: 9.2,
    price: "₹299",
  },
  {
    id: 106,
    title: "Beast",
    image: "/images/prebeast.jpg",
    rating: 5.8,
    price: "₹219",
  },
];

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const trendingSearches = [
  "Kalki 2898 AD",
  "Animal",
  "SRK",
  "Salaar",
  "Pushpa 2",
  "Dunki",
  "Kgf 2",
  "Jawan",
  "Tiger 3",
];

  return (
    <div className="home bg-dark text-light">
      {/* Carousel Banner */}
      <Carousel fade className="mb-4" data-aos="fade-up" data-aos-duration="1000">
        {banners.map((src, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={src}
              alt={`Banner ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Movie Section */}
      <div className="container pb-4">
        <h3 className="section-title mb-3" data-aos="fade-right">Recommended Movies</h3>
        <div className="scrolling-wrapper d-flex flex-nowrap overflow-auto">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="card movie-card text-white bg-black mx-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body p-2">
                <h5 className="card-title mb-0" style={{ fontSize: "1rem" }}>
                  {movie.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="container my-4" data-aos="fade-up">
        <img
          src="/images/marvel.jpg"
          alt="Promo Banner"
          className="promo-img w-100 rounded"
        />
      </div>

      {/* Premium Section */}
      <div className="container my-5">
        <h3 className="section-title mb-3 text-warning" data-aos="fade-right">
          ⭐ Premium Picks
        </h3>
        <div className="scrolling-wrapper d-flex flex-nowrap overflow-auto">
          {premiumMovies.map((movie) => (
            <div
              key={movie.id}
              className="card movie-card text-white bg-black mx-2"
              data-aos="zoom-in"
              data-aos-delay="100"
              onClick={() => openModal(movie)}
              style={{ cursor: "pointer" }}
            >
              <div className="position-relative">
                <img
                  src={movie.image}
                  className="card-img-top"
                  alt={movie.title}
                />
                <span className="badge premium-badge position-absolute top-0 start-0 m-2">
                  👑 Premium
                </span>
              </div>
              <div className="card-body p-2">
                <h5 className="card-title mb-1" style={{ fontSize: "1rem" }}>
                  {movie.title}
                </h5>
                <div className="d-flex justify-content-between align-items-center small">
                  <span className="text-warning">★ {movie.rating}</span>
                  <span className="text-light">{movie.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Movie Modal */}
      <MovieModal
        show={showModal}
        handleClose={closeModal}
        movie={selectedMovie}
      />

      {/* 🔍 Trending Searches Section */}
<div className="container my-5">
  <h3 className="section-title mb-3 text-danger" data-aos="fade-right">
    🔥 Trending Searches
  </h3>
  <div className="d-flex flex-wrap gap-2" data-aos="fade-up">
    {[
      "Animal",
      "Pushpa 2",
      "K.G.F 2",
      "Salaar",
      "Stree 2",
      "Jawan",
      "Tiger 3",
      "TopGun",
      "Joker",
      "Avatar",
    ].map((item, index) => (
      <span
        key={index}
        className="badge rounded-pill bg-light text-dark px-3 py-2 border"
        style={{ fontSize: "1rem", cursor: "pointer", transition: "0.3s" }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        🔎 {item}
      </span>
    ))}
  </div>
</div>


{/* Footer Section */}
<footer className="bg-black text-light mt-5 pt-4 pb-2 border-top">
  <div className="container">
    <div className="row text-center text-md-start">
      {/* About */}
      <div className="col-md-4 mb-3" data-aos="fade-up">
        <h5 className="text-danger">About BookMyShow</h5>
        <p style={{ fontSize: "0.9rem" }}>
          This is a React-based clone of the BookMyShow platform, showcasing
          ticket booking, trailers, trending content, and responsive design.
        </p>
      </div>

      {/* Contact */}
      <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-delay="100">
        <h5 className="text-danger">Contact Us</h5>
        <ul className="list-unstyled" style={{ fontSize: "0.9rem" }}>
          <li>Email: support@clonebms.com</li>
          <li>Phone: +91 99999 12345</li>
          <li>Location: Mumbai, India</li>
        </ul>
      </div>

      {/* Terms */}
      <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-delay="200">
        <h5 className="text-danger">Terms & Policy</h5>
        <ul className="list-unstyled" style={{ fontSize: "0.9rem" }}>
          <li><a href="#" className="text-light text-decoration-none">Terms of Use</a></li>
          <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
          <li><a href="#" className="text-light text-decoration-none">Refund Policy</a></li>
        </ul>
      </div>
    </div>

    <hr className="bg-secondary" />

    <div className="text-center" style={{ fontSize: "0.85rem" }}>
      &copy; {new Date().getFullYear()} BookMyShow Clone. Built with ❤️ using React.
    </div>
  </div>
</footer>


    </div>
  );
};

export default Home;
