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
    '/heart.png'
  ]:[
    'Add Gif to favorites',
    '/like.png'
  ]
  return (
    <button className='gf-Fav' onClick={handleClick}>
      <img src={emoji} alt={label} width='20px'/>
      {/* <span role="img" aria-label={label} src={emoji}>
       
      </span> */}
    </button>
  );
}
