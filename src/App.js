import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import ButtonFuntionComponent from './component/ButtonFuntionComponent';
import CalssComponnt from './component/CalssComponnt';
import CounterFunctionComponent from './component/CounterFunctionComponent';
import CounterUsingClassComponent from './component/CounterUsingClassComponent';
import EventComponent from './component/EventComponent';
import InputBoxComponent from './component/InputBoxComponent';
import ShowHideElementComponent from './component/ShowHideElementComponent';
import AxiosComponent from './component/AxiosComponent';





function App() {
  return (
    <div className="App">
<BrowserRouter>
    <ul>
      <li>
      <Link to='/class'>Class</Link>
      </li>
      <li>
      <Link to='/button'>Button</Link>
      </li>
      <li>
      <Link to={'/showhide'}>Show Hide</Link>
      </li>
      <li>
      <Link to={'/inputbox'}>Input-Box</Link>
      </li>
      <li>
      <Link to={'/funtioncouter'}>Function Counter</Link>
      </li>
      <li>
      <Link to={'/classcounter'}>Class Counter</Link>
      </li>
      <li>
      <Link to={'/event'}>Event</Link>
      </li>
    </ul>

<Routes>
   <Route exact path='/class' element={<CalssComponnt department='CSE' Name='NAGARAJ S' Year='2nd'/> }></Route> 
    
  
  <Route exact path='/button' element={ <ButtonFuntionComponent/>}></Route>
  <Route exact path='/showhide' element={ <ShowHideElementComponent/>}></Route>
  <Route exact path='/inputbox' element={  <InputBoxComponent/>}></Route>
  <Route exact path='/funtioncouter' element={<CounterFunctionComponent/>}></Route>
  <Route exact path='/classcounter' element={ <CounterUsingClassComponent/>}></Route>
  <Route exact path='/event' element={  <EventComponent/>}></Route>
    </Routes>
    </BrowserRouter>
    <AxiosComponent/>
    </div>
  );
}

export default App;
