// import React, { useState, useRef, useEffect } from 'react'
  
  
// const Timer = () => {
  
//     // We need ref in this, because we are dealing
//     // with JS setInterval to keep track of it and
//     // stop it when needed
//     const Ref = useRef(null);
  
//     // The state for our timer
//     const [timer, setTimer] = useState('00:00:00');
  
  
//     const getTimeRemaining = (e) => {
//         const total = Date.parse(e) - Date.parse(new Date());
//         const seconds = Math.floor((total / 1000) % 60);
//         const minutes = Math.floor((total / 1000 / 60) % 60);
//         const hours = Math.floor((total / 1000 / 60 / 60) % 24);
//         return {
//             total, hours, minutes, seconds
//         };
//     }
  
  
//     const startTimer = (e) => {
//         let { total, hours, minutes, seconds } 
//                     = getTimeRemaining(e);
//         if (total >= 0) {
  
//             // update the timer
//             // check if less than 10 then we need to 
//             // add '0' at the beginning of the variable
//             setTimer(
//                 (hours > 9 ? hours : '0' + hours) + ':' +
//                 (minutes > 9 ? minutes : '0' + minutes) + ':'
//                 + (seconds > 9 ? seconds : '0' + seconds)
//             )
//         }
//     }
  
  
//     const clearTimer = (e) => {
  
//         // If you adjust it you should also need to
//         // adjust the Endtime formula we are about
//         // to code next    
//         setTimer('03:00:00');
  
//         // If you try to remove this line the 
//         // updating of timer Variable will be
//         // after 1000ms or 1sec
//         // if (Ref.current) clearInterval(Ref.current);
//         // const id = setInterval(() => {
//         //     startTimer(e);
//         // }, 1000)
//         // Ref.current = id;
//     }
  
//     const getDeadTime = () => {
//         let deadline = new Date();
  
//         // This is where you need to adjust if 
//         // you entend to add more time
//         deadline.setSeconds(deadline.getSeconds() + 180);
//         return deadline;
//     }
  
//     // We can use useEffect so that when the component
//     // mount the timer will start as soon as possible
  
//     // We put empty array to act as componentDid
//     // mount only
//     useEffect(() => {
//         clearTimer(getDeadTime());
//     }, []);
  
//     // Another way to call the clearTimer() to start
//     // the countdown is via action event from the
//     // button first we create function to be called
//     // by the button
//     const onClickReset = () => {
//         clearTimer(getDeadTime());
//     }
  
//     return (
//         <div className="Timer">
//             <h2>{timer}</h2>
//             <button onClick={startTimer}>Start</button>
//         </div>
//     )
// }
  
// export default Timer;

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  return (
    <div className="timer">
      <h1>{seconds}s</h1>
      <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Timer;
