/*
 * @Author: kasuie
 * @Date: 2023-09-19 09:30:36
 * @LastEditors: kasuie
 * @LastEditTime: 2023-09-20 18:24:35
 * @Description:
 */
"use client";
import * as echarts from "echarts";
import { useState, useEffect, createRef } from "react";
import styles from "./statistics.module.css";
import { Request } from "../lib";

export default function Statistics() {
  const PieRef: any = createRef();
  const LineRef: any = createRef();
  const RingRef: any = createRef();
  const [myPie, setMyPie] = useState();
  const [myLine, setMyLine] = useState();
  const [myRing, setMyRing] = useState();
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
    title: {
      text: "新增统计",
    },
    xAxis: {
      type: "category",
      data: [],
    },
    yAxis: {
      type: "value",
    },
    backgroundColor: "transparent",
    series: [
      {
        data: [],
        type: "line",
        smooth: true,
      },
    ],
  };

  const ringOption = {
    title: {
      text: "画师作品",
    },
    backgroundColor: "transparent",
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: "#464646",
          },
        },
        axisLine: {
          lineStyle: {
            width: 40,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: [
          {
            value: 0,
            name: "作品数",
            title: {
              offsetCenter: ["0%", "-30%"],
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ["0%", "-20%"],
            },
          },
          {
            value: 0,
            name: "画师数",
            title: {
              offsetCenter: ["0%", "0%"],
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ["0%", "10%"],
            },
          },
        ],
        title: {
          fontSize: 14,
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 14,
          color: "inherit",
          borderColor: "inherit",
          borderRadius: 20,
          borderWidth: 1,
          formatter: "{value}",
        },
      },
    ],
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始，需要+1并且补0
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getLast15Days = () => {
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
  };

  const getData = () => {
    Request.get("/api/img/statistics").then((res: any) => {
      if (res.success) {
        const {
          data: { all, author, counts, illust, r12, r18 },
        } = res || {};
        let _dates: any = datesObj;
        counts?.length &&
          counts.map((v: any) => {
            _dates[v.days] = v.numbers;
          });
        _dates = Object.values(_dates);
        lineOption.series[0].data = _dates;
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
        myLine?.setOption({
          series: [
            {
              data: _dates,
            },
          ],
        });
        myRing?.setOption({
          series: {
            data: [
              {
                value: illust,
                name: "作品数",
                title: {
                  offsetCenter: ["0%", "-30%"],
                },
                detail: {
                  valueAnimation: true,
                  offsetCenter: ["0%", "-20%"],
                },
              },
              {
                value: author,
                name: "画师数",
                title: {
                  offsetCenter: ["0%", "0%"],
                },
                detail: {
                  valueAnimation: true,
                  offsetCenter: ["0%", "10%"],
                },
              },
            ],
          },
        });
      }
    });
  };

  useEffect(() => {
    PieRef.current && setMyPie(echarts.init(PieRef.current, "dark"));
    LineRef.current && setMyLine(echarts.init(LineRef.current, "dark"));
    RingRef.current && setMyRing(echarts.init(RingRef.current, "dark"));
  }, []);

  useEffect(() => {
    if (myPie && myLine && myRing) {
      myPie.setOption?.(pieOption);
      const { dates, dateObj } = getLast15Days();
      datesObj = dateObj;
      lineOption.xAxis.data = dates;
      myLine.setOption?.(lineOption);
      myRing.setOption?.(ringOption);
      getData();
    }
  }, [myPie, myLine, myRing]);

  return (
    <div className={styles.main}>
      <div
        ref={RingRef}
        className={styles.ring}
        style={{
          height: "300px",
        }}
      ></div>
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
