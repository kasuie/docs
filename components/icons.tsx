/*
 * @Author: kasuie
 * @Date: 2024-05-21 20:01:07
 * @LastEditors: kasuie
 * @LastEditTime: 2024-05-21 21:24:19
 * @Description:
 */
import { useEffect, useState } from "react";
import { Icons as GetIcons } from "@kasuie/icon";

export default function Icons() {
  const [icons, setIcons] = useState();
  const [iconsCom, setIconsCom] = useState();

  useEffect(() => {
    const myIcons = GetIcons();
    if (!icons && myIcons) setIcons(myIcons);
    onLoad();
  }, []);

  const onLoad = async () => {
    if (icons) {
      const module = await import("@kasuie/icon");
      console.log(module);
      setIconsCom(module);
    }
  };

  const onIcon = (iconName: any) => {
    console.log(iconName, iconsCom);

    // const IconCom: any = iconsCom[iconName];
    return <div>555</div>;
  };

  return (
    <ul>
      {icons?.map((iconName) => {
        return (
          <li key={iconName}>
            <span>{onIcon(iconName)}</span>
          </li>
        );
      })}
    </ul>
  );
}
