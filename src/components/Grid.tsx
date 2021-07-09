import { InputHTMLAttributes } from "react"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    titles: string[]
    loading?: boolean
}

const NewGrid: React.FC<InputProps> = ({ titles, children, loading }) => {

    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
      ) {
        return { name, calories, fat, carbs, protein };
      }
      
    const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="customized table">
                <TableHead className="bg-gray-200">
                    <TableRow>
                        { titles.map( item => {
                            return <TableCell sortDirection={false} className="uppercase font-bold">{item}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export { NewGrid }

const Grid: React.FC<InputProps> =  ({ titles, children, loading }) => {
    return (
        <div className="overflow-y-hidden rounded w-full border overflow-x-scroll sm:hidden-scroll">
           <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                    {
                        titles.map( title => (
                            <th 
                                scope="col"
                                className="pl-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                key={`${title}`}>
                                {title}
                            </th>
                        ))
                    }
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                  { loading ? (
                      <>
                        <tr className="h-10">
                            {
                                titles.map( (item, index) => (
                                    <td key={index} className="py-2 pl-4">
                                        <div className="bg-gray-200 w-20 h-4 rounded-md relative overflow-hidden">
                                            <div className="absolute -left-20 top-0 w-1/2 h-full bg-gradient-to-r from-gray-50 to-gray-200 animate-preload"/>
                                        </div>
                                    </td>    
                                ))
                            }
                        </tr>                      
                        <tr className="h-10">
                            {
                                titles.map( (item, index) => (
                                    <td key={index} className="py-2 pl-4">
                                        <div className="bg-gray-200 w-20 h-4 rounded-md relative overflow-hidden">
                                            <div className="absolute -left-20 top-0 w-1/2 h-full bg-gradient-to-r from-gray-50 to-gray-200 animate-preload"/>
                                        </div>
                                    </td>    
                                ))
                            }
                        </tr>                      
                        <tr className="h-10">
                            {
                                titles.map( (item, index) => (
                                    <td key={index} className="py-2 pl-4">
                                        <div className="bg-gray-200 w-20 h-4 rounded-md relative overflow-hidden">
                                            <div className="absolute -left-20 top-0 w-1/2 h-full bg-gradient-to-r from-gray-50 to-gray-200 animate-preload"/>
                                        </div>
                                    </td>    
                                ))
                            }
                        </tr>                      
                      </>
                  ) : (
                        <>
                        {children}
                        </>
                    )
                  }
              </tbody>
            </table>
        </div>
    )
}

export { Grid }


const Td:React.FC<InputHTMLAttributes<HTMLInputElement> | any> = ({children, className,...props}) => {
    return (
        <TableCell  {...props}>
            {children}
        </TableCell>
    )
}

export { Td }

const Tr:React.FC<InputHTMLAttributes<HTMLInputElement> | any> = ({children, className, ...props}) => {
    return (
        <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  {...props}>
            {children}
        </TableRow>
    )
}

export { Tr }

interface HeaderProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}

const Header:React.FC<HeaderProps> = ({title, children}) => {
    return (
        <header className="flex w-full justify-between flex-col mb-4">
            <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
            <div className="flex gap-2 mt-2">
                {children} 
            </div>
        </header>
    )
}

export { Header }

const Container: React.FC = ({children, ...props}) => {
    return (
        <main className="w-full flex justify-center py-8 min-h-screen h-full bg-gray-100 px-4" {...props}>
            {children}
        </main>
    )
}

export { Container }