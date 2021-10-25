import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Auth from "../routes/Auth";
import Navigation from "./Navigation";

 const AppRouter = ({isLoggedin, userObj}) => {
  console.log(isLoggedin);
  return(
    <Router>
      {isLoggedin && <Navigation/>}
      <Switch>
        {/* 로그인 정보를 받아서 null이 아니면 Auth 화면으로 처리해줌 */}
        {isLoggedin ? (
          <>
          <Route exact path="/">
            <Home userObj={userObj}/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          {/* <Ridirect from="*" to="/" /> */}
          </>
        ) : (
          <>
          <Route exact path="/">
            <Auth/>
          </Route>
          {/* <Ridirect from="*" to="/" /> */}
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;