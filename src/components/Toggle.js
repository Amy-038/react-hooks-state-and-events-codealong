import React, { useState } from "react";

/*function Toggle() {
  const [ count, setCount ] = useState('OFF')

  function handleClick(){
    if(count === "OFF"){
      setCount('ON')
    } else if (count === "ON"){
      setCount("OFF")
    }
    
  }
  return <button onClick={handleClick}>{count}</button>;
}*/

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
