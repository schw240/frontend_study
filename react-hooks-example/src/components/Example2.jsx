import React from 'react';

export default function Example2() {
    // what은 배열임 초기값이 0이고 바뀌는 상태값들이 배열에 들어감
    // const what = React.useState(0);
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    )

    function click() {
        setCount(count + 1);
    }
}