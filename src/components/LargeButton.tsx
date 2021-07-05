import { ReactComponent as Loading} from '../assets/loading.svg'

interface Iprops {
    title: string
    isLoading?: boolean
}


export default function LargeButton({ title, isLoading, ...props } :Iprops) {
    return (
        <button 
            className={`
                w-full 
                bg-blue-500
                h-11
                flex
                text-white
                text-md
                rounded-full
                justify-center
                items-center 
            `}
                disabled={isLoading && true}
                {...props}
            >
                {
                    isLoading ? (
                        <div className="animate-spin -ml-1 mr-3 h-5 w-5 text-white">
                            <Loading />
                        </div>
                    )
                    :
                    (
                        <>
                            {title}
                        </>
                    )
                }
        </button>
    )
}