import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import { SearchIcon } from "@heroicons/react/outline";
import axios from "axios";
import { BASE_URL } from "../../constants/api";

export default function Search() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const url = `${BASE_URL}treatments`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join("").toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <>
      <button onClick={handleShow} className="header__button">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="header__icon" />
      </button>

      <Offcanvas className="search" show={show} onHide={handleClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="search__body">
          <Container fluid>
            <Form className="search__form">
              <FormLabel>
                <SearchIcon className="search__icon" />
              </FormLabel>
              <FormControl
                type="text"
                name="search"
                id="search"
                placeholder="Søk behandlinger ..."
                className="search__input"
                onChange={(e) => searchItems(e.target.value)}
              />
            </Form>
            <div className="search__container">
              {searchInput.length > 0
                ? filteredResults.map((item) => {
                    return (
                      <div className="search__block">
                        <img src={item.image.url} alt="" className="search__image" />
                        <div className="search__content">
                          <h3 className="search__title">{item.title}</h3>
                          <p className="search__price">Kr {item.price},-</p>
                          <p className="search__text">{item.text}</p>
                          <Link
                            to={`treatment/details/${item.id}`}
                            className="search__button btn btn--secondary mb-4"
                          >
                            LES MER
                          </Link>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
