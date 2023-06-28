import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import star from '../../images/star.svg';
import { BannerDetail, Content } from "./style";


export default function Detalhes() {

    //Extraindo da url as informações passadas no momento do click do filme/serie
    const { id } = useParams();
    const { category } = useParams();

    const navigate = useNavigate();

    const [item, setItem] = useState([]);

    //https://api.themoviedb.org/3/tv/114472

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/${category}/${id}`, {
            params: {
                api_key: '93b872e765d2e0bc708fe8fd68ea2ad0',
                language: 'pt-BR'
            }
        })

            .then(response => {
                console.log(response.data);
                setItem(response.data);
            })

            .catch(error => {
                console.log(error.message);
            })

    }, [])

    
    return (
        <>
            <BannerDetail url={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} />

            <Content>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" width={300} />
                
                <div>
                    <h1>{category === 'movie' ? item.title : item.name}</h1>
                    <h2>{item.tagline ? item.tagline : ''}</h2>
                    
                    <ul>
                        {/* <li>Ano: {JSON.stringify(category === 'movie' ? item.release_date : item.first_air_date).substring(1, 5)}</li>                         */}
                        <li>Ano: {JSON.stringify(category === 'movie' ? item.release_date : item.first_air_date)?.substring(1,5)}</li>
                        <li><img src={star} alt="" /> {(item.vote_average*10).toFixed(0)}%</li>
                    </ul>

                    <p>Sinopse: {item.overview ? item.overview : ''}</p>

                    <button onClick={()=> navigate(-1)}>Voltar</button>
                </div>
            </Content>
        </>

    )

}