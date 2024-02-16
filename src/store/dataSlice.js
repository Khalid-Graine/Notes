import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const my_api = "https://api.example.com/data";

export const fetchData = createAsyncThunk("data/fetchData", async () => {

  try {

    const response = await fetch(my_api);

    if (response.ok) {

      const data = await response.json();

      return data;

    } else {

      throw new Error("Failed to fetch data");

    }

  } catch (error) {

    throw new Error(error.message);

  }

});

const initialState = {

  count: 0,

  data: [],

  loading: false,

  error: null,

};

const dataSlice = createSlice({

  name: "data",

  initialState,

  reducers: {

    increaseCount: (state, action) => {

      state.count = action.payload;

    },

  },

  extraReducers: (builder) => {

    builder

      .addCase(fetchData.pending, (state) => {

        state.loading = true;

        state.error = null;

      })

      .addCase(fetchData.fulfilled, (state, action) => {

        state.loading = false;

        state.data = action.payload;

      })

      .addCase(fetchData.rejected, (state, action) => {

        state.loading = false;

        state.error = action.error.message;

      });

  },

});

export const { increaseCount } = dataSlice.actions;

export default dataSlice.reducer;