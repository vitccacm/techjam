import './App.css';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Signin from './signin';
import Home1 from './Home1';
import Content from './content';
function App() {
  
  return (
  
  <Router>
    <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path= '/signin' element={<Signin/>}/>
      <Route path= '/content' element={<Content/>}/>

    </Routes>
  </Router>
    
   
  );
}

export default App;
