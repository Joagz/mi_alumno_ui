import styles from './featured-link.module.css';
type Props = { children: JSX.Element[] | JSX.Element };

export const FeaturedLinkContainer = ({children}: Props) => {
  return <div className={styles.container}>{children}</div>;
};
