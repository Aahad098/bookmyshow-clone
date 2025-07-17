import React from "react";
import { Modal, Button } from "react-bootstrap";

const MovieModal = ({ show, handleClose, movie }) => {
  if (!movie) return null;

  // Optional YouTube trailer mapping (based on movie title)
  const trailers = {
    Avatar: "https://www.youtube.com/embed/5PSNL1qE6VY",
    Joker: "https://www.youtube.com/embed/zAGVQLHvwOY",
    "TopGun Maverick": "https://www.youtube.com/embed/giXco2jaZ_4",
    Tiger3: "https://www.youtube.com/embed/vEjTUDjjU6A",
    Jawan: "https://www.youtube.com/embed/MNxbA3T-JnA",
    Beast: "https://www.youtube.com/embed/yWKRiJ2Zf20",
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={movie.image}
          alt={movie.title}
          className="img-fluid rounded mb-3"
        />
        <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
        <p><strong>Price:</strong> {movie.price}</p>

        {/* Embed Trailer if available */}
        {trailers[movie.title] && (
          <div className="ratio ratio-16x9 mb-3">
            <iframe
              src={trailers[movie.title]}
              title={`${movie.title} Trailer`}
              allowFullScreen
            ></iframe>
          </div>
        )}

        <p className="text-muted">
          This is a premium blockbuster experience. Book your tickets now and enjoy in theatres!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button
          variant="danger"
          onClick={() => alert(`Booking confirmed for ${movie.title}!`)}
        >
          Book Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;