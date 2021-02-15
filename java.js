'use strict'

function game() {
    var city = prompt('Guess what is my fav. city? Dubai , Germany , Italy , Jordan' , 'the city').toLocaleLowerCase();
    var answer;
    while (city !== 'germany') {
        city = prompt('Guess what is my fav. city? Dubai , Germany , Italy , Jordan');
    }
    if (city === 'germany') {
        answer = 'thats right';
        alert(answer);
    }

    return answer;
}

function sport(){
    var club = prompt('what is my fav. club? barca , real madrid , man city , man united').toLocaleLowerCase();
    var ans;
    while (club !== 'barca')
    {
        club = prompt('what is my fav. club? barca , real madrid , man city , man united');
    }
    if (club === 'barca')
    {
        ans = 'yes , thats right so i love you';
        alert(ans);
    }
    return ans;
}

