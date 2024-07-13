document.addEventListener('DOMContentLoaded', () => {
    const imagesData = [
        {
            src: 'img/image2.jpg',
            products: [
                { top: '30%', left: '20%', name: 'KALLAX Shelving unit', price: 'Rs. 12,990' },
                { top: '50%', left: '40%', name: 'Desk', price: 'Rs. 7,500' },
                { top: '70%', left: '60%', name: 'Chair', price: 'Rs. 5,800' },
                { top: '40%', left: '70%', name: 'Plant', price: 'Rs. 1,200' },
                { top: '80%', left: '50%', name: 'Basket', price: 'Rs. 900' }
            ]
        },
        {
            src: 'img/image1.jpg',
            products: [
                { top: '20%', left: '30%', name: 'Shelf', price: 'Rs. 10,990' },
                { top: '60%', left: '40%', name: 'Lamp', price: 'Rs. 2,500' },
                { top: '80%', left: '70%', name: 'Table', price: 'Rs. 15,800' }
            ]
        },
        {
            src: 'img/image3.jpg',
            products: [
                { top: '30%', left: '60%', name: 'Lamp', price: 'Rs. 10,990' },
                { top: '60%', left: '40%', name: 'Table', price: 'Rs. 2,500' },
                { top: '80%', left: '70%', name: 'Chair', price: 'Rs. 15,800' }
            ]
        }
        // Add more image data objects as needed
    ];

    const imagesContainer = document.querySelector('.images-container');
    const tooltip = document.getElementById('tooltip');

    imagesData.forEach(imageData => {
        const container = document.createElement('div');
        container.classList.add('container');

        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = 'Product Image';
        img.classList.add('product-image');
        container.appendChild(img);

        imageData.products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.style.top = product.top;
            productDiv.style.left = product.left;
            productDiv.setAttribute('data-name', product.name);
            productDiv.setAttribute('data-price', product.price);
            container.appendChild(productDiv);

            productDiv.addEventListener('mouseover', () => {
                tooltip.innerHTML = `<strong>${product.name}</strong><br>${product.price}`;
                tooltip.style.display = 'block';
                tooltip.style.top = `${productDiv.offsetTop}px`;
                tooltip.style.left = `${productDiv.offsetLeft + 20}px`;
            });

            productDiv.addEventListener('mouseout', () => {
                tooltip.style.display = 'none';
            });

            productDiv.addEventListener('mousemove', (e) => {
                tooltip.style.top = `${e.pageY - 40}px`;
                tooltip.style.left = `${e.pageX + 20}px`;
            });
        });

        imagesContainer.appendChild(container);
    });
});
