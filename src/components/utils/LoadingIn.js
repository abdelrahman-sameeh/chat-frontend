import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingIn = () => {
  return (
    <div style={{backgroundColor: '#00000096', zIndex: 55555, left: '0', top: '0'}} className="loading position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
      <Spinner variant="light" animation="border" />
    </div>
  );
};

export default LoadingIn;
