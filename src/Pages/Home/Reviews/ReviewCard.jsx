import reviewcoat from "../../../assets/reviewQuote.png";

const ReviewCard = ({ review }) => {
  const { user_photoURL, userName: Name, review: Comment, position } = review;
  return (
    <div>
      <div className="card bg-base-100 rounded-2xl  shadow-sm">
        <div className="card-body">
          <img
            className="h-12 w-12 text-accent-content"
            src={reviewcoat}
            alt="review"
          />
          <p>{Comment}</p>
          <div className="border-b-2 border-dashed text-secondary"></div>

          <div className="flex items-center justify-items-end gap-4">
            <div>
              <img
                className="rounded-full w-20 h-20"
                src={user_photoURL}
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary">{Name}</h3>
              <p className="text-accent-content">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
