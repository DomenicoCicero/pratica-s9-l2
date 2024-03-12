import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <AllTheBooks image="image" card="card" button="button" />
      <MyFooter />
    </div>
  );
}

export default App;
