import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import market1 from "../../image/market.jpg";
import market2 from "../../image/market2.png";
import market3 from "../../image/market3.png";
import market4 from "../../image/market4.png";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Đặt - giao nhanh",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={market1} alt="nha_bep"></img>
        </div>
        <ul className="task-form-main-list">
          <li className="task-form-main-item">
            Bạn chỉ cần 60 giây đặt dịch vụ trên ứng dụng. Ngay 1 giờ sau khi
            đặt dịch vụ, phụ tá đi chợ sẽ mua hàng và giao hàng tận nhà cho bạn.
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Phụ tá chuyên nghiệp",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={market2} alt="nha_tam"></img>
        </div>
        <ul className="task-form-main-list">
          <li className="task-form-main-item">
            Phụ tá đi chợ của bTaskee là các bà nội trợ lâu năm, họ không chỉ
            đến và lấy thực phẩm rồi giao đến cho bạn mà sẽ chính tay lựa từng
            món hàng, đảm bảo hàng hóa luôn được tươi ngon, chất lượng.
          </li>
          
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "Lựa chọn đa dạng",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={market3} alt="phong_khach"></img>
        </div>
        <ul className="task-form-main-list">
          <li className="task-form-main-item">
          Cần món hàng nào, chỉ cần ghi tên, số lượng cùng những lưu ý và đặt dịch vụ. 
          Bạn không cần tìm từng món hàng đã được liệt kê, không bị phụ thuộc vào danh sách hàng hóa có sẵn trên ứng dụng.
          </li>
         
        </ul>
      </div>
    ),
  },
  {
    key: "4",
    label: "Linh hoạt thay đổi",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={market4} alt="phong_ngu"></img>
        </div>
        <ul className="task-form-main-list">

          <li className="task-form-main-item">
          Khi có tình huống phát sinh: Nhu cầu mua hàng thay đổi, địa điểm đi chợ hết hàng,...
           bạn có thể trao đổi trực tiếp với phụ tá đi chợ thông qua tính năng gọi điện và nhắn tin miễn phí ngay trên ứng dụng bTaskee.
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
