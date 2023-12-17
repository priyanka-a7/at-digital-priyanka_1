import Button from "../core/button";
import { PropTypes } from "prop-types";

const PictureCard = ({ imageUrl, title, text, reverse = false }) => {
  return (
    <div
      className={`flex justify-center items-end gap-y-[80px] my-[80px] mx-[40px]`}
    >
      <div
        className={`flex justify-center md:justify-between items-center w-full max-w-[1064px] flex-col md:flex-row`}
      >
        <div
          className={`flex [flex:1] justify-center ${
            reverse && "order-0 md:order-last"
          }`}
        >
          <img
            className="w-full sm:max-w-[275px]  md:max-w-[414px] min-w-[275px]"
            alt="Image"
            src={imageUrl}
          />
        </div>

        <div className="flex [flex:2] max-w-[542px] gap-[20px] flex-col items-center md:items-start text-center md:text-left">
          <p className="w-full font-semibold text-[27px] text-primary tracking-[0.4px]">
            {title}
          </p>
          <p className="text-base">{text}</p>
          <Button text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};

PictureCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  reverse: PropTypes.boolean,
};

export default PictureCard;
