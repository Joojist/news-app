import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchNews, resetPage, setSearchQuery } from '../../redux/slices/newsSlice';
import { Box, TextField, Button } from '@mui/material';
import './SearchBar.css';

interface SearchBarProps {
    showSearchBar: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ showSearchBar }) => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const token = useSelector((state: RootState) => state.auth.token);
    const pageSize = useSelector((state: RootState) => state.news.pageSize);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(resetPage());
        dispatch(setSearchQuery(query));
        if (token) {
            dispatch(fetchNews({ token, page: 1, pageSize, query }));
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSearch}
            className={`search-bar ${showSearchBar ? 'active' : ''}`}
        >
            <TextField
                variant="outlined"
                size="small"
                fullWidth
                label="Search for news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button
                variant="contained"
                color="secondary"
                type="submit"
                size="small"
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
