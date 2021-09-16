import useUser from "../../hooks/useUser";
import { useState } from "react";
import { useLocation } from "wouter";
import Modal from "../Modal";
import Login from "../Login";
import "./Fav.css";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const [, pushLocation] = useLocation();
  const [showModal, setShowModal] = useState(false);

  const isFaved = favs.some((favId) => favId === id);
  const handleClick = () => {
    if (!isLogged) return setShowModal(true);
    addFav({ id });
    // alert(id);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const handleLogin = ()=>{
    setShowModal(false)
  }
  const [
    //ternaria con un array desestructurado
    label,
    emoji,
  ] = isFaved
    ? ["Remove Gif from favorites", "/heart.png"]
    : ["Add Gif to favorites", "/like.png"];
  return (
    <>
      <button className="gf-Fav" onClick={handleClick}>
        <img src={emoji} alt={label} width="20px" />
        {/* <span role="img" aria-label={label} src={emoji}>
       
      </span> */}
      </button>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin}/>
        </Modal>
      )}
    </>
  );
}
