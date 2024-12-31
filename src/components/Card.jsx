import CardStyle from "../scss/Card.module.scss";

const Card = ({ src, photographer }) => {
  return (
    <div className={CardStyle.picture}>
      <div className={CardStyle.imageContainer}>
          <img  src={src} alt="photoimage" />
          </div>
        <div className={CardStyle.info}> 
          <h1>{photographer}</h1>
        </div>
      </div>
    );
};
export default Card;
