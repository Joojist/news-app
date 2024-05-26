import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Article } from '../../types';

interface NewsState {
    articles: Article[];
    loading: boolean;
    error: string | null;
    page: number;
    pageSize: number;
    totalResults: number;
    searchQuery: string;
}

const initialState: NewsState = {
    articles: [],
    loading: false,
    error: null,
    page: 1,
    pageSize: 10,
    totalResults: 0,
    searchQuery: '',
};

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async ({ token, page, pageSize, query }: { token: string, page: number, pageSize: number, query?: string }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/${query ? 'everything' : 'top-headlines'}`, {
                params: {
                    apiKey: token,
                    country: query ? undefined : 'us',
                    page,
                    pageSize,
                    q: query || '',
                },
            });
            const totalResults = Math.min(response.data.totalResults, 40); // Limit to 40 results
            return { articles: response.data.articles.filter((article: Article) => article.url), totalResults };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        resetPage(state) {
            state.page = 1;
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action: PayloadAction<{ articles: Article[], totalResults: number }>) => {
                state.loading = false;
                state.articles = action.payload.articles;
                state.totalResults = action.payload.totalResults;
            })
            .addCase(fetchNews.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setPage, resetPage, setSearchQuery } = newsSlice.actions;
export default newsSlice.reducer;
