import Head from "next/head";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { useState, useEffect } from "react";
import Axios from "axios";
import ModalComponent from "../components/modal";

export default function Home() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [showMenuList, setShowMenuList] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    // AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    Axios.post("/api/contact", { ...data })
      .then((res) => {
        setLoading(false);
        setSuccess(res.data.msg);
        setError(null);
        setData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      })
      .catch((err) => {
        setLoading(false);

        setError(err.response.data.msg);
        setSuccess(false);
      });
  };

  function handleViewMore(e) {
    setTitle(e.target.getAttribute("data-title"));
    setSrc(e.target.getAttribute("data-src"));
    setDescription(e.target.getAttribute("data-description"));
    setLink(e.target.getAttribute("data-link"));
    setModalShow(true);
  }

  return (
    <>
      {/* <Modal /> */}

      <ModalComponent
        src={src}
        title={title}
        description={description}
        link={link}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Head>
        <title>Erisan Akorede Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <!-- scroll top --> */}
      <div className="scroll-top-container" title="Move To Top"></div>
      {/* <!--  --> */}
      <div className="overflow-hidden position-relative pb-3">
        <div className="slider-cont home">
          <figure>
            <img src="./img/g1.jpg" alt="" srcset="" />
            <img src="./img/g2.jpg" alt="" />
            <img src="./img/g3.jpg" alt="" />
          </figure>
          <div className="light-cont">
            <header className={`py-4 ${showMenuList ? "background-s" : ""}`}>
              <div className="col-lg-11 mx-auto">
                <div className="row">
                  <div
                    className="col-4 text-white"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    ERI'S
                    {/* <img src="./img/logo.png" alt="" className="logo" /> */}
                  </div>
                  <div
                    className="mobile-menu"
                    onClick={() => setShowMenuList(!showMenuList)}
                  >
                    <img
                      src={`${
                        showMenuList ? "./img/close.svg" : "./img/menu.svg"
                      }`}
                      alt=""
                      width="25px"
                      className="menu-icon"
                    />
                  </div>
                  <div className={`col menu- ${showMenuList ? "show" : ""}`}>
                    <ul className=" text-center text-md-right mobileMenu">
                      <li className="links-" data="home">
                        <a href="#!" className="px-3">
                          Home
                        </a>
                      </li>
                      <li className="links-" data="services-s">
                        <a href="#skill" className="px-3">
                          Skill
                        </a>
                      </li>
                      <li className="links-" data="about-us">
                        <a href="#about-me" className="px-3">
                          About me
                        </a>
                      </li>
                      <li className="links-" data="about-us">
                        <a href="#hobby" className="px-3">
                          Hobby
                        </a>
                      </li>
                      <li className="links-" data="contact-us">
                        <a href="#contact-me" className="px-3">
                          Contact me
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </header>
            {/* <!--  --> */}
            {/* <!--  --> */}
            <div className={`welcome-text ${showMenuList ? "opacity-0" : ""}`}>
              <br />
              Erisan Akorede
              <div className="d-inline position-relative overflow-hidden">
                <div className="clearfix"></div>
                <span
                  className="d-inline-block px-4"
                  style={{ backgroundColor: " rgba(62, 90, 251 ,.4)" }}
                >
                  I am a
                </span>
                <Typewriter
                  options={{
                    strings: [
                      "frontend developer",
                      " search engine optimization expert",
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 3000,
                    delay: 100,
                  }}
                />
              </div>
            </div>
            {/* <!--  --> */}
          </div>
        </div>
        <Link href="#skill">
          <a className="scll-cont d-inline-block" id="about-me">
            <div className="scroll-bottom links-" data="about-us"></div>
          </a>
        </Link>
      </div>

      {/* <!-- serivices --> */}
      <div>
        <div className="col-md-9 mx-auto my-5 text-centers services-s text-center">
          <h2>About me</h2>
        </div>
        <div className="col-xl-9 col-lg-10 col-md-11 mx-auto  pb-5">
          <div className="row background services">
            <div className="col-md-7 ">
              <img
                src="/img/me.png"
                className="mb-4 img-fluid d-md-none d-block"
              />
            </div>
            <div className="col-md">
              <h3 className="primary-color pb-4 br-none ">
                Who Am i <br />
                Summary
              </h3>

              <p>
                Innovative Front End Developer with over 2 years experience
                building and maintaining responsive websites in the tech
                industry. Proficient in HTML, CSS, JavaScript; plus modern
                libraries and frameworks.
              </p>
              <p>
                And also a highly driven and results-oriented SEO Specialist.
                Adept in original content development search friendly
                architecture solutions and keyword research. Possesses excellent
                problem-solving and analytical thinking skills.
              </p>
              <a st className="btn fancy d-inline-block px-5 mt-5">
                Visit site
                <img
                  style={{ width: "20px", marginLeft: "10px" }}
                  className="img-fluid"
                  src="/img/right-arrow.svg"
                />
              </a>
            </div>
          </div>
          {/* <!--  --> */}
          <div className="pt-4" id="skill"></div>
          <div
            className="row mt-5 background "
            style={{ backgroundPosition: "right" }}
          >
            <div className="col-12 text-center">
              <h2 className="text-left">Skills</h2>
              <h3 className="primary-color pb-4 br-none">Web Development</h3>
            </div>
            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate bottom left> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/html.jpg" layout="fill" alt="Node" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true}  opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">HTML</h3> {/* </Bounce> */}
            </div>
            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate bottom left> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/pug.png" layout="fill" alt="Node" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true}  opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">Pug</h3> {/* </Bounce> */}
            </div>
            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate top left> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/css.png" layout="fill" alt="CSS" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true} opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">CSS</h3>
              {/* </Bounce> */}
            </div>

            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate bottom left> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/sass.png" layout="fill" alt="Node" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true}  opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">Sass</h3> {/* </Bounce> */}
            </div>
            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate bottom left> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/bootstrap.jpg" layout="fill" alt="Node" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true}  opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">Bootstrap</h3> {/* </Bounce> */}
            </div>
            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate top right> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/Js.png" layout="fill" alt="Javascript" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true} opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">JavaScript</h3>
              {/* </Bounce> */}
            </div>
            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate bottom left> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/react.jpg" layout="fill" alt="React" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true} opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">Reactjs</h3>
              {/* </Bounce> */}
            </div>
            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate bottom right> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/gatsby.png" layout="fill" alt="Gatsby" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true} opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">Gatsby.js</h3>
              {/* </Bounce> */}
            </div>
            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate top right> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/next.png" layout="fill" alt="Gatsby" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true} opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">Next.js</h3> {/* </Bounce> */}
            </div>
            <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
              <Link href="#!">
                <a className="text-center">
                  {/* <Rotate bottom left> */}
                  <div className="skill-cont d-flex">
                    {/* <img */}
                    <img src="/img/node.png" layout="fill" alt="Node" />
                  </div>
                  {/* </Rotate> */}
                </a>
              </Link>
              {/* <Bounce enter={true} mirror={true}  opposite={true} bottom cascade> */}{" "}
              <h3 className="mt-3">Nodejs</h3> {/* </Bounce> */}
            </div>
          </div>

          <div className="col-12 mt-5 mb-4">
            <h3 className="primary-color  text-center pb-4 br-none">
              Search Engine Oprimization ( SEO)
            </h3>

            <div className="row">
              <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
                <Link href="#!">
                  <a className="text-center">
                    {/* <Rotate bottom left> */}
                    <div className="skill-cont d-flex">
                      {/* <img */}
                      <img src="/img/analytics.png" layout="fill" alt="Node" />
                    </div>
                    {/* </Rotate> */}
                  </a>
                </Link>
                {/* <Bounce enter={true} mirror={true}  opposite={true} bottom cascade> */}{" "}
                <h3 className="mt-3">ANALYSIS</h3> {/* </Bounce> */}
              </div>
              <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
                <Link href="#!">
                  <a className="text-center">
                    {/* <Rotate bottom left> */}
                    <div className="skill-cont d-flex">
                      {/* <img */}
                      <img src="/img/research.png" layout="fill" alt="Node" />
                    </div>
                    {/* </Rotate> */}
                  </a>
                </Link>
                {/* <Bounce enter={true} mirror={true}  opposite={true} bottom cascade> */}{" "}
                <h3 className="mt-3"> Research Minded</h3> {/* </Bounce> */}
              </div>
              <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
                <Link href="#!">
                  <a className="text-center">
                    {/* <Rotate bottom left> */}
                    <div className="skill-cont d-flex">
                      {/* <img */}
                      <img src="/img/writing.png" layout="fill" alt="Node" />
                    </div>
                    {/* </Rotate> */}
                  </a>
                </Link>
                {/* <Bounce enter={true} mirror={true}  opposite={true} bottom cascade> */}{" "}
                <h3 className="mt-3">Writing</h3> {/* </Bounce> */}
              </div>
              <div className="col-xl col-lg-3 col-md-4 col-6 text-center overflow-hidden position-relative gridcont">
                <Link href="#!">
                  <a className="text-center">
                    {/* <Rotate bottom left> */}
                    <div className="skill-cont d-flex">
                      {/* <img */}
                      <img src="/img/thinking.jpeg" layout="fill" alt="Node" />
                    </div>
                    {/* </Rotate> */}
                  </a>
                </Link>
                {/* <Bounce enter={true} mirror={true}  opposite={true} bottom cascade> */}{" "}
                <h3 className="mt-3"> Critical Thinking</h3> {/* </Bounce> */}
              </div>
            </div>
          </div>
          {/* <!--  --> */}
          <div className="pt-5"></div>
          <div className="col-12 mt-5 mb-4">
            <h3>Projects / Work</h3>
          </div>

          <div className="row background services3 mt-5">
            <div className="col-7 pr-5"></div>
            <div className="col-md bg-custom-white pt-md-0 pt-5">
              <h3 className="primary-color pb-4 br-none">Bitpowr Technology</h3>

              <p>
                Bitpowr is a blockchain payment solution that supports and
                powers every type of use case, and is also scalable. Blockchain
                provides a new and secure way to execute financial transactions.
              </p>
              <p>
                For ambitious companies around the world, BitPowr makes moving
                money as simple, borderless, and programmable as the rest of the
                internet.
              </p>
              <a
                href="https://www.bitpowr.com"
                target="
              _blank"
                className="btn fancy d-inline-block px-4 mt-5"
              >
                <div className="d-flex">
                  <div className="mr-3">Visit site</div>{" "}
                  <img
                    style={{ height: "23px" }}
                    className="img-fluid"
                    src="/img/right-arrow.svg"
                  />
                </div>
              </a>
            </div>
          </div>

          <div
            className="row mt-5 background services2"
            style={{ backgroundPosition: "right" }}
          >
            <div className="col-md mt-5">
              <h3 className="primary-color pb-4 br-none">L Y T Y</h3>

              <p>
                Lyty.dev is a platform to learn anything online for free. The
                learning resources inludes but are not limited to: HTML
                tutorial, CSS tutorial and JavaScript tutorials. LYTY stands for
                Learn Yourself Teach Yourself.
              </p>
              <p>
                Learning oughts to be free and bidrectional, so Lyty aims to do
                this by offering free education for all, by providing a platform
                that lets us learn and teach by ourselves.
              </p>
              <a
                href="https://lyty.dev"
                className="btn fancy d-inline-block px-4 mt-5"
              >
                <div className="d-flex">
                  <div className="mr-3">Visit site</div>{" "}
                  <img
                    style={{ height: "23px" }}
                    className="img-fluid"
                    src="/img/right-arrow.svg"
                  />
                </div>
              </a>
            </div>
            <div className="col-7"></div>
          </div>

          <div className="row mt-5">
            <div className="col-xl-3 col-lg-4 col-md-6  px-3  position-relative overflow-hidden mt-4">
              <div className="card w-100">
                <div className="col-12  card_img charis"></div>

                <div className="card-body">
                  <h5 className="card-title">Charis Financial investment</h5>
                  <p className="card-text text-overflow">
                    Charis Investment and Construction Consult is solely into
                    Foreign Exchange Trading, Construction, Real Estate ,
                    Logistics , Education and Agriculture ...
                  </p>
                  <button
                    data-title="Charis Financial investment"
                    data-description="Charis Investment and Construction Consult is solely into
                    Foreign Exchange Trading, Construction, Real Estate ,
                    Logistics , Education and Agriculture ..."
                    onClick={handleViewMore}
                    data-src="https://www.charisinvestment.com"
                    className="btn btn-primary"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6  px-3  position-relative overflow-hidden mt-4">
              <div className="card w-100">
                <div className="col-12  card_img charis"></div>

                <div className="card-body">
                  <h5 className="card-title">Charis Financial investment</h5>
                  <p className="card-text text-overflow">
                    Charis Investment and Construction Consult is solely into
                    Foreign Exchange Trading, Construction, Real Estate ,
                    Logistics , Education and Agriculture ...
                  </p>
                  <button
                    src="Wassup"
                    onClick={handleViewMore}
                    className="btn btn-primary"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6  px-3  position-relative overflow-hidden mt-4">
              <div className="card w-100">
                <div className="col-12  card_img portfolio"></div>

                <div className="card-body">
                  <h5 className="card-title">Portfolio Website</h5>
                  <p className="card-text text-overflow">
                    This is an opensource portfolio website for anyone who will
                    to showcase his skill and experience through a personal
                    poerfolio website.
                  </p>
                  <button
                    data-title="Portfolio Website"
                    data-description="This is an opensource portfolio website for anyone who will
                    to showcase his skill and experience through a personal
                    poerfolio website."
                    onClick={handleViewMore}
                    data-src="https://www.erisan.herokuapp.com"
                    className="btn btn-primary"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6  px-3  position-relative overflow-hidden mt-4">
              <div className="card w-100">
                <div className="col-12  card_img charis"></div>

                <div className="card-body">
                  <h5 className="card-title">Charis Financial investment</h5>
                  <p className="card-text text-overflow">
                    Charis Investment and Construction Consult is solely into
                    Foreign Exchange Trading, Construction, Real Estate ,
                    Logistics , Education and Agriculture ...
                  </p>
                  <button
                    src="Wassup"
                    onClick={handleViewMore}
                    className="btn btn-primary"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5"></div>
      {/* <!-- about --> */}
      <div className="col-xl-9 col-lg-10 mx-auto about-us text-center py-5">
        <h2>Hobbie</h2>
      </div>
      <div className="about_us">
        <div className="light-div pt-5">
          <div className="col-md-9 mx-auto mt-5 text-center">
            <h3 className="pb-4" style={{ color: "#fff" }}>
              What i love doing
            </h3>

            <p>
              While i spend most of my time on computer , I love to reading tech
              related articles on the web.
            </p>
            <p>
              During the weekend, i love to go to amusement part or sport
              station to relax.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-md-4 pt-5" id="contact-me"></div>
      {/* <!-- Contact --> */}
      <div className="col-lg-11  mx-auto about-us text-center contact-us mt-5">
        <h2>Contact me</h2>
      </div>
      <div className="col-lg-11 col-md-11 mx-auto">
        <div
          className="row  background contact"
          style={{ backgroundPosition: "left" }}
        >
          <div className="col-md-7 mt-sm-5 mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1861678531354!2d3.2737085497191383!3d6.623782723805064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9158f2225c85%3A0x783690be25f73ff5!2sMethodist%20Church%20Nigeria%20(Aboru)%20Lagos%20Diocese!5e0!3m2!1sen!2sng!4v1589438909807!5m2!1sen!2sng"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              ariaHidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="col mt-5">
            <h3 className="primary-color pb-4">Yes you need us</h3>
            <div className="row pb-5">
              <form onSubmit={handleSubmit} method="post" className="col">
                <input
                  onChange={handleChange}
                  type="hidden"
                  data-form-email="true"
                  name=""
                  required
                />
                <div className="form-group">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control form-valid"
                    name="name"
                    value={data.name}
                    required=""
                    placeholder="Fullname* e.g Erisan Akorede"
                    data-form-field="Name"
                  />
                  <span className="danger-color"></span>
                </div>
                <div className="form-group">
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control form-valid"
                    name="email"
                    value={data.email}
                    required
                    placeholder="Email*"
                    data-form-field="Email"
                  />
                  <span className="danger-color"></span>
                </div>
                <div className="form-group">
                  <input
                    onChange={handleChange}
                    type="tel"
                    value={data.phone}
                    className="form-control form-valid"
                    name="phone"
                    placeholder="Phone"
                    data-form-field="Phone"
                  />
                  <span className="danger-color"></span>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-valid"
                    onChange={handleChange}
                    name="message"
                    placeholder="Message"
                    rows="7"
                    required
                    value={data.value}
                    minLength="10"
                    data-form-field="Message"
                  ></textarea>
                  <span className="danger-color"></span>
                </div>
                <div className="text-center">
                  <div class="text-success">{success && success}</div>
                  <div class="text-danger">{error && error}</div>
                  <button
                    disabled={loading}
                    type="submit"
                    href=""
                    className="btn fancy d-inline-block px-5 mt-5"
                  >
                    {loading ? "Sending ..." : "Contact me"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-5">
        <div>Erisan Akorede</div>
        <div>&copy; copyright {new Date().getFullYear()} .</div>
      </footer>

      {/*  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <i
                  className="fas fa-exclamation-triangle me-3"
                  style={{ color: "#F0424C" }}
                ></i>{" "}
                Are you sure ?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">This action can not be undone !!!</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
