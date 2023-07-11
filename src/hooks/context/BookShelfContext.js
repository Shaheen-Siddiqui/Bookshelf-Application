import { createContext, useReducer } from "react";
import { bookShelfReducer } from "../reducer/BookShelfReducer";
import { BookBazar } from "../../BookBazar";
import { BookCategory } from "../../BookCategories";

export const BookShelfContext = createContext(null);

export const BookShelfContextProvider = ({ children }) => {
  const [bookShelfState, dispatchBookshelfState] = useReducer(
    bookShelfReducer,
    {
      allBooks: BookBazar,
      BookCategoryArray: BookCategory,
      searchedSBooks: BookBazar,
    }
  );
  const { allBooks, BookCategoryArray, searchedSBooks } = bookShelfState;

  return (
    <BookShelfContext.Provider
      value={{
        allBooks,
        BookCategoryArray,
        dispatchBookshelfState,
        searchedSBooks,
      }}
    >
      {children}
    </BookShelfContext.Provider>
  );
};
