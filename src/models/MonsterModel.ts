class MonsterModel {
    Id: string = ''
    Name: string = '';
    Type: number = 0;
    Level: number = 0;
    PreExp: number = 0;
    Exp: number = 0;
    Target: number = 0;
    Evolutions: string[] = [];
    DateOfBirth: string = new Date().toUTCString()
}

export default MonsterModel