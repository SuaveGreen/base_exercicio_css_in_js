import { Container, MainContainer } from './styles'

import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <>
      <MainContainer>
        <Cabecalho />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </MainContainer>
    </>
  )
}

export default App
