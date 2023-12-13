import Database from '../data/database.json'
import MonsterModel from '../models/MonsterModel';


export function MonsterFactory(monster: MonsterModel): Promise<MonsterModel> {
    if (new Date(monster.DateOfBirth).getUTCDate() !== new Date().getUTCDate() || monster.Id === '' || monster.Id === null)
        return InitBabyMonster();
    return Promise.resolve(monster);
}

export function GetMonsterById(id: string, exp: number): Promise<MonsterModel> {
    const m = Database.monsters.find(x => x.Id === id) as MonsterModel
    m.Exp = exp
    return Promise.resolve(m)
}

export function UpdateMonster(monster: MonsterModel, exp: number): Promise<MonsterModel> {
    monster.Exp = exp
    if (monster.Exp < monster.Target || monster.Evolutions.length === 0)
        return Promise.resolve(monster)
    return EvoMonster(monster, exp)
}

function InitBabyMonster(): Promise<MonsterModel> {
    let monster = Database.monsters.find(x => x.Type === 0) as MonsterModel
    monster.DateOfBirth = new Date().toUTCString();
    return Promise.resolve(monster)
}

function EvoMonster(monster: MonsterModel, exp: number): Promise<MonsterModel> {
    return GetMonsterById(monster.Evolutions[GetRandomMonster(monster.Evolutions.length)], exp);
}

function GetRandomMonster(total: number): number {
    return Math.floor(Math.random() * total);
}