import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjI1OWY5M2E5MDk0ZGIyZjM1MTQ1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTY5NDQwNSwiZXhwIjoxNjM5OTUzNjA1fQ.qQ50stAvNrxvKND908w4hBTKeF61bqKBH3ZReCJn6SE";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});