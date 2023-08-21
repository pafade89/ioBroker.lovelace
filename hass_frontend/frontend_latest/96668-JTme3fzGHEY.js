"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[96668],{65253:(e,s,i)=>{i.d(s,{CE:()=>a,FH:()=>f,Nq:()=>n,Pb:()=>t,fm:()=>d,h8:()=>l,r4:()=>r,uh:()=>o});const t="system-admin",a="system-users",o=async e=>e.callWS({type:"config/auth/list"}),r=async(e,s,i,t)=>e.callWS({type:"config/auth/create",name:s,group_ids:i,local_only:t}),n=async(e,s,i)=>e.callWS({...i,type:"config/auth/update",user_id:s}),l=async(e,s)=>e.callWS({type:"config/auth/delete",user_id:s}),d=e=>e?e.trim().split(" ").slice(0,3).map((e=>e.substring(0,1))).join(""):"?",c=32143==i.j?"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z":null,h=32143==i.j?"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z":null,u=32143==i.j?"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14":null,p=32143==i.j?"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z":null,f=(e,s,i)=>{const t=[],a=s=>e.localize(`ui.panel.config.users.${s}`);return s.is_owner&&t.push([c,a("is_owner")]),i&&s.system_generated&&t.push([h,a("is_system")]),s.local_only&&t.push([u,a("is_local")]),s.is_active||t.push([p,a("is_not_active")]),t}},96668:(e,s,i)=>{i.r(s),i.d(s,{HaConfigUsers:()=>g});var t=i(17463),a=i(34541),o=i(47838),r=i(68144),n=i(79932),l=i(14516),d=(i(12171),i(36125),i(76865),i(52039),i(65253)),c=i(26765),h=(i(96551),i(29311)),u=i(91188),p=i(47181);const f=()=>Promise.all([i.e(28597),i.e(52369),i.e(4503)]).then(i.bind(i,4503)),m="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";let g=(0,t.Z)([(0,n.Mo)("ha-config-users")],(function(e,s){class i extends s{constructor(...s){super(...s),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"_users",value:()=>[]},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"isWide",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"route",value:void 0},{kind:"field",key:"_columns",value(){return(0,l.Z)(((e,s)=>({name:{title:s("ui.panel.config.users.picker.headers.name"),main:!0,sortable:!0,filterable:!0,width:"25%",direction:"asc",grows:!0,template:(i,t)=>e?r.dy` ${i}<br> <div class="secondary"> ${t.username?`${t.username} |`:""} ${s(`groups.${t.group_ids[0]}`)} </div>`:r.dy` ${i||this.hass.localize("ui.panel.config.users.editor.unnamed_user")}`},username:{title:s("ui.panel.config.users.picker.headers.username"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:e,template:e=>r.dy`${e||"—"}`},group_ids:{title:s("ui.panel.config.users.picker.headers.group"),sortable:!0,filterable:!0,width:"20%",direction:"asc",hidden:e,template:e=>r.dy` ${s(`groups.${e[0]}`)} `},is_active:{title:this.hass.localize("ui.panel.config.users.picker.headers.is_active"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:e,template:e=>e?r.dy`<ha-svg-icon .path="${m}"></ha-svg-icon>`:""},system_generated:{title:this.hass.localize("ui.panel.config.users.picker.headers.system"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:e,template:e=>e?r.dy`<ha-svg-icon .path="${m}"></ha-svg-icon>`:""},local_only:{title:this.hass.localize("ui.panel.config.users.picker.headers.local"),type:"icon",sortable:!0,filterable:!0,width:"80px",hidden:e,template:e=>e?r.dy`<ha-svg-icon .path="${m}"></ha-svg-icon>`:""},icons:{title:"",label:this.hass.localize("ui.panel.config.users.picker.headers.icon"),type:"icon",sortable:!1,filterable:!1,width:"104px",hidden:!e,template:(e,s)=>{const i=(0,d.FH)(this.hass,s,!1);return r.dy`${i.map((([e,s])=>r.dy`<ha-data-table-icon .path="${e}" .tooltip="${s}"></ha-data-table-icon>`))}`}}})))}},{kind:"method",key:"firstUpdated",value:function(e){(0,a.Z)((0,o.Z)(i.prototype),"firstUpdated",this).call(this,e),this._fetchUsers()}},{kind:"method",key:"render",value:function(){return r.dy` <hass-tabs-subpage-data-table .hass="${this.hass}" .narrow="${this.narrow}" .route="${this.route}" backPath="/config" .tabs="${h.configSections.persons}" .columns="${this._columns(this.narrow,this.hass.localize)}" .data="${this._users}" @row-click="${this._editUser}" hasFab clickable> <ha-fab slot="fab" .label="${this.hass.localize("ui.panel.config.users.picker.add_user")}" extended @click="${this._addUser}"> <ha-svg-icon slot="icon" .path="${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}"></ha-svg-icon> </ha-fab> </hass-tabs-subpage-data-table> `}},{kind:"method",key:"_fetchUsers",value:async function(){this._users=await(0,d.uh)(this.hass),this._users.forEach((e=>{e.is_owner&&e.group_ids.unshift("owner")}))}},{kind:"method",key:"_editUser",value:function(e){const s=e.detail.id,i=this._users.find((e=>e.id===s));var t,a;i&&(t=this,a={entry:i,updateEntry:async e=>{const s=await(0,d.Nq)(this.hass,i.id,e);this._users=this._users.map((e=>e===i?s.user:e))},removeEntry:async()=>{if(!await(0,c.g7)(this,{title:this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_title","name",i.name),text:this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion_text"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),destructive:!0}))return!1;try{return await(0,d.h8)(this.hass,i.id),this._users=this._users.filter((e=>e!==i)),!0}catch(e){return!1}}},(0,p.B)(t,"show-dialog",{dialogTag:"dialog-user-detail",dialogImport:f,dialogParams:a}))}},{kind:"method",key:"_addUser",value:function(){(0,u.G)(this,{userAddedCallback:async e=>{e&&(this._users=[...this._users,e])}})}}]}}),r.oi)},91188:(e,s,i)=>{i.d(s,{G:()=>o});var t=i(47181);const a=()=>Promise.all([i.e(28597),i.e(2185),i.e(39975),i.e(97215),i.e(6971),i.e(58384),i.e(74898)]).then(i.bind(i,74898)),o=(e,s)=>{(0,t.B)(e,"show-dialog",{dialogTag:"dialog-add-user",dialogImport:a,dialogParams:s})}}}]);
//# sourceMappingURL=96668-JTme3fzGHEY.js.map