import React, { Component } from "react";
import Loader from "../../components/Loader";
import { getCard } from "../../services/cardService";
import { getDate } from "../../services/timeService";
import PageHeader from "./../../components/pageHeader";
import CardDetailsHeader from "./CardDetailsHeader";
import CardInfo from "./CardInfo";
import { Link, Navigate } from "react-router-dom";

class CardDetails extends Component {
  state = {
    isMounted: false,
    card: {},
    error: "",
  };

  async componentDidMount() {
    try {
      const { id } = this.props;
      const { data: card } = await getCard(id);
      this.setState({ isMounted: true, card });
    } catch (error) {
      this.setState({ errors: error.message });
    }
  }

  render() {
    const { isMounted, error } = this.state;
    if(error) return <Navigate to="/error"/>
    if (!isMounted) return <Loader />;

    const {
      title,
      subTitle,
      description,
      address,
      phone,
      image: { url, alt },
      bizNumber,
      likes,
      createdAt,
    } = this.state.card;

    return (
      <div className="container">
        <PageHeader
          title="Card Details"
          subTitle="Here you will find more details about the Business card"
        />

        <div className="row">
          <div className="col-12 col-md-4 center">
            <div>
              <CardDetailsHeader title={title} subTitle={subTitle} />

              <CardInfo title="Address" description={address} />
              <CardInfo title="Phone num" description={phone} />
              <CardInfo title="Number of likes" description={likes.length} />
              <CardInfo title="Business number" description={bizNumber} />
              <CardInfo title="Posted on" description={getDate(createdAt)} />
              <hr />
              <CardInfo
                title="Business description"
                description={description}
              />
            </div>
          </div>

          <div className="col-12 col-md-8 center">
            <img className="img-fluid" src={url} alt={alt} />
          </div>
        </div>

        <div className="center">
          <Link className="text-dark mt-2" to="/">
            Click here to return to the home page...
          </Link>
        </div>
      </div>
    );
  }
}

export default CardDetails;
