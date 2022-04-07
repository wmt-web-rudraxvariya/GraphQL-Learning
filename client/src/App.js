import "./App.css";
import Launches from "./components/Launches";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launch from "./components/Launch";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Launches />} />
              <Route path="/launch/:flight_number" element={<Launch />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </>
  );
}

export default App;
