import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserAlt, FaChevronDown } from "react-icons/fa";
import LocationModal from "./LocationModal";
import SignInModal from "./SignInModal";
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [location, setLocation] = useState("Mumbai");
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      console.log("Searching for:", query);
      // Later: redirect or fetch results
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-2">
        <div className="container-fluid">
          <Link className="navbar-brand text-danger fw-bold fs-4" to="/">
            BookMyShow Clone
          </Link>

          {/* Location Selector */}
          <div
            className="d-none d-lg-flex align-items-center ms-3 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <span className="text-light me-1 fw-medium">{location}</span>
            <FaChevronDown color="white" size={12} />
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mx-auto d-none d-lg-block w-50">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </form>

          {/* Sign-in */}
          <div className="ms-auto d-flex align-items-center gap-3">
            <button
             className="btn btn-outline-light d-none d-lg-block"
             onClick={() => setShowSignIn(true)}>
          <FaUserAlt className="me-2" /> Sign in
          </button>
            <button className="btn btn-light d-lg-none">☰</button>
          </div>
        </div>
      </nav>

      {/* Bottom Links */}
      <div className="bg-dark border-top border-secondary px-4 py-2">
        <div className="container-fluid d-flex gap-4 text-white small fw-semibold">
          <Link to="/" className="text-decoration-none text-light">Movies</Link>
          <Link to="/" className="text-decoration-none text-light">Events</Link>
          <Link to="/" className="text-decoration-none text-light">Plays</Link>
          <Link to="/" className="text-decoration-none text-light">Sports</Link>
          <Link to="/" className="text-decoration-none text-light">Activities</Link>
        </div>
      </div>

      {/* Location Modal */}
      <LocationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        setLocation={setLocation}
      />
      <SignInModal
  show={showSignIn}
  handleClose={() => setShowSignIn(false)}
/>
    </>
  );
};

export default Header;