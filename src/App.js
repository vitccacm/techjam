import './App.css';
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Signin from './signin';
import Home1 from './Home1';
import Dashboard from './Dashboard';
import Content from './content';
import YoutubePage from './youtubepage';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  
  return (
  
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path='/' element={<Home1 />} />
        <Route path='/techjam' element={<Home1 />} />
        <Route path='/public_html/techjam' element={<Home1 />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard now has access to QueryClient */}
        <Route path='/signin' element={<Signin />} />
        <Route path='/content' element={<Content />} />
        <Route path='/youtube' element={<YoutubePage />} />
      </Routes>
    </Router>
  </QueryClientProvider>
    
   
  );
}

export default App;
