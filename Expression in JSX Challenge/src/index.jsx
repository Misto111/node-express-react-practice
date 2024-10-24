import { createRoot } from "react-dom/client";

const fName = "Miro";
const lName = "Stoev";

const currentYear = new Date().getFullYear();


createRoot(document.getElementById("root")).render(
   <div>
     <p>Create by {fName} {lName}</p>
     <p>Copyryright {currentYear}</p>
   </div>
);

