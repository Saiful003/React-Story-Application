import React, { useEffect, useState } from "react";
import styles from "./Pattern.module.css";
function Pattern({ img, handleClick, id, clicked }) {
  useEffect(() => {
    handleClick({ id: 1 });
  }, []);

  return (
    <div
      className={styles.pattern}
      style={{ border: clicked === id && "4px solid #b447ff" }}
      onClick={() => handleClick({ img, id })}
    >
      <img src={img} />
    </div>
  );
}

export default Pattern;
