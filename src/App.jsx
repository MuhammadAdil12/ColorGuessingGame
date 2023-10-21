import { useState, useEffect } from 'react'

function App() {

  const [correctAns, setCorrectAns] = useState("");
  const [btn1hexCode, setBtn1HexCode] = useState("");
  const [btn2hexCode, setBtn2HexCode] = useState("");
  const [btn3hexCode, setBtn3HexCode] = useState("");
  const [message, setMessage] = useState("")


  
  function randomHexCodeGenerator(){
    
    
    let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    let randomColor3 = Math.floor(Math.random()*16777215).toString(16);

    console.log(randomColor1);
    console.log(randomColor2);
    console.log(randomColor3);
    
    let randomColors = [randomColor1, randomColor2, randomColor3]
    let randomIndex = Math.round(Math.random()* 2)
    const randomCorrectAns = randomColors[randomIndex]

    console.log("------------");
    console.log(randomCorrectAns);



      setCorrectAns(randomCorrectAns)
      setBtn1HexCode(randomColor1)
      setBtn2HexCode(randomColor2)
      setBtn3HexCode(randomColor3) 
    
  }

  
  function randomHexCodeChecker(selectedColor) {
    if ( selectedColor === correctAns ) {
      setMessage('Correct! Well done!');
    } else {
      setMessage('Wrong answer. Try again.');
    }
  
    setTimeout(() => {
      setMessage('');
        randomHexCodeGenerator();
    }, 2000);
  }
  
  useEffect(() =>{
    randomHexCodeGenerator()
  }, [])
  
  return (
    <>
      <div className='box' style={{ backgroundColor: "#" + correctAns }}></div>
      <p>Choose the correct color:</p>
      <p>{message}</p>
      <div className="btn-div">
        <button className='btn-1' onClick={() => randomHexCodeChecker(btn1hexCode)}>{btn1hexCode}</button>
        <button className='btn-2' onClick={() => randomHexCodeChecker(btn2hexCode)}>{btn2hexCode}</button>
        <button className='btn-3' onClick={() => randomHexCodeChecker(btn3hexCode)}>{btn3hexCode}</button>
      </div>
    </>
  )
}

export default App
