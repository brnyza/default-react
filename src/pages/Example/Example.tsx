import { BtnNovo, Button } from "../../components/Button"
import { Grid, Header, Td } from "../../components/Grid"

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
            <Grid titles={['Nome', 'Função', 'Modulo']}>
                { dados.map( dado => (
                  <tr>
                    <Td>{dado.nome}</Td>
                    <Td>{dado.funcao}</Td>
                    <Td>{dado.modulo}</Td>
                  </tr>
                ))}
            </Grid>
        </div>
    </main>
  )
}

export default Example;