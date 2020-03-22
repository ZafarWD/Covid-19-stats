import React from "react";

const Search = ({ onChange, searchQuery }) => {
  return (
    <React.Fragment>
      <div className="container input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by country name.."
          value={searchQuery}
          onChange={onChange}
          autoFocus
        />
      </div>
    </React.Fragment>
  );
};

export default Search;
