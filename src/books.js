function findAuthorById(authors, id) {
  const foundAuthor = authors.find(author => author.id === id); // Use find() to search for the park by name
    
  // If no park is found, return null explicitly
  if (!foundAuthor) {
    return null;
  }

  return foundAuthor; // Return the found park if it exists

}

function findBookById(books, id) {
  const foundBook = books.find(book => book.id === id); // Use find() to search for the park by name
    
  // If no park is found, return null explicitly
  if (!foundBook) {
    return null;
  }

  return foundBook; // Return the found park if it exists
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
