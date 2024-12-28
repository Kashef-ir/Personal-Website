import React from "react";
import bg1Img from "../../assets/images/bg1.png";
import meImg from "../../assets/images/me.png";
import iconSVG from "../../assets/images/icon.svg";
import star1SVG from "../../assets/images/star1.svg";
import signIMG from "../../assets/images/sign.png";
import myWorksIMG from "../../assets/images/my-works.png";
import gfontsIMG from "../../assets/images/gfonts.png";
import icon2IMG from "../../assets/images/icon2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faShield,
  faCogs,
  faBug,
} from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/style.css";
import "../css/fonts.css";
import "./About.css";

function About() {
  return (
    <>
      <section className="about-area">
        <FontAwesomeIcon icon={["fab", "github"]} />
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-me-box shadow-box">
                <a className="overlay-link" href="about.html"></a>
                <img src={bg1Img} alt="BG" className="bg-img" />
                <div className="img-box">
                  <img src={meImg} alt="About Me" />
                </div>
                <div className="infos">
                  <h4>یک طراح وب</h4>
                  <h1>دیوید هندرسون</h1>
                  <p>من یک طراح وب مستقر در سان فرانسیسکو هستم.</p>
                  <a href="#" className="about-btn">
                    <img id="rdt" src={iconSVG} alt="Button" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="about-credentials-wrap">
                <div data-aos="zoom-in">
                  <div className="banner shadow-box">
                    <div className="marquee">
                      <div>
                        <span>
                          آخرین کار و <b>ویژه</b>{" "}
                          <img src={star1SVG} alt="Star" /> آخرین کار و{" "}
                          <b>ویژه</b> <img src={star1SVG} alt="Star" /> آخرین
                          کار و <b>ویژه</b> <img src={star1SVG} alt="Star" />{" "}
                          آخرین کار و <b>ویژه</b> آخرین کار و{" "}
                          <img src={star1SVG} alt="Star" /> آخرین کار و{" "}
                          <b>ویژه</b> آخرین کار و{" "}
                          <img src={star1SVG} alt="Star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gx-row d-flex gap-24">
                  <div data-aos="zoom-in">
                    <div className="about-crenditials-box info-box shadow-box h-full">
                      <a className="overlay-link" href="credentials.html"></a>
                      <img src={bg1Img} alt="BG" className="bg-img" />
                      <img src={signIMG} alt="Sign" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4> بیشتر در مورد من</h4>
                          <h1>اعتبارنامه</h1>
                        </div>
                        <a href="#" className="about-btn">
                          <img id="rdt" src={iconSVG} alt="Button" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div data-aos="zoom-in">
                    <div className="about-project-box info-box shadow-box h-full">
                      <a className="overlay-link" href="works.html"></a>
                      <img src={bg1Img} alt="BG" className="bg-img" />
                      <img src={myWorksIMG} alt="کارهای من" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>ویترین</h4>
                          <h1>پروژه ها</h1>
                        </div>

                        <a href="index.html#" className="about-btn">
                          <img id="rdt" src={iconSVG} alt="Button" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-12">
              <div className="blog-service-profile-wrap d-flex gap-24">
                <div data-aos="zoom-in">
                  <div className="about-blog-box info-box shadow-box h-full">
                    <a href="blog.html" className="overlay-link"></a>
                    <img src={bg1Img} alt="BG" className="bg-img" />
                    <img src={gfontsIMG} alt="GFonts" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>وبلاگ</h4>
                        <h1>فونت ها</h1>
                      </div>

                      <a href="blog.html" className="about-btn">
                        <img id="rdt" src={iconSVG} alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in" className="flex-1">
                  <div className="about-services-box info-box shadow-box h-full">
                    <a href="service.html" className="overlay-link"></a>
                    <img src={bg1Img} alt="BG" className="bg-img" />
                    <div className="icon-boxes">
                      <FontAwesomeIcon
                        icon={faCode}
                        className="fa-fw icon-boxes-icons"
                      />
                      <FontAwesomeIcon
                        icon={faShield}
                        className="fa-fw icon-boxes-icons"
                      />
                      <FontAwesomeIcon
                        icon={faCogs}
                        className="fa-fw icon-boxes-icons"
                      />
                      <FontAwesomeIcon
                        icon={faBug}
                        className="fa-fw icon-boxes-icons"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>تخصص ها</h4>
                        <h1>ارائه خدمات</h1>
                      </div>

                      <a href="service.html" className="about-btn">
                        <img id="rdt" src={iconSVG} alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div data-aos="zoom-in">
                  <div className="about-profile-box info-box shadow-box h-full">
                    <img src={bg1Img} alt="BG" className="bg-img" />
                    <div className="inner-profile-icons shadow-box">
                      <a href="index.html#">
                        <FaGithub size={35} />
                      </a>
                      <a href="index.html#">
                        <FaXTwitter size={35}/>
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>با من بمان</h4>
                        <h1>پروفایل ها</h1>
                      </div>

                      <a href="contact.html" className="about-btn">
                        <img id="rdt" src={iconSVG} alt="Button" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-24">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-client-box info-box shadow-box">
                <img src={bg1Img} alt="BG" className="bg-img" />
                <div className="clients d-flex align-items-start gap-24 justify-content-center">
                  <div className="client-item">
                    <h1>07</h1>
                    <p>
                      سال <br />
                      تجربه
                    </p>
                  </div>

                  <div className="client-item">
                    <h1>+125</h1>
                    <p>
                      مشتری <br />
                      راضی
                    </p>
                  </div>

                  <div className="client-item">
                    <h1>+210</h1>
                    <p>
                      همه <br />
                      پروژه ها
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-contact-box info-box shadow-box">
                <a className="overlay-link" href="contact.html"></a>
                <img src={bg1Img} alt="BG" className="bg-img" />
                <img src={icon2IMG} alt="Icon" className="star-icon" />
                <h1>
                  بیایید <br />
                  با هم <span>کار کنیم.</span>
                </h1>
                <a href="index.html#" className="about-btn">
                  <img id="rdt" src={iconSVG} alt="Button" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
