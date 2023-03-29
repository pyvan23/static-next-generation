import { Layout } from '../components/layout/Layout';
import { NextPage, GetStaticProps } from "next"
import axios from 'axios';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import Image from 'next/image';

interface HomePageProps {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<HomePageProps> = ({ pokemons }: HomePageProps) => {


  return (
    <>
      <Layout title="Listado">
        <ul>
          {pokemons.map((pokemon: SmallPokemon) => (
            <li key={pokemon.name}>{pokemon.url} </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}
//funcion que se ejecuta del lado del servidor en tiempo de construccion de la aplicacion

export const getStaticProps: GetStaticProps = async (ctx) => {

  const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
  })

  const { data } = await pokeApi.get<PokemonListResponse>("/ability/?limit=20&offset=20")

  const id= data.results.map(i=>{
    {
      name: i.name;
      url: i.url
    }


  })
  console.log(id);



  //  const url = await pokeApi.get<PokemonListResponse>(`/https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)

  // const resp = await pokeApi.get<PokemonListResponse>(`/pokemon/${id}}`)
  
  return {
    props: {
      pokemons: data.results,
    }
  }
}


export default HomePage;