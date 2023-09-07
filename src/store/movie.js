import Store from "../core/store";

const store = new Store({
  searchText: "",
  page: 1,
  maxPage: 1,
  movies: [],
  movie: {},
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
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({
        title: store.state.search,
        page,
      }),
    });
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

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    store.state.movie = await res.json();
  } catch (error) {
    console.log(error);
  }
};
