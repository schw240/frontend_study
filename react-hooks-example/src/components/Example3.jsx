import React from "react";


// useState => count; example 2번 형태
// useState => { count: 0} 3번 형태
export default function Example3() {
    const [state, setState] = React.useState({ count: 0 })

    return (
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    )

    function click() {
        // setState({ count: state.count + 1 })
        setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }
}