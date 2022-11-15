import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch();

  const increment=() => {
    dispatch({ type: 'INC'});
  }

  const decrement=() => {
    dispatch({ type: 'DSC'});
  }

  const addVal=() => {
    dispatch({type: 'ADDVAL', payload:10});
  }
  return (
    <div>
      <h1>Counter App  </h1>
      <h2> {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addVal}>Add 10 Value</button>


      
    </div>
  );
}

export default App;
