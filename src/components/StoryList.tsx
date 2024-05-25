import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchNews } from '../redux/slices/newsSlice';
import '../App.css';
import { notifyError } from './Notification';

const StoryList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { articles, loading, error } = useSelector((state: RootState) => state.news);
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (token) {
            dispatch(fetchNews(token)).catch((err) => {
                notifyError("Failed to load news: " + err.message);
            });
        }
    }, [dispatch, token]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {articles.map((article, index) => (
                <div className="article" key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                </div>
            ))}
        </div>
    );
};

export default StoryList;
