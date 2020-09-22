import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import "../styles/ShoppingCategories.css";
import { Link } from "react-router-dom";

export default function ShoppingCard({ title, img, action }) {
  return (
    <Card className="card">
      <CardHeader className="card__title" title={title} />

      <CardMedia className="card__media" image={img} />

      <CardActions className="card__action">
        <Link>{action}</Link>
      </CardActions>
    </Card>
  );
}
