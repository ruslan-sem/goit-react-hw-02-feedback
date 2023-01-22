import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arr = Object.keys(options);
  return (
    <div>
      {arr.map(item => (
        <button type="button" key={item} onClick={() => onLeaveFeedback(item)}>
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
