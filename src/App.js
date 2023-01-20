import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const selector = useSelector(state => state.carBookReducer)
  console.log(selector);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
