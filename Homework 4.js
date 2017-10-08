//1st
const stars = function(starN) {
    if(starN === 1) {
        return '*';
    }
    else {
        return '*' + stars(starN - 1);
    }
};

const space = function(spaceN) {
    if(spaceN === 0) {
        return ' ';
    }
    else {
        return ' ' + space(spaceN - 1);
    }
};

const helper = function(starW,spaceN,starH) {
    if(starH === 1) {
        console.log(space(spaceN) + stars(starW));
    }
    else {
        console.log(space(spaceN) + stars(starW));
        helper(starW - 2, spaceN + 1, starH - 1);
    }
};

const triangleStars = function(starH) {
    helper(2*starH-1,0,starH);
};

triangleStars(5);

//2nd
const pow = function(base,n) {
    if(n === 1) {
        return base;
    }
    return base * pow(base,n-1);
}
console.log(pow(3,3));

//3rd
const helper = function(string,length) {
    if( length === 1) {
        return string[0];
    }
    return string[length-1]+ helper(string,length-1);
};
const reverse = function(string) {
    return helper(string,string.length);
};
console.log(reverse('hello'));

//4th
const stars = function(n) {
    if(n===1) {
        return '*';
    }
    else{
        return '*' + stars(n-1);
    }
};
const helper = function(width,height) {
    if(height===1) {
        console.log(stars(width))
    }
    else {
        console.log(stars(width));
        helper(width,height-1)
    }
};
const checkBoard= function(n) {
    helper(n,n);
};

checkBoard(3);






















