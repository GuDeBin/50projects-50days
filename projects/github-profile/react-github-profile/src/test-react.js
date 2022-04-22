import React, { useState } from "react";

export const TestReact = ({ props = "test" }) => {
  const [count, setCount] = useState(0);

  //   useEffect(() => (document.title = `you click ${count} times`));

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{props}</p>
    </div>
  );
};
