

console.log('Series duration of my life');
const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  }
]

    
const hoursInDay=24;
const hoursInYear=8765.82;
const hoursIn80Years=hoursInYear*80;

let result=(((seriesDurations[0].days*hoursInDay)+seriesDurations[0].hours)/(hoursIn80Years))*100;
let round1=result.toFixed(2);
let result1='Game of thrones took '+round1+'% of my life';
console.log(result1);
result=((seriesDurations[1].days*hoursInDay)+seriesDurations[1].hours)*100/(hoursIn80Years);
 let round2 =result.toFixed(3);
let result2='Soprano took '+round2+'% of my life';
console.log(result2);

  result=((seriesDurations[2].days*hoursInDay)+seriesDurations[2].hours)*100/(hoursIn80Years);
    let round3=result.toFixed(3);
     let result3='The Wire took '+ round3+'% of my life';
console.log(result3);


        