import './App.css';
import Items from './Items'
import ShoppingCart from './ShoppingCart'
import naruto from './hiddenLeaf.svg'

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <ShoppingCart items={Items}/>
      <ShoppingCart items={Items}/>
      <img src={naruto} width={50}/>
    </div>
  );
}

export default App;
