import bgimg from '../src/assets/images/bglite.png';
import AccueilPage from './Pages/AccueilPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PortfolioPage from './Pages/PortfolioPage';
import Paginatiton from './components/Pagination';


function App() {
  return (
    <div className="App  bg-left-top bg-fixed" style={
      {
        backgroundImage: `url(${bgimg})`,
        backgroundSize:"auto", 
      } }>  
          <Header/>
          <BrowserRouter>
                <Routes>
                    <Route path='/' Component={AccueilPage}></Route>
                    <Route path='*' Component={AccueilPage}></Route>
                    <Route path='/portfolio' Component={PortfolioPage}></Route>
                </Routes>
            </BrowserRouter>    
          <Footer/>
          
    </div>
  );
}

export default App;
