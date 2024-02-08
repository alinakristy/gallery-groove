import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchArt, setSearchArt] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchArt);
    console.log(onSearch);
  };

  return (
    <form className="form-inline m-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for artworks"
          value={searchArt}
          onChange={(e) => setSearchArt(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;