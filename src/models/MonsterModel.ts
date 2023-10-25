class MonsterModel {
    Name: string = '';
    Type: number = randomMonster();
    Level: number = 0;
    Exp: number = 0;
    DateOfBirth: string = new Date().toUTCString()
}

export default MonsterModel

const MonsterType: number = 5

function randomMonster(): number {
    return Math.floor(Math.random() * MonsterType) + 1;
}