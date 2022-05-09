const configureListeners = () => {
    const images = document.querySelectorAll("img") 
    const imagesArry = Array.from(images);
console.log(imagesArry)
     for (var i = 0; i < images.length; i++) { 
         document.getElementById(imagesArry[i].id).addEventListener('mouseover', addOpacity, false)
         document.getElementById(imagesArry[i].id).addEventListener('mouseout',removeOpacity,false)       
       
    } 
}

const addOpacity = (event) => {
if (!this.classList.contains('dim')){ //dim is selected in CSS but not added in the HTML page. adding a class
    this.classList.add('dim')
}
    getProductInfo(event.target.id);     
}

const removeOpacity = (event) => {
    if (this.classList.contains('dim')) {
        this.classList.remove('dim')
    }


    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

const getProductInfo = (paintColor) => {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    const updatePrice = (colorName, price) =>
    {       
        let colorPrice = // select element with corresponding id
        // display price
        
        let color = // select element with corresponding id
        //display color name
    }
    
}

