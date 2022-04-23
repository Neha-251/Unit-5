 
import './App.css'
import {Button} from "./components/button"

function App() {
 

  return (
    <div className="App">
        <div>
      <Button theme={{
        bg: "#007bff",
        color: "white",
        border: "none"
      }} onClick={() => {
        alert("Clicked Primary Button")
      }}>Primary Button</Button>

      <Button theme={{
        bg: "white",
        color: "black",
        border: "1px solid black"
      }} onClick={() => {
        alert("Clicked Default Button")
      }} children={"Default Button"}/>

      <Button theme={{
        bg: "white",
        color: "black",
        border: "1px dashed black"
      }}
       onClick={() => {
        alert("Dashed Button")
      }} children={"Dashed Button"}/>
      </div>

<div>
  
<Button theme={{
        bg: "white",
        color: "black",
        border: "none"
      }} 
      onClick={() => {
        alert("Text Button")
      }} children={"Text Button"}/>

      <Button theme={{
        bg: "white",
        color: "#007bff",
        border: "none"
      }}
      onClick={() => {
        alert("Link Button")
      }} children={"Link Button"}/>
</div>
 
    </div>
  )
}

export default App