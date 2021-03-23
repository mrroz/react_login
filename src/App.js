import React from 'react'
import './App.css'

function App(){

    let number=Math.floor(Math.random()*10)
    let yes='baaad'

    if(number==7){
         yes=(
            <h1>goood</h1>
           )
    }

    return(
        <div className="login">
            <div className="login-screen">

                <div className="login-title">
                    <h1 >ورود</h1>
                </div>

                <div className="login-username">
                    <input type="text" className="login-field" placeholder='نام كاربري'/>
                    <input type="text" className="login-field" placeholder='پسورد'/>
                    <h3>{number}</h3>
                    <h3>{yes}</h3>
                </div>
                
                <div className="login-btn">
                    <button className="btn">تاييد</button>

                </div>
            </div>
        </div>
    )
}


export default App