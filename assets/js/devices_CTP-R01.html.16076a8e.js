"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[85303],{85428:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>n});var i=o(24691);const a={},d=(0,o(88242).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[12]||(t[12]=(0,i.Lk)("h1",{id:"aqara-ctp-r01",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#aqara-ctp-r01"},[(0,i.Lk)("span",null,"Aqara CTP-R01")])],-1)),(0,i.Lk)("table",null,[t[7]||(t[7]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"CTP-R01")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Cube T1 Pro")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"battery, voltage, power_outage_count, operation_mode, side, action_from_side, action_angle, action, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CTP-R01.png",alt:"Aqara CTP-R01"})])],-1)),t[6]||(t[6]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"White-label"),(0,i.Lk)("td",null,"Aqara MFCZQ12LM")],-1))])]),t[13]||(t[13]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery"><span>Battery</span></a></h3><p>Uses a CR2450 battery</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Remove the back plate by using the included tool or a wedge to click it off. Press and hold the LINK button inside the device for +- 5 seconds (until the blue light blinks three times). After this the device will automatically join, but the interview process may not finish. If that happens, keep doing short presses to the LINK button to keep the light flashing, until the interview process finishes successfully.</p><h3 id="mode-switch" tabindex="-1"><a class="header-anchor" href="#mode-switch"><span>Mode Switch</span></a></h3><p>There are two ways to toggle between scene mode and action mode:</p><ol><li><p>Hard switch:</p><p>Open lid, and click LINK 5 times in a row.</p></li><li><p>Soft switch (using Zigbee2MQTT frontend):</p><p>Toggle <code>operation_mode</code> in the Exposes tab of the device in Zigbee2MQTT frontend. Change won&#39;t happen right away, the device only responds to mode switch once an hour. But you can give the device a throw (a forceful shake action without backward motion), which, when done right, will force the device to respond. Otherwise you can open lid and click LINK button to have it respond immediately.</p></li></ol><h3 id="supported-actions" tabindex="-1"><a class="header-anchor" href="#supported-actions"><span>Supported Actions</span></a></h3><ul><li><p>Scene mode:</p><table><thead><tr><th>Action</th><th>additional attributes in payload</th></tr></thead><tbody><tr><td>rotate_left</td><td>action_angle</td></tr><tr><td>rotate_right</td><td>action_angle</td></tr><tr><td>shake</td><td>-</td></tr><tr><td>throw</td><td>-</td></tr><tr><td>hold</td><td>-</td></tr><tr><td>side_up</td><td>side</td></tr><tr><td>flip_to_side</td><td>side</td></tr><tr><td>1_min_inactivity</td><td>-</td></tr></tbody></table></li><li><p>Action mode:</p><table><thead><tr><th>Action</th><th>additional attributes in payload</th></tr></thead><tbody><tr><td>rotate_left</td><td>action_angle</td></tr><tr><td>rotate_right</td><td>action_angle</td></tr><tr><td>shake</td><td>-</td></tr><tr><td>throw</td><td>-</td></tr><tr><td>slide</td><td>side</td></tr><tr><td>tap</td><td>side</td></tr><tr><td>flip90</td><td>side, action_from_side</td></tr><tr><td>flip180</td><td>side, action_from_side</td></tr><tr><td>1_min_inactivity</td><td>-</td></tr></tbody></table></li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',11)),(0,i.Lk)("p",null,[t[9]||(t[9]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.eW)("OTA updates")]))),_:1}),t[10]||(t[10]=(0,i.eW)("."))]),t[14]||(t[14]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[11]||(t[11]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[15]||(t[15]=(0,i.Fv)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric"><span>Power outage count (numeric)</span></a></h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum"><span>Operation mode (enum)</span></a></h3><p>[Soft Switch]: There is a configuration window, opens once an hour on itself, only during which the cube will respond to mode switch. Mode switch will be scheduled to take effect when the window becomes available. You can also give it a throw action (no backward motion) to force a respond! Otherwise, you may open lid and click LINK once to make the cube respond immediately. [Hard Switch]: Open lid and click LINK button 5 times.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>action_mode</code>, <code>scene_mode</code>.</p><h3 id="side-numeric" tabindex="-1"><a class="header-anchor" href="#side-numeric"><span>Side (numeric)</span></a></h3><p>Side of the cube. Value can be found in the published state on the <code>side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-from-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-from-side-numeric"><span>Action from side (numeric)</span></a></h3><p>Side of the cube. Value can be found in the published state on the <code>action_from_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-angle-numeric" tabindex="-1"><a class="header-anchor" href="#action-angle-numeric"><span>Action angle (numeric)</span></a></h3><p>Value can be found in the published state on the <code>action_angle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-360</code> and the maximum value is <code>360</code>. The unit of this value is <code>°</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>shake</code>, <code>throw</code>, <code>tap</code>, <code>slide</code>, <code>flip180</code>, <code>flip90</code>, <code>hold</code>, <code>side_up</code>, <code>rotate_left</code>, <code>rotate_right</code>, <code>1_min_inactivity</code>, <code>flip_to_side</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20))])}]]),n=JSON.parse('{"path":"/devices/CTP-R01.html","title":"Aqara CTP-R01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara CTP-R01 control via MQTT","description":"Integrate your Aqara CTP-R01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:22.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Mode Switch","slug":"mode-switch","link":"#mode-switch","children":[]},{"level":3,"title":"Supported Actions","slug":"supported-actions","link":"#supported-actions","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Operation mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Side (numeric)","slug":"side-numeric","link":"#side-numeric","children":[]},{"level":3,"title":"Action from side (numeric)","slug":"action-from-side-numeric","link":"#action-from-side-numeric","children":[]},{"level":3,"title":"Action angle (numeric)","slug":"action-angle-numeric","link":"#action-angle-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1731830780000},"filePathRelative":"devices/CTP-R01.md"}')}}]);