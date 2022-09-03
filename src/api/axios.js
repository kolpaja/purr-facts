import axios from "axios";

export const api = axios.create({
    baseURL: 'https://catfact.ninja',
})

export const fetchCatFacts = async (page, options = {}) => {
    const response = await api.get(`/facts?page=${page}&limit=20&max_length=140`, options)

    return response.data
}