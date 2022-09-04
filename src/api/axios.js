import axios from "axios";

export const api = axios.create({
    baseURL: 'https://catfact.ninja',
})

/**
 * 
 * @param {*} page 
 * @param {*} options 
 * @returns all fact cats
 * keep in mind that the max length is set manually to 140 chars
 */
export const fetchCatFacts = async (page, options = {}) => {
    const response = await api.get(`/facts?page=${page}&limit=30&max_length=140`, options)

    return response.data
}