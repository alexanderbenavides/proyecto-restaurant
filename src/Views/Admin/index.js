import React from "react";
import "./index.scss";
import RestaurantList from "../../components/Admin/Restaurant/RestaurantList";
import ModalAddrestaurant from "../../components/Admin/Restaurant/ModalAddRestaurant";
class IndexView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
    };
  }
  receive = (data) => {
    this.setState({ data });
  };
  render() {
    return (
      <section className="restaurant-container">
        <ModalAddrestaurant restaurantData={this.state.data} />
        <RestaurantList receive={this.receive} />
      </section>
    );
  }
}

export default IndexView;
