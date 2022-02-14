import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./components/home";
import Signup from "./components/signup";
import Registration from "./components/registrationhome";
import Productdetail from "./components/productdetail";
function App() {
  return (
    //<div className="App"></div>
    <Router>
      <Routes>
        <Route excat path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/product/:id" element={<Productdetail/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;



















































// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>