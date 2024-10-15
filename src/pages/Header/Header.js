import { faHeart, faUser,faPenToSquare,faBell,faHandshake, faList   } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./index.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="grid">
        <nav className="header__navbar">
          <ul className="header__navbar-list">
          <li className="header__navbar-item">
              <a href="/" class="header__navbar-item-link">
                We Shine
              </a>
            </li>
            
            <li className="header__navbar-item header__navbar-service-active">
            <FontAwesomeIcon icon={faList} className="header__navbar-item-icon" />
              Các dịch vụ
              {/* service list */}
              <div className="header__navbar-service">
                <ul className="header__navbar-service-list">
                  <li className="header__navbar-service-item">
                    <a href="/hourly" class="header__navbar-service-item">
                      Giúp việc nhà theo giờ
                    </a>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="navbar-service-icon"
                    />
                  </li>
                  <li className="header__navbar-service-item ">
                    <a href="/Aircondition" class="header__navbar-service-item">
                      Vệ sinh điều hòa
                    </a>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="navbar-service-icon"
                    />
                  </li>
                  <div className="header__navbar-service-list2">
                    <li className="header__navbar-service-item">
                      <a href="/totalclean" class="header__navbar-service-item">
                        Tổng vệ sinh
                      </a>
                    </li>
                    <li className="header__navbar-service-item">
                      <a href="/sofaclean" class="header__navbar-service-item">
                        Vệ sinh Sofa, Rèm, Đệm, Thảm
                      </a>
                    </li>
                    <li className="header__navbar-service-item">
                      <a href="/cooking" class="header__navbar-service-item">
                        Nấu ăn gia đình
                      </a>
                    </li>
                    <li className="header__navbar-service-item">
                      <a href="/laundry" class="header__navbar-service-item">
                        Giặt ủi
                      </a>
                    </li>
                    <li className="header__navbar-service-item">
                      <a href="/market" class="header__navbar-service-item">
                        Đi chợ
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="header__navbar-list">
            
            <li className="header__navbar-item header__navbar-service-active">
            <FontAwesomeIcon icon={faHandshake} className="header__navbar-item-icon" />
            <a href="/employee" class="header__navbar-item-link">
                Trở thành đối tác
              </a>
            </li>
            <li className="header__navbar-item">
            <FontAwesomeIcon icon={faBell} className="header__navbar-item-icon"/>
              <a href="/" class="header__navbar-item-link">
                Thông báo
              </a>
            </li>
            <li className="header__navbar-item">
            <FontAwesomeIcon icon={faPenToSquare} className="header__navbar-item-icon"/>
              <a
                href="/register"
                class="header__navbar-item-link header__navbar-item--strong header__navbar-item--separate"
              >
                Đăng ký
              </a>
            </li>
            <li className="header__navbar-item">
            <FontAwesomeIcon icon={faUser} className="header__navbar-item-icon"/>
              <a
                href="/login"
                class="header__navbar-item-link header__navbar-item--strong header__navbar-item--separate"
              >
                Đăng nhập
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
