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
            price = "$14.99"
            colorName ="LimeGreen"
            updatePrice(colorName, price)                
            break;           
        case 'pn2':
            price = "$11.14"
            colorName ="MediumBrown"
            updatePrice(colorName, price)     
            break;            
        case 'pn3':
            price = "$22.99"
            colorName ="RoyalBlue"
            updatePrice(colorName, price)   
            break;   
        case 'pn4':
            price = "$4.99"
            colorName ="SolidBlack"
            updatePrice(colorName, price)   
            break;   
        case 'pn5':
            price = "$8.22"
            colorName ="SolidCyan"
            updatePrice(colorName, price)        
            break;   
        case 'pn6':
            price = "$11.99"
            colorName ="SolidPurple"
            updatePrice(colorName, price)         
            break;   
        case 'pn7':
            price = "$13.42"
            colorName ="SolidRed"
            updatePrice(colorName, price)  
            break;   
        case 'pn8':
            price = "$21.98"
            colorName ="SolidWhite"
            updatePrice(colorName, price)    
            break;   
        case 'pn9':
            price = "$14.99"
            colorName ="SolidYellow"
            updatePrice(colorName, price)  
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

