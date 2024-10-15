import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { Select } from "antd";
import "./index.css";
import img from "../../image/nha_dep.jpg";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { Input } from "antd";

const { Option } = Select;

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
const format = "HH:mm";
const steps = [
  {
    title: "Dịch vụ",
    content: (
      <div className="select-form">
        <div className="select-form-text">
          <h3 className="select-form-text1">Tất cả các dịch vụ tiện ích của We Shine</h3>
        </div>
        <div className="select-form-main">
          <Select
            showSearch
            placeholder="Chọn dịch vụ"
            optionFilterProp="label"
            className="select-input"
            onChange={onChange}
            onSearch={onSearch}
            options={[
              {
                value: "Giúp việc nhà theo giờ",
                label: "Giúp việc nhà theo giờ",
              },
              {
                value: "Vệ sinh điều hòa",
                label: "Vệ sinh điều hòa",
              },
              {
                value: "Tổng vệ sinh",
                label: "Tổng vệ sinh",
              },
              {
                value: "Vệ sinh Sofa - Rèm - Đệm - Thảm",
                label: "Vệ sinh Sofa - Rèm - Đệm - Thảm",
              },
              {
                value: "Nấu ăn gia đình",
                label: "Nấu ăn gia đình",
              },
              {
                value: "Giặt ủi",
                label: "Giặt ủi",
              },
              {
                value: "Đi chợ",
                label: "Đi chợ",
              },
            ]}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Nhân viên yêu thích",
    content: (
      <div className="fav_employee">
        <div className="fav_employee_text">
          <h3 className="fav_employee_text1">
            Chọn nhân viên yêu thích của bạn:
          </h3>
        </div>
        <div className="fav_employee_container"></div>
      </div>
    ),
  },
  {
    title: "Thời gian và địa điểm",
    content: (
      <div className="Date-place-form">
        <div className="Date-place-form-input">
          <h3 className="Date-place-form-input-text">
            Nhập địa chỉ của bạn :
          </h3>
          <div className="Date-place-form-input-main"></div>
          <Input placeholder="Nhập địa chỉ" />
        </div>
        <div className="Date-place-form-datepicker">
          <div className="Date-place-form-datepicker-text">
            <h3 className="Date-place-form-datepicker-text1">Chọn thời gian đặt dịch vụ: </h3>
          </div>
          <div>
            <Space direction="vertical">
              <DatePicker onChange={handleDateChange} />
            </Space>
          </div>
          <div>
            <TimePicker defaultValue={dayjs("12:08", format)} format={format} />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Giá tham khảo",
    content: (
      <div className="price-form">
        <div className="price-form-text">
          <h3 className="price-form-text1">Các mức giá tham khảo:</h3>
        </div>
      </div>
    ),
  },
  {
    title: "Đơn hàng",
    content: (
      <div className="order-form">

      </div>
    ),
  },
];

const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle = {
    lineHeight: "50px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div className="step_form">
      <div className="step_form_header">
        <div className="step_form_header_text">
          <h3 className="step_form_header_text1">
            Hãy bắt đầu trải nghiệm dịch vụ của We Shine
          </h3>
          <h4 className="step_form_header_text2">
            Quá trình trải nghiệm dịch vụ của We Shine mang lại sự tiện lợi và
            nhanh chóng, cho phép bạn dễ dàng sử dụng và đánh giá. Thêm vào đó,
            hệ thống giúp tiết kiệm thời gian và công sức, đồng thời tạo ra một
            môi trường minh bạch hơn trong việc lựa chọn người giúp việc.
          </h4>
        </div>
        <img
          src={img}
          alt="dat dich vu"
          className="slide__service-item-img"
        ></img>
      </div>
      <div className="step_form_container">
        <div className="step_form_container_text">
          <h3 className="step_form_container_text1">
            Các bước sử dụng dịch vụ của We Shine:
          </h3>
        </div>
        <div className="step_form_container_main">
          <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 24 }}>
              {current < steps.length - 1 && (
                <Button
                  type="primary"
                  className="custom-button"
                  onClick={() => next()}
                >
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default App;
