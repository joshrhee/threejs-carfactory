(this["webpackJsonpthreejs-carfactory"]=this["webpackJsonpthreejs-carfactory"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n(1),i=n.n(r),o=n(36),s=n.n(o),a=(n(48),n(9)),j=(n(49),n(10)),b=n(55),l=n(37);Object(j.b)({OrbitControls:l.a});var u=function(){var e=Object(j.e)(),t=e.camera,n=e.gl;return Object(c.jsx)("orbitControls",{attach:"orbitControls",args:[t,n.domElement]})},d=n(7),h=n(0),O=function(e){var t=Object(j.d)(h.TextureLoader,"/threejs-carfactory/modern-background-gray.jpeg"),n=Object(j.e)().gl,i=Object(r.useMemo)((function(){return new h.WebGLCubeRenderTarget(t.image.height).fromEquirectangularTexture(n,t)}),[n,t]);return Object(c.jsx)("primitive",{attach:"background",object:i})},f=function(e){var t=Object(b.c)((function(){return Object(d.a)({args:[20,1,10]},e)})),n=Object(a.a)(t,2),r=n[0];n[1];return Object(c.jsxs)("mesh",Object(d.a)(Object(d.a)({ref:r},e),{},{receiveShadow:!0,children:[Object(c.jsx)("boxBufferGeometry",{args:[200,1,200]}),Object(c.jsx)("meshPhysicalMaterial",{color:"black",opacity:1})]}))},g={activeMesh:{},activeMeshName:"Capot001_CAR_PAINT_0",cameraPos:new h.Vector3(9,2,4),target:new h.Vector3(4,0,0),shouldUpdate:!0},p={height:50,width:50,borderRadius:"50%",cursor:"pointer"},x=function(e){var t=function(e){g.activeMesh&&(g.activeMesh.material.color=new h.Color(e.target.style.background))};return Object(c.jsxs)("div",{style:{position:"absolute",zIndex:1,left:0,right:0,margin:"auto",width:"fit-content",display:"flex",top:"20px"},children:[Object(c.jsx)("div",{onClick:t,style:Object(d.a)({background:"rgb(243, 246, 247)"},p)}),Object(c.jsx)("div",{onClick:t,style:Object(d.a)({background:"black"},p)}),Object(c.jsx)("div",{onClick:t,style:Object(d.a)({background:"red"},p)}),Object(c.jsx)("div",{onClick:t,style:Object(d.a)({background:"rgb(30, 75, 93)"},p)}),Object(c.jsx)("div",{onClick:t,style:Object(d.a)({background:"#000d89"},p)}),Object(c.jsx)("div",{onClick:t,style:Object(d.a)({background:"#175421"},p)})]})},m=n(18),v=function(e){var t=e.position,n=void 0===t?[0,0,0]:t,r=e.offset,i=void 0===r?[0,0,0]:r,o=e.dims,s=void 0===o?[1,1,1]:o,j=e.visible,l=void 0!==j&&j,u=e.children,d=Object(b.c)((function(){return{mass:1,args:s,position:n}})),h=Object(a.a)(d,2),O=h[0],f=h[1];return Object(c.jsxs)("group",{ref:O,api:f,children:[Object(c.jsxs)("mesh",{scale:s,visible:l,children:[Object(c.jsx)("boxBufferGeometry",{}),Object(c.jsx)("meshPhysicalMaterial",{wireframe:!0})]}),Object(c.jsx)("group",{position:i,children:u})]})},w=n(41),y=function(e){var t,n=Object(j.d)(w.a,"/threejs-carfactory"+e.path);return n.animations.length>0&&(t=new h.AnimationMixer(n.scene),n.animations.forEach((function(e){t.clipAction(e).play()}))),Object(j.c)((function(e,n){var c;null===(c=t)||void 0===c||c.update(n)})),n.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.side=h.FrontSide)})),Object(c.jsx)("primitive",{object:n.scene,scale:e.scale,position:e.position})},k=n(42);Object(j.b)({DragControls:k.a});var C=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),i=Object(r.useState)([]),o=Object(a.a)(i,2),s=o[0],b=o[1],l=Object(j.e)(),u=l.camera,d=l.gl,h=l.scene;return Object(r.useEffect)((function(){b(t.current.children)}),[]),Object(r.useEffect)((function(){n.current.addEventListener("hoveron",(function(e){return h.orbitControls.enabled=!1})),n.current.addEventListener("hoveroff",(function(e){return h.orbitControls.enabled=!0})),n.current.addEventListener("dragstart",(function(e){var t;console.log(e.object),null===(t=e.object.api)||void 0===t||t.mass.set(0)})),n.current.addEventListener("dragend",(function(e){var t;return null===(t=e.object.api)||void 0===t?void 0:t.mass.set(1)})),n.current.addEventListener("drag",(function(e){var t,n;null===(t=e.object.api)||void 0===t||t.position.copy(e.object.position),null===(n=e.object.api)||void 0===n||n.velocity.set(0,0,0)}))}),[s]),Object(c.jsxs)("group",{ref:t,children:[Object(c.jsx)("dragControls",{transformGroup:e.transformGroup,ref:n,args:[s,u,d.domElement]}),e.children]})},M=function(e){return Object(m.a)(e),Object(c.jsxs)(r.Suspense,{fallback:null,children:[Object(c.jsx)(C,{transformGroup:!0,children:Object(c.jsx)(v,{position:[4,4,0],dims:[3,2,6],offset:[0,-.4,.8],children:Object(c.jsx)(y,{path:"/tesla_model_3/scene.gltf",scale:new Array(3).fill(.01)})})}),Object(c.jsx)(C,{transformGroup:!0,children:Object(c.jsx)(v,{position:[-4,4,0],dims:[3,2,7],offset:[0,-.8,.2],children:Object(c.jsx)(y,{path:"/tesla_model_s/scene.gltf",scale:new Array(3).fill(.013)})})}),Object(c.jsx)(C,{transformGroup:!0,children:Object(c.jsx)(v,{position:[-8,0,0],dims:[3,2,7],offset:[-4,-.9,-.4],children:Object(c.jsx)(y,{path:"/tesla_roadster_2020_interior/scene.gltf",scale:new Array(3).fill(2)})})})]})},P=function(e){return Object(m.a)(e),Object(j.c)((function(e){var t=e.camera,n=e.scene;(g.activeMesh.name!==g.activeMeshName&&(g.activeMesh=n.getObjectByName(g.activeMeshName)||{}),g.shouldUpdate)&&(t.position.lerp(g.cameraPos,.1),n.orbitControls.target.lerp(g.target,.1),n.orbitControls.update(),t.position.clone().sub(g.cameraPos).length()<.1&&(g.shouldUpdate=!1))})),null},S=n(14),E={zIndex:1,position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",bottom:"5vh",height:"40px",width:"40px",backgroundColor:"rgb(30, 75, 93)",color:"black",borderRadius:"50%",fontSize:20,fontWeight:"bold",border:"1px solid black",cursor:"pointer"},_=function(e){Object(m.a)(e);var t=[{cameraPos:[-7,2,5],target:[-12,0,0],name:"Object_6"},{cameraPos:[1,2,5],target:[-4,0,0],name:"object005_bod_0"},{cameraPos:[9,2,4],target:[4,0,0],name:"Capot001_CAR_PAINT_0"}],n=2,r=function(e){var c,r;"right"===e&&n<t.length-1?n+=1:"left"===e&&n>0?n-=1:console.log("no action");var i=n;(c=g.cameraPos).set.apply(c,Object(S.a)(t[i].cameraPos)),(r=g.target).set.apply(r,Object(S.a)(t[i].target)),g.activeMeshName=t[i].name,g.shouldUpdate=!0};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(e){return r("left")},style:Object(d.a)({left:"40vw"},E),children:"<"}),Object(c.jsx)("button",{onClick:function(e){return r("right")},style:Object(d.a)({right:"40vw"},E),children:">"})]})},L=function(e){var t=Object(r.useRef)(),n=Object(j.e)().scene;return Object(r.useEffect)((function(){n.lights?n.lights.push(t):n.lights=[t]}),[]),Object(c.jsxs)("mesh",Object(d.a)(Object(d.a)({},e),{},{ref:t,children:[Object(c.jsx)("pointLight",{castShadow:!0,"shadow-mapSize-height":Math.pow(2,10),"shadow-mapSize-width":Math.pow(2,10),"shadow-radius":10}),Object(c.jsx)("sphereBufferGeometry",{args:[.2,20,20]}),Object(c.jsx)("meshPhongMaterial",{emissive:"white"})]}))},G=function(e){return Object(m.a)(e),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("ambientLight",{intensity:.2}),Object(c.jsx)("directionalLight",{intensity:.5,position:[6,3,0]}),Object(c.jsx)(L,{position:[-6,3,0]}),Object(c.jsx)(L,{position:[0,3,0]}),Object(c.jsx)(L,{position:[6,3,0]})]})},A=n(33),R=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(j.e)().scene;return Object(r.useEffect)((function(){o.lights&&3===o.lights.length&&i(o.lights)}),[o.lights]),n?Object(c.jsx)(A.b,{children:Object(c.jsx)(A.a,{focusDistance:0,focalLength:.02,bokehScale:2,height:480})}):null},B=n(43),F=n.n(B),I=function(){var e=Object(r.useRef)();return Object(j.c)((function(t){F.a.get(e.current,"rotation.y")&&(e.current.rotation.y+=.1,e.current.rotation.x+=.1)})),Object(c.jsxs)("mesh",{ref:e,position:[0,3,0],children:[Object(c.jsx)("dodecahedronBufferGeometry",{args:[1,1]}),Object(c.jsx)("meshPhysicalMaterial",{color:"rgb(30, 75, 93)",opacity:.5,side:h.DoubleSide})]})};var N=function(){var e=Object(r.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(a.a)(e,2),n=t[0],i=t[1];Object(r.useEffect)((function(){window.addEventListener("resize",o)}),[n]);var o=function(){i({width:window.innerWidth,height:window.innerHeight})};return Object(c.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(c.jsx)(x,{}),Object(c.jsx)(_,{}),Object(c.jsxs)(j.a,{gl:{powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1},shadowMap:!0,style:{background:"black"},camera:{position:[7,7,7]},children:[Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)(I,{}),children:Object(c.jsx)(O,{windowDimensions:n})}),Object(c.jsx)(P,{}),Object(c.jsx)(G,{}),Object(c.jsx)(u,{}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(M,{}),Object(c.jsx)(f,{position:[0,-.5,0]})]}),Object(c.jsx)(R,{})]})]})},T=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),T()}},[[54,1,2]]]);
//# sourceMappingURL=main.cd7f3cf9.chunk.js.map