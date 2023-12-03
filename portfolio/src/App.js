import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Screen/Main';
import WorkWeb from './Screen/Work';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/work' element={<WorkWeb />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
