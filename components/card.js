import Image from "next/image";
import Link from "next/link";

import styles from "./card.module.css";

const Card = (props) => {
  return (
    <Link href={props.href}>
      <a className={styles.cardLink}>
        <div className={styles.container}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={props.imgUrl}
              width={260}
              height={160}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
