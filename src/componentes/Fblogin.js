import FacebookLogin from 'react-facebook-login';

function Login_face() {
  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    
  }
  return (
    <div className='Login_face'>
      <center>
      <FacebookLogin
        appId="1586249645203909"
        autoLoad={false}
        fields="name,email,picture"       
        callback={responseFacebook} />     
        </center>
      </div>      
      );  
}

export default Login_face;