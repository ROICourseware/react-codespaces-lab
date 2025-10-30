function Book({title , author, showBook, bookId}) {

    return (
        <tr>
            <td>
               <a href="#" onClick={() => showBook(bookId)}>{title}</a>
            </td>
            <td>{author}</td>
        </tr>
    );
  }
  
  export default Book;