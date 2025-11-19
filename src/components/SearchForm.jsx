import React from 'react';

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) return;
    console.log(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="form-input search-input" type="text" name="search" placeholder="cat"></input>
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
