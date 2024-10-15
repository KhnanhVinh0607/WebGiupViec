import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import kitchen from "../../image/nha_bep.png";
import Aircondition from "../../image/air_condition.jpg";


const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Quy trình vệ sinh điều hòa của bTaskee bao gồm những công việc gì?",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={Aircondition} alt="dieu_hoa"></img>
        </div>
        <ul className="task-form-main-list">
          <h3 className="task-form-main-list-text">Quy trình vệ sinh điều hòa của We Shine</h3>
          <li className="task-form-main-item">Bước 1: Tiếp nhận đơn đặt lịch vệ sinh máy lạnh từ khách hàng.</li>
          <li className="task-form-main-item">
          Bước 2: Kiểm tra tổng quan, đánh giá tình trạng hoạt động của thiết bị.
          </li>
          <li className="task-form-main-item">
          Bước 3: Tiến hành tháo rời và vệ sinh dàn lạnh, dàn nóng, lưới lọc và vỏ máy.
          </li>
          <li className="task-form-main-item">Bước 4: Lắp ráp các bộ phận và kiểm tra, chạy thử để chắc chắn rằng điều hòa hoạt động tốt.</li>
          <li className="task-form-main-item">Bước 5: Lau dọn sạch sẽ và trả lại hiện trạng ban đầu.
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
