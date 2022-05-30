import styles from "../styles/Hello.module.css";

const Hello = () => {
  console.log("styles for Hello", styles);
  return <div className={styles.container}>Hello World</div>;
};

export default Hello;
