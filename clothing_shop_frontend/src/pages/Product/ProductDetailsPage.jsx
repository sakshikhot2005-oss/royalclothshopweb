import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

import ProductDetails
  from "../../components/product/ProductDetails";

import ProductReviews
  from "../../components/product/ProductReviews";

import Loader
  from "../../components/common/Loader";

import {
  getProductById
} from "../../services/productService";

function ProductDetailsPage() {
  const { id } =
    useParams();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      const data =
        await getProductById(id);

      setProduct(data);
      setLoading(false);
    }

    load();
  }, [id]);

  if (loading) {
    return <Loader fullScreen />;
  }

  if (!product) {
    return (
      <div className="empty-state page-container">
        <h2>
          Product Not Found
        </h2>

        <a
          href="/shop"
          className="btn btn-primary"
        >
          Back to Shop
        </a>
      </div>
    );
  }

  return (
    <div className="product-page page-container">
      <ProductDetails
        product={product}
      />

      <ProductReviews />
    </div>
  );
}

export default ProductDetailsPage;