import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { CardItem, CardsList } from './style';
import star from '../../images/star.svg';
import noImage from '../../images/no-image.jpg';
import { Banner } from '../Banner/Index';
import { Link } from 'react-router-dom';

export function List({ title, category }) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    //Acionando a cada alteração do estado "search"
    useEffect(() =>{
        console.log(search);
    } , [search])


    useEffect(() => {
        //console.log('componente renderizado');
        //get -> consultar  //post -> enviar  //put -> atualizar   //delete -> excluir
        //popular, top_rated, now_playing
        axios.get(`https://api.themoviedb.org/3/${category}/popular`, {
            params: {
                page: 1,
                api_key: '93b872e765d2e0bc708fe8fd68ea2ad0',
                language: 'pt-BR'                
            }
        })

            //Resposta positiva da API
            .then(response => {
                //console.log(response.data.results);
                setItems(response.data.results.slice(0, 20));
                setLoading(false); //escondendo o loading
            })

            .catch(erro => {
                console.log(erro.message)
            });

    }, [])

    

    if (loading) {
        return (
            <h1>Carregando...</h1>
        )
    }

    return (
        <>
            <Banner title={title}>
                <input 
                    type='text' 
                    placeholder='Digite para pesquisar' 
                    value={search} 
                    onChange={(e)=> setSearch(e.target.value)} 
                />           
                
            </Banner>

            <div className='container'>

                {/* local onde serao mostrados os cards */}
                <CardsList>

                    {
                        items.map((item) => (
                            <CardItem key={item.id}>
                                <Link to={`/detalhes/${category}/${item.id}`}>
                                    {
                                        (item.backdrop_path
                                            ?
                                            <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" width={360} />
                                            :
                                            <img src={noImage} alt="" width={360} />
                                        )
                                    }

                                    <div className='card-content'>
                                        <h2>{category === 'movie' ? item.title : item.name}</h2>

                                        <h3>Ano: {JSON.stringify(category === 'movie' ? item.release_date : item.first_air_date).substring(1, 5)} </h3>

                                        <span> <img src={star} alt="" /> {item.vote_average} </span>
                                    </div>
                                </Link>
                            </CardItem>
                        ))
                    }

                </CardsList>

            </div>

        </>

    )

}