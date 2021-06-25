import queryString from "query-string";

export default function About(props) {
    // console.log(props)
    // query문을 사용해 /about?name=mark 처럼 요청이 들어올 때
    // 동적 라우팅을 통해 처리
    // props에서 location안 search에 ?name=mark가 들어옴
    const searchParams = props.location.search;
    console.log(searchParams)
    // const obj = new URLSearchParams(searchParams);
    // 2가지 단점이 있음
    // 1. 함수들을 다 기억해야함
    // 2. URLSearchParams같은 브라우저 내장 객체로 브라우저에 따라 지원하지 않을 수도 있음
    // console.log(obj.get("name"))

    // query-string사용해서 해결
    const query = queryString.parse(searchParams);
    console.log(query)
    return (
        <div>
            <h2>About 페이지입니다.</h2>
            {query.name && <p>name은 {query.name} 입니다.</p>}
        </div>
    )
}