import Header from "./components/Header";
import TravelCard from "./components/TravelCard";
import data from "./assets/data";
import "./App.css";

function App() {
  const cards = data.map((data, i) => {
    return <TravelCard key={i} item={data} />;
  });

  return (
    <>
      <Header />
      <section className="cards-section">{cards}</section>
    </>
  );
}

export default App;
