import './index.css';
import Navbar from '../navbar';
import LoadingScreen from './../../atom/loadingScreen';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import Axios, { all } from 'axios';
import ProfileData from '../../assets/store/profileData';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark,faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faPaypal,faGooglePay,faApplePay,faAmazonPay, faWhatsapp,faFacebook,faSnapchat,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import back from './../../assets/image/home_back10.jpg'
import { HashLink } from 'react-router-hash-link';
import satyam from './../../assets/image/satyam.jpeg';
import ProfileNortCard1 from '../../atom/profileNortCard1';
import TextField from '@mui/material/TextField';
import undraw_flower from './../../assets/image/undraw_flower.svg';
import undraw_string from './../../assets/image/undraw_string.svg';
import empty from './../../assets/image/empty.svg'
import empty1 from './../../assets/image/Waiting-pana.svg'
import empty2 from './../../assets/image/Waiting-bro.svg'


import ErrorCard from '../../atom/errorCard';


const Profile = (props) => {
    const navigate = useNavigate();
    const [addressPlace, setAddressPlace] = useState("#123, sector-5, CHD");
    const [contactPlace, setContactPlace] = useState("8765******");
    const [agePlace, setAgePlace] = useState("25");
    const [genderPlace, setGenderPlace] = useState("Male");
    const [religionPlace, setReligionPlace] = useState("Hindu");
    const [statePlace, setStatePlace] = useState("Haryana");
    const [heightPlace, setHeightPlace] = useState("166cm");
    const [eduPlace, setEduPlace] = useState("Master in CSE");
    const [occuPlace, setOccuPlace] = useState("SDE, Microsoft");
    const [sallaryPlace, setSallaryPlace] = useState("2500000");
    const [marstatPlace, setMarstatPlace] = useState("unmarried");
    const [hobbyPlace, setHobbyPlace] = useState("love to play games");
    const [aboutPlace, setAboutPlace] = useState("Hi, i am Ankita from ...")
    const [motherTonguePlace, setMotherTonguePlace] = useState("Hindi,English");
    const [secLangPlace, setSecLangPlace] = useState("Hindi,English")

    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Male");
    const [religion, setReligion] = useState("Hindu");
    const [state, setState] = useState("Andhra Pradesh");
    const [height, setHeight] = useState("");
    const [edu, setEdu] = useState("");
    const [occu, setOccu] = useState("");
    const [sallary, setSallary] = useState("");
    const [marstat, setMarstat] = useState("Unmarried");
    const [image, setImage] = useState("");
    const [hobby, setHobby] = useState("");
    const [pack, setPack] = useState("");
    const [about, setAbout] = useState("")
    const [motherTongue, setMotherTongue] = useState("Hindi");
    const [secLang, setSecLang] = useState("English");

    const [paymentClicked,setPaymentClicked]=useState({
        view:"none",
        val:0
    })

    const [counter,setCounter]=useState(0)
    const [userData, setUserdata] = useState({})
    const [userLoading, setUserLoading] = useState(true)
    const [afterSubmit, setAfterSubmit] = useState({
        after: "none",
        before: 'flex'
    });
    const [accProfileLoading,setAccProfileLoading]=useState(false)
    const [subCountLoading,setSubCountLoading]=useState(false)

    const [profileScroll,setProfileScroll]=useState({
        height:"fit-content",
        scroll:"scroll"
    });
    const [fullProfileDisplay,setFullProfileDisplay]=useState("none")
    const [dataFullProfile,setDataFullProfile]=useState({})

    function fullprofiledisplayChange(x,ele)
    {
        if(x)
        {
            setFullProfileDisplay("flex");
            setProfileScroll({height:"100vh",scroll:"hidden"})
            setDataFullProfile(ele)
        }
        else
        {
            setFullProfileDisplay("none");
            setProfileScroll({height:"fit-content",scroll:"scroll"})
            setDataFullProfile(userData)
        }
    }


    function GetProfile() {
        setUserLoading(true);
        Axios.post('http://localhost:5000/api/profile/get-data',
            {
                email: props.LoggedIn,
            }).then((res) => {
                setUserdata(res.data.data)
                setDataFullProfile(res.data.data)
                if (res.data.data.user_updated === true) {
                    setAfterSubmit({ after: "flex", before: "none" });
                }
                setUserLoading(false)
            });
    }


    function AcceptedProfile() {
        setAccProfileLoading(true);
        Axios.post('http://localhost:5000/api/profile/get-data',
            {
                email: props.LoggedIn,
            }).then((res) => {
                setUserdata(res.data.data)
                if (res.data.data.user_updated === true) {
                    setAfterSubmit({ after: "flex", before: "none" });
                }
                setAccProfileLoading(false)
            });
    }


    useEffect(() => {
        if (props.LoggedInStatus === true) {
            GetProfile();
        }
        else {
            navigate("/auth")
        }
    }, []);

    function zodiac_sign(day, month) {
        let astro_sign = "";

        // checks month and date within the
        // valid range of a specified zodiac
        if (month == "december") {

            if (day < 22)
                astro_sign = "Sagittarius";
            else
                astro_sign = "Capricorn";
        }

        else if (month == "january") {
            if (day < 20)
                astro_sign = "Capricorn";
            else
                astro_sign = "Aquarius";
        }

        else if (month == "february") {
            if (day < 19)
                astro_sign = "Aquarius";
            else
                astro_sign = "Pisces";
        }

        else if (month == "march") {
            if (day < 21)
                astro_sign = "Pisces";
            else
                astro_sign = "Aries";
        }
        else if (month == "april") {
            if (day < 20)
                astro_sign = "Aries";
            else
                astro_sign = "Taurus";
        }

        else if (month == "may") {
            if (day < 21)
                astro_sign = "Taurus";
            else
                astro_sign = "Gemini";
        }

        else if (month == "june") {
            if (day < 21)
                astro_sign = "Gemini";
            else
                astro_sign = "Cancer";
        }

        else if (month == "july") {
            if (day < 23)
                astro_sign = "Cancer";
            else
                astro_sign = "Leo";
        }

        else if (month == "august") {
            if (day < 23)
                astro_sign = "Leo";
            else
                astro_sign = "Virgo";
        }

        else if (month == "september") {
            if (day < 23)
                astro_sign = "Virgo";
            else
                astro_sign = "Libra";
        }

        else if (month == "october") {
            if (day < 23)
                astro_sign = "Libra";
            else
                astro_sign = "Scorpio";
        }

        else if (month == "november") {
            if (day < 22)
                astro_sign = "Scorpio";
            else
                astro_sign = "Sagittarius";
        }

        return (astro_sign);
    }

    function saveInfoClicked() {
        var dob = age.split("-")
        const d = new Date();
        let yearNow = d.getFullYear();
        var check_age = parseInt(yearNow) - parseInt(dob[0])
        if ((check_age <= 19 || check_age >= 100 || age === "")) {
            props.showError("Fill Age Correctly!!","error")
            return;
        }

        if (contact.length < 10) {
            props.showError("Fill Contact Correctly!! (10 digits)","error")
            return;
        }

        if (height === "") {
            props.showError("Fill height Correctly!!","error")
            return;
        }
        if (edu === "") {
            props.showError("Fill Education Correctly!!","error")
            return;
        }
        if (occu === "") {
            props.showError("Fill occupation Correctly!!","error")
            return;
        }
        if (sallary === "") {
            props.showError("Fill Sallary Correctly!!","error")
            return;
        }
        if (image === "") {
            props.showError("Fill Image Correctly!!","error")
            return;
        }
        var check = /^[#.0-9a-zA-Z\s,-]+$/;
        if (check.test(address) === false) {
            props.showError("Fill Address Correctly!!","error")
            return;
        }
        if (hobby === "") {
            props.showError("Fill Hobby Correctly!!","error")
            return;
        }
        if (about === "") {
            props.showError("Fill About Correctly!!","error")
            return;
        }
        var check = image.replace(/^.*\\/, "")
        var monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        var zodiac = zodiac_sign(parseInt(dob[2]), monthNames[parseInt(dob[1]) - 1]);
        var realDob = dob[2] + " " + monthNames[parseInt(dob[1]) - 1] + " " + dob[0]
        Axios.post('http://localhost:5000/api/profile/post-data',
            {
                updated: true,
                age: check_age,
                address: address,
                contact: contact,
                religion: religion,
                state: state,
                height: height,
                edu: edu,
                occu: occu,
                sallary: sallary,
                marstat: marstat,
                image: check,
                hobby: hobby,
                about: about,
                email: props.LoggedIn,
                gender: gender,
                zodiac: zodiac,
                dob: realDob,
                motherTongue: motherTongue,
                secLang: secLang

            }).then((res) => {
                props.showError("Profile Updated Successfully!!","success")
                GetProfile()
            });
    }




    function paidClicked(price)
    {
        Axios.post('http://localhost:5000/api/profile/member-payment',
        {
            price:price,
            email: props.LoggedIn,
        }).then((res) => {
            props.showError("Payment Success!!","success")
        });
    }

    function LogoutClicked() {
        props.LoggedInStatusCheck(false, "");
        props.showError("Logged Out","info")
        navigate('/home')
    }
    return (
        <>
        <ErrorCard 
            errorDisplay={props.errorDisplay}
            errorIcon={props.errorIcon}
            errorText={props.errorText}
            errorColor={props.errorColor}

        />
            <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
            {
                // props.LoggedInStatus ? (
                userLoading ? (
                        <></>
                    ) : (
                        <>
                        <div className='payment__outer' style={{display:fullProfileDisplay}}>
                            <div className='payment__inner2'>
                                <div className='payment__inner__eachProfile'>
                                    <div className='payment__inner__eachProfile__top'>
                                    {/* <img src={satyam} style={{width:"200px",height:"200px",borderRadius:"50%",border:"10px solid rgba(212, 28, 28, 0.684)",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",marginLeft:"2rem"}}/> */}
                                        <img src={require(`./../../assets/image/${userData.user_image}`)} style={{width:"200px",height:"200px",borderRadius:"50%",border:"10px solid rgba(212, 28, 28, 0.684)",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",marginLeft:"2rem"}}/>
                                        <div className='payment__inner__eachProfile__top__close'>
                                            <div className='payment__inner__eachProfile__top__close__close' onClick={()=>{fullprofiledisplayChange(false,userData)}}>
                                                <FontAwesomeIcon icon={faXmark} size="2x" style={{cursor:"pointer"}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment__inner__eachProfile__bottom'>
                                        <div className='payment__inner__eachProfile__bottom__each'>
                                            <fieldset className='payment__inner__eachProfile__bottom__each__left'>
                                                <legend className='legend__font'>Basic Info:</legend>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Name:</span> {dataFullProfile.user_name}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Date Of Birth:</span> {dataFullProfile.user_dob}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Age:</span> {dataFullProfile.user_age}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Gender:</span> {dataFullProfile.user_gender}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Height:</span> {dataFullProfile.user_height}
                                                </div>
                                            </fieldset>
                                            <fieldset className='payment__inner__eachProfile__bottom__each__left'>
                                                <legend className='legend__font'>Location Info:</legend>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Country:</span> India
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>State:</span> {dataFullProfile.user_state}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Address:</span> {dataFullProfile.user_address}
                                                </div>
                                            </fieldset>
                                            <fieldset className='payment__inner__eachProfile__bottom__each__left'>
                                                <legend className='legend__font'>Hobby Info:</legend>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Hobbies:</span> {dataFullProfile.user_hobby}
                                                </div>
                                            </fieldset>
                                            <fieldset className='payment__inner__eachProfile__bottom__each__left'>
                                                <legend className='legend__font'>Contact Info:</legend>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Contact:</span> 91+ {dataFullProfile.user_contact}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Email:</span> {dataFullProfile.user_email}
                                                </div>

                                            </fieldset>
                                        </div>
                                        <div className='payment__inner__eachProfile__bottom__each'>
                                            <fieldset className='payment__inner__eachProfile__bottom__each__left'>
                                                <legend className='legend__font'>About Me:</legend>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                    {dataFullProfile.user_about}
                                                </div>
                                            </fieldset>
                                            <fieldset className='payment__inner__eachProfile__bottom__each__left'>
                                                <legend className='legend__font'>Education Info:</legend>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Graduation:</span> {dataFullProfile.user_edu}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Occupation:</span> {dataFullProfile.user_occu}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Salary:</span> {dataFullProfile.user_sallary}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Marriage Status:</span> {dataFullProfile.user_marstat}
                                                </div>
                                            </fieldset>
                                            <fieldset className='payment__inner__eachProfile__bottom__each__left'>
                                                <legend className='legend__font'>Religion Info:</legend>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Religion:</span> {dataFullProfile.user_religion}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Zodiac Sign:</span> {dataFullProfile.user_zodiac}
                                                </div>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Mother Tongue:</span> {dataFullProfile.user_motherTongue}
                                                </div>
                                            </fieldset>
                                            <fieldset className='payment__inner__eachProfile__bottom__each__left'>
                                                <legend className='legend__font'>Marital Status:</legend>
                                                <div className='payment__inner__eachProfile__bottom__each__left__text'>
                                                <span className='payment__inner__eachProfile__bottom__each__left__texthead'>Status:</span> {dataFullProfile.user_marstat}
                                                </div>
                                            </fieldset>
                                            <div className='payment__inner__eachProfile__bottom__each__left' style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",width:"50%"}}>
                                                <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{cursor:"pointer"}}/>
                                                <FontAwesomeIcon icon={faFacebook} size="2x" style={{cursor:"pointer"}}/>
                                                <FontAwesomeIcon icon={faSnapchat} size="2x" style={{cursor:"pointer"}}/>
                                                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{cursor:"pointer"}}/>
                                                <FontAwesomeIcon icon={faInstagram} size="2x" style={{cursor:"pointer"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='payment__outer' style={{display:paymentClicked.view}}>
                            <div className='payment__inner'>
                                <div className='payment__inner__inner'>
                                    <div className='payment__inner__inner__heading'>
                                        <div className='payment__inner__inner__heading__head'>
                                            PAYMENT DETAILS
                                        </div>
                                        <div className='payment__inner__inner__heading__close' onClick={()=>{setPaymentClicked({view:"none",val:0})}}>
                                            <FontAwesomeIcon icon={faXmark} size="xl"/>
                                        </div>
                                    </div>
                                    <div className='payment__inner__inner2'>
                                        <FontAwesomeIcon icon={faApplePay} size="3x" color="black" style={{cursor:"pointer"}}/>
                                        <FontAwesomeIcon icon={faAmazonPay} size="3x" color="black"  style={{cursor:"pointer"}}/>
                                        <FontAwesomeIcon icon={faPaypal} size="3x" color="black"  style={{cursor:"pointer"}}/>
                                        <FontAwesomeIcon icon={faGooglePay} size="3x" color="black"  style={{cursor:"pointer"}}/>
                                    </div>
                                    <div className='payment__inner__part'>
                                        <div className='payment__inner__part__line'>

                                        </div>
                                        or
                                        <div className='payment__inner__part__line'>

                                        </div>
                                    </div>
                                    <div className='payment__inner__inner__inner'>
                                        <div className='payment__inner__inner__each'>
                                            <div className='payment__inner__inner__each__head'>
                                                Cardholder Name
                                            </div>
                                            <div className='payment__inner__inner__each__field'>
                                                <input type="text" className='payment__inner__inner__each__field__each'/>
                                            </div>
                                            
                                        </div>
                                        <div className='payment__inner__inner__each'>
                                            <div className='payment__inner__inner__each__head'>
                                                Card Number
                                            </div>
                                            <div className='payment__inner__inner__each__field'>
                                                <input type="text" className='payment__inner__inner__each__field__each'/>
                                            </div>
                                            
                                        </div>
                                        <div className='payment__inner__inner__each2'>
                                            <div className='payment__inner__inner__each2__left'>
                                                <div className='payment__inner__inner__each__head'>
                                                    EXP/DATE
                                                </div>
                                                <div className='payment__inner__inner__each__field'>
                                                    <input type="text" className='payment__inner__inner__each__field__each'/>
                                                </div>
                                            </div>
                                            <div className='payment__inner__inner__each2__left'>
                                                <div className='payment__inner__inner__each__head'>
                                                    CVV
                                                </div>
                                                <div className='payment__inner__inner__each__field'>
                                                    <input type="text" className='payment__inner__inner__each__field__each'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='payment__inner__inner__button'>
                                            <div className='payment__inner__inner__button__each' onClick={()=>{
                                                paidClicked(paymentClicked.val);
                                                if(paymentClicked.val==19)
                                                {
                                                    setCounter(counter+5);
                                                }
                                                else if(paymentClicked.val==29)
                                                {
                                                    setCounter(counter+10);
                                                }
                                                else
                                                {
                                                    setCounter(counter+20);
                                                }
                                                setPaymentClicked({view:"none",val:0})}}>
                                                <FontAwesomeIcon icon={faCreditCard} size="md" color="white" /> ${paymentClicked.val}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        </>
                    )
            }
            <Parallax blur={5} bgImage={back} bgImageAlt="the cat" strength={500}>
                <div className='profile__outer' style={{height:profileScroll.height,overflowY:profileScroll.scroll}}>
                    {
                        // props.LoggedInStatus ? (
                        userLoading ? (
                            <div className='loading__outer' style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div className='loading__outer__inner'>
                                    <LoadingScreen />
                                </div>

                            </div>
                        ) : (
                            <div className='profile__inner'>
                                <div className='profile__inner__image'>
                                    {
                                        userData.user_updated ? (
                                            <>
                                                <img src={require(`./../../assets/image/${userData.user_image}`)} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                                            </>
                                        ) : (
                                            <>
                                                <img src={require('./../../assets/image/face1.jpg')} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                                            </>
                                        )
                                    }
                                </div>
                                {/* <div className='profile__inner__image' >
                                
                            </div> */}

                                <div className='profile__inner__nav'>
                                    <HashLink to='/profile#notification' smooth className="profile__inner__nav__each" >
                                        <FontAwesomeIcon icon={faBell} size="xl" color="black" className='nav__icon' />
                                    </HashLink>
                                    <div className='profile__inner__nav__each'>
                                        <FontAwesomeIcon icon={faList} size="xl" color="black" className='nav__icon' />
                                    </div>
                                    <div className='profile__inner__nav__each' onClick={() => { LogoutClicked() }}>
                                        <FontAwesomeIcon icon={faRightFromBracket} size="xl" color="black" className='nav__icon' />
                                    </div>

                                </div>
                                <div className='profile__inner__nav__line'></div>
                                <div className='profile__inner__each'>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Full Name
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: "flex" }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_name}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: "none" }}>
                                            <input type="text" className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Email
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: "flex" }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_email}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: "none" }}>
                                            <input type="text" className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                </div>


                                <div className='profile__inner__each'>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Date Of Birth
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_age}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <input type="date" onChange={(e) => { setAge(e.target.value) }} placeholder={agePlace} className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Gender
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_gender}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content__select' style={{ display: afterSubmit.before }}>
                                            <select onChange={(e) => { setGender(e.target.value) }} className="profile__inner__each__left__content__select__gender">
                                                {
                                                    ProfileData.profile_gender.map((ele) => {
                                                        const { id, label } = ele;
                                                        return (
                                                            <option className='profile__inner__each__left__content__select__gender' key={id} value={label}>{label}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='profile__inner__each'>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Contact
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_contact}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <input type="number" onChange={(e) => { setContact(e.target.value) }} maxLength={10} placeholder={contactPlace} className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            religion
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_religion}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content__select' style={{ display: afterSubmit.before }}>
                                            <select onChange={(e) => { setReligion(e.target.value) }} className="profile__inner__each__left__content__select__gender">
                                                {
                                                    ProfileData.profile_religion.map((ele) => {
                                                        const { id, label } = ele;
                                                        return (
                                                            <option className='profile__inner__each__left__content__select__gender' key={id} value={label}>{label}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>



                                <div className='profile__inner__each'>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            State
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_state}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content__select' style={{ display: afterSubmit.before }}>
                                            <select onChange={(e) => { setState(e.target.value) }} className="profile__inner__each__left__content__select__gender">
                                                {
                                                    ProfileData.profile_state.map((ele) => {
                                                        const { id, label } = ele;
                                                        return (
                                                            <option className='profile__inner__each__left__content__select__gender' key={id} value={label}>{label}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Height
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_height}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <input type="number" onChange={(e) => { setHeight(e.target.value) }} placeholder={heightPlace} className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                </div>



                                <div className='profile__inner__each'>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Education
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_edu}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <input type="text" onChange={(e) => { setEdu(e.target.value) }} placeholder={eduPlace} className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Occupation
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_occu}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <input type="text" onChange={(e) => { setOccu(e.target.value) }} placeholder={occuPlace} className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                </div>



                                <div className='profile__inner__each'>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Sallary
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_sallary}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <input type="number" onChange={(e) => { setSallary(e.target.value) }} placeholder={sallaryPlace} className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Marriage Status
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_marstat}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content__select' style={{ display: afterSubmit.before }}>
                                            <select onChange={(e) => { setMarstat(e.target.value) }} className="profile__inner__each__left__content__select__gender">
                                                {
                                                    ProfileData.profile_marstat.map((ele) => {
                                                        const { id, label } = ele;
                                                        return (
                                                            <option className='profile__inner__each__left__content__select__gender' key={id} value={label}>{label}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>



                                <div className='profile__inner__each'>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Hobby
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_hobby}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <input type="text" onChange={(e) => { setHobby(e.target.value) }} placeholder={hobbyPlace} className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Address
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_address}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <input type="text" onChange={(e) => { setAddress(e.target.value) }} placeholder={addressPlace} className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                </div>


                                <div className='profile__inner__each'>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            Mother Tongue
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_motherTongue}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content__select' style={{ display: afterSubmit.before }}>
                                            <select onChange={(e) => { setMotherTongue(e.target.value) }} className="profile__inner__each__left__content__select__gender">
                                                {
                                                    ProfileData.profile_Lang.map((ele) => {
                                                        const { id, label } = ele;
                                                        return (
                                                            <option className='profile__inner__each__left__content__select__gender' key={id} value={label}>{label}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            2nd Language
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_secLang}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content__select' style={{ display: afterSubmit.before }}>
                                            <select onChange={(e) => { setSecLang(e.target.value) }} className="profile__inner__each__left__content__select__gender">
                                                {
                                                    ProfileData.profile_Lang.map((ele) => {
                                                        const { id, label } = ele;
                                                        if (label !== motherTongue) {
                                                            return (
                                                                <option className='profile__inner__each__left__content__select__gender' key={id} value={label}>{label}</option>
                                                            )
                                                        }

                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='profile__inner__each'>
                                    <div className='profile__inner__each__left'>
                                        <div className='profile__inner__each__left__head'>
                                            About
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                            <div className='profile__line'>
                                            </div>
                                            <div className='profile__inner__each__left__content__each'>
                                                {userData.user_about}
                                            </div>
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <textarea type="text" style={{ width: "95%", marginLeft: "9px", height: "5rem", borderRadius: "10px" }} onChange={(e) => { setAbout(e.target.value) }} placeholder={aboutPlace} className='profile__inner__each__left__content__field' />
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left' style={{ display: afterSubmit.before }}>
                                        <div className='profile__inner__each__left__head'>
                                            Image
                                        </div>
                                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                            <input type="file" id="img" name="img" style={{ paddingBottom: "20px" }} className='profile__inner__each__left__content__field' onChange={(e) => { setImage(e.target.value) }} accept="image/*"></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='profile__inner__each__button' style={{ display: afterSubmit.before }}>
                                    <div className='profile__inner__each__button__btn' onClick={() => { saveInfoClicked() }}>
                                        SAVE
                                    </div>
                                </div>


                                

                                {
                                    userData.user_updated?(
                                        <>
                                        <div className='profile__inner__notification' id="notification">
                                            <div className='profile__inner__notification__head'>
                                                Perfect Match
                                            </div>
                                            <div className='profile__inner__nav__line'></div>
                                            <div className='profile__inner__notification__addedme'>
                                                {
                                                    userData.user_accepted.length===0?(
                                                        <>
                                                        <img src={empty1} style={{width:"200px",height:"200px"}}/>
                                                        </>
                                                    ):(
                                                        userData.user_accepted.map((ele)=>{
                                                            return(
                                                                <ProfileNortCard1 fullprofiledisplayChange={fullprofiledisplayChange}  accepted={false} flag={false}  ele={ele}  LoggedIn={props.LoggedIn} GetProfile={GetProfile} AcceptedProfile={AcceptedProfile}/>
                                                            )
                                                            
                                                        })
                                                    )
                                                    
                                                }
                                            </div>
                                        </div>
                                        <div className='profile__inner__notification' id="notification">
                                        <div className='profile__inner__notification__head'>
                                            Notification
                                        </div>
                                        <div className='profile__inner__nav__line'></div>
                                        <div className='profile__inner__notification__head__small'>
                                            Request Recived:
                                        </div>
                                        <div className='profile__inner__notification__addedme'>
                                            {
                                                userData.user_recieve.length===0?(
                                                    <>
                                                    <img src={empty} style={{width:"200px",height:"200px"}}/>
                                                    </>
                                                ):(
                                                    userData.user_recieve.map((ele)=>{
                                                        return(
                                                            <ProfileNortCard1 accepted={true} flag={false}  ele={ele}  LoggedIn={props.LoggedIn} GetProfile={GetProfile} AcceptedProfile={AcceptedProfile}/>
                                                        )
                                                        
                                                    })
                                                )
                                                
                                            }
                                            
                                        </div>


                                        <div className='profile__inner__notification__head__small'>
                                            Request Sent:
                                        </div>
                                        <div className='profile__inner__notification__addedme'>
                                            {
                                                userData.user_send.length===0?(
                                                    <>
                                                    <img src={empty2} style={{width:"200px",height:"200px"}}/>
                                                    </>
                                                ):(
                                                    userData.user_send.map((ele)=>{
                                                        return( 
                                                            <ProfileNortCard1 accepted={true} flag={true} ele={ele} LoggedIn={props.LoggedIn}  GetProfile={GetProfile} AcceptedProfile={AcceptedProfile}/>
                                                        )
                                                        
                                                    })
                                                )
                                                
                                            }
                                            
                                        </div>
                                    </div>

                                <div className='profile__inner__member'>
                                    <div className='profile__inner__notification__head'>
                                        Memberships
                                    </div>
                                    <div className='profile__inner__nav__line'></div>
                                    <div className='profile__inner__notification__head' style={{fontSize:"18px"}}>
                                        Your Current Request Count: {userData.user_count+counter}
                                    </div>
                                    <div class="snip1214">
                                        <div class="plan">
                                            <h3 class="plan-title">
                                                Basic
                                            </h3>
                                            <div class="plan-cost"><span class="plan-price">$19</span><span class="plan-type">/ Monthly</span></div>
                                            <ul class="plan-features">
                                                <li><i class="ion-checkmark"> </i>Get up to 5 requests</li>
                                                <li><i class="ion-checkmark"> </i>Unlock access to advanced search</li>
                                                <li><i class="ion-checkmark"> </i>Make unlimited voice and video calls</li>
                                            </ul>
                                            <div class="plan-select"  onClick={()=>{setPaymentClicked({view:"flex",val:19})}}><a>Select Plan</a></div>
                                        </div>
                                        <div class="plan">
                                            <h3 class="plan-title">
                                                Pro
                                            </h3>
                                            <div class="plan-cost"><span class="plan-price">$29</span><span class="plan-type">/ Monthly</span></div>
                                            <ul class="plan-features">
                                                <li><i class="ion-checkmark"> </i>Get up to 10 requests</li>
                                                <li><i class="ion-checkmark"> </i>Unlock access to advanced search</li>
                                                <li><i class="ion-checkmark"> </i>Make unlimited voice and video calls</li>
                                                <li><i class="ion-checkmark"> </i>View up to 3x profiles daily</li>
                                                <li><i class="ion-checkmark"> </i>Unlock access to advanced search</li>
                                                <li><i class="ion-checkmark"> </i>Make unlimited voice and video calls</li>
                                            </ul>
                                            <div class="plan-select"  onClick={()=>{setPaymentClicked({view:"flex",val:29})}}><a>Select Plan</a></div>
                                        </div>
                                        <div class="plan featured">
                                            <h3 class="plan-title">
                                                Ultra
                                            </h3>
                                            <div class="plan-cost"><span class="plan-price">$49</span><span class="plan-type">/ Monthly</span></div>
                                            <ul class="plan-features">
                                                <li><i class="ion-checkmark"> </i>Get up to 20 requests</li>
                                                <li><i class="ion-checkmark"> </i>Unlock access to advanced search</li>
                                                <li><i class="ion-checkmark"> </i>Make unlimited voice and video calls</li>
                                                <li><i class="ion-checkmark"> </i>View up to 3x profiles daily</li>
                                                <li><i class="ion-checkmark"> </i>Unlock access to advanced search</li>
                                                <li><i class="ion-checkmark"> </i>Make unlimited voice and video calls</li>
                                                <li><i class="ion-checkmark"> </i>Appear on top of the list for 24 hours with 3 free spotlights</li>
                                                <li><i class="ion-checkmark"> </i>Unlock 20 contact views</li>
                                                <li><i class="ion-checkmark"> </i>Get a personal relationship manager</li>
                                            </ul>
                                            <div class="plan-select" onClick={()=>{setPaymentClicked({view:"flex",val:49})}}><a>Select Plan</a></div>
                                        </div>
                                    </div>
                                </div>
                                        </>
                                    ):
                                    (
                                        <>
                                        
                                        </>
                                    )
                                }

                                </div>
                                )
                }
                            </div>
            </Parallax>
        </>
    );
}

export default Profile;