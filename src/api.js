import axios from 'axios';

const client = axios.create({
baseURL: 'https://api.outsidein.dev/w20DuMY0CHx41MkY8TFfMkGVzUigx3M7',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};

export default api;