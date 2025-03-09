// tosh qaychi qogoz

const user = prompt("Tanlang: 1=Tosh, 2=Qaychi, 3=Qog'oz");
const computer = ((Math.random() * 3) | 0) + 1;
console.log(computer);

switch (user) {
  
  case "1":
    switch (computer) {
      case 1:
        console.log(`Yutdingiz\nUser: ${user}\n Computer: ${computer}`);
        break;
      case 2:
        console.log(
          `Yutqazdingiz\nUser: ${user == 1 ? "Tosh" : " "}${
            user == 2 ? "Qaychi" : "    "
          }${user == 3 ? "Qog'oz" : "   "}\n Computer: ${computer}`
        );
        break;
      case 3:
        console.log(`Durang`);
        break;

      default:
        console.log("Notogri qiymat kiritdingiz");
        break;
    }
    break;
  case "2":
    switch (computer) {
      case 1:
        console.log(`Yutdingiz\nUser: ${user}\n Computer: ${computer}`);
        break;
      case 2:
        console.log(
          `Yutqazdingiz\nUser: ${user == 1 ? "Tosh" : " "}${
            user == 2 ? "Qaychi" : "    "
          }${user == 3 ? "Qog'oz" : "   "}\n Computer: ${computer}`
        );
        break;
      case 3:
        console.log(`Durang`);
        break;

      default:
        console.log("Notogri qiymat kiritdingiz");
        break;
    }
    break;
  case "3":
    switch (computer) {
      case 1:
        console.log(`Yutdingiz\nUser: ${user}\n Computer: ${computer}`);
        break;
      case 2:
        console.log(
          `Yutqazdingiz\nUser: ${user == 1 ? "Tosh" : " "}${
            user == 2 ? "Qaychi" : "    "
          }${user == 3 ? "Qog'oz" : "   "}\n Computer: ${computer}`
        );
        break;
      case 3:
        console.log(`Durang`);
        break;

      default:
        console.log("Notogri qiymat kiritdingiz");
        break;
    }
    break;
}







// SANA

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1; 
// const day = now.getDate();

// console.log(`Bugungi sana: ${year}-${month}-${day}`);




// REAL VAQT



// setInterval(() => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
    
//     console.clear(); 
//     console.log(`Real vaqt: ${hours}:${minutes}:${seconds}`);
// }, 1000);



// Kabisa yili

// const year = prompt("Yilni kiriting: ");

// if (year % 4 == 0){
//     if (year % 100 == 0){
//         if (year % 400 == 0){
//             console.log(`Kabisa yili`);
//         } else {
//             console.log(`Kabisa yili emas`);
//         }
// } else {
//     console.log(`Kabisa yili emas`);
//     }
// }