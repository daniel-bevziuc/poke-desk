import React from 'react'
import { useQuery } from 'react-query'
import { PokemonService } from 'services/pokemon.service'

export const usePokeStats = (url: string, name: string) => {

  const { data: pokeStats } = useQuery('Get Poke Stats', () => PokemonService.getByName(name))

  return { pokeStats }
}