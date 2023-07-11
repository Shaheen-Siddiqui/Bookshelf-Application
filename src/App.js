import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { BookListing } from "./pages/BookListing";
import { SearchBooks } from "./pages/SearchBooks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookListing />} />
        <Route path="/search" element={<SearchBooks />} />
        {/* <Route
          path="/question"
          element={
            <Link to="https://www.awesomescreenshot.com/image/41402636?key=821a17f0d833d571786f0b388e3896eb">
              Here
            </Link>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
