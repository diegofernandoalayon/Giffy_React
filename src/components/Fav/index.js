import useUser from "../../hooks/useUser";
import { useLocation } from "wouter";
import "./Fav.css";

export default function Fav({ id }) {
  const { isLogged,addFav,favs } = useUser();
  const [, pushLocation] = useLocation();

  const isFaved = favs.some(favId => favId === id)
  const handleClick = () => {
    if (!isLogged) return pushLocation("/login");
 addFav({id});
    // alert(id);
  };
  const[//ternaria con un array desestructurado 
    label,
    emoji
  ] = isFaved ?[
    'Remove Gif from favorites',
    '❌'
  ]:[
    'Add Gif to favorites',
    '❤️'
  ]
  return (
    <button className='gf-Fav' onClick={handleClick}>
      <span role="img" aria-label={label}>
        {emoji}
      </span>
    </button>
  );
}
