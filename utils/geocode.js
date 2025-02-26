import axios from 'axios';

const API_KEY = "67bf443947349441064986ojrc2f3d4";

export async function getCoordinates(address) {
    try {
        const response = await axios.get(`https://geocode.maps.co/search?q=${address}&api_key=${API_KEY}`);
        return { status: 'OK', data: response.data };
    } catch (error) {
        return { status: 'ERROR' };
    }
}