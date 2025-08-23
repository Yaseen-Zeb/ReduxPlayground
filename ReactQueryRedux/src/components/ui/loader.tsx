import { cn } from "@/lib/cn"
import { Loader as LoaderIcon } from "lucide-react"

const Loader = ({className}: {className?: string}) => {
    return (
        <div className={cn('flex justify-center items-center h-screen', className)}>
            <LoaderIcon className='w-10 h-10 animate-spin' />
        </div>
  )
}

export default Loader