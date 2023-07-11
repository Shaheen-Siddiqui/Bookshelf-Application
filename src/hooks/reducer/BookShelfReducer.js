export const bookShelfReducer = (bookShelfState, { type, payload }) => {
  switch (type) {
    case "SELECTED_CATEGORY":
      const { categories, bookId } = payload;
      return {
        ...bookShelfState,
        allBooks: bookShelfState.allBooks.map((value) =>
          value.id === bookId ? { ...value, category: categories } : value
        ),
      };
    case "SEARCH":
      return {
        ...bookShelfState,
        searchedSBooks: bookShelfState.allBooks.filter((book) =>
          book.name.toLowerCase().includes(payload.toLowerCase(book.name))
        ),
      };

    default:
      break;
  }
};
