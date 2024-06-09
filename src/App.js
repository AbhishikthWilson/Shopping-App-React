import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div >
      
      <AddProduct/>
      <SearchProduct/>
      <DeleteProduct/>
      <ViewAll/>

    </div>
  );
}

export default App;
