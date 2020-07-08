import React from "react";
import LocationOffIcon from "@material-ui/icons/LocationOff";
import ApartmentIcon from "@material-ui/icons/Apartment";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import PhoneIcon from "@material-ui/icons/Phone";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import HighQualityIcon from "@material-ui/icons/HighQuality";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import "./restaurantDesc.scss";
function RestaurantDesc() {
  return (
    <>
      <section className="restaurant-description">
        <RatingAndOpinions />
        <div className="grid">
          <h2>Detalles</h2>
          <strong>RANGO DE PRECIOS</strong>
          <p>$70 - $90 </p>
          <strong>Tipos de comida</strong>
          <p>Italiana, Peruana, Europea, Internacional</p>
          <strong>DETALLES ESPECIALES</strong>
          <p>Apto para vegetarianos</p>
        </div>
        <InformationAndAddress />
      </section>
    </>
  );
}
function InformationAndAddress() {
  return (
    <div className="grid information">
      <h2>Ubicación e información</h2>
      <p>
        <LocationOffIcon />
        <span>Avenida dos de mayo, Lima-Perú</span>
      </p>
      <p>
        <ApartmentIcon />
        <span>A 9km del centro de Lima</span>
      </p>
      <p>
        <LaptopChromebookIcon />
        <a
          href="https://material-ui.com/es/components/material-icons/"
          target="_blank"
        >
          Sitio web
        </a>
      </p>
      <p>
        <PhoneIcon />
        <span>+51 98883838833</span>
      </p>
    </div>
  );
}
function RatingAndOpinions() {
  return (
    <div className="grid information">
      <h2>Calificacion y opiniones</h2>
      <div className="rating">
        <div className="rating-value">
          <strong>3</strong>
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <IconsCheckeed total="3" />
        </div>
      </div>
      <p>
        <CardGiftcardIcon />
        <span>Certificado de excelencia ganador en 2016 - 2019</span>
      </p>
      <hr />
      <p>CALIFICACIONES</p>
      <RatingServices Icon={RestaurantIcon} title="Comida" />
      <RatingServices Icon={RoomServiceIcon} title="Servicio" />
      <RatingServices Icon={HighQualityIcon} title="Calidad/Precio" />
      <RatingServices Icon={WbIncandescentIcon} title="Ambiente" />
    </div>
  );
}

function RatingServices(props) {
  const { Icon, title } = props;
  return (
    <div className="rating-services">
      <div className="service">
        <Icon />
        <span>{title}</span>
      </div>
      <div>
        <IconsCheckeed total="4" />
      </div>
    </div>
  );
}

function IconsCheckeed(props) {
  const { total } = props;
  const fillIcons = [];
  for (let index = 0; index < total; index++) {
    fillIcons.push(<i className="dot" key={index}></i>);
  }
  for (let index = 0; index < 5 - total; index++) {
    fillIcons.push(<i className="dot unchecked" key={index + "-"}></i>);
  }

  return fillIcons;
}
export default RestaurantDesc;
