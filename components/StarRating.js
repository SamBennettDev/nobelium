import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {
  if (!rating) {
    return;
  }
  // Ensure rating is within the range of 1 to 10
  const validRating = Math.max(1, Math.min(rating || 0, 10));

  // Convert rating from 1-10 scale to 0-5 scale
  const starRating = validRating / 2;

  // Determine the full, half, and empty stars
  let fullStars = Math.floor(starRating);
  let halfStars = starRating % 1 !== 0 ? 1 : 0;
  let emptyStars = 5 - fullStars - halfStars;

  // Ensure fullStars, halfStars, and emptyStars are valid numbers
  fullStars = Number.isFinite(fullStars) ? fullStars : 0;
  halfStars = Number.isFinite(halfStars) ? halfStars : 0;
  emptyStars = Number.isFinite(emptyStars) ? emptyStars : 0;

  // Manually create arrays for full, half, and empty stars
  const fullStarsArray = new Array(fullStars).fill(null);
  const halfStarsArray = new Array(halfStars).fill(null);
  const emptyStarsArray = new Array(emptyStars).fill(null);

  return (
    <div className="flex items-center">
      {fullStarsArray.map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-black dark:text-gray-100"
        />
      ))}
      {halfStarsArray.map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarHalfAlt}
          className="text-black dark:text-gray-100"
        />
      ))}
      {emptyStarsArray.map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarOutline}
          className="text-black dark:text-gray-100"
        />
      ))}
    </div>
  );
};

export default StarRating;
