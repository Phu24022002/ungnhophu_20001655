// task 1, 2
var massMark = 78
var heightMark = 1.69
var massJohn = 92
var heightJohn = 1.95

function BMI(mass, height) {
    return mass / (height ** 2)
}
var markBMI = BMI(massMark, heightMark)
var johnBMI = BMI(massJohn, heightJohn)
var markHigherBMI = markBMI > johnBMI
if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`)
}

// task 3
var dolphins = [85, 54, 41]
var koalas = [23, 34, 27]

function avgScore(arr) {
    n = arr.length;
    sum = 0;
    for (i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum / n;
}

var avgDolphins = avgScore(dolphins);
var avgKoalas = avgScore(koalas);

if (avgDolphins > avgKoalas) {
    if (avgDolphins >= 100) {
        console.log('dolphins team winner')
    } else {
        console.log('no team win')
    }
} else if (avgKoalas > avgDolphins) {
    if (avgKoalas >= 100) {
        console.log('koalas team winner')
    } else {
        console.log('no team win')
    }
} else {
    if (avgDolphins >= 100) {
        console.log('draw')
    } else {
        console.log('no team win')
    }
}

// task 4
var build = 275;
var tip = build >= 50 && build <= 300 ? build * (15 / 100) : build * (20 / 100);
console.log(`The bill was ${build}, the tip was ${tip}, and the total value
${build + tip}
`)

// task 5
var calcAverage = (arr) => {
    n = arr.length;
    sum = 0;
    for (i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum / n;
}

var checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolhins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    } else {
        console.log('Ignore draws this time')
    }
}
var avgDolhins = calcAverage(dolphins)
var avgKoalas = calcAverage(koalas)
checkWinner(avgDolhins, avgKoalas)

// task 6
var calcTip = (value) => {
    return value >= 50 && value <= 300 ? value * (15 / 100) : value * (20 / 100)
}

console.log(calcTip(100))
var bills = [125, 555, 44]
var tips = []
var totals = []
for(let i = 0; i < bills.length; i++) {
    var tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(bills[i] + tip)
}

console.log(tips)
console.log(totals)

// task 7 
var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: (mass, height) => {
        return mass/height**2
    }
}
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: (mass, height) => {
        return mass/height**2
    }
}

if(mark.calcBMI(mark.mass, mark.height) < john.calcBMI(john.mass, john.height)) {
    console.log(`John's BMI ${john.calcBMI(john.mass, john.height)} is higher than Mark's ${mark.calcBMI(mark.mass, mark.height)}!`)
}
else {
    console.log(`Mark's BMI ${mark.calcBMI(mark.mass, mark.height)} is higher than John's ${john.calcBMI(john.mass, john.height)}!`)
}

// task 8
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
var tips = []
var totals = []
for(let i = 0; i < bills.length; i++) {
    var tip = calcTip(bills[i])
    tips.push(tip);
    totals.push(bills[i] + tip)
}
console.log(tips)
console.log(totals)
// use calcAverage task 5
var avg = calcAverage(totals)
console.log(avg)

// task 9
var temperatures = [17, 21, 23]
var printForecast = (arr) => {
    var rs = '...'
    for(let i = 0; i < arr.length; i++) {
        rs += ` ${arr[i]}oC in ${i} days ...`
    }
    console.log(rs)
}
printForecast(temperatures)

