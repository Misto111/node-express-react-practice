import ReactDOM from "react-dom/client";  // Импорт на ReactDOM и createRoot

const rootElement = document.getElementById("root");  // Вземаш root елемента от HTML-а
const root = ReactDOM.createRoot(rootElement);  // Създаваш "root" за рендериране на React компонентите

root.render(
<div>
    <h1>Hello!</h1> 
    <p>vvv</p>
    </div>); // Рендерираш JSX (или компонент) вътре в root-а