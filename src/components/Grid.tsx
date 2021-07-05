import { InputHTMLAttributes } from "react"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    titles: string[]
    loading?: boolean
}

const Grid: React.FC<InputProps> =  ({ titles, children, loading }) => {
    return (
        <div className="border border border-gray-200 rounded-xl w-full overflow-hidden shadow">
           <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                    {
                        titles.map( title => (
                            <th 
                                scope="col"
                                className="pl-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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


const Td:React.FC = ({children}) => {
    return (
        <td className="pl-4 py-4 whitespace-nowrap">
            {children}
        </td>
    )
}

export { Td }