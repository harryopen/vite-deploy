import { useContext, useEffect, useState } from "react";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Button from "./components/Button";
import Task from "./components/Task";
import Even_odd from "./components/Even_odd";
import Tic_to from "./components/Tic_to";
import Cap from "./components/Cap";
import { getPosts, randomUser } from "./assets/api_data.js";
import Card from "./components/Card.jsx";
import Card1 from "./components/Card1.jsx";
import { User } from "./components/User.jsx";
import { CounterContext, Provider } from "./Context/Counter.jsx";

function App() {
  // use context
  const value = useContext(CounterContext);
  console.log("Value is ", value);

  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    randomUser().then((use) => setUser(use.results[0]));
  }, []);

  const refresh = () => {
    randomUser().then((use) => setUser(use.results[0]));
  };
  return (
    <>
      <Even_odd />
      <Nav />
      <Container />
      <Task />
      {/* <Tic_to />
      <Cap/> */}
      <div className="data">
        {user && <Card1 data={user} />}
        {/* 
        {data ? (
          data.map((e) => <Card uid={e.userId} id={e.id} body={e.body} />)
        ) : (
          <p>no data</p>
        )}
       */}

        {/*  Lets do coding for ransom user cards */}
      </div>

      <button
        className="h-14 w-[100px] bg-gradient-to-r from-violet-500 to-fuchsia-500"
        onClick={refresh}
      >
        Press to refresh
      </button>

      {/*  lets learn context api */}
      <h1> Counter {value.set}</h1>
      <User />
      <User />
      <User />
      <User />
      <User />
    </>
  );
}

export default App;
