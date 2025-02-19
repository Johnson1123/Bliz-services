import React from "react";

type Props = {
  rating: number;
};

function Rating({ rating }: Props) {
  return (
    <div className="flex gap-1 mt-2">
      {[...Array(5)].map((_, index) => {
        const isFilled = index < Math.floor(rating);
        const isHalfFilled = index === Math.floor(rating) && rating % 1 !== 0;

        return (
          <svg
            key={index}
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d={
                isHalfFilled
                  ? "M12 .587l3.668 7.431 8.232 1.194-5.95 5.787 1.407 8.193L12 18.896l-7.357 3.865 1.407-8.193-5.95-5.787 8.232-1.194z"
                  : "M12 .587l3.668 7.431 8.232 1.194-5.95 5.787 1.407 8.193L12 18.896l-7.357 3.865 1.407-8.193-5.95-5.787 8.232-1.194z"
              }
              className={
                isFilled || isHalfFilled ? "text-pink" : "text-gray-300"
              }
            />
            {isHalfFilled && (
              <path
                d="M12 2.5l1.5 3.1 3.4.5-2.5 2.4.6 3.5L12 10.9l-3.4 1.8.6-3.5-2.5-2.4 3.4-.5L12 2.5z"
                className="text-pink"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}

export default Rating;
