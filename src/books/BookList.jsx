import Book from "./Book";
import { useState } from "react";

function BookList() {

    const [books, setBooks] = useState(
        [{
            title: "The Lord Of The Rings",
            author: "J R R Tolkien"
        }, {
            title: "The Hobbit",
            author: "J R R Tolkien"
        }]
    );

    function addBook(book) {
        setBooks([...books, book]);
    }

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");


    return (
        <div className="table-responsive">
              <form onSubmit={(e) => {
                  e.preventDefault();
                  addBook({ title, author });
                  setTitle("");
                  setAuthor("");
              }}>
		Title:<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
		Author:<input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      	<button type="submit" className="btn btn-primary" >Add Book</button>
	</form>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(function (item, i) {
                            return <Book author={item.author} title={item.title} key={i} />;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BookList;