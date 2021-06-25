import logo from './logo.svg';
// import './App.css';
// import './App.scss'
import styles from './App.module.css'

// import Button from './components/Button'
import StyledButton from './components/StyledButton'
import styled, { createGlobalStyle } from 'styled-components';
import StyledA from './components/StyledA'
// console.log(styles)

const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`

const UppercaseButton = (props) => <button {...props} 
  children={props.children.toUpperCase()}
/>;

const MyButton = (props) => (
  <button className={props.className} {...props} children={`MyButton ${props.children}`}/>
);

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || "palevioletred"};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover {
    border: 2px solid red;
  }

  ::before {
    content: "@";
  }
`

const GlobalStyle = createGlobalStyle`
  button {
    color: yellow;
  }
`

function App() {
  return (
    <div className={styles['App']}>
      <GlobalStyle />
      <header className={styles['header']}>
        <img src={logo} className={styles['logo']} alt="logo" />
        <p>
          <StyledButton>버튼</StyledButton>
          {/* props로 primary가 있다는 의미 */}
          <StyledButton primary>버튼</StyledButton>
          <PrimaryStyledButton>버튼</PrimaryStyledButton>
          <StyledButton as="a" href="/">버튼</StyledButton>
          <StyledButton as={UppercaseButton}>button</StyledButton>
          <StyledMyButton>button</StyledMyButton>
          <StyledMyButton color="green">button</StyledMyButton>
          <StyledA href="https://google.com">태그</StyledA>
        </p>
        {/* <Button>Button</Button> */}
      </header>
    </div>
  );
}

export default App;
