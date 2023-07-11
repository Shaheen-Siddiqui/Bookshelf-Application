export const bookShelfReducer = (bookShelfState, { type, payload }) => {
  switch (type) {
    case "SELECTED_CATEGORY":
      const { categories, bookId } = payload;
      return {
        ...bookShelfState,
        allBooks: bookShelfState.allBooks.map((value) =>
          value.id == bookId ? { ...value, category: categories } : value
        ),
      };
    case "SEARCH":
      return {
        ...bookShelfState,
        search: payload,
      };

    default:
      break;
  }
};
