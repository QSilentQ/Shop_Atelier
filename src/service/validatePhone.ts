// Функция проверяющая правильность формата телефонного номера
export default function validatePhone(phone:string):string | boolean{
    try{
        if((phone.slice(0,3) === "+79" || phone.slice(0,3) === "+89" ) && phone.length === 12){
            console.log(phone);
            return phone
        }else if((phone.slice(0,2) === "79" || phone.slice(0,2) === "89") && phone.length === 11){
            console.log( "+" + phone);
            return "+" + phone
        }else{
            return false
        }
    }catch{
        return false
    }
}
