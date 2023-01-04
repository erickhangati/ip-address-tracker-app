import React from "react";

import SearchForm from "./SearchForm";

import styles from "./Search.module.scss";

const Search = ({ getDetails }) => {
  return (
    <section className={styles.search}>
      <h1>IP Address Tracker</h1>

      {/* Render search form passing getDetails function received from props. */}
      <SearchForm getDetails={getDetails} />
    </section>
  );
};

export default Search;
