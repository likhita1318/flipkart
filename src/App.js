
import './App.css';
import CompA from './components/CompA.js';
import CompB from './components/CompB.js';

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {
  const details=[
    {
      name:"likhita paul",
      roll:"661"
    },

    {
      name:"sunil kumar",
      roll:"6142"
    },
    {
      name:"corgi",
      roll:"649"
    }
  ]
  return (
   <>
   <BrowserRouter>
   <ul>
    <li><Link to="/compA">Click to compA</Link></li>
   <li><Link to="/compB">Click to compB</Link></li>
   
   </ul>
   <Routes>
     <Route path='/compA' element={<CompA data={details}/>}> </Route>
     <Route path='/compB' element={<CompB data={details}/>}> </Route>


   </Routes>
   </BrowserRouter>
   {/* <CompA data={details}/> */}
   </>
  );
}

export default App;