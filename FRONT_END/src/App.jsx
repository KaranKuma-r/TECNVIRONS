import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

function App() {
  return (
    <BrowserRouter>

      <Suspense fallback={<p>Loading...</p>}>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>

      </Suspense>

    </BrowserRouter>
  );
}

export default App;