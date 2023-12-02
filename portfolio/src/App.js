import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Screen/Main';
import WebWork from './Screen/Work/WebWork';
import DesignWork from './Screen/Work/DesignWork';
import OthersWork from './Screen/Work/OthersWork';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/work/web' element={<WebWork />}></Route>
          <Route path='/work/design' element={<DesignWork />}></Route>
          <Route path='/work/others' element={<OthersWork />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
