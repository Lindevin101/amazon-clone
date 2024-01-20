import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <h1>wert</h1>
                <Payment />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
