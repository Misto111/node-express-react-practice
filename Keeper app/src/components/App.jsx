import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
    return (
        <>
            <Header />
            {notes.map((noteItem) => (
                <Note 
                    key={noteItem.id}  
                    title={noteItem.title}
                    content={noteItem.content}
                />
            ))}
            <Footer />
        </>
    );
}

export default App;