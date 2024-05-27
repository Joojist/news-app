import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import {
  fetchNews,
  resetPage,
  setSearchQuery,
} from "../../redux/slices/newsSlice";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AppDispatch, RootState } from "../../redux/store";
import "./Navbar.css";

interface NavbarProps {
  toggleSearchBar: () => void;
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  toggleSearchBar,
  isAuthenticated,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.auth.token);

  const handleTopicSearch = (topic: string) => {
    dispatch(resetPage());
    dispatch(setSearchQuery(topic));
    setTimeout(() => {
      // Ensure that the state updates before fetching news
      dispatch(fetchNews({ token, page: 1, pageSize: 10, query: topic }));
    }, 0);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        {isAuthenticated ? (
          <>
            <IconButton color="inherit" onClick={() => dispatch(logout())}>
              <ExitToAppIcon />
            </IconButton>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleTopicSearch("")}
              className="navbar-button"
            >
              Main Page
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleTopicSearch("finance")}
              className="navbar-button"
            >
              Finance
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleTopicSearch("politics")}
              className="navbar-button"
            >
              Politics
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleTopicSearch("culture")}
              className="navbar-button"
            >
              Culture
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleTopicSearch("sports")}
              className="navbar-button"
            >
              Sports
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleTopicSearch("technology")}
              className="navbar-button"
            >
              Technology
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleTopicSearch("health")}
              className="navbar-button"
            >
              Health
            </Button>
            <IconButton
              color="inherit"
              onClick={toggleSearchBar}
              className="search-icon navbar-button"
            >
              <SearchIcon />
            </IconButton>
          </>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            className="navbar-button"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
