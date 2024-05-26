import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchNews, resetPage, setSearchQuery } from '../redux/slices/newsSlice';
import '../App.css';

interface SearchBarProps {
    className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
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
        <form onSubmit={handleSearch} className={className}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for news..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
