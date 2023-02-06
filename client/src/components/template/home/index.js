import './index.css';
import { Parallax } from 'react-parallax';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import back1 from './../../assets/image/home_back1.jpg';
import back2 from './../../assets/image/home_back2.jpg';
import back5 from './../../assets/image/home_back5.jpg';
import back8 from './../../assets/image/home_back8.jpg';
import Axios from 'axios';
import Navbar from './../navbar/index';
import HomeSection2Card from '../../atom/homeSection2Card';
import HomeSection2Data from '../../assets/store/homeSection2Data';
import HomeSection3Card from '../../atom/homeSection3Card';
import HomeSection3Data from '../../assets/store/homeSection3Data';
import HomeSection4Data from '../../assets/store/homeSection4Data';
import HomeSection5Card from '../../atom/homeSection5Card';
import HomeSection5Data from '../../assets/store/homeSection5Data';
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import 'react-multi-carousel/lib/styles.css';
import HomeSectionFeedback from './../homeSectionFeedback';
import * as React from 'react';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProfileData from '../../assets/store/profileData';
import AllData from '../../assets/store/allData';



import ErrorCard from '../../atom/errorCard';





const Home = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")



    function signUpClicked() {
        let nameCheck = /^[A-Z a-z]+$/;
        if (nameCheck.test(name) === false) {
            props.showError("fill name correctly!!","error")
            return;
        }
        var emailCheck = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (emailCheck.test(email) === false) {
            props.showError("Email is incorrect","error");
            return;
        }
        else if (pass === "") {
            props.showError("fill pass correctly!!","error")
            return;
        }
        Axios.post('http://localhost:5000/api/post/sign-up',
            {
                name: name,
                email: email,
                pass: pass
            }).then((res) => {
                if (res.data.message === "createdSuccess") {
                    props.showError("Account Created Successfully!!!","success")
                    props.LoggedInStatusCheck(true, res.data.data)
                    navigate("/profile")
                }
                else if (res.data.message === "alreadyExist") {
                    props.showError("Account Already Exists Please Login!!!","info")
                    navigate("/auth")
                }
                document.getElementById("nameSignup").value = "";
                document.getElementById("emailSignup").value = "";
                document.getElementById("passSignup").value = "";

                // document.getElementById("checkTest").;
            });
    }



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 750 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 749, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    












    return (
        <>
            <ErrorCard 
            errorDisplay={props.errorDisplay}
            errorIcon={props.errorIcon}
            errorText={props.errorText}
            errorColor={props.errorColor}

            />
            <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
            <Parallax blur={1} bgImage={back1} bgImageAlt="the cat" strength={200}>
                <div className='home__outer__section1'>
                    <div className='home__outer__section1__inner'>
                        <div className='home__inner__section1__left'>
                            Finding your{'\u00A0'}
                            <span style={{ color: "rgb(244, 72, 72)" }}>
                                perfect match
                            </span>
                            {'\u00A0'}
                            just became easier
                        </div>
                        <div className='home__inner__section1__right'>
                            {
                                props.LoggedInStatus ? (
                                    <>
                                    <div className='home__inner__section1__right__inner'>
                                        <div className='home__inner__section1__right__head'>
                                            Search
                                        </div>
                                        <div className='home__inner__section1__right__each'>
                                            <div className='home__inner__section1__right__each__left'>
                                                Age:{'\u00A0'}{props.age[0]}-{props.age[1]}
                                            </div>
                                            <div className='home__inner__section1__right__each__right'>
                                                <Slider
                                                    getAriaLabel={() => 'Age'}
                                                    value={props.age}
                                                    onChange={props.handleChangeAge}
                                                    valueLabelDisplay="auto"
                                                    getAriaValueText={props.valuetext}
                                                    min={19}
                                                    max={60}
                                                />
                                            </div>
                                        </div>
                                        <div className='home__inner__section1__right__each'>
                                            <div className='home__inner__section1__right__each__left'>
                                                Location:
                                            </div>
                                            <div className='home__inner__section1__right__each__right'>
                                                <FormControl fullWidth>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={props.location}
                                                    label=""
                                                    onChange={props.handleChangeLocation}
                                                    >
                                                    {
                                                        AllData.all_state.map((ele)=>{
                                                            return(
                                                                <MenuItem key={ele.id} value={ele.label}>{ele.label}</MenuItem>
                                                            )
                                                        })
                                                    }
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className='home__inner__section1__right__each'>
                                            <div className='home__inner__section1__right__each__left'>
                                                Religion:
                                            </div>
                                            <div className='home__inner__section1__right__each__right'>
                                                <FormControl fullWidth>
                                                    <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={props.religion}
                                                    label=""
                                                    onChange={props.handleChangeReligion}>
                                                    {
                                                        AllData.all_religion.map((ele)=>{
                                                            return(
                                                                <MenuItem key={ele.id} value={ele.label}>{ele.label}</MenuItem>
                                                            )
                                                        })
                                                    }
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        <button type="button" onClick={() => { navigate("/search") }}>Search </button>
                                    </div>
                                    
                                    </>
                                ):(
                                
                                    <div className="signup" style={{ backgroundColor: "rgba(0, 0, 0, 0.240)", width: "350px", paddingBottom: "20px", borderRadius: "20px" }}>
                                        <form>
                                            <label id="checkTest" for="chk" aria-hidden="true" style={{ color: "black" }}>Register Here</label>
                                            <input onChange={(e) => { setName(e.target.value) }} id="nameSignup" type="text" name="txt" placeholder="Name" required="required" />
                                            <input onChange={(e) => { setEmail(e.target.value) }} id="emailSignup" type="email" name="email" placeholder="Email" required="required" />
                                            <input onChange={(e) => { setPass(e.target.value) }} id="passSignup" type="password" name="pswd" placeholder="Password" required="required" />
                                            <button type="button" onClick={() => { signUpClicked() }}>SIGN UP</button>
                                        </form>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    
                    
                </div>
            </Parallax>
            <div className='home__outer__section2'>
                <div className='home__outer__section2__left'>
                    <div className='home__outer__section2__left__inner'>
                        <div className='home__outer__section2__left__inner__smallhead' data-aos="fade-right">
                            MORE THAN 20 YEARS OF
                        </div>
                        <div className='home__outer__section2__left__inner__head' data-aos="fade-right">
                            Bringing People Together
                        </div>
                        {
                            HomeSection2Data.map((ele) => {
                                const { id, text, heading, img, back_color } = ele;
                                return (
                                    <HomeSection2Card id={id} text={text} heading={heading} img={img} back_color={back_color} />
                                )
                            })
                        }

                    </div>
                </div>
                <div className='home__outer__section2__right'>
                    <div className='home__outer__section2__right__inner'>
                        <Parallax blur={1} bgImage={back2} style={{ borderRadius: "1rem" }} bgImageAlt="the cat" strength={200}>
                            <div className='home__outer__section2__right__inner__img'></div>
                        </Parallax>
                    </div>
                </div>
            </div>
            <Parallax blur={1} bgImage={back8} bgImageAlt="the cat" strength={200}>
                <div className='home__outer__section3'>
                    <div className='home__outer__section3__inner'>
                        <div className='home__outer__section3__smallhead' data-aos="fade-right" >
                            THREE SIMPLE STEPS TO
                        </div>
                        <div className='home__outer__section2__head' data-aos="fade-right">
                            Find the One for You
                        </div>
                    </div>

                    <div className='home__outer__section3__content'>
                        {
                            HomeSection3Data.map((ele) => {
                                const { id, img, heading } = ele;
                                return (
                                    <HomeSection3Card id={id} img={img} heading={heading} num={id + 1} />
                                )
                            })
                        }
                    </div>
                </div>
            </Parallax>
            <div className='home__outer__section2'>
                <div className='home__outer__section2__right'>
                    <div className='home__outer__section2__right__inner'>
                        <Parallax blur={1} bgImage={back5} style={{ borderRadius: "1rem" }} bgImageAlt="the cat" strength={200}>
                            <div className='home__outer__section2__right__inner__img'></div>
                        </Parallax>
                    </div>
                </div>
                <div className='home__outer__section4__left'>
                    <div className='home__outer__section2__left__inner'>
                        <div className='home__outer__section2__left__inner__smallhead'>
                            BEST FOR YOU
                        </div>
                        <div className='home__outer__section2__left__inner__head'>
                            Membership Plans
                        </div>
                        <div className='home__outer__section2__left__inner__content'>
                            <div className='home__outer__section2__left__inner__content__each'>
                                <div className='home__outer__section2__left__inner__content__each__head'>
                                    Free
                                </div>
                                {
                                    HomeSection4Data.free.map((ele) => {
                                        const { id, text, icon, colorIcon, colorText } = ele;
                                        return (
                                            <div key={id} className='home__outer__section2__left__inner__content__each__each' style={{ color: colorText }}>
                                                <FontAwesomeIcon icon={icon} size="md" color={colorIcon} className='nav__icon' />{text}
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className='home__outer__section2__left__inner__content__each'>
                                <div className='home__outer__section2__left__inner__content__each__head'>
                                    Paid
                                </div>
                                {
                                    HomeSection4Data.paid.map((ele) => {
                                        const { id, text, icon, colorIcon, colorText } = ele;
                                        return (
                                            <div key={id} className='home__outer__section2__left__inner__content__each__each' style={{ color: colorText }}>
                                                <FontAwesomeIcon icon={icon} size="md" color={colorIcon} className='nav__icon' />{text}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='home__outer__section2__left__inner__button'>
                            <div className='home__outer__section2__left__inner__button__each' >
                                Browse Plans
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <HomeSectionFeedback flag={0} />
            {/* <Parallax blur={1} bgImage={back6} bgImageAlt="the cat" strength={200}> */}
                <div className='home__outer__section5'>
                    <div className='home__outer__section3__inner'>
                        <div className='home__outer__section3__smallhead' data-aos="fade-right" style={{ color: "white" }} >
                            LAKHS OF HAPPY COUPLES
                        </div>
                        <div className='home__outer__section2__head' data-aos="fade-right">
                            Matched by Wedding+
                        </div>
                    </div>

                    <div className='home__outer__section5__content'>
                        <Carousel
                            responsive={responsive}
                            draggable
                            pauseOnHover
                            infinite
                            showDots={true}
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>
                            {
                                HomeSection5Data.map((ele) => {
                                    const { id, img, heading } = ele;
                                    return (
                                        <HomeSection5Card id={id} img={img} heading={heading} num={id + 1} />
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            {/* </Parallax> */}


            <HomeSectionFeedback flag={1} />
            <div className='home__footer'>
                <FontAwesomeIcon icon={faCopyright} size="md" color={"black"} className='nav__icon' style={{paddingRight:"0px"}}/>Wedding+ Rights Reserved 2022 (rakshit_sh)
            </div>
        </>
    );
}

export default Home;