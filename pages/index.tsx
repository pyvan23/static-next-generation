import { Layout } from '../components/layout/Layout';

import { NextPage, GetStaticProps } from "next"
import  axios  from 'axios';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';

interface HomePageProps  {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage <HomePageProps>= ({pokemons}:HomePageProps) => {
  console.log(pokemons);
  
  return (
    <>
      <Layout title="Listado">

       {/* <ul>
       {pokemons.map((pokemon: SmallPokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
          
        
       </ul> */}

      </Layout>

    </>
  )
}
//funcion que se ejecuta del lado del servidor en tiempo de construccion de la aplicacion
export const getStaticProps:GetStaticProps = async (ctx) => {

  const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
  })

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
console.log(data);

  return {
    props:{ pokemons:data}
  }
}


export default HomePage;