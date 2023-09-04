/*
 * @Author: kasuie
 * @Date: 2023-09-04 16:24:43
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-04 17:26:44
 * @Description:
 */
import { useRouter } from "next/router";
import styles from "./button.module.css";

export default function Button({ text, path = "" }) {
  const router = useRouter();

  return <button className={styles.button} onClick={() => {
    path && router.push(path)
  }}>{text}</button>;
}
