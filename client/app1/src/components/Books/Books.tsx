import React from "react";
import { Book } from "../../gqless";

type Props = {
  books: Book[];
};
export function Books({ books }: Props) {
  return (
    <article>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id || 0}>
            <b style={{ display: "inline-block" }}>{book.title}</b>
          </li>
        ))}
      </ul>
    </article>
  );
}
