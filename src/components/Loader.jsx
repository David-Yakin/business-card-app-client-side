import { InfinitySpin } from "react-loader-spinner";
import PropTypes from "prop-types";

const Loader = ({ width = 200, color = "#00BFFF" }) => {
  return (
    <div style={{ minHeight: "85vh" }} className="center">
      <InfinitySpin color={color} width={width} />
    </div>
  );
};

Loader.propTypes = {
  width: PropTypes.string,
  color: PropTypes.number,
};
export default Loader;
