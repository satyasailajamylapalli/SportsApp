import React, { useEffect, useState } from 'react';
import BannerBackground from "../assets/home-banner-background.png";
import axios from "axios";
import GetSportsLeague from './GetSportsLeague';
import SignOutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import Login from './Login';

const url =
  "https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=";

const UserSearch = (props) => {
    const location = useLocation();
  const username = location.state;
  //const {username} =props.location;
    const [openMenu, setOpenMenu] = useState(false);
  //  const [sportsData, setSportsData] = {sportsId: "", sport: "", league: "", image:"", description:"", username:""};
    const [sportsDataList, setSprotsDataList] = useState([]);
    const [ sportsId, setSportsId] = useState("");
    const [ sport, setSport] = useState("");
    const [ league, setLeague] = useState("");
    const [ image, setImage] = useState("");
    const [ description, setDescription] = useState("");
    const [ inputData, setInputData] = useState({});
    const navigate = useNavigate();
    const postFavoriteLeague = (inputData) => {
      console.log("inputData before post call",inputData);
    fetch('http://localhost:3099/api/v1/addFavoriteLeague', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    }).then((response) => {
        console.log(response);
        if(response.status === 200){
          navigate('/usersearch' , {state: inputData.username});
        }
      }).catch(error => console.error('Error adding sportsLeague:', error));
    }
    const addFavoriteLeague = (leagueList,id) => {
      console.log(leagueList);
      console.log(id);
      const favoriteLeague = leagueList.filter(league => league.idLeague === id );
      console.log(favoriteLeague);
      if(favoriteLeague != null){
        favoriteLeague.map(league => {
        inputData.sportsId = league.idLeague;
      inputData.sport = league.strSport;
      inputData.league = league.strLeague;
      inputData.image = league.strBadge;
      inputData.description = league.strDescriptionEN;
      inputData.username = username;
        }
        );
        console.log("inputData",inputData);
        postFavoriteLeague(inputData);
    }
  }
    const menuOptions = [
        {
          text: "Logout",
          icon: <SignOutIcon />,
        },
        {
            text: "Favorite League",
            icon: <FavoriteIcon />,
          }
      ];
      const [UserData, setUSerData] = useState([]);
      const getSportsDataByUser = (username) => {
      /*  axios.get('http://localhost:3099/api/v1/getSportsData/'+username)
            .then((getData) => {
              setData(getData.data);
            })*/
    fetch('http://localhost:3099/api/v1/getSportsData/'+username, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json()).then((response) => {
        console.log(response);
        if(response){
          console.log(response);
          setSprotsDataList(response);
          setAPIData(null);
          console.log("get data", sportsDataList);
        }else {
          setSprotsDataList(null);
          setAPIData(null);
          <p> Sports Details not found </p>
        }
      }).catch(error => console.error('Error while fetching data:', error));
    }
    const [country, setCountry] = useState('');
    
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
            axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c='+country)
            .then((response) => {
            setAPIData(response.data);
            setSprotsDataList(null);
        })
    }, [])
    const setData = (data) => {
        let { idLeague, strSport, strLeague, strBadge,strDescriptionEN } = data;
        localStorage.setItem('ID', idLeague);
        localStorage.setItem('Sport', strSport);
        localStorage.setItem('League', strLeague);
        localStorage.setItem('Badge', strBadge);
        localStorage.setItem('Description', strDescriptionEN)
     }
const getSportsDataByCountry = (country) => {
        axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c='+country)
            .then((getData) => {
                setAPIData(getData.data);
                setSprotsDataList(null);
            })
    }
  return (
    <div>
      <nav>
        <div className="nav-logo-container">
         <div className="yellow"><h1>Sports League</h1></div> 
        </div>
       <div> {username}</div>
        <div className="navbar-links-container"><br />
          <a href="/"><button className="secondary-button" >Logout</button></a>
          <button className="secondary-button" onClick={() => getSportsDataByUser(username)}>Favorite League</button>
        </div>
       
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
        </nav>
        <div>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="contact-page-wrapper">
      <h1 className="primary-heading">Search for the Country</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="India" className='form-control'onChange={(e) => setCountry(e.target.value)}/>
        <button className="secondary-button" onClick={() => getSportsDataByCountry(country)}>Submit</button>
      </div>
    </div>
    </div>
        <ul>
            {sportsDataList && sportsDataList.map(favSport => <li key={favSport.sportId} data-id={favSport.sportId}><div><br/><img src={favSport.image} alt="photo" width="300px"></img><br/>
            <div><label className='label-name'>ID: &nbsp;</label><b><input type="hidden" onChange/>{favSport.sportId}</b></div>
            <div><label className='label-name'>Sport: &nbsp;</label><b>{favSport.sport}</b></div>
            <div><label className='label-name'>League: &nbsp;</label><b>{favSport.league} </b></div>
                     <div><label className='label-name'>Description: &nbsp;</label>{favSport.description}</div>
                      </div></li>)}</ul>
    
        <ul>
            {APIData && APIData.countries && APIData.countries.map(league => <li key={league.idLeague} data-id={league.idLeague}><div><br/><img src={league.strBadge} alt="photo" width="300px"></img><br/>
            <div><label className='label-name'>ID: &nbsp;</label><b><input type="hidden" onChange/>{league.idLeague}</b></div>
            <div><label className='label-name'>Sport: &nbsp;</label><b>{league.strSport}</b></div>
            <div><label className='label-name'>League: &nbsp;</label><b>{league.strLeague} </b></div>
                     <div><label className='label-name'>Description: &nbsp;</label>{league.strDescriptionEN}</div>
                     <button className='secondary-button' onClick = {() =>addFavoriteLeague(APIData.countries,league.idLeague)}>Add to Wishlist</button>  </div></li>)}</ul>
    </div>
    </div>
  )
}

export default UserSearch
