import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// 1. Import your Layout wrapper
import Layout from "./components/Layout";

// 2. Import your Pages (Create these placeholder files if you haven't yet)
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* The Layout wraps the Routes. 
         This ensures Navbar and Footer stay fixed, 
         while the content in the middle changes.
      */}
      <Layout>
        <Routes>
          {/* The 'element' is what gets passed into Layout's {children} */}
          <Route path="/" element={<Home />} />

          {/* Catch-all for 404s */}
          <Route
            path="*"
            element={
              <div className="text-white text-center mt-20">Page Not Found</div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
