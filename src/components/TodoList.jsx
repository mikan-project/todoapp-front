import { useEffect, useState } from 'react';
import { Box, Select, Flex, useToast } from '@chakra-ui/react';
import { getAllLists, changeTodoValues } from '../lib/index';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const toast = useToast();

  const choices = ['not started', 'doing', 'done'];

  const fetchLists = async () => {
    const res = await getAllLists();
    setTodos(res);
  };

  const changeStatus = async (e, todo) => {
    const res = await changeTodoValues(todo.id, todo.title, e.target.value);
    if (res.message === 'success!') {
      toast({
        title: '正常に更新されました',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: '更新されませんでした',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    fetchLists();
    setInterval(() => {
      fetchLists();
    }, 10000);
  }, []);

  if (todos) {
    return (
      <Box>
        <AddTodo />
        {todos.map((todo) => {
          return (
            <Flex
              m="16px"
              p="16px"
              bg="yellow.100"
              borderRadius="4px"
              key={todo.title}
            >
              <Box>{todo.title}</Box>
              <Box flex="1" />
              <Select
                defaultValue={todo.status}
                onChange={(e) => changeStatus(e, todo)}
                w="256px"
              >
                {choices.map((choice) => (
                  <option value={choice} key={choice}>
                    {choice}
                  </option>
                ))}
              </Select>
            </Flex>
          );
        })}
      </Box>
    );
  }

  return <></>;
};

export default TodoList;
