
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer'
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Introduction from './component/Introduction';
import Experience from './component/Experience';
import Gallery from './component/Gallery';
import Skills from './component/Skills';
import Contact from './component/Contact';



function App() {
  
    return(
      <>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route exact path="/intro" element={<Introduction/>}/>
        <Route exact path="/experience" element={<Experience/>}/>
        <Route exact path="/gallery" element={<Gallery/>}/>
        <Route exact path="skills" element={<Skills/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
     
      </>
    );
}

export default App;
