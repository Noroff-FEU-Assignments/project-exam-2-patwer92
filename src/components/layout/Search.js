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
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const url = `${BASE_URL}treatments`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 1) {
      matches = APIData.filter((item) => {
        const regex = new RegExp(`${text}`, "gi");
        return item.title.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestions(matches);
    setText(text);
  };

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  };

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
                value={text}
                placeholder="Søk alle behandlinger ..."
                className="search__input"
                onChange={(e) => {
                  onChangeHandler(e.target.value);
                  searchItems(e.target.value);
                }}
                onKeyDown={(e) => {
                  searchItems(e.target.value);
                }}
              />
            </Form>
            <div className="search__suggestions">
              {suggestions &&
                suggestions.map((suggestion, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      onSuggestHandler(suggestion.title);
                    }}
                  >
                    {suggestion.title}
                  </div>
                ))}
            </div>
            <div className="search__container">
              {searchInput.length > 2
                ? filteredResults.map((item) => {
                    return (
                      <div className="search__block">
                        <img src={item.image.url} alt="" className="search__image" />
                        <div className="search__content">
                          <h3 className="search__title">{item.title}</h3>
                          <p className="search__price">Kr {item.price},-</p>
                          <Link
                            to={`treatment/details/${item.id}`}
                            className="search__button btn btn--secondary mb-4"
                            onClick={handleClose}
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

// APIData.map((item) => {
//                     return (
//                       <div className="search__block">
//                         <img src={item.image.url} alt="" className="search__image" />
//                         <div className="search__content">
//                           <h3 className="search__title">{item.title}</h3>
//                           <p className="search__price">Kr {item.price},-</p>
//                           <Link
//                             to={`treatment/details/${item.id}`}
//                             className="search__button btn btn--secondary mb-4"
//                             onClick={handleClose}
//                           >
//                             LES MER
//                           </Link>
//                         </div>
//                       </div>
//                     );
//                   })
