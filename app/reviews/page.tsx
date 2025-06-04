// Server Component - No "use client" directive

import { cache } from "react";
import ReviewsClient from "./ReviewsClient";
import { Review, generateReviews } from "./utils";

// Add cache configuration to optimize performance
export const revalidate = 3600; // Revalidate every hour

// Cache the review generation using React cache
const getReviews = cache((): Review[] => {
  console.log(
    "Generating reviews on server - this should only happen once per deployment or revalidation"
  );
  return generateReviews();
});

export default function Reviews() {
  // Get cached reviews
  const reviews: Review[] = getReviews();

  // Calculate stats on the server (these are lightweight operations)
  const averageRating: number =
    reviews.reduce((acc: number, review: Review) => acc + review.rating, 0) /
    reviews.length;

  const ratingCounts: Record<number, number> = reviews.reduce(
    (acc: Record<number, number>, review: Review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>
  );

  // Pass data to client component
  return (
    <ReviewsClient
      reviews={reviews}
      averageRating={averageRating}
      ratingCounts={ratingCounts}
    />
  );
}
