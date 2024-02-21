import { setAdmno } from "../../../global";


// export function verifyLoginDetails (userId, pass) {
//     const fetchData = async () => {
//         const response = await fetch('http://localhost:8081/loginDetails');
//         const result = await response.json();
//         result.forEach(each => {
//             if (each.uid === userId && each.pass === pass) {
//                 setAdmno(each.admno);
//                 console.log(1)
//                 return true;
//             }
//         });
//     }

//     async function ifOk () {
//         const isValid = await fetchData();


//     }
//     if (fetchData()) return true;
// }


export async function verifyLoginDetails (userId, pass) {
    const response = await fetch('http://localhost:8081/loginDetails');
    const result = await response.json();
    result.forEach(each => {
        if (each.uid === userId && each.pass === pass) {
            setAdmno(each.admno);
            return true;
        }
    })
}