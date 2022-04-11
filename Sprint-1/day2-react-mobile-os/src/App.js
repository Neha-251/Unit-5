import './App.css';

function App() {
  const opearting = ["Android","Blackberry","iPhone","Windows Phone"];
  const company = ["Samsung","HTC","Micromax","Apple"];

  return(
    <div className='App'>
      <h3>Mobile Operating System</h3>
      <ul>
        {
          opearting.map((e)=>(
            <li>{e}</li>
          ))
        }
      </ul>
      <h3>Mobile Manufacturers</h3>
      <ul>
        {
          company.map((e)=>(
            <li>{e}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
