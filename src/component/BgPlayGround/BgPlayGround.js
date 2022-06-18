import React, { useEffect, useState } from "react";
import styles from "./BgPlayGround.module.css";
import { imgArray } from "../../assest/images/image";
import Pattern from "./Pattern/Pattern";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useAppContext } from "../context/AppContext";

function BgPlayGround() {
  const [isFullHeight, setIsFullHeight] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [mainBg, setMainBg] = useState("");
  const { getData } = useAppContext();

  function handleClick(data) {
    const { img, id } = data;
    setClicked(id);
    setMainBg(img);
  }

  useEffect(() => {
    getData(mainBg);
  }, [mainBg]);

  return (
    <>
      <div
        className={styles.container}
        style={{ maxHeight: isFullHeight === false && 190 }}
      >
        {imgArray.map(({ img, id, isActive }) => {
          return (
            <Pattern
              key={id}
              img={img}
              handleClick={handleClick}
              id={id}
              clicked={clicked}
              isActive={isActive}
            />
          );
        })}

        <button onClick={() => setIsFullHeight(!isFullHeight)}>
          {isFullHeight === false ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </button>
      </div>
    </>
  );
}

export default BgPlayGround;
