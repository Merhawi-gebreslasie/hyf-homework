function weatherClothes(temp){
   if(temp>15){
       return 'shorts and a t-shirt';
   }
   else if(temp>5&&temp<15){
       return 'soft Jacket and trouthers';

   }
   else{
       return 'hat ,winter Jacket,shoes and gloves';
   }
}

const clothesToWear0 = weatherClothes(18);
const clothesToWear1 = weatherClothes(10);
const clothesToWear2 = weatherClothes(0);
console.log(clothesToWear0); // Logs out: "shorts and a t-shirt"
console.log(clothesToWear1);
console.log(clothesToWear2);