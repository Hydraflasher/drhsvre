"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "@/lib/motion";
import {
  AlertTriangle,
  CheckCircle,
  Search,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Review } from "./utils";

// Extract ReviewCard to a separate component for better performance
const ReviewCard = ({ review }: { review: Review }) => (
  <motion.div
    key={review.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
      review.rating <= 2 ? "border-l-4 border-red-500" : ""
    }`}
  >
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 mr-4">
        {review.image ? (
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={review.image}
              alt={review.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-600 dark:text-gray-300">
              {review.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {review.name}
        </h3>
        <div className="flex items-center">
          <div className="flex mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= review.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          {review.verified && (
            <span className="text-xs text-green-600 dark:text-green-400 flex items-center">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified
            </span>
          )}
        </div>
      </div>
      <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
        {new Date(review.date).toLocaleDateString()}
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{review.content}</p>
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center space-x-4">
        <span className="flex items-center text-gray-500 dark:text-gray-400">
          <ThumbsUp className="w-4 h-4 mr-1" />
          {review.helpful}
        </span>
        <span className="flex items-center text-gray-500 dark:text-gray-400">
          <ThumbsDown className="w-4 h-4 mr-1" />
          {review.unhelpful}
        </span>
      </div>
      {review.rating <= 2 && (
        <span className="flex items-center text-red-500">
          <AlertTriangle className="w-4 h-4 mr-1" />
          Reported
        </span>
      )}
    </div>
  </motion.div>
);

interface ReviewsClientProps {
  reviews: Review[];
  averageRating: number;
  ratingCounts: Record<number, number>;
}

export default function ReviewsClient({
  reviews,
  averageRating,
  ratingCounts,
}: ReviewsClientProps) {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 12;

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterRating, sortBy]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use memoization for expensive filtering and sorting operations
  const filteredReviews = useMemo(() => {
    return reviews
      .filter(
        (review) =>
          review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((review) =>
        filterRating === "all" ? true : review.rating === parseInt(filterRating)
      )
      .sort((a, b) => {
        if (sortBy === "newest")
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        if (sortBy === "oldest")
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        if (sortBy === "highest") return b.rating - a.rating;
        if (sortBy === "helpful")
          return b.helpful - b.unhelpful - (a.helpful - a.unhelpful);
        return a.rating - b.rating;
      });
  }, [reviews, searchTerm, filterRating, sortBy]);

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  const currentReviews = useMemo(() => {
    return filteredReviews.slice(
      (currentPage - 1) * reviewsPerPage,
      currentPage * reviewsPerPage
    );
  }, [filteredReviews, currentPage, reviewsPerPage]);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  if (!mounted) return null;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join our community of {reviews.length.toLocaleString()} satisfied
            users
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= averageRating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Based on {reviews.length.toLocaleString()} reviews
                </div>
              </div>

              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <div className="w-12 text-sm text-gray-600 dark:text-gray-400">
                      {rating} stars
                    </div>
                    <div className="flex-1 mx-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className={`h-2 rounded-full ${
                          rating > 3
                            ? "bg-green-400"
                            : rating === 3
                            ? "bg-yellow-400"
                            : "bg-red-400"
                        }`}
                        style={{
                          width: `${
                            ((ratingCounts[rating] || 0) / reviews.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                    <div className="w-16 text-sm text-right text-gray-600 dark:text-gray-400">
                      {(
                        ((ratingCounts[rating] || 0) / reviews.length) *
                        100
                      ).toFixed(1)}
                      %
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search reviews..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <Select value={filterRating} onValueChange={setFilterRating}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4 Stars</SelectItem>
                      <SelectItem value="3">3 Stars</SelectItem>
                      <SelectItem value="2">2 Stars</SelectItem>
                      <SelectItem value="1">1 Star</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="highest">Highest Rated</SelectItem>
                      <SelectItem value="lowest">Lowest Rated</SelectItem>
                      <SelectItem value="helpful">Most Helpful</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {currentReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(
                      (page) =>
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 2 && page <= currentPage + 2)
                    )
                    .map((page, index, array) => (
                      <>
                        {index > 0 && array[index - 1] !== page - 1 && (
                          <span key={`ellipsis-${page}`} className="px-2 py-2">
                            ...
                          </span>
                        )}
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      </>
                    ))}
                  <Button
                    variant="outline"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
