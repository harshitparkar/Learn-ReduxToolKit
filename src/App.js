import "./App.css";
import { useDispatch,useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementAmount,
} from "./redux/slices/counterslice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state?.counter);
  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <h2>Counter:{counter?.value}</h2>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementAmount(10))}>*</button>
    </div>
  );
}

export default App;
