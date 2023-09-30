import './App.css';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Signin from './signin';
import Home1 from './Home1';
import Content from './content';
import YoutubePage from './youtubepage';
function App() {
  
  return (
  
  <Router>
    <Routes>
        <Route path='/' element={<Home1 />} />
        <Route path='/techjam' element={<Home1 />} />
        <Route path='/public_html/techjam' element={<Home1/>}/>


      <Route path= '/signin' element={<Signin/>}/>
      <Route path= '/content' element={<Content/>}/>
      <Route path= '/youtube' element={<YoutubePage/>}/>

    </Routes>
  </Router>
    
   
  );
}

export default App;
