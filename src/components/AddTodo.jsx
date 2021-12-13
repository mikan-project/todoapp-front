import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Center,
  Input,
  useToast,
} from '@chakra-ui/react';
import { addTodoList } from '../lib/index';

const AddTodo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todo, setTodo] = useState(null);
  const toast = useToast();

  const AddTodoToServer = async () => {
    const res = await addTodoList(todo);

    if (res.message === 'success!') {
      onClose();
      toast({
        title: '正常に追加されました',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: '追加に失敗しました',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Center mt="32px">
      <Button onClick={onOpen}>追加する</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e) => setTodo(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button variant="ghost" onClick={() => AddTodoToServer()}>
              追加する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default AddTodo;
