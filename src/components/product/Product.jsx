import Button from "../button/Button";
import "./Product.css";
export default function Product({
  title,
  description,
  isNew,
  img: { desctop, mobile, tablet },
}) {
  return (
    <div>
      <picture>
        <source media="(max-width:375px)" srcSet={mobile} />
        <source media="(max-width:768px)" srcSet={tablet} />
        <img src={desctop} alt={title} width={540} height={560} />
      </picture>
      <div>
        {isNew && <span>NEW PRODUCT</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <Button text="See Product" />
      </div>
    </div>
  );
}
