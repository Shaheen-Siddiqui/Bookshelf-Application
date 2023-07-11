import { useContext } from "react";
import { BookShelfContext } from "../hooks/context/BookShelfContext";
import { Books } from "../components/Books";
import { useNavigate } from "react-router-dom";

export const BookListing = ({ notShow }) => {
  const { BookCategoryArray, filteredBooks } =
    useContext(BookShelfContext);
  const navigate = useNavigate();

  return (
    <>
      {!notShow && (
        <button
          onClick={() => navigate("/search")}
          className="btn btn-secondary container mt-2"
        >
          <h4>want to search?</h4>
        </button>
      )}
      {BookCategoryArray.map((genre, index) => {
        return (
          <div key={index}>
            <h1 className="genre-margin">{genre}</h1>
            <center className="flex-case">
              {filteredBooks
                .filter((item) => item.category === genre)
                .map((bookies, index) => {
                  return <Books key={index} {...bookies} />;
                })}
            </center>
          </div>
        );
      })}
    </>
  );
};
