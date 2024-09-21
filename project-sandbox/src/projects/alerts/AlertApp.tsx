import Title from '../components/Title'
import Alert from '../components/Alert'

export default function AlertApp() {
  return (
    <div className='container text-center'>
        <Title text="Title" classes='title' />
        <Alert 
        type={"success"}
        message='Successful login'
        delay={true} 
        />   
        <Alert 
        type={"info"}
        message='Successful login'
        delay={true} 
        />   
        <Alert 
        type={"warning"}
        message='Successful login'
        delay={true} 
        /> 
    </div>
  )
}
