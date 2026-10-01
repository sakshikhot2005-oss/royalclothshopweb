export function formatCurrency(
  amount
) {
  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }
  ).format(amount || 0);
}

export function calculateDiscount(
  oldPrice,
  price
) {
  if (!oldPrice || !price) {
    return 0;
  }

  return Math.round(
    ((oldPrice - price) /
      oldPrice) *
      100
  );
}

export function truncateText(
  text,
  length = 100
) {
  if (!text) {
    return "";
  }

  if (text.length <= length) {
    return text;
  }

  return (
    text.substring(0, length) +
    "..."
  );
}

export function getImageUrl(
  image
) {
  if (!image) {
    return "/images/products/default.jpg";
  }

  return image;
}