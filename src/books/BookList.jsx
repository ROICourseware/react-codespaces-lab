import Book from "./Book";
import { useState } from "react";
import Modal from '../utilities/Modal';

function BookList() {

    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({});
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState('');


    return (
        <div className="table-responsive">
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
                            return <Book author={item.author} title={item.title} bookId={item.id} showBook={showBook} key={i} />;
                        })
                    }
                </tbody>
            </table>
            <Modal>
                <div style={{ marginTop: '1rem' }}>
                    <h2>Reviews:</h2>

                </div>
            </Modal>
        </div>
    );
}

export default BookList;