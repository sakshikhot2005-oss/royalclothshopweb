import {
  ArrowRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import ProductGrid from "../../components/product/ProductGrid";

import {
  getFeaturedProducts
} from "../../services/productService";

import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] =
    useState([]);

  useEffect(() => {
    getFeaturedProducts().then(
      setProducts
    );
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small">
            NEW COLLECTION 2026
          </p>

          <h1>
            STYLE THAT
            <br />
            SPEAKS FOR YOU
          </h1>

          <p>
            Discover premium fashion
            designed for your everyday
            lifestyle.
          </p>

          <Link
            to="/shop"
            className="btn btn-primary btn-large"
          >
            Shop Collection
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1554882195-8cf792f9a571?auto=format&fit=crop&w=1400&q=85"
            alt="Models presenting a fashion collection"
          />
        </div>
      </section>

      <section className="category-section page-container">
        <div className="section-heading center">
          <p>EXPLORE</p>
          <h2>Shop By Category</h2>
        </div>

        <div className="category-grid">
          <Link
            to="/shop/men"
            className="category-card"
          >
            <img
              src="https://images.unsplash.com/photo-1630667208073-82d53b1db540?auto=format&fit=crop&w=700&q=85"
              alt="Men's tailored fashion"
            />

            <div>
              <h3>Men</h3>
              <span>
                Shop Collection
              </span>
            </div>
          </Link>

          <Link
            to="/shop/women"
            className="category-card"
          >
            <img
              src="https://images.unsplash.com/photo-1627292441194-0280c19e74e4?auto=format&fit=crop&w=700&q=85"
              alt="Women's contemporary fashion"
            />

            <div>
              <h3>Women</h3>
              <span>
                Shop Collection
              </span>
            </div>
          </Link>

          <Link
            to="/shop/kids"
            className="category-card"
          >
            <img
              src="https://images.unsplash.com/photo-1758782213532-bbb5fd89885e?auto=format&fit=crop&w=700&q=85"
              alt="Kids' fashion"
            />

            <div>
              <h3>Kids</h3>
              <span>
                Shop Collection
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="featured-section page-container">
        <div className="section-heading">
          <div>
            <p>OUR PICKS</p>
            <h2>Featured Products</h2>
          </div>

          <Link to="/shop">
            View All
            <ArrowRight size={17} />
          </Link>
        </div>

        <ProductGrid
          products={products}
        />
      </section>

      <section className="promo-banner">
        <div>
          <p>LIMITED OFFER</p>

          <h2>
            GET UP TO 30% OFF
          </h2>

          <p>
            On selected styles this
            season.
          </p>

          <Link
            to="/shop"
            className="btn btn-light"
          >
            Shop Sale
          </Link>
        </div>
      </section>

      <section className="benefits-section page-container">
        <div className="benefit">
          <Truck size={28} />
          <h3>Free Shipping</h3>
          <p>
            Free delivery above ₹999
          </p>
        </div>

        <div className="benefit">
          <ShieldCheck size={28} />
          <h3>Secure Payment</h3>
          <p>
            100% secure checkout
          </p>
        </div>

        <div className="benefit">
          <RotateCcw size={28} />
          <h3>Easy Returns</h3>
          <p>
            Simple return process
          </p>
        </div>

        <div className="benefit">
          <ShoppingBag size={28} />
          <h3>Quality Products</h3>
          <p>
            Carefully selected fashion
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;