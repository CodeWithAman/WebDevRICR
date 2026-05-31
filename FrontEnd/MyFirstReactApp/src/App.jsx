import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <div id="abc">My First React App</div>
      <p className="bg-danger">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        provident nostrum, dolorum accusantium adipisci saepe libero deserunt
        nam iusto quibusdam rerum blanditiis? Blanditiis quia voluptas aliquid
        repudiandae, rerum odio ea.
      </p>

      <Footer />
    </>
  );
}

export default App;
