import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  makeStyles,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";
import {
  getCountriesApi,
  getStatesByCountryApi,
  getRestaurantCategoryApi,
} from "../../../api/externalData";
import Select from "./Select";
import "./_restaurantAdd.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function CenteredGrid(props) {
  const { open } = props;
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  const [formData, setFormData] = useState({
    imageSrc: "",
    name: "",
    address: "",
    country: "",
    state: "",
    zipCode: "",
    category: "",
    rating: 0,
    reviewCount: 0,
  });

  const classes = useStyles();
  const handleCloseModal = () => {
    open(false);
  };

  const setDataToForm = (from, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [from]: value,
    }));
  };
  const getCategoryId = (string) => {
    setDataToForm("category", string);
  };
  const getStateId = (string) => {
    setDataToForm("state", string);
  };
  const getCountryId = (string) => {
    setDataToForm("country", string);

    getStatesByCountryApi(string)
      .then((response) => {
        if (response.status === 200) {
          let data = response.data.results.map((state) => {
            return {
              code: state.objectId,
              value: state.name,
            };
          });
          setStates(data);
        }
      })
      .catch(() => {
        console.log("error");
      });
  };

  const sendFormData = (e) => {
    e.preventDefault();

    console.log(formData);
    // open(false);
  };
  useEffect(() => {
    getCountriesApi()
      .then((response) => {
        if (response.status === 200) {
          let data = response.data.results.map((country) => {
            return {
              code: country.objectId,
              value: country.name,
            };
          });
          setCountries(data);
        }
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <form onSubmit={sendFormData}>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <InputLabel>Nombre</InputLabel>
              <Input
                required
                id="my-input"
                onChange={(e) => {
                  setDataToForm("name", e.target.value);
                }}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <InputLabel>Dirección</InputLabel>
              <Input
                required
                id="my-input"
                onChange={(e) => {
                  setDataToForm("address", e.target.value);
                }}
              />
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <Select
                placeholderData="País"
                selectData={countries}
                selectId={getCountryId}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <Select
                placeholderData="Ciudad"
                selectData={states}
                selectId={getStateId}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <InputLabel>Código postal</InputLabel>
              <Input
                required
                id="my-input"
                onChange={(e) => {
                  setDataToForm("zipCode", e.target.value);
                }}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <Select
                placeholderData="catergoría"
                selectData={getRestaurantCategoryApi()}
                selectId={getCategoryId}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <InputLabel>Rating</InputLabel>
              <Input
                required
                type="number"
                id="my-input"
                onChange={(e) => {
                  setDataToForm("rating", e.target.value);
                }}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <InputLabel>Comentarios</InputLabel>
              <Input
                type="number"
                required
                id="my-input"
                onChange={(e) => {
                  setDataToForm("reviewCount", e.target.value);
                }}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <Button color="primary" type="submit">
                Guardar
              </Button>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <FormControl className="form-add">
              <Button variant="contained" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </form>
  );
}
