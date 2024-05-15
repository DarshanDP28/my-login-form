import React, {useState}from "react";
import './App.css';
const App = ()=>{
    const[ username,setUsername ] = useState(' '); //hooks
    const[ password,setPassword ] = useState(' ');
    const[ showPassword,setShowPassword ] = useState('true');

    return(
        <div className="container">
            <input
            type="text"
            placeholder="EnterUsername"
            value={username}
            onChange={(e) =>setUsername(e.target.value)}
            />
            <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            />
            <h2>{username}</h2>
            {/* if the showPassword is true then we display SHOW else we display NOT SHOW  */}
            <h2>{showPassword ? password : '*****'}</h2>
            <button onClick = {(e) => setShowPassword(!showPassword)}>Show/Hide password</button>

        </div>
    )
}

export default App;