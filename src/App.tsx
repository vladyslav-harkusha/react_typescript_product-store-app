import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

export function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <ProductPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
      </Routes>
    </>
  );
};




  // const [count, setCount] = useState(1);
  // return React.createElement('div', {className: 'container'}, [
  //   React.createElement('h1', { className: 'font-bold', key: 1}, `Test JSX count = ${count} `),
  //   React.createElement('button', {
  //     className: 'py-2 px-4 border bg-emerald-500',
  //     key: 2,
  //     onClick: () => setCount(count + 1)
  //   }, 'Click me!')
  // ]);
