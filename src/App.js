
import AddDelete from './AddDelete';
import Addandsub from './Addandsub';
import AdditionandSub from './AdditionandSub';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';


function App() {
  return (
    <div className="App">
      <AddDelete/>
      <Counter/>  
      <Addandsub/>
      <AdditionandSub/>
      <Todolist/>
     
    </div>
  );
}

export default App;
