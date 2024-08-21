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
        // حرکت آرام به سمت موس
        document.addEventListener('mousemove', (event) => {
            const shapeRect = shape.getBoundingClientRect();
            const shapeX = shapeRect.left + shapeRect.width / 2;
            const shapeY = shapeRect.top + shapeRect.height / 2;
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            
            const dx = mouseX - shapeX;
            const dy = mouseY - shapeY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const moveX = dx / distance * 2; // Adjust speed here
            const moveY = dy / distance * 2; // Adjust speed here

            shape.style.left = `${parseFloat(shape.style.left) + moveX}px`;
            shape.style.top = `${parseFloat(shape.style.top) + moveY}px`;
        });
    }

    for (let i = 0; i < numberOfShapes; i++) {
        createShape();
    }
});
