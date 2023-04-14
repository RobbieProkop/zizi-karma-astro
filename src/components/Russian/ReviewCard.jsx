import { useState } from "react";


const ReviewCard = (review, frontmatter) => {
  const { Content } = review;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // <div
    //   class="inner"
    //   style={{ transform: `translate:(-${activeIndex * 100})` }}
    // >
    //   <div class="review-item">
    //     <Content />
    //     <h3>
    //       {frontmatter.name}, {frontmatter.age}
    //     </h3>
    //   </div>
    // </div>

    
  );
};
export default ReviewCard;
// style={{ transform: `translate:(-${activeIndex * 100})` }}
// <ReviewCard
//   review={review}
//   frontmatter={review.frontmatter}
//   client:load
// />
