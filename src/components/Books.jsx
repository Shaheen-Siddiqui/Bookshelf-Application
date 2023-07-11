import { useState } from "react";
import { BookCantrolar } from "./BookCantrolar";

export const Books = (bookies) => {
  const { name, author, category, imageUrl, id } = bookies;
  const [isControllerOpen, setIsControllerOpen] = useState(false);

  return (
    <div className="card">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={name}
        style={{ height: "10rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{author}</p>

        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setIsControllerOpen(!isControllerOpen)}
        >
          Cantrol from here
        </button>

        {isControllerOpen && (
          <BookCantrolar bookCategory={category} bookId={id} setIsControllerOpen={setIsControllerOpen} />
        )}
      </div>
    </div>
  );
};
