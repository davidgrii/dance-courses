import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_KAJABI_API_KEY
const API_URL = 'http://localhost:3000';

export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching courses', error);
    throw error;
  }
};