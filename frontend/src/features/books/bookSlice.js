import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookService from "./bookService";

const initialState = {
  books: [],
  book: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// ADD NEW BOOK
export const createBook = createAsyncThunk(
  "books/create",
  async (bookData, thunkAPI) => {
    try {
      // Get user token from the redux store
      const token = thunkAPI.getState().auth.user.token;
      return await bookService.createBook(bookData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// GET USER BOOKS
export const getBooks = createAsyncThunk(
  "books/getAll",
  async (_, thunkAPI) => {
    try {
      // Get user token from the redux store
      const token = thunkAPI.getState().auth.user.token;
      return await bookService.getBooks(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// GET ONE BOOK
export const getBook = createAsyncThunk(
  "books/get",
  async (bookId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bookService.getBook(bookId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// UPDATE BOOK
export const updateBook = createAsyncThunk(
  "books/update",
  async (bookId, bookData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bookService.updateBook(bookId, bookData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// DELETE BOOK

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.book = action.payload;
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.map((book) =>
          book._id === action.payload._id
            ? book.haveRead === "Yes"
              ? (book.haveRead = "No")
              : (book.haveRead = "Yes")
            : book
        );
      });
  },
});

export const { reset } = bookSlice.actions;

export default bookSlice.reducer;
