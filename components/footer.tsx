/*
 * @Author: kasuie
 * @Date: 2023-09-05 14:00:45
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-05 14:03:13
 * @Description: 
 */
import styles from "./footer.module.css";

export default function Footer({ text }) {
  return <div className={styles.footer}>
    {text}
  </div>;
}