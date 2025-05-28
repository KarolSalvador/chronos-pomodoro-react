import styles from './styles.module.css';

export function Footer() {
  //no JSX usa-se className para nomear classes de HTML afim de evitar conflito com a Classe de JS

  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica</a>
      <a href=''>Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
