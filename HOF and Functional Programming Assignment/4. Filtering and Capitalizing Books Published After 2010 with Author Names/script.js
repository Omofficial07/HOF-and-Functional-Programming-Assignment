// List of books
const books = [
    { title: "Book A", author: "john doe", year: 2005 },
    { title: "Book B", author: "jane smith", year: 2012 },
    { title: "Book C", author: "emily clark", year: 2010 },
    { title: "Book D", author: "mark lee", year: 2018 }
  ];
  
  // Function to capitalize author names
  function capitalizeName(name) {
    return name
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  
  // Filter books published from 2010 onward and capitalize author names
  const filteredBooks = books
    .filter(book => book.year >= 2010) // Filter books published in or after 2010
    .map(book => ({
      ...book,
      author: capitalizeName(book.author) // Capitalize author names
    }));
  
  // Output the resulting array
  console.log("Filtered and Updated Books:", filteredBooks);
  