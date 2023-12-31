import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  try {
    const {
      data: { genres },
    } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    );
    // console.log(genres);
    return genres;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
});

const createArrayFromRawData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getRawData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkApi) => {
    const {
      netflix: { genres },
    } = thunkApi.getState();
    const data = await getRawData(
      `${process.env.REACT_APP_BASE_URL}/trending/${type}/week?api_key=${process.env.REACT_APP_API_KEY}`,
      genres,
      true
    );
    console.log(data);
    return data; // Add this line
  }
);

// getRawData(`${process.env.REACT_APP_BASE_URL}/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genre}`) )
export const netflixSlice = createSlice({
  name: "netflix",
  initialState: {
    movies: [],
    genresLoaded: false,
    genres: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
  },
});

export default netflixSlice.reducer;
