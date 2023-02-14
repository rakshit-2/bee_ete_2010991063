
import './index.css';
// import err_img from './../../assets/images/err.jpg';
import ErrorCard from '../../atom/errorCard';
import Navbar from '../navbar';
import { useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoadingScreen from '../../atom/loadingScreen';
import ProfileNortCard1 from '../../atom/profileNortCard1';
import empty2 from './../../assets/image/Waiting-pana.svg';
import Axios from "axios"
import { faXmark,faCreditCard } from '@fortawesome/free-solid-svg-icons';
import ProfileData from '../../assets/store/profileData';

const AdminEnter=(props)=>{
    const navigate=useNavigate()

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


    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
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
    const [contactDisplay,setContactDisplay]=useState("flex")






    const[registerLoading,setRegisteredLoading]=useState(true)
    const[registerData,setRegisterData]=useState(true)

    function getRegiosteredUser()
    {
        setRegisteredLoading(true)
        Axios.post('http://localhost:5000/api/admin/get-all-users',
        {
            check:"test"
        }).then((res) => {
            setRegisterData(res.data.data)
            setRegisteredLoading(false)
        });
    }

    useEffect(() => {
        if (props.adminLoggedInStatus === true) {
            getRegiosteredUser();
        }
        else {
            navigate("/admin")
        }
    }, []);
    
    function logoutClicked()
    {
        props.AdminLoggedInStatusCheck(false,"")
        navigate("/")
    }



    function deleteUser(toEmail)
    {
        Axios.post('http://localhost:5000/api/admin/delete-email-users',
        {
            email:toEmail,
        }).then((res) => {
            if(res.data.message==="Success")
            {
                getRegiosteredUser()
                props.showError("User Deleted","success")
            }
            else
            {
                props.showError("User Deleted","error")
            }
            
        });
    }

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

        if (name === "") {
            props.showError("Fill Name Correctly!!","error")
            return;
        }
        if (email === "") {
            props.showError("Fill Email Correctly!!","error")
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
        Axios.post('http://localhost:5000/api/profile/insert-data',
            {
                name:name,
                email:email,
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
                gender: gender,
                zodiac: zodiac,
                dob: realDob,
                motherTongue: motherTongue,
                secLang: secLang

            }).then((res) => {
                if(res.data.message==="Success")
                {
                    props.showError("Profile Updated Successfully!!","success")
                    getRegiosteredUser()
                }
                else
                {
                    props.showError("Failed Insertion!!","error")
                }
                
            });
    }


return (
    <>
    <ErrorCard 
        errorDisplay={props.errorDisplay}
        errorIcon={props.errorIcon}
        errorText={props.errorText}
        errorColor={props.errorColor}
    />
    <div className='adminenter__float'>
        <div className='adminenter__float__log' onClick={()=>{logoutClicked()}}>
            <FontAwesomeIcon icon={faRightFromBracket} size="xl" color="black" className='nav__icon' />
        </div>
    </div>
    <div className='adminenter__outer'>
        <div className='adminenter__inner'>
            <div className='adminenter__inner__left'>
                <div className='adminenter__inner__left__head'>
                    Registered Profiles
                </div>
                <div className='adminenter__inner__left__display'>
                {
                    registerLoading?(
                        <>
                        <img src={empty2} style={{width:"200px",height:"200px"}}/>
                        </>
                    ):(
                        registerData.map((ele)=>{
                            return( 
                                <div key={ele._id} className='profile__inner__notification__addedme__each'>
                            <div className='profile__inner__notification__addedme__each__image'>
                                <img src={require(`./../../assets/image/${ele.user_image}`)} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                            </div>
                            <div className=''>
                                <div className='profile__inner__notification__addedme__each__name'>
                                    {ele.user_name}
                                </div>
                                <div className='profile__inner__notification__addedme__each__about'>
                                    {ele.user_about}
                                </div>
                            </div>
                            
                            <div className='profile__inner__notification__addedme__each__button'  style={{backgroundColor:"rgb(244, 72, 72)"}} onClick={()=>{deleteUser(ele.user_email)}}>
                                <FontAwesomeIcon icon={faXmark} size="md" color="white"/> 
                            </div>
                        </div>
                            )
                            
                        })
                    )
                    
                }
                </div>
            </div> 
            <div className='adminenter__inner__right'>
                <div className='adminenter__inner__left__head'>
                    Create Profiles
                </div>
                <div className='profile__inner__each'>
                    <div className='profile__inner__each__left'>
                        <div className='profile__inner__each__left__head'>
                            Full Name
                        </div>
                        <div className='profile__inner__each__left__content'>
                            <input onChange={(e) => { setName(e.target.value) }} type="text" className='profile__inner__each__left__content__field' />
                        </div>
                    </div>
                    <div className='profile__inner__each__left'>
                        <div className='profile__inner__each__left__head'>
                            Email
                        </div>
                        <div className='profile__inner__each__left__content'>
                            <input type="text"  onChange={(e) => { setEmail(e.target.value) }} className='profile__inner__each__left__content__field' />
                        </div>
                    </div>
                </div>

                <div className='profile__inner__each'>
                    <div className='profile__inner__each__left'>
                        <div className='profile__inner__each__left__head'>
                            Date Of Birth
                        </div>
                        <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                            <input type="date" onChange={(e) => { setAge(e.target.value) }} placeholder={agePlace} className='profile__inner__each__left__content__field' />
                        </div>
                    </div>
                    <div className='profile__inner__each__left'>
                        <div className='profile__inner__each__left__head'>
                            Gender
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
            </div>
        </div>
    </div>
    </>
);
}

export default AdminEnter;