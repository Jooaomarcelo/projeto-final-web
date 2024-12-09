import axios from "axios";

export default async function useAvatar(seed) {
    try {
        const response = await axios.get(`https://api.dicebear.com/9.x/bottts/svg?seed=${seed}`);
        return response.data;
    } catch (err) {
        return {error: err};
    }
};