import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchNews, setPage } from '../../redux/slices/newsSlice';
import { Box, Pagination as MuiPagination } from '@mui/material';
import '../../App.css';
import './Pagination.css';

const Pagination: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { page, pageSize, searchQuery, totalResults } = useSelector((state: RootState) => state.news);
    const token = useSelector((state: RootState) => state.auth.token);
    const totalPages = Math.ceil(totalResults / pageSize);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
        if (token) {
            dispatch(fetchNews({ token, page: value, pageSize, query: searchQuery }));
        }
    };

    return (
        <Box mt={4} display="flex" justifyContent="center">
            <MuiPagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                siblingCount={0}
                boundaryCount={2}
                variant="outlined"
                shape="rounded"
                classes={{ root: 'pagination' }}
            />
        </Box>
    );
};

export default Pagination;
