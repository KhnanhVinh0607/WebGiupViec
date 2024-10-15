import React, { useState } from "react";
import "./index.css";
import market from "../../image/market.jpg";
import reasonHouse from "../../image/li_do_di_cho.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faHandPointUp,
  faClock,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";

function Market() {
  return (
    <div className="main-form">
      {/* introduce */}
      <div className="introduce-form">
        <div className="introduce-text-form">
          <ul className="introduce-text-list">
            <li className="introduce-text-item">Dịch vụ</li>
            <li className="introduce-text-item introduce-textFormItemService2">
              Đi chợ
            </li>
            <li className=" introduce-textFormItemService3">
              Dịch vụ đi chợ giúp bạn tiết kiệm thời gian và công sức bằng cách
              cung cấp các sản phẩm tươi ngon, từ rau củ, thịt cá đến các nguyên
              liệu khác, được chọn lọc kỹ lưỡng. Với sự tiện lợi này, bạn có thể
              dễ dàng thưởng thức những bữa ăn chất lượng mà không cần phải lo
              lắng về việc mua sắm.
            </li>
          </ul>
          <div className="introduce-startList">
            <a href="/service" class="introduce-startButton">
              Trải nghiệm dịch vụ
            </a>
          </div>
        </div>
        <img
          src={market}
          alt="giup viec theo gio"
          className="introduce-form-item-img"
        ></img>
      </div>
      {/* reason */}
      <div className="reason-form">
        <div className="reason-form-header">
          <h3 className="reason-form-text1">Tại sao nên sử dụng dịch vụ Đi chợ hộ của We Shine?</h3>
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
              Phụ tá đi chợ đều là người  giỏi nội trợ, hiểu biết sâu sắc về thực phẩm. Trực tiếp lựa chọn từng loại thực phẩm, hàng hóa chất lượng và giao hàng tận nơi cho bạn.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faHandPointUp} className="reason-icon" />
              <h3 className="reason-form-text2">Tiện lợi</h3>
              <h4 className="reason-form-text3">
              Với dịch vụ đi chợ hộ của bTaskee bạn có thể chủ động được nguồn thực phẩm của gia đình.
               Dù ở công sở, bệnh viện, trường học  hay nơi cách ly y tế bạn đều có thể mua lương thực, thực phẩm phục vụ đời sống
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faClock} className="reason-icon" />
              <h3 className="reason-form-text2">Tiết kiệm thời gian</h3>
              <h4 className="reason-form-text3">
              Bạn không phải tốn hàng giờ đồng hồ di chuyển, lựa thực phẩm và chờ đợi tính tiền tại các chợ, siêu thị. Tất cả đã có phụ tá đi chợ thực hiện thay bạn.
              </h4>
            </li>
            <li className="reason-form-text-item">
              <FontAwesomeIcon icon={faMoneyBill} className="reason-icon" />
              <h3 className="reason-form-text2">Tiết kiệm chi phí</h3>
              <h4 className="reason-form-text3">
              Bạn chỉ cần thanh toán đúng chi phí ghi trên hóa đơn mua hàng và phí dịch vụ được hiển thị trên ứng dụng.
              </h4>
            </li>
          </ul>
        </div>
      </div>
      {/* task */}
      <div className="task-form">
        <div className="task-form-container">
          <h3 className="task-form-text">
          Dịch vụ của bTaskee có gì khác biệt?
          </h3>
          <div className="task-form-container-body">
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
