import React from "react";

export default function Example5() {
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        console.log("componentDidMount")
        // 밑에 배열을 안넣으면 항상 렌더 직후 함수 실행
        // 빈배열을 넣으면 최초에만 실행

        return () => {
            //cleanup
            // componentWIllUnmount
        }
    }, [])

    React.useEffect(() => {
        console.log("componentDidMount & componentDidUpdate by count", count)

        return () => {
            // cleanup
            console.log("cleanup by count", count)
        }
    }, [count])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    )

    function click() {
        setCount(count + 1)
    }
}