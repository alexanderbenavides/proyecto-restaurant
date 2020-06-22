import axios from "axios";
import { config } from "./config";
export function getCountriesApi() {
  const url = `https://parseapi.back4app.com/classes/Country?limit=50&excludeKeys=emoji`;
  return axios.get(`${url}`, config);
}

export function getStatesByCountryApi(country) {
  const where = encodeURIComponent(
    JSON.stringify({
      country: {
        __type: "Pointer",
        className: "Country",
        objectId: country,
      },
    })
  );
  const url = `https://parseapi.back4app.com/classes/City?limit=50&where=${where}`;
  return axios.get(`${url}`, config);
}

export function getRestaurantCategoryApi() {
  return [
    {
      code: "0",
      value: "Fast Food",
    },
    {
      code: "1",
      value: "Fast Casual",
    },
    {
      code: "2",
      value: "Buffet",
    },
    {
      code: "3",
      value: "Temáticos",
    },
    {
      code: "4",
      value: "Take Away o para llevar",
    },
    {
      code: "5",
      value: "de Autor",
    },
    {
      code: "6",
      value: "Fusión",
    },
    {
      code: "7",
      value: "Alta cocina (gourmet)",
    },
  ];
}
