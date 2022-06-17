import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/* -----------------------Pages----------------------- */

import HomePage from "./pages/homepage";
import SignInSignUpPage from "./pages/SignInPage-SignUpPage";
import ShopPage from "./pages/shoppage";
import NotFound from "./pages/NotFoundPage";
import CheckOutPage from "./pages/CheckOutPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionContainer";

/* -----------------------Components----------------------- */

import Header from "./components/Header";

/* -----------------------Services----------------------- */

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/shop/:collectionId' exact component={CollectionsPage} />
        <Route path='/cart' exact component={CheckOutPage} />
        <Route
          path='/sign-in'
          exact
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInSignUpPage />
          }
        />
        <Route path='*' exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
