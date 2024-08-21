document.addEventListener('DOMContentLoaded', () => {
    const shapesContainer = document.querySelector('.shapes-container');
    const numberOfShapes = 20; // تعداد اشکال

    function createShape() {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.width = `${Math.random() * 50 + 20}px`;
        shape.style.height = shape.style.width;
        shape.style.left = `${Math.random() * window.innerWidth}px`;
        shape.style.top = `${Math.random() * window.innerHeight}px`;
        shapesContainer.appendChild(shape);
        moveShape(shape);
    }

    function moveShape(shape) {
        shape.addEventListener('mouseover', () => {
            const newX = Math.random() * window.innerWidth;
            const newY = Math.random() * window.innerHeight;
            shape.style.transition = 'left 0.5s, top 0.5s';
            shape.style.left = `${newX}px`;
            shape.style.top = `${newY}px`;
        });
    }

    for (let i = 0; i < numberOfShapes; i++) {
        createShape();
    }
});
