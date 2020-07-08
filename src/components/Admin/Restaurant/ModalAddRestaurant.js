import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FormAddRestaurant from "./FormAddRestaurant";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    top: "2rem",
    bottom: "2rem",
    left: "2rem",
    position: "absolute",
    width: 50 + "%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "auto",
    height: "400px",
  },
}));

export default function SimpleModal(props) {
  const { restaurantData } = props;

  useEffect(() => {
    if (restaurantData) {
      setOpen(true);
    }
  }, [props]);
  const [titleModal, setTitleModal] = useState("Agregar restaurante");
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const handleOpen = () => {
    setOpen(true);
  };

  const getOpen = (is_open) => {
    setOpen(is_open);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{titleModal}</h2>
      <section id="simple-modal-description">
        <FormAddRestaurant open={getOpen} restaurantData={restaurantData} />
      </section>
    </div>
  );

  return (
    <div>
      <AddIcon onClick={handleOpen} />
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
