module.exports = {
  updateAuthor: (_, { id, authorUpdateInput }, { mockStore }) => {
    console.log('input', id, authorUpdateInput);
    const authorRef = mockStore.get('Query', 'ROOT', 'author', id);

    const ref = {
      $ref: { key: authorRef.$ref.key, typeName: 'Author' },
    };
    mockStore.set(ref, 'name', authorUpdateInput.name);

    const updatedAuthorRef = mockStore.get('Query', 'ROOT', 'author', id);
    console.log('store', updatedAuthorRef, mockStore.get(updatedAuthorRef, 'name'));
    return updatedAuthorRef;
  },
};
