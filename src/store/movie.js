import Store from "../core/store";

const store = new Store({
  searchText: "",
  page: 1,
  maxPage: 1,
  movies: [],
  loading: false,
  message: "Search for the movie title!",
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;
  if (page === 1) {
    store.state.maxPage = 1;
    store.state.movies = [];
    store.state.message = "";
  }

  try {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
    );
    const { Response, Search, totalResults, Error } = await res.json();
    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.maxPage = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.log(error);
  } finally {
    store.state.loading = false;
  }
};
