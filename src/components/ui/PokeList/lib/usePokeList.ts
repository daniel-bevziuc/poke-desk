import React from 'react'
import { useQuery } from 'react-query'
import { PokemonService } from 'services/pokemon.service'

export const usePokeList = () => {
  const { isLoading, data } = useQuery('get poke list', () => PokemonService.getAll());

  return { isLoading, data }
}