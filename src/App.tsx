import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Container>
        <Heading>
          <TimerIcon />
        </Heading>
      </Container>

      <Container>
        <Heading>NOME</Heading>
      </Container>
    </>
  );
}
