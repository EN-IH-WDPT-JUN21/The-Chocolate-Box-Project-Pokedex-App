
export class Trainer {
   
    constructor(
        private _id: number,
        private _name: string,
        private _age: number,
        private _hobby: string,
        private _photo: string,
        private _favouritePokemonId: number,
        private _teamId: number
    ){}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    public get hobby(): string {
        return this._hobby;
    }
    public set hobby(value: string) {
        this._hobby = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get favouritePokemonId(): number {
        return this._favouritePokemonId;
    }
    public set favouritePokemonId(value: number) {
        this._favouritePokemonId = value;
    }
    public get teamId(): number {
        return this._teamId;
    }
    public set teamId(value: number) {
        this._teamId = value;
    }
}

export interface TrainerDTO {
     id: number,
     name: string,
     age: number,
     hobby: string,
     photo: string,
     favouritePokemonId: number,
     teamId: number
}