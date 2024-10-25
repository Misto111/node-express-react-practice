import Login from "./Login";
import Register from "./Register";


var isLoggedIn = true;



function App() {
  return (

     <div className='container'> {
        isLoggedIn ? <Register /> : <Login />
     }</div>
      
  
  )
}

export default App
