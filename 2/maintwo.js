//Ejercio 2
 alert('ejercicio 2')
const pregunta2 = confirm('¿Quieres comprar un helado?')
 if (pregunta2){
    
    const pregunta3 = confirm('¿Quieres añadir un topping a tu helado?')
    
           if(pregunta3){
              let topi = 0
            do {
                topi = prompt ('Digita el número con la opción que deseas:\n1. El topping de oreo cuesta 1€ \n2. El topping de KitKat cuesta 1.50€ \n3. El topping de brownie cuesta 0.75€ \n4. El topping de lacasitos cuesta 0.95€ \n5. No encuentro el topping de mi gusto')
               switch (topi) {
                case '1': alert('Seleccionaste Oreo el valor total de tu helado es 2.90€')
                 break;
                 case '2':alert('Seleecionaste KitKat el valor de tu helado es 3.4€')
                break;
                case '3': alert('Seleccionaste brownie el valor de tu helado es 2.65€')
                break;
                 case '4':alert('Seleccionaste lacasitos el valor de helado es 2.85€')
                 break;
                case '5':alert('No tenemos este topping, lo sentimos. tu Helado cuesta 1.90€')
                 break;
                default:alert('Seleccionaste una opción no valida, vuelve a seleccionar el topping')
                 break;
             } 
            
              }while (topi>=6 || topi<=0); 
            
           } else{
                     alert('El Helado te cuesta 1.90€')
                 }  
             } else{
    alert('Gracias por vistarnos, cuando quieras un helado vuelve :)')
 }