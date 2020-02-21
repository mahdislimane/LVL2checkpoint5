import React from "react";
import MyButton from "./button";
import Name from "./name";
import Photo from "./photo";
export default function MyProfile(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <Photo src="./profile.jpg" />
      <Name firstname="Mahdi" lastname="Slimane" />
      <MyButton link="https://www.linkedin.com/in/mahdi-slimane-907b19a4/">
        my LinkedIn
      </MyButton>
    </div>
  );
}
