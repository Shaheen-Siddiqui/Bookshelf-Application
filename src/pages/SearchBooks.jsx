import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookListing } from "./BookListing";
import { BookShelfContext } from "../hooks/context/BookShelfContext";

export const SearchBooks = () => {
  const { dispatchBookshelfState } = useContext(BookShelfContext);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const searchHandler = (event) => {
    setSearchText(event.target.value);
    dispatchBookshelfState({
      type: "SEARCH",
      payload: searchText,
    });
  };

  return (
    <>
      <div className="input-group mb-3">
        <button
          onClick={() => navigate("/")}
          className="btn btn-outline-dark btn-lg"
        >
          Back
        </button>
        <input
          value={searchText}
          type="search"
          className="form-control mt-2"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={searchHandler}
        />
      </div>
      <BookListing notShow />
    </>
  );
};
