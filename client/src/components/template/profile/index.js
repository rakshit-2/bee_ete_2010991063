import './index.css';
import Navbar from '../navbar';
import LoadingScreen from './../../atom/loadingScreen';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import ProfileData from '../../assets/store/profileData';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { HashLink } from 'react-router-hash-link';
import satyam from './../../assets/image/satyam.jpeg'

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




    const [userData, setUserdata] = useState({})
    const [userLoading, setUserLoading] = useState(true)
    const [afterSubmit, setAfterSubmit] = useState({
        after: "none",
        before: 'flex'
    });



    function GetProfile()
    {
        setUserLoading(true);
        Axios.post('http://localhost:5000/api/profile/get-data',
        {
            email: props.LoggedIn,
        }).then((res) => {
            setUserdata(res.data.data)
            if (res.data.data.user_updated === true) {
                setAfterSubmit({ after: "flex", before: "none" });
            }
            setUserLoading(false)
        });
    }

    useEffect(() => {
        if(props.LoggedInStatus===true)
        {
            GetProfile();
        }
        else
        {
            navigate("/auth")
        }
    }, []);



    function saveInfoClicked()
    {
        var check_age=parseInt(age)
        if ((check_age<=19 && check_age>=100) || (age===""))
        {
            alert("Fill Age Correctly!!")
            return;
        }
        
        if(contact.length<10)
        {
            alert("Fill Contact Correctly!! (10 digits)")
            return;
        }
        
        if(height==="")
        {
            alert("Fill height Correctly!!")
            return;
        }
        if(edu==="")
        {
            alert("Fill Education Correctly!!")
            return;
        }
        if(occu==="")
        {
            alert("Fill occupation Correctly!!")
            return;
        }
        if(sallary==="")
        {
            alert("Fill Sallary Correctly!!")
            return;
        }
        if(image==="")
        {
            alert("Fill Image Correctly!!")
            return;
        }
        var check=/^[#.0-9a-zA-Z\s,-]+$/;
        if(check.test(address)===false)
        {
            alert("Fill Address Correctly!!")
            return;
        }
        if(hobby==="")
        {
            alert("Fill Hobby Correctly!!")
            return;
        }
        if(about==="")
        {
            alert("Fill About Correctly!!")
            return;
        }
        var check = image.split('\h')
        var imagess='h'+check[check.length-1];
        imagess=imagess.slice(2,imagess.length)
        Axios.post('http://localhost:5000/api/profile/post-data',
        {
            updated:true,
            age:age,
            address:address,
            contact:contact,
            religion:religion,
            state:state,
            height:height,
            edu:edu,
            occu:occu,
            sallary:sallary,
            marstat:marstat,
            image:imagess,
            hobby:hobby,
            about:about,
            email:props.LoggedIn,
            gender:gender

        }).then((res)=>{
            GetProfile()
        });
    }


    function LogoutClicked()
    {
        props.LoggedInStatusCheck(false,"");
        navigate('/home')
    }
    return (
        <>
            <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
            <div className='profile__outer'>
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
                                    userData.user_updated ?(
                                        <>
                                        <img src={require(`./../../assets/image/${userData.user_image}`)} style={{ width: "100%", height: "100%", borderRadius: "50%"}} />
                                        </>
                                    ):(
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
                                    <FontAwesomeIcon icon={faBell} size="xl" color="black" className='nav__icon'/>
                                </HashLink>
                                <div className='profile__inner__nav__each'>
                                    <FontAwesomeIcon icon={faList} size="xl" color="black" className='nav__icon'/> 
                                </div>  
                                <div className='profile__inner__nav__each' onClick={()=>{LogoutClicked()}}>
                                    <FontAwesomeIcon icon={faRightFromBracket} size="xl" color="black" className='nav__icon'/> 
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
                                        Age
                                    </div>
                                    <div className='profile__inner__each__left__content' style={{ display: afterSubmit.after }}>
                                        <div className='profile__line'>
                                        </div>
                                        <div className='profile__inner__each__left__content__each'>
                                            {userData.user_age}
                                        </div>
                                    </div>
                                    <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                        <input type="number" max={100}  onChange={(e)=>{setAge(e.target.value)}} placeholder={agePlace} className='profile__inner__each__left__content__field' />
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
                                        <select onChange={(e)=>{setGender(e.target.value)}} className="profile__inner__each__left__content__select__gender">
                                            {
                                                ProfileData.profile_gender.map((ele)=>{
                                                    const{id,label}=ele;
                                                    return(
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
                                        <input type="number" onChange={(e)=>{setContact(e.target.value)}} maxLength={10} placeholder={contactPlace} className='profile__inner__each__left__content__field' />
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
                                        <select onChange={(e)=>{setReligion(e.target.value)}} className="profile__inner__each__left__content__select__gender">
                                            {
                                                ProfileData.profile_religion.map((ele)=>{
                                                    const{id,label}=ele;
                                                    return(
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
                                        <select onChange={(e)=>{setState(e.target.value)}} className="profile__inner__each__left__content__select__gender">
                                            {
                                                ProfileData.profile_state.map((ele)=>{
                                                    const{id,label}=ele;
                                                    return(
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
                                        <input type="number" onChange={(e)=>{setHeight(e.target.value)}} placeholder={heightPlace} className='profile__inner__each__left__content__field' />
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
                                        <input type="text" onChange={(e)=>{setEdu(e.target.value)}} placeholder={eduPlace} className='profile__inner__each__left__content__field' />
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
                                        <input type="text" onChange={(e)=>{setOccu(e.target.value)}} placeholder={occuPlace} className='profile__inner__each__left__content__field' />
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
                                        <input type="number" onChange={(e)=>{setSallary(e.target.value)}} placeholder={sallaryPlace} className='profile__inner__each__left__content__field' />
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
                                        <select onChange={(e)=>{setMarstat(e.target.value)}} className="profile__inner__each__left__content__select__gender">
                                            {
                                                ProfileData.profile_marstat.map((ele)=>{
                                                    const{id,label}=ele;
                                                    return(
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
                                        <input type="text" onChange={(e)=>{setHobby(e.target.value)}} placeholder={hobbyPlace} className='profile__inner__each__left__content__field' />
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
                                        <input type="text" onChange={(e)=>{setAddress(e.target.value)}} placeholder={addressPlace} className='profile__inner__each__left__content__field' />
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
                                        <textarea type="text" style={{width:"95%",marginLeft:"9px",height:"5rem",borderRadius:"10px"}} onChange={(e)=>{setAbout(e.target.value)}} placeholder={aboutPlace} className='profile__inner__each__left__content__field' />
                                    </div>
                                </div>
                                <div className='profile__inner__each__left' style={{ display: afterSubmit.before }}>
                                    <div className='profile__inner__each__left__head'>
                                        Image
                                    </div>
                                    <div className='profile__inner__each__left__content' style={{ display: afterSubmit.before }}>
                                        <input type="file" id="img" name="img" className='profile__inner__each__left__content__field' onChange={(e)=>{setImage(e.target.value)}} accept="image/*"></input>
                                    </div>
                                </div>
                            </div>

                            <div className='profile__inner__each__button' style={{ display: afterSubmit.before }}>
                                <div className='profile__inner__each__button__btn' onClick={()=>{saveInfoClicked()}}>
                                    SAVE
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
                                    <div className='profile__inner__notification__addedme__each'>
                                        <div className='profile__inner__notification__addedme__each__image'>
                                            <img src={satyam} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                                        </div>
                                        <div className=''>
                                            <div className='profile__inner__notification__addedme__each__name'>
                                                {userData.user_name}
                                            </div>
                                            <div className='profile__inner__notification__addedme__each__about'>
                                                Hi i am Rakshit Sharma student at chitkara university
                                                Hi i am Rakshit Sharma student at chitkara university
                                            </div>
                                        </div>
                                        <div className='profile__inner__notification__addedme__each__button' style={{backgroundColor:"rgb(6, 186, 87)"}}>
                                            <FontAwesomeIcon icon={faCheck} size="md" color="white"/> 
                                        </div>
                                        <div className='profile__inner__notification__addedme__each__button'  style={{backgroundColor:"rgb(244, 72, 72)"}}>
                                            <FontAwesomeIcon icon={faXmark} size="md" color="white"/> 
                                        </div>
                                    </div>
                                </div>


                                <div className='profile__inner__notification__head__small'>
                                    Request Sent:
                                </div>
                                <div className='profile__inner__notification__addedme'>
                                    <div className='profile__inner__notification__addedme__each'>
                                        <div className='profile__inner__notification__addedme__each__image'>
                                            <img src={satyam} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                                        </div>
                                        <div className=''>
                                            <div className='profile__inner__notification__addedme__each__name'>
                                                {userData.user_name}
                                            </div>
                                            <div className='profile__inner__notification__addedme__each__about'>
                                                Hi i am Rakshit Sharma student at chitkara university
                                                Hi i am Rakshit Sharma student at chitkara university
                                            </div>
                                        </div>
                                        <div className='profile__inner__notification__addedme__each__button' style={{backgroundColor:"rgb(6, 186, 87)"}}>
                                            <FontAwesomeIcon icon={faCheck} size="md" color="white"/> 
                                        </div>
                                        <div className='profile__inner__notification__addedme__each__button'  style={{backgroundColor:"rgb(244, 72, 72)"}}>
                                            <FontAwesomeIcon icon={faXmark} size="md" color="white"/> 
                                        </div>
                                    </div>
                                </div>
                            </div>




                            
                            
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Profile;