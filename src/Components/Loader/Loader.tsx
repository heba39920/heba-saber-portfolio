import { ClimbingBoxLoader } from "react-spinners"
interface LoaderProps{
   loading: boolean
}
const Loader:React.FC<LoaderProps> = ({loading}) => {
 


  return (
    <div className="flex justify-center items-center h-screen bg-[var(--primary-color)]">
      <ClimbingBoxLoader loading={loading} color="var(--light-color)" />
    </div>
  )
}

export default Loader;