import { createRoot } from 'react-dom/client';

const fName = "Miro";
const lName = "Stoev"
const luckyNumber = Math.floor(Math.random() * 10);


createRoot(document.getElementById('root')).render(
  <div>
    <h1>Hello, {fName} {lName}!</h1>
    <p>Your lucky number is {luckyNumber}!</p>
    </div>
);
