import {
  faUsers,
  faClock,
  faMoneyBill,
  faShield,
  faUser,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select } from "antd";
import React from "react";
import "./index.css";
import benefit from "../../image/benefit.png";
const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};
function Employee() {
  return (
    <div className="employee-page">
      <div className="employee-form">
        <div className="employee-form-text">
          <div className="employee-form-text1">Thu nhập nhiều hơn.</div>
          <div className="employee-form-text1">Cuộc sống tốt hơn.</div>
          <div className="employee-form-text2">
            Giờ đây, bạn không chỉ dễ dàng kiếm tiền từ việc là đối tác giúp
            việc của We Shine, mà còn chủ động về thời gian của bạn để cải thiện
            chất lượng cuộc sống.
          </div>
        </div>
        <div className="employee-form-content">
          <div className="employee-form-content-input">
            <div className="employee-form-content-text">Trở thành đối tác</div>
            <ul className="employee-form-content-list">
              <li className="employee-form-content-item">
                <label for="fullname">Họ tên</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder=""
                />
              </li>
              <li className="employee-form-content-item">
                <label for="phone">Số điện thoại:</label>
                <input type="text" id="phone" name="phone" placeholder="" />
              </li>
              <li className="employee-form-content-item">
                <label for="age">Tuổi:</label>
                <input type="text" id="age" name="age" placeholder="" />
              </li>
              <div className="employee-form-content-item">
                <Select
                  showSearch
                  placeholder="Chọn dịch vụ đăng ký"
                  optionFilterProp="label"
                  onChange={onChange}
                  onSearch={onSearch}
                  className="employee-form-content-item-select"
                  options={[
                    {
                      value: "1",
                      label: "Giúp việc nhà theo giờ ",
                    },
                    {
                      value: "2",
                      label: "Vệ sinh điều hòa",
                    },
                    {
                      value: "3",
                      label: "Tổng vệ sinh",
                    },
                    {
                      value: "1",
                      label: "Vệ sinh Sofa, Rèm, Đệm, Thảm",
                    },
                    {
                      value: "2",
                      label: "Nấu ăn gia đình",
                    },
                    {
                      value: "3",
                      label: "Giặt giũ",
                    },
                    {
                      value: "1",
                      label: "Đi chợ",
                    },
                  ]}
                />
              </div>
              <div className="employee-form-content-item">
                <Select
                  showSearch
                  placeholder="Chọn thành phố đăng ký"
                  optionFilterProp="label"
                  onChange={onChange}
                  onSearch={onSearch}
                  className="employee-form-content-item-select"
                  options={[
                    {
                      value: "1",
                      label: "Hà Nội",
                    },
                    {
                      value: "2",
                      label: "Đà Nẵng",
                    },
                    {
                      value: "3",
                      label: "Tp. Hồ Chí Minh",
                    },
                  ]}
                />
              </div>
            </ul>
            <div className="employee-form-content-checkbox">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="checkbox-input"
              />
              <label for="checkbox" className="checkbox-label">
                Tôi đồng ý việc đại diện từ We Shine liên lạc với tôi thông qua
                số điện thoại mà tôi đăng ký.
              </label>
            </div>
            <div className="employee-form-content-button">
              <button type="button" onclick="" className="startButton1">
                Đăng ký nhận việc
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="employee-benefit">
        <div className="employee-benefit-text">Đặc quyền của đối tác</div>
        <div className="employee-benefit-container">
          <img
            src={benefit}
            alt="loi ich cua doi tac"
            className="employee-benefit-img"
          ></img>
          <ul className="employee-benefit-list">
            <li className="employee-benefit-item">
              <FontAwesomeIcon
                icon={faUsers}
                className="employee-benefit-item-icon"
              />
              <div className="employee-benefit-item-text1">
                Không bị phụ thuộc vào một khách hàng
              </div>
              <div className="employee-benefit-item-text2">
                Bạn chỉ cần nhận việc trên ứng dụng mà không cần phải tìm kiếm
                khách hàng.
              </div>
            </li>
            <li className="employee-benefit-item">
              <FontAwesomeIcon
                icon={faClock}
                className="employee-benefit-item-icon"
              />
              <div className="employee-benefit-item-text1">
                Linh động về thời gian
              </div>
              <div className="employee-benefit-item-text2">
                Bạn có thể chủ động lựa chọn những công việc phù hợp với mình
                (về thời gian, địa điểm hay giá tiền).
              </div>
            </li>
            <li className="employee-benefit-item">
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="employee-benefit-item-icon"
              />
              <div className="employee-benefit-item-text1">Thu nhập cao</div>
              <div className="employee-benefit-item-text2">
                Thu nhập cao và đều đặn nếu bạn tích cực và siêng năng theo dõi
                nhận việc.
              </div>
            </li>
            <li className="employee-benefit-item">
              <FontAwesomeIcon
                icon={faShield}
                className="employee-benefit-item-icon"
              />
              <div className="employee-benefit-item-text1">
                Đảm bảo quyền lợi lao động
              </div>
              <div className="employee-benefit-item-text2">
                Được hưởng chính sách hỗ trợ của We Shine.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="employee-steps">
        <div className="employee-steps-text">Các bước đăng ký</div>
        <ul className="employee-steps-list">
          <li className="employee-steps-item">
            <div className="employee-steps-text1">Bước 1</div>
            <div className="employee-steps-text2">
              Điền bảng thông tin đối tác. Sẽ có nhân viên hỗ trợ gọi đến số
              điện thoại bạn đăng ký
            </div>
          </li>
          <li className="employee-steps-item">
            <div className="employee-steps-text1">Bước 2</div>
            <div className="employee-steps-text2">
              Nộp hồ sơ và phỏng vấn tại văn phòng
            </div>
          </li>
          <li className="employee-steps-item">
            <div className="employee-steps-text1">Bước 3</div>
            <div className="employee-steps-text2">
              Hoàn thành tốt lần thử việc đầu tiên
            </div>
          </li>
          <li className="employee-steps-item">
            <div className="employee-steps-text1">Bước 4</div>
            <div className="employee-steps-text2">
              Trở thành đối tác của bTaskee và bắt đầu nhận việc
            </div>
          </li>
        </ul>
      </div>
      <div className="employee-cv">
        <div className="employee-cv-text">Những điều cần thiết khi đăng ký</div>
        <ul className="employee-cv-list">
          <li className="employee-cv-item">
            <FontAwesomeIcon icon={faUser} className="employee-cv-item-icon" />
            <div className="employee-cv-item-text1">Yêu cầu chung</div>
            <div className="employee-cv-item-text2">
              <ul className="employee-cv-item-text2-list">
                <li className="employee-cv-item-text2-item">
                  Có điện thoại di động thông minh.
                </li>
                <li className="employee-cv-item-text2-item">
                  Có phương tiện xe máy di chuyển.
                </li>
                <li className="employee-cv-item-text2-item">
                  Có ít nhất 01 năm kinh nghiệm về công việc đăng ký.
                </li>
                <li className="employee-cv-item-text2-item">
                  Ưu tiên ứng viên có kinh nghiệm làm người giúp việc lâu năm
                </li>
              </ul>
            </div>
          </li>
          <li className="employee-cv-item">
            <FontAwesomeIcon icon={faNoteSticky} className="employee-cv-item-icon"/>
            <div className="employee-cv-item-text1">Hồ sơ yêu cầu</div>
            <div className="employee-cv-item-text2">
              <ul className="employee-cv-item-text2-list">
                <li className="employee-cv-item-text2-item">
                  01 bản photo công chứng Chứng minh nhân dân.
                </li>
                <li className="employee-cv-item-text2-item">
                  01 bản photocopy công chứng Hộ khẩu.
                </li>
                <li className="employee-cv-item-text2-item">
                  01 bản sơ yếu lí lịch có công chứng.
                </li>
                <li className="employee-cv-item-text2-item">
                  01 giấy Xác Nhận Hạnh Kiểm tại Công An Phường hoặc giấy Lý
                  Lịch Tư Pháp tại Sở Tư Pháp Thành Phố.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Employee;
