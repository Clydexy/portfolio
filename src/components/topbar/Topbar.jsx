import "./topbar.scss"
import {Phone, Mail} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">brilliance.</a>
          <div className="itemContainer">
            <Phone className="icon"/>
            <span>+852 5427 2943</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>xuj1@kgv.hk</span>
          </div>
        </div>
        <div className="right">
          This is right
        </div>
      </div>
    </div>
  )
}
