import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const SignInModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert(`Welcome, ${email.split("@")[0]}!`);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSignIn}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button type="submit" variant="danger">Sign In</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default SignInModal;