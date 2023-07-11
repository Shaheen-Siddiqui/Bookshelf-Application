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

      search: "",
    }
  );
  const { allBooks, BookCategoryArray, search } = bookShelfState;

  console.log(search);

  const filteredBooks =
    search.length > 0
      ? allBooks.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase(item.name))
        )
      : allBooks;

  return (
    <BookShelfContext.Provider
      value={{
        allBooks,
        BookCategoryArray,
        dispatchBookshelfState,
        filteredBooks,
      }}
    >
      {children}
    </BookShelfContext.Provider>
  );
};
