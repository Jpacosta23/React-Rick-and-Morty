import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/character/:id" component={Detail} />
          <Route path="/page/:page" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
