/*
 * @Author: kasuie
 * @Date: 2023-09-04 15:01:26
 * @LastEditors: kasuie
 * @LastEditTime: 2024-05-21 20:21:59
 * @Description:
 */
"use client";
import Button from "../components/button";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles["docs-home"]}>
      <div className={styles["docs-home-main"]}>
        <div className={styles["docs-home-main-title"]}>Kasuie の API Docs</div>
        <Button text={"开始使用"} path="/mio"></Button>
      </div>
    </div>
  );
}
