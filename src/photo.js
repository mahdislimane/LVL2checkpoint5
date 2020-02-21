import React from "react";

export default function Photo(props) {
  return <img src={props.src} style={{ maxWidth: 300 }}></img>;
}
