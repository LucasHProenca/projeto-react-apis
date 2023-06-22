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
import { ContainerModal, Titulo, PokebolaAbrindo} from './modalPokemonsStyle'
import pokeball from "./midiaModal/pokeball.gif"
import pokeballopening from "./midiaModal/pokeballopening.gif"

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
            style={{borderRadius: "0.8rem"}}
            h={"30vh"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            >
                {action === 0 ? 
            <ContainerModal>
              <img src={pokeball}/>
                <Titulo><strong>Gotcha!</strong></Titulo>
                <p>O pokémon foi adicionado a sua Pokédex.</p>
            </ContainerModal>   
            : 
            <ContainerModal>
              <PokebolaAbrindo src={pokeballopening}/>
                <Titulo><strong>Oh, no!</strong></Titulo>
                <p>O pokémon foi removido da sua Pokédex.</p>
            </ContainerModal> 
            }
            </Flex>
          </ModalContent>
        </Modal>
        </>
    )
  }