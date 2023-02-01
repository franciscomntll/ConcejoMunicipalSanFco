import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import FormGaceta from "../Forms/FormGaceta";

const ModalFormGaceta = (props) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Añadir registro</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <FormGaceta />
        </ModalBody>
        <ModalFooter/>
      </ModalContent>
    </Modal>
  );
};

export default ModalFormGaceta;
