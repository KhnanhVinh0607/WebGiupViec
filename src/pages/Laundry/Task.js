import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import laundry from "../../image/giat_ui.png";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Giặt ủi",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={laundry} alt="giat_ui"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">
            Quy trình giặt ủi của We Shine
          </h3>
          <li className="task-form-main-item">
            Bước 1: Đến nhà bạn nhận quần áo.
          </li>
          <li className="task-form-main-item">
            Bước 2: Sắp xếp, phân loại quần áo.
          </li>
          <li className="task-form-main-item">
            Bước 3: Tiến hành giặt sấy/giặt hấp.
          </li>
          <li className="task-form-main-item"> Bước 4: Làm khô.</li>
          <li className="task-form-main-item">
            Bước 5: Gấp và đóng gói quần áo.
          </li>
          <li className="task-form-main-item">
            Bước 6: Kiểm tra và giao quần áo đến tận nhà bạn.
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
