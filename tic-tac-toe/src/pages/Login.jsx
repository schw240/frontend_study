import LoginButton from '../components/LoginButton'

export default function Login() {
    return (
        <div>
            <h2>Login 페이지 입니다.</h2>
            {/* props를 계속 밑으로 내려주어야 하기에 나중에 어려워짐 => 사고나기 쉬워짐 */}
            <LoginButton />
        </div>
    )
}