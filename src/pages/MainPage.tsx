import React from "react";
import { Container, Box, Typography } from "@mui/material";
import StoryList from "../components/StoryListComponent/StoryList";
import SearchBar from "../components/SearchBarComponent/SearchBar";
import Pagination from "../components/PaginationComponent/Pagination";

interface MainPageProps {
  showSearchBar: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ showSearchBar }) => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          News App
        </Typography>
        <SearchBar showSearchBar={showSearchBar} />
        <StoryList />
        <Pagination />
      </Box>
    </Container>
  );
};

export default MainPage;
