const token="asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";
const userURL="https://wedev-api.sky.pro/api/user";

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