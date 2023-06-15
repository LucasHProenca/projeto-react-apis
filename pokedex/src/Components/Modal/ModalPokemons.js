import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
  } from '@chakra-ui/react'
import { useContext } from 'react'
import { globalContext } from '../../GlobalState/GlobalStateContext'
import { ContainerModal, Titulo} from './modalPokemonsStyle'

 export function ModalPokemons() {
    const context = useContext(globalContext)
    const {pokemonModalIsOpen, setPokemonModalIsOpen, action} = context
    return (
      <>
        <Modal size={"2xl"} isOpen={pokemonModalIsOpen} onClose={() => setPokemonModalIsOpen(false)}>
          <ModalOverlay />
          <ModalContent >
            <ModalCloseButton/>
            <Flex
            h={"25rem"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            >
                {action === 0 ? 
            <ContainerModal>
                <Titulo>Gotcha!</Titulo>
                <p>O pokemon foi adicionado a sua Pokedex</p>
            </ContainerModal>   
            : 
            <ContainerModal>
                <Titulo>Oh, no!</Titulo>
                <p>O pokemon foi removido da sua Pokedex</p>
            </ContainerModal> 
            }
            </Flex>
          </ModalContent>
        </Modal>
        </>
    )
  }