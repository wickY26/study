import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

interface ModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

export default function FilterModal({
  isOpen,
  onOpen,
  onOpenChange,
}: ModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Filter Universities</ModalHeader>
              <ModalBody>
                <p>
                  Filter Option
                </p>
                <p>
                  Filter Option
                </p>
                <p>
                  Filter Option
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
