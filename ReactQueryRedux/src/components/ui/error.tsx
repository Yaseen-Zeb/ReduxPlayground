const Error = ({message,className}:{message:string,className?:string}) => {
  return (
    <div className={`text-red-500 text-center flex flex-col items-center justify-center h-[70vh] ${className}`}>
        <div className='text-2xl font-semibold'>Error</div>
        <div className='text-sm'>{message}</div>
    </div>
  )
}

export default Error