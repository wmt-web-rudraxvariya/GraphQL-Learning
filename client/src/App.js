import "./App.css";
import Logo from "./logo192.png";
function App() {
  return (
    <div className="d-flex gap-2 p-2 align-items-center">
      <img src={Logo} alt="logo" className="w-auto mr-2" height="45px" />
      <h4>Specex</h4>
    </div>
  );
}

export default App;
