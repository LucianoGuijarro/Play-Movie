import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Serch = () => {
  const [serchText, setSerchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search/${serchText}`)
  }
  return (
    <form class="d-flex" role="search" onSubmit={handleSubmit}>
    <input class="form-control me-2" type="text" value={serchText} onChange={(e) => setSerchText(e.target.value)} placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
  );
};

export default Serch;
