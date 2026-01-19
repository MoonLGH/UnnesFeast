import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] relative">
      <div className="fixed inset-0 pointer-events-none">
         <div className="scanline"></div>
         <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px]"></div>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
