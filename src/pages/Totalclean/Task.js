import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import totalclean1 from "../../image/tong_ve_sinh1.png";
import totalclean2 from "../../image/nha_bep.png";
import totalclean3 from "../../image/phong_ngu.png";
import totalclean4 from "../../image/phong_tam.png";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Công việc chung",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={totalclean1} alt="nha_bep"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">Vệ sinh chung</h3>
          <li className="task-form-main-item">Quét mạng nhện</li>
          <li className="task-form-main-item">
          Lau sạch quạt trần
          </li>
          <li className="task-form-main-item">
          Phủi bụi trên rèm cửa, kẽ cửa sổ
          </li>
          <li className="task-form-main-item">Làm sạch bụi trên tất cả bề mặt đồ nội thất</li>
          <li className="task-form-main-item">Lau gương soi, cửa kính</li>
          <li className="task-form-main-item">Dọn sạch rác</li>
          <li className="task-form-main-item">Quét và lau sàn</li>
          <li className="task-form-main-item">Dọn sạch bậc cầu thang</li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Nhà bếp",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={totalclean2} alt="nha_bep"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">Nhà bếp</h3>
          <li className="task-form-main-item">Làm sạch bàn ghế</li>
          <li className="task-form-main-item">
          Làm sạch mặt bếp và quạt hút mùi
          </li>
          <li className="task-form-main-item">
          Làm sạch các thiết bị gia dụng
          </li>
          <li className="task-form-main-item">Làm sạch mặt bàn</li>
          <li className="task-form-main-item">Lau sạch thiết bị điện tử</li>
          <li className="task-form-main-item">Cọ và làm sạch bồn rửa</li>
          <li className="task-form-main-item">Hút bụi và lau sàn</li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "Phòng ngủ",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={totalclean3} alt="phong_khach"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">
          Phòng ngủ
          </h3>
          <li className="task-form-main-item">
          Lau bụi và lau tất cả các bề mặt có thể tiếp cận
          </li>
          <li className="task-form-main-item">Lau công tắc và tay cầm
          </li>
          <li className="task-form-main-item">Lau sạch gương</li>
          <li className="task-form-main-item">Sắp xếp lại giường cho gọn gàng</li>
          <li className="task-form-main-item"> Hút bụi và lau sàn</li>

        </ul>
      </div>
    ),
  },
  {
    key: "4",
    label: "Nhà tắm",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={totalclean4} alt="phong_ngu"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">Nhà tắm</h3>
          <li className="task-form-main-item">
          Làm sạch toilet
          </li>
          <li className="task-form-main-item">Lau chùi sạch vòi sen, bồn tắm và bồn rửa</li>
          <li className="task-form-main-item">Làm sạch bên ngoài tủ, gương và đồ đạc</li>
          <li className="task-form-main-item">
          Lau công tắc và tay cầm
          </li>
    
        </ul>
      </div>
    ),
  },
];

const Task: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default Task;
