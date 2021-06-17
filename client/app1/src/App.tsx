import React from "react";
import { useQuery } from "./gqless";
import { Books } from "./components/Books/Books";
import { Authors } from "./components/Authors/Authors";
import { BookDetail } from "./components/BookDetail/BookDetail";

function App() {
  const { $state, books, book, authors } = useQuery();

  const bookDetail = book({ id: "1" });
  return (
    <section>
      {$state.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <BookDetail book={bookDetail} />
          <Books books={books} />
          <Authors authors={authors} />
        </>
      )}
    </section>
  );
}

export default App;
