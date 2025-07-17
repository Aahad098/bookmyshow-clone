import React from "react";
import { Modal, Button } from "react-bootstrap";

const LocationModal = ({ show, handleClose, setLocation }) => {
  const cities = ["Mumbai", "Nashik", "Nagpur", "Solapur", "Amritsar", "Pune", "Delhi", "Lucknow", "Bengaluru", "Agra", "Hyderabad"];

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Select Your City</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cities.map((city) => (
          <Button
  key={city}
  variant="light"
  className="w-100 my-2 text-start fade-in-up"
  onClick={() => {
    setLocation(city);
    handleClose();
  }}
>
  {city}
</Button>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default LocationModal;