import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import kitchen from "../../image/nha_bep.png";
import bathroom from "../../image/phong_tam.png";
import livingRoom from "../../image/phong_khach.png";
import bedroom from "../../image/phong_ngu.png";
import cooking from "../../image/nau_an.png";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Dịch vụ nấu ăn",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={cooking} alt="nau_an"></img>
        </div>
        <ul className="task-form-main-list">
          <li className="task-form-main-item">
            Xác nhận thông tin về loại món ăn, số lượng khách, thời gian và địa
            điểm.
          </li>
          <li className="task-form-main-item">
            Gợi ý hoặc thiết kế thực đơn phù hợp với yêu cầu của bạn
          </li>
          <li className="task-form-main-item">
            Đến chợ hoặc siêu thị để mua nguyên liệu tươi ngon, đảm bảo chất
            lượng cho các món ăn.
          </li>
          <li className="task-form-main-item">
            Chuẩn bị nguyên liệu và bắt tay vào nấu nướng các món theo thực đơn
            đã thỏa thuận.
          </li>
          <li className="task-form-main-item">
            Sắp xếp bàn ăn, bày biện món ăn và phục vụ
          </li>
          <li className="task-form-main-item">
            Khi bữa ăn kết thúc, cộng tác viên sẽ dọn dẹp khu vực nấu nướng và
            bàn ăn, đảm bảo không gian sạch sẽ.
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
