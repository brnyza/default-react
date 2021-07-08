import { InputHTMLAttributes } from "react"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    titles: string[]
    loading?: boolean
}

const Grid: React.FC<InputProps> =  ({ titles, children, loading }) => {
    return (
        <div className="overflow-hidden rounded w-full border">
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
        <td className={`pl-3 py-3 ${className}`} {...props}>
            {children}
        </td>
    )
}

export { Td }

const Tr:React.FC<InputHTMLAttributes<HTMLInputElement> | any> = ({children, className, ...props}) => {
    return (
        <tr className={`text-sm lg:text-lg hover:bg-gray-200 ${className || ''}`} {...props}>
            {children}
        </tr>
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
        <main className="w-full flex justify-center py-8 min-h-screen h-full bg-gray-100" {...props}>
            {children}
        </main>
    )
}

export { Container }