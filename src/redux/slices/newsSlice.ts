import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface NewsState {
    articles: any[];
    loading: boolean;
    error: string | null;
}

const initialState: NewsState = {
    articles: [],
    loading: false,
    error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async (token: string, {rejectWithValue}) => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${token}`);
            return response.data.articles;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default newsSlice.reducer;
