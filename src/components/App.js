
import React from "react";
import './../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked{count}</p>
        <button onClick= {()=>setCount(count+1)}>click me</button>
        
    </div>
  )
}

export default App
