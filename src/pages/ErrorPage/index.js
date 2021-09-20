

// import "./ErrorPage.css";
import { css,jsx } from "@emotion/css";
import { Helmet } from "react-helmet";
import Button from "../../components/Button";

const gifsError = [
    "KlrMS4vyq5KSY",
    "8L0Pky6C83SzkzU55a",
    "oYQ9HRm5Mo7VXeMNVR",
    "3osxY9kuM2NGUfvThe",
    "haZOqHKz9tTfW",
    "mq5y2jHRCAqMo",
];
const containt = css`
width: 40%;
height: 100vh;
@media screen and (max-width: 55rem){
    width: 90%;
}
`
const errorBtn = css({

  width: '80%',
  backgroundColor: 'rgba(127, 225, 250, 0.829)',
  borderRadius: '5px',
  border: 'none',
  marginTop: '20px',
  fontSize: '24px',
  '&:hover':{
    backgroundColor: 'rgba(16, 207, 255, 0.829)',
    color: 'black',
}

})

const img = css`
width: 80%;
`


export default function ErrorPage() {
  const randomImage = () => {
    const random = Math.floor(Math.random() * gifsError.length) + 1;
    return `https://i.giphy.com/media/${gifsError[random]}/giphy.webp`;
  };

  return (
    <div className={containt}>
        <Helmet>
            <title> Error 404 | Giffy</title>
        </Helmet>
      <h2>Error 404</h2>
      <img src={randomImage()} className={img} alt="error image" />
      <Button href='/'>Go to home</Button>
    </div>
  );
}
