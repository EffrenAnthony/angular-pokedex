export interface PokemonApiResponse {
  count: number
  next: string
  previous: any
  results: Pokemon[]
}

export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDisplay {
  name: string
  url: string
  image: string
}
