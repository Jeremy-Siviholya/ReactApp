import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Fruits from './components/Fruits';

function App() {

  const [fruits,setFruits]=useState([
    {id:1, nom:"fraises"},
    {id:2, nom:"Mandarine"},
    {id:3, nom:"Orange"}
  ]);

  const handleDelete=(id)=>{

    const fruitsCopy=[...fruits];

    const fruitCopyUpdated=fruitsCopy.filter(fruit=>fruit.id !==id);

    setFruits(fruitCopyUpdated);
  }

  const [ajouterFruits,setAjouteFruit]=useState("");

  const handleChange=(event)=>{
     const valueAfterChange=event.target.value;
     setAjouteFruit(valueAfterChange)
  }

  const handleSubmit=(event)=>{
    event.preventDefault();

    const fruitsCopy=[...fruits];
    const id=new Date().getTime();
    const nom=ajouterFruits;

  fruitsCopy.push({id:id,nom:nom})

  setFruits(fruitsCopy);
  setAjouteFruit("")
  }

  return(<div>
     <h1>Liste Des Fruits</h1>
     <ul>
        <Fruits/>
         {fruits.map(fruit=><li key={fruit.id}>{fruit.nom}<button onClick={()=>handleDelete(fruit.id)}>delete</button></li>)}
     </ul>
     <form onSubmit={handleSubmit}>
        <input type="text" class="bg-slate-300" onChange={handleChange} value={ajouterFruits} placeholder='ajouter un produit'></input>
        <button>+</button>
     </form>
  </div>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
