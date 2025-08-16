import CounterBtns from "./components/counter/counter-btns";
import GenerateColorBtn from "./components/color-generator/generate-color-btn";
import ProductBtns from "./components/products/product-btns";

const App = () => {
  return (
    <div>
      <h1 className="app-title">React Redux</h1>
    <div className="app-container">
      <div className="component-card">
        <h2 className="component-title">Counter</h2>
        <CounterBtns />
      </div>
      <div className="component-card">
        <h2 className="component-title">Color Generator</h2>
        <GenerateColorBtn />
      </div>
      <div className="component-card">
        <h2 className="component-title">Products Generator</h2>
        <ProductBtns />
      </div>
    </div>
    </div>
  );
};

export default App;
