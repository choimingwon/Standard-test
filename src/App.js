import { useState } from "react";

function App() {
  //원본배열
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  // 1. ForEach
  // 배열을 순회해서 처리하는 데 사용되는 메서드
  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };

  // 2. Filter
  // 배열의 요소를 콜백 함수를 사용하여 원하는 조건에 따라 필터링
  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
  };

  // 3. Map
  // 배열을 처리해서 새로운 배열로 반환
  const handleMap = () => {
    const mapped = array.map((value) => value.toUpperCase(array));
    setResult(mapped.join(", "));
  };

  // 4. Reduce
  // 배열의 모든 요소에 콜백 함수를 적용하여 하나의 결과 값을 생성
  const handleReduce = () => {
    const reduced = array.reduce((prev, curr) => `${prev} + ${curr}`);
    setResult(reduced);
  };
  // 5. Push
  // 배열의 끝에 하나 이상의 요소를 추가(push, 뒤에서 밀어 넣기)
  const handlePush = () => {
    if (query.length <= 0) {
      alert("추가하려는 값을 입력하세요!");
      return false;
    }
    const newArray = [...array, query];
    setArray(newArray);
    setResult(newArray.join(", "));
  };
  // Pop
  // 배열의 맨 마지막 끝의 요소를 제거
  const handlePop = () => {
    const newArray = [...array];
    newArray.pop();
    setArray(newArray);
    setResult(newArray.join(", "));
  };
  // Slice
  // 배열의 특정 범위의 요소를 추출하여 새로운 배열을 반환
  const handleSlice = () => {
    const sliced = array.slice(1, 3);
    setResult(sliced.join(", "));
  };

  // Splice
  // 배열로 부터 특정 범위를 삭제하거나 새로운 값을 추가 또는 기존 값을 대체
  const handleSplice = () => {
    const spliced = array.slice(query);
    setResult(spliced.join(", "));
  };
  // indexOf
  // 문자열에서 원하는 문자열을 검색하여 찾거나 아니면 배열에서 원하는 특정 배열값의 존재여부 등을 확인
  const handleIndexOf = () => {
    const indexOfValue = array.indexOf(query);
    setResult(indexOfValue);
  };
  // Includes
  // 문자열에 다른 문자열이 포함되어 있는지 여부를 확인
  const handleIncludes = () => {
    const includesValue = array.includes(query);
    setResult(includesValue.toString());
  };
  // Find
  // 배열에서 특정 조건을 만족하는 요소를 찾아 첫 번째 요소의 인덱스를 반환
  const handleFind = () => {
    const finded = array.find((item) => item.includes(query));
    console.log(finded);
    setResult(finded === undefined ? "Not found" : finded);
  };
  // Some
  // 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트
  const handleSome = () => {
    const some = array.some((item) => item === query);
    setResult(some.toString());
  };

  // Every
  // 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트
  const handleEvery = () => {
    const everylength = array.every((item) => item.length >= 2);
    setResult(everylength.toString());
  };
  // Sort
  //배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
  const handleSort = () => {
    const newArr = [...array];
    const sorted = newArr.sort();
    setResult(sorted.join(", "));
  };

  // Join
  // 배열의 모든 요소를 연결해 하나의 문자열로 만드어 준다.
  const handleJoin = () => {
    const joined = array.join(", ");
    setResult(joined);
  };

  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div>
        <h3>원본배열: </h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물:</h3>
        <p> {result}</p>
      </div>
    </div>
  );
}
export default App;
