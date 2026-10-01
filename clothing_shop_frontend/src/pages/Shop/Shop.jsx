import {
  useEffect,
  useMemo,
  useState
} from "react";

import {
  useParams,
  useSearchParams
} from "react-router-dom";

import ProductGrid from "../../components/product/ProductGrid";

import ProductFilter from "../../components/product/ProductFilter";

import Loader from "../../components/common/Loader";

import {
  useProducts
} from "../../hooks/useProducts";

function Shop() {
  const { category } =
    useParams();

  const [searchParams] =
    useSearchParams();

  const search =
    searchParams.get("search") ||
    "";

  const [sort, setSort] =
    useState("default");

  const [selectedCategory, setSelectedCategory] =
    useState(category || "");

  useEffect(() => {
    setSelectedCategory(category || "");
  }, [category]);

  const {
    products,
    loading,
    error
  } = useProducts(
    selectedCategory,
    search
  );

  const sortedProducts =
    useMemo(() => {
      const result = [
        ...products
      ];

      if (sort === "low") {
        result.sort(
          (a, b) =>
            a.price - b.price
        );
      }

      if (sort === "high") {
        result.sort(
          (a, b) =>
            b.price - a.price
        );
      }

      if (sort === "rating") {
        result.sort(
          (a, b) =>
            b.rating - a.rating
        );
      }

      return result;
    }, [products, sort]);

  return (
    <div className="shop-page page-container">
      <div className="shop-header">
        <div>
          <p className="eyebrow">
            COLLECTION
          </p>

          <h1>
            {selectedCategory
              ? `${selectedCategory} Collection`
              : "Shop All"}
          </h1>

          {search && (
            <p>
              Search results for:
              {" "}
              <strong>
                {search}
              </strong>
            </p>
          )}
        </div>

        <span className="product-count">
          {products.length} Products
        </span>
      </div>

      <ProductFilter
        sort={sort}
        setSort={setSort}
        category={
          selectedCategory
        }
        setCategory={
          setSelectedCategory
        }
      />

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error-state">
          <h3>
            Something went wrong
          </h3>

          <p>{error}</p>
        </div>
      ) : (
        <ProductGrid
          products={sortedProducts}
        />
      )}
    </div>
  );
}

export default Shop;