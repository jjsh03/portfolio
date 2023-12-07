import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Screen/Main';
import WorkWeb from './Screen/Work';
import WorkDetail from './Screen/WorkDetail';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/work' element={<WorkWeb />} />
          <Route path='/work/:id' element={<WorkDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
