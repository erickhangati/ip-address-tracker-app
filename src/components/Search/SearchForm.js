import React, { useRef } from "react";

import IconArrow from "../../icons/IconArrow";

import styles from "./SearchForm.module.scss";

const SearchForm = ({ getDetails }) => {
  const searchInput = useRef();

  const searchHandler = (searchInput) => (e) => {
    e.preventDefault();
    // Get search input value.
    const search = searchInput.current.value;

    // Execute getDetails function to fetch IP data.
    getDetails(search);
  };

  return (
    <form className={styles.form} onSubmit={searchHandler(searchInput)}>
      <input
        type="text"
        ref={searchInput}
        placeholder="Search for any IP address..."
      />
      <button type="submit">
        <IconArrow />
      </button>
    </form>
  );
};

export default SearchForm;
