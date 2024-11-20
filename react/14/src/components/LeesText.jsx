import { useState } from "react";

export default function LessText(props) {
  const [less, setLess] = useState(true);
  return (
    <p>
      {less ? props.text.substring(0, props.defaultLength) : props.text}{" "}
      <a
        href="javascript:;"
        onClick={() => {
          setLess(!less);
        }}
      >
        {less ? ":more text" : ":less text"}
      </a>
    </p>
  );
}
