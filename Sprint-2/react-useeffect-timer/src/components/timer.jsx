import { useEffect, useRef, useState } from "react";


const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
   

    

    var timer = useRef(0);
    //var timer
    useEffect(() => {
        timer.current = setInterval(() => {

            setSeconds(seconds + 1);

            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }

            if(minutes === 2){
                setMinutes(0);
                setSeconds(0);
            }

        }, 1000)

        return () => clearInterval(timer.current);
    })

    

    const reset = ()=> {
        setMinutes(0);
        setSeconds(0);
    }


    return (
        <div style={{height: "400px", width: " 400px"}}>
            <div className="container">
                <p>{minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}</p>

            </div>

            <div className="btnDiv">
                {/* <button className="btnstop" onClick={stop}>Stop</button> */}
                <button className='btnreset' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export { Timer };