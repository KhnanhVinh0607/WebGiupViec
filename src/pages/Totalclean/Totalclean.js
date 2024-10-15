import React, { useState } from "react";
import "./index.css";
import cleanhouse from "../../image/clean_house1.jpg";
import reasonHouse from "../../image/reason_hourly.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faHandPointUp,
  faClock,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";

function Totalclean() {
  return (
    <div className="main-form">
      {/* introduce */}
      <div className="introduce-form">
        <div className="introduce-text-form">
          <ul className="introduce-text-list">
            <li className="introduce-text-item">Dịch vụ</li>
            <li className="introduce-text-item introduce-textFormItemService2">
              Tổng vệ sinh
            </li>
            <li className=" introduce-textFormItemService3">
              Môi trường sạch hơn, bạn khỏe mạnh hơn.
            </li>
          </ul>
          <div className="introduce-startList">
            <a href="/service" class="introduce-startButton">
              Trải nghiệm dịch vụ
            </a>
          </div>
        </div>
        <img
          src={cleanhouse}
          alt="tong_ve_sinh"
          className="introduce-form-item-img"
        ></img>
      </div>
      {/* reason */}
      <div className="reason-form">
        <div className="reason-form-header">
          <h3 className="reason-form-text1">Lý do chọn tổng vệ sinh :</h3>
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
                Không chỉ thực hiện vệ sinh nhà cửa căn bản (dọn dẹp, quét, lau
                nhà,...); dịch vụ tổng vệ sinh, người giúp việc sẽ làm sạch đến
                từng chi tiết nhỏ nhất trong nhà bạn.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faClock} className="reason-icon" />
              <h3 className="reason-form-text2">Tiết kiệm thời gian</h3>
              <h4 className="reason-form-text3">
                Nếu như dọn dẹp, lau chùi nhà cửa là công việc thường ngày thì
                tổng vệ sinh nhà ở là việc được khuyến khích thực hiện định kỳ 2
                - 3 tháng/lần và vào các dịp đặc biệt, lễ Tết.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faMoneyBill} className="reason-icon" />
              <h3 className="reason-form-text2">Tiết kiệm chi phí</h3>
              <h4 className="reason-form-text3">
                Đội ngũ giúp việc sẽ mang theo các thiết bị, dụng cụ chuyên dụng
                hỗ trợ cho công việc . Bạn sẽ hoàn toàn không mất phí cho dụng
                cụ tổng vệ sinh như dịch vụ giúp việc.
              </h4>
            </li>
          </ul>
        </div>
      </div>
      {/* task */}
      <div className="task-form">
        <div className="task-form-container">
          <h3 className="task-form-text">
            Cộng tác viên giúp việc theo giờ sẽ làm những gì?
          </h3>
          <div className="task-form-container-body">
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Totalclean;
