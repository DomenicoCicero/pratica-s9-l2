import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import Books from "./components/Books";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <Books image="image" card="card" button="button" />
      {/* <AllTheBooks image="image" card="card" button="button" /> */}
      <MyFooter />
    </div>
  );
}

export default App;
