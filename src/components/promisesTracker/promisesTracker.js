import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import './promisesTracker.scss';


 const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

   return (
   promiseInProgress && 
   <div className='loader'>
   <Loader type="ThreeDots" color="#00ffff" height="100" width="100" />
   </div>
  );  
 }


export default LoadingIndicator;