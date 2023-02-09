import axios, { AxiosResponse } from 'axios';
import { PokemonResults } from './pokemon.types';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

const responseBody = (response: AxiosResponse) => response.data;
const headers = {
  'Content-Type': 'application/json',
}

const requests = {
  get: (url: string) => instance.get(url, { headers }).then(responseBody),
};

export const PokemonService = {
  getAll: (): Promise<PokemonResults> => requests.get(`?limit=151`),
  getByName: (name: string): Promise<any> => requests.get(`/${name}`),
}