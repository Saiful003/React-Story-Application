import React from "react";
import styles from "./Preview.module.css";
import { useAppContext } from "../context/AppContext";

function Preview() {
  const { storyImg, storyText } = useAppContext();
  return (
    <div className={styles.preview__wrapper}>
      <img
        className={styles.previewImg}
        src={storyImg || `//unsplash.it/300/300`}
        alt=""
      />
      <div className={styles.text_container}>
        <h2 className={styles.textValue}> {storyText} </h2>
      </div>
    </div>
  );
}

export default Preview;
