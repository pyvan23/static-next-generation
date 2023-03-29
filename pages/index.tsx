import { Layout } from "../components/layout/Layout";
import { NextPage, GetStaticProps } from "next";
import axios from "axios";
import {
  pokemon,
  PokemonListResponse,
  SmallPokemon,
} from "../interfaces/pokemon-list";
import Image from "next/image";

interface HomePageProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }: HomePageProps) => {
  return (
    <>
      <Layout title="Listado">
        <ul>
          {pokemons.map((poke) => (
            <li key={poke.name}> {poke.name}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
};
//funcion que se ejecuta del lado del servidor en tiempo de construccion de la aplicacion

export const getStaticProps: GetStaticProps = async (ctx) => {
  const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
  });

  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=20");
  
  //   return smallPokemon.map((poke) => {
  //   const pokeA = poke.url.split("/");
  //   const id = pokeA[6];
  //   const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}id.png`;
  //   console.log(pic);
    
  // });

  
  

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default HomePage;
