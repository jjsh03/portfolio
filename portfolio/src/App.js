import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Screen/Main';
import Work from './Screen/Work';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/work' element={<Work />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
