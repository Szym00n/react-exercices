import axios from "axios";

const searchPhotos = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  params: {
    client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
  },
});

export default searchPhotos;
