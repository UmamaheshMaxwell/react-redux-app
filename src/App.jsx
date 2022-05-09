import "./App.css";
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"

export const Error = () => <div><h1>Please contact administrator</h1></div>

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
