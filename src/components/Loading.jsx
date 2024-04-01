import PropTypes from "prop-types";

function Loading({ isLoading }) {
  return <div>{isLoading && <h1>The list is loading</h1>}</div>;
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
