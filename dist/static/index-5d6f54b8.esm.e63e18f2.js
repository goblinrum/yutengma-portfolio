import{s as x,ba as _,g,P as w,cf as B,j as a,ai as L,ce as O,af as T,aG as S,aj as A,l as D,a5 as G,a3 as W}from"./sanity.49945101.js";import{P as z}from"./PaneItem-c5593821.esm.13028053.js";import{u as C}from"./index-989e9e04.esm.84d383cc.js";var r;function H(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const E=x.hr(r||(r=H([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function U(n){const{childItemId:t,index:l,isActive:d,isSelected:u,pane:p,paneKey:f}=n,{features:h}=C(),{collapsed:y}=_(),{defaultLayout:m,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=p,P=c==null?void 0:c.showIcons,j=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return g(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:u,children:[B,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:b}),a(D,{overflow:y?void 0:"auto",children:a(G,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(W,{paddingY:1,children:a(E,{})},"divider-".concat(o));const s=!d&&t===e.id,k=d&&t===e.id;return a(z,{icon:j(e)?e.icon:!1,id:e.id,layout:m,pressed:s,schemaType:e.schemaType,selected:k,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{U as default};
