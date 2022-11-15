import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {actions} from './store/index'

function App() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch();

  const increment=() => {
    dispatch(actions.increment());
  }

  const decrement=() => {
    dispatch(actions.decrement());
  }

  const addVal=() => {
    dispatch(actions.addBy(13));
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
