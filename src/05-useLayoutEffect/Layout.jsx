import { useFetch, userCounter } from "../hooks";
import { LoadingMessage, PokemonCard } from "./../03-examples";

export const Layout = () => {

   const {counter, decrement, increment} = userCounter(1);
   const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`); 

  return (
    <>
        <h1>Información de Pokémon</h1>
        <hr/>

        { isLoading 
            ? <LoadingMessage />
            : (
                <PokemonCard 
                    id={data.id} 
                    name={data.name}
                    sprites={[
                       data.sprites.front_default,
                       data.sprites.front_shiny,
                       data.sprites.back_default,
                       data.sprites.back_shiny,
                    ]}
                />
              )  
        }

        {/* <pre>{ JSON.stringify(data,null,2) }</pre> */}
        {/* <h2>{ data?.name }</h2> */}

        <button onClick={()=> counter>1 ? decrement():null}
            className="btn btn-primary mt-2">
            Anterior
        </button>
        <button onClick={()=>increment()} className="btn btn-primary mt-2">
            Siguiente
        </button>


    </>
  )
}
