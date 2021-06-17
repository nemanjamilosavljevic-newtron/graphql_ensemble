import React from "react";
import { Book } from "../../gqless";

type Props = {
  book: Book;
};
export function BookDetail({ book }: Props) {
  return (
    <article>
      <h1>Book</h1>
      <ul>
        <li>
          <p>{book.id}</p>
          <p>{book.title}</p>
          <p>{book.size}</p>
          <p>{book.itemsSold}</p>
          <p>{book.coverType}</p>
          <p>{book.numberOfPages}</p>
          <p>{book.releaseYear}</p>
        </li>
      </ul>
    </article>
  );
}
