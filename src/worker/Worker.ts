import MonsterModel from "../models/MonsterModel";
import { MonsterFactory, UpdateMonster } from "../service/MonsterService";
import { FormatDuration } from "../utils/Helper";
import { GetMonster, SetMonster } from "../utils/Storage";

chrome.action.setBadgeText({ 'text': '0:00' });
chrome.action.setBadgeBackgroundColor({ 'color': "#f6d7b1" });

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create({periodInMinutes: 1.0})
});

chrome.alarms.onAlarm.addListener(() => {
  GetMonster().then((rs: MonsterModel) => {
    MonsterFactory(rs).then(monster => {
      const exp = new Date().getTime() - new Date(monster.DateOfBirth).getTime()
      UpdateMonster(monster, exp)
        .then(monster => SetMonster(monster)
          .then(rs => UpdateBadge(rs)))
    });
  });
})

function UpdateBadge(monster: MonsterModel) {
  chrome.action.setBadgeText({ 'text': FormatDuration(monster.Exp) });
}