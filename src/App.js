import React from "react";
import { Route, Switch } from "react-router-dom";
import MyBooks from "./components/MyBooks";
import SearchBooks from "./components/SearchBooks";
import NavBar from "./components/NavBar";
import BookListProvider from "./contexts/bookListContext";

function App() {
  return (
    <div>
      <NavBar />
      <BookListProvider>
        <Switch>
          <Route path="/" component={MyBooks} exact />
          <Route path="/search" component={SearchBooks} />
        </Switch>
      </BookListProvider>
    </div>
  );
}

export default App;
