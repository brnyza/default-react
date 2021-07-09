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

const Grid: React.FC<InputProps> =  ({ titles, children, loading }) => {
    return (
        <Paper>
            <TableContainer>
                <Table>
                    
                </Table>
            </TableContainer>
        </Paper>
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