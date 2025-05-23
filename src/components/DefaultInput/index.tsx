//type: 'text' | 'number' | 'search'; //Union type: poderá usar ou um ou outro type adicionado
type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>; //intersection(&): terá que usar ambos os tipos definidos
//React.ComponentProps: permite utilizar qualquer elemento para definir o type

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>Task</label>
      <input id={id} type={type} />
    </>
  );
}
