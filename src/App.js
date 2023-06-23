import logo from './logo.svg';
import './App.css';
import ListElement from './listElements';
import SearchBar from './searchBar'
import { RenderList } from './databaseFunctions';
import { useState } from 'react';
function App() {
  //state hook
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
  /*
  const [newItem, setNewItem] = useState("");
  const [itemList, setItems] = useState([]);

  function setItemList(){
    const item = {
      component: component,
      count: count
    }
    setItems(oldList => [...oldList,item])
  }
*/

  return (
    <div className='pt-6 flex flex-col space-y-2 justify-center items-center'>
      <SearchBar/>
      <RenderList/>
    </div>
  );
}

export default App;
