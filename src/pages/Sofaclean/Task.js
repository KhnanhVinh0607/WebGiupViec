import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import cleansofa from "../../image/cleansofa.png";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Sofa",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
        <img src={cleansofa} alt="nha_tam"></img>
        </div>
        <ul className="task-form-main-list">
          <li className="task-form-main-item">Kiểm tra tình trạng, số lượng. Xác nhận đơn hàng.</li>
          <li className="task-form-main-item">
          Hút bụi trên mặt ghế, các kẽ ghế bằng máy hút chuyên dụng. 
          </li>
          <li className="task-form-main-item">
          Phun dung dịch làm sạch chuyên dụng lên bề mặt ghế sofa.
          </li>
          <li className="task-form-main-item">Sử dụng máy chà cầm tay chuyên dụng loại bỏ các vết ố bẩn bám trên mặt ghế.</li>
          <li className="task-form-main-item">Dùng máy hút chuyên dụng hút sạch chất bẩn.</li>
          <li className="task-form-main-item">Phun xả lại 1 lần nước để loại bỏ hoàn toàn dung dịch hóa chất tẩy. Hút khô</li>
          <li className="task-form-main-item">Vệ sinh, lau khô sàn nhà và sắp xếp lại bàn ghế.</li>
          
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Rèm cửa",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={cleansofa} alt="nha_tam"></img>
        </div>
        <ul className="task-form-main-list">
          <li className="task-form-main-item">Tháo rời, phân loại rèm. Xác nhận tình trạng, báo giá, ghi biên nhận cho khách hàng.</li>
          <li className="task-form-main-item">
          Xử lý tiền vết bẩn trước khi giặt.
          </li>
          <li className="task-form-main-item">
          Giặt sạch rèm với hóa chất chuyên dụng phù hợp với mỗi loại rèm. 
          </li>
          <li className="task-form-main-item">Sấy khô rèm với nhiệt độ và thời gian phù hợp.</li>
          <li className="task-form-main-item">Kiểm tra kỹ rèm trước khi lắp đặt. Đặt rèm cửa về vị trí ban đầu – hiệu chỉnh. Ký biên bản nghiệm thu.</li>
          
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "Đệm",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={cleansofa} alt="phong_khach"></img>
        </div>
        <ul className="task-form-main-list">
          <li className="task-form-main-item">
          Kiểm tra tình trạng, số lượng. Xác nhận đơn hàng.
          </li>
          <li className="task-form-main-item">Làm sạch bụi bẩn trên bề mặt đệm.</li>
          <li className="task-form-main-item">Khử khuẩn bằng hơi nóng hoặc tia UV.</li>
          <li className="task-form-main-item">Tẩy các vết bẩn, vết ố, mốc trên bề mặt bằng hóa chất chuyên dụng.</li>
          <li className="task-form-main-item">Hút sạch chất bẩn và hóa chất sau khi tẩy.</li>
          <li className="task-form-main-item">Sấy khô ghế đệm.</li>
          <li className="task-form-main-item">Lau khô sàn, sắp xếp lại vật dụng về vị trí cũ.</li>
        </ul>
      </div>
    ),
  },
  {
    key: "4",
    label: "Thảm",
    children: (
      <div className="task-form-main">
        <div className="task-form-main-img">
          <img src={cleansofa} alt="phong_ngu"></img>
        </div>
        <ul className="task-form-main-list">
         
          <li className="task-form-main-item">
          Kiểm tra tình trạng, số lượng. Xác nhận đơn hàng.
          </li>
          <li className="task-form-main-item">Tẩy các vết bẩn, vết ố, mốc trên bề mặt bằng hóa chất chuyên dụng.</li>
          <li className="task-form-main-item">Hút sạch chất bẩn và hóa chất sau khi tẩy.</li>
          <li className="task-form-main-item">
          Sấy khô thảm.
          </li>
          <li className="task-form-main-item">Lau khô sàn, sắp xếp lại vật dụng về vị trí cũ.</li>
          <li className="task-form-main-item">Bàn giao và nghiệm thu với khách hàng.</li>

        </ul>
      </div>
    ),
  },
];

const Task: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default Task;
