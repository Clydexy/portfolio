import "./contact.scss"
import {Phone, Mail} from '@material-ui/icons';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="itemContainer">
            <Phone className="icon"/>
            <span>+852 5427 2943</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>xuj1@kgv.hk</span>
          </div>
          <a href="assets/Erik_CV.pdf" target="_blank" rel="noreferrer">Full Portfolio</a>
      </div>
    </div>
  )
}
