import { useRef, useState } from "react"
import { v4 }  from 'uuid'
import { AddButton, Container, Product, TrashButton } from "./styles"


function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliqueiNoButao() {
    setProdutos([{id: v4(), nome: inputRef.current.value}, ...produtos])
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))
  }


  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoButao}>Adicionar</AddButton>

      {produtos.map((produto) =>(
        <Product key={produto.id}>
           <p>{produto.nome}</p>
           <button onClick={() => deletarProduto(produto.id)}>🗑️</button>
        </Product>
      ))}
    </Container>
  )
}


export default Home