import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import VIcon from "../assets/V.svg";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          backgroundColor: "#F05023",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <img
          src={VIcon}
          alt="V Icon"
          width="80"
          height="80"
          className="mb-4"
        />
        <h2 className="text-white mb-4">Welcome to VaquerosInTech</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="light" type="submit" className="w-100 mb-3">
            Login
          </Button>
          <Button variant="outline-light" className="w-100">
            Create Account
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;