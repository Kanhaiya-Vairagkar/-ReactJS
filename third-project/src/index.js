import ReactDom from "react-dom";
import './index.css';
import App from './App.js';
import { Header, Footer } from "./App.js";


ReactDom.render(
    <>

        <App />
        <Header />

        <body> <h2>Good Afternoon Kanhaiya</h2>
            <h1>Kanhaiya</h1>
        </body>
        <h1 >Kanha</h1>
        <h1>Sammer</h1>
        <a className="a" href="https://github.com/">Click</a>
        <Footer />

    </>
    , document.getElementById("root"));

