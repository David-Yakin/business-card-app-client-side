import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardBody = ({ card }) => {
  const { address, bizNumber, phone, _id } = card;
  return (
    <div className="card-body p-2">
      <div>
        <strong>Tel: </strong>
        {phone}
      </div>
      <div>
        <strong>Address: </strong>
        {address}
      </div>
      <div>
        <strong>Card Number: </strong>
        {bizNumber}
      </div>
      <Link className="text-dark" to={`card-details/${_id}`}>
        More details...
      </Link>
    </div>
  );
};

CardBody.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardBody;
