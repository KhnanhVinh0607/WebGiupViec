import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import serviceHour from "../../image/serviveHour.jpg";
import airCondition from "../../image/air_condition.jpg";
import cleanHouse from "../../image/clean_house.jpg";
import cleanSofa from "../../image/clean_sofa.jpg";
import cooking from "../../image/cooking.jpg";
import laundry from "../../image/laundry.jpg";
import market from "../../image/market.jpg";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        textAlign: "center",
        lineHeight: "50px",
        marginRight: "70px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        textAlign: "center",
        lineHeight: "50px",
        marginLeft: "70px",
      }}
      onClick={onClick}
    />
  );
}

function SampleSlider() {
  const settings = {
    dots: true,
    infinite: true, //di chuyen vo han
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, //tu dong di chuyen
    autoplaySpeed: 2000, // toc do di chuyen
    pauseOnHover: false, //hover se dung di chuyen
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slick-slider">
      <Slider {...settings}>
        <div className="slick-slide">
          <li className="slide__service-item">
            <img
              src={serviceHour}
              alt="giup viec nha theo gio"
              className="slide__service-item-img"
            ></img>
            <h3 className="slide__serive-item-name">Giúp việc nhà theo giờ</h3>
            <h3 className="slide__serive-item-description">
              Là dịch vụ đầu tiên Weshine triển khai. Giờ đây công việc dọn dẹp
              không còn là nỗi bận tâm, bạn sẽ có nhiều thời gian nghỉ ngơi và
              tận hưởng cuộc sống.
            </h3>
            <a href="/hourly" className="slide__service-item-link">
              Tìm hiểu thêm
            </a>
          </li>
        </div>

        <div className="slick-slide">
          <li className="slide__service-item">
            <img
              src={airCondition}
              alt="ve sinh dieu hoa"
              className="slide__service-item-img"
            ></img>
            <h3 className="slide__serive-item-name">Vệ sinh điều hòa</h3>
            <h3 className="slide__serive-item-description">
              Giúp cải thiện chất lượng không khí, giảm mức tiêu thụ điện năng
              và tăng tuổi thọ máy lạnh tại nhà hay phòng làm việc của bạn.
            </h3>
            <a href="/Aircondition" className="slide__service-item-link">
              Tìm hiểu thêm
            </a>
          </li>
        </div>

        <div className="slick-slide">
          <li className="slide__service-item">
            <img
              src={cleanHouse}
              alt="tong ve sinh"
              className="slide__service-item-img"
            ></img>
            <h3 className="slide__serive-item-name">Tổng vệ sinh</h3>
            <h3 className="slide__serive-item-description">
              Xử lý chuyên sâu mọi vết bẩn trong căn nhà của bạn với từ 2 cộng
              tác viên giúp việc nhà trở lên.
            </h3>
            <a href="/totalclean" className="slide__service-item-link">
              Tìm hiểu thêm
            </a>
          </li>
        </div>

        <div className="slick-slide">
          <li className="slide__service-item">
            <img
              src={cleanSofa}
              alt="ve sinh sofa"
              className="slide__service-item-img"
            ></img>
            <h3 className="slide__serive-item-name">Vệ sinh sofa</h3>
            <h3 className="slide__serive-item-description">
              Đánh bay vết bẩn và mầm bệnh gây hại từ chính sofa, nệm hay rèm
              cửa nhà bạn.
            </h3>
            <a href="/sofaclean" className="slide__service-item-link">
              Tìm hiểu thêm
            </a>
          </li>
        </div>

        <div className="slick-slide">
          <li className="slide__service-item">
            <img
              src={cooking}
              alt="anh 1"
              className="slide__service-item-img"
            ></img>
            <h3 className="slide__serive-item-name">Nấu ăn</h3>
            <h3 className="slide__serive-item-description">
              Mang đến bữa ăn gia đình ấm áp, tròn vị mỗi khi cuộc sống quá bận
              rộn.
            </h3>
            <a href="/cooking" className="slide__service-item-link">
              Tìm hiểu thêm
            </a>
          </li>
        </div>

        <div className="slick-slide">
          <li className="slide__service-item">
            <img
              src={laundry}
              alt="giat ui"
              className="slide__service-item-img"
            ></img>
            <h3 className="slide__serive-item-name">Giặt ủi</h3>
            <h3 className="slide__serive-item-description">
              Giúp bạn làm sạch quần áo nhanh chóng, cùng tiện ích giao nhận tận
              nơi.
            </h3>
            <a href="/laundry" className="slide__service-item-link">
              Tìm hiểu thêm
            </a>
          </li>
        </div>

        <div className="slick-slide">
          <li className="slide__service-item">
            <img
              src={market}
              alt="di cho"
              className="slide__service-item-img"
            ></img>
            <h3 className="slide__serive-item-name">Đi chợ</h3>
            <h3 className="slide__serive-item-description">
              Việc mua sắm thực phẩm và đồ dùng gia đình trở nên tiện lợi hơn
              bao giờ hết. Giao hàng tận nơi chỉ sau 1h.
            </h3>
            <a href="/market" className="slide__service-item-link">
              Tìm hiểu thêm
            </a>
          </li>
        </div>
      </Slider>
    </div>
  );
}

export default SampleSlider;
