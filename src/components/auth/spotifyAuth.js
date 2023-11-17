import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const SpotifyAuth = () => {

    const navigate = useNavigate()

    //credentials from spotify app dashboard
    const client_id = '9d4ba69c68be4c1cbafe02adff219424'
    const Authorize = "https://accounts.spotify.com/authorize";
    const redirect_uri = 'http://localhost:3000'

    useEffect(()=>{
        const token = localStorage.getItem("user-token")
        const spotifyToken = localStorage.getItem("spotify-token")
        if(token!==null && spotifyToken!=null){
            navigate('/home')
        }
    })
}