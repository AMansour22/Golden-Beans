document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', () => {
        const nutName = item.querySelector('h2').innerText;
        const imgSrc = item.querySelector('img').src;
        let nutDescription = '';

        // Check the nut name and set the description accordingly
        switch (nutName) {
            case 'Pine Nuts':
                nutDescription = 'Pine nuts, which stand out with their satiating properties, have been preferred as a symbol of health from past to present. It is a rich source of vitamins and minerals, containing zinc, magnesium, vitamin E, and manganese. The nutrient source, which is effective in preventing constipation, can make you feel strong and energetic.';
                break;
            case 'Almonds':
                nutDescription = 'Almonds are a nutrient-rich nut, offering a variety of health benefits. Packed with vitamin E, magnesium, and antioxidants, they can help lower cholesterol, improve heart health, and provide a boost of energy.';
                break;
            case 'Cashews':
                nutDescription = 'Cashews are rich in healthy fats, protein, and important vitamins and minerals. They help improve heart health, aid in weight management, and support the immune system.';
                break;
            case 'Antep Pistachios':
                nutDescription = 'Pistachios are full of antioxidants, fiber, and healthy fats. They help lower cholesterol levels, aid in digestion, and provide energy throughout the day.';
                break;
            case 'Siirt Pistachios':
                nutDescription = 'Siirt Pistachios - The Flavor Heritage of Southeast Turkey. Siirt pistachios, grown in the warm climate and fertile lands of Siirt, stand out with their unique aroma and thin shells. As a natural source of protein and energy, this extraordinary pistachio is a gift from Turkish soil.';
                break;
            case 'Walnuts':
                nutDescription = 'Walnuts are an excellent source of omega-3 fatty acids, antioxidants, and protein. They promote heart health, reduce inflammation, and support brain function.';
                break;
            case 'Peanuts':
                nutDescription = 'Peanuts are a popular legume packed with protein, healthy fats, and essential vitamins. They help with muscle building, promote healthy skin, and provide long-lasting energy.';
                break;
            case 'Hazelnuts':
                nutDescription = 'Hazelnuts are rich in vitamin E, healthy fats, and antioxidants. They promote heart health, improve skin health, and provide a boost of energy.';
                break;
            case 'Dried Apricots':
                nutDescription = 'Dried apricots are high in vitamins A and C, iron, and fiber. They support digestive health, boost immunity, and improve skin health.';
                break;
            case 'Dried Figs':
                nutDescription = 'Dried figs are an excellent source of fiber, potassium, and antioxidants. They promote digestion, support bone health, and help regulate blood sugar levels.';
                break;
            default:
                nutDescription = 'No description available.';
        }

        // Display the SweetAlert2 modal with dynamic content
        Swal.fire({
            title: nutName,
            text: nutDescription,
            imageUrl: imgSrc, // Use the dynamic image URL from the clicked element
            imageHeight: 300,
            imageWidth: 300,
            confirmButtonText: 'Ok',
            customClass: {
                popup: 'custom-popup' // Custom class for further styling if needed
            }
        });
    });
});


