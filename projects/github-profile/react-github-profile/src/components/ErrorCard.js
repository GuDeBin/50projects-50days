import React from "react";

export const ErrorCard = ({ msg }) => {
  return (
    <div className="card">
      <h1>{msg}</h1>
    </div>
  );
};
