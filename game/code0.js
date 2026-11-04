gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.idToCallbackMap = new Map();
gdjs.StartCode.GDNewSpriteObjects1= [];
gdjs.StartCode.GDNewSpriteObjects2= [];
gdjs.StartCode.GDNewTextObjects1= [];
gdjs.StartCode.GDNewTextObjects2= [];
gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;
gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;
gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.StartCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
