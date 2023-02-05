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
import LoadingScreen from './../../atom/loadingScreen';

const Seach = (props) => {
    const navigate = useNavigate();
    const [allData,setAllData]=useState([])
    const [allDisplay,setAllDisplay]=useState([])
    const [cardLoader,setCardLoader]=useState(true);


    const [height, setHeight] = useState([150, 200]);
    const [salary, setSalary] = useState([1, 50]);
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
    
    
    
    function intersection() {
        var result = [];
        var lists;
    
        if(arguments.length === 1) {
        lists = arguments[0];
        } else {
        lists = arguments;
        }
    
        for(var i = 0; i < lists.length; i++) {
        var currentList = lists[i];
        for(var y = 0; y < currentList.length; y++) {
            var currentValue = currentList[y];
            if(result.indexOf(currentValue) === -1) {
            var existsInAll = true;
            for(var x = 0; x < lists.length; x++) {
                if(lists[x].indexOf(currentValue) === -1) {
                existsInAll = false;
                break;
                }
            }
            if(existsInAll) {
                result.push(currentValue);
            }
            }
        }
        }
        return result;
    }
    
    
    function runFilter()
    {
        setCardLoader(true);
        var li1=[];
        for(var i=0;i<allData.length;i++)
        {
            if(allData[i].user_age>=props.age[0] && allData[i].user_age<=props.age[1])
            {
                li1.push(allData[i]);
            }
        }
        



        var li2=[];
        for(var i=0;i<allData.length;i++)
        {
            if(allData[i].user_height>=height[0] && allData[i].user_height<=height[1])
            {
                li2.push(allData[i]);
            }
        }





        var li3=[]
        if(props.location==="All")
        {
            li3=allData;
        }
        else
        {
            for(var i=0;i<allData.length;i++)
            {
                if(props.location===allData[i].user_state)
                {
                    li3.push(allData[i]);
                }
            }
        }



        var li4=[]
        if(props.religion==="All")
        {
            li4=allData;
        }
        else
        {
            for(var i=0;i<allData.length;i++)
            {
                if(props.religion===allData[i].user_religion)
                {
                    li4.push(allData[i]);
                }
            }
        }
        
        var checkli5=[langHindi,langEnglish,langPunjabi,langTelugu,langMarathi
        ,langKannada,langUrdu]
        var checkli5lang=["Hindi","English","Punjabi","Telugu","Marathi"
            ,"Kannada","Urdu"]
        var li5=[]
        for(var i=0;i<checkli5.length;i++)
        {
            if(checkli5[i]===true)
            {
                for(var j=0;j<allData.length;j++)
                {
                    if(allData[j].user_motherTongue===checkli5lang[i])
                    {
                        li5.push(allData[j])
                    }
                }
            }
        }
        if(li5.length===0)
        {
            li5=allData;
        }
        



        var li6=[]
        if(marstat==="All")
        {
            li6=allData;
        }
        else
        {
            for(var i=0;i<allData.length;i++)
            {
                if(marstat===allData[i].user_marstat)
                {
                    li6.push(allData[i]);
                }
            }
        }


        var li7=[];
        for(var i=0;i<allData.length;i++)
        {
            if(allData[i].user_sallary>=salary[0] && allData[i].user_sallary<=salary[1])
            {
                li7.push(allData[i]);
            }
        }


        var checkli8=[Capricorn,Aquarius,Pisces,Aries,Taurus
        ,Gemini,Cancer,Leo,Virgo,Libra,Scorpio,Sagittarius]
        var checkli8zodiac=["Capricorn","Aquarius","Pisces","Aries","Taurus"
            ,"Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"]
        var li8=[]
        for(var i=0;i<checkli8.length;i++)
        {
            if(checkli8[i]===true)
            {
                for(var j=0;j<allData.length;j++)
                {
                    if(allData[j].user_zodiac===checkli8zodiac[i])
                    {
                        li8.push(allData[j])
                    }
                }
            }
        }
        if(li8.length===0)
        {
            li8=allData;
        }


        
        var check=intersection(li1,li2,li3,li4,li5,li6,li7,li8);
        setAllDisplay(check);
        setCardLoader(false);
        return;
    }


    // function checkRequested()
    // {
    //     for(var i=0;i<allData.length;i++)
    //     {
    //         for(var j=0;j<allData.data1)
    //     }
    // }

    function getSearch() {
        Axios.post('http://localhost:5000/api/search/user-get',
        {
            email: props.LoggedIn,
        }).then((res) => {
            var lis=[]
            var all=res.data.data
            var checker=res.data.data1.user_send
            for(var i=0;i<all.length;i++)
            {
                var flag=0
                
                for(var j=0;j<checker.length;j++)
                {
                    if(checker[j].user_email===all[i].user_email)
                    {
                        flag=1;
                        break
                    }
                }
                if(flag!==1)
                {
                    lis.push(all[i])
                }
            }
            setAllData(lis);
            setAllDisplay(lis);
            setCardLoader(false)
        });
    }



    useEffect(() => {
        if (props.LoggedInStatus === true) {
            getSearch();
            runFilter()
        }
        else {
            navigate("/auth")
        }
    }, []);







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
                setVirgo(check);
                break;
            case 9:
                setLibra(check);
                break;
            case 10:
                setScorpio(check);
                break;
            case 11:
                setSagittarius(check);
                break;
            default:
              console.log("fuck u");
          }
    }












    return (
        <>
            <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
            <Parallax blur={5} bgImage={back} bgImageAlt="the cat" strength={500}>
                <div className='search__outer'>
                    <div className='search__inner'>
                        {/* <div className='search__inner__head'>
                            Search Profiles
                        </div> */}
                        <div className='search__inner__display'>
                            {/* <div className='search__inner__display__filter__outer'> */}
                                <div className='search__inner__display__filter2'></div>
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
                                        <div className='search__inner__display__filter__bottom__button' onClick={()=>{runFilter()}}>
                                            Filter
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                            
                            <div className='search__inner__display__content'>
                                {
                                    cardLoader?(
                                        <>
                                        <div className='loading__outer' style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <div className='loading__outer__inner'>
                                                <LoadingScreen />
                                            </div>

                                        </div>
                                        </>
                                    ):(
                                        allDisplay.map((ele)=>{
                                            
                                            return(
                                                <SearchCard1 ele={ele} LoggedIn={props.LoggedIn} />
                                            )
                                        })
                                        
                                        
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

        </>
    );
}

export default Seach;



 