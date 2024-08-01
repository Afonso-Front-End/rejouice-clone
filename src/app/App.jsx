import Header from "../components/header/Header";
import Main from "../components/main/Main";
import "./app.css"
const App = () => {
    return (
        <div id="container">
            <div id="content">
                <Header/>
                <Main/>
            </div>
        </div>
    )
}

export default App;