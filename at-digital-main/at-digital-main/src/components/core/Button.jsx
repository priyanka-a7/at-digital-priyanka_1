import {PropTypes} from 'prop-types'

const Button = ({ text }) => {
  return (
    <button className="inline-flex px-[20px] py-[12px] bg-secondary rounded-[4px] box-border">
      <div className="font-bold text-white text-[14px] whitespace-nowrap uppercase">
        {text}
      </div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired
}
export default Button;
