import React from "react";
import { Author } from "../../gqless";

type Props = {
  authors: Author[];
};
export function Authors({ authors }: Props) {
  return (
    <article>
      <h1>Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id || 0}>
            <b style={{ width: 180, display: "inline-block" }}>{author.name}</b>
            <ul>
              {author.books?.map((book) => (
                <li key={book.id || 0}>{book.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}
