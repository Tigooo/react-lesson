import React from 'react';
import './App.css';
import './Style/style.css';
import Product from "./Components/Product";


function App() {
    return (
        <div className="App">

            <Product name="Pineapple Sensation" price={1} currency="$" description="Blueberry, strawberry, pineapple and orange juice." />
        </div>
    );
}

export default App;
