import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import kitchen from "../../image/nha_bep.png";
import bathroom from "../../image/phong_tam.png";
import livingRoom from "../../image/phong_khach.png";
import bedroom from "../../image/phong_ngu.png";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Dọn nhà bếp",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={kitchen} alt="nha_bep"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">Nhà bếp</h3>
          <li className="task-form-main-item">Rửa chén và xếp chén đĩa</li>
          <li className="task-form-main-item">
            Lau bụi và lau tất cả các bề mặt có thể tiếp cận
          </li>
          <li className="task-form-main-item">
            Lau mặt ngoài của tủ bếp, các thiết bị gia dụng
          </li>
          <li className="task-form-main-item">Lau các công tắc và tay cầm</li>
          <li className="task-form-main-item">Cọ rửa bếp</li>
          <li className="task-form-main-item">Lau mặt bàn</li>
          <li className="task-form-main-item">Làm sạch bồn rửa</li>
          <li className="task-form-main-item">Đổ rác</li>
          <li className="task-form-main-item">Quét và lau sàn nhà</li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Dọn phòng tắm",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={bathroom} alt="nha_tam"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">Phòng tắm</h3>
          <li className="task-form-main-item">Làm sạch toilet</li>
          <li className="task-form-main-item">
            Lau chùi sạch vòi sen, bồn tắm và bồn rửa
          </li>
          <li className="task-form-main-item">
            Làm sạch bên ngoài tủ, gương và đồ đạc
          </li>
          <li className="task-form-main-item">Lau công tắc và tay cầm</li>
          <li className="task-form-main-item">Sắp xếp ngăn nắp các vật dụng</li>
          <li className="task-form-main-item">Đổ rác</li>
          <li className="task-form-main-item">Quét và lau sàn</li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "Phòng khách và khu vực chung",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={livingRoom} alt="phong_khach"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">
            Phòng khách và khu vực chung
          </h3>
          <li className="task-form-main-item">
            Quét bụi và lau tất cả các bề mặt có thể tiếp cận
          </li>
          <li className="task-form-main-item">Lau công tắc và tay cầm</li>
          <li className="task-form-main-item">Đổ rác</li>
          <li className="task-form-main-item"> Quét và lau sàn</li>
        </ul>
      </div>
    ),
  },
  {
    key: "4",
    label: "Phòng ngủ",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={bedroom} alt="phong_ngu"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">Phòng ngủ</h3>
          <li className="task-form-main-item">
            Lau bụi và lau tất cả các bề mặt có thể tiếp cận
          </li>
          <li className="task-form-main-item">Lau công tắc và tay cầm</li>
          <li className="task-form-main-item">Lau sạch gương</li>
          <li className="task-form-main-item">
            Sắp xếp lại giường cho gọn gàng
          </li>
          <li className="task-form-main-item">Hút bụi và lau sàn</li>
        </ul>
      </div>
    ),
  },
];

const Task: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default Task;
