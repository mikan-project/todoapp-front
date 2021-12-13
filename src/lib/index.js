const BaseURL = 'https://trello-server-331705-xxe5t7bbba-an.a.run.app/api';

export const getAllLists = async () => {
  const res = await fetch(`${BaseURL}/todos`, {
    method: 'GET',
  });

  return res.json();
};

export const addTodoList = async (title) => {
  const data = {
    title: title,
  };
  const res = await fetch(`${BaseURL}/todos`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return res.json();
};

export const changeTodoValues = async (id, title, status) => {
  const data = {
    status: status,
    title: title,
  };

  const res = await fetch(`${BaseURL}/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  return res.json();
};
