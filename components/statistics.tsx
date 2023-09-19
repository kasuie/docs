/*
 * @Author: kasuie
 * @Date: 2023-09-19 09:30:36
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-19 21:28:31
 * @Description:
 */
"use client";
import * as echarts from "echarts";
import { useState, useEffect, createRef } from "react";
import styles from "./statistics.module.css";
import { Request } from "../lib";

export default function Statistics({ text }) {
  const eChartsRef: any = createRef();
  const [myChart, setMyChart] = useState();
  let option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 32,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [],
      },
    ],
  };

  useEffect(() => {
    Request.get("/api/img/statistics").then((res: any) => {
      if (res.success) {
        const {
          data: { all, author, counts, illust, r12, r18 },
        } = res || {};
        myChart?.setOption?.({
          series: [
            {
              data: [
                { value: all, name: "全年龄" },
                { value: r12, name: "R12" },
                { value: r18, name: "R18" },
              ],
            },
          ],
        });
        console.log("options>>>", option);
      }
    });
  }, []);

  useEffect(() => {
    eChartsRef.current && setMyChart(echarts.init(eChartsRef.current, "dark"));
  }, []);

  useEffect(() => {
    option && myChart && myChart?.setOption?.(option);
  }, [myChart]);

  return (
    <div>
      <div
        id="pie"
        ref={eChartsRef}
        className={styles.pie}
        style={{
          width: "100%",
          height: "400px",
        }}
      ></div>
    </div>
  );
}
