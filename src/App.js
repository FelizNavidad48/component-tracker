import logo from './logo.svg';
import './App.css';
import ListElement from './listElements';
import SearchBar from './searchBar'
function App() {
  return (
    <div className='pt-6 flex flex-col space-y-2 justify-center items-center'>
      <SearchBar/>
      <ListElement/>
    </div>
  );
}

export default App;
