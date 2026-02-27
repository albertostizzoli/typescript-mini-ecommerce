type Props = {
  cartCount: number; // questa prop rappresenta il numero di prodotti nel carrello
};

function Navbar({ cartCount }: Props) {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mini E-Commerce</h1>
      <div>
        Carrello: <span className="font-bold">{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
