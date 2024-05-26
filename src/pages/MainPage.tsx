import React from 'react';
import StoryList from '../components/StoryList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination/Pagination';

interface MainPageProps {
    showSearchBar: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ showSearchBar }) => {
    return (
        <div>
            <h1>Top News</h1>
            <SearchBar className={`search-bar ${showSearchBar ? 'active' : ''}`} />
            <StoryList />
            <Pagination />
        </div>
    );
};

export default MainPage;
