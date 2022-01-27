import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

import "./App.css";

export default function App() {
  const [isLogin, setIsLogin] = React.useState(false);

  if (!isLogin)
    return (
      <div>
        No no no
        <button onClick={() => setIsLogin(true)}>log me in</button>
      </div>
    );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}>
            <Route index element={<Home />} />
            <Route path=":id" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function BasicLayout() {
  return (
    <div>
      <h1>Basic layout her yerde</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>

      <Outlet />
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  let params = useParams();

  return (
    <div>
      <h1>Contact</h1>
      <p>{JSON.stringify(params || {}, null, 2)}</p>
      <Outlet />
    </div>
  );
}
