import React from "react";
import styles from "./card.module.css";
import words from "../constants/words.js";

const Card = (props)=>{
  const {english, transcription, russian, id} = props;

  return(<div className={styles.card}>
  <div className={styles.english}>{english}</div>
  <div className={styles.transcription}>{transcription}</div>
  <button className={styles.check}>Проверить</button>
  </div>)
}
export default Card;