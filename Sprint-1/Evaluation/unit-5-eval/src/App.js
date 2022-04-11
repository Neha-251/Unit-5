
import './App.css';
import {useState} from "react";

function App() {


  const [scorecount, setscorecount] = useState(76);
  const [wicketcount, setwicketcount] = useState(2);
  const [ballcount, setballcount] = useState(50);


  const handleScore = (value) => {
    if(scorecount < 100){
      setscorecount(scorecount + value);
    }
    else {
      setscorecount(scorecount);
    }
    
  }

  const handleWicket = (value) => {
    if(scorecount < 100){
      if(wicketcount < 12){
        setwicketcount(wicketcount + value);
      } else {
        setwicketcount(wicketcount);
      }
    }
    else {
      setwicketcount(wicketcount);
    }
    
  }

  const handleBall = (value) => {
    if(scorecount < 100){
      setballcount(ballcount + value);
    }
    else {
      setballcount(ballcount);
    }
  }

  

  return (
    <div className="App">
      <div className="div1">
        <div className="india">India</div>
        <div className="scoreboard">

          <div>
            <p>Score: </p>
            <div className="scoreCount">
              {
                scorecount
              }
            </div>
          </div>

          <div>
            <p>Wicket:</p>
            <div className="wicketCount">
              { wicketcount }
            </div>
          </div>

          <div>
            <p>Ball:</p>
            <div className="overCount">
              { ballcount }
            </div>
          </div>


        </div>

      </div>
      <div className="div2">
        <div className="addScore">
          <div className="addScore">Add Score:</div>
          <button className="addOne" onClick={() => {
            handleScore(1);
          }}>Add 1</button>
          <button className="addFour" onClick={() => {
            handleScore(4);
          }}>Add 4</button>
          <button className="addSix" onClick={() => {
            handleScore(6);
          }}>Add 6</button>

        </div>
        <div className="addWicket">
          <div>Add Wicket</div>
          <button onClick={() => {
            handleWicket(1);
          }}>Add 1</button>
        </div>
        <div className="addBall">
          <div>Add Ball</div>
          <button onClick={() => {
            handleBall(1);
          }}>Add 1</button>
        </div>

      </div>

      <h1 className="status">
        { scorecount > 100 ? "India Won" : "" }
      </h1>

    </div>
  );
}

export default App;
