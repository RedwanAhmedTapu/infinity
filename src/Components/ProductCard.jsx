import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 300,
    margin: "0 auto",
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  media: {
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    color: "green",
    fontWeight: "bold",
  },
}));

const ProductCard = (curElem) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={curElem.image} />
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.title}>
          {curElem.name}
        </Typography>
        <Typography variant="body1" className={classes.price}>
          ${curElem.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
