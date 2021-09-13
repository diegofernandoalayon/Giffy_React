import useUser from "../../hooks/useUser";
import { useLocation } from "wouter";
import "./Fav.css";

export default function Fav({ id }) {
  const { isLogged,fav } = useUser();
  const [, pushLocation] = useLocation();
  const handleClick = () => {
    if (!isLogged) return pushLocation("/login");
  fav({id});
    // alert(id);
  };
  return (
    <button className='gf-Fav' onClick={handleClick}>
      <span role="img" aria-label="Fav Gif">
        ❤️
      </span>
    </button>
  );
}
