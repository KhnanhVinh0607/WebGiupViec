import React, { useState } from "react";
import "./index.css";
import cleansofa1 from "../../image/clean_sofa.jpg";
import reasonHouse from "../../image/reason_hourly.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faHandPointUp,
  faClock,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";

function Sofaclean() {
  return (
    <div className="main-form">
      {/* introduce */}
      <div className="introduce-form">
        <div className="introduce-text-form">
          <ul className="introduce-text-list">
            <li className="introduce-text-item">Dịch vụ</li>
            <li className="introduce-text-item introduce-textFormItemService2">
            Sofa - Rèm - Đệm - Thảm
            </li>
            <li className=" introduce-textFormItemService3">
            Vệ sinh sofa, rèm, đệm, 
            thảm định kỳ là công việc cần thực hiện để đảm bảo an toàn cho không gian sống của gia đình luôn sạch sẽ, an toàn, loại bỏ mọi vết bẩn cứng đầu khiến bạn mệt mỏi.
            </li>
          </ul>
          <div className="introduce-startList">
            <a href="/service" class="introduce-startButton">
              Trải nghiệm dịch vụ
            </a>
          </div>
        </div>
        <img
          src={cleansofa1}
          alt="clean sofa"
          className="introduce-form-item-img"
        ></img>
      </div>
      {/* reason */}
      <div className="reason-form">
        <div className="reason-form-header">
          <h3 className="reason-form-text1">Lý do chọn dịch vụ vệ sinh Sofa - Rèm - Đệm - Thảm :</h3>
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
                Đội ngũ CTV dọn dẹp của We Shine có thông tin lý lịch rõ ràng,
                có thể xác minh qua mã QR duy nhất. Khách hàng được xem trước
                chi phí trên app.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faHandPointUp} className="reason-icon" />
              <h3 className="reason-form-text2">Tiện lợi</h3>
              <h4 className="reason-form-text3">
                Chỉ cần 30s thao tác đặt lịch trên ứng dụng và tối thiểu 60 phút
                có ngay CTV đến làm việc.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faClock} className="reason-icon" />
              <h3 className="reason-form-text2">Tiết kiệm thời gian</h3>
              <h4 className="reason-form-text3">
                Chỉ từ 60 giây thao tác nhanh chóng trên ứng dụng là khách hàng
                đã có ngay người giúp việc.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faMoneyBill} className="reason-icon" />
              <h3 className="reason-form-text2">Tiết kiệm chi phí</h3>
              <h4 className="reason-form-text3">
                Bảng giá dịch vụ vệ sinh theo giờ đã bao gồm các dụng cụ dọn dẹp
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
          Quy trình thực hiện dịch vụ
          </h3>
          <div className="task-form-container-body">
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sofaclean;
