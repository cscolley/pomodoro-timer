(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var i,c,a,r,o,l,s,d,b,x,h,j,p=t(1),u=t.n(p),g=t(9),m=t.n(g),f=t(2),w=t(3),O=Object(w.a)(i||(i=Object(f.a)(["\n  :root {\n    --width: 460px;\n    --white: #fafafa;\n    --darkGrey: rgba(0, 0, 0, 0.87);\n    --paradisePink: #ed3d63;\n    --palatinateBlue: #223ccf;\n    --midnightBlue: #161b7f;\n    --darkOrchid: #8d3fd0;\n    --electricBlue: #06b3d7;\n    --myYellow: #ffcc00;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n    color: var(--white);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--midnightBlue);\n  }\n"]))),A=t(4),k=w.b.div(c||(c=Object(f.a)(['\n  width: 100%;\n  border-radius: 10px;\n  border: 10px solid var(--myYellow);\n  margin: 0 auto;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  gap: 10px;\n  background-color: var(--midnightBlue);\n\n  #time-left {\n    font-size: 140px;\n    color: var(--myYellow);\n    font-family: "Digital-7 Mono", "Roboto", sans-serif;\n    font-weight: normal;\n    margin: 0;\n  }\n\n  #timer-label {\n    font-size: 60px;\n    color: var(--myYellow);\n    font-family: "Digital-7 Mono", "Roboto", sans-serif;\n    font-weight: normal;\n    margin: 0;\n  }\n']))),v=t(0),B=function(n){var e=n.children;return Object(v.jsx)(k,{children:e})},I=w.b.button(a||(a=Object(f.a)(["\n  background-color: var(--midnightBlue);\n  width: 90px;\n  height: 90px;\n  border-radius: 10px;\n  padding: 8px;\n  font-size: 60px;\n\n  path {\n    fill: var(--myYellow);\n  }\n"]))),y=function(n){var e=n.onClick;return Object(v.jsx)(I,{id:"reset",onClick:e,children:Object(v.jsx)("i",{className:"fas fa-sync-alt"})})},M=w.b.button(r||(r=Object(f.a)([" \n\n  background-color: var(--midnightBlue);\n  width: 90px;\n  height: 90px;\n  border-radius: 10px;\n  padding: 8px;\n\n  img {\n    width: 70px;\n  }\n\n  .filter-myYellow {\n    filter: invert(76%) sepia(51%) saturate(1014%) hue-rotate(357deg) brightness(99%) contrast(107%);\n  }\n"]))),C=t.p+"static/media/play_pause_icon.e1b436ff.svg",D=function(n){var e=n.onClick;return Object(v.jsx)(M,{id:"start_stop",children:Object(v.jsx)("img",{src:C,alt:"start stop icon",className:"filter-myYellow",onClick:e})})},G=w.b.div(o||(o=Object(f.a)(["\n  width: 180px;\n  height: 86px;\n  background-color: var(--myYellow);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 10px;\n\n  @media screen and (max-width: 600px) {\n    width: 160px;\n  }\n\n  h3 {\n    font-size: 24px;\n    font-weight: 900;\n    width: 100%;\n    margin: 0;\n    text-align: center;\n    color: var(--midnightBlue);\n\n    @media screen and (max-width: 600px) {\n      font-size: 18px;\n    }\n  }\n"]))),T=w.b.div(l||(l=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  span {\n    font-size: 44px;\n    font-weight: 900;\n    text-align: center;\n    color: var(--midnightBlue);\n\n    @media screen and (max-width: 600px) {\n      font-size: 38px;\n    }\n  }\n"]))),Y=w.b.button(s||(s=Object(f.a)(["\n  font-size: 50px;\n  font-weight: 900;\n  height: 50px;\n  width: 50px;\n  text-align: center;\n  background-color: var(--midnightBlue);\n  border: none;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n\n  span {\n    color: var(--myYellow);\n  }\n"]))),J=function(n){var e=n.labelId,t=n.decrementId,i=n.incrementId,c=n.lengthId,a=n.timeSetterType,r=n.length,o=n.onPlusClick,l=n.onMinusClick;return Object(v.jsxs)(G,{children:[Object(v.jsx)("h3",{id:e,children:a}),Object(v.jsxs)(T,{children:[Object(v.jsx)(Y,{id:t,onClick:l,children:Object(v.jsx)("span",{children:"-"})}),Object(v.jsx)("span",{id:c,children:r}),Object(v.jsx)(Y,{id:i,onClick:o,children:Object(v.jsx)("span",{children:"+"})})]})]})},E=w.b.div(d||(d=Object(f.a)(["\n  width: var(--width);\n  padding: 20px;\n  border-radius: 10px;\n  background-color: var(--palatinateBlue);\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),\n    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n\n  @media screen and (max-width: 600px) {\n    width: 400px;\n  }\n\n  h1 {\n    font-size: 52px;\n    margin: 6px;\n    text-align: center;\n\n    @media screen and (max-width: 600px) {\n      font-size: 44px;\n    }\n  }\n"]))),Q=w.b.div(b||(b=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]))),R=w.b.div(x||(x=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]))),N="SESSION",F="BREAK",S=function(){var n=Object(p.useState)(25),e=Object(A.a)(n,2),t=e[0],i=e[1],c=Object(p.useState)(5),a=Object(A.a)(c,2),r=a[0],o=a[1],l=Object(p.useState)(1500),s=Object(A.a)(l,2),d=s[0],b=s[1],x=Object(p.useState)(N),h=Object(A.a)(x,2),j=h[0],u=h[1],g=Object(p.useState)(!1),m=Object(A.a)(g,2),f=m[0],w=m[1],O=Object(p.useRef)(null);Object(p.useEffect)((function(){if(f){var n=setInterval((function(){b(d-1),0===d&&(O.current.currentTime=0,O.current.play(),j===N&&(u(F),b(60*r)),j===F&&(u(N),b(60*t)))}),1e3);return function(){return clearInterval(n)}}}));return Object(v.jsxs)(E,{children:[Object(v.jsx)("h1",{children:"Pomodoro Timer"}),Object(v.jsxs)(Q,{children:[Object(v.jsx)(J,{labelId:"session-label",decrementId:"session-decrement",incrementId:"session-increment",lengthId:"session-length",timeSetterType:"Session Length",length:t,onMinusClick:function(){t>1&&(b(60*(t-1)),i(t-1))},onPlusClick:function(){t<60&&(b(60*(t+1)),i(t+1))}}),Object(v.jsx)(J,{labelId:"break-label",decrementId:"break-decrement",incrementId:"break-increment",lengthId:"break-length",timeSetterType:"Break Length",length:r,onMinusClick:function(){r>1&&(b(60*(r-1)),o(r-1))},onPlusClick:function(){r<60&&(b(60*(r+1)),o(r+1))}})]}),Object(v.jsxs)(B,{children:[Object(v.jsx)("div",{id:"timer-label",children:j}),Object(v.jsx)("div",{id:"time-left",children:function(n){var e=Math.floor(n/60);e<10&&0===(e="0"+e)&&(e="00");var t=Math.floor(n-60*e);return t<10&&0===(t="0"+t)&&(t="00"),"".concat(e,":").concat(t)}(d)})]}),Object(v.jsxs)(R,{children:[Object(v.jsx)(D,{onClick:function(){w(!f)}}),Object(v.jsx)(y,{onClick:function(){w(!1),i(25),o(5),b(1500),u(N),O.current.pause(),O.current.currentTime=0}})]}),Object(v.jsx)("audio",{ref:O,id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})},z=w.b.div(h||(h=Object(f.a)(['\n  display: flex;\n  margin-top: 6px;\n  width: var(--width);\n  justify-content: space-around;\n  align-items: center;\n\n  a {\n    text-decoration: none;\n\n    img {\n      width: 34px;\n    }\n\n    p {\n      font-family: "Gloria Hallelujah", cursive;\n      font-style: italic;\n      color: #fafafa;\n      font-size: 24px;\n      margin: 0;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    width: 400px;\n  }\n']))),Z=w.b.span(j||(j=Object(f.a)(["\n  font-family: 'Digital-7 Mono', 'Roboto', sans-serif;\n  color: var(--myYellow);\n  font-weight: 900;\n  margin-right: 5px;\n"]))),P=function(){return Object(v.jsxs)(z,{children:[Object(v.jsx)("a",{href:"https://github.com/cscolley/",children:Object(v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=",alt:"GitHub icon"})}),Object(v.jsx)("a",{href:"https://www.chriscolley.com.au",children:Object(v.jsxs)("p",{children:[Object(v.jsx)(Z,{children:"<cc/>"}),"chriscolley.com.au"]})})]})};var L=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(S,{}),Object(v.jsx)(P,{}),Object(v.jsx)(O,{})]})},W=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};m.a.render(Object(v.jsx)(u.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root")),W()}},[[22,1,2]]]);
//# sourceMappingURL=main.beab7d01.chunk.js.map