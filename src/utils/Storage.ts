import MonsterModel from "../models/MonsterModel"

const key = 'monster'
export function GetMonster(): Promise<MonsterModel> {
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (res: any) => {
            resolve(res[key] ? res[key] : new MonsterModel())
        })
    })
}

export function SetMonster(monster: MonsterModel): Promise<MonsterModel> {
    return new Promise((resolve) => {
        chrome.storage.local.set({ 'monster': monster }, () => {
            resolve(monster)
        })
    })
}