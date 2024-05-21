/*
 * @Author: kasuie
 * @Date: 2023-10-17 16:03:11
 * @LastEditors: kasuie
 * @LastEditTime: 2023-10-19 16:27:40
 * @Description:
 */
"use client";
import * as echarts from "echarts";
import { useState, useEffect, createRef } from "react";
import styles from "./others.module.css";

export default function OthersData() {
  const PieRef: any = createRef();
  const LineRef: any = createRef();
  const RingRef: any = createRef();
  const OneRef: any = createRef();
  const TwoRef: any = createRef();
  const ThreeRef: any = createRef();
  const [myPie, setMyPie] = useState();
  const [myLine, setMyLine] = useState();
  const [myRing, setMyRing] = useState();
  const [onePie, setOnePie] = useState();
  const [twoPie, setTwoPie] = useState();
  const [threePie, setThreePie] = useState();
  let datesObj = {};

  const pieOption = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    backgroundColor: "transparent",
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
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

  const oneOption = {
    // width: 300,
    // height: 300,
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
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },        
        data: [
          { value: 98, name: "一级护理" },
          { value: 99, name: "病区环境管理" },
          { value: 98, name: "导管护理" },
          { value: 98, name: "护理文件书写" },
          { value: 97, name: "优质护理服务" },
        ],
      },
    ],
  };

  const twoOption = {
    // width: 300,
    // height: 300,
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
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 98, name: "一级护理" },
          { value: 98, name: "病区环境管理" },
          { value: 97, name: "安全用药管理" },
          { value: 99, name: "抢救车管理" },
          { value: 97, name: "护理文件书写" },
        ],
      },
    ],
  };

  const threeOption = {
    // width: 300,
    // height: 300,
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
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 98, name: "护理文件书写" },
          { value: 98, name: "一级护理" },
          { value: 98, name: "二，三级护理" },
          { value: 99, name: "住院患者??管理" },
          { value: 99, name: "跌倒坠床管理" },
        ],
      },
    ],
  };

  const lineOption = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "护理文件书写",
        "一级护理",
        "二级护理",
        "二，三级护理",
        "住院患者",
        "跌倒坠床管理",
        "Sun",
      ],
    },
    yAxis: {
      type: "value",
    },
    backgroundColor: "transparent",
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
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

  const ringOption = {
    title: {
      text: "画师作品",
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["作品数", "画师数"],
    },

    colorBy: "data",
    backgroundColor: "transparent",
    series: [
      {
        data: [0, 0],
        type: "bar",
        itemStyle: {
          borderRadius: 0,
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          show: true,
          position: ["50%", "50%"],
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
          },
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

  useEffect(() => {
    PieRef.current && setMyPie(echarts.init(PieRef.current, "dark"));
    LineRef.current && setMyLine(echarts.init(LineRef.current, "dark"));
    OneRef.current && setOnePie(echarts.init(OneRef.current, "dark"));
    TwoRef.current && setTwoPie(echarts.init(TwoRef.current, "dark"));
    ThreeRef.current && setThreePie(echarts.init(ThreeRef.current, "dark"));
  }, []);

  useEffect(() => {
    if (myPie && myLine && onePie && twoPie && threePie) {
      myPie.setOption?.(pieOption);
      onePie.setOption?.(oneOption);
      twoPie.setOption?.(twoOption);
      threePie.setOption?.(threeOption);
      const { dates, dateObj } = getLast15Days();
      datesObj = dateObj;
      lineOption.xAxis.data = dates;
      myLine.setOption?.(lineOption);
    }
  }, [myPie, myLine, onePie, twoPie, threePie]);

  return (
    <div className={styles.main}>
      <div className={styles.pies}>
        <div
          ref={OneRef}
          className={styles.pie}
          style={{
            height: "300px",
            width: "30%"
          }}
        ></div>
        <div
          ref={TwoRef}
          className={styles.pie}
          style={{
            height: "300px",
            width: "30%"
          }}
        ></div>
        <div
          ref={ThreeRef}
          className={styles.pie}
          style={{
            height: "300px",
            width: "30%"
          }}
        ></div>
      </div>
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
