import { useState } from "react";

function NavBar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Mini E-Commerce</h1>

        <div className="bg-white p-4 rounded-xl shadow mb-6">
          Carrello: <span className="font-bold">{cartCount}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
