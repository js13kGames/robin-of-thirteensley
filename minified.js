let A=Math.round,t=Math.floor,B=Math.ceil,n=Math.pow,e=Math.abs,E=Math.min,Q=Math.max,o=Math.sin,w=Math.cos,g=Math.random,C=Math.PI,r=(A,t)=>A.charCodeAt(t);let i=0,D=0;function l(A){return A[t(g()*A.length)]}function c(t){return A(t[0]+(t[1]-t[0])*g())}function u(A,t){return A+(t-A)*g()}function f(A,t){for(let B=0;B<A;++B)t(B)}function F(A,t,B){for(let n=0;n<t;++n)for(let t=0;t<A;++t)B(t,n)}function M(A,t){return!(!A||!t||e(t.x-A.x)>A.w+t.w||t.y-A.y>A.A||A.y-t.y>t.A)}function a(A,t,B){let n=(B-t)/2;return{x:A.x+A.B*(t+n),y:A.y,w:e(n),A:A.A}}function I(A,t){return A.indexOf(t)>=0}function s(A){VB.globalAlpha=A}function U(A,t){(t||VB).fillStyle=A}function R(A,t,B){VB.drawImage(A,t,B)}let V=A=>A.getContext("2d"),P=()=>{},H=(new window.AudioContext,new AudioContext);let T=[82,110,147,196,247,330,1e3];async function O(){await H.audioWorklet.addModule('data:text/javascript,class r extends AudioWorkletProcessor{constructor(r){super(),this.o=r.processorOptions.t.map((r=>{let s=0|44e3/r,e={i:new Float32Array(s),h:0,u:0,l:r,v:s,M:0};return e.i.fill(0),e})),this.port.onmessage=r=>{let[s,e]=r.data;s.map(((r,s)=>{if(+r===r){let t=this.o[s],a=0|44e3/(t.l*Math.pow(1.059,r));t.h=0,t.u=a,t.M=0;let o=t.i;o.map(((r,s)=>{o[s]=(e||1)*(2*Math.random()-1)}))}}))}}process(r,s,e){return s[0].map((r=>{r.map(((s,e)=>{r[e]=0,this.o.map((s=>{let t=s.i[s.h];s.h=++s.h%s.v,t=(t+s.i[s.h])/2*.997,s.u=++s.u%s.v,s.i[s.u]=t,s.M++,r[e]+=t*Math.min(1,s.M/500)}))}))})),!0}}registerProcessor("G",r)');let A=new AudioWorkletNode(H,"G",{processorOptions:{t:T}});return A.connect(H.destination),A}let S=[];function x(){S=[]}function Y(A,t,B){S.push([z+1,A,t,B])}let h=[];(async()=>{h[0]=await O(),h[1]=await O()})();let K=[3,2,0,0,0,3],G=[1,3,3,2,1,1],d=[,1,3,3,2,1],p=[1,3,3,1,1,1],k=[0,2,0,0,0,0],N=[0,0,2,2,1,0],v=K;function L(A,t){let B=[];return B[t]=A[t],B}function y(A,t){let B=[];return t.map(((t,n)=>t?B[n]=A[n]:0)),B}function m(A,t,B=.5){let n=l(t);Y(A,L(v,n),B)}function J(A,t=.5){let B=l([[0,4],[1,3],[2,4]]),n=[];B.map((A=>n[A]=v[A])),Y(A,n,t)}function W(A,t,B,n){S.push([z+B,1,t,n,A])}let q=0;function X(A,t){f(t,(()=>{W(A,L(A,0),q,.2),q+=7,W(A,y(A,[,,1]),q,.2),q++,W(A,y(A,[,,,1,1,1]),q,.2),q+=8,W(A,L(A,1),q,.2),q+=7,W(A,y(A,[,,1]),q,.2),q++,W(A,y(A,[,,,1,1,1]),q,.2),q+=8}))}let b,z=0,Z=0;function j(A,t){let B=new OffscreenCanvas(A,t),n=V(B);return n.imageSmoothingEnabled=!1,b=n,{o:B,g:n}}function $(A,t,B,n){b.beginPath(),U(dA[A],b),b.arc(t,B,n,0,6.3),b.fill()}function _(A,t,B,n,e){U(dA[A],b),b.fillRect(t,B,n,e)}let AA=["PRESS SPACE TO START","PRESS <> TO MOVE","PRESS ^ TO JUMP","EXIT AT THE GATE","APPROACH TO ENGAGE","PRESS SPACE TO LUNGE","WHEN ATTACKED, PRESS ^ TO PARRY","PRESS # TO FEINT, ENEMY MIGHT FLINCH","PRESS ^ IN AIR TO JUMP ONCE AGAIN"];let tA=[],BA=[],nA=-1;function eA(A){BA[A]=!0,nA===A&&nB()}function EA(A){CB()&&A.map((A=>{-1!==nA||BA[A]||(BB(`|${AA[A]}|2`),nA=A)}))}let QA=[0,0],oA=[0,0],wA=[0,0];function gA(){VB.resetTransform()}function CA(t,B){gA(),VB.translate(-wA[0],80-wA[1]),VB.translate(A(t),A(-B))}function rA(t,B){gA(),VB.translate(A(-wA[0]*t),A(80-wA[1]*B))}function iA(){VB.scale(-1,1)}function DA(A){return atob(A).split("").map((A=>r(A,0)))}function lA(A){let t=DA(A),e=[];let E=0;for(;E<t.length;){let A=0,Q=0,o=0,w=0,g=0;A=t[E++],Q=t[E++],o=t[E++],w=t[E++],g=t[E++];let C={x:A,y:Q,C:g,i:[]};e.push(C);let r=t[E++],i=n(2,r);let D=[];1===r?D=[GA[t[0]],GA[t[E++]]]:f(i,(A=>D[A]=GA[t[E++]]));let l=(1<<r)-1,{o:c,g:u}=j(o,w),F={o:c};C.i.push(F);let M=B(o*w/8*r),a=u.getImageData(0,0,o,w),I=a.data;let s=0;f(M,(A=>{let B=t[E++];f(8/r,(A=>{let t=B>>A*r&l,n=D[t];I[s]=n[0],I[s+1]=n[1],I[s+2]=n[2],I[s+3]=t?255:0,s+=4}))})),u.putImageData(a,0,0)}return{D:e}}function cA(A,t){A.D.map((A=>((A,t)=>{A.i.map((A=>{let B=A.o,n=V(B),[e,E]=[B.width,B.height],Q=n.getImageData(0,0,e,E),o=Q.data,w=GA[t];F(e,E,((A,t)=>{let B=4*(t*e+A);o[B+3]&&(o[B]=w[0],o[B+1]=w[1],o[B+2]=w[2],o[B+3]=255)})),n.putImageData(Q,0,0)}))})(A,t)))}function uA(A,t){return{l:A,u:t,F:c(A),M:100*g()}}function fA(A,t){let B=A.D[t.F]?.C;t.M+=100*i,t.M>=B&&(t.M-=B,I([4,2,5],t.u)?t.F--:t.F++,t.F>t.l[1]&&(t.I?.(),[()=>{t.F=t.l[1],t.M=B},()=>{t.F=t.l[0]},P,()=>{t.F=t.l[1]-1,t.u=4},P,P][t.u]()),t.F<t.l[0]&&[P,P,()=>t.F=t.l[1],P,()=>{t.F=t.l[0]+1,t.u=3},()=>{t.F=t.l[0]}][t.u]())}function FA(t,B,n,e){let E=t.D[B];E.i.map((t=>{R(t.o,A(E.x+n),A(E.y+e))}))}function MA(A,t,B){A.l=t,(A.F<A.l[0]||A.F>A.l[1])&&(A.F=t[0]),A.u=B}function aA(A,t,B){A.l=t,A.F=t[0],A.u=B,A.M=0}function IA(A){let t=A.U.D[A.R.F].C;return A.R.F>=A.R.l[1]&&A.R.M>=t}function sA(A,t){return A.F-A.l[0]===t}let UA,RA=[];let VA=-100;function PA(A,t){let B={V:A,P:t,H:[]};return F(A,t,((t,n)=>{B.H[n*A+t]={index:-1,T:0}})),UA=B,B}function HA(A,t,B,n){let e=UA.H[t*UA.V+A];e.index=c(B),e.T=n}function TA(A,t,B,n,e){let E=t;for(;E<B;++E){let t=UA.H[A*UA.V+E];t.index=c(n),t.T=e}}function OA(A,t,B,n,e,E=2){((A,t,B,n,e)=>{let E=t,Q=t+(B<=0?UA.P-1:B);for(;E<=Q;++E){let t=UA.H[E*UA.V+A];t.index=c(n),t.T=e}})(A,t,B-1,n,E),HA(A,t+B-1,e,E)}function SA(A){if(!UA)return 0;let B=t(A[0]/8);if(B<0||B>=UA.V)return VA;let n=t(A[1]/8),e=UA.H[n*UA.V+B];if(e&&I([2],e.T))return VA;for(;n>=0;--n)if(e=UA.H[n*UA.V+B],e&&I([1,2],e.T)){let t=8*n+8;if(t<A[1]+.05)return t}return VA}function xA(A,B,n,e){if(!UA)return A;let E=A+e,Q=A+e+(e<0?-n:n),o=t((A-=.001*e)/8),w=t(Q/8);if(o===w)return E;let g=t(B/8);if(g<0)return E;if(o>w)for(;o!==w;){if(o--,o<0)return n;if(2===UA.H[g*UA.V+o].T)return 8*o+8+n}else for(;o!==w;){if(o++,o>=UA.V)return 8*UA.V-n;if(2===UA.H[g*UA.V+o].T)return 8*o-n}return E}let YA,hA=[1,1];function KA(A,t,B){rA(hA[0],hA[1]);let n=YA.D[A];R(n.i[0].o,8*t+n.x,-8*B+n.y-8)}let GA=[],dA=[];(()=>{let A=DA("IRgbcmdrR0FrbIxQ49JF+KRet0hGTigumkB+qspT+fXvmZ7XkWxSIzkq3b6L");f(A.length/3,(t=>{let B=A.slice(3*t,3*t+3);GA.push(B),dA.push(`rgb(${B.join(",")})`)}))})();let pA="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",kA=[0,4],NA=[5,8],vA=[9,10],LA=[11,12],yA=[13,15],mA=[16,18],JA=[19,20],WA=[21,21],qA=[22,25],XA=[26,27],bA=[28,29],zA=lA(pA),ZA="AAABBgoBBS8AAAQDCgEFqgUAAAYGCgEFDMO0HgMAAAUFCgEG6n9HAAAABQUKAQeqRkUAAAAEBgoBBVKltQAAAgIKAQUGAAADBgoBBVQiAgAAAwYKAQURqQAAAAQGCgEF////AAIDAwoBBboAAAQCAgoBBQYAAwMBCgEFBwAFAQEKAQUBAAADBgoBBaSUAAAAAwYKAQVqWwEAAAMGCgEFk6QDAAADBgoBBaOTAwAAAwYKAQWjyAEAAAMGCgEFrUkCAAADBgoBBc/IAQAAAwYKAQXOWgEAAAMGCgEFJ0kCAAADBgoBBapaAQAAAwYKAQWqyQEAAQEECgEFCQABAQUKAQUZAAAFBgoBBUT8LwgAAQMDCgEFxwEAAAUGCgEFBP2PCAAAAwYKAQUvBQEAAAQGCgEFn93xAAAEBgoBBZf5mQAABAYKAQWXefkAAAQGCgEFHhHhAAAEBgoBBZeZeQAABAYKAQUfF/EAAAQGCgEFHxcRAAAEBgoBBR6deQAABAYKAQWZn5kAAAMGCgEFl6QDAAADBgoBBSbZAwAABAYKAQWZNZUAAAQGCgEFERHxAAAFBgoBBXHXWisAAAUGCgEFcdaaIwAABQYKAQUuxhgdAAAEBgoBBZd5EQAABQYKAQUuxpgsAAAEBgoBBZd5mQAABAYKAQUeYfgAAAUGCgEFnxBCCAAABAYKAQWZmWkAAAUGCgEFMSpFCAAABQYKAQUxxlodAAAFBgoBBVERoiIAAAUGCgEFMUZHCAAABAYKAQXPJPMAAAMGCgEFT5IDAAADBgoBBYlEAgAAAwYKAQUnyQMAAAYGCgEFjNcyDAM=",jA=(lA(ZA),{O:[0,2],S:[3,3],Y:[4,4],h:[5,5],K:[6,7],G:[8,8],p:[9,9],k:[10,10],N:[11,12],v:[12,12]}),$A=lA("AAAICAoBCf/M//+dDQQEAAAIBwoBCf9s///95iYAAAgICgEJ/7T/7/l5ODACAAQIAAEM73///gAACAgAAQ7//3z/P348PAACCAYKAQ0gtf////8AAAgHCgEBPH7w7l8/fgAACAgKAQF27w9g/v//fgAACAgKAQE4fH7+/fvnXgAGCAIKAQFm9wAACAgKAQEpOekpLykpKQAACAgKAQFA4EBETkTk/wAACAgKAQ3//////////w=="),_A=[0,2],At=[3,3],tt=[4,8],Bt=lA("CggKERkBBThQwQcXOEAIIW58TAADBCCAAAQYQAAJBw0SGQEF4AAqwAe4AA6AIDjDH0cACAADIAAEAAEwAASAABAACwgOERkBBeAAVAAVwAcwAUwADtzn+AcQAAwAAUAACAADgAAgAAkFDhRkAQUAB6ACqAA+gAvgA3AA4PcPfgAEgAEgAAQAAUAAIAAYAAgAAggICREPAQXgQMOHDHkyO3hAwEBGBAggYIAAAQcODQsPAQUAyDd9w0r4sTJCRnAQAANAAAgGEhAHDwEFDgC/gdVCn0QZNhkEDgQEERMIDwEFDgCoAEAFAD4YkQGJr4w4RhggAgISFgcPAQUOAMAHAPABAnwAARViwEeQ6SyEAQ=="),nt=(lA("CQgNEAoBCOABQiATkkStlKlKVamVulKXabUuyck8woffCQkODwoBCEAA6ABBICcIEmVFnQr9WnW1rtlr8mQewge/AQ=="),{L:[0,2]}),et=lA("DRAGCAoBBIwUtmkoMQ4QBAgKAQTW/b9rDxACCAoBBP//"),Et=lA("AAAWGQoBBADgAIA/APgegJ8H4MEBEGAAdAuAkQBgAAEYwAD2N4D9D8DDA/B/APgPcP4b4jxZMEAIEAgg+CEAAAAAAAB3dQDVFTBXBQAAFhkKAQQA4ACAPwD4HoCfB+DBARBgAHQLgJEAYAABGMAA9jeADQ/AwwPweQD4D3D+G+I8WTBACBAIIPghAAAAAAAAd3UA1RUwVwUBAhMXCgEEwAYAXwAMBDBAgLgDICBASAEBCChAQAAChBEgjIADDv77+OEvL56QYwAIAEAAAADA1RWkYiB3BQECExcKAQTABgBfAAwEMECAuAMgIEBIAQEIKEBAAALEESCAgAMO/vv44S8vnpBjAAgAQAAAAMDVFaRiIHcFAQAUGQoBBIA/AP4P8P8BBxAwPwD4FxgA4gRoJ7N+I+o3gG4DaCSAxsJoSECDDRJYv8EMGr6/8wd+//8HAAB8d0V1cVQVAgEAFBkKAQSAPwD+D/D/AQcQMD8A+BcYAOIEaCezfiPqN4BuA2gkgMbCaEhMgw0SWKHB7Bu+v/MHfv//BwAAfHdFdXFUFQI="),Qt="DQcJEQoBCT74sMCDBwYefrZp4sODAwUJEmMADQYJEgoBCTz8sMCDBwYMPPxs08SHBwcKEiXEAA0GCRIKAQk++LDAgwcGHn62aeLDAwMHChIkxgANBQkTCgEJAnjwYYEHDww8/GzTxIcHBg4UJEiMAQgHEREOAQl8APABYAGABwAPAAwgPCB8IPQgxiaAMYAEABEAIgCEAAgBGAYACQcREQ4BCQQA8ADgA8ACAA8AHiAYIHwg9CDGJoAxgAQAEQAhAEIAhAAMAwAKBxERDgEJeAD4AWABgAcADwAMIDwgfCD0IMYmgDGABIAIABEAIQBCAIYBAAoHERESAQkEAPAA4APAAgAPAB4gGCB8IPQgxiaAMQADwAeABAAEAAgAMAAACQYREhIBCXgA+AFgAYAHAA8ADCA8IHwg9CDGJoAxAA8AHgAUABgACAAIADAAAAgHEhESAQn4AMAHAAsAeADgAQADCB4QfiDnQQCbAIwBMABAAQAJAEMAAgEYDAACBxERGQEJgA+ADwAaAB4AOADgAOADYAewB9AP8P/x/9D/3wAI/BcAIMDAAAQHDhEyAQnAA/gBNIAH4AEwAD5AFogDYUAwCAwCTzAUAyFAGDAFBA4UKAEJgABAABCAC3AFdIGGBCGBifDBPwAPgAHAADAAFAAJMAQCgcECBhESEgEJABAAIACAAA4BLwJ0BDAQQCAAIwA//B8APADwAMACAAmAIYBAAAMDCAUQExIBCQCAAIAAQMBB8ENgQcAjgCOAEfAPzAPDA4ABgAOABUAEMAIIAhgGCAULEx4BCQIgAA/8wAJ84AVGfNR33mIQAyhAAiIQgRCGAQkIFhAUAQkQAAB4AAA+AIAFAMADAPAAAAwA4H8A5vF/eAAADADABwAIAQAiAEAIABgGAAgHEBEPAQkCADwAfAAsAHgAeAAwAPwA+gB5ATECOQxIMEjAiACIAIwBBwUREw8BCQAQAGAAwBGAwwOPDx4LPjz8eHxh/OJ/5f9KRlUMajxQRIAIASACYAwABgQOFCgBCQAgAAgAAoB8ID6IBcFD8AgYAT/gA8TAMAAeQAQQAYQAIsAYCgcQERQBCR8APgAWADwAHAAYBjwB/gA+AF4AHAAkwEQwSAyIAIQAhgEJChIOMgEJ+AHAAgA/AHgB4AkAIwBeAPwA8AHADwA/AEwAMwF07Q8HFBUEGQEJAOADwPs8//+49g8=",ot={L:[0,3],m:[4,6],advance:[7,9],J:[10,11],W:[12,14],q:[15,15],X:[16,17],Z:[18,19],j:[20,22]},wt=lA(Qt),gt=[0,1],Ct=[2,3],rt=[4,5],it=lA("BQ0VCwoBCAAEAYAxwNeF/f/BPz/4VyX/quS/f/z3g2sGoIgABQwVDAoBCAAEAYAxANAF+P6BPz/+VyX/quS/f/z3g/8GsNkAIQoABQwVDBQBCAAEAYAxANAF+P6xPz/4VyX/quS/f/z3g/8GsFkAEgoABQ0VCxQBCAAEAYAxwNeF/P7hPz/4VyX/quS/f/z3g40CkEAABQUUExQBCAAgAAACACAAAAAAIAAAAAAEAcAYAPwBwD/wo4K/qv+ryn9//P/DfwH8FcBGACQEAAULFA0UAQgABAHAGAD8AcA/8OOTv6r+q8p/f/z/w38B/BXARgAkBAA="),Dt=[0,2],lt=lA("CBcQAQoBDv//CBAQCAoBDhAQODi4OJAQUBR8fHg4//8IChAOCgEOEBA4OFRUEBAQERERERGSEJISlJKUVFhUWDn//w=="),ct=[0,4],ut=lA("DRIIBgoBBgQEDJ7//w0QCAgKAQYIDAwMiMIe/w4QBwgKAQYEBgYKEhgeDRAICAoBBhAwoAAEDBx/DRAHCAoBBigAgEBw+P4="),ft=lA(ZA);function Ft(A,t,B,n=!1){let e=A;return f(B.length,(E=>{let Q=r(B,E);if(32===Q)e+=4;else if(10===Q)e=A,t+=8;else{let A=ft.D[Q-33],B=A.i[0].o;n||R(B,e,t+A.y),e+=B.width+1}})),e-A}function Mt(){YA=$A;let A=j(60,80);_(13,23,0,14,40),_(0,24,0,7,40),f(10,(A=>{let t=1.173*A,B=30+17*o(t),n=45+14*w(t);$(13,B,n,16-A),$(0,B-l([1,2]),n+2,14-A)})),f(20,(B=>{let n=t(30*B+u(-7,8)),e=t(u(2,12));RA.push({$:A,_:[.4,1],x:n,y:e})}));let B=PA(80,4);TA(0,0,80,jA.v,0),TA(1,0,80,jA.v,0),TA(2,0,80,jA.v,0),TA(3,0,80,jA.h,0),RA.push({AA:B,_:[.5,.9],x:0,y:-2})}function at(A,t){OA(A,t,5,jA.K,jA.G,0),TA(t,A+1,A+4,jA.p,0),OA(A+4,t,5,jA.K,jA.G,0),((A,t)=>{Gt(A,t,12,64,zt,[0,0],(A=>{A.tA=!1}),{0(A){A.BA=!1},4(B){xt(A,t),eA(3),((A,t)=>{let B=z;f(6,(A=>{S.push([B,1,L(t,5-A),1]),B+=4})),f(6,(A=>{S.push([B,1,L(t,A),1]),B+=2}))})(0,K)}},{0(A){Lt>=yt&&Nt(A,2)},2(B){let n=((A,t,B)=>{let n=(B-0)/1.2;return n=n<0?0:n>1?1:n,n*n*(3-2*n)})(0,0,B.nA);B.x=A+2*g()-1,B.y=t-28*n,n>=1&&(B.x=A,Nt(B,3))},1(t){t.x=A,t.nA<.5&&(t.x=A+2*g()-1),t.nA>2&&Nt(t,0)},4(A){A.nA>1&&fB()}},{0(A){kt(0)&&Nt(A,1)},3(A){kt(0)&&Nt(A,4)}})})(8*(A+2)+3,It)}let It=8,st={87:38,65:37,83:40,68:39};let Ut=[],Rt=[];window.addEventListener("keydown",(A=>{H.resume();let t=A.keyCode;Ut[t]||(Ut[t]=!0,Rt[t]=!0,t=st[t],Ut[t]=!0,Rt[t]=!0)})),window.addEventListener("keyup",(A=>{let t=A.keyCode;Ut[t]=!1,t=st[t],Ut[t]=!1}));let Vt=lA(pA);cA(Vt,6);let Pt={eA:!1,U:zA,R:uA(NA,1),x:10,y:8,B:1,w:2,A:12,dx:0,dy:0,nA:0,EA:0,QA:0,oA:1,wA:{x:0,y:0,w:26,A:12},focus:0,gA:4,CA:1,rA:0,iA:0,DA:0,lA:!1,cA:0,uA:0,fA:!1,FA:[],MA:3};let Ht=!0,Tt=0,Ot=null,St=[0,0];function xt(A,t){11!==Pt.oA&&(Ot=11,St=[A,t])}function Yt(A){Pt.FA.push(A)}function ht(A,t){Pt.eA=!0,Pt.dx=0,Pt.dy=0,Pt.oA=0,Ot=1,Tt=[A,t]}let Kt=[];function Gt(A,t,B,n,e,E,Q,o,w,g){let C={U:e,R:uA(E,1),x:A,y:t,w:B,A:n,aA:o,IA:w,sA:g,nA:0,UA:0,oA:0,BA:!0,tA:!0,B:1,MA:2,eA:!0,dx:0};return Nt(C,0),Kt.push(C),Q(C),C}function dt(A,t){let B=A[t.oA];B&&B(t),B=A[100],B&&B(t)}let pt=0;let kt=A=>A===pt;function Nt(A,t){A.oA=t,A.nA=0,dt(A.aA,A)}function vt(A,t,B){A.UA>t&&(A.UA=0,B())}let Lt=0,yt=0;function mt(A,t,B=!0,E=(()=>{})){return yt++,Gt(A,t,3,8,et,nt.L,(A=>{A.eA=B,A.tA=!1}),{0(A){A.BA=!1,A.nA=5*g(),A.R.u=3},2(A){Lt++,A.R.F=0,m(1,[4,5],1),MA(A.R,nt.L,0),Nt(A,3),E()}},{0(A){A.y=t+3*e(o(A.nA*C*3))},1(A){let B=A.nA,n=20-17*B;A.x+=i*A.dx,A.y=t+e(o(B*C*3))*n,B>=1&&Nt(A,0)},3(A){A.y=t+35*n(A.nA,.5),A.nA>.5&&(Kt=Kt.filter((t=>t!=A)))}},{0(A){Nt(A,2)},1(A){A.nA>1&&Nt(A,2)}})}function Jt(A,t,B){A.eA=!0,A.x=t,A.y=B,A.dx=t>Pt.x?30:-30,Nt(A,1)}function Wt(A){A.B=Pt.x>A.x?1:-1}function qt(A,t){let B=mt(A,t,!1);return Gt(A,t,4,16,Bt,_A,(A=>{A.RA=!0}),{0(A){MA(A.R,_A,3),A.R.u=3,A.BA=!0},1(A){},2(A){v=d,Y(1,v,1),A.BA=!1,A.tA=!1,A.RA=!1}},{0(A){Wt(A)},1(A){IA(A)&&Nt(A,0)},2(A){A.nA}},{0(A){kt(1)&&(A.MA-=1,0===A.MA?(aA(A.R,tt,0),Nt(A,2),Jt(B,A.x,A.y)):(aA(A.R,At,0),Nt(A,1)))},1:0,2:0})}et.D.map((A=>{A.i.map((A=>{let t=A.o,B=V(t),[n,e]=[t.width,t.height],E=B.getImageData(0,0,n,e),Q=E.data,o=GA[10],w=(A,t)=>4*(t*n+A);F(n,e,((A,t)=>{let B=0;for(let n=A-1;n>=0;--n)if(Q[w(n,t)+3]){B+=1;break}for(let e=A+1;e<n;++e)if(Q[w(e,t)+3]){B+=1;break}for(let n=t-1;n>=0;--n)if(Q[w(A,n)+3]){B+=1;break}for(let n=t+1;n<e;++n)if(Q[w(A,n)+3]){B+=1;break}let E=w(A,t);4!=B||Q[E+3]||(Q[E]=o[0],Q[E+1]=o[1],Q[E+2]=o[2],Q[E+3]=255)})),B.putImageData(E,0,0)}))}));let Xt=jA.k[0],bt=jA.N[0],zt={D:[((A,t,B,n,e,E)=>{let Q=new OffscreenCanvas(24,32),o=V(Q),w=0;return F(3,4,((t,B)=>{let n=A.D[E[w++]];o.drawImage(n.i[0].o,8*t+n.x,8*B+n.y)})),{x:5,y:-8,C:100,i:[{o:Q}]}})($A,0,0,0,0,[bt,bt,bt,Xt,Xt,Xt,Xt,Xt,Xt,Xt,Xt,Xt])]},Zt=lA(Qt);function jt(A,t){$t(A,t).U=Zt}function $t(A,t){let B=mt(A,t,!1),E={VA:!1,PA:!1};return Gt(A,t,6,10,wt,ot.L,(A=>{A.MA=5,A.RA=!0}),{0(A){E.VA=!1,E.PA=!0},1(A){MA(A.R,ot.m,3),E.VA||(A.UA=2),E.VA=!0,E.PA=!0},2(A){MA(A.R,ot.advance,1)},4(A){A.dx=50*-A.B,aA(A.R,ot.W,0),A.MA--,A.MA<=0&&(v=d,Y(1,v,1),Jt(B,A.x,A.y),Nt(A,8)),E.PA=!1},5(A){aA(A.R,ot.q,0)},6(A){A.dx=50*A.B,aA(A.R,ot.X,0)},3(A){aA(A.R,ot.J,0)},7(A){aA(A.R,ot.Z,0),E.PA=!1},8(A){aA(A.R,ot.j,0),A.tA=!1,A.BA=!1,A.RA=!1},9(A){aA(A.R,ot.advance,2),A.dx=-100*A.B,A.UA-=1}},{0(A){Wt(A),A.detect=a(A,0,40)},1(A){A.BA=!0,((A,t,B)=>{let n=e(Pt.x-A.x);return n<20||n>30})(A)&&Nt(A,2),vt(A,3,(()=>Nt(A,5)))},2(A){((A,t,B,n)=>{Wt(A);let E=e(Pt.x-A.x);return E<21?(A.x-=20*A.B*i,A.R.u=2,!1):!(E>29&&(A.x+=20*A.B*i,A.R.u=1,1))})(A)&&Nt(A,1),vt(A,3,(()=>Nt(A,5)))},4(A){A.BA=!1,A.x+=A.dx*i,A.dx-=A.dx*(1-n(.01,i)),IA(A)&&Nt(A,1)},5(A){IA(A)&&Nt(A,6)},6(A){A.x+=A.dx*i,A.dx-=A.dx*(1-n(.01,i)),A.attack=a(A,0,12),IA(A)&&(A.UA=0,Nt(A,1))},3(A){A.BA=!1,IA(A)&&(A.UA=0,Nt(A,1))},7(A){IA(A)&&Nt(A,1),vt(A,3,(()=>Nt(A,5)))},9(A){A.x+=A.dx*i,A.dx-=A.dx*(1-n(.001,i)),A.dx<5&&Nt(A,1)}},{100(A){kt(1)&&E.PA&&(I([3,4],A.oA)||!(g()>.2)&&BA[6]?Nt(A,4):(Pt.fA=!0,Nt(A,7))),kt(4)&&Nt(A,3),kt(5)&&I([1,2],A.oA)&&(g()<.4?Nt(A,9):g()<.8?Nt(A,3):Nt(A,6))},0(A){kt(2)&&Nt(A,1)}})}function _t(A,t,B){return Gt(A,t,8,11,it,Ct,(A=>{A.B=B,A.BA=!0,A.tA=!0}),{0(A){aA(A.R,Ct,1)},1(A){aA(A.R,rt,1)},2(A){aA(A.R,gt,1)}},{0(A){A.detect=a(A,-24,40)},1(A){A.nA>3&&Nt(A,2)},2(A){A.attack=a(A,0,12),SA([A.x+50*A.B*i,10])===A.y&&(A.x+=50*A.B*i),A.nA>3&&Nt(A,0)}},{0(A){Nt(A,1),Wt(A)}})}function AB(A,t,B){return Gt(A,t,8,12,lt,Dt,(A=>{A.BA=!1,A.tA=!1,A.nA=B%3}),{0(A){MA(A.R,Dt,5)},1(A){MA(A.R,Dt,0)}},{0(A){A.BA=!1,A.nA>3&&Nt(A,1)},1(A){A.BA=!0,A.nA>3&&Nt(A,0)}},{})}function tB(A,t){return Gt(A,t,4,8,ut,ct,(A=>{A.BA=!0,A.tA=!1,A.R.M=5*g()}),{},{},{})}function BB(A){let t=A.split("\n").map((A=>{let t=A.split("|");return{HA:1*t[0],TA:t[1],OA:1*t[2]||0}}));eB={lines:t},EB=-1,gB()}function nB(){eB=0,nA=-1}cA(Zt,8);let eB=0,EB=0,QB=0,oB=2,wB=!1;let gB=()=>{EB++,QB=0,oB=2,wB=!1};function CB(){return 0===eB||EB>=eB.lines.length}let rB=0,iB=0,DB=!1,lB=-1,cB={};function uB(A){lB=A;let t=aB[A];Kt=[],yt=0,Lt=0,UA=void 0,RA=[],nB(),tA=BA.slice(0),x(),Pt.eA=!1,rB=0,iB=0,IB=t,DB=!1,cB={},v=K,t.SA(t)}function fB(){DB=!0}function FB(){BA=tA.slice(0),uB(lB)}function MB(){x(),q=0,f(10,(()=>{X(K,2),X(N,2),X(G,2),X(p,2)}))}let aB=[{SA(A){cB.loading=!1},xA(){let A="INSERT CARTRIDGE\nPRESS SPACE";cB.loading&&(A+="\nLOADING",f(7*rB,(()=>A+=".")),rB>3&&fB()),A+=rB%.25>.1?"*":"",Ft(3,3,A),Rt[32]&&!cB.loading&&(cB.loading=!0,rB=0)},YA:1,title:!0},{SA(A){ht(0,0),MB()},xA(){rB>3&&EA([0]),Ft(3,3,"ROBIN\nOF\nTHIRTEENSLEY"),Rt[32]&&(eA(0),fB())},YA:3,title:!0},{SA(){ht(0,0),MB(),xt(0,0),BB("|TO BE CONTINUETH!\n|THANK THEE FOR PLAYING THIS DEMO!\n|LOOK FOR THE FULL ADVENTURE AT GREAT STORES LIKE BYTE SHOP, IN THE FALL OF '83|2")},xA(){(rB>30||Rt[32])&&(nB(),fB())},YA:1,title:!0},{SA(){(()=>{Mt();let A=PA(100,20);RA.push({AA:A,_:[1,1],x:0,y:0});let t=26,B=1,n=()=>8*t+4;TA(0,0,24,jA.O,1),OA(7,1,5,jA.S,jA.Y),t=10,ht(n(),24),t+=6,mt(n(),It),t+=6,f(4,(A=>{TA(B,t,t+3,jA.O,1),mt(8*(t+1)+4,8*(B+1),!0,(()=>eA(2))),t+=5,B+=2})),B=1,TA(0,t,t+24,jA.O,1),t+=12,at(t,B),mt(400,It)})(),BB("1|HAH, YOU THINK YOU CAN JOIN OUR BAND?!\n1|PROVE IT. COLLECT ALL THE COIN")},xA(){EA([1,2]),Lt>=yt&&EA([3])},hA(){BB("1|A MONKEY COULD HAVE DONE THAT...")},YA:4},{SA(){(()=>{Mt();let A=PA(100,20);RA.push({AA:A,_:[1,1],x:0,y:0});let t=26,B=()=>8*t+4;TA(0,0,48,jA.O,1),t=3,ht(B(),24),t+=6,at(t,1),t+=12,qt(B(),8),t+=6,qt(B(),8),t+=6,qt(B(),8)})(),BB("1|OK, COINS DON'T JUST GROW ON TREES\n1|SKEWER THESE TRAINING DUMMIES")},xA(){EA([4,5])},hA(){BB("1|WELL MAYBE YOU'RE NOT HOPELESS...")},YA:5},{SA(){(()=>{Mt();let A=PA(100,20);RA.push({AA:A,_:[1,1],x:0,y:0});let t=3,B=()=>8*t+4;TA(0,t,48,jA.O,1),t+=3,ht(B(),24),t+=6,at(t,1),t+=12,$t(B(),8)})(),BB("1|LET'S TRY A REAL FIGHT\n1|WILL, GET OVER HERE!")},xA(){EA([6,7])},hA(){BB("1|THAT WAS PRETTY...\n2|JOHN, JOHN!\n2|THERE'S A CARRIAGE COMING!\n1|HO BOY! EVERYONE TO THE AMBUSH\n1|YOU TOO, ROBIN")},YA:6},{SA(){(()=>{Mt();let A=PA(128,30);RA.push({AA:A,_:[1,1],x:0,y:0});let t=3,B=1,n=()=>8*t+4,e=()=>8*B,E=t;t+=3,ht(n(),24),t+=6,HA(t,1,jA.Y,1),mt(n(),e()+8),t+=4,OA(t,1,2,jA.S,jA.Y),mt(n(),e()+16),t+=4,OA(t,1,4,jA.S,jA.Y),mt(n(),e()+32),t+=4,B=6,TA(B,t,t+4,jA.O,1),t+=10,TA(B,t,t+4,jA.O,1),t+=2,mt(n(),e()+8),TA(0,E,t-2,jA.O,1),E=t+6,t+=8,TA(6,t,t+5,jA.O,1),t+=2,mt(n(),e()+8),t+=8,TA(6,t,t+5,jA.O,1),t+=2,mt(n(),e()+8),t+=2,OA(t,B+1,B+10,jA.S,jA.Y),t-=13,B=1,_t(n(),e(),1),t+=12,_t(n(),e(),-1),t+=10,TA(0,E,t,jA.O,1),t+=4,E=t,t+=5,AB(n()+5,e(),0),t+=5,f(7,(A=>{AB(n()+5,e(),2.9-.15*A),t+=2})),t+=4,OA(t,B,B+8,jA.S,jA.Y),t-=8,TA(5,t,t+4,jA.O,1),t-=8,TA(6,t,t+4,jA.O,1),t-=8,TA(10,t,t+4,jA.O,1),t+=4,B=15,TA(15,t,t+4,jA.O,1),t+=2,mt(n(),e()+8),t+=5,TA(15,t,t+4,jA.O,1),t+=2,mt(n(),e()+8),t+=5,TA(15,t,t+4,jA.O,1),t+=2,mt(n(),e()+8),t+=6,t+=5,at(t,1),t+=10,TA(0,E,t,jA.O,1)})(),BB("1|MAKE YOUR WAY CAREFULLY\n1|STAY AWAY FROM THE WILDLIFE\n1|OH, AND THE TRAPS. WE HAVE BOOBY TRAPS")},xA(){EA([8])},hA(){BB("1|EVERYONE HERE? SHHH THEY'RE COMING")},YA:7},{SA(){(()=>{Mt();let A=PA(128,30);RA.push({AA:A,_:[1,1],x:0,y:0});let t=3,B=1,n=()=>8*t+4,e=()=>8*B,E=t;OA(t,1,4,jA.S,jA.Y),t+=20,ht(n(),24),t-=8,jt(n(),e()),t+=16,jt(n(),e()),t+=12,OA(t,1,4,jA.S,jA.Y),t+=5;let Q=t;f(10,(()=>{tB(n(),e()),t++})),OA(t,1,10,jA.S,jA.Y),mt(n(),88),t++,f(11,(()=>{tB(n(),e()),t++})),t=Q+2,B=5,TA(B,t,t+4,jA.O,1),t+=13,TA(B,t,t+4,jA.O,1),t+=20,B=1,jt(n(),e()),t+=12,at(t,1),t+=8,TA(0,E,t,jA.O,1)})(),BB("1|IT'S A REVERSE AMBUSH!\n1|ROBIN TAKE CARE OF THE SHERRIF'S MEN!")},xA(){},hA(){BB("3|HELP HELP!\n2|IS THAT... THE MAID MARION?\n1|ROBIN, STOP THAT CARRIAGE!")},YA:2}];let IB;uB(0);let sB=document.getElementById("c"),UB=128,RB=80;sB.width=UB,sB.height=RB;let VB=V(sB);VB.imageSmoothingEnabled=!1;let PB=0,HB=P;sB.style.display="none";let TB=document.createElement("canvas");document.body.appendChild(TB),TB.width=1024,TB.height=640;let OB=TB.getContext("webgl2");{let A=[-1,-1,-1,1,1,-1,1,1],t=OB.createBuffer();OB.bindBuffer(OB.ARRAY_BUFFER,t),OB.bufferData(OB.ARRAY_BUFFER,new Float32Array(A),OB.STATIC_DRAW);let B="\nattribute vec2 c;\nvarying vec2 u;\nvoid main(void) {\nu=c*0.5+0.5;\nu.y=1.0-u.y;\ngl_Position=vec4(c,0.5,1.0);\n}",n=OB.createShader(OB.VERTEX_SHADER);OB.shaderSource(n,B),OB.compileShader(n);let e="\nprecision highp float;\nvarying vec2 u;\nuniform sampler2D t;\nvoid main(void) {\nvec2 a=u;\na.x+=sin(u.x*6.28)*0.01;\na.y+=sin(u.y*6.28)*0.01;\nvec4 c=texture2D(t,a);\nc.r=texture2D(t,a+vec2(0.004,0.0)).r;\nc.b=texture2D(t,a-vec2(0.004,0.0)).b;\nvec2 d=abs(2.0*u-1.0);\nfloat v=1.0-pow(d.x,20.0)-pow(d.y,20.0);\nfloat l=1.0-pow(d.x,4.0)-pow(d.y,4.0);\nc*=(0.5+0.6*l)*step(0.0,v)*(0.8+0.3*abs(sin(a.y*3.14*80.0)));\nc.a = 0.8;\ngl_FragColor=c;\n}",E=OB.createShader(OB.FRAGMENT_SHADER);OB.shaderSource(E,e),OB.compileShader(E);let Q=OB.createProgram();OB.attachShader(Q,n),OB.attachShader(Q,E),OB.linkProgram(Q),OB.useProgram(Q),OB.bindBuffer(OB.ARRAY_BUFFER,t),OB.vertexAttribPointer(0,2,OB.FLOAT,!1,0,0),OB.enableVertexAttribArray(0);let o=OB.createTexture();OB.bindTexture(OB.TEXTURE_2D,o),OB.texParameteri(OB.TEXTURE_2D,OB.TEXTURE_MIN_FILTER,OB.LINEAR)}!function B(w){gA(),U("#21181b"),VB.fillRect(0,0,UB,RB);let g=E(100,w-PB);if(0===PB&&(g=0),PB=w,i=g/1e3,D+=i,function(A){if(!A.eA)return;let t=500*i,B=Q(SA([A.x-2,A.y]),SA([A.x+2,A.y])),E=()=>!!(Rt[38]&&A.EA<2)&&(A.EA||(A.CA=A.oA),A.y+=.1,A.dy=150,A.EA++,A.EA>1&&eA(8),A.gA=4,!0),w=B=>Ut[37]?(A.dx-=t*B,!0):!!Ut[39]&&(A.dx+=t*B,!0),g=()=>(A.y>B||0!=A.dy)&&(A.dy-=500*i,A.y+=A.dy*i,A.dy<0&&s(A.gA),!0),C=()=>A.y<=B&&A.dy<=0&&(A.y=B,A.dy=0,A.QA=B,A.EA=0,10!==A.CA&&J(0),!0),r=()=>{let t=!1;return Kt.forEach((B=>{B.RA&&B.eA&&M(B,A.wA)&&(t=!0)})),t},l=()=>{r()&&(A.lA||(v=k),A.lA=!0,s(8),A.wA.w=52)},c=()=>{r()||(A.lA&&(v=K),A.lA=!1,s(9),A.wA.w=26)},u=()=>!!Rt[32]&&s(7)||!!Rt[40]&&s(12)||!!Rt[38]&&s(13),f=()=>{A.FA.length>0&&(A.MA-=1,A.MA<=0&&FB()),A.FA.map((t=>{s(10),A.dx=A.x<t.x?-150:150,A.dy=100}))},F=()=>{let t=A.focus;0!==t&&(A.B=A.x<t.x?1:-1)},I=e(A.dx*i),s=t=>{if(A.oA!==t)return A.U=zA,A.oA=t,A.nA=0,[P,()=>{MA(A.R,NA,1),I>.2&&s(2),l()},()=>{MA(A.R,kA,1)},()=>{m(0,[0,1]),aA(A.R,vA,1)},()=>{MA(A.R,LA,1)},()=>{A.fA=!1,MA(A.R,yA,1)},()=>{MA(A.R,mA,1)},()=>{A.fA=!1,A.dx=A.B*(D-A.cA<2?250:175),aA(A.R,JA,0)},()=>{aA(A.R,WA,0)},()=>{aA(A.R,WA,0)},()=>{A.CA=10,v=p,Y(0,p,1),A.gA=10,MA(A.R,LA,1)},()=>{MA(A.R,qA,1)},()=>{A.dx=75*A.B,aA(A.R,XA,0)},()=>{A.dx=-10*A.B,aA(A.R,bA,0)}][t](),!0};var U,R;Ht&&(s(5),Ht=!1),Tt&&(s(1),A.x=Tt[0],A.y=Tt[1],A.dx=0,A.dy=0,A.QA=SA([A.x,A.y]),A.MA=3,U=A.x,R=A.y,oA[0]=QA[0]=U,oA[1]=QA[1]=R,Tt=0);let V=9999999,H=0;Kt.forEach((t=>{if(t.RA&&t.eA){let B=e(t.x-A.x),n=e(t.y-A.y);B<V&&n<16&&(V=B,H=t)}})),A.focus=H,A.nA+=i,null!==Ot&&(s(Ot),Ot=null),A.R.I=()=>{};let T=()=>{m(0,[3,4])};let O=!0;A.rA=0,A.iA=0,A.DA=0,[P,()=>{w(1)&&s(2),E()&&s(3),l(),f(),g()},()=>{A.R.I=T,A.nA>.25&&eA(1),w(1),I<.1&&s(1),E()&&s(3),l(),f(),g()},()=>{w(.75),g(),E()},()=>{g(),C()?s(1):E()&&s(3)},()=>{eA(4),O=!1,F(),w(.5)&&s(6),u(),c(),f(),g()},()=>{A.R.I=T,O=!1,F(),w(.5),I<.1&&s(5),u(),c(),f(),g()},()=>{O=!1,f(),sA(A.R,0)&&(A.rA={x:A.x+8*A.B,y:A.y,w:9,A:12}),IA(A)&&s(5),A.fA&&(s(10),A.dx=50*-A.B,A.dy=50)},()=>{O=!1,IA(A)&&s(5)},()=>{O=!1,IA(A)&&s(1)},()=>{A.fA||(A.U=o(70*A.nA)>0?Vt:zA),O=!1,g(),C()&&s(1)},()=>{A.dx=0,A.dy=0;let t=1-n(.01,i);A.x+=(St[0]-A.x)*t,A.y+=(St[1]-A.y)*t},()=>{O=!1,f(),IA(A)&&s(5),A.DA=a(A,0,20)},()=>{O=!1,sA(A.R,0)&&(A.iA={x:A.x+5*A.B,y:A.y,w:6,A:12}),IA(A)&&s(5),u()}][A.oA](),A.FA=[],A.dx*=n(.01,i),A.x=xA(A.x,A.y,A.w,A.dx*i),O&&(A.B=A.dx>=0?1:-1),A.y<=VA+1&&FB(),Kt.forEach((t=>{t.eA&&M(A,t)&&(t.BA?Yt(t):t.tA&&(A.x=t.x-(A.w+t.w)*A.B))})),A.wA.x=A.x,A.wA.y=A.y,fA(A.U,A.R),((A,t)=>{QA[0]=A,QA[1]=t})(A.x+A.dx/4,A.QA+(A.y-A.QA)/4+10)}(Pt),function(){let A=!1;Kt.forEach((t=>{t.eA&&Pt.eA&&(t.detect=void 0,t.attack=void 0,t.nA+=i,t.UA+=i,dt(t.IA,t),M(Pt.rA,t)&&(pt=1,dt(t.sA,t),A=!0),M(Pt,t)&&(pt=0,dt(t.sA,t)),M(t.detect,Pt)&&(pt=2,dt(t.sA,t)),M(t.attack,Pt)&&(pt=3,dt(t.sA,t),Yt(t)),M(t.attack,Pt.iA)&&(pt=4,dt(t.sA,t),eA(6),Pt.cA=D,Pt.dx=60),M(t,Pt.DA)&&(pt=5,dt(t.sA,t),eA(7),Pt.uA=D),fA(t.U,t.R))})),A&&(J(1,1),eA(5),Pt.fA||(Pt.dx*=.5))}(),oA[0]+=(QA[0]-oA[0])*(1-n(.001,i)),oA[1]+=(QA[1]-oA[1])*(1-n(.01,i)),wA[0]=A(oA[0])-64,wA[1]=40-A(oA[1]),RA.forEach((A=>{hA=A._;let t=A.AA;t&&F(t.V,t.P,((B,n)=>{let e=t.H[n*t.V+B];e&&e.index>=0&&KA(e.index,A.x+B,A.y+n)}));let B=A.$;B&&(rA(hA[0],hA[1]),VB.scale(1,-1),R(B.o,A.x,A.y));let n=A.KA;if(n){n.M+=100*i;let t=YA.D[n.F].C;n.M>t&&(n.M-=t,n.F++,n.F>n.l[1]&&(n.F=n.l[0])),KA(n.F,A.x,A.y)}})),Kt.forEach((A=>{A.eA&&(CA(A.x,A.y),A.B<0&&iA(),FA(A.U,A.R.F,-16,-24))})),(A=>{A.eA&&(CA(A.x,A.y),A.B<0&&iA(),FA(A.U,A.R.F,-16,-24))})(Pt),VB.resetTransform(),(()=>{if(0===eB)return!1;let B=eB.lines[EB];if(!B)return!1;if(QB+=i,wB&&(oB-=i),1===B.OA&&Rt[90])return gB();if(0===B.OA&&oB<0)return gB();let n=22,e=3;B.HA>0&&(VB.resetTransform(),U(dA[0]),s(.5),VB.fillRect(0,52,22,28),s(1),FA(Et,2*(B.HA-1)+(wB?0:A(8*QB)%2),1,53),n=20,e=22);let Q=B.TA.split(" "),o="",w=[];for(;Q.length;)o.length+Q[0].length>n&&(w.push(o),o=""),o+=" "+Q.shift();w.push(o);let g=80-8*w.length-1,C=20*QB;return w.map((A=>{let B=E(C,A.length);s(.5),VB.fillRect(e,g-1,100,8),s(1);let n=A.substring(0,B),Q=Ft(0,0,n,!0);Ft(e+t((124-e-Q)/2),g,n),C-=B,g+=8})),wB=C>0,!0})()||yt&&(FA(et,0,86,55),Ft(107,72,`${Lt}/${yt}`)),!IB.title){let A="";f(3,(t=>A+=t<Pt.MA?"$":"%")),Ft(56,4,A)}rB+=i,IB.xA?.(IB),DB?(cB.hA||(IB.hA?.(),cB.hA=!0),CB()&&(iB-=3*i,iB<0&&(iB=0,uB(IB.YA)))):iB=E(iB+i,1),iB<1&&(U(dA[0]),s(1-iB),VB.fillRect(0,0,UB,RB),s(1)),Rt=[],HB(),OB.texImage2D(OB.TEXTURE_2D,0,OB.RGBA,OB.RGBA,OB.UNSIGNED_BYTE,sB),OB.drawArrays(OB.TRIANGLE_STRIP,0,4),Z-=i,Z<0&&(Z+=.05,z++,S=S.filter((A=>A[0]>z||(h[A[1]].port.postMessage([A[2],E(.1,.1*A[3])]),A[4]&&(v=A[4]),!1)))),requestAnimationFrame(B)}(0);