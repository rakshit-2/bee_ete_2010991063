import './index.css';
import Navbar from '../navbar';
import * as React from 'react';
import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';
import Slider from '@mui/material/Slider';
// import HomeData from './../../assets/store/homeData';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import SearchData from '../../assets/store/searchData';
// import SearchCard1 from '../../atom/searchCard1';
import { useState, useEffect } from 'react';
import Axios, { all } from 'axios';
import back from './../../assets/image/home_back10.jpg'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AllData from '../../assets/store/allData';
import ProfileData from '../../assets/store/profileData';
import SearchCard1 from '../../atom/searchCard1';

const Seach = (props) => {
    const navigate = useNavigate();


    function getSearch() {
        Axios.post('http://localhost:5000/api/search/user-get',
        {
            email: props.LoggedIn,
        }).then((res) => {
            
        });
    }



    useEffect(() => {
        if (props.LoggedInStatus === true) {
            getSearch();
        }
        else {
            navigate("/auth")
        }
    }, []);







    const [height, setHeight] = useState([155, 165]);
    const [salary, setSalary] = useState([10, 20]);
    const [marstat, setMarstat] = useState("All");

  

    const [langHindi, setLangHindi] = useState(false);
    const [langEnglish, setLangEnglish] = useState(false);
    const [langPunjabi, setLangPunjabi] = useState(false);
    const [langTelugu, setLangTelugu] = useState(false);
    const [langMarathi, setLangMarathi] = useState(false);
    const [langKannada, setLangKannada] = useState(false);
    const [langUrdu, setLangUrdu] = useState(false);



    const [Capricorn, setCapricorn] = useState(false);
    const [Aquarius, setAquarius] = useState(false);
    const [Pisces, setPisces] = useState(false);
    const [Aries, setAries] = useState(false);
    const [Taurus, setTaurus] = useState(false);
    const [Gemini, setGemini] = useState(false);
    const [Cancer, setCancer] = useState(false);
    const [Leo, setLeo] = useState(false);
    const [Virgo, setVirgo] = useState(false);
    const [Libra, setLibra] = useState(false);
    const [Scorpio, setScorpio] = useState(false);
    const [Sagittarius, setSagittarius] = useState(false);

    const handleChangeHeight = (event, newValue) => {
        setHeight(newValue);
    };

    const handleChangeSalary = (event, newValue) => {
        setSalary(newValue);
    };

    const handleChangeMarstat = (event) => {
        setMarstat(event.target.value);
    };



    function handleChangeMotherTongue(x,check)
    {
        switch(x) {
            case 0:
                setLangHindi(check);
              break;
            case 1:
                setLangEnglish(check);
                break;
            case 2:
                setLangPunjabi(check);
                break;
            case 3:
                setLangTelugu(check);
                break;
            case 4:
                setLangMarathi(check);
                break;
            case 5:
                setLangKannada(check);
                break;
            case 6:
                setLangUrdu(check);
                break;
            default:
              console.log("fuck u");
          }
    }


    function handleChangeZodiac(x,check)
    {
        switch(x) {
            case 0:
                setCapricorn(check);
              break;
            case 1:
                setAquarius(check);
                break;
            case 2:
                setPisces(check);
                break;
            case 3:
                setAries(check);
                break;
            case 4:
                setTaurus(check);
                break;
            case 5:
                setGemini(check);
                break;
            case 6:
                setCancer(check);
                break;
            case 7:
                setLeo(check);
                break;
            case 8:
                setAries(check);
                break;
            case 9:
                setVirgo(check);
                break;
            case 10:
                setLibra(check);
                break;
            case 11:
                setScorpio(check);
                break;
            case 12:
                setSagittarius(check);
                break;
            default:
              console.log("fuck u");
          }
    }



    return (
        <>
            <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
            <Parallax blur={1} bgImage={back} bgImageAlt="the cat" strength={200}>
                <div className='search__outer'>
                    <div className='search__inner'>
                        <div className='search__inner__head'>
                            Search Profiles
                        </div>
                        <div className='search__inner__display'>
                            {/* <div className='search__inner__display__filter__outer'> */}
                                <div className='search__inner__display__filter'>
                                    <div className='search__inner__display__filter__top'>
                                        


                                        <div className='search__inner__display__filter__each'>
                                            <div className='search__inner__display__filter__each__head'>
                                                Age:{'\u00A0'}{props.age[0]}-{props.age[1]} {'\u00A0'} (Years)
                                            </div>
                                            <div className='search__inner__display__filter__each__info'>
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

                                        <div className='search__inner__display__filter__each'>
                                            <div className='search__inner__display__filter__each__head'>
                                                Height:{'\u00A0'}{height[0]}-{height[1]}{'\u00A0'} (Cm)
                                            </div>
                                            <div className='search__inner__display__filter__each__info'>
                                                <Slider
                                                    getAriaLabel={() => 'Height'}
                                                    value={height}
                                                    onChange={handleChangeHeight}
                                                    valueLabelDisplay="auto"
                                                    getAriaValueText={props.valuetext}
                                                    min={150}
                                                    max={220}
                                                />
                                            </div>
                                        </div>


                                        <div className='search__inner__display__filter__each'>
                                            <div className='search__inner__display__filter__each__head'>
                                                Location:
                                            </div>
                                            <div className='search__inner__display__filter__each__info'>
                                                <FormControl size="small" fullWidth>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={props.location}
                                                        label=""
                                                        onChange={props.handleChangeLocation}
                                                    >
                                                        {
                                                            AllData.all_state.map((ele) => {
                                                                return (
                                                                    <MenuItem key={ele.id} value={ele.label}>{ele.label}</MenuItem>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>


                                        <div className='search__inner__display__filter__each'>
                                            <div className='search__inner__display__filter__each__head'>
                                                Religion:
                                            </div>
                                            <div className='search__inner__display__filter__each__info'>
                                                <FormControl size="small" fullWidth>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={props.religion}
                                                        label=""
                                                        onChange={props.handleChangeReligion}
                                                    >
                                                        {
                                                            AllData.all_religion.map((ele) => {
                                                                return (
                                                                    <MenuItem key={ele.id} value={ele.label}>{ele.label}</MenuItem>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        

                                        <div className='search__inner__display__filter__each'>
                                            <div className='search__inner__display__filter__each__head'>
                                                Mother Tongue:
                                            </div>
                                            <div className='search__inner__display__filter__each__info'>
                                                <FormGroup aria-label="position" row>
                                                    {ProfileData.profile_Lang.map((ele)=>{
                                                        const{id,label}=ele;
                                                        return(
                                                            <FormControlLabel
                                                                sx={{ m: 0 ,color:"black"}} 
                                                                key={id}
                                                                value={label}
                                                                // checked={props.checkArr[id]}
                                                                control={<Checkbox />}
                                                                onChange={(e)=>{handleChangeMotherTongue(id,e.target.checked)}}
                                                                label={label}
                                                                labelPlacement="end"
                                                            />
                                                        )
                                                    })}   
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <div className='search__inner__display__filter__each'>
                                            <div className='search__inner__display__filter__each__head'>
                                                Marital Status:
                                            </div>
                                            <div className='search__inner__display__filter__each__info'>
                                                <FormControl size="small" fullWidth>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={marstat}
                                                        label=""
                                                        onChange={handleChangeMarstat}
                                                    >
                                                        {
                                                            AllData.all_marstat.map((ele) => {
                                                                return (
                                                                    <MenuItem key={ele.id} value={ele.label}>{ele.label}</MenuItem>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>


                                        <div className='search__inner__display__filter__each'>
                                            <div className='search__inner__display__filter__each__head'>
                                                Salary:{'\u00A0'}{salary[0]}-{salary[1]} {'\u00A0'} (Lakh)
                                            </div>
                                            <div className='search__inner__display__filter__each__info'>
                                                <Slider
                                                    getAriaLabel={() => 'Salary'}
                                                    value={salary}
                                                    onChange={handleChangeSalary}
                                                    valueLabelDisplay="auto"
                                                    getAriaValueText={props.valuetext}
                                                    min={1}
                                                    max={90}
                                                />
                                            </div>
                                        </div>


                                        <div className='search__inner__display__filter__each'>
                                            <div className='search__inner__display__filter__each__head'>
                                                Zodiac Sign:
                                            </div>
                                            <div className='search__inner__display__filter__each__info'>
                                                <FormGroup aria-label="position" row>
                                                    {AllData.all_zodiac.map((ele)=>{
                                                        const{id,label}=ele;
                                                        return(
                                                            <FormControlLabel
                                                                sx={{ m: 0 ,color:"black"}} 
                                                                key={id}
                                                                value={label}
                                                                // checked={props.checkArr[id]}
                                                                control={<Checkbox />}
                                                                onChange={(e)=>{handleChangeZodiac(id,e.target.checked)}}
                                                                label={label}
                                                                labelPlacement="end"
                                                            />
                                                        )
                                                    })}   
                                                </FormGroup>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='search__inner__display__filter__bottom'>
                                        <div className='search__inner__display__filter__bottom__button'>
                                            Filter
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                            
                            <div className='search__inner__display__content'>
                                <SearchCard1/>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

        </>
    );
}

export default Seach;



 