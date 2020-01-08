
const redBox = document.querySelector('ul.marks li:nth-child(1)')
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');

// one by one
function translateOneByOne() {
    return new Promise(resolve => {
    const oneByOne=moveElement(redBox, { x: 20, y: 300 })
            .then(() => {
                moveElement(blueBox, { x: 400, y: 300 })
                .then(() => {
                    moveElement(greenBox, { x: 400, y: 20 })
                    .then(() => {
                        console.log('Element has been moved')


                    });
                });
            });
            resolve(oneByOne);
    });
}
translateOneByOne().then(res => console.log(res));

// All at once
function translateAllAtOnce() {
    Promise.all([moveElement(redBox, { x: 20, y: 300 }),
    moveElement(blueBox, { x: 400, y: 300 }),
    moveElement(greenBox, { x: 400, y: 20 })])
        .then(() => console.log('showen at once'))

}
translateAllAtOnce();