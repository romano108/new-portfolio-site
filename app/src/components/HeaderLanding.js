import './headerlanding.css';
import NaturePng from '../app/assets/nature.png';

export default function HeaderLanding() {
  return (
    <div className="h-full bg-cyan-700">
      {/* <div className="text-white text-6xl ml-6 pt-6">Hello, my name is</div>
      <div className="text-white text-5xl ml-6 pt-4">Andoni Romano.</div>
      <div className="header-color italic text-4xl ml-6 pt-4">
        I´m a front end developer
      </div> */}
      <img
        src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png"
        alt="Nature"
      />
    </div>
  );
}
