/*
 * @Author: kasuie
 * @Date: 2024-05-21 20:01:07
 * @LastEditors: kasuie
 * @LastEditTime: 2024-05-22 10:56:45
 * @Description:
 */
import { useEffect, useState } from "react";
import { Icons as KIcons, IconNames } from "@kasuie/icon";
import { copyToClipboard } from "@kasuie/utils";

export default function Icons() {
  const [icons, setIcons] = useState();
  const [iconsCom, setIconsCom] = useState();

  useEffect(() => {
    if (!icons && KIcons) setIcons(IconNames());
    if (!iconsCom && KIcons) setIconsCom(KIcons());
  }, []);

  const onIcon = (iconName: any) => {
    const IconCom = iconsCom[iconName];
    return IconCom ? <IconCom size={24} /> : null;
  };

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        padding: "12px",
      }}
    >
      {icons?.map((iconName) => {
        return (
          <li
            key={iconName}
            style={{
              cursor: "pointer",
            }}
            title={`复制${iconName}`}
            onClick={() => {
              copyToClipboard(`<${iconName} />`);
            }}
          >
            <span>{onIcon(iconName)}</span>
          </li>
        );
      })}
    </ul>
  );
}
