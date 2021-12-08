import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contacts from './components/Contacts/Contacts';
import './app.css'

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Router> 
          <Header/>
          <div className='container'>
            <Routes>
              <Route path='/reactportfolio' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
          </div>
        </Router>
        </div>
    </div>
  );
}

export default App;
