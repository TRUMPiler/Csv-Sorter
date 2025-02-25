import axios from 'axios';

// Create an axios instance with default configurations
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Django backend URL
});

// Function to upload a CSV file
export const uploadCSV = (file: File): Promise<any> => {
    const formData = new FormData();
    formData.append('file', file);

    return API.post('/upload/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
