import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Delivery from "./components/Delivery";
import Schedule from "./components/Schedule";
import Appointment from "./components/Appointment";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App h-full">
      <Navbar />
      <Introduction />
      {/* <Delivery />
      <Appointment />
      <Schedule /> */}
      <HashRouter>
      {/*  */}
        <div className="content">
          <Routes>
            <Route exact path="/" component={Introduction} />
            {/* <Route path="/delivery" component={Delivery} /> */}
            {/* <Route path="/appoint" component={Appointment} />
            <Route path="/schedule" component={Schedule} /> */}
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
