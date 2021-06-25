import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1rem;
    padding: 0.25em 1em;
    font-size: 20px;

    // 표현식은 함수로 작성
    // props를 전달받고 props안에 primary가 있다면
    ${props => props.primary && css`
        background: palevioletred;
        color: white;
    `}
`;

export default StyledButton;