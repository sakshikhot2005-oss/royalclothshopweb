import api from "./api";

const demoProducts = [
  {
    id: 1,
    name: "Classic Black Shirt",
    category: "men",
    price: 1499,
    oldPrice: 1999,
    discount: 25,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1599725728598-dc7ed109ff89?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"]
  },

  {
    id: 2,
    name: "Premium White Shirt",
    category: "men",
    price: 1699,
    oldPrice: 2199,
    discount: 23,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1599732494971-a6110ea1ad20?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"]
  },

  {
    id: 3,
    name: "Elegant Women Dress",
    category: "women",
    price: 2499,
    oldPrice: 3299,
    discount: 24,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Red"]
  },

  {
    id: 4,
    name: "Casual Denim Jacket",
    category: "men",
    price: 2299,
    oldPrice: 2999,
    discount: 23,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=85",
    sizes: ["M", "L", "XL"],
    colors: ["Blue"]
  },

  {
    id: 5,
    name: "Women Summer Dress",
    category: "women",
    price: 1899,
    oldPrice: 2499,
    discount: 24,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1571924848943-25c2c95bbb4b?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L"],
    colors: ["Pink", "Blue"]
  },

  {
    id: 6,
    name: "Kids Casual T-Shirt",
    category: "kids",
    price: 799,
    oldPrice: 999,
    discount: 20,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1604482858862-1db908a653e4?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Yellow"]
  },

  {
    id: 7,
    name: "Oversized Cotton T-Shirt",
    category: "men",
    price: 999,
    oldPrice: 1299,
    discount: 23,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1599725728689-f5c3cbb086ae?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"]
  },

  {
    id: 8,
    name: "Women Casual Top",
    category: "women",
    price: 1199,
    oldPrice: 1599,
    discount: 25,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1661705150795-b608b9fe58c6?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L"],
    colors: ["White", "Pink"]
  },

  {
    id: 9,
    name: "Classic Blue Jeans",
    category: "men",
    price: 1999,
    oldPrice: 2599,
    discount: 23,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?auto=format&fit=crop&w=800&q=85",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue"]
  },

  {
    id: 10,
    name: "Women's Casual Jeans",
    category: "women",
    price: 1799,
    oldPrice: 2299,
    discount: 22,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=800&q=85",
    sizes: ["28", "30", "32", "34"],
    colors: ["Blue"]
  },

  {
    id: 11,
    name: "Kids Denim Jacket",
    category: "kids",
    price: 1299,
    oldPrice: 1699,
    discount: 24,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1758782213532-bbb5fd89885e?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L"],
    colors: ["Blue"]
  },

  {
    id: 12,
    name: "Premium Hoodie",
    category: "men",
    price: 1599,
    oldPrice: 2099,
    discount: 24,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1788909176149-3c31e90e0923?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey"]
  },

  {
    id: 13,
    name: "Tailored Wool-Blend Blazer",
    category: "men",
    price: 5999,
    oldPrice: 7499,
    discount: 20,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1630667208073-82d53b1db540?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Navy"]
  },

  {
    id: 14,
    name: "Premium Linen Shirt",
    category: "men",
    price: 2199,
    oldPrice: 2799,
    discount: 21,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1632226390535-2f02c1a93541?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Ivory", "Sage"]
  },

  {
    id: 15,
    name: "Modern Slim-Fit Chinos",
    category: "men",
    price: 2499,
    oldPrice: 3199,
    discount: 22,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1639747658423-1b00fee36582?auto=format&fit=crop&w=800&q=85",
    sizes: ["30", "32", "34", "36"],
    colors: ["Stone", "Navy"]
  },

  {
    id: 16,
    name: "Merino Knit Polo",
    category: "men",
    price: 2899,
    oldPrice: 3699,
    discount: 22,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1642886512884-529c2fa16aa9?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream"]
  },

  {
    id: 17,
    name: "Satin Wrap Midi Dress",
    category: "women",
    price: 4299,
    oldPrice: 5499,
    discount: 22,
    rating: 4.9,
    image:
      "https://images.unsplash.com/flagged/photo-1553277004-39d655b57262?auto=format&fit=crop&w=800&q=85",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Burgundy", "Emerald"]
  },

  {
    id: 18,
    name: "Signature Tailored Blazer",
    category: "women",
    price: 4999,
    oldPrice: 6299,
    discount: 21,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1627292441194-0280c19e74e4?auto=format&fit=crop&w=800&q=85",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Camel"]
  },

  {
    id: 19,
    name: "Linen Co-ord Set",
    category: "women",
    price: 3899,
    oldPrice: 4899,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1662532577856-e8ee8b138a8b?auto=format&fit=crop&w=800&q=85",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Olive"]
  },

  {
    id: 20,
    name: "Pleated Wide-Leg Trousers",
    category: "women",
    price: 2799,
    oldPrice: 3499,
    discount: 20,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=800&q=85",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Sand"]
  },

  {
    id: 21,
    name: "Soft-Touch Knit Cardigan",
    category: "women",
    price: 3199,
    oldPrice: 3999,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1657815929003-b97cc426cb3d?auto=format&fit=crop&w=800&q=85",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Oatmeal", "Rose"]
  },

  {
    id: 22,
    name: "Botanical Print Maxi Dress",
    category: "women",
    price: 4599,
    oldPrice: 5799,
    discount: 21,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1551113006-731674fbb3ff?auto=format&fit=crop&w=800&q=85",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral"]
  },

  {
    id: 23,
    name: "Kids Classic Oxford Shirt",
    category: "kids",
    price: 1199,
    oldPrice: 1499,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1725147874938-7904e3362841?auto=format&fit=crop&w=800&q=85",
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    colors: ["Sky Blue", "White"]
  },

  {
    id: 24,
    name: "Kids Quilted Puffer Jacket",
    category: "kids",
    price: 2499,
    oldPrice: 3199,
    discount: 22,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1731083633952-7a1b3b49d5bd?auto=format&fit=crop&w=800&q=85",
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    colors: ["Navy", "Red"]
  },

  {
    id: 25,
    name: "Kids Cozy Knit Hoodie",
    category: "kids",
    price: 1599,
    oldPrice: 1999,
    discount: 20,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1724365309223-89899d9e9845?auto=format&fit=crop&w=800&q=85",
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    colors: ["Lilac", "Mint"]
  },

  {
    id: 26,
    name: "Kids Denim Overall Set",
    category: "kids",
    price: 1899,
    oldPrice: 2399,
    discount: 21,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1502451885777-16c98b07834a?auto=format&fit=crop&w=800&q=85",
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    colors: ["Denim Blue"]
  },

  {
    id: 27,
    name: "Kids Occasion Party Dress",
    category: "kids",
    price: 2299,
    oldPrice: 2899,
    discount: 21,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1695262620884-b1fdb55a631e?auto=format&fit=crop&w=800&q=85",
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    colors: ["Blush", "Navy"]
  },

  {
    id: 28,
    name: "Kids Cotton Jogger Set",
    category: "kids",
    price: 1799,
    oldPrice: 2299,
    discount: 22,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1604303768345-038b79a8c47a?auto=format&fit=crop&w=800&q=85",
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    colors: ["Grey", "Blue"]
  },

  {
    id: 29,
    name: "Kids Striped Polo Shirt",
    category: "kids",
    price: 999,
    oldPrice: 1299,
    discount: 23,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1528145203756-0ed7f01ee120?auto=format&fit=crop&w=800&q=85",
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    colors: ["Navy Stripe", "Green Stripe"]
  },

  {
    id: 30,
    name: "Kids Lightweight Rain Jacket",
    category: "kids",
    price: 1999,
    oldPrice: 2499,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1611428813653-aa606c998586?auto=format&fit=crop&w=800&q=85",
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    colors: ["Yellow", "Teal"]
  }
];

export async function getProducts({
  category = "",
  search = ""
} = {}) {
  try {
    const response =
      await api.get(
        "/products",
        {
          params: {
            category:
              category || undefined,
            search:
              search || undefined
          }
        }
      );

    if (
      Array.isArray(response.data) &&
      response.data.length > 0
    ) {
      return response.data.filter(
        (product) => {
          const matchesCategory =
            !category ||
            product.category?.toLowerCase() ===
              category.toLowerCase();

          const matchesSearch =
            !search ||
            product.name?.toLowerCase().includes(
              search.toLowerCase()
            );

          return matchesCategory && matchesSearch;
        }
      );
    }

    let result = [...demoProducts];

    if (category && category !== "new-arrivals") {
      result = result.filter(
        (product) =>
          product.category.toLowerCase() ===
          category.toLowerCase()
      );
    }

    if (search) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(
            search.toLowerCase()
          )
      );
    }

    return result;
  } catch {
    let result = [
      ...demoProducts
    ];

    if (
      category &&
      category !==
        "new-arrivals"
    ) {
      result =
        result.filter(
          (product) =>
            product.category.toLowerCase() ===
            category.toLowerCase()
        );
    }

    if (search) {
      result =
        result.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );
    }

    return result;
  }
}

export async function getProductById(
  id
) {
  try {
    const response =
      await api.get(
        `/products/${id}`
      );

    return response.data;
  } catch {
    return demoProducts.find(
      (product) =>
        String(product.id) ===
        String(id)
    );
  }
}

export async function getFeaturedProducts() {
  try {
    const products =
      await getProducts();

    return products.slice(
      0,
      8
    );
  } catch {
    return demoProducts.slice(
      0,
      8
    );
  }
}

export { demoProducts };