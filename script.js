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
        // حرکت تصادفی به صورت مداوم
        function randomMovement() {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            shape.style.transition = 'left 5s ease-in-out, top 5s ease-in-out';
            shape.style.left = `${x}px`;
            shape.style.top = `${y}px`;
        }

        // حرکت هر 5 ثانیه به موقعیت تصادفی
        setInterval(randomMovement, 5000);
    }

    for (let i = 0; i < numberOfShapes; i++) {
        createShape();
    }
});
