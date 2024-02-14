const token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";

const API_URL_USER = "https://wedev-api.sky.pro/api/user";
const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function login({ login, password }) {
  const response = await fetch(API_URL_USER + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error(alert("Неверный логин или пароль"));
  }
  const date = await response.json();
  return date;
}
export async function getTasks() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok === 200) {
    throw new Error(alert("Сервер не доступен"));
  }
  const date = await response.json();
  return date;
}

export async function RegisterUser({ login, name, password }) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error(alert("Пользователь с таким логином уже сущеcтвует"));
  }

  const user = await response.json();
  return user;
}

export async function createTasks(inputData) {
 
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(inputData),
  });
  if (response.status === 401) {
    throw new Error("Ошибка авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function deleteTask( id ) {
    const response = await fetch(API_URL + '/' + id, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    if (response.status >= 400) {
        throw new Error("Ошибка удаления")
    } else {
        const data = await response.json();
        return data;
    }
}
