import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import restaurantData from "../../../api/restaurant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./_restaurant_list.scss";

export default function SimpleTable(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const { receive } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (item) => {
    receive(item);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="main-container-table">
      <section className="table-grid">
        <div>Imagen</div>
        <div>Nombre</div>
        <div>Dirección</div>
        <div>País</div>
        <div>Ciudad</div>
        <div>Código zip</div>
        <div>Categoria</div>
        <div>Rating</div>
        <div>Comentarios</div>
        <div></div>
      </section>
      {restaurantData.map((item, index) => {
        return (
          <section className="table-grid" key={index}>
            <div text-responsive="Imagen">
              <img src={item.imageSrc} />
            </div>
            <div text-responsive="Nombre">{item.name}</div>
            <div text-responsive="Dirección">{item.address}</div>
            <div text-responsive="País">{item.country}</div>
            <div text-responsive="Ciudad">{item.state}</div>
            <div text-responsive="Código zip">{item.zipCode}</div>
            <div text-responsive="Categoría">{item.category}</div>
            <div text-responsive="Rating">{item.rating}</div>
            <div text-responsive="Comentarios">{item.reviewCount}</div>
            <div text-responsive="">
              <MoreVertIcon onClick={handleClick} />
              <Popover
                id={index}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <section className="icons-table">
                  <EditIcon onClick={() => handleOpen(item)} />
                  <DeleteIcon />
                </section>
              </Popover>
            </div>
          </section>
        );
      })}
    </div>
  );
}
