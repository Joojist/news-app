import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchNews, setPage } from '../../redux/slices/newsSlice';
import '../../App.css';
import './Pagination.css'

const Pagination: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { page, pageSize, searchQuery, totalResults } = useSelector((state: RootState) => state.news);
    const token = useSelector((state: RootState) => state.auth.token);
    const totalPages = Math.ceil(totalResults / pageSize);

    const handlePageClick = (pageNumber: number) => {
        dispatch(setPage(pageNumber));
        if (token) {
            dispatch(fetchNews({ token, page: pageNumber, pageSize, query: searchQuery }));
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            handlePageClick(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            handlePageClick(page - 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages && i <= 4; i++) {  // Ensure only up to 4 pages are displayed
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <button onClick={handlePreviousPage} disabled={page === 1}>
                &lt;
            </button>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => handlePageClick(number)}
                    className={page === number ? 'active' : ''}
                >
                    {number}
                </button>
            ))}
            <button onClick={handleNextPage} disabled={page === totalPages}>
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
