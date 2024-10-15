import React, { useState } from "react";
import "./index.css";
import cleanhouse from "../../image/clean_house.jpg";
import reasonHouse from "../../image/reason_hourly.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faHandPointUp,
  faClock,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";
function Cooking() {
  return (
    <div className="main-form">
      {/* introduce */}
      <div className="introduce-form">
        <div className="introduce-text-form">
          <ul className="introduce-text-list">
            <li className="introduce-text-item">Dịch vụ</li>
            <li className="introduce-text-item introduce-textFormItemService2">
            Nấu ăn gia đình
            </li>
            <li className=" introduce-textFormItemService3">
            Mang đến bữa ăn ngon chuẩn vị
            “cơm nhà” cho gia đình bạn.
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
          alt="giup viec theo gio"
          className="introduce-form-item-img"
        ></img>
      </div>
      {/* reason */}
      <div className="reason-form">
        <div className="reason-form-header">
          <h3 className="reason-form-text1">Cơm nhà của We Shine có gì?</h3>
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
              <h3 className="reason-form-text2">Đảm bảo chất lượng</h3>
              <h4 className="reason-form-text3">
              Cộng tác viên nấu ăn chuyên nghiệp đảm bảo vệ sinh an toàn thực phẩm trong suốt quá trình nấu nướng.
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
              <h3 className="reason-form-text2">Đặt lịch nhanh chóng</h3>
              <h4 className="reason-form-text3">
              Đăng việc dễ dàng trong vòng 60 giây trên ứng dụng, có ngay đầu bếp nấu ăn trong vòng 60 phút.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faMoneyBill} className="reason-icon" />
              <h3 className="reason-form-text2">Giá cả minh bạch</h3>
              <h4 className="reason-form-text3">
              Giá dịch vụ sẽ được hiển thị chi tiết trên ứng dụng. Bạn không phải trả thêm bất kỳ chi phí phát sinh nào.
              </h4>
            </li>
          </ul>
        </div>
      </div>
      {/* task */}
        <div className="task-form">
          <div className="task-form-container">
            <h3 className="task-form-text">
              Cộng tác viên nấu ăn sẽ làm gì ?
            </h3>
            <div className="task-form-container-body">
              <Task />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Cooking;
