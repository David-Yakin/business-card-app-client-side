import React from "react";
import PageHeader from "../components/pageHeader";
import { getCards } from "../services/cardService";
import CardExtends from "../components/Cards/CardExtends";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";
import FavoriteCards from "../components/Cards/FavCards";

class MyFavoriteCards extends CardExtends {
  state = {
    data: [],
    cards: [],
    isMounted: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getCards();
      this.setState({ data, cards: data, isMounted: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const cards = [...this.state.cards];
    const { isMounted } = this.state;
    const { user } = this.props;
    if (!user) return <Navigate to="/" />;
    if (!isMounted) return <Loader />;

    return (
      <React.Fragment>
        <PageHeader
          title="My favorite cards"
          subTitle="Here you can find your favorite business cards"
        />

        <div className="container">
          <FavoriteCards
            cards={cards}
            user={user}
            changeLikeStatus={this.changeLikeStatus}
            handleDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MyFavoriteCards;
