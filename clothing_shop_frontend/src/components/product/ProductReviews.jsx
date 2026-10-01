import { Star } from "lucide-react";

function ProductReviews() {
  return (
    <section className="reviews-section">
      <div className="section-heading">
        <h2>Customer Reviews</h2>
        <p>What our customers say</p>
      </div>

      <div className="review-card">
        <div className="review-top">
          <strong>Rahul</strong>

          <div className="review-stars">
            <Star
              size={15}
              fill="currentColor"
            />
            <Star
              size={15}
              fill="currentColor"
            />
            <Star
              size={15}
              fill="currentColor"
            />
            <Star
            
              size={15}
              fill="currentColor"
            />
            <Star
              size={15}
              fill="currentColor"
            />
          </div>
        </div>

        <p>
          Excellent quality and very
          comfortable. The fitting is
          perfect.
        </p>
      </div>

      <div className="review-card">
        <div className="review-top">
          <strong>Priya</strong>

          <div className="review-stars">
            <Star
              size={15}
              fill="currentColor"
            />
            <Star
              size={15}
              fill="currentColor"
            />
            <Star
              size={15}
              fill="currentColor"
            />
            <Star
              size={15}
              fill="currentColor"
            />
            <Star
              size={15}
              fill="currentColor"
            />
          </div>
        </div>

        <p>
          Beautiful design and fast
          delivery. I really liked it.
        </p>
      </div>
    </section>
  );
}
export default ProductReviews;