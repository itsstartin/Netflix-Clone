import NavBar from "./components/navbar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { genreUrl, originals } from "./urls";

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Original"/>
      <RowPost url={genreUrl} title="Action" isSmall/>
    </div>
  );
}

export default App;
