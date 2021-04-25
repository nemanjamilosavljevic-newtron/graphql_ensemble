module.exports = {
  updateAuthor: (_, { id, authorUpdateInput }, { mockStore }) => {
    // Get the current state from the store
    const currentAuthor = mockStore.get('Query', 'ROOT', 'author', id);

    // Update the store
    const authorRef = {
      $ref: { key: currentAuthor.$ref.key, typeName: 'Author' },
    };
    mockStore.set(authorRef, 'name', authorUpdateInput.name);

    // Get
    return mockStore.get('Query', 'ROOT', 'author', id);
  },
};
