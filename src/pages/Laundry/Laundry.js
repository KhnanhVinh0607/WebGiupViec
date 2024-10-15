import React, { useState } from "react";
import "./index.css";
import cleanhouse from "../../image/laundry.jpg";
import reasonHouse from "../../image/li_do_giat_ui.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faHandPointUp,
  faClock,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";
function Laundry() {
  return (
    <div className="main-form">
      {/* introduce */}
      <div className="introduce-form">
        <div className="introduce-text-form">
          <ul className="introduce-text-list">
            <li className="introduce-text-item">Dịch vụ</li>
            <li className="introduce-text-item introduce-textFormItemService2">
              Giặt ủi
            </li>
            <li className=" introduce-textFormItemService3">
              Giao nhận tận nơi, thảnh thơi tại nhà.
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
          <h3 className="reason-form-text1">Lý do chọn giúp việc theo giờ :</h3>
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
              <h3 className="reason-form-text2">Luôn luôn sẵn sàng</h3>
              <h4 className="reason-form-text3">
              Chúng tôi làm việc theo lịch trình của bạn. Cho dù là giặt đồ một lần một tuần, hay định kỳ hàng tuần, đội ngũ giặt ủi của chúng tôi luôn sẵn sàng hỗ trợ bạn.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faHandPointUp} className="reason-icon" />
              <h3 className="reason-form-text2">Chất lượng dịch vụ</h3>
              <h4 className="reason-form-text3">
                Chúng tôi cam kết
                chăm sóc quần áo của bạn tốt hơn bất kỳ ai khác. Với những loại
                quần áo đặc biệt, chúng tôi sẽ liên hệ với bạn qua điện thoại
                hoặc tin nhắn để đảm bảo chúng được làm sạch theo đúng yêu cầu
                của bạn.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faClock} className="reason-icon" />
              <h3 className="reason-form-text2">Giao - nhận nhanh chóng</h3>
              <h4 className="reason-form-text3">
                Chỉ với 3 bước đơn giản khi đặt lịch giặt ủi, đối tác của chúng
                tôi sẽ đến địa chỉ được cung cấp trong khoảng thời gian bạn chọn
                để nhận đồ và giao đồ.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faMoneyBill} className="reason-icon" />
              <h3 className="reason-form-text2">Chi phí hợp lý</h3>
              <h4 className="reason-form-text3">
                Dịch vụ giặt ủi bTaskee với chi phí hợp lý cho tất cả khách hàng
                khi so sánh trên thị trường.
              </h4>
            </li>
          </ul>
        </div>
      </div>
      {/* task */}
      <div className="task-form">
        <div className="task-form-container">
          <h3 className="task-form-text">
          Quy trình thực hiện dịch vụ giặt ủi
          </h3>
          <div className="task-form-container-body">
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laundry;
