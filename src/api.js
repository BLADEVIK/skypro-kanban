const token='ksdfsksdfjfsdjk';
const userUrl="https://wedev-api.sky.pro/api/user";

export async function login({login,password}){
    const response = await fetch(userURL + "/login",{
     method:"POST",
     body:JSON.stringify({
        login,
        password,
     }),
    });
    const date = await response.json();
    return date;
}