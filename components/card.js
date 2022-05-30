import Image from "next/image";

const Card = (props) => {
  return (
    <Link href={props.imgUrl}>
      <a>
        <h2>{props.name}</h2>
        <Image src={props.imgUrl} width={260} height={160} />
      </a>
    </Link>
  );
};

export default Card;
