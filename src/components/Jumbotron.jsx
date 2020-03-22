import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="jumbotron bg-secondary mb-1 pb-1"
      style={{ textAlign: "center" }}
    >
      <h1 className="display-4 text-light" style={{ fontWeight: "bold" }}>
        COVID-19 STATS!
      </h1>
      <hr className="my-3" />
      <p className="lead text-light" style={{ fontWeight: "bold" }}>
        The countrywise latest tabular data. Updated three times a day.
      </p>
    </div>
  );
};

export default Jumbotron;
