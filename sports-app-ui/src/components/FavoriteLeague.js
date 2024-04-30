import React, { useEffect, useState } from 'react';
import BannerBackground from "../assets/home-banner-background.png";
import axios from "axios";


const FavoriteLeague = () => {
    const [country, setCountry] = useState('');
    
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
            axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c='+country)
            .then((response) => {
            setAPIData(response.data);
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
const getData = (country) => {
        axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c='+country)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

   
  return (
    <div>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="contact-page-wrapper">
      <h1 className="primary-heading">Search for the Country</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="India" className='form-control'onChange={(e) => setCountry(e.target.value)}/>
        <button className="secondary-button" onClick={() => getData(country)}>Submit</button>
      </div>
    </div>
        </div>
            {APIData.countries && APIData.countries.map(league => <div><br/><img src={league.strBadge} alt="photo" width="300px"></img><br/>
            <div><label className='label-name'>ID: &nbsp;</label><b>{league.idLeague}</b></div>
            <div><label className='label-name'>Sport: &nbsp;</label><b>{league.strSport}</b></div>
            <div><label className='label-name'>League: &nbsp;</label><b>{league.strLeague} </b></div>
                     <div><label className='label-name'>Description: &nbsp;</label>{league.strDescriptionEN}</div></div>)}
    </div>
  )
}

export default FavoriteLeague
