import React from 'react';
import './App.css';
import './Style/style.css';
import Product from "./Components/Product";
import Todo from "./Components/ToDoList/ToDoList";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <Todo />
            {/*<Product name="Pineapple Sensation" price={1} currency="$" description="Blueberry, strawberry, pineapple and orange juice." />*/}
        </div>
    );
}

export default App;
