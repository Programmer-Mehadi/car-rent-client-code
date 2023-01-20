import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';

function App() {
  const selector = useSelector(state => state.carBookReducer)
  console.log(selector);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
