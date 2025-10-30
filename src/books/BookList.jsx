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


    return (
        <div className="table-responsive">
        	<button type="button" className="btn btn-primary" onClick={() => {
                addBook({ title: "The Silmarillion", author: "J R R Tolkien" });
            }}>Add Book</button>

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