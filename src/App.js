import './App.css';
import SignUpForm from "./components/Form/SignUpForm";

function App() {
    return (
        <div className="App">
            <h2 className='App-title'>Регистрация</h2>
            <span className='App-description'>Уже есть аккаунт?<a className='App-link' href="#">Войти</a></span>
            <SignUpForm/>
        </div>
    );
}

export default App;
