import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchNews } from "../../redux/slices/newsSlice";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import "./StoryList.css";
import LoadingSpinner from "../SpinnerComponent/LoadingSpinner";
import Notification from "../Notification";

const StoryList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, error, page, pageSize, searchQuery } = useSelector(
    (state: RootState) => state.news,
  );
  const token = useSelector((state: RootState) => state.auth.token);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    if (token) {
      dispatch(fetchNews({ token, page, pageSize, query: searchQuery })).catch(
        (err) => {
          setNotificationMessage(err.message);
          setNotificationOpen(true);
        },
      );
    }
  }, [dispatch, token, page, pageSize, searchQuery]);

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <Container className="story-list-container">
      <Notification
        message={notificationMessage}
        open={notificationOpen}
        onClose={handleNotificationClose}
      />
      {error ? (
        <Typography className="error-message">Error: {error}</Typography>
      ) : (
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={index % 3 === 0 ? 12 : 6} key={index}>
              <Card
                className={`article-card ${index % 3 === 0 ? "article-card-horizontal" : ""}`}
              >
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    image={article.urlToImage}
                    alt={article.title}
                    className={`article-card-media ${index % 3 === 0 ? "article-card-media-horizontal" : "article-card-media-vertical"}`}
                  />
                )}
                <Box className="article-card-content">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {article.description}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          Source: {article.source.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                          align="right"
                        >
                          Published:{" "}
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions className="article-card-actions">
                    <Button
                      size="small"
                      color="primary"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default StoryList;
