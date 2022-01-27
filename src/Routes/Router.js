import React from "react";
import {
  BrowserRouter as Router, //alias (nickname)
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../Views/Login";
import PostList from "../Views/PostList";
import PostDetail from "../Views/PostDetail";

const MainRouter = function ({ isLoggedIn }) {
  const currentPath =
    window.location.pathname.length === 1 ? "/postlist" : window.location.pathname;

  return (
    <Router>
      <div>
        <Routes>
            <Route path="/postlist" element={AuthChecker(isLoggedIn, <PostList />)} /> 
            <Route path= {`/postdetail/:id`} element={AuthChecker(isLoggedIn, <PostDetail />)} /> 
            <Route path="/" element={isLoggedIn ? <Navigate to={currentPath} /> : <Login />} /> 
        </Routes>
      </div>
    </Router>
  );
};
function AuthChecker(isLoggedIn, component) {
  return isLoggedIn ? component : <Navigate to="/" />;
}

export default MainRouter;
