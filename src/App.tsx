import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { DefaultButton } from './components/DefaultButton';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { Footer } from './components/Footer';
import { useState } from 'react';

export function App() {
  // Que todos os componentes que usam ''numero''
  // saibam das mudanças no seu valor

  // Sempre que eu usar useState, não vou usar atribuição diretamente, apenas a função índice 1 do array de useState
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero((prevState) => prevState + 1);
  }

  return (
    <>
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta número</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='Task'
              id='MeuInput'
              type='text'
              placeholder='Ex.: estudar para a prova'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
