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
            price = ""
            colorName =""
            newPrice()                
            break;           
        case 'pn2':
            price = ""
            colorName =""
            newPrice()     
            break;            
        case 'pn3':
            price = ""
            colorName =""
            newPrice()   
            break;   
        case 'pn4':
            price = ""
            colorName =""
            newPrice()   
            break;   
        case 'pn5':
            price = ""
            colorName =""
            newPrice()        
            break;   
        case 'pn6':
            price = ""
            colorName =""
            newPrice()         
            break;   
        case 'pn7':
            price = ""
            colorName =""
            newPrice()  
            break;   
        case 'pn8':
            price = ""
            colorName =""
            newPrice()    
            break;   
        case 'pn9':
            price = ""
            colorName =""
            newPrice()  
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

