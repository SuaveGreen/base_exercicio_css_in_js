import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container, MainContainer } from './styles'

import './global.css'

function App() {
  return (
    <EstiloGlobal>
      <MainContainer>
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </MainContainer>
    </EstiloGlobal>
  )
}

export default App
