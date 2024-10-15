import {
  faBullhorn,
  faClock,
  faHandPointUp,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Air from "../../image/air_condition1.jpg";
import reasonHouse from "../../image/reason_hourly.png";
import "./index.css";
import Task from "./Task";
function Aircondition() {
  return (
    <div className="main-form">
      {/* introduce */}
      <div className="introduce-form">
        <div className="introduce-text-form">
          <ul className="introduce-text-list">
            <li className="introduce-text-item">Dịch vụ</li>
            <li className="introduce-text-item introduce-textFormItemService2">
              Vệ sinh điều hòa
            </li>
            <li className=" introduce-textFormItemService3">
            Đặt lịch nhanh chóng, có mặt tức thì!
Dịch vụ vệ sinh máy lạnh chuẩn 5 sao của We Shine cam kết đem đến trải nghiệm tốt nhất cho khách hàng!
            </li>
          </ul>
          <div className="introduce-startList">
            <a href="/service" class="introduce-startButton">
              Trải nghiệm dịch vụ
            </a>
          </div>
        </div>
        <img
          src={Air}
          alt="giup viec theo gio"
          className="introduce-form-item-img"
        ></img>
      </div>
      {/* reason */}
      <div className="reason-form">
        <div className="reason-form-header">
          <h3 className="reason-form-text1">Lý do chọn vệ sinh điều hòa :</h3>
          <img
            src={reasonHouse}
            alt="li do dat giup viec"
            className="reason-form-item-img"
          ></img>
        </div>
        <div className="reason-form-body">
          <ul className="reason-form-text-list">
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faBullhorn} className="reason-icon" />
              <h3 className="reason-form-text2">Minh bạch</h3>
              <h4 className="reason-form-text3">
              We Shine luôn cam kết chất lượng dịch vụ vệ sinh điều hòa ở mức tốt nhất về mặt chuyên môn lẫn quy trình và tác phong làm việc.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faHandPointUp} className="reason-icon" />
              <h3 className="reason-form-text2">Tiện lợi</h3>
              <h4 className="reason-form-text3">
              Chỉ cần 60s với vài thao tác đơn giản trên ứng dụng, Khách hàng có thể đặt lịch vệ sinh máy lạnh bất cứ lúc nào, bất cứ nơi đâu.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faClock} className="reason-icon" />
              <h3 className="reason-form-text2">Tiết kiệm thời gian</h3>
              <h4 className="reason-form-text3">
              Cũng chỉ trên ứng dụng, Khách hàng có thể thay đổi thông tin địa chỉ và lịch trình vệ sinh, theo dõi quy trình và lịch sử đã đặt lịch.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faMoneyBill} className="reason-icon" />
              <h3 className="reason-form-text2">Tiết kiệm chi phí</h3>
              <h4 className="reason-form-text3">
                Bảng giá dịch vụ vệ sinh theo giờ đã bao gồm các dụng cụ vệ sinh
                cơ bản, cam kết không phát sinh thêm chi phí. Khách hàng đặt
                dịch vụ mỗi khi cần ngay trên app nên sẽ linh động và tối ưu
                ngân sách.
              </h4>
            </li>
          </ul>
        </div>
      </div>
      {/* task */}
        <div className="task-form">
          <div className="task-form-container">
            <h3 className="task-form-text">
              Cộng tác viên vệ sinh điều hòa sẽ làm những gì?
            </h3>
            <div className="task-form-container-body">
              <Task />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Aircondition;
