import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export function useProducts(
  category = "",
  search = ""
) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        setLoading(true);

        const data = await getProducts({
          category,
          search
        });

        if (mounted) {
          setProducts(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err.message ||
              "Unable to load products"
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, [category, search]);

  return {
    products,
    loading,
    error
  };
}