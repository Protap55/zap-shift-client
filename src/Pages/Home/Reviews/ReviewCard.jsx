import reviewcoat from "../../../assets/reviewQuote.png";

const ReviewCard = ({ review }) => {
  const { user_photoURL, userName: Name, review: Comment, position } = review;

  return (
    <div className="h-full">
      <div className="card bg-base-100 rounded-2xl shadow-sm h-full">
        <div className="card-body space-y-4">
          {/* Quote */}
          <img
            className="h-10 w-10 sm:h-12 sm:w-12"
            src={reviewcoat}
            alt="review"
          />

          {/* Comment */}
          <p className="text-sm sm:text-base lg:text-lg text-base-content leading-relaxed">
            {Comment}
          </p>

          {/* Divider */}
          <div className="border-b border-dashed border-secondary"></div>

          {/* User Info */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              className="rounded-full w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
              src={user_photoURL}
              alt={Name}
            />
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary">
                {Name}
              </h3>
              <p className="text-sm sm:text-base text-accent-content">
                {position}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
