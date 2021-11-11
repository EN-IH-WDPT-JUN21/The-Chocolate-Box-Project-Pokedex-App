export interface Pokemon {
    id: number,
    name: string,
    type: string,
    spriteUrl: string,
    imageUrl: string,
    hp: number,
    attack: number,
    defence: number,
    specialAttack: number,
    specialDefence: number,
    speed: number,
    abilityName1: string,
    abilityDetail1: string,
    abilityName2: string,
    abilityDetail2: string
}

export interface PokemonListDTO {
    results: PokemonListDTOResult[]
}

export interface PokemonListDTOResult {
    name: string,
    url:string  //URL https://pokeapi.co/api/v2/pokemon/{id}
}


export interface PokemonDTO {
    id: number,
    name: string,
    abilities: [
        {
            ability: {
                name: string,
                url: string  // URL of the ability, needed to get the detail
            }
        },
        {
            ability: {
                name: string,
                url: string  // URL of the ability, needed to get the detail
            }
        }
    ],
    sprites: {
        front_default: string,
        other: {
            dream_world: {
                front_default: string
            }
        }
    },
    stats: [  // ArrayLength = 6
        {
            base_stat: number,
            stat: {
                name: string //hp
            }
        },
        {
            base_stat: number,
            stat: {
                name: string //attack
            }
        },
        {
            base_stat: number,
            stat: {
                name: string //defense
            }
        },
        {
            base_stat: number,
            stat: {
                name: string //special-attack
            }
        },
        {
            base_stat: number,
            stat: {
                name: string //special-defense
            }
        },
        {
            base_stat: number,
            stat: {
                name: string //speed
            }
        },
    ]
}



export interface PokemonAbilityDTO {
    effect_entries: [
        {
            effect: string  // [1] of the array, Detail of the Ability
        }
    ]
}



export interface PokemonTypeDto {
    types: [
        {
            type: {
                name:string
            }
        },
        {
            type: {
                name:string
            }
        },
        {
            type: {
                name:string
            }
        }
    ]
}