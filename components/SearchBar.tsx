"use client";

import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";

export default function SearchBar() {
  const [manufaccturer, setManufacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
}
