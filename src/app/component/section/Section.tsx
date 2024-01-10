import { FC } from "react";
import styles from "./section.module.css";
type Props = { children: JSX.Element[] | JSX.Element };

export const Section: FC<Props> = (props: Props) => {
  return <section className={styles.section}>{props.children} </section>;
};
