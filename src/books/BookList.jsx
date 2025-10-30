import Book from "./Book";
import { useEffect, useState } from "react";
import * as api from '../api';
import Modal from '../utilities/Modal';
import ReviewList from "../reviews/ReviewList";

function BookList() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({});
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState('');


    async function getBooks() {
        const books = await api.fetchAllBooks();
        setBooks(books);
    }

    useEffect(() => {
        getBooks();
    }, []);

    async function getReviews(bookId) {
        const reviews = await api.fetchReviews(bookId);
        setReviews(reviews);
    }

    function showBook(bookId) {
        setBook(books.find(book => book.id === bookId));
        getReviews(bookId);
        openModal();
    }

    async function createReview(e) {
        e.preventDefault();
        await api.addReview({
            bookId: book.id,
            review: review
        });
        setReview('');
        getReviews(book.id);
    }

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
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={`Reviews for ${book.title}`}
            >
                <div style={{ marginTop: '1rem' }}>
                    <h2>Reviews:</h2>
                    <form className="form-group form-inline" onSubmit={createReview}>
                        <label className="control-label">Review:
                            <input type="text" className="form-control" required
                                value={review} onChange={(e) => setReview(e.target.value)} />
                        </label>
                        <button type="submit" className="btn btn-primary">Add Review</button>
                    </form>
                    <ReviewList reviews={reviews} />
                </div>
            </Modal>
        </div>
    );
}

export default BookList;