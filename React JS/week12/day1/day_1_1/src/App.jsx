import './App.css'; 
import Greet from './Components/Greet'
function  App() {
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>Hello World</h1>
      <p className="text-center bg-orange-500">tailwaind css</p>
      <div className="flex justify-center m-2 text-black ">
      <h2>1</h2>
      <h2>2</h2>
      <h2>3</h2>
      <h2>4</h2>
      <h2>5</h2>
      </div>
      <hr/>
      <Greet/>
    </div>
  );
}

export default App