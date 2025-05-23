import styles from './styles.module.css';

//type: 'text' | 'number' | 'search'; //Union type: poderá usar ou um ou outro type adicionado
type DefaultInputProps = {
  id: string;
  labelText: string; //? informa para o TS que essa propriedade pode ser ou não adicionada (opcional)
} & React.ComponentProps<'input'>; //intersection(&): terá que usar ambos os tipos definidos
//React.ComponentProps: permite utilizar qualquer elemento para definir o type

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
