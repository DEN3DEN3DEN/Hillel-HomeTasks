
/*Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor".*/

function replaceString (string, pattern) {
    let st_pt = pattern.join('');
    return string.replace(new RegExp(`[${st_pt}]`, 'gi'), '');
}


console.log(replaceString('hello world', ['l','d']));