interface CardProps {
  body: string; // Define the type of the body prop
}

function Card(props: CardProps) {
  const { body } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div>{body}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string; // The text prop is optional
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {text}.
      </p>
    </>
  );
}

export default Card;
