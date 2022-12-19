

// function App() {
//     return <h1>First Component</h1>
// }

function App() {
    return <><h1>First Component</h1><h6>Second Component</h6></> //By wrapping two components we can return two components
}

export function Header() {
    return <h1>Header Component</h1>
}

export function Footer() {
    return <h1>Footer Component</h1>
}

export default App;

