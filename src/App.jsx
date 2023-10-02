import { Routes, Route } from "react-router-dom";


function App() {
  return <>
    <Routes>
      <Route path="/" element={<>123</>} />
      <Route path="/table" element={<>123</>} />
      <Route path="/profile" element={<>123</>} />
      <Route path="/auth" element={<>123</>} />
    </Routes>
  </>;
}

export default App;
