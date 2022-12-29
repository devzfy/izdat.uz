import './loading.scss'
import Typical from 'react-typical'

const Loading  = ()=>{
    return <div class="containers">
    <div class="cube">
      <div class="sides">
        <div class="top"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="left"></div>
        <div class="front"></div>
        <div class="back"></div>
      </div>
      
    </div>
    <h1 className="typing-text"><Typical
      steps={['Izdat.uz', 100]}
      loop={Infinity}
      wrapper="p"
    /></h1>
  </div>
}
export default Loading