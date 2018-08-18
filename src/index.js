import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';

const elm = document.createElement('div');
elm.innerHTML = '<button>Wow Me</button>';
document.body.appendChild(elm);

new Cesium.Viewer(elm);