
import MainSection from "./Components/MainSection/MainSection";
import Mac from "./Components/MultiPages/Mac/Mac"
import Iphone from "./Components/MultiPages/Iphone/Iphone";
import Ipad from "./Components/MultiPages/Ipad/Ipad";
import Watch from "./Components/MultiPages/Watch/Watch";
import Tv from "./Components/MultiPages/Tv/Tv";
import Music from "./Components/MultiPages/Music/Music";
import Support from "./Components/MultiPages/Support/Support";
import Cart from "./Components/MultiPages/Cart/Cart";
import Four04 from "./Components/MultiPages/Four04/Four04";
import Search from "./Components/MultiPages/Search/Search";
import SharedComponents from "./Components/MultiPages/SharedComponents/SharedComponents";
import SingleProductPage from "./Components/SingleProductPage/SingleProductPage";


import {Route,Routes} from "react-router-dom"
// import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";

function App() {
  return (
    <Routes>

      <Route path= "/" element={<SharedComponents/>}>
        <Route path="/" element={<MainSection/>}/>
        <Route path="mac" element={<Mac/>}/>
        <Route path="iphone" element={<Iphone/>}/>
        <Route path="iphone/:productParam" element={<SingleProductPage/>}></Route>
        <Route path="ipad" element={<Ipad/>}/>
        <Route path="watch" element={<Watch/>}/>
        <Route path="tv" element={<Tv/>}/>
        <Route path="music" element={<Music/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="*" element= {<Four04/>}/>
      </Route>

    </Routes>
  );
}

export default App;
