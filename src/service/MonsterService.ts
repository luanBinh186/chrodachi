import Database from '../data/database.json'

export function getMonsterById(id: string){
    return new Promise((resolve) => {
        resolve(Database.monsters.filter(x => x.id === id)[0])
    })
}

export function InitBabyMonster() {
    return new Promise((resolve) => {

    })
}