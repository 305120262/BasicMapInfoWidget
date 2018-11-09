// jIMU (WAB) imports:

/// <amd-dependency path="jimu/BaseWidget" name="BaseWidget" />
declare var BaseWidget: any; // there is no ts definition of BaseWidget (yet!)

// declareDecorator - to enable us to export this module with Dojo's "declare()" syntax so WAB can load it:
import declare from "./support/declareDecorator";

// esri imports:
import esri = require("esri");
import EsriMap = require("esri/map");
// import * as on from 'dojo/on';

// dojo imports: (example below)
// import * as on from 'dojo/on';

interface Config {
  serviceUrl: string;
}
interface Widget {
  config?: Config;
}

@declare(BaseWidget)
class Widget {
  baseClass = "basic-map-info-widget";

  map: EsriMap;

  postCreate(args: any) {
    let self: any = this;
    self.inherited(arguments);
    console.log("BasicMapInfoWidget::postCreate");
  }

   startup() {
     let self: any = this;
     self.inherited(arguments);
     console.log('BasicMapInfoWidget::startup');
     
     self.map.on('extent-change', (evt) => {
       var level = self.map.getLevel();
       if ( level !== null) {
         console.log(level);
       }
     });
   }

  // onOpen() {
  //   console.log('BasicMapInfoWidget::onOpen');
  // };
  // onClose(){
  //   console.log('BasicMapInfoWidget::onClose');
  // };
  // onMinimize(){
  //   console.log('BasicMapInfoWidget::onMinimize');
  // };
  // onMaximize(){
  //   console.log('BasicMapInfoWidget::onMaximize');
  // };
  // onSignIn(credential){
  //   console.log('BasicMapInfoWidget::onSignIn', credential);
  // };
  // onSignOut(){
  //   console.log('BasicMapInfoWidget::onSignOut');
  // };
  // onPositionChange(){
  //   console.log('BasicMapInfoWidget::onPositionChange');
  // };
  // resize(){
  //   console.log('BasicMapInfoWidget::resize');
  // };
}

export = Widget;
