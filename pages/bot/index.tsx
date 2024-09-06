/*
 * @Author: kasuie
 * @Date: 2024-09-06 16:05:31
 * @LastEditors: kasuie
 * @LastEditTime: 2024-09-06 18:11:31
 * @Description:
 */
"use client";

export default function BotPage() {
  const bot = global.botStatus;

  return (
    <div
      className=""
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url(https://i.pixiv.re/img-master/img/2024/03/18/23/06/28/117043429_p0_master1200.jpg)",
        // "url(https://kasuie.cc/api/img/bg?type=mobile&size=regular)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "24px",
        overflow: "hidden",
      }}
    >
      <div className="flex flex-col gap-5 text-sm">
        <div className="flex justify-start gap-3 items-center flex-wrap rounded-xl bg-white/50 px-5 py-3">
          <div className=" overflow-hidden rounded-full">
            <img className=" w-16 h-16" src={bot?.avatar} alt="avatar" />
          </div>
          <div>
            <h3>{bot?.botName}</h3>
            <p>Bot已运行</p>
          </div>
        </div>
      </div>
    </div>
  );
}
