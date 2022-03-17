import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getShowByName, allShows } from "../../redux/actions";
import style from "./SearchBar.module.css";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import swal from 'sweetalert'
import { BiSearchAlt } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";

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
      swal("Debe ingresar un nombre de espectáculo", '', 'warning');
    } else {
      dispatch(getShowByName(name));
      //aca iria el dispatch de todos los nombres de las obras de teatro
      setName("");
    }
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(allShows());
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
        <div className={style.btnGroup}>
          <Button
            variant="secondary"
            id="button-addon2"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            <BiSearchAlt />
          </Button>
          <Button
            variant="secondary"
            id="button-addon2"
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            <FiRefreshCw />
          </Button>
        </div>
      </InputGroup>
    </div>
  );
}
