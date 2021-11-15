export class Team {


    constructor(
        private _id: number,
        private _name: string,
        private _photo: string,
        private _trainderId: number,
        private _pokemonId1: number,
        private _pokemonId2: number,
        private _pokemonId3: number,
        private _pokemonId4: number,
        private _pokemonId5: number,
        private _pokemonId6: number
    ) { };

    public get pokemonId6(): number {
        return this._pokemonId6;
    }
    public set pokemonId6(value: number) {
        this._pokemonId6 = value;
    }
    public get pokemonId5(): number {
        return this._pokemonId5;
    }
    public set pokemonId5(value: number) {
        this._pokemonId5 = value;
    }
    public get pokemonId4(): number {
        return this._pokemonId4;
    }
    public set pokemonId4(value: number) {
        this._pokemonId4 = value;
    }
    public get pokemonId3(): number {
        return this._pokemonId3;
    }
    public set pokemonId3(value: number) {
        this._pokemonId3 = value;
    }
    public get pokemonId2(): number {
        return this._pokemonId2;
    }
    public set pokemonId2(value: number) {
        this._pokemonId2 = value;
    }
    public get pokemonId1(): number {
        return this._pokemonId1;
    }
    public set pokemonId1(value: number) {
        this._pokemonId1 = value;
    }
    public get trainderId(): number {
        return this._trainderId;
    }
    public set trainderId(value: number) {
        this._trainderId = value;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

}

export interface TeamDTO {
    id:number; 
    name:string;
    photo:string;
    trainerId:number;
    pokemonId1:number;
    pokemonId2:number;
    pokemonId3:number;
    pokemonId4:number;
    pokemonId5:number;
    pokemonId6:number;
}