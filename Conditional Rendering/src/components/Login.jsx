import Input from "./Input";

function login() {

    return ( <form className='form'>
    <Input type="text" placeholder="Username"/>
    <Input type="password" placeholder="Password"/>
    <button type='submit'>login</button>
    </form>
    );
}

export default login;