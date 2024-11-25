let books = [];

function addBook() {
    const book = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pagesNumber =parseInt(document.getElementById("pagesNumber").value);
    console.log(book);
    console.log(authorName);
    console.log(bookDescription);
    console.log(pagesNumber);

    if(book && authorName && bookDescription && !isNaN(pagesNumber)) {
        const newbook = {
            bookName: book,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber,
        }
        books.push(newbook);
        showbooks();
        console.log(books);
        clearBooks();
    }
}
function showbooks() {
    const showbookshtml = books.map((book,index) =>
        `<h1>Book Number : ${index+1}</h1>
        <p>Book Name : ${book.bookName}</p>
        <p>Book AuthorName : ${book.authorName}</p>
        <p>Book Description : ${book.bookDescription}</p>
        <p>Page Number : ${book.pagesNumber}</p>`
    );
    document.getElementById('books').innerHTML = showbookshtml.join('');
}

function clearBooks() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

