import React from 'react';

const Notification = ({ message }) => {
  return (
    <div className="position-fixed bottom-0 end-0 m-4 z-3 animate__animated animate__slideInUp">
      <div className="bg-warning text-dark px-4 py-3 rounded-pill shadow-lg fw-bold d-flex align-items-center">
        <i className="bi bi-check-circle-fill me-2 fs-5"></i>
        {message}
      </div>
    </div>
  );
};

export default Notification;