import Table from "../../components/Table"
import { BtnNovo, Button } from "../../components/Button"
import { Grid, NewGrid, Header, Td, Tr } from "../../components/Grid"

const Example: React.FC = () => {

  const dados = [
    {nome: 'Levi', funcao: 'Desenvolvedor', modulo: 'ReactJS'},
    {nome: 'Gugu', funcao: 'Agiota', modulo: 'Custos'},
    {nome: 'Harry', funcao: 'Tudo e mais', modulo: 'um pouco'},
  ]

  return (
    <main className="w-full flex justify-center mt-10">
        <div className="w-full max-w-4xl">
           <Header title="Grid teste">
             <BtnNovo/>
           </Header>
           <Table />
          
        </div>
    </main>
  )
}

export default Example;