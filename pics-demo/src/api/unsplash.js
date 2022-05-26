import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID OQhAxWjxP1_Jx_kGZIb34KCJQ4dCQaz4bMYbSbTa9zQ',
  },
});
