/*this section is about how we can create a method by various methods*/


// const square= (x)=>{
//     return x*x
// }

// const cube = (x)=>x*x*x

// function c(x){
//    return x*x
// }
// console.log(c(3))

const event1 = {
    name: 'Birthday Party',
    guestList: ['AJ','AB','AK'],
    printGuestList (){
        console.log('Guest list for '+ this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest+' is attending the '+this.name)
        })
    }
}

event1.printGuestList()