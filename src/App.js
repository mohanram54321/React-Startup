import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import Create from './CRUD/Create';
import Edit from './CRUD/Edit';
import Home from './CRUD/Home';
 
function App() {
    return (
        <div className="App">
            <h1 className="geeks">CRUD Operation task</h1>
            <h3>CREATE READ UPDATE DELETE</h3>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>
            </Router>
        </div>
    );
}
 
export default App;