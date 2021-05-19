import React from "react";
import { useQuery } from "./gqless";

function App() {
  const { $state, books, authors } = useQuery();

  return (
    <section>
      <article>
        <h1>Books</h1>
        <ul>
          {$state.isLoading ? (
            <li>Loading ...</li>
          ) : (
            books.map((book) => (
              <li key={book.id || 0}>
                <b style={{ display: "inline-block" }}>{book.title}</b>
              </li>
            ))
          )}
        </ul>
      </article>

      <article>
        <h1>Authors</h1>
        <ul>
          {$state.isLoading ? (
            <li>Loading ...</li>
          ) : (
            authors.map((author) => (
              <li key={author.id || 0}>
                <b style={{ width: 180, display: "inline-block" }}>
                  {author.name}
                </b>
                <ul>
                  {author.books.map((book) => (
                    <li key={book.id || 0}>{book.title}</li>
                  ))}
                </ul>
              </li>
            ))
          )}
        </ul>
      </article>
    </section>
  );
}

export default App;
