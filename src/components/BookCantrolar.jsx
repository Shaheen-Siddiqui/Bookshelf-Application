import { useContext } from "react";
import { BookShelfContext } from "../hooks/context/BookShelfContext";

export const BookCantrolar = ({
  bookCategory,
  bookId,
  setIsControllerOpen,
}) => {
  const { BookCategoryArray, dispatchBookshelfState } =
    useContext(BookShelfContext);

  return (
    <div className="list-group">
      {[...BookCategoryArray,"none"].map((categories, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              dispatchBookshelfState({
                type: "SELECTED_CATEGORY",
                payload: { categories, bookId },
              });
              setIsControllerOpen(false);
            }}
            className="list-group-item"
            id={bookCategory == categories ? "list-color" : "point"}
          >
            {categories}
          </li>
        );
      })}
    </div>
  );
};
