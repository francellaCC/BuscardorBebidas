import React from 'react'
import useBebidas from '../hooks/useBebidas'
import { Row } from 'react-bootstrap'
import Bebidas from './Bebidas'

function ListadosBebidas() {

  const { bebidas} = useBebidas()
  return (
    <Row className='mt-5'>
      {
      
      bebidas.map(bebida =>(
        <Bebidas key={bebida.idDrink}  bebida={bebida}/>
      ))
      
      
      }
    </Row>
  )
}

export default ListadosBebidas
