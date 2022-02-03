function moveElement(boxToMove, newPosition) {
    return new Promise((resolve) => {
        boxToMove.addEventListener("transitionend", resolve);
        boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    });
}

function getElements() {
    const redBox = document.querySelector("ul.marks li:nth-child(1)");
    const blueBox = document.querySelector("ul.marks li:nth-child(2)");
    const greenBox = document.querySelector("ul.marks li:nth-child(3)");
    const span = document.querySelector('span');

    return {
        redBox,
        blueBox,
        greenBox,
        span
    }
}

function init() {

    const elements = getElements();

    const bluePromise = (x = 400, y = 300) => moveElement(elements.blueBox, { x, y });
    const redPromise = (x = 20, y = 300) => moveElement(elements.redBox, { x, y });
    const greenPromise = (x = 400, y = 20) => moveElement(elements.greenBox, { x, y });

    function thumbsUp(showBool) {
        elements.span.classList[showBool ? 'add' : 'remove']('shown')
    }

    async function reset() {
        await bluePromise(0, 0);
        await redPromise(0, 0);
        await greenPromise(0, 0);
    }

    async function translateOneByOne() {
        await bluePromise();
        await redPromise();
        await greenPromise();
    }

    async function translateAllAtOnce() {
        return Promise.all([bluePromise(), redPromise(), greenPromise()])
    }

    async function animateBoth() {
        await translateOneByOne();
        thumbsUp(true);
        await reset();
        thumbsUp(false);
        await translateAllAtOnce();
        thumbsUp(true);
    }

    animateBoth();

}

// Without this animation doesnt run after page refresh in Chrome??? Firefox works without.
setTimeout(() => {
    init();
})