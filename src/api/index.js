import axios from "axios";

const url = "https://api-748767445624.us-central1.run.app/api/bookreactions";

const headers = {
    accept: 'application/json',
    'content-type': 'application/json'
};

export const fetchAllBooks = async () => {
    const response = await axios.get(`${url}/books`);
    return response.data;
}

export const fetchReviews = async (bookId) => {
    const response = await axios.get(`${url}/reviews`);
    const filteredReviews = response.data.filter(review => review.bookId === bookId);
    return filteredReviews;
}

export const addReview = async (review) => {
    return await axios.post(`${url}/reviews`, review, headers);
}
