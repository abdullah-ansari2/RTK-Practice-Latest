import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, increment, decrement } from './redux/slices/counterSlice';

function App() {
  const isLoading = useSelector((state) => state.counter.isLoading);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(setLoading(true));
    dispatch(increment())
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 200);
  };

  const handleDecrement = () => {
    dispatch(setLoading(true));
    dispatch(decrement());
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 200);
  };

  return (
    <>
      {/* loading spinner */}
      {isLoading && <div id="cover-spin"></div>}
      {/* Main Container */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>
          Increment
        </button>
        <p>Count is {count}</p>
        <button onClick={handleDecrement}>
          Decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
