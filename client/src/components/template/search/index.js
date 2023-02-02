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
import Axios from 'axios';
import back from './../../assets/image/home_back10.jpg'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AllData from '../../assets/store/allData';

const Seach = (props) => {
    const navigate = useNavigate();


    function getSearch() {

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


    const handleChangeHeight = (event, newValue) => {
        setHeight(newValue);
    };





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
                            <div className='search__inner__display__filter__outer'>
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




                                    </div>
                                    <div className='search__inner__display__filter__bottom'>
                                        <div className='search__inner__display__filter__bottom__button'>
                                            Filter
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='search__inner__display__content'>

                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

        </>
    );
}

export default Seach;



 