var prices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
const body = document.querySelector('body');
const ul = document.querySelector('#mera');
for (let i = 0; i < prices.length; i++) {
  const price = prices[i];
  const list = document.createElement('li');
  list.innerHTML = 'price=' + price;
  ul.appendChild(list);
}


function averageCal(prices) {
  //find an averrage  of an array
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
    console.log(sum);
  }
  let average = sum / prices.length;
  console.log(average);

  const p = document.createElement('h3');
  p.innerHTML = 'average of the houseprice is ' + average;
  body.appendChild(p);
  return average;
}
//find the median of an array!
function medianCal(prices) {
  if (prices.length % 2 === 0) {
    let x = prices.length / 2;
    let y = prices[x];
    let z = prices[x - 1];
    let median = (z + y) / 2;
    console.log(median);
    const para = document.createElement('h3');
    para.innerHTML = 'median of the houseprice is ' + median;
    body.appendChild(para);

    return median;

  } else {
    var x = Math.floor(prices.length / 2);
    let median = prices[x];
    const para = document.createElement('h3');
    para.innerHTML = 'median of the houseprice is ' + median;
    body.appendChild(para);


    return median;

  }

  
}
console.log(medianCal(prices));
console.log(averageCal(prices));
