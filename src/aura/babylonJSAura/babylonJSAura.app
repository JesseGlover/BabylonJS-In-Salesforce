<!--
 - Created by Jesse on 3/4/2020.
 -->

<aura:application description="babylonJSAura" extends="force:slds">
    <ltng:require scripts="{!$Resource.babylon}" afterScriptsLoaded="{!c.dragAndDropBabylonJs}"/>
    <lightning:card title="Third Party Library Demo"
                    iconName="custom-custom19"/>
    <canvas aura:id="canvas" style="width:100%;height:100%"></canvas>
</aura:application>
