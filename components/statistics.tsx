/*
 * @Author: kasuie
 * @Date: 2023-09-19 09:30:36
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-20 11:40:00
 * @Description:
 */
"use client";
import * as echarts from "echarts";
import { useState, useEffect, createRef } from "react";
import styles from "./statistics.module.css";
import { Request } from "../lib";

export default function Statistics({ text }) {
  const PieRef: any = createRef();
  const LineRef: any = createRef();
  const [myPie, setMyPie] = useState();
  const [myLine, setMyLine] = useState();
  let datesObj = {};

  const pieOption = {
    title: {
      text: "限制等级",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    backgroundColor: "transparent",
    series: [
      {
        name: "限制等级:",
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
    media: [
      {
        query: {
          maxHeight: 300,
          minWidth: 300,
          minAspectRatio: 2,
        },
      },
    ],
  };

  const lineOption = {
    xAxis: {
      type: "category",
      data: [],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [],
        type: "line",
        smooth: true,
      },
    ],
  };

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始，需要+1并且补0
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getLast15Days() {
    const today = new Date();
    const dates = [];
    const dateObj = {};
    for (let i = 0; i < 15; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      let temp = formatDate(date);
      dates.unshift(temp);
      dateObj[temp] = 0;
    }
    return { dates, dateObj };
  }

  const getData = () => {
    Request.get("/api/img/statistics").then((res: any) => {
      if (res.success) {
        const {
          data: { all, author, counts, illust, r12, r18 },
        } = res || {};
        myPie?.setOption({
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
        let _dates = datesObj;
        counts?.length &&
          counts.map((v: any) => {
            _dates[v.days] = v.numbers;
          });
        console.log(_dates, "dates");
        myLine?.setOption({
          series: [
            {
              data: Object.values(_dates),
            },
          ],
        });
      }
    });
  };

  useEffect(() => {
    PieRef.current && setMyPie(echarts.init(PieRef.current, "dark"));
    LineRef.current && setMyLine(echarts.init(LineRef.current, "dark"));
    // if (myPie) {
    //   myPie.setOption?.(pieOption);
    // }
    // if (LineRef) {
    //   const { dates, dateObj } = getLast15Days();
    //   console.log(dates, dateObj, "dates");
    //   datesObj = dateObj;
    //   lineOption.xAxis.data = dates;
    //   LineRef.setOption?.(lineOption);
    // }
    getData();
  }, []);

  useEffect(() => {
    if (myPie) {
      myPie.setOption?.(pieOption);
    }
  }, [myPie]);

  useEffect(() => {
    if (LineRef) {
      const { dates, dateObj } = getLast15Days();
      console.log(dates, dateObj, "dates");
      datesObj = dateObj;
      lineOption.xAxis.data = dates;
      LineRef.setOption?.(lineOption);
    }
  }, [LineRef]);

  return (
    <div>
      <div
        ref={PieRef}
        className={styles.pie}
        style={{
          height: "300px",
        }}
      ></div>
      <div
        ref={LineRef}
        className={styles.pie}
        style={{
          height: "300px",
        }}
      ></div>
    </div>
  );
}
