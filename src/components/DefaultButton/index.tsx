import styles from './styles.module.css';

//type: 'text' | 'number' | 'search'; //Union type: poderá usar ou um ou outro type adicionado
type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>; //intersection(&): terá que usar ambos os tipos definidos
//React.ComponentProps: permite utilizar qualquer elemento para definir o type

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
