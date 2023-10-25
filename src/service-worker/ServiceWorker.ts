import MonsterModel from "../models/MonsterModel.js";
import { formatDuration, monsterFactory } from "../utils/Helper";
import { getMonster, setMonster } from "../utils/Storage";

chrome.action.setBadgeText({ 'text': '?' });
chrome.action.setBadgeBackgroundColor({ 'color': "#f6d7b1" });

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create({
    periodInMinutes: 2.0
  })
});

chrome.alarms.onAlarm.addListener(() => {
  getMonster().then((rs: MonsterModel) => {
    const monster = monsterFactory(rs);
    monster.Exp = new Date().getTime() - new Date(monster.DateOfBirth).getTime()
    setMonster(monster).then((res) => { res && UpdateMonster(monster.Exp); }
    )
  });
})

function UpdateMonster(exp: number) {
  let description = formatDuration(exp);
  chrome.action.setBadgeText({ 'text': description });
}