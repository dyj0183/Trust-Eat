import styles from "./RestaurantCard.module.css";
import StarReviews from "../StarReviews/StarReviews";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  //Set up if this is the first review
  let componentReview = (
      <div className={styles.ratings}>
          <StarReviews review={props.restaurante.rating}/>
          <span> First to review!</span>
      </div>
  );
  
  if (props.restaurante.review > 0) {
    componentReview  = (
        <div className={styles.ratings}>
            <StarReviews review={props.restaurante.rating}/>
            <span> {props.restaurante.numberOfReviews} reviews</span>
        </div>
    )
  }

  return (
    <Link  to={'restaurant/' + props.restaurante.id} key={props.restaurante.id} style={{ textDecoration: 'none' }}>
    <div className={styles.restaurant_card}>
      <div className={styles.restaurant_card_top_title}>
        <h3>{props.restaurante.name}</h3>
        <h3>{props.restaurante.price_range}</h3>
      </div>
      {componentReview}
      <p className={styles.restaurant_card_single_description}>
        {props.restaurante.address}
      </p>
      <p className={styles.restaurant_card_single_description}>
        {props.restaurante.phone}
      </p>
      <p className={styles.restaurant_card_single_description}>
        {props.restaurante.type.toString().replace(",", ", ")}
      </p>
      <p className={styles.restaurant_card_single_description}>
        <a href={props.restaurante.website}>{props.restaurante.website}</a>
      </p>
    </div>
    </Link>
  );
};

export default RestaurantCard;
