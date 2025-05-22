import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode; //esse tipo define que tudo que o react aceita como children estará contemplado nele
};

export function Heading({ children }: HeadingProps) {
  //no JSX usa-se className para nomear classes de HTML afim de evitar conflito com a Classe de JS

  return <h1 className={styles.heading}>{children}</h1>;
}
