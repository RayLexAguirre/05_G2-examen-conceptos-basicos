export default class Account {

    constructor(name, bank, nip){
        this.name = name;
        this.bank = bank;
        this.nip = nip;
        this.balance = 0;
    }

    deposit(amount, nip) {
        
       if(nip == this.nip){
        this.balance = this.balance + amount;
        }
        return this.balance;
        
    }

    withdraw(amount, nip){
        
        if((nip == this.nip)&&(this.balance >= amount)){
            
            this.balance = this.balance - amount; 
            
        }   
        return this.balance;
        }
    
        getAge(){
            let today = new Date();
            let dateDif = today - date;
            let dateRef = new Date(dateDif);
            let age = dateRef.getFullYear() - 1970;
    
            return age;
        }
    
        getDayOfBirth(){
            switch (date.getDay()) {
                case 0: return "Domingo";
                case 1: return "Lunes";
                case 2: return "Martes";
                case 3: return "Miercoles";
                case 4: return "Jueves";
                case 5: return "Viernes";
                case 6: return "Sábado";
                default: return "Error";
            }
        }
    
        getMonthOfBirth(){
            switch (date.getMonth()) {
                case 0: return "Enero";
                case 1: return "Febrero";
                case 2: return "Marzo";
                case 3: return "Abril";
                case 4: return "Mayo";
                case 5: return "Junio";
                case 6: return "Julio";
                case 7: return "Agosto";
                case 8: return "Septiembre";
                case 9: return "Octubre";
                case 10: return "Noviembre";
                case 11: return "Diciembre";
                default: return "Error";
            }
        }
        
        getBalance(date, nip){
            
            if(nip == this.nip){
                let fechaCom = this.getDayOfBirth() + " " + this.getDate() + " DE " + this.getMonthOfBirth() + " DEL " + this.getFullYear() + ",";
                let destino = this.name;
                
                }
            
        }


    }
