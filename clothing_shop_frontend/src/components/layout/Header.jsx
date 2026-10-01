import Navbar from "./Navbar";

function Header() {
  return (
    <header className="site-header">
      <div className="top-bar">
        <p>
          Free shipping on orders above ₹999
        </p>
      </div>

      <Navbar />
    </header>
  );
}

export default Header;