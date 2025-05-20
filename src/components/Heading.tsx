import styles from './Heading.module.css';

export function Heading() {
   //no JSX usa-se className para nomear classes de HTML afim de evitar conflito com a Classe de JS
   return <h1 className={styles.heading}>Olá mundo!</h1>;
}
