const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0
    },
    {
        title:'Arrow',
        days: 8,
      hours: 2,
      minutes: 30
    },
    {
        title:'Shooter',
        days: 9,
      hours: 0,
      minutes: 12
    },
    {
        title:'Prison break',
        days: 11,
      hours: 18,
      minutes: 12
    },
    
{
    title:'The last ship',
    days: 13,
      hours: 8,
      minutes: 28
},
{
    title:'Lost',
    days: 17,
      hours: 2,
      minutes: 28
}
  ];

  function seriesMov(){

      let persentage=0;
    for(let i=0;i<seriesDurations.length;i++){

          const dayToMinutes=seriesDurations[i].days*(24)*60;
          const hourToMinutes=seriesDurations[i].hours*60;
          const MinutesIn80Year=80*525600;
          
     persentage=(dayToMinutes+hourToMinutes+seriesDurations[i].minutes)/(MinutesIn80Year/100);

    console.log( seriesDurations[i].title+' took '+persentage.tofixed(3)+'%'+ 'of my life');
   
      }
      

      return true; 
  }
  seriesMov(); 
