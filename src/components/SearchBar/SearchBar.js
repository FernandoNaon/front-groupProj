import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getShowByName } from "../../redux/actions";
import style from "./SearchBar.module.css";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert("Debe ingresar un nombre de espectáculo");
    } else {
      dispatch(getShowByName(name));
      //aca iria el dispatch de todos los nombres de las obras de teatro
      setName("");
    }
  }
  return (
    <div className={style.searchContainer}>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text"
          placeholder="Buscar en A sala llena..."
          onChange={(e) => handleInputChange(e)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          value={name}
        />
        <Button
          variant="secondary"
          id="button-addon2"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Buscar
        </Button>
      </InputGroup>
    </div>
  );
}
