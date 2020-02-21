import React from "react";
export default function MyButton(props) {
  return (
    <div>
      {props.link && (
        <button
          onClick={() => window.open(props.link)}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          {props.children}
        </button>
      )}
    </div>
  );
}
