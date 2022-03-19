import React from "react";
import PageHeader from "../components/pageHeader";
import { getCards } from "../services/cardService";
import CardExtends from "../components/Cards/CardExtends";
import SearchBar from "../components/SearchBar";
import DisplayControllers from "./../components/DisplayModes/DisplayControllers";
import DisplayModes from "./../components/DisplayModes/DisplayModes";
import Loader from "../components/Loader";

class HomePage extends CardExtends {
  state = {
    data: [],
    cards: [],
    isMounted: false,
    display: "cards",
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
    const { isMounted, display } = this.state;
    if (!isMounted) return <Loader />;

    return (
      <React.Fragment>
        <PageHeader
          title="Business Card App"
          subTitle="Here you will find business cards"
        />

        <div className="container">
          <SearchBar
            placeholder="Enter business name or number"
            handleChange={this.handleChange}
          />
          <DisplayControllers
            display={display}
            handleDisplay={this.handleDisplay}
          />
          <DisplayModes
            cards={cards}
            handleDelete={this.handleDelete}
            changeLikeStatus={this.changeLikeStatus}
            display={display}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
