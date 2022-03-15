import "./styles.css";

import Nav from "./Componants/NavBar";

export default function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <div className="card">
          <h1 className="card-text">Hello world!</h1>
        </div>
      </div>
    </>
  );
}
