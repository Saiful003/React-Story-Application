import React, { useEffect, useState } from "react";
import styles from "./Type.module.css";
import { useAppContext } from "../context/AppContext";

function Type() {
  const [value, setValue] = useState("");
  const { getTypeValue } = useAppContext();

  useEffect(() => {
    getTypeValue(value.toUpperCase());
  }, [value]);

  return (
    <div className={styles.text_area}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Start Typing..."
        cols="30"
        rows="10"
      />
    </div>
  );
}

export default Type;
