import MonsterModel from "../models/MonsterModel"


const key = 'monster'
export function getMonster(): Promise<MonsterModel> {
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (res: any) => {
            resolve(res[key] ? res[key] : new MonsterModel())
        })
    })
}

export function setMonster(monster: MonsterModel): Promise<boolean> {
    return new Promise((resolve) => {
        chrome.storage.local.set({ 'monster': monster }, () => {
            resolve(true)
        })
    })
}