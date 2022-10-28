/*Написать функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором — суммирует переданный параметр с тем, что передали первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28*/


(function () {
    function sum (val) {
        let temp = val;
        sum = function() {
            let arg = arguments[0] ? arguments[0] : 0;
            return temp = temp + arg;
        };
        return sum();
    }
    console.log(sum(5));
    console.log(sum(18));
    console.log(sum(97));
    console.log(sum(145));
    console.log(sum(456));

})();