import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const MainFormulario = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  form:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${variaveis.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  @media (max-width, 768px) {
    height: auto;
    padding: 24px 0;
  }
`

// export const FormSecundario = styled.form`
//   position: relative;
//   color: ${variaveis.corSecundaria};
// `

export const HeroTitle = styled.div`
  font-family: Gloock, serif;
  font-size: 48px;
  color: ${variaveis.corPrincipal};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
