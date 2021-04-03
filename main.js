import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3949b704fd05a5e46012b6f9e71b45e2";

const getMovies = () => {
  // Implementar try catch con async/await
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}movie/24428/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
      .then(({ data }) => resolve(data))
      .catch(error => reject(error));
  });
}

const getMovie = async (movieId) => {
  // Implementar try catch y retornar una promesa
  const { data } = await axios.get(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en`);
  return data;
}

const test = async () => {
  const movies = await getMovies();
  const movie = await getMovie(100402);
  
  console.log("movies", movies);
  console.log("movie", movie);
  
  // Implementar Promise.all([]) con async/await en una sola variable
  
  // const data = await Promise.all([]);
  // console.log('data', data);
};

test();
