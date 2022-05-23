import logo from './logo.svg';
import './App.css';
import {Mobile2,Mobile1} from './components/mobile1'
import {v4 as uuid} from 'uuid'

function App() {

  const OS=["Android","Blackberry","iphone","Windows phone"]
 const MM=["Samsung","HTC","Micromax","Apple"]
  return (
    
    <div className="App">
      <h1>Mobile Operating System</h1>
      {OS.map((elem)=>{
        return (
          <div>
              <Mobile1 id={uuid()}  ip={elem}/>
          </div>
        )
      })}

<h1>Mobile Manifacturers</h1>
      {MM.map((elem)=>{
        return (
          <div>
              <Mobile2 id={uuid()} ip1={elem}/>
          </div>
        )
      })}
      
    
    </div>
  );
}

export default App;
