var lo="187";var zh=0,Jl=1,kh=2;var Ki=1,Hh=2,Ns=3,Xn=0,$t=1,Ft=2,ui=0,Us=1,Pr=2,Kl=3,Ql=4,Gh=5;var Qi=100,Vh=101,Wh=102,Xh=103,qh=104,Yh=200,Zh=201,$h=202,Jh=203,jl=204,ec=205,Kh=206,Qh=207,jh=208,eu=209,tu=210,nu=211,iu=212,su=213,ru=214,Aa=0,Ra=1,Ca=2,ys=3,Pa=4,Ia=5,La=6,Da=7,tc=0,au=1,ou=2,qn=0,Ir=1,Lr=2,Dr=3,ji=4,Nr=5,Ur=6,Fr=7;var nc=300,es=301,Fs=302,co=303,ho=304,Ti=1e3,Hn=1001,Na=1002,qt=1003,lu=1004;var Or=1005;var Yt=1006,uo=1007;var di=1008;var cn=1009,ic=1010,sc=1011,Os=1012,fo=1013,Nn=1014,Un=1015,Ot=1016,po=1017,mo=1018,ts=1020,rc=35902,ac=35899,oc=1021,lc=1022,Fn=1023,ri=1026,fi=1027,cc=1028,go=1029,Di=1030,_o=1031;var xo=1033,Br=33776,zr=33777,kr=33778,Hr=33779,vo=35840,yo=35841,Mo=35842,So=35843,bo=36196,Eo=37492,To=37496,wo=37488,Ao=37489,Gr=37490,Ro=37491,Co=37808,Po=37809,Io=37810,Lo=37811,Do=37812,No=37813,Uo=37814,Fo=37815,Oo=37816,Bo=37817,zo=37818,ko=37819,Ho=37820,Go=37821,Vo=36492,Wo=36494,Xo=36495,qo=36283,Yo=36284,Vr=36285,Zo=36286;var er=2300,Ua=2301,Ea=2302,zl=2303,kl=2400,Hl=2401,Gl=2402;var cu=3200;var $o=0,hu=1,On="",kt="srgb",tr="srgb-linear",nr="linear",pt="srgb";var Ta=7680;var uu=519,du=512,fu=513,pu=514,hc=515,mu=516,gu=517,uc=518,dc=519,_u=35044;var fc="300 es",Sn=2e3,Ms=2001;function zd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){let i=Ss("canvas");return i.style.display="block",i}var oh={},bs=null;function pc(...i){let e="THREE."+i.shift();bs?bs("log",e,...i):console.log(e,...i)}function vu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=vu(i);let e="THREE."+i.shift();if(bs)bs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=vu(i);let e="THREE."+i.shift();if(bs)bs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Wi(...i){let e=i.join(" ");e in oh||(oh[e]=!0,Ze(...i))}function yu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Mu={[Aa]:Aa,[Ca]:La,[Pa]:Pa,[ys]:Ia,[Ra]:Ra,[La]:Ca,[Da]:Da,[Ia]:ys},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pl=Math.PI/180,ir=180/Math.PI;function Bs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Hd(i,e){return(i%e+e)%e}function ml(i,e,t){return(1-t)*i+t*e}function Su(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gd(i,e){if(e.constructor===Float32Array)return i;let t=mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Vd(i,e){if(e.constructor===Float32Array)return i;let t=mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Mc=class Mc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mc.prototype.isVector2=!0;var ie=Mc,En=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==p||h!==_){let m=l*u+c*p+h*_+f*y;m<0&&(u=-u,p=-p,_=-_,y=-y,m=-m);let d=1-o;if(m<.9995){let g=Math.acos(m),M=Math.sin(g);d=Math.sin(d*g)/M,o=Math.sin(o*g)/M,l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,f=f*d+y*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+_*o,f=f*d+y*o;let g=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=g,c*=g,h*=g,f*=g}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*f+l*p-c*u,e[t+1]=l*_+h*u+c*f-o*p,e[t+2]=c*_+h*p+o*u-l*f,e[t+3]=h*_-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"YZX":this._x=u*h*f+c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f-u*p*_;break;case"XZY":this._x=u*h*f-c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f+u*p*_;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sc=class Sc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sc.prototype.isVector3=!0;var D=Sc,gl=new D,lh=new En,bc=class bc{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],_=n[8],y=s[0],m=s[3],d=s[6],g=s[1],M=s[4],v=s[7],S=s[2],T=s[5],x=s[8];return r[0]=a*y+o*g+l*S,r[3]=a*m+o*M+l*T,r[6]=a*d+o*v+l*x,r[1]=c*y+h*g+f*S,r[4]=c*m+h*M+f*T,r[7]=c*d+h*v+f*x,r[2]=u*y+p*g+_*S,r[5]=u*m+p*M+_*T,r[8]=u*d+p*v+_*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=t*f+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=f*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_l.makeScale(e,t)),this}rotate(e){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bc.prototype.isMatrix3=!0;var je=bc,_l=new je,ch=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wd(){let i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:e,whitePoint:n,transfer:nr,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}var ct=Wd();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,Fa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=Ss("canvas")),rs.width=e.width,rs.height=e.height;let s=rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xd=0,Es=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xl(s[a].image)):r.push(xl(s[a]))}else r=xl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var qd=0,vl=new D,sn=class i extends Vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=Yt,a=di,o=Fn,l=cn,c=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Bs(),this.name="",this.source=new Es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=nc;sn.DEFAULT_ANISOTROPY=1;var Ec=class Ec{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(p+1)/2,S=(d+1)/2,T=(h+u)/4,x=(f+y)/4,b=(_+m)/4;return M>v&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=x/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=b/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=x/r,s=b/r),this.set(n,s,r,t),this}let g=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-y)/g,this.z=(u-h)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ec.prototype.isVector4=!0;var Pt=Ec,Oa=class extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new sn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Es(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends Oa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},sr=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ba=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var oo=class oo{constructor(e,t,n,s,r,a,o,l,c,h,f,u,p,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,p,_,y,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,p,_,y,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*f,_=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*f,_=c*h,y=c*f;t[0]=u+y*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*f,_=c*h,y=c*f;t[0]=u-y*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*f,_=o*h,y=o*f;t[0]=l*h,t[4]=_*c-p,t[8]=u*c+y,t[1]=l*f,t[5]=y*c+u,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*h,t[4]=y-u*f,t[8]=_*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+_,t[10]=u-y*f}else if(e.order==="XZY"){let u=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+y,t[5]=a*h,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yd,e,Zd)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),vi.crossVectors(n,pn),vi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),vi.crossVectors(n,pn)),vi.normalize(),ea.crossVectors(pn,vi),s[0]=vi.x,s[4]=ea.x,s[8]=pn.x,s[1]=vi.y,s[5]=ea.y,s[9]=pn.y,s[2]=vi.z,s[6]=ea.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],_=n[2],y=n[6],m=n[10],d=n[14],g=n[3],M=n[7],v=n[11],S=n[15],T=s[0],x=s[4],b=s[8],P=s[12],R=s[1],N=s[5],L=s[9],k=s[13],A=s[2],B=s[6],G=s[10],O=s[14],re=s[3],W=s[7],H=s[11],z=s[15];return r[0]=a*T+o*R+l*A+c*re,r[4]=a*x+o*N+l*B+c*W,r[8]=a*b+o*L+l*G+c*H,r[12]=a*P+o*k+l*O+c*z,r[1]=h*T+f*R+u*A+p*re,r[5]=h*x+f*N+u*B+p*W,r[9]=h*b+f*L+u*G+p*H,r[13]=h*P+f*k+u*O+p*z,r[2]=_*T+y*R+m*A+d*re,r[6]=_*x+y*N+m*B+d*W,r[10]=_*b+y*L+m*G+d*H,r[14]=_*P+y*k+m*O+d*z,r[3]=g*T+M*R+v*A+S*re,r[7]=g*x+M*N+v*B+S*W,r[11]=g*b+M*L+v*G+S*H,r[15]=g*P+M*k+v*O+S*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],_=e[3],y=e[7],m=e[11],d=e[15],g=l*p-c*u,M=o*p-c*f,v=o*u-l*f,S=a*p-c*h,T=a*u-l*h,x=a*f-o*h;return t*(y*g-m*M+d*v)-n*(_*g-m*S+d*T)+s*(_*M-y*S+d*x)-r*(_*v-y*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],_=e[12],y=e[13],m=e[14],d=e[15],g=t*o-n*a,M=t*l-s*a,v=t*c-r*a,S=n*l-s*o,T=n*c-r*o,x=s*c-r*l,b=h*y-f*_,P=h*m-u*_,R=h*d-p*_,N=f*m-u*y,L=f*d-p*y,k=u*d-p*m,A=g*k-M*L+v*N+S*R-T*P+x*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/A;return e[0]=(o*k-l*L+c*N)*B,e[1]=(s*L-n*k-r*N)*B,e[2]=(y*x-m*T+d*S)*B,e[3]=(u*T-f*x-p*S)*B,e[4]=(l*R-a*k-c*P)*B,e[5]=(t*k-s*R+r*P)*B,e[6]=(m*v-_*x-d*M)*B,e[7]=(h*x-u*v+p*M)*B,e[8]=(a*L-o*R+c*b)*B,e[9]=(n*R-t*L-r*b)*B,e[10]=(_*T-y*v+d*g)*B,e[11]=(f*v-h*T-p*g)*B,e[12]=(o*P-a*N-l*b)*B,e[13]=(t*N-n*P+s*b)*B,e[14]=(y*M-_*S-m*g)*B,e[15]=(h*S-f*M+u*g)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,_=r*f,y=a*h,m=a*f,d=o*f,g=l*c,M=l*h,v=l*f,S=n.x,T=n.y,x=n.z;return s[0]=(1-(y+d))*S,s[1]=(p+v)*S,s[2]=(_-M)*S,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(u+d))*T,s[6]=(m+g)*T,s[7]=0,s[8]=(_+M)*x,s[9]=(m-g)*x,s[10]=(1-(u+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),l=as.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);let c=1/a,h=1/o,f=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Sn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),_,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===Sn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ms)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Sn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),_,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===Sn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ms)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};oo.prototype.isMatrix4=!0;var Rt=oo,as=new D,An=new Rt,Yd=new D(0,0,0),Zd=new D(1,1,1),vi=new D,ea=new D,pn=new D,uh=new Rt,dh=new En,In=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dh.setFromEuler(this),this.setFromQuaternion(dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$d=0,fh=new D,os=new En,jn=new Rt,ta=new D,Ys=new D,Jd=new D,Kd=new En,ph=new D(1,0,0),mh=new D(0,1,0),gh=new D(0,0,1),_h={type:"added"},Qd={type:"removed"},ls={type:"childadded",child:null},yl={type:"childremoved",child:null},Kt=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new In,n=new En,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new je}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(ph,e)}rotateY(e){return this.rotateOnAxis(mh,e)}rotateZ(e){return this.rotateOnAxis(gh,e)}translateOnAxis(e,t){return fh.copy(e).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ph,e)}translateY(e){return this.translateOnAxis(mh,e)}translateZ(e){return this.translateOnAxis(gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ys,ta,this.up):jn.lookAt(ta,Ys,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(jn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),ls.child=e,this.dispatchEvent(ls),ls.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qd),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,Jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new D(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jd={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},na={h:0,s:0,l:0};function Ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Hd(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ml(a,r,e+1/3),this.g=Ml(a,r,e),this.b=Ml(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ct.workingToColorSpace(tn.copy(this),e),Math.round(at(tn.r*255,0,255))*65536+Math.round(at(tn.g*255,0,255))*256+Math.round(at(tn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=kt){ct.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(na);let n=ml(yi.h,na.h,t),s=ml(yi.s,na.s,t),r=ml(yi.l,na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new ge;ge.NAMES=bu;var wi=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new D,ei=new D,Sl=new D,ti=new D,cs=new D,hs=new D,xh=new D,bl=new D,El=new D,Tl=new D,wl=new Pt,Al=new Pt,Rl=new Pt,Ei=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),ei.subVectors(n,t),Sl.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(ei),l=Rn.dot(Sl),c=ei.dot(ei),h=ei.dot(Sl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return wl.setScalar(0),Al.setScalar(0),Rl.setScalar(0),wl.fromBufferAttribute(e,t),Al.fromBufferAttribute(e,n),Rl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wl,r.x),a.addScaledVector(Al,r.y),a.addScaledVector(Rl,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),ei.subVectors(e,t),Rn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Rn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;cs.subVectors(s,n),hs.subVectors(r,n),bl.subVectors(e,n);let l=cs.dot(bl),c=hs.dot(bl);if(l<=0&&c<=0)return t.copy(n);El.subVectors(e,s);let h=cs.dot(El),f=hs.dot(El);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(cs,a);Tl.subVectors(e,r);let p=cs.dot(Tl),_=hs.dot(Tl);if(_>=0&&p<=_)return t.copy(r);let y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(hs,o);let m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return xh.subVectors(r,s),o=(f-h)/(f-h+(p-_)),t.copy(s).addScaledVector(xh,o);let d=1/(m+y+u);return a=y*d,o=u*d,t.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ai=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),sa.subVectors(this.max,Zs),us.subVectors(e.a,Zs),ds.subVectors(e.b,Zs),fs.subVectors(e.c,Zs),Mi.subVectors(ds,us),Si.subVectors(fs,ds),ki.subVectors(us,fs);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-ki.z,ki.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,ki.z,0,-ki.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-ki.y,ki.x,0];return!Cl(t,us,ds,fs,sa)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,us,ds,fs,sa))?!1:(ra.crossVectors(Mi,Si),t=[ra.x,ra.y,ra.z],Cl(t,us,ds,fs,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ni=[new D,new D,new D,new D,new D,new D,new D,new D],Cn=new D,ia=new Ai,us=new D,ds=new D,fs=new D,Mi=new D,Si=new D,ki=new D,Zs=new D,sa=new D,ra=new D,Hi=new D;function Cl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);let o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var zt=new D,aa=new ie,ef=0,bn=class extends Vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ef++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_u,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=e!==void 0?mc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Gd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Vd(e,this.array)}};var ar=class extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var or=class extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}},tf=new Ai,$s=new D,Pl=new D,Xi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);let t=$s.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Pl)),this.expandByPoint($s.copy(e.center).sub(Pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nf=0,Mn=new Rt,Il=new Kt,ps=new D,mn=new Ai,Js=new Ai,Xt=new D,bt=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?or:ar)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(mn.min,Js.min),mn.expandByPoint(Xt),Xt.addVectors(mn.max,Js.max),mn.expandByPoint(Xt)):(mn.expandByPoint(Js.min),mn.expandByPoint(Js.max))}mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),Xt.add(ps)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new D,l[P]=new D;let h=new D,f=new D,u=new D,p=new ie,_=new ie,y=new ie,m=new D,d=new D;function g(P,R,N){c[P]=c[R]=c[N]=1,h.fromBufferAttribute(n,P),f.fromBufferAttribute(n,R),u.fromBufferAttribute(n,N),p.fromBufferAttribute(r,P),_.fromBufferAttribute(r,R),y.fromBufferAttribute(r,N),f.sub(h),u.sub(h),_.sub(p),y.sub(p);let L=1/(_.x*y.y-y.x*_.y);isFinite(L)&&(m.copy(f).multiplyScalar(y.y).addScaledVector(u,-_.y).multiplyScalar(L),d.copy(u).multiplyScalar(_.x).addScaledVector(f,-y.x).multiplyScalar(L),o[P].add(m),o[R].add(m),o[N].add(m),l[P].add(d),l[R].add(d),l[N].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,R=M.length;P<R;++P){let N=M[P],L=N.start,k=N.count;for(let A=L,B=L+k;A<B;A+=3)g(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let v=new D,S=new D,T=new D,x=new D;function b(P){T.fromBufferAttribute(s,P),x.copy(T);let R=o[P];v.copy(R),v.sub(T.multiplyScalar(T.dot(R))).normalize(),S.crossVectors(x,R);let L=S.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,L)}for(let P=0,R=n.count;P<R;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){let _=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let d=0;d<h;d++)u[_++]=c[p++]}return new bn(u,h,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ll=new D,sf=new D,rf=new je,Pn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ll.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ll),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rf.getNormalMatrix(e),s=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},af=0,ai=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Us,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=ec,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ii=new D,Dl=new D,oa=new D,la=new D,lr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Dl.copy(e).add(t).multiplyScalar(.5),oa.copy(t).sub(e).normalize(),la.copy(this.origin).sub(Dl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(oa),o=la.dot(this.direction),l=-la.dot(oa),c=la.lengthSq(),h=Math.abs(1-a*a),f,u,p,_;if(h>0)if(f=a*l-o,u=a*o-l,_=r*h,f>=0)if(u>=-_)if(u<=_){let y=1/h;f*=y,u*=y,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Dl).addScaledVector(oa,u),p}intersectSphere(e,t){if(e.radius<0)return null;ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,_=t.x-a.x,y=t.y-a.y,m=t.z-a.z,d=n.x-a.x,g=n.y-a.y,M=n.z-a.z,v=Math.abs(l),S=Math.abs(c),T=Math.abs(h),x,b,P,R,N,L,k,A,B,G,O,re;if(v>=S&&v>=T?(P=l,L=f,B=_,re=d,l>=0?(x=c,b=h,R=u,N=p,k=y,A=m,G=g,O=M):(x=h,b=c,R=p,N=u,k=m,A=y,G=M,O=g)):S>=T?(P=c,L=u,B=y,re=g,c>=0?(x=h,b=l,R=p,N=f,k=m,A=_,G=M,O=d):(x=l,b=h,R=f,N=p,k=_,A=m,G=d,O=M)):(P=h,L=p,B=m,re=M,h>=0?(x=l,b=c,R=f,N=u,k=_,A=y,G=d,O=g):(x=c,b=l,R=u,N=f,k=y,A=_,G=g,O=d)),P===0)return null;let W=x/P,H=b/P,z=1/P,j=R-W*L,de=N-H*L,V=k-W*B,ee=A-H*B,ae=G-W*re,ve=O-H*re,he=ae*ee-ve*V,ue=j*ve-de*ae,Be=V*de-ee*j;if(s){if(he<0||ue<0||Be<0)return null}else if((he<0||ue<0||Be<0)&&(he>0||ue>0||Be>0))return null;let Ie=he+ue+Be;if(Ie===0)return null;let Ue=z*(he*L+ue*B+Be*re);return(Ie>0?Ue<0:Ue>0)?null:this.at(Ue/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ln=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vh=new Rt,Gi=new lr,ca=new Xi,yh=new D,ha=new D,ua=new D,da=new D,Nl=new D,fa=new D,Mh=new D,pa=new D,mt=class extends Kt{constructor(e=new bt,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Nl.fromBufferAttribute(f,e),a?fa.addScaledVector(Nl,h):fa.addScaledVector(Nl.sub(t),h))}t.add(fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(ca.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ca,yh)===null||Gi.origin.distanceToSquared(yh)>(e.far-e.near)**2))&&(vh.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(vh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let m=u[_],d=a[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,S=M;v<S;v+=3){let T=o.getX(v),x=o.getX(v+1),b=o.getX(v+2);s=ma(this,d,e,n,c,h,f,T,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){let g=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=ma(this,a,e,n,c,h,f,g,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let m=u[_],d=a[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,S=M;v<S;v+=3){let T=v,x=v+1,b=v+2;s=ma(this,d,e,n,c,h,f,T,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,d=y;m<d;m+=3){let g=m,M=m+1,v=m+2;s=ma(this,a,e,n,c,h,f,g,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function of(i,e,t,n,s,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Xn,o),l===null)return null;pa.copy(o),pa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:i}}function ma(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ha),i.getVertexPosition(l,ua),i.getVertexPosition(c,da);let h=of(i,e,t,n,ha,ua,da,Mh);if(h){let f=new D;Ei.getBarycoord(Mh,ha,ua,da,f),s&&(h.uv=Ei.getInterpolatedAttribute(s,o,l,c,f,new ie)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,l,c,f,new ie)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Ei.getNormal(ha,ua,da,u.normal),h.face=u,h.barycoord=f}return h}var za=class extends sn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=qt,h=qt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vi=new Xi,lf=new ie(.5,.5),ga=new D,Ri=class{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],_=r[8],y=r[9],m=r[10],d=r[11],g=r[12],M=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-a,p-h,d-_,S-g).normalize(),s[1].setComponents(c+a,p+h,d+_,S+g).normalize(),s[2].setComponents(c+o,p+f,d+y,S+M).normalize(),s[3].setComponents(c-o,p-f,d-y,S-M).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,p-u,d-m,S-v).normalize();else if(s[4].setComponents(c-l,p-u,d-m,S-v).normalize(),t===Sn)s[5].setComponents(c+l,p+u,d+m,S+v).normalize();else if(t===Ms)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=lf.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Sh=new Rt,ka=class i{constructor(){this.coordinateSystem=Sn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Sh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ri),n[s].setFromProjectionMatrix(Sh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ri),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ws=class extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bh=new Rt,Vl=new lr,_a=new Xi,xa=new D,cr=class extends Kt{constructor(e=new bt,t=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;bh.copy(s).invert(),Vl.copy(e.ray).applyMatrix4(bh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=u,y=p;_<y;_++){let m=c.getX(_);xa.fromBufferAttribute(f,m),Eh(xa,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=u,y=p;_<y;_++)xa.fromBufferAttribute(f,_),Eh(xa,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Eh(i,e,t,n,s,r,a){let o=Vl.distanceSqToPoint(i);if(o<t){let l=new D;Vl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var hr=class extends sn{constructor(e=[],t=es,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wn=class extends sn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends sn{constructor(e,t,n=Nn,s,r,a,o=qt,l=qt,c,h=ri,f=1){if(h!==ri&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ur=class extends oi{constructor(e,t=Nn,n=es,s,r,a=qt,o=qt,l,c=ri){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},dr=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},gn=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(f,2));function _(y,m,d,g,M,v,S,T,x,b,P){let R=v/x,N=S/b,L=v/2,k=S/2,A=T/2,B=x+1,G=b+1,O=0,re=0,W=new D;for(let H=0;H<G;H++){let z=H*N-k;for(let j=0;j<B;j++){let de=j*R-L;W[y]=de*g,W[m]=z*M,W[d]=A,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[d]=T>0?1:-1,h.push(W.x,W.y,W.z),f.push(j/x),f.push(1-H/b),O+=1}}for(let H=0;H<b;H++)for(let z=0;z<x;z++){let j=u+z+B*H,de=u+z+B*(H+1),V=u+(z+1)+B*(H+1),ee=u+(z+1)+B*H;l.push(j,de,ee),l.push(de,V,ee),re+=6}o.addGroup(p,re,P),p+=re,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},fr=class i extends bt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,_=n*2+r,y=s+1,m=new D,d=new D;for(let g=0;g<=_;g++){let M=0,v=0,S=0,T=0;if(g<=n){let P=g/n,R=P*Math.PI/2;v=-h-e*Math.cos(R),S=e*Math.sin(R),T=-e*Math.cos(R),M=P*f}else if(g<=n+r){let P=(g-n)/r;v=-h+P*t,S=e,T=0,M=f+P*u}else{let P=(g-n-r)/n,R=P*Math.PI/2;v=h+e*Math.sin(R),S=e*Math.cos(R),T=e*Math.sin(R),M=f+u+P*f}let x=Math.max(0,Math.min(1,M/p)),b=0;g===0?b=.5/s:g===_&&(b=-.5/s);for(let P=0;P<=s;P++){let R=P/s,N=R*Math.PI*2,L=Math.sin(N),k=Math.cos(N);d.x=-S*k,d.y=v,d.z=S*L,o.push(d.x,d.y,d.z),m.set(-S*k,T,S*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+b,x)}if(g>0){let P=(g-1)*y;for(let R=0;R<s;R++){let N=P+R,L=P+R+1,k=g*y+R,A=g*y+R+1;a.push(N,L,k),a.push(L,A,k)}}}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Tn=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],p=[],_=0,y=[],m=n/2,d=0;g(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2));function g(){let v=new D,S=new D,T=0,x=(t-e)/n;for(let b=0;b<=r;b++){let P=[],R=b/r,N=R*(t-e)+e;for(let L=0;L<=s;L++){let k=L/s,A=k*l+o,B=Math.sin(A),G=Math.cos(A);S.x=N*B,S.y=-R*n+m,S.z=N*G,f.push(S.x,S.y,S.z),v.set(B,x,G).normalize(),u.push(v.x,v.y,v.z),p.push(k,1-R),P.push(_++)}y.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let R=y[P][b],N=y[P+1][b],L=y[P+1][b+1],k=y[P][b+1];(e>0||P!==0)&&(h.push(R,N,k),T+=3),(t>0||P!==r-1)&&(h.push(N,L,k),T+=3)}c.addGroup(d,T,0),d+=T}function M(v){let S=_,T=new ie,x=new D,b=0,P=v===!0?e:t,R=v===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,m*R,0),u.push(0,R,0),p.push(.5,.5),_++;let N=_;for(let L=0;L<=s;L++){let A=L/s*l+o,B=Math.cos(A),G=Math.sin(A);x.x=P*G,x.y=m*R,x.z=P*B,f.push(x.x,x.y,x.z),u.push(0,R,0),T.x=B*.5+.5,T.y=G*.5*R+.5,p.push(T.x,T.y),_++}for(let L=0;L<s;L++){let k=S+L,A=N+L;v===!0?h.push(A,A+1,k):h.push(A+1,A,k),b+=3}c.addGroup(d,b,v===!0?1:2),d+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},As=class i extends Tn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ha=class i extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){let M=new D,v=new D,S=new D;for(let T=0;T<t.length;T+=3)p(t[T+0],M),p(t[T+1],v),p(t[T+2],S),l(M,v,S,g)}function l(g,M,v,S){let T=S+1,x=[];for(let b=0;b<=T;b++){x[b]=[];let P=g.clone().lerp(v,b/T),R=M.clone().lerp(v,b/T),N=T-b;for(let L=0;L<=N;L++)L===0&&b===T?x[b][L]=P:x[b][L]=P.clone().lerp(R,L/N)}for(let b=0;b<T;b++)for(let P=0;P<2*(T-b)-1;P++){let R=Math.floor(P/2);P%2===0?(u(x[b][R+1]),u(x[b+1][R]),u(x[b][R])):(u(x[b][R+1]),u(x[b+1][R+1]),u(x[b+1][R]))}}function c(g){let M=new D;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(g),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let g=new D;for(let M=0;M<r.length;M+=3){g.x=r[M+0],g.y=r[M+1],g.z=r[M+2];let v=m(g)/2/Math.PI+.5,S=d(g)/Math.PI+.5;a.push(v,1-S)}_(),f()}function f(){for(let g=0;g<a.length;g+=6){let M=a[g+0],v=a[g+2],S=a[g+4],T=Math.max(M,v,S),x=Math.min(M,v,S);T>.9&&x<.1&&(M<.2&&(a[g+0]+=1),v<.2&&(a[g+2]+=1),S<.2&&(a[g+4]+=1))}}function u(g){r.push(g.x,g.y,g.z)}function p(g,M){let v=g*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function _(){let g=new D,M=new D,v=new D,S=new D,T=new ie,x=new ie,b=new ie;for(let P=0,R=0;P<r.length;P+=9,R+=6){g.set(r[P+0],r[P+1],r[P+2]),M.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),T.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),S.copy(g).add(M).add(v).divideScalar(3);let N=m(S);y(T,R+0,g,N),y(x,R+2,M,N),y(b,R+4,v,N)}}function y(g,M,v,S){S<0&&g.x===1&&(a[M]=g.x-1),v.x===0&&v.z===0&&(a[M]=S/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var _n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ie:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new Rt;for(let p=0;p<=e;p++){let _=p/e;s[p]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(at(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(at(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Rs=class extends _n{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ga=class extends Rs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Th=new D,wh=new D,Ul=new gc,Fl=new gc,Ol=new gc,Ci=class extends _n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(wh.subVectors(s[0],s[1]).add(s[0]),c=wh);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Th.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Th),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),Ul.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,_,y,m),Fl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,_,y,m),Ol.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Fl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ol.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Ul.calc(l),Fl.calc(l),Ol.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ah(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function cf(i,e){let t=1-i;return t*t*e}function hf(i,e){return 2*(1-i)*i*e}function uf(i,e){return i*i*e}function Qs(i,e,t,n){return cf(i,e)+hf(i,t)+uf(i,n)}function df(i,e){let t=1-i;return t*t*t*e}function ff(i,e){let t=1-i;return 3*t*t*i*e}function pf(i,e){return 3*(1-i)*i*i*e}function mf(i,e){return i*i*i*e}function js(i,e,t,n,s){return df(i,e)+ff(i,t)+pf(i,n)+mf(i,s)}var pr=class extends _n{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(e,s.x,r.x,a.x,o.x),js(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends _n{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(e,s.x,r.x,a.x,o.x),js(e,s.y,r.y,a.y,o.y),js(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mr=class extends _n{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends _n{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gr=class extends _n{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qs(e,s.x,r.x,a.x),Qs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_r=class extends _n{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qs(e,s.x,r.x,a.x),Qs(e,s.y,r.y,a.y),Qs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xr=class extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Ah(o,l.x,c.x,h.x,f.x),Ah(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},Xa=Object.freeze({__proto__:null,ArcCurve:Ga,CatmullRomCurve3:Ci,CubicBezierCurve:pr,CubicBezierCurve3:Va,EllipseCurve:Rs,LineCurve:mr,LineCurve3:Wa,QuadraticBezierCurve:gr,QuadraticBezierCurve3:_r,SplineCurve:xr}),qa=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},qi=class extends qa{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new mr(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new gr(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new pr(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new xr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Rs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Dn=class extends qi{constructor(e){super(e),this.uuid=Bs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new qi().fromJSON(s))}return this}};function gf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Eu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Mf(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){let p=i[u],_=i[u+1];p<o&&(o=p),_<l&&(l=_),p>h&&(h=p),_>f&&(f=_)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return vr(r,a,t,o,l,c,0),a}function Eu(i,e,t,n,s){let r;if(s===Lf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Rh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Rh(a/n|0,i[a],i[a+1],r);return r&&Cs(r,r.next)&&(Mr(r),r=r.next),r}function Yi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cs(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Mr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&wf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?xf(i,n,s,r):_f(i)){e.push(l.i,i.i,c.i),Mr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vf(Yi(i),e),vr(i,e,t,n,s,r,2)):a===2&&yf(i,e,t,n,s,r):vr(Yi(i),e,t,n,s,r,1);break}}}function _f(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),p=Math.max(o,l,c),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=u&&_.y>=f&&_.y<=p&&Ks(s,o,r,l,a,c,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function xf(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,p=Math.min(o,l,c),_=Math.min(h,f,u),y=Math.max(o,l,c),m=Math.max(h,f,u),d=Wl(p,_,e,t,n),g=Wl(y,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=d&&v&&v.z<=g;){if(M.x>=p&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&Ks(o,h,l,f,c,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=y&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Ks(o,h,l,f,c,u,v.x,v.y)&&Dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=d;){if(M.x>=p&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&Ks(o,h,l,f,c,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=g;){if(v.x>=p&&v.x<=y&&v.y>=_&&v.y<=m&&v!==s&&v!==a&&Ks(o,h,l,f,c,u,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Cs(n,s)&&wu(n,t,t.next,s)&&yr(n,s)&&yr(s,n)&&(e.push(n.i,t.i,s.i),Mr(t),Mr(t.next),t=i=s),t=t.next}while(t!==i);return Yi(t)}function yf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cf(a,o)){let l=Au(a,o);a=Yi(a,a.next),l=Yi(l,l.next),vr(a,e,t,n,s,r,0),vr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Mf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Eu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Rf(c))}s.sort(Sf);for(let r=0;r<s.length;r++)t=bf(s[r],t);return t}function Sf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function bf(i,e){let t=Ef(i,e);if(!t)return e;let n=Au(t,i);return Yi(n,n.next),Yi(t,t.next)}function Ef(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Cs(i,t))return t;do{if(Cs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Tu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);yr(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Tf(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Tf(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function wf(i,e,t,n){let s=i;do s.z===0&&(s.z=Wl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Af(s)}function Af(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Wl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Rf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Tu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ks(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Tu(i,e,t,n,s,r,a,o)}function Cf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Pf(i,e)&&(yr(i,e)&&yr(e,i)&&If(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Cs(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cs(i,e){return i.x===e.x&&i.y===e.y}function wu(i,e,t,n){let s=ya(Dt(i,e,t)),r=ya(Dt(i,e,n)),a=ya(Dt(t,n,i)),o=ya(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&va(i,t,e)||r===0&&va(i,n,e)||a===0&&va(t,i,n)||o===0&&va(t,e,n))}function va(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ya(i){return i>0?1:i<0?-1:0}function Pf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&wu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function yr(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function If(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Au(i,e){let t=Xl(i.i,i.x,i.y),n=Xl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rh(i,e,t,n){let s=Xl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ql=class{static triangulate(e,t,n=2){return gf(e,t,n)}},Gn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ch(e),Ph(n,e);let a=e.length;t.forEach(Ch);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ph(n,t[l]);let o=ql.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ch(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ph(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var li=class i extends bt{constructor(e=new Dn([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Df,M,v=!1,S,T,x,b;if(d){M=d.getSpacedPoints(h),v=!0,u=!1;let te=d.isCatmullRomCurve3?d.closed:!1;S=d.computeFrenetFrames(h,te),T=new D,x=new D,b=new D}u||(m=0,p=0,_=0,y=0);let P=o.extractPoints(c),R=P.shape,N=P.holes;if(!Gn.isClockWise(R)){R=R.reverse();for(let te=0,_e=N.length;te<_e;te++){let fe=N[te];Gn.isClockWise(fe)&&(N[te]=fe.reverse())}}function k(te){let fe=10000000000000001e-36,Re=te[0];for(let J=1;J<=te.length;J++){let Pe=J%te.length,ce=te[Pe],Xe=ce.x-Re.x,tt=ce.y-Re.y,ht=Xe*Xe+tt*tt,F=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(Re.x),Math.abs(Re.y)),Mt=fe*F*F;if(ht<=Mt){te.splice(Pe,1),J--;continue}Re=ce}}k(R),N.forEach(k);let A=N.length,B=R;for(let te=0;te<A;te++){let _e=N[te];R=R.concat(_e)}function G(te,_e,fe){return _e||Ke("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(_e,fe)}let O=R.length;function re(te,_e,fe){let Re,J,Pe,ce=te.x-_e.x,Xe=te.y-_e.y,tt=fe.x-te.x,ht=fe.y-te.y,F=ce*ce+Xe*Xe,Mt=ce*ht-Xe*tt;if(Math.abs(Mt)>Number.EPSILON){let nt=Math.sqrt(F),_t=Math.sqrt(tt*tt+ht*ht),Me=_e.x-Xe/nt,wt=_e.y+ce/nt,ke=fe.x-ht/_t,He=fe.y+tt/_t,C=((ke-Me)*ht-(He-wt)*tt)/(ce*ht-Xe*tt);Re=Me+ce*C-te.x,J=wt+Xe*C-te.y;let E=Re*Re+J*J;if(E<=2)return new ie(Re,J);Pe=Math.sqrt(E/2)}else{let nt=!1;ce>Number.EPSILON?tt>Number.EPSILON&&(nt=!0):ce<-Number.EPSILON?tt<-Number.EPSILON&&(nt=!0):Math.sign(Xe)===Math.sign(ht)&&(nt=!0),nt?(Re=-Xe,J=ce,Pe=Math.sqrt(F)):(Re=ce,J=Xe,Pe=Math.sqrt(F/2))}return new ie(Re/Pe,J/Pe)}let W=[];for(let te=0,_e=B.length,fe=_e-1,Re=te+1;te<_e;te++,fe++,Re++)fe===_e&&(fe=0),Re===_e&&(Re=0),W[te]=re(B[te],B[fe],B[Re]);let H=[],z,j=W.concat();for(let te=0,_e=A;te<_e;te++){let fe=N[te];z=[];for(let Re=0,J=fe.length,Pe=J-1,ce=Re+1;Re<J;Re++,Pe++,ce++)Pe===J&&(Pe=0),ce===J&&(ce=0),z[Re]=re(fe[Re],fe[Pe],fe[ce]);H.push(z),j=j.concat(z)}let de;if(m===0)de=Gn.triangulateShape(B,N);else{let te=[],_e=[];for(let fe=0;fe<m;fe++){let Re=fe/m,J=p*Math.cos(Re*Math.PI/2),Pe=_*Math.sin(Re*Math.PI/2)+y;for(let ce=0,Xe=B.length;ce<Xe;ce++){let tt=G(B[ce],W[ce],Pe);ue(tt.x,tt.y,-J),Re===0&&te.push(tt)}for(let ce=0,Xe=A;ce<Xe;ce++){let tt=N[ce];z=H[ce];let ht=[];for(let F=0,Mt=tt.length;F<Mt;F++){let nt=G(tt[F],z[F],Pe);ue(nt.x,nt.y,-J),Re===0&&ht.push(nt)}Re===0&&_e.push(ht)}}de=Gn.triangulateShape(te,_e)}let V=de.length,ee=_+y;for(let te=0;te<O;te++){let _e=u?G(R[te],j[te],ee):R[te];v?(x.copy(S.normals[0]).multiplyScalar(_e.x),T.copy(S.binormals[0]).multiplyScalar(_e.y),b.copy(M[0]).add(x).add(T),ue(b.x,b.y,b.z)):ue(_e.x,_e.y,0)}for(let te=1;te<=h;te++)for(let _e=0;_e<O;_e++){let fe=u?G(R[_e],j[_e],ee):R[_e];v?(x.copy(S.normals[te]).multiplyScalar(fe.x),T.copy(S.binormals[te]).multiplyScalar(fe.y),b.copy(M[te]).add(x).add(T),ue(b.x,b.y,b.z)):ue(fe.x,fe.y,f/h*te)}for(let te=m-1;te>=0;te--){let _e=te/m,fe=p*Math.cos(_e*Math.PI/2),Re=_*Math.sin(_e*Math.PI/2)+y;for(let J=0,Pe=B.length;J<Pe;J++){let ce=G(B[J],W[J],Re);ue(ce.x,ce.y,f+fe)}for(let J=0,Pe=N.length;J<Pe;J++){let ce=N[J];z=H[J];for(let Xe=0,tt=ce.length;Xe<tt;Xe++){let ht=G(ce[Xe],z[Xe],Re);v?ue(ht.x,ht.y+M[h-1].y,M[h-1].x+fe):ue(ht.x,ht.y,f+fe)}}}ae(),ve();function ae(){let te=s.length/3;if(u){let _e=0,fe=O*_e;for(let Re=0;Re<V;Re++){let J=de[Re];Be(J[2]+fe,J[1]+fe,J[0]+fe)}_e=h+m*2,fe=O*_e;for(let Re=0;Re<V;Re++){let J=de[Re];Be(J[0]+fe,J[1]+fe,J[2]+fe)}}else{for(let _e=0;_e<V;_e++){let fe=de[_e];Be(fe[2],fe[1],fe[0])}for(let _e=0;_e<V;_e++){let fe=de[_e];Be(fe[0]+O*h,fe[1]+O*h,fe[2]+O*h)}}n.addGroup(te,s.length/3-te,0)}function ve(){let te=s.length/3,_e=0;he(B,_e),_e+=B.length;for(let fe=0,Re=N.length;fe<Re;fe++){let J=N[fe];he(J,_e),_e+=J.length}n.addGroup(te,s.length/3-te,1)}function he(te,_e){let fe=te.length;for(;--fe>=0;){let Re=fe,J=fe-1;J<0&&(J=te.length-1);for(let Pe=0,ce=h+m*2;Pe<ce;Pe++){let Xe=O*Pe,tt=O*(Pe+1),ht=_e+Re+Xe,F=_e+J+Xe,Mt=_e+J+tt,nt=_e+Re+tt;Ie(ht,F,Mt,nt)}}}function ue(te,_e,fe){l.push(te),l.push(_e),l.push(fe)}function Be(te,_e,fe){Ue(te),Ue(_e),Ue(fe);let Re=s.length/3,J=g.generateTopUV(n,s,Re-3,Re-2,Re-1);We(J[0]),We(J[1]),We(J[2])}function Ie(te,_e,fe,Re){Ue(te),Ue(_e),Ue(Re),Ue(_e),Ue(fe),Ue(Re);let J=s.length/3,Pe=g.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);We(Pe[0]),We(Pe[1]),We(Pe[3]),We(Pe[1]),We(Pe[2]),We(Pe[3])}function Ue(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function We(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Nf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xa[s.type]().fromJSON(s)),new i(n,e.options)}},Df={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],p=e[s*3+1],_=e[s*3+2],y=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-f),new ie(u,1-_),new ie(y,1-d)]:[new ie(o,1-l),new ie(h,1-f),new ie(p,1-_),new ie(m,1-d)]}};function Nf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Sr=class i extends Ha{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ci=class i extends bt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new D,u=new ie,p=new D,_=new D,y=new D,m=0,d=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,d=e[g+1].y-e[g].y,p.x=d*1,p.y=-m,p.z=d*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=e[g+1].x-e[g].x,d=e[g+1].y-e[g].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let g=0;g<=t;g++){let M=n+g*h*s,v=Math.sin(M),S=Math.cos(M);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*v,f.y=e[T].y,f.z=e[T].x*S,a.push(f.x,f.y,f.z),u.x=g/t,u.y=T/(e.length-1),o.push(u.x,u.y);let x=l[3*T+0]*v,b=l[3*T+1],P=l[3*T+0]*S;c.push(x,b,P)}}for(let g=0;g<t;g++)for(let M=0;M<e.length-1;M++){let v=M+g*e.length,S=v,T=v+e.length,x=v+e.length+1,b=v+1;r.push(S,T,b),r.push(x,b,T)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var on=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,p=[],_=[],y=[],m=[];for(let d=0;d<h;d++){let g=d*u-a;for(let M=0;M<c;M++){let v=M*f-r;_.push(v,-g,0),y.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){let M=g+c*d,v=g+c*(d+1),S=g+1+c*(d+1),T=g+1+c*d;p.push(M,v,T),p.push(v,S,T)}this.setIndex(p),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var br=class i extends bt{constructor(e=new Dn([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(a,2));function c(h){let f=s.length/3,u=h.extractPoints(t),p=u.shape,_=u.holes;Gn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=_.length;m<d;m++){let g=_[m];Gn.isClockWise(g)===!0&&(_[m]=g.reverse())}let y=Gn.triangulateShape(p,_);for(let m=0,d=_.length;m<d;m++){let g=_[m];p=p.concat(g)}for(let m=0,d=p.length;m<d;m++){let g=p[m];s.push(g.x,g.y,0),r.push(0,0,1),a.push(g.x,g.y)}for(let m=0,d=y.length;m<d;m++){let g=y[m],M=g[0]+f,v=g[1]+f,S=g[2]+f;n.push(M,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Uf(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Uf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Zi=class i extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new D,u=new D,p=[],_=[],y=[],m=[];for(let d=0;d<=n;d++){let g=[],M=d/n,v=a+M*o,S=e*Math.cos(v),T=Math.sqrt(e*e-S*S),x=0;d===0&&a===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let P=b/t,R=s+P*r;f.x=-T*Math.cos(R),f.y=S,f.z=T*Math.sin(R),_.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),m.push(P+x,1-M),g.push(c++)}h.push(g)}for(let d=0;d<n;d++)for(let g=0;g<t;g++){let M=h[d][g+1],v=h[d][g],S=h[d+1][g],T=h[d+1][g+1];(d!==0||a>0)&&p.push(M,v,T),(d!==n-1||l<Math.PI)&&p.push(v,S,T)}this.setIndex(p),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Er=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new D,p=new D,_=new D;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let d=0;d<=s;d++){let g=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(g),p.y=(e+t*Math.cos(m))*Math.sin(g),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),_.subVectors(p,u).normalize(),h.push(_.x,_.y,_.z),f.push(d/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let d=(s+1)*y+m-1,g=(s+1)*(y-1)+m-1,M=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(d,g,v),l.push(g,M,v)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var $i=class i extends bt{constructor(e=new _r(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new ie,h=new D,f=[],u=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2));function y(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),g(),d()}function m(M){h=e.getPointAt(M/t,h);let v=a.normals[M],S=a.binormals[M];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,b=Math.sin(x),P=-Math.cos(x);l.x=P*v.x+b*S.x,l.y=P*v.y+b*S.y,l.z=P*v.z+b*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function d(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){let S=(s+1)*(M-1)+(v-1),T=(s+1)*M+(v-1),x=(s+1)*M+v,b=(s+1)*(M-1)+v;_.push(S,T,b),_.push(T,x,b)}}function g(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)c.x=M/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Xa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ih(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ih(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=ns(i[t]);for(let s in n)e[s]=n[s]}return e}function Ih(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ff(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _c(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var pi={clone:ns,merge:rn},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ut=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=Ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ps=class extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zt=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ye=class extends Zt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ya=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ma(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends Pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kl,endingEnd:kl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hl:r=e,o=2*t-n;break;case Gl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hl:a=e,l=2*n-t;break;case Gl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),y=_*_,m=y*_,d=-u*m+2*u*y-u*_,g=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*_+1,M=(-1-p)*m+(1.5+p)*y+.5*_,v=p*m-p*y;for(let S=0;S!==o;++S)r[S]=d*a[h+S]+g*a[c+S]+M*a[l+S]+v*a[f+S];return r}},Ja=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Ka=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends Pi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(n-t)/(s-t),y=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*_;return r}let u=o*2,p=e-1;for(let _=0;_!==o;++_){let y=a[c+_],m=a[l+_],d=p*u+_*2,g=f[d],M=f[d+1],v=e*u+_*2,S=h[v],T=h[v+1],x=kf(n,t,g,S,s);r[_]=Ru(x,y,M,T,m)}return r}};function Ru(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function zf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function kf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ru(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=zf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ms(t,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ms(e.times,Array),values:ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ma(e.settings)&&(n.settings={inTangents:ms(e.settings.inTangents,Array),outTangents:ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break;case zl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return zl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ma(this.settings)&&(Lh(this.settings.inTangents,e),Lh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ma(this.settings)&&(Dh(this.settings.inTangents,e),Dh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&kd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,p=f+n;for(let _=0;_!==n;++_){let y=t[f+_];if(y!==t[u+_]||y!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ma(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Dh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Ua;var Ii=class extends xn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=er;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}};ja.prototype.ValueTypeName="color";var eo=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="number";var to=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)En.slerpFlat(r,0,a,c-o,a,c,l);return r}},Tr=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new to(this.times,this.values,this.getValueSize(),e)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends xn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=er;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends xn{constructor(e,t,n,s){super(e,t,n,s)}};no.prototype.ValueTypeName="vector";var wa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Nh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Nh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var io=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cu=new io,Is=class{constructor(e){this.manager=e!==void 0?e:Cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Is.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=new WeakMap,so=class extends Is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=wa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=gs.get(a);f===void 0&&(f=[],gs.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=Ss("img");function l(){h(),t&&t(this);let f=gs.get(this)||[];for(let u=0;u<f.length;u++){let p=f[u];p.onLoad&&p.onLoad(this)}gs.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),wa.remove(`image:${e}`);let u=gs.get(this)||[];for(let p=0;p<u.length;p++){let _=u[p];_.onError&&_.onError(f)}gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wa.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var wr=class extends Is{constructor(e){super(e)}load(e,t,n,s){let r=new sn,a=new so(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ar=class extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Rr=class extends Ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bl=new Rt,Uh=new D,Fh=new D,ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uh),Fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Bl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ms||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sa=new D,ba=new En,kn=new D,Ji=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sa,ba,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Sa,ba,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sa,ba,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new D,Oh=new ie,Bh=new ie,nn=class extends Ji{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Bh),t.subVectors(Bh,Oh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yl=class extends ro{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},hi=class extends Ar{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Ls=class extends Ji{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var _s=-90,xs=1,Ds=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(_s,xs,e,t);s.layers=this.layers,this.add(s);let r=new nn(_s,xs,e,t);r.layers=this.layers,this.add(r);let a=new nn(_s,xs,e,t);a.layers=this.layers,this.add(a);let o=new nn(_s,xs,e,t);o.layers=this.layers,this.add(o);let l=new nn(_s,xs,e,t);l.layers=this.layers,this.add(l);let c=new nn(_s,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ao=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Cr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Hf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Hf(){this._document.hidden===!1&&this.reset()}var xc="\\[\\]\\.:\\/",Gf=new RegExp("["+xc+"]","g"),vc="[^"+xc+"]",Vf="[^"+xc.replace("\\.","")+"]",Wf=/((?:WC+[\/:])*)/.source.replace("WC",vc),Xf=/(WCOD+)?/.source.replace("WCOD",Vf),qf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),Yf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Zf=new RegExp("^"+Wf+Xf+qf+Yf+"$"),$f=["material","materials","bones","map"],Zl=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gf,"")}static parseTrackName(e){let t=Zf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$f.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Zl;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tx=new Float32Array(1);var Tc=class Tc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Tc.prototype.isMatrix2=!0;var $l=Tc;function yc(i,e,t,n){let s=Jf(n);switch(t){case oc:return i*e;case cc:return i*e/s.components*s.byteLength;case go:return i*e/s.components*s.byteLength;case Di:return i*e*2/s.components*s.byteLength;case _o:return i*e*2/s.components*s.byteLength;case lc:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case xo:return i*e*4/s.components*s.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yo:case So:return Math.max(i,16)*Math.max(e,8)/4;case vo:case Mo:return Math.max(i,8)*Math.max(e,8)/2;case bo:case Eo:case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case Gr:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vo:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vr:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jf(i){switch(i){case cn:case ic:return{byteLength:1,components:1};case Os:case sc:case Ot:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case Nn:case fo:case Un:return{byteLength:4,components:1};case rc:case ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);function Ku(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Kf(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){let _=f[u],y=f[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,f[u]=y)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){let y=f[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Vp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$p=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,um=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,r0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,S0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Qf,alphahash_pars_fragment:jf,alphamap_fragment:ep,alphamap_pars_fragment:tp,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:sp,aomap_pars_fragment:rp,batching_pars_vertex:ap,batching_vertex:op,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:hp,iridescence_fragment:up,bumpmap_pars_fragment:dp,clipping_planes_fragment:fp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:_p,color_pars_fragment:xp,color_pars_vertex:vp,color_vertex:yp,common:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:bp,displacementmap_vertex:Ep,emissivemap_fragment:Tp,emissivemap_pars_fragment:wp,colorspace_fragment:Ap,colorspace_pars_fragment:Rp,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Ip,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Vp,envmap_vertex:Dp,fog_vertex:Np,fog_pars_vertex:Up,fog_fragment:Fp,fog_pars_fragment:Op,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:zp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Gp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Zp,lights_physical_pars_fragment:$p,lights_fragment_begin:Jp,lights_fragment_maps:Kp,lights_fragment_end:Qp,lightprobes_pars_fragment:jp,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:sm,map_pars_fragment:rm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphinstance_vertex:hm,morphcolor_vertex:um,morphnormal_vertex:dm,morphtarget_pars_vertex:fm,morphtarget_vertex:pm,normal_fragment_begin:mm,normal_fragment_maps:gm,normal_pars_fragment:_m,normal_pars_vertex:xm,normal_vertex:vm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Em,opaque_fragment:Tm,packing:wm,premultiplied_alpha_fragment:Am,project_vertex:Rm,dithering_fragment:Cm,dithering_pars_fragment:Pm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Nm,shadowmap_vertex:Um,shadowmask_pars_fragment:Fm,skinbase_vertex:Om,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:km,specularmap_fragment:Hm,specularmap_pars_fragment:Gm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Wm,transmission_fragment:Xm,transmission_pars_fragment:qm,uv_pars_fragment:Ym,uv_pars_vertex:Zm,uv_vertex:$m,worldpos_vertex:Jm,background_vert:Km,background_frag:Qm,backgroundCube_vert:jm,backgroundCube_frag:e0,cube_vert:t0,cube_frag:n0,depth_vert:i0,depth_frag:s0,distance_vert:r0,distance_frag:a0,equirect_vert:o0,equirect_frag:l0,linedashed_vert:c0,linedashed_frag:h0,meshbasic_vert:u0,meshbasic_frag:d0,meshlambert_vert:f0,meshlambert_frag:p0,meshmatcap_vert:m0,meshmatcap_frag:g0,meshnormal_vert:_0,meshnormal_frag:x0,meshphong_vert:v0,meshphong_frag:y0,meshphysical_vert:M0,meshphysical_frag:S0,meshtoon_vert:b0,meshtoon_frag:E0,points_vert:T0,points_frag:w0,shadow_vert:A0,shadow_frag:R0,sprite_vert:C0,sprite_frag:P0},Ae={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Zn={basic:{uniforms:rn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:rn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:rn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:rn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:rn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ge(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:rn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:rn([Ae.points,Ae.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:rn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:rn([Ae.common,Ae.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:rn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:rn([Ae.sprite,Ae.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:rn([Ae.common,Ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:rn([Ae.lights,Ae.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Zn.physical={uniforms:rn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Jo={r:0,b:0,g:0},I0=new Rt,Qu=new je;Qu.set(-1,0,0,0,1,0,0,0,1);function L0(i,e,t,n,s,r){let a=new ge(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function p(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){let v=g.backgroundBlurriness>0;M=e.get(M,v)}return M}function _(g){let M=!1,v=p(g);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(g,M){let v=p(M);v&&v.isCubeTexture?(c===void 0&&(c=new mt(new gn(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:ns(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qu),c.material.toneMapped=ct.getTransfer(v.colorSpace)!==pt,(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new mt(new on(2,2),new Ut({name:"BackgroundMaterial",uniforms:ns(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ct.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,M){g.getRGB(Jo,_c(i)),t.buffers.color.setClear(Jo.r,Jo.g,Jo.b,M,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,M=1){a.set(g),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:y,dispose:d}}function D0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,L,k,A,B){let G=!1,O=f(N,A,k,L);r!==O&&(r=O,c(r.object)),G=p(N,A,k,B),G&&_(N,A,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(N,L,k,A),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,L,k,A){let B=A.wireframe===!0,G=n[L.id];G===void 0&&(G={},n[L.id]=G);let O=N.isInstancedMesh===!0?N.id:0,re=G[O];re===void 0&&(re={},G[O]=re);let W=re[k.id];W===void 0&&(W={},re[k.id]=W);let H=W[B];return H===void 0&&(H=u(l()),W[B]=H),H}function u(N){let L=[],k=[],A=[];for(let B=0;B<t;B++)L[B]=0,k[B]=0,A[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:A,object:N,attributes:{},index:null}}function p(N,L,k,A){let B=r.attributes,G=L.attributes,O=0,re=k.getAttributes();for(let W in re)if(re[W].location>=0){let z=B[W],j=G[W];if(j===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),z===void 0||z.attribute!==j||j&&z.data!==j.data)return!0;O++}return r.attributesNum!==O||r.index!==A}function _(N,L,k,A){let B={},G=L.attributes,O=0,re=k.getAttributes();for(let W in re)if(re[W].location>=0){let z=G[W];z===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(z=N.instanceColor));let j={};j.attribute=z,z&&z.data&&(j.data=z.data),B[W]=j,O++}r.attributes=B,r.attributesNum=O,r.index=A}function y(){let N=r.newAttributes;for(let L=0,k=N.length;L<k;L++)N[L]=0}function m(N){d(N,0)}function d(N,L){let k=r.newAttributes,A=r.enabledAttributes,B=r.attributeDivisors;k[N]=1,A[N]===0&&(i.enableVertexAttribArray(N),A[N]=1),B[N]!==L&&(i.vertexAttribDivisor(N,L),B[N]=L)}function g(){let N=r.newAttributes,L=r.enabledAttributes;for(let k=0,A=L.length;k<A;k++)L[k]!==N[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function M(N,L,k,A,B,G,O){O===!0?i.vertexAttribIPointer(N,L,k,B,G):i.vertexAttribPointer(N,L,k,A,B,G)}function v(N,L,k,A){y();let B=A.attributes,G=k.getAttributes(),O=L.defaultAttributeValues;for(let re in G){let W=G[re];if(W.location>=0){let H=B[re];if(H===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(H=N.instanceColor)),H!==void 0){let z=H.normalized,j=H.itemSize,de=e.get(H);if(de===void 0)continue;let V=de.buffer,ee=de.type,ae=de.bytesPerElement,ve=ee===i.INT||ee===i.UNSIGNED_INT||H.gpuType===fo;if(H.isInterleavedBufferAttribute){let he=H.data,ue=he.isInterleavedBuffer===!0?he.stride:he.itemSize,Be=H.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Ie=0;Ie<W.locationSize;Ie++)d(W.location+Ie,he.meshPerAttribute);N.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ie=0;Ie<W.locationSize;Ie++)m(W.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,V);for(let Ie=0;Ie<W.locationSize;Ie++)M(W.location+Ie,j/W.locationSize,ee,z,ue*ae,(Be+j/W.locationSize*Ie)*ae,ve)}else{if(H.isInstancedBufferAttribute){for(let he=0;he<W.locationSize;he++)d(W.location+he,H.meshPerAttribute);N.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let he=0;he<W.locationSize;he++)m(W.location+he);i.bindBuffer(i.ARRAY_BUFFER,V);for(let he=0;he<W.locationSize;he++)M(W.location+he,j/W.locationSize,ee,z,j*ae,j/W.locationSize*he*ae,ve)}}else if(O!==void 0){let z=O[re];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(W.location,z);break;case 3:i.vertexAttrib3fv(W.location,z);break;case 4:i.vertexAttrib4fv(W.location,z);break;default:i.vertexAttrib1fv(W.location,z)}}}}g()}function S(){P();for(let N in n){let L=n[N];for(let k in L){let A=L[k];for(let B in A){let G=A[B];for(let O in G)h(G[O].object),delete G[O];delete A[B]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let L=n[N.id];for(let k in L){let A=L[k];for(let B in A){let G=A[B];for(let O in G)h(G[O].object),delete G[O];delete A[B]}}delete n[N.id]}function x(N){for(let L in n){let k=n[L];for(let A in k){let B=k[A];if(B[N.id]===void 0)continue;let G=B[N.id];for(let O in G)h(G[O].object),delete G[O];delete B[N.id]}}}function b(N){for(let L in n){let k=n[L],A=N.isInstancedMesh===!0?N.id:0,B=k[A];if(B!==void 0){for(let G in B){let O=B[G];for(let re in O)h(O[re].object),delete O[re];delete B[G]}delete k[A],Object.keys(k).length===0&&delete n[L]}}}function P(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function N0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function U0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Fn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Ot&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==cn&&x!==Un&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:T}}function F0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Pn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){let _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let g=r?0:n,M=g*4,v=d.clippingState||null;l.value=v,v=h(_,u,M,p);for(let S=0;S!==M;++S)v[S]=t[S];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,_){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let d=p+y*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,v=p;M!==y;++M,v+=4)a.copy(f[M]).applyMatrix4(g,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var qr=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gn(5,5,5),r=new Ut({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:ui});r.uniforms.tEquirect.value=t;let a=new mt(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=Yt),new Ds(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Pu=256,O0=3,B0=20,ju=256,ed=16,z0=3,k0=new D,H0=new ge,ks=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ds(1,10,null),this._boxMesh=new mt(new gn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=k0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(H0));let m=new Ds(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=_,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pu,Su(e))}_fromTexture(e,t){e.mapping===es||e.mapping===Fs?this._setSize(e.image.length===0?Pu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Iu(e,!1,!1),n=Math.log2(e)-O0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Iu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===es||e.mapping===Fs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=G0(),this._integrationMaterial=V0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ed);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-z0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(ju*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=W0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Iu(i,e,t){return new qr(i,{minFilter:di,generateMipmaps:e,type:Ot,colorSpace:tr,depthBuffer:t})}function Yr(i,e,t){return new Ut({name:i,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:$t,blending:ui,depthTest:!1,depthWrite:!1})}function G0(){return Yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ju}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function V0(){return Yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ed}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function W0(){return Yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${B0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Lu(){return Yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Du(){return Yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function X0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===co||p===ho)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let y=new qr(_.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,_=p===co||p===ho,y=p===es||p===Fs;if(_||y){let m=t.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new ks(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let g=u.image;return _&&g&&g.height>0||y&&g&&l(g)?(n===null&&(n=new ks(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===co?u.mapping=es:p===ho&&(u.mapping=Fs),u}function l(u){let p=0,_=6;for(let y=0;y<_;y++)u[y]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function q0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wi("WebGLRenderer: "+n+" extension not supported."),s}}}function Y0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let y=r.get(_);y&&(e.remove(y),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(_){let y=_.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function f(_){let y=_.index,m=_.attributes.position,d=0;if(m===void 0)return;let g=y!==null?y.array.length:m.array.length/3-1,M=m.count>=65535?or:ar,v=new M(Math.ceil(g/3)*6,1),S=v.array;if(y!==null){let x=y.array;d=y.version;for(let b=0,P=0;b<g;b+=3){let R=x[b+0],N=x[b+1],L=x[b+2];S[P++]=R,S[P++]=N,S[P++]=N,S[P++]=L,S[P++]=L,S[P++]=R}}else{d=m.version;for(let x=0,b=0;x<g;x+=3){let P=x+0,R=x+1,N=x+2;S[b++]=P,S[b++]=R,S[b++]=R,S[b++]=N,S[b++]=N,S[b++]=P}}v.version=d;let T=r.get(_);T&&e.remove(T),r.set(_,v)}function u(_){let y=r.get(_);if(y){let m=_.index;m!==null&&y.version<m.version&&f(_)}else f(_);return r.get(_)}function p(){for(let _ in s){let y=s[_].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function Z0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*a,p),t.update(u,n,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function $0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function J0(i,e,t){let n=new WeakMap,s=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],M=0;p===!0&&(M=1),_===!0&&(M=2),y===!0&&(M=3);let v=o.attributes.position.count*M,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*S*4*f),x=new sr(T,v,S,f);x.type=Un,x.needsUpdate=!0;let b=M*4;for(let R=0;R<f;R++){let N=m[R],L=d[R],k=g[R],A=v*S*4*R;for(let B=0;B<N.count;B++){let G=B*b;p===!0&&(s.fromBufferAttribute(N,B),T[A+G+0]=s.x,T[A+G+1]=s.y,T[A+G+2]=s.z,T[A+G+3]=0),_===!0&&(s.fromBufferAttribute(L,B),T[A+G+4]=s.x,T[A+G+5]=s.y,T[A+G+6]=s.z,T[A+G+7]=0),y===!0&&(s.fromBufferAttribute(k,B),T[A+G+8]=s.x,T[A+G+9]=s.y,T[A+G+10]=s.z,T[A+G+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new ie(v,S)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function K0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Q0={[Ir]:"LINEAR_TONE_MAPPING",[Lr]:"REINHARD_TONE_MAPPING",[Dr]:"CINEON_TONE_MAPPING",[ji]:"ACES_FILMIC_TONE_MAPPING",[Ur]:"AGX_TONE_MAPPING",[Fr]:"NEUTRAL_TONE_MAPPING",[Nr]:"CUSTOM_TONE_MAPPING"};function j0(i,e,t,n,s,r){let a=new Nt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new bt;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));let f=new Ps({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new mt(h,f),p=new Ls(-1,1,1,-1,0,1),_=null,y=null,m=!1,d,g=null,M=[],v=!1;this.setSize=function(S,T){a.setSize(S,T),o!==null&&o.setSize(S,T),l!==null&&l.setSize(S,T);for(let x=0;x<M.length;x++){let b=M[x];b.setSize&&b.setSize(S,T)}},this.setEffects=function(S){M=S,v=M.length>0&&M[0].isRenderPass===!0;let T=a.width,x=a.height;M.length>0&&o===null&&(o=new Nt(T,x,{type:Ot,depthBuffer:!1,stencilBuffer:!1}),l=new Nt(T,x,{type:Ot,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&M.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new oi(T,x),r===!0&&(c.format=fi,c.type=ts)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<M.length;P++){let R=M[P];R.setSize&&R.setSize(T,x),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(S,T){if(m||S.toneMapping===qn&&M.length===0)return!1;if(g=T,T!==null){let x=T.width,b=T.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return v===!1&&S.setRenderTarget(a),d=S.toneMapping,S.toneMapping=qn,!0},this.hasRenderPass=function(){return v},this.end=function(S,T){S.toneMapping=d,m=!0;let x=a,b=o;for(let P=0;P<M.length;P++){let R=M[P];R.enabled!==!1&&(R.render(S,b,x,T),R.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(_!==S.outputColorSpace||y!==S.toneMapping){_=S.outputColorSpace,y=S.toneMapping,f.defines={},ct.getTransfer(_)===pt&&(f.defines.SRGB_TRANSFER="");let P=Q0[y];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(g),S.render(u,p),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var td=new sn,nd=new oi(1,1),id=new ur(1),sd=new sr,rd=new Ba,ad=new hr,Nu=[],Uu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function Hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jo(i,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Bu.set(n),i.uniformMatrix2fv(this.addr,!1,Bu),Gt(t,n)}}function rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Ou.set(n),i.uniformMatrix3fv(this.addr,!1,Ou),Gt(t,n)}}function ag(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Fu.set(n),i.uniformMatrix4fv(this.addr,!1,Fu),Gt(t,n)}}function og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function el(i){return i.version===0&&(i.compareFunction=dc,i.needsUpdate=!0),i}function mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=el(nd):r=td,t.setTexture2D(e||r,s)}function gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rd,s)}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=el(id):r=ad,t.setTextureCube(e||r,s)}function xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sd,s)}function vg(i){switch(i){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}function yg(i,e){i.uniform1fv(this.addr,e)}function Mg(i,e){let t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function Sg(i,e){let t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function bg(i,e){let t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function Eg(i,e){let t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tg(i,e){let t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wg(i,e){let t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ag(i,e){i.uniform1iv(this.addr,e)}function Rg(i,e){i.uniform2iv(this.addr,e)}function Cg(i,e){i.uniform3iv(this.addr,e)}function Pg(i,e){i.uniform4iv(this.addr,e)}function Ig(i,e){i.uniform1uiv(this.addr,e)}function Lg(i,e){i.uniform2uiv(this.addr,e)}function Dg(i,e){i.uniform3uiv(this.addr,e)}function Ng(i,e){i.uniform4uiv(this.addr,e)}function Ug(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=el(nd):a=td;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Fg(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rd,r[a])}function Og(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=el(id):a=ad;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Bg(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sd,r[a])}function zg(i){switch(i){case 5126:return yg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return Eg;case 35675:return Tg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Dg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vg(t.type)}},Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zg(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},wc=/(\w+)(\])?(\[|\.)?/g;function zu(i,e){i.seq.push(e),i.map[e.id]=e}function kg(i,e,t){let n=i.name,s=n.length;for(wc.lastIndex=0;;){let r=wc.exec(n),a=wc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zu(t,c===void 0?new Rc(o,i,e):new Cc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Pc(o),zu(t,f)),t=f}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);kg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ku(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hg=37297,Gg=0;function Vg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Hu=new je;function Wg(i){ct._getMatrix(Hu,ct.workingColorSpace,i);let e=`mat3( ${Hu.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case nr:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Vg(i.getShaderSource(e),o)}else return r}function Xg(i,e){let t=Wg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var qg={[Ir]:"Linear",[Lr]:"Reinhard",[Dr]:"Cineon",[ji]:"ACESFilmic",[Ur]:"AgX",[Fr]:"Neutral",[Nr]:"Custom"};function Yg(i,e){let t=qg[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ko=new D;function Zg(){ct.getLuminanceCoefficients(Ko);let i=Ko.x.toFixed(4),e=Ko.y.toFixed(4),t=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function Jg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xr(i){return i!==""}function Vu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(Qg,jg)}function jg(i,e){let t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ic(t)}var e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(e_,t_)}function t_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var n_={[Ki]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function i_(i){return n_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var s_={[Fs]:"ENVMAP_MODE_REFRACTION"};function r_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":s_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a_={[tc]:"ENVMAP_BLENDING_MULTIPLY",[au]:"ENVMAP_BLENDING_MIX",[ou]:"ENVMAP_BLENDING_ADD"};function o_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a_[i.combine]||"ENVMAP_BLENDING_NONE"}function l_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=i_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=r_(t),f=o_(t),u=$g(t),p=Jg(r),_=s.createProgram(),y,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xr).join(`
`),m.length>0&&(m+=`
`)):(y=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),m=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?rt.tonemapping_pars_fragment:"",t.toneMapping!==qn?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),Zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=Ic(a),a=Vu(a,t),a=Wu(a,t),o=Ic(o),o=Vu(o,t),o=Wu(o,t),a=Xu(a),o=Xu(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let g=d+y+a,M=d+m+o,v=ku(s,s.VERTEX_SHADER,g),S=ku(s,s.FRAGMENT_SHADER,M);s.attachShader(_,v),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(v)||"",k=s.getShaderInfoLog(S)||"",A=N.trim(),B=L.trim(),G=k.trim(),O=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,S);else{let W=Gu(s,v,"vertex"),H=Gu(s,S,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+A+`
`+W+`
`+H)}else A!==""?Ze("WebGLProgram: Program Info Log:",A):(B===""||G==="")&&(re=!1);re&&(R.diagnostics={runnable:O,programLog:A,vertexShader:{log:B,prefix:y},fragmentShader:{log:G,prefix:m}})}s.deleteShader(v),s.deleteShader(S),x=new zs(s,_),b=Kg(s,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,Hg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=S,this}var c_=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dc(e),t.set(e,n)),n}},Dc=class{constructor(e){this.id=c_++,this.code=e,this.usedTimes=0}};function h_(i){return i===Di||i===Gr||i===Vr}function u_(i,e,t,n,s,r){let a=new rr,o=new Lc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,P,R,N,L){let k=R.fog,A=N.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||B,G),re=u[x.type],W=n.precision;x.precision!==null&&(W=n.getMaxPrecision(x.precision),W!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let H=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,z=H!==void 0?H.length:0,j=0;A.morphAttributes.position!==void 0&&(j=1),A.morphAttributes.normal!==void 0&&(j=2),A.morphAttributes.color!==void 0&&(j=3);let de,V,ee,ae;if(re){let we=Zn[re];de=we.vertexShader,V=we.fragmentShader}else{de=x.vertexShader,V=x.fragmentShader;let we=o.getVertexShaderStage(x),xt=o.getFragmentShaderStage(x);o.update(x,we,xt),ee=we.id,ae=xt.id}let ve=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),ue=N.isInstancedMesh===!0,Be=N.isBatchedMesh===!0,Ie=!!x.map,Ue=!!x.matcap,We=!!O,te=We&&O.isPMREMTexture===!0,_e=!!x.aoMap,fe=!!x.lightMap,Re=!!x.bumpMap&&x.wireframe===!1,J=!!x.normalMap,Pe=!!x.displacementMap,ce=!!x.emissiveMap,Xe=!!x.metalnessMap,tt=!!x.roughnessMap,ht=x.anisotropy>0,F=x.clearcoat>0,Mt=x.diffuseRoughness>0,nt=x.dispersion>0,_t=x.retroreflectivity>0,Me=x.iridescence>0,wt=x.sheen>0,ke=x.transmission>0,He=ht&&!!x.anisotropyMap,C=F&&!!x.clearcoatMap,E=F&&!!x.clearcoatNormalMap,X=F&&!!x.clearcoatRoughnessMap,le=Mt&&!!x.diffuseRoughnessMap,se=Me&&!!x.iridescenceMap,xe=Me&&!!x.iridescenceThicknessMap,Se=wt&&!!x.sheenColorMap,Q=wt&&!!x.sheenRoughnessMap,ne=!!x.specularMap,oe=!!x.specularColorMap,I=!!x.specularIntensityMap,K=ke&&!!x.transmissionMap,$=ke&&!!x.thicknessMap,ye=!!x.gradientMap,pe=!!x.alphaMap,be=x.alphaTest>0,ze=!!x.alphaHash,st=!!x.extensions,me=qn;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(me=i.toneMapping);let qe=te?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,it={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:de,fragmentShader:V,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:Be,batchingColor:Be&&N._colorsTexture!==null,instancing:ue,instancingColor:ue&&N.instanceColor!==null,instancingMorph:ue&&N.morphTexture!==null,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:Ue,envMap:We,envMapMode:We&&O.mapping,envMapPMREM:te,envMapMaxLod:te?qe.length-1:null,envMapSize:te?qe[0].width:null,aoMap:_e,lightMap:fe,bumpMap:Re,normalMap:J,displacementMap:Pe,emissiveMap:ce,normalMapObjectSpace:J&&x.normalMapType===hu,normalMapTangentSpace:J&&x.normalMapType===$o,packedNormalMap:J&&x.normalMapType===$o&&h_(x.normalMap.format),metalnessMap:Xe,roughnessMap:tt,anisotropy:ht,anisotropyMap:He,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:X,diffuseRoughness:Mt,diffuseRoughnessMap:le,dispersion:nt,retroreflection:_t,iridescence:Me,iridescenceMap:se,iridescenceThicknessMap:xe,sheen:wt,sheenColorMap:Se,sheenRoughnessMap:Q,specularMap:ne,specularColorMap:oe,specularIntensityMap:I,transmission:ke,transmissionMap:K,thicknessMap:$,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:be,alphaHash:ze,combine:x.combine,mapUv:Ie&&p(x.map.channel),aoMapUv:_e&&p(x.aoMap.channel),lightMapUv:fe&&p(x.lightMap.channel),bumpMapUv:Re&&p(x.bumpMap.channel),normalMapUv:J&&p(x.normalMap.channel),displacementMapUv:Pe&&p(x.displacementMap.channel),emissiveMapUv:ce&&p(x.emissiveMap.channel),metalnessMapUv:Xe&&p(x.metalnessMap.channel),roughnessMapUv:tt&&p(x.roughnessMap.channel),anisotropyMapUv:He&&p(x.anisotropyMap.channel),clearcoatMapUv:C&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:se&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(x.sheenRoughnessMap.channel),specularMapUv:ne&&p(x.specularMap.channel),specularColorMapUv:oe&&p(x.specularColorMap.channel),specularIntensityMapUv:I&&p(x.specularIntensityMap.channel),transmissionMapUv:K&&p(x.transmissionMap.channel),thicknessMapUv:$&&p(x.thicknessMap.channel),alphaMapUv:pe&&p(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(J||ht),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!A.attributes.uv&&(Ie||pe),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&J===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:j,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.filter(we=>we.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:ce&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ft,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(b,x),d(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function d(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function g(x){let b=u[x.type],P;if(b){let R=Zn[b];P=pi.clone(R.uniforms)}else P=x.uniforms;return P}function M(x,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new l_(i,b,x,s),c.push(P),h.set(b,P)),P}function v(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:g,acquireProgram:M,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:T}}function d_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function f_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,y,m,d){let g=i[e];return g===void 0?(g={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:d},i[e]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=_,g.materialVariant=a(u),g.groupOrder=y,g.renderOrder=u.renderOrder,g.z=m,g.group=d),e++,g}function l(u,p,_,y,m,d,g){g.reversedDepth===!0&&(m=-m);let M=o(u,p,_,y,m,d);_.transmission>0?n.push(M):_.transparent===!0?s.push(M):t.push(M)}function c(u,p,_,y,m,d){let g=o(u,p,_,y,m,d);_.transmission>0?n.unshift(g):_.transparent===!0?s.unshift(g):t.unshift(g)}function h(u,p){t.length>1&&t.sort(u||f_),n.length>1&&n.sort(p||Yu),s.length>1&&s.sort(p||Yu)}function f(){for(let u=e,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function p_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Zu,i.set(n,[a])):s>=r.length?(a=new Zu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function m_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ge};break;case"SpotLight":t={position:new D,direction:new D,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function g_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var __=0;function x_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v_(i){let e=new m_,t=g_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Rt,a=new Rt;function o(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,_=0,y=0,m=0,d=0,g=0,M=0,v=0,S=0,T=0,x=0,b=0,P=0,R=0;c.sort(x_);for(let L=0,k=c.length;L<k;L++){let A=c[L],B=A.color,G=A.intensity,O=A.distance,re=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Di?re=A.shadow.map.texture:re=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=B.r*G,f+=B.g*G,u+=B.b*G;else if(A.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(A.sh.coefficients[W],G);R++}else if(A.isSunLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let H=A.shadow,z=t.get(A);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[_]=z,n.sunShadowMap[_]=re;let j=H.getViewportCount();for(let de=0;de<j;de++)n.sunShadowMatrix[y+de]=H.getMatrix(de),n.sunShadowCascade[y+de]=H._cascadeData[de];y+=j,_++}n.sun[p]=W,p++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let H=A.shadow,z=t.get(A);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=A.shadow.matrix,S++}n.directional[m]=W,m++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(B).multiplyScalar(G),W.distance=O,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,n.spot[g]=W;let H=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,H.updateMatrices(A),A.castShadow&&P++),n.spotLightMatrix[g]=H.matrix,A.castShadow){let z=t.get(A);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=re,x++}g++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(B).multiplyScalar(G),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),n.rectArea[M]=W,M++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let H=A.shadow,z=t.get(A);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,n.pointShadow[d]=z,n.pointShadowMap[d]=re,n.pointShadowMatrix[d]=A.shadow.matrix,T++}n.point[d]=W,d++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(G),W.groundColor.copy(A.groundColor).multiplyScalar(G),n.hemi[v]=W,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==d||N.spotLength!==g||N.rectAreaLength!==M||N.hemiLength!==v||N.numSunShadows!==_||N.numDirectionalShadows!==S||N.numPointShadows!==T||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==R)&&(n.sun.length=p,n.directional.length=m,n.spot.length=g,n.rectArea.length=M,n.point.length=d,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,N.sunLength=p,N.directionalLength=m,N.pointLength=d,N.spotLength=g,N.rectAreaLength=M,N.hemiLength=v,N.numSunShadows=_,N.numDirectionalShadows=S,N.numPointShadows=T,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=R,n.version=__++)}function l(c,h){let f=0,u=0,p=0,_=0,y=0,m=0,d=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let v=c[g];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),f++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),u++}else if(v.isSpotLight){let S=n.spot[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),_++}else if(v.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),a.identity(),r.copy(v.matrixWorld),r.premultiply(d),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:n}}function $u(i){let e=new v_(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function y_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new $u(i),e.set(s,[o])):r>=a.length?(o=new $u(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],E_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Ju=new Rt,Wr=new D,Ac=new D;function T_(i,e,t){let n=new Ri,s=new ie,r=new ie,a=new Pt,o=new Ya,l=new Za,c={},h=t.maxTextureSize,f={[Xn]:$t,[$t]:Xn,[Ft]:Ft},u=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:M_,fragmentShader:S_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new bt;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new mt(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ki;let d=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Hh&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ki);let P=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ui),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=d!==this.type;k&&x.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(B=>B.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,B=T.length;A<B;A++){let G=T[A],O=G.shadow;if(O===void 0){Ze("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let re=O.getFrameExtents();s.multiply(re),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,O.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ns){if(G.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Nt(s.x,s.y,{format:Di,type:Ot,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new oi(s.x,s.y,Un),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=ri,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt}else G.isPointLight?(O.map=new qr(s.x),O.map.depthTexture=new ur(s.x,Nn)):(O.map=new Nt(s.x,s.y),O.map.depthTexture=new oi(s.x,s.y,Nn)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=ri,this.type===Ki?(O.map.depthTexture.compareFunction=W?uc:hc,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let H=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();G.isPointLight!==!0&&O.updateMatrices(G,b);let z=O.camera.layers.mask&4294967294?O.camera.layers:b.layers;for(let j=0;j<H;j++){let de=O.getCamera(j);if(G.isPointLight){let V=O.camera,ee=O.matrix,ae=G.distance||V.far;ae!==V.far&&(V.far=ae,V.updateProjectionMatrix()),Wr.setFromMatrixPosition(G.matrixWorld),V.position.copy(Wr),Ac.copy(V.position),Ac.add(b_[j]),V.up.copy(E_[j]),V.lookAt(Ac),V.updateMatrixWorld(),ee.makeTranslation(-Wr.x,-Wr.y,-Wr.z),Ju.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ju,V.coordinateSystem,V.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,j),i.clear();else{j===0&&(i.setRenderTarget(O.map),i.clear());let V=O.getViewport(j);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),L.viewport(a)}n=O.getFrustum(j),v(x,b,de,G,z,this.type)}O.isPointLightShadow!==!0&&this.type===Ns&&g(O,b),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(P,R,N)};function g(T,x){let b=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Nt(s.x,s.y,{format:Di,type:Ot}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,b,u,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,b,p,y,null)}function M(T,x,b,P){let R=null,N=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)R=N;else if(R=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=R.uuid,k=x.uuid,A=c[L];A===void 0&&(A={},c[L]=A);let B=A[k];B===void 0&&(B=R.clone(),A[k]=B,x.addEventListener("dispose",S)),R=B}if(R.visible=x.visible,R.wireframe=x.wireframe,P===Ns?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:f[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=b}return R}function v(T,x,b,P,R,N){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Ns)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let A=e.update(T),B=T.material;if(Array.isArray(B)){let G=A.groups;for(let O=0,re=G.length;O<re;O++){let W=G[O],H=B[W.materialIndex];if(H&&H.visible){let z=M(T,H,P,N);T.onBeforeShadow(i,T,x,b,A,z,W),i.renderBufferDirect(b,null,A,z,T,W),T.onAfterShadow(i,T,x,b,A,z,W)}}}else if(B.visible){let G=M(T,B,P,N);T.onBeforeShadow(i,T,x,b,A,G,null),i.renderBufferDirect(b,null,A,G,T,null),T.onAfterShadow(i,T,x,b,A,G,null)}}let k=T.children;for(let A=0,B=k.length;A<B;A++)v(k[A],x,b,P,R,N)}function S(T){T.target.removeEventListener("dispose",S);for(let b in c){let P=c[b],R=T.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function w_(i,e){function t(){let I=!1,K=new Pt,$=null,ye=new Pt(0,0,0,0);return{setMask:function(pe){$!==pe&&!I&&(i.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){I=pe},setClear:function(pe,be,ze,st,me){me===!0&&(pe*=st,be*=st,ze*=st),K.set(pe,be,ze,st),ye.equals(K)===!1&&(i.clearColor(pe,be,ze,st),ye.copy(K))},reset:function(){I=!1,$=null,ye.set(-1,0,0,0)}}}function n(){let I=!1,K=!1,$=null,ye=null,pe=null;return{setReversed:function(be){if(K!==be){let ze=e.get("EXT_clip_control");be?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),K=be;let st=pe;pe=null,this.setClear(st)}},getReversed:function(){return K},setTest:function(be){be?he(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(be){$!==be&&!I&&(i.depthMask(be),$=be)},setFunc:function(be){if(K&&(be=Mu[be]),ye!==be){switch(be){case Aa:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=be}},setLocked:function(be){I=be},setClear:function(be){pe!==be&&(pe=be,K&&(be=1-be),i.clearDepth(be))},reset:function(){I=!1,$=null,ye=null,pe=null,K=!1}}}function s(){let I=!1,K=null,$=null,ye=null,pe=null,be=null,ze=null,st=null,me=null;return{setTest:function(qe){I||(qe?he(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(qe){K!==qe&&!I&&(i.stencilMask(qe),K=qe)},setFunc:function(qe,it,we){($!==qe||ye!==it||pe!==we)&&(i.stencilFunc(qe,it,we),$=qe,ye=it,pe=we)},setOp:function(qe,it,we){(be!==qe||ze!==it||st!==we)&&(i.stencilOp(qe,it,we),be=qe,ze=it,st=we)},setLocked:function(qe){I=qe},setClear:function(qe){me!==qe&&(i.clearStencil(qe),me=qe)},reset:function(){I=!1,K=null,$=null,ye=null,pe=null,be=null,ze=null,st=null,me=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},p=new WeakMap,_=[],y=null,m=!1,d=null,g=null,M=null,v=null,S=null,T=null,x=null,b=new ge(0,0,0),P=0,R=!1,N=null,L=null,k=null,A=null,B=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,re=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=re>=1):W.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=re>=2);let H=null,z={},j=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),V=new Pt().fromArray(j),ee=new Pt().fromArray(de);function ae(I,K,$,ye){let pe=new Uint8Array(4),be=i.createTexture();i.bindTexture(I,be),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<$;ze++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(K+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return be}let ve={};ve[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(ys),Re(!1),J(Jl),he(i.CULL_FACE),_e(ui);function he(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function ue(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Be(I,K){return u[I]!==K?(i.bindFramebuffer(I,K),u[I]=K,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Ie(I,K){let $=_,ye=!1;if(I){$=p.get(K),$===void 0&&($=[],p.set(K,$));let pe=I.textures;if($.length!==pe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let be=0,ze=pe.length;be<ze;be++)$[be]=i.COLOR_ATTACHMENT0+be;$.length=pe.length,ye=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ye=!0);ye&&i.drawBuffers($)}function Ue(I){return y!==I?(i.useProgram(I),y=I,!0):!1}let We={[Qi]:i.FUNC_ADD,[Vh]:i.FUNC_SUBTRACT,[Wh]:i.FUNC_REVERSE_SUBTRACT};We[Xh]=i.MIN,We[qh]=i.MAX;let te={[Yh]:i.ZERO,[Zh]:i.ONE,[$h]:i.SRC_COLOR,[jl]:i.SRC_ALPHA,[tu]:i.SRC_ALPHA_SATURATE,[jh]:i.DST_COLOR,[Kh]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[eu]:i.ONE_MINUS_DST_COLOR,[Qh]:i.ONE_MINUS_DST_ALPHA,[nu]:i.CONSTANT_COLOR,[iu]:i.ONE_MINUS_CONSTANT_COLOR,[su]:i.CONSTANT_ALPHA,[ru]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(I,K,$,ye,pe,be,ze,st,me,qe){if(I===ui){m===!0&&(ue(i.BLEND),m=!1);return}if(m===!1&&(he(i.BLEND),m=!0),I!==Gh){if(I!==d||qe!==R){if((g!==Qi||S!==Qi)&&(i.blendEquation(i.FUNC_ADD),g=Qi,S=Qi),qe)switch(I){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFunc(i.ONE,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",I);break}else switch(I){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kl:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",I);break}M=null,v=null,T=null,x=null,b.set(0,0,0),P=0,d=I,R=qe}return}pe=pe||K,be=be||$,ze=ze||ye,(K!==g||pe!==S)&&(i.blendEquationSeparate(We[K],We[pe]),g=K,S=pe),($!==M||ye!==v||be!==T||ze!==x)&&(i.blendFuncSeparate(te[$],te[ye],te[be],te[ze]),M=$,v=ye,T=be,x=ze),(st.equals(b)===!1||me!==P)&&(i.blendColor(st.r,st.g,st.b,me),b.copy(st),P=me),d=I,R=!1}function fe(I,K){I.side===Ft?ue(i.CULL_FACE):he(i.CULL_FACE);let $=I.side===$t;K&&($=!$),Re($),I.blending===Us&&I.transparent===!1?_e(ui):_e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ye=I.stencilWrite;o.setTest(ye),ye&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ce(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function J(I){I!==zh?(he(i.CULL_FACE),I!==L&&(I===Jl?i.cullFace(i.BACK):I===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),L=I}function Pe(I){I!==k&&(O&&i.lineWidth(I),k=I)}function ce(I,K,$){I?(he(i.POLYGON_OFFSET_FILL),(A!==K||B!==$)&&(A=K,B=$,a.getReversed()&&(K=-K,$=-$),i.polygonOffset(K,$))):ue(i.POLYGON_OFFSET_FILL)}function Xe(I){I?he(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function tt(I){I===void 0&&(I=i.TEXTURE0+G-1),H!==I&&(i.activeTexture(I),H=I)}function ht(I,K,$){$===void 0&&(H===null?$=i.TEXTURE0+G-1:$=H);let ye=z[$];ye===void 0&&(ye={type:void 0,texture:void 0},z[$]=ye),(ye.type!==I||ye.texture!==K)&&(H!==$&&(i.activeTexture($),H=$),i.bindTexture(I,K||ve[I]),ye.type=I,ye.texture=K)}function F(){let I=z[H];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function _t(){try{i.texSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function Me(){try{i.texSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function wt(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function He(){try{i.texStorage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function C(){try{i.texStorage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function E(){try{i.texImage2D(...arguments)}catch(I){Ke("WebGLState:",I)}}function X(){try{i.texImage3D(...arguments)}catch(I){Ke("WebGLState:",I)}}function le(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function se(I,K){f[I]!==K&&(i.pixelStorei(I,K),f[I]=K)}function xe(I){V.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),V.copy(I))}function Se(I){ee.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function Q(I,K){let $=c.get(K);$===void 0&&($=new WeakMap,c.set(K,$));let ye=$.get(I);ye===void 0&&(ye=i.getUniformBlockIndex(K,I.name),i.uniformBlockBinding(K,ye,ye),$.set(I,ye))}function ne(I,K,$){let pe=c.get(K).get(I);l[pe]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,$),l[pe]=$)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},H=null,z={},u={},l={},p=new WeakMap,_=[],y=null,m=!1,d=null,g=null,M=null,v=null,S=null,T=null,x=null,b=new ge(0,0,0),P=0,R=!1,N=null,L=null,k=null,A=null,B=null,V.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:ue,bindFramebuffer:Be,drawBuffers:Ie,useProgram:Ue,setBlending:_e,setMaterial:fe,setFlipSided:Re,setCullFace:J,setLineWidth:Pe,setPolygonOffset:ce,setScissorTest:Xe,activeTexture:tt,bindTexture:ht,unbindTexture:F,compressedTexImage2D:Mt,compressedTexImage3D:nt,texImage2D:E,texImage3D:X,pixelStorei:se,getParameter:le,updateUBOMapping:Q,uniformBlockBinding:ne,texStorage2D:He,texStorage3D:C,texSubImage2D:_t,texSubImage3D:Me,compressedTexSubImage2D:wt,compressedTexSubImage3D:ke,scissor:xe,viewport:Se,reset:oe}}function A_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,f=new Set,u,p=new WeakMap,_=new Set,y=new FinalizationRegistry(C=>_.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(C,E){return m?new OffscreenCanvas(C,E):Ss("canvas")}function g(C,E,X){let le=1,se=He(C);if((se.width>X||se.height>X)&&(le=X/Math.max(se.width,se.height)),le<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let xe=Math.floor(le*se.width),Se=Math.floor(le*se.height);u===void 0&&(u=d(xe,Se));let Q=E?d(xe,Se):u;return Q.width=xe,Q.height=Se,Q.getContext("2d").drawImage(C,0,0,xe,Se),Ze("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+xe+"x"+Se+")."),Q}else return"data"in C&&Ze("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function M(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(C,E,X,le,se,xe=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Se;le&&(Se=e.get("EXT_texture_norm16"),Se||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===i.RED&&(X===i.FLOAT&&(Q=i.R32F),X===i.HALF_FLOAT&&(Q=i.R16F),X===i.UNSIGNED_BYTE&&(Q=i.R8),X===i.UNSIGNED_SHORT&&Se&&(Q=Se.R16_EXT),X===i.SHORT&&Se&&(Q=Se.R16_SNORM_EXT)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.R8UI),X===i.UNSIGNED_SHORT&&(Q=i.R16UI),X===i.UNSIGNED_INT&&(Q=i.R32UI),X===i.BYTE&&(Q=i.R8I),X===i.SHORT&&(Q=i.R16I),X===i.INT&&(Q=i.R32I)),E===i.RG&&(X===i.FLOAT&&(Q=i.RG32F),X===i.HALF_FLOAT&&(Q=i.RG16F),X===i.UNSIGNED_BYTE&&(Q=i.RG8),X===i.UNSIGNED_SHORT&&Se&&(Q=Se.RG16_EXT),X===i.SHORT&&Se&&(Q=Se.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RG8UI),X===i.UNSIGNED_SHORT&&(Q=i.RG16UI),X===i.UNSIGNED_INT&&(Q=i.RG32UI),X===i.BYTE&&(Q=i.RG8I),X===i.SHORT&&(Q=i.RG16I),X===i.INT&&(Q=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),X===i.UNSIGNED_INT&&(Q=i.RGB32UI),X===i.BYTE&&(Q=i.RGB8I),X===i.SHORT&&(Q=i.RGB16I),X===i.INT&&(Q=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),X===i.UNSIGNED_INT&&(Q=i.RGBA32UI),X===i.BYTE&&(Q=i.RGBA8I),X===i.SHORT&&(Q=i.RGBA16I),X===i.INT&&(Q=i.RGBA32I)),E===i.RGB&&(X===i.UNSIGNED_SHORT&&Se&&(Q=Se.RGB16_EXT),X===i.SHORT&&Se&&(Q=Se.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),E===i.RGBA){let ne=xe?nr:ct.getTransfer(se);X===i.FLOAT&&(Q=i.RGBA32F),X===i.HALF_FLOAT&&(Q=i.RGBA16F),X===i.UNSIGNED_BYTE&&(Q=ne===pt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Se&&(Q=Se.RGBA16_EXT),X===i.SHORT&&Se&&(Q=Se.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(C,E){let X;return C?E===null||E===Nn||E===ts?X=i.DEPTH24_STENCIL8:E===Un?X=i.DEPTH32F_STENCIL8:E===Os&&(X=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Nn||E===ts?X=i.DEPTH_COMPONENT24:E===Un?X=i.DEPTH_COMPONENT32F:E===Os&&(X=i.DEPTH_COMPONENT16),X}function b(C,E){return M(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==Yt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function P(C){let E=new WeakRef(C);n.get(C).__ref=E,_.add(E),y.register(C,E,E)}function R(C){let E=n.get(C).__ref;E!==void 0&&(_.delete(E),y.unregister(E))}function N(C){k(C.target)}function L(C){A(C.target)}function k(C){C.removeEventListener("dispose",N),R(C),G(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&f.delete(C)}function A(C){C.removeEventListener("dispose",L),R(C),re(C)}function B(){for(let C of _){let E=C.deref();E!==void 0&&(E.isRenderTarget===!0?A(E):k(E))}_.clear(),f.clear()}function G(C){let E=n.get(C);if(E.__webglInit===void 0)return;let X=C.source,le=p.get(X);if(le){let se=le[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(C),Object.keys(le).length===0&&p.delete(X)}n.remove(C)}function O(C){let E=n.get(C);i.deleteTexture(E.__webglTexture);let X=C.source,le=p.get(X);delete le[E.__cacheKey],a.memory.textures--}function re(C){let E=n.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();let X=C.depthTexture;if(X&&X.renderTarget===C&&k(X),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let xe=0;xe<E.__webglFramebuffer[se].length;xe++)i.deleteFramebuffer(E.__webglFramebuffer[se][xe]);else i.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)i.deleteFramebuffer(E.__webglFramebuffer[se]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let le=C.textures;for(let se=0,xe=le.length;se<xe;se++){let Se=n.get(le[se]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(le[se])}n.remove(C)}let W=0;function H(){W=0}function z(){return W}function j(C){W=C}function de(){let C=W;return C>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,C}function V(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function ee(C,E){let X=n.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let le=C.image;if(le===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(X,C,E);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function ae(C,E){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){fe(X,C,E);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function ve(C,E){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){fe(X,C,E);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function he(C,E){let X=n.get(C);if(C.version>0&&X.__version!==C.version){Re(X,C,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}let ue={[Ti]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},Be={[qt]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Ie={[du]:i.NEVER,[dc]:i.ALWAYS,[fu]:i.LESS,[hc]:i.LEQUAL,[pu]:i.EQUAL,[uc]:i.GEQUAL,[mu]:i.GREATER,[gu]:i.NOTEQUAL};function Ue(C,E){if(E.type===Un&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yt||E.magFilter===uo||E.magFilter===Or||E.magFilter===di||E.minFilter===Yt||E.minFilter===uo||E.minFilter===Or||E.minFilter===di)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ue[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ue[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ue[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Be[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Be[E.minFilter]),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qt||E.minFilter!==Or&&E.minFilter!==di||E.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function We(C,E){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",N),P(E));let le=E.source,se=p.get(le);se===void 0&&(se={},p.set(le,se));let xe=V(E);if(xe!==C.__cacheKey){se[xe]===void 0&&(se[xe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),se[xe].usedTimes++;let Se=se[C.__cacheKey];Se!==void 0&&(se[C.__cacheKey].usedTimes--,Se.usedTimes===0&&O(E)),C.__cacheKey=xe,C.__webglTexture=se[xe].texture}return X}function te(C,E,X){return Math.floor(Math.floor(C/X)/E)}function _e(C,E,X,le){let xe=C.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,X,le,E.data);else{xe.sort((I,K)=>I.start-K.start);let Se=0;for(let I=1;I<xe.length;I++){let K=xe[Se],$=xe[I],ye=K.start+K.count,pe=te($.start,E.width,4),be=te(K.start,E.width,4);$.start<=ye+1&&pe===be&&te($.start+$.count-1,E.width,4)===pe?K.count=Math.max(K.count,$.start+$.count-K.start):(++Se,xe[Se]=$)}xe.length=Se+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let I=0,K=xe.length;I<K;I++){let $=xe[I],ye=Math.floor($.start/4),pe=Math.ceil($.count/4),be=ye%E.width,ze=Math.floor(ye/E.width),st=pe,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,be),t.pixelStorei(i.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(i.TEXTURE_2D,0,be,ze,st,me,X,le,E.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function fe(C,E,X){let le=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=i.TEXTURE_3D);let se=We(C,E),xe=E.source;t.bindTexture(le,C.__webglTexture,i.TEXTURE0+X);let Se=n.get(xe);if(xe.version!==Se.__version||se===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let me=ct.getPrimaries(ct.workingColorSpace),qe=E.colorSpace===On?null:ct.getPrimaries(E.colorSpace),it=E.colorSpace===On||me===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ne=g(E.image,!1,s.maxTextureSize);ne=ke(E,ne);let oe=r.convert(E.format,E.colorSpace),I=r.convert(E.type),K=T(E.internalFormat,oe,I,E.normalized,E.colorSpace,E.isVideoTexture);Ue(le,E);let $,ye=E.mipmaps,pe=E.isVideoTexture!==!0,be=Se.__version===void 0||se===!0,ze=xe.dataReady,st=b(E,ne);if(E.isDepthTexture)K=x(E.format===fi,E.type),be&&(pe?t.texStorage2D(i.TEXTURE_2D,1,K,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,K,ne.width,ne.height,0,oe,I,null));else if(E.isDataTexture)if(ye.length>0){pe&&be&&t.texStorage2D(i.TEXTURE_2D,st,K,ye[0].width,ye[0].height);for(let me=0,qe=ye.length;me<qe;me++)$=ye[me],pe?ze&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,$.width,$.height,oe,I,$.data):t.texImage2D(i.TEXTURE_2D,me,K,$.width,$.height,0,oe,I,$.data);E.generateMipmaps=!1}else pe?(be&&t.texStorage2D(i.TEXTURE_2D,st,K,ne.width,ne.height),ze&&_e(E,ne,oe,I)):t.texImage2D(i.TEXTURE_2D,0,K,ne.width,ne.height,0,oe,I,ne.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,K,ye[0].width,ye[0].height,ne.depth);for(let me=0,qe=ye.length;me<qe;me++)if($=ye[me],E.format!==Fn)if(oe!==null)if(pe){if(ze)if(E.layerUpdates.size>0){let it=yc($.width,$.height,E.format,E.type);for(let we of E.layerUpdates){let xt=$.data.subarray(we*it/$.data.BYTES_PER_ELEMENT,(we+1)*it/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,we,$.width,$.height,1,oe,xt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,$.width,$.height,ne.depth,oe,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,K,$.width,$.height,ne.depth,0,$.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,$.width,$.height,ne.depth,oe,I,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,K,$.width,$.height,ne.depth,0,oe,I,$.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{pe&&be&&t.texStorage2D(i.TEXTURE_2D,st,K,ye[0].width,ye[0].height);for(let me=0,qe=ye.length;me<qe;me++)$=ye[me],E.format!==Fn?oe!==null?pe?ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,$.width,$.height,oe,$.data):t.compressedTexImage2D(i.TEXTURE_2D,me,K,$.width,$.height,0,$.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?ze&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,$.width,$.height,oe,I,$.data):t.texImage2D(i.TEXTURE_2D,me,K,$.width,$.height,0,oe,I,$.data)}else if(E.isDataArrayTexture)if(pe){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,K,ne.width,ne.height,ne.depth),ze)if(E.layerUpdates.size>0){let me=yc(ne.width,ne.height,E.format,E.type);for(let qe of E.layerUpdates){let it=ne.data.subarray(qe*me/ne.data.BYTES_PER_ELEMENT,(qe+1)*me/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,ne.width,ne.height,1,oe,I,it)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,I,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,ne.width,ne.height,ne.depth,0,oe,I,ne.data);else if(E.isData3DTexture)pe?(be&&t.texStorage3D(i.TEXTURE_3D,st,K,ne.width,ne.height,ne.depth),ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,I,ne.data)):t.texImage3D(i.TEXTURE_3D,0,K,ne.width,ne.height,ne.depth,0,oe,I,ne.data);else if(E.isFramebufferTexture){if(be)if(pe)t.texStorage2D(i.TEXTURE_2D,st,K,ne.width,ne.height);else{let me=ne.width,qe=ne.height;for(let it=0;it<st;it++)t.texImage2D(i.TEXTURE_2D,it,K,me,qe,0,oe,I,null),me>>=1,qe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ne.parentNode!==me){me.appendChild(ne),f.add(E),me.onpaint=qe=>{let it=qe.changedElements;for(let we of f)it.includes(we.image)&&(we.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let it=i.RGBA,we=i.RGBA,xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,we,xt,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(pe&&be){let me=He(ye[0]);t.texStorage2D(i.TEXTURE_2D,st,K,me.width,me.height)}for(let me=0,qe=ye.length;me<qe;me++)$=ye[me],pe?ze&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,oe,I,$):t.texImage2D(i.TEXTURE_2D,me,K,oe,I,$);E.generateMipmaps=!1}else if(pe){if(be){let me=He(ne);t.texStorage2D(i.TEXTURE_2D,st,K,me.width,me.height)}ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,I,ne)}else t.texImage2D(i.TEXTURE_2D,0,K,oe,I,ne);M(E)&&E.mipmapsAutoUpdate===!0&&v(le),Se.__version=xe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Re(C,E,X){if(E.image.length!==6)return;let le=We(C,E),se=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);let xe=n.get(se);if(se.version!==xe.__version||le===!0){t.activeTexture(i.TEXTURE0+X);let Se=ct.getPrimaries(ct.workingColorSpace),Q=E.colorSpace===On?null:ct.getPrimaries(E.colorSpace),ne=E.colorSpace===On||Se===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let oe=E.isCompressedTexture||E.image[0].isCompressedTexture,I=E.image[0]&&E.image[0].isDataTexture,K=[];for(let we=0;we<6;we++)!oe&&!I?K[we]=g(E.image[we],!0,s.maxCubemapSize):K[we]=I?E.image[we].image:E.image[we],K[we]=ke(E,K[we]);let $=K[0],ye=r.convert(E.format,E.colorSpace),pe=r.convert(E.type),be=T(E.internalFormat,ye,pe,E.normalized,E.colorSpace),ze=E.isVideoTexture!==!0,st=xe.__version===void 0||le===!0,me=se.dataReady,qe=b(E,$);Ue(i.TEXTURE_CUBE_MAP,E);let it;if(E.isDepthTexture){if(be=x(E.format===fi,E.type),st)if(ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,be,$.width,$.height);else for(let we=0;we<6;we++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,be,$.width,$.height,0,ye,pe,null)}else if(oe){ze&&st&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,be,$.width,$.height);for(let we=0;we<6;we++){it=K[we].mipmaps;for(let xt=0;xt<it.length;xt++){let Vt=it[xt];E.format!==Fn?ye!==null?ze?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt,0,0,Vt.width,Vt.height,ye,Vt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt,be,Vt.width,Vt.height,0,Vt.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt,0,0,Vt.width,Vt.height,ye,pe,Vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt,be,Vt.width,Vt.height,0,ye,pe,Vt.data)}}}else{if(it=E.mipmaps,ze&&st){it.length>0&&qe++;let we=He(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,be,we.width,we.height)}for(let we=0;we<6;we++)if(I){ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,K[we].width,K[we].height,ye,pe,K[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,be,K[we].width,K[we].height,0,ye,pe,K[we].data);for(let xt=0;xt<it.length;xt++){let _i=it[xt].image[we].image;ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt+1,0,0,_i.width,_i.height,ye,pe,_i.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt+1,be,_i.width,_i.height,0,ye,pe,_i.data)}}else{ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ye,pe,K[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,be,ye,pe,K[we]);for(let xt=0;xt<it.length;xt++){let Vt=it[xt];ze?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt+1,0,0,ye,pe,Vt.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt+1,be,ye,pe,Vt.image[we])}}}M(E)&&E.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),xe.__version=se.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function J(C,E,X,le,se,xe){let Se=r.convert(X.format,X.colorSpace),Q=r.convert(X.type),ne=T(X.internalFormat,Se,Q,X.normalized,X.colorSpace),oe=n.get(E),I=n.get(X);if(I.__renderTarget=E,!oe.__hasExternalTextures){let K=Math.max(1,E.width>>xe),$=Math.max(1,E.height>>xe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,xe,ne,K,$,E.depth,0,Se,Q,null):t.texImage2D(se,xe,ne,K,$,0,Se,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,se,I.__webglTexture,0,_t(E)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,se,I.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(C,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer){let le=E.depthTexture,se=le&&le.isDepthTexture?le.type:null,xe=x(E.stencilBuffer,se),Se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(E),xe,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(E),xe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,C)}else{let le=E.textures;for(let se=0;se<le.length;se++){let xe=le[se],Se=r.convert(xe.format,xe.colorSpace),Q=r.convert(xe.type),ne=T(xe.internalFormat,Se,Q,xe.normalized,xe.colorSpace);Me(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(E),ne,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(E),ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ne,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(C,E,X){let le=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(E.depthTexture);se.__renderTarget=E;let xe=le?E.depthTexture.image[0]:E.depthTexture.image;(!se.__webglTexture||xe.width!==E.width||xe.height!==E.height)&&(xe.width=E.width,xe.height=E.height,E.depthTexture.needsUpdate=!0),le?he(E.depthTexture,0):ee(E.depthTexture,0);let Se=se.__webglTexture,Q=_t(E),ne=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,oe=E.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ri)Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ne,Se,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,oe,ne,Se,0);else if(E.depthTexture.format===fi)Me(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ne,Se,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,oe,ne,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(C){let E=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let le=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){let se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",se)};le.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=le}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let le=0;le<6;le++)ce(E.__webglFramebuffer[le],C,le);else C.texture.mipmaps.length>0?ce(E.__webglFramebuffer[0],C,0):ce(E.__webglFramebuffer,C,0);else if(X){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=i.createRenderbuffer(),Pe(E.__webglDepthbuffer[le],C,!1);else{let se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Pe(E.__webglDepthbuffer,C,!1);else{let se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(C,E,X){let le=n.get(C);E!==void 0&&J(le.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Xe(C)}function ht(C){let E=C.texture,X=n.get(C),le=n.get(E);C.addEventListener("dispose",L),P(C);let se=C.textures,xe=C.isWebGLCubeRenderTarget===!0,Se=se.length>1;if(Se||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=E.version,a.memory.textures++),xe){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){X.__webglFramebuffer[Q]=[];for(let ne=0;ne<E.mipmaps.length;ne++)X.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else X.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(E.mipmaps.length>0){X.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)X.__webglFramebuffer[Q]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Se)for(let Q=0,ne=se.length;Q<ne;Q++){let oe=n.get(se[Q]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Me(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Q=0;Q<se.length;Q++){let ne=se[Q];X.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Q]);let oe=r.convert(ne.format,ne.colorSpace),I=r.convert(ne.type),K=T(ne.internalFormat,oe,I,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),$=_t(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,K,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,X.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)J(X.__webglFramebuffer[Q][ne],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else J(X.__webglFramebuffer[Q],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);M(E)?v(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Se){for(let Q=0,ne=se.length;Q<ne;Q++){let oe=se[Q],I=n.get(oe),K=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,I.__webglTexture),Ue(K,oe),J(X.__webglFramebuffer,C,oe,i.COLOR_ATTACHMENT0+Q,K,0),M(oe)&&v(K)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,le.__webglTexture),Ue(Q,E),E.mipmaps.length>0)for(let ne=0;ne<E.mipmaps.length;ne++)J(X.__webglFramebuffer[ne],C,E,i.COLOR_ATTACHMENT0,Q,ne);else J(X.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Q,0);M(E)?v(Q):E.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Xe(C)}function F(C){let E=C.textures;for(let X=0,le=E.length;X<le;X++){let se=E[X];if(M(se)&&se.mipmapsAutoUpdate===!0){let xe=S(C),Se=n.get(se).__webglTexture;t.bindTexture(xe,Se),v(xe),t.unbindTexture()}}}let Mt=[];function nt(C){if(C.samples>0){if(Me(C)===!1){let E=C.textures,X=C.width,le=C.height,se=i.COLOR_BUFFER_BIT,xe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(C),Q=E.length>1;if(Q)for(let oe=0;oe<E.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let oe=0;oe<E.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[oe]);let I=n.get(E[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,X,le,0,0,X,le,se,i.NEAREST),l===!0&&(Mt.length=0,Mt.push(i.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Mt.push(xe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let oe=0;oe<E.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[oe]);let I=n.get(E[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let E=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function _t(C){return Math.min(s.maxSamples,C.samples)}function Me(C){let E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(C){let E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function ke(C,E){let X=C.colorSpace,le=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==tr&&X!==On&&(ct.getTransfer(X)===pt?(le!==Fn||se!==cn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",X)),E}function He(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=de,this.resetTextureUnits=H,this.getTextureUnits=z,this.setTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=ae,this.setTexture3D=ve,this.setTextureCube=he,this.rebindTextures=tt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Me,this.dispose=B}function R_(i,e){function t(n,s=On){let r,a=ct.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ic)return i.BYTE;if(n===sc)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Ot)return i.HALF_FLOAT;if(n===oc)return i.ALPHA;if(n===lc)return i.RGB;if(n===Fn)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===go)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===_o)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===Br||n===zr||n===kr||n===Hr)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===yo||n===Mo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===Eo||n===To||n===wo||n===Ao||n===Gr||n===Ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===Eo)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wo)return r.COMPRESSED_R11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Co||n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Go)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Wo||n===Xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===Yo||n===Vr||n===Zo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new dr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ut({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends Vn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,_=null,y=typeof XRWebGLBinding<"u",m=new Nc,d={},g=t.getContextAttributes(),M=null,v=null,S=[],T=[],x=new ie,b=null,P=null,R=new nn;R.viewport=new Pt;let N=new nn;N.viewport=new Pt;let L=[R,N],k=new ao,A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ee=S[V];return ee===void 0&&(ee=new Ts,S[V]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(V){let ee=S[V];return ee===void 0&&(ee=new Ts,S[V]=ee),ee.getGripSpace()},this.getHand=function(V){let ee=S[V];return ee===void 0&&(ee=new Ts,S[V]=ee),ee.getHandSpace()};function G(V){let ee=T.indexOf(V.inputSource);if(ee===-1)return;let ae=S[ee];ae!==void 0&&(ae.update(V.inputSource,V.frame,c||a),ae.dispatchEvent({type:V.type,data:V.inputSource}))}function O(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",re);for(let V=0;V<S.length;V++){let ee=T[V];ee!==null&&(T[V]=null,S[V].disconnect(ee))}A=null,B=null,m.reset();for(let V in d)delete d[V];if(e.setRenderTarget(M),p=null,u=null,f=null,s=null,v=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),P!==null){let V=P.camera;V.fov=P.fov,V.zoom=P.zoom,V.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",O),s.addEventListener("inputsourceschange",re),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ve=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?fi:ri,ve=g.stencil?ts:Nn);let ue={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Nt(u.textureWidth,u.textureHeight,{format:Fn,type:cn,depthTexture:new oi(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Nt(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(V){for(let ee=0;ee<V.removed.length;ee++){let ae=V.removed[ee],ve=T.indexOf(ae);ve>=0&&(T[ve]=null,S[ve].disconnect(ae))}for(let ee=0;ee<V.added.length;ee++){let ae=V.added[ee],ve=T.indexOf(ae);if(ve===-1){for(let ue=0;ue<S.length;ue++)if(ue>=T.length){T.push(ae),ve=ue;break}else if(T[ue]===null){T[ue]=ae,ve=ue;break}if(ve===-1)break}let he=S[ve];he&&he.connect(ae)}}function W(V,ee){ee===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ee.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let ee=V.near,ae=V.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),k.near=N.near=R.near=ee,k.far=N.far=R.far=ae,(A!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,B=k.far),k.layers.mask=V.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let ve=V.parent,he=k.cameras;W(k,ve);for(let ue=0;ue<he.length;ue++)W(he[ue],ve);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&V.isPerspectiveCamera&&(P={camera:V,fov:V.fov,zoom:V.zoom}),H(V,k,ve)};function H(V,ee,ae){ae===null?V.matrix.copy(ee.matrixWorld):(V.matrix.copy(ae.matrixWorld),V.matrix.invert(),V.matrix.multiply(ee.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ir*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(V){return d[V]};let z=null;function j(V,ee){if(h=ee.getViewerPose(c||a),_=ee,h!==null){let ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ve=!1;ae.length!==k.cameras.length&&(k.cameras.length=0,ve=!0);for(let Ie=0;Ie<ae.length;Ie++){let Ue=ae[Ie],We=null;if(p!==null)We=p.getViewport(Ue);else{let _e=f.getViewSubImage(u,Ue);We=_e.viewport,Ie===0&&(e.setRenderTargetTextures(v,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(v))}let te=L[Ie];te===void 0&&(te=new nn,te.layers.enable(Ie),te.viewport=new Pt,L[Ie]=te),te.matrix.fromArray(Ue.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ue.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(We.x,We.y,We.width,We.height),Ie===0&&(k.matrix.copy(te.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ve===!0&&k.cameras.push(te)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Ie=f.getDepthInformation(ae[0]);Ie&&Ie.isValid&&Ie.texture&&m.init(Ie,s.renderState)}if(he&&he.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Ie=0;Ie<ae.length;Ie++){let Ue=ae[Ie].camera;if(Ue){let We=d[Ue];We||(We=new dr,d[Ue]=We);let te=f.getCameraImage(Ue);We.sourceTexture=te}}}}for(let ae=0;ae<S.length;ae++){let ve=T[ae],he=S[ae];ve!==null&&he!==void 0&&he.update(ve,ee,c||a)}z&&z(V,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}let de=new Ku;de.setAnimationLoop(j),this.setAnimationLoop=function(V){z=V},this.dispose=function(){}}},I_=new Rt,od=new je;od.set(-1,0,0,0,1,0,0,0,1);function L_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,_c(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,g,M,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,g,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let g=e.get(d),M=g.envMap,v=g.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(od),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D_(i,e,t,n){let s={},r={};function a(g,M){let v=M.program;n.uniformBlockBinding(g,v,s[g.id])}function o(g,M){let v=s[g.id];v===void 0&&(_(g),v=l(g),s[g.id]=v,g.addEventListener("dispose",m));let S=M.program;n.updateUBOMapping(g,S);let T=e.render.frame;r[g.id]!==T&&(c(g),r[g.id]=T)}function l(g){let M=i.createBuffer(),v=g.__size,S=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,S),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(g){let M=s[g.id],v=g.uniforms,S=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,x=v.length;T<x;T++){let b=v[T];if(Array.isArray(b))for(let P=0,R=b.length;P<R;P++)h(b[P],T,P,S);else h(b,T,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(g,M,v,S){if(u(g,M,v,S)===!0){let T=g.__offset,x=g.value;if(Array.isArray(x)){let b=0;for(let P=0;P<x.length;P++){let R=x[P],N=y(R,!0);f(R,g.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,g.__data)}}function f(g,M,v){typeof g=="number"||typeof g=="boolean"?M[v]=g:g.isMatrix3?(M[v]=g.elements[0],M[v+1]=g.elements[1],M[v+2]=g.elements[2],M[v+3]=0,M[v+4]=g.elements[3],M[v+5]=g.elements[4],M[v+6]=g.elements[5],M[v+7]=0,M[v+8]=g.elements[6],M[v+9]=g.elements[7],M[v+10]=g.elements[8],M[v+11]=0):ArrayBuffer.isView(g)?M.set(g.subarray(0,M.length-v),v):g.toArray(M,v)}function u(g,M,v,S){let T=g.value,x=M+"_"+v;if(Array.isArray(T)){S[x]===void 0&&(S[x]=[]);let b=S[x],P=!1;for(let R=0;R<T.length;R++)p(T[R],b,R)===!0&&(P=!0);return P}return p(T,S,x)}function p(g,M,v){if(M[v]===void 0)return typeof g=="number"||typeof g=="boolean"?M[v]=g:ArrayBuffer.isView(g)?M[v]=g.slice():M[v]=g.clone(),!0;{let S=M[v];if(typeof g=="number"||typeof g=="boolean"){if(S!==g)return M[v]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(S.equals(g)===!1)return S.copy(g),!0}}return!1}function _(g){let M=g.uniforms,v=0,S=16;for(let x=0,b=M.length;x<b;x++){let P=Array.isArray(M[x])?M[x]:[M[x]];for(let R=0,N=P.length;R<N;R++){let L=P[R],k=Array.isArray(L.value)?L.value:[L.value],A=Array.isArray(M[x])||Array.isArray(L.value),B=v;for(let O=0,re=k.length;O<re;O++){let W=k[O],H=y(W,A),z=v%S,j=z%H.boundary,de=z+j;v+=j,de!==0&&S-de<H.storage&&(v+=S-de),O===0&&(B=v),v+=H.storage}let G=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new G((v-B)/Float32Array.BYTES_PER_ELEMENT),L.__offset=B}}let T=v%S;return T>0&&(v+=S-T),g.__size=v,g.__cache={},this}function y(g,M){let v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=16,v.storage=48):g.isMatrix4?(v.boundary=16,v.storage=64):g.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(v.boundary=16,v.storage=g.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",g),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(g){let M=g.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(let g in s)i.deleteBuffer(s[g]);s={},r={}}return{bind:a,update:o,dispose:d}}var N_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function U_(){return Yn===null&&(Yn=new za(N_,16,16,Di,Ot),Yn.name="DFG_LUT",Yn.minFilter=Yt,Yn.magFilter=Yt,Yn.wrapS=Hn,Yn.wrapT=Hn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Qo=class{constructor(e={}){let{canvas:t=xu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=cn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let y=p,m=new Set([xo,_o,go]),d=new Set([cn,Nn,Os,ts,po,mo]),g=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},S=null,T=null,x=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,L=null,k=null,A=null,B=null;this._outputColorSpace=kt;let G=0,O=0,re=null,W=-1,H=null,z=new Pt,j=new Pt,de=null,V=new ge(0),ee=0,ae=t.width,ve=t.height,he=1,ue=null,Be=null,Ie=new Pt(0,0,ae,ve),Ue=new Pt(0,0,ae,ve),We=!1,te=new Ri,_e=new ka,fe=!1,Re=!1,J=new Rt,Pe=new D,ce=new Pt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function ht(){return re===null?he:1}let F=n;function Mt(w,U){return t.getContext(w,U)}let nt,_t,Me,wt,ke,He,C,E,X,le,se,xe,Se,Q,ne,oe,I,K,$,ye,pe,be,ze;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lo}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",we,!1),F===null){let U="webgl2";if(F=Mt(U,w),F===null)throw Mt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(w){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ke("WebGLRenderer: "+w.message),w}function st(){nt=new q0(F),nt.init(),pe=new R_(F,nt),_t=new U0(F,nt,e,pe),Me=new w_(F,nt),_t.reversedDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),k=F.createFramebuffer(),A=F.createFramebuffer(),B=F.createFramebuffer(),wt=new $0(F),ke=new d_,He=new A_(F,nt,Me,ke,_t,pe,wt),C=new X0(R),E=new Kf(F),be=new D0(F,E),X=new Y0(F,E,wt,be),le=new K0(F,X,E,be,wt),K=new J0(F,_t,He),ne=new F0(ke),se=new u_(R,C,nt,_t,be,ne),xe=new L_(R,ke),Se=new p_,Q=new y_(nt),I=new L0(R,C,Me,le,_,l),oe=new T_(R,le,_t),ze=new D_(F,wt,_t,Me),$=new N0(F,nt,wt),ye=new Z0(F,nt,wt),wt.programs=se.programs,R.capabilities=_t,R.extensions=nt,R.properties=ke,R.renderLists=Se,R.shadowMap=oe,R.state=Me,R.info=wt}y!==cn&&(P=new j0(y,t.width,t.height,o,s,r));let me=new Uc(R,F);this.xr=me,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(w){w!==void 0&&(he=w,this.setSize(ae,ve,!1))},this.getSize=function(w){return w.set(ae,ve)},this.setSize=function(w,U,Z=!0){if(me.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=w,ve=U,t.width=Math.floor(w*he),t.height=Math.floor(U*he),Z===!0&&(t.style.width=w+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(ae*he,ve*he).floor()},this.setDrawingBufferSize=function(w,U,Z){ae=w,ve=U,he=Z,t.width=Math.floor(w*Z),t.height=Math.floor(U*Z),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(y===cn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(Ie)},this.setViewport=function(w,U,Z,q){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,U,Z,q),Me.viewport(z.copy(Ie).multiplyScalar(ht()).round())},this.getScissor=function(w){return w.copy(Ue)},this.setScissor=function(w,U,Z,q){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,U,Z,q),Me.scissor(j.copy(Ue).multiplyScalar(ht()).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(w){Me.setScissorTest(We=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){Be=w},this.getClearColor=function(w){return w.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,Z=!0){let q=0;if(w){let Y=!1;if(re!==null){let Te=re.texture.format;Y=m.has(Te)}if(Y){let Te=re.texture.type,Le=d.has(Te),Ee=I.getClearColor(),Ce=I.getClearAlpha(),Oe=Ee.r,et=Ee.g,ut=Ee.b;Le?(g[0]=Oe,g[1]=et,g[2]=ut,g[3]=Ce,F.clearBufferuiv(F.COLOR,0,g)):(M[0]=Oe,M[1]=et,M[2]=ut,M[3]=Ce,F.clearBufferiv(F.COLOR,0,M))}else q|=F.COLOR_BUFFER_BIT}U&&(q|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",we,!1),I.dispose(),Se.dispose(),Q.dispose(),He.dispose(),ke.dispose(),C.dispose(),le.dispose(),X.dispose(),be.dispose(),ze.dispose(),se.dispose(),me.dispose(),me.removeEventListener("sessionstart",Kc),me.removeEventListener("sessionend",Qc),Oi.stop()};function qe(w){w.preventDefault(),pc("WebGLRenderer: Context Lost."),N=!0}function it(){pc("WebGLRenderer: Context Restored."),N=!1;let w=wt.autoReset,U=oe.enabled,Z=oe.autoUpdate,q=oe.needsUpdate,Y=oe.type;st(),wt.autoReset=w,oe.enabled=U,oe.autoUpdate=Z,oe.needsUpdate=q,oe.type=Y}function we(w){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){let U=w.target;U.removeEventListener("dispose",xt),Vt(U)}function Vt(w){_i(w),ke.remove(w)}function _i(w){let U=ke.get(w).programs;U!==void 0&&(U.forEach(function(Z){se.releaseProgram(Z)}),w.isShaderMaterial&&se.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,Z,q,Y,Te){U===null&&(U=Xe);let Le=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ee=Fd(w,U,Z,q,Y);Me.setMaterial(q,Le);let Ce=Z.index,Oe=1;if(q.wireframe===!0){if(Ce=X.getWireframeAttribute(Z),Ce===void 0)return;Oe=2}let et=Z.drawRange,ut=Z.attributes.position,De=et.start*Oe,dt=(et.start+et.count)*Oe;Te!==null&&(De=Math.max(De,Te.start*Oe),dt=Math.min(dt,(Te.start+Te.count)*Oe)),Ce!==null?(De=Math.max(De,0),dt=Math.min(dt,Ce.count)):ut!=null&&(De=Math.max(De,0),dt=Math.min(dt,ut.count));let Bt=dt-De;if(Bt<0||Bt===1/0)return;be.setup(Y,q,Ee,Z,Ce);let At,St=$;if(Ce!==null&&(At=E.get(Ce),St=ye,St.setIndex(At)),Y.isMesh)q.wireframe===!0?(Me.setLineWidth(q.wireframeLinewidth*ht()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(Y.isLine){let Qt=q.linewidth;Qt===void 0&&(Qt=1),Me.setLineWidth(Qt*ht()),Y.isLineSegments?St.setMode(F.LINES):Y.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else Y.isPoints?St.setMode(F.POINTS):Y.isSprite&&St.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Qt=Y._multiDrawStarts,Ne=Y._multiDrawCounts,an=Y._multiDrawCount,gt=Ce?E.get(Ce).bytesPerElement:1,Bi=ke.get(q).currentProgram.getUniforms();for(let jt=0;jt<an;jt++)Bi.setValue(F,"_gl_DrawID",jt),St.render(Qt[jt]/gt,Ne[jt])}else if(Y.isInstancedMesh)St.renderInstances(De,Bt,Y.count);else if(Z.isInstancedBufferGeometry){let Qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ne=Math.min(Z.instanceCount,Qt);St.renderInstances(De,Bt,Ne)}else St.render(De,Bt)};function Jc(w,U,Z,q){L!==null&&w.isNodeMaterial&&L.setObject(q,w),fe===!0&&ne.setState(w,Z,!1),w.transparent===!0&&w.side===Ft&&w.forceSinglePass===!1?(w.side=$t,w.needsUpdate=!0,qs(w,U,q),w.side=Xn,w.needsUpdate=!0,qs(w,U,q),w.side=Ft):qs(w,U,q)}this.compile=function(w,U,Z=null){Z===null&&(Z=w),L!==null&&L.renderStart(w,U,Z),T=Q.get(Z),T.init(U),b.push(T),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),w!==Z&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),Re=this.localClippingEnabled,fe=ne.init(this.clippingPlanes,Re),fe===!0&&ne.setGlobalState(this.clippingPlanes,U),L!==null&&oe.render(T.state.shadowsArray,Z,U);let q=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Te=Y.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){let Ee=Te[Le];Jc(Ee,Z,U,Y),q.add(Ee)}else Jc(Te,Z,U,Y),q.add(Te)}),T=b.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(w,U,Z=null){let q=this.compile(w,U,Z);return new Promise(Y=>{function Te(){if(q.forEach(function(Le){let Ce=ke.get(Le).currentProgram;(Ce===void 0||Ce.isReady())&&q.delete(Le)}),q.size===0){Y(w);return}setTimeout(Te,10)}nt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let dl=null;function Nd(w){dl&&dl(w)}function Kc(){Oi.stop()}function Qc(){Oi.start()}let Oi=new Ku;Oi.setAnimationLoop(Nd),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(w){dl=w,me.setAnimationLoop(w),w===null?Oi.stop():Oi.start()},me.addEventListener("sessionstart",Kc),me.addEventListener("sessionend",Qc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(w,U);let Z=me.enabled===!0&&me.isPresenting===!0,q=P!==null&&(re===null||Z)&&P.begin(R,re);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(U),U=me.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,U,re),T=Q.get(w,b.length),T.init(U),T.state.textureUnits=He.getTextureUnits(),b.push(T),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?_e.setFromArrayCamera(U):te.setFromProjectionMatrix(J,Sn,U.reversedDepth),Re=this.localClippingEnabled,fe=ne.init(this.clippingPlanes,Re),S=Se.get(w,x.length),S.init(),x.push(S),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let Le=R.xr.getDepthSensingMesh();Le!==null&&fl(Le,U,-1/0,R.sortObjects)}fl(w,U,0,R.sortObjects),S.finish(),L!==null&&L.updateLights(T.state.lightsArray),R.sortObjects===!0&&S.sort(ue,Be),tt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,tt&&I.addToRenderList(S,w),this.info.autoReset===!0&&this.info.reset(),fe===!0&&ne.beginShadows();let Y=T.state.shadowsArray;if(oe.render(Y,w,U),fe===!0&&ne.endShadows(),(q&&P.hasRenderPass())===!1){let Le=S.opaque,Ee=S.transmissive;if(T.setupLights(),U.isArrayCamera){let Ce=U.cameras;if(Ee.length>0)for(let Oe=0,et=Ce.length;Oe<et;Oe++){let ut=Ce[Oe];eh(Le,Ee,w,ut)}tt&&I.render(w);for(let Oe=0,et=Ce.length;Oe<et;Oe++){let ut=Ce[Oe];jc(S,w,ut,ut.viewport)}}else Ee.length>0&&eh(Le,Ee,w,U),tt&&I.render(w),jc(S,w,U)}re!==null&&O===0&&(He.updateMultisampleRenderTarget(re),He.updateRenderTargetMipmap(re)),q&&P.end(R),w.isScene===!0&&w.onAfterRender(R,w,U),be.resetDefaultState(),W=-1,H=null,b.pop(),b.length>0?(T=b[b.length-1],He.setTextureUnits(T.state.textureUnits),fe===!0&&ne.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,L!==null&&L.renderEnd()};function fl(w,U,Z,q){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let Le=U.isArrayCamera?_e:te;if(!w.frustumCulled||w.intersectsFrustum(Le)){q&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(J);let Ee=le.update(w),Ce=w.material;Ce.visible&&S.push(w,Ee,Ce,Z,ce.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let Le=U.isArrayCamera?_e:te;if(!w.frustumCulled||w.intersectsFrustum(Le)){let Ee=le.update(w),Ce=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ce.copy(Ee.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(J)),Array.isArray(Ce)){let Oe=Ee.groups;for(let et=0,ut=Oe.length;et<ut;et++){let De=Oe[et],dt=Ce[De.materialIndex];dt&&dt.visible&&S.push(w,Ee,dt,Z,ce.z,De,U)}}else Ce.visible&&S.push(w,Ee,Ce,Z,ce.z,null,U)}}}let Te=w.children;for(let Le=0,Ee=Te.length;Le<Ee;Le++)fl(Te[Le],U,Z,q)}function jc(w,U,Z,q){let{opaque:Y,transmissive:Te,transparent:Le}=w;T.setupLightsView(Z),fe===!0&&ne.setGlobalState(R.clippingPlanes,Z),q&&Me.viewport(z.copy(q)),Y.length>0&&Qr(Y,U,Z),Te.length>0&&Qr(Te,U,Z),Le.length>0&&Qr(Le,U,Z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function eh(w,U,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){let De=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new Nt(1,1,{generateMipmaps:!0,type:De?Ot:cn,minFilter:di,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Te=T.state.transmissionRenderTarget[q.id],Le=q.viewport||z;Te.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);let Ee=R.getRenderTarget(),Ce=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(Te),R.getClearColor(V),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),tt&&I.render(Z);let et=R.toneMapping;R.toneMapping=qn;let ut=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),fe===!0&&ne.setGlobalState(R.clippingPlanes,q),Qr(w,Z,q),He.updateMultisampleRenderTarget(Te),He.updateRenderTargetMipmap(Te),nt.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let dt=0,Bt=U.length;dt<Bt;dt++){let At=U[dt],{object:St,geometry:Qt,material:Ne,group:an}=At;if(Ne.side===Ft&&St.layers.test(q.layers)){let gt=Ne.side;Ne.side=$t,Ne.needsUpdate=!0,th(St,Z,q,Qt,Ne,an),Ne.side=gt,Ne.needsUpdate=!0,De=!0}}De===!0&&(He.updateMultisampleRenderTarget(Te),He.updateRenderTargetMipmap(Te))}R.setRenderTarget(Ee,Ce,Oe),R.setClearColor(V,ee),ut!==void 0&&(q.viewport=ut),R.toneMapping=et}function Qr(w,U,Z){let q=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,Te=w.length;Y<Te;Y++){let Le=w[Y],{object:Ee,geometry:Ce,group:Oe}=Le,et=Le.material;et.allowOverride===!0&&q!==null&&(et=q),Ee.layers.test(Z.layers)&&th(Ee,U,Z,Ce,et,Oe)}}function th(w,U,Z,q,Y,Te){L!==null&&Y.isNodeMaterial&&L.setObject(w,Y),w.onBeforeRender(R,U,Z,q,Y,Te),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(R,U,Z,q,w,Te),Y.transparent===!0&&Y.side===Ft&&Y.forceSinglePass===!1?(Y.side=$t,Y.needsUpdate=!0,R.renderBufferDirect(Z,U,q,Y,w,Te),Y.side=Xn,Y.needsUpdate=!0,R.renderBufferDirect(Z,U,q,Y,w,Te),Y.side=Ft):R.renderBufferDirect(Z,U,q,Y,w,Te),w.onAfterRender(R,U,Z,q,Y,Te)}function nh(w){let U=0;for(let Z of w)Z.texture!==null&&U++;return U}function qs(w,U,Z){U.isScene!==!0&&(U=Xe);let q=ke.get(w),Y=T.state.lights,Te=T.state.shadowsArray,Le=Y.state.version,Ee=se.getParameters(w,Y.state,Te,U,Z,T.state.lightProbeGridArray),Ce=se.getProgramCacheKey(Ee),Oe=q.programs;q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,q.fog=U.fog;let et=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;q.envMap=C.get(w.envMap||q.environment,et),q.envMapRotation=q.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",xt),Oe=new Map,q.programs=Oe,q.programVariants=new Map);let ut=Oe.get(Ce);if(ut!==void 0){if(q.currentProgram===ut&&q.lightsStateVersion===Le)return sh(w,Ee),ut}else Ee.uniforms=se.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,Z,Ee),w.onBeforeCompile(Ee,R),ut=se.acquireProgram(Ee,Ce),Oe.set(Ce,ut),q.uniforms=Ee.uniforms;let De=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=ne.uniform),sh(w,Ee),q.needsLights=Bd(w),q.lightsStateVersion=Le,q.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.sunLights.value=Y.state.sun,De.sunLightShadows.value=Y.state.sunShadow,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.sunShadowMatrix.value=Y.state.sunShadowMatrix,De.sunShadowCascade.value=Y.state.sunShadowCascade,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=nh(T.state.lightProbeGridArray),q.currentProgram=ut,q.uniformsList=null,ut}function Ud(w,U,Z,q,Y){let Te=ke.get(w),Le=Te.currentProgram.id+","+q+","+Y,Ee=Te.programVariants.get(Le);return Ee===void 0?(Ee=qs(w,U,Z),Te.programVariants.set(Le,Ee)):(Te.currentProgram=Ee,Te.uniformsList=null,Te.outputColorSpace=q,Te.toneMapping=Y),Ee}function ih(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=zs.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function sh(w,U){let Z=ke.get(w);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Fd(w,U,Z,q,Y){U.isScene!==!0&&(U=Xe),He.resetTextureUnits();let Te=U.fog,Le=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?U.environment:null,Ee=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ct.workingColorSpace,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Oe=C.get(q.envMap||Le,Ce),et=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ut=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,Bt=!!Z.morphAttributes.color,At=qn;q.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(At=R.toneMapping);let St=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Qt=St!==void 0?St.length:0,Ne=ke.get(q),an=T.state.lights;if(fe===!0&&(Re===!0||w!==H)){let Lt=w===H&&q.id===W;ne.setState(q,w,Lt)}let gt=!1,Bi=!1;q.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==an.state.version||Y.isBatchedMesh&&Ne.batching===!1||!Y.isBatchedMesh&&Ne.batching===!0||Y.isBatchedMesh&&Ne.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ne.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ne.instancing===!1||!Y.isInstancedMesh&&Ne.instancing===!0||Y.isSkinnedMesh&&Ne.skinning===!1||!Y.isSkinnedMesh&&Ne.skinning===!0||Y.isInstancedMesh&&Ne.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ne.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ne.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ne.instancingMorph===!1&&Y.morphTexture!==null||Ne.envMap!==Oe||q.fog===!0&&Ne.fog!==Te||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ne.numPlanes||Ne.numIntersection!==ne.numIntersection)||Ne.vertexAlphas!==et||Ne.vertexTangents!==ut||Ne.morphTargets!==De||Ne.morphNormals!==dt||Ne.morphColors!==Bt||Ne.morphTargetsCount!==Qt||Ne.numLightProbeGrids!==nh(T.state.lightProbeGridArray)?gt=!0:(Ne.outputColorSpace!==Ee||Ne.toneMapping!==At)&&(Bi=!0):(gt=!0,Ne.__version=q.version);let jt=Ne.currentProgram;(gt===!0||Bi===!0)&&(jt=Bi===!0?Ud(q,U,Y,Ee,At):qs(q,U,Y),L&&q.isNodeMaterial&&L.onUpdateProgram(q,jt,Ne));let jr=!1,xi=!1,zi=!1,ft=jt.getUniforms(),Jt=Ne.uniforms;if(Me.useProgram(jt.program)&&(jr=!0,xi=!0,zi=!0),q.id!==W&&(W=q.id,xi=!0),jr||H!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ft.setValue(F,"projectionMatrix",w.projectionMatrix),ft.setValue(F,"viewMatrix",w.matrixWorldInverse);let Wt=ft.map.cameraPosition;Wt!==void 0&&Wt.setValue(F,Pe.setFromMatrixPosition(w.matrixWorld)),_t.logarithmicDepthBuffer&&ft.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ft.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,xi=!0,zi=!0)}if(Ne.needsLights&&(an.state.sunShadowMap.length>0&&ft.setValue(F,"sunShadowMap",an.state.sunShadowMap,He),an.state.directionalShadowMap.length>0&&ft.setValue(F,"directionalShadowMap",an.state.directionalShadowMap,He),an.state.spotShadowMap.length>0&&ft.setValue(F,"spotShadowMap",an.state.spotShadowMap,He),an.state.pointShadowMap.length>0&&ft.setValue(F,"pointShadowMap",an.state.pointShadowMap,He)),Y.isSkinnedMesh){ft.setOptional(F,Y,"bindMatrix"),ft.setOptional(F,Y,"bindMatrixInverse");let Lt=Y.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ft.setValue(F,"boneTexture",Lt.boneTexture,He))}Y.isBatchedMesh&&(ft.setOptional(F,Y,"batchingTexture"),ft.setValue(F,"batchingTexture",Y._matricesTexture,He),ft.setOptional(F,Y,"batchingIdTexture"),ft.setValue(F,"batchingIdTexture",Y._indirectTexture,He),ft.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ft.setValue(F,"batchingColorTexture",Y._colorsTexture,He));let wn=Z.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&K.update(Y,Z,jt),(xi||Ne.receiveShadow!==Y.receiveShadow)&&(Ne.receiveShadow=Y.receiveShadow,ft.setValue(F,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&U.environment!==null&&(Jt.envMapIntensity.value=U.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=U_()),xi){if(ft.setValue(F,"toneMappingExposure",R.toneMappingExposure),Ne.needsLights&&Od(Jt,zi),Te&&q.fog===!0&&xe.refreshFogUniforms(Jt,Te),xe.refreshMaterialUniforms(Jt,q,he,ve,T.state.transmissionRenderTarget[w.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let Lt=v,Wt=0;for(let Qn of T.state.lightProbeGridArray)Qn.texture!==null&&(Lt.textures[Wt]=Qn.texture,Lt.min[Wt]=Qn.boundingBox.min,Lt.max[Wt]=Qn.boundingBox.max,Lt.resolution[Wt]=Qn.resolution,Wt++);for(let Qn in Lt)Lt[Qn].length=Wt;Jt.probesSH.value=Lt.textures,Jt.probesMin.value=Lt.min,Jt.probesMax.value=Lt.max,Jt.probesResolution.value=Lt.resolution}zs.upload(F,ih(Ne),Jt,He)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(zs.upload(F,ih(Ne),Jt,He),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ft.setValue(F,"center",Y.center),ft.setValue(F,"modelViewMatrix",Y.modelViewMatrix),ft.setValue(F,"normalMatrix",Y.normalMatrix),ft.setValue(F,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Lt=q.uniformsGroups;for(let Wt=0,Qn=Lt.length;Wt<Qn;Wt++){let ah=Lt[Wt];ze.update(ah,jt),ze.bind(ah,jt)}}return jt}function Od(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Bd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(w,U,Z){let q=ke.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ke.get(w.texture).__webglTexture=U,ke.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let Z=ke.get(w);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,Z=0){re=w,G=U,O=Z;let q=null,Y=!1,Te=!1;if(w){let Ee=ke.get(w);if(Ee.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(F.FRAMEBUFFER,Ee.__webglFramebuffer),z.copy(w.viewport),j.copy(w.scissor),de=w.scissorTest,Me.viewport(z),Me.scissor(j),Me.setScissorTest(de),W=-1;return}else if(Ee.__webglFramebuffer===void 0)He.setupRenderTarget(w);else if(Ee.__hasExternalTextures)He.rebindTextures(w,ke.get(w.texture).__webglTexture,ke.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let et=w.depthTexture;if(Ee.__boundDepthTexture!==et){if(et!==null&&ke.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(w)}}let Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Te=!0);let Oe=ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?q=Oe[U][Z]:q=Oe[U],Y=!0):w.samples>0&&He.useMultisampledRTT(w)===!1?q=ke.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?q=Oe[Z]:q=Oe,z.copy(w.viewport),j.copy(w.scissor),de=w.scissorTest}else z.copy(Ie).multiplyScalar(he).floor(),j.copy(Ue).multiplyScalar(he).floor(),de=We;if(Z!==0&&(q=k),Me.bindFramebuffer(F.FRAMEBUFFER,q)&&Me.drawBuffers(w,q),Me.viewport(z),Me.scissor(j),Me.setScissorTest(de),Y){let Ee=ke.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,Z)}else if(Te){let Ee=U;for(let Ce=0;Ce<w.textures.length;Ce++){let Oe=ke.get(w.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Oe.__webglTexture,Z,Ee)}}else if(w!==null&&Z!==0){let Ee=ke.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ee.__webglTexture,Z)}W=-1};function rh(w){let U=ke.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=_t.textureFormatReadable(w.format),U.__typeReadable=_t.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,Z,q,Y,Te,Le,Ee=0){if(!(w&&w.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ce=Ce[Le],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){Me.bindFramebuffer(F.FRAMEBUFFER,Ce);try{let Oe=w.textures[Ee],et=Oe.format,ut=Oe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ee);let De=rh(Oe);if(De.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-q&&Z>=0&&Z<=w.height-Y&&F.readPixels(U,Z,q,Y,pe.convert(et),pe.convert(ut),Te)}finally{let Oe=re!==null?ke.get(re).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,U,Z,q,Y,Te,Le,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ce=Ce[Le],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(U>=0&&U<=w.width-q&&Z>=0&&Z<=w.height-Y){Me.bindFramebuffer(F.FRAMEBUFFER,Ce);let Oe=w.textures[Ee],et=Oe.format,ut=Oe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ee);let De=rh(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels(U,Z,q,Y,pe.convert(et),pe.convert(ut),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Bt=re!==null?ke.get(re).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Bt);let At=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await yu(F,At,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(dt),F.deleteSync(At),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,Z=0){let q=Math.pow(2,-Z),Y=Math.floor(w.image.width*q),Te=Math.floor(w.image.height*q),Le=U!==null?U.x:0,Ee=U!==null?U.y:0;He.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Le,Ee,Y,Te),Me.unbindTexture()},this.copyTextureToTexture=function(w,U,Z=null,q=null,Y=0,Te=0){let Le,Ee,Ce,Oe,et,ut,De,dt,Bt,At=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(Z!==null)Le=Z.max.x-Z.min.x,Ee=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,Oe=Z.min.x,et=Z.min.y,ut=Z.isBox3?Z.min.z:0;else{let ft=Math.pow(2,-Y);Le=Math.floor(At.width*ft),Ee=Math.floor(At.height*ft),w.isDataArrayTexture?Ce=At.depth:w.isData3DTexture?Ce=Math.floor(At.depth*ft):Ce=1,Oe=0,et=0,ut=0}q!==null?(De=q.x,dt=q.y,Bt=q.z):(De=0,dt=0,Bt=0);let St=pe.convert(U.format),Qt=pe.convert(U.type),Ne;U.isData3DTexture?(He.setTexture3D(U,0),Ne=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Ne=F.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Ne=F.TEXTURE_2D),Me.activeTexture(F.TEXTURE0),Me.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),Me.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),Me.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let an=Me.getParameter(F.UNPACK_ROW_LENGTH),gt=Me.getParameter(F.UNPACK_IMAGE_HEIGHT),Bi=Me.getParameter(F.UNPACK_SKIP_PIXELS),jt=Me.getParameter(F.UNPACK_SKIP_ROWS),jr=Me.getParameter(F.UNPACK_SKIP_IMAGES);Me.pixelStorei(F.UNPACK_ROW_LENGTH,At.width),Me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At.height),Me.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),Me.pixelStorei(F.UNPACK_SKIP_ROWS,et),Me.pixelStorei(F.UNPACK_SKIP_IMAGES,ut);let xi=w.isDataArrayTexture||w.isData3DTexture,zi=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let ft=ke.get(w),Jt=ke.get(U),wn=ke.get(ft.__renderTarget),Lt=ke.get(Jt.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,wn.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Wt=0;Wt<Ce;Wt++)xi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(w).__webglTexture,Y,ut+Wt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(U).__webglTexture,Te,Bt+Wt)),F.blitFramebuffer(Oe,et,Oe+Le,et+Ee,De,dt,De+Le,dt+Ee,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||ke.has(w)){let ft=ke.get(w),Jt=ke.get(U);Me.bindFramebuffer(F.READ_FRAMEBUFFER,A),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let wn=0;wn<Ce;wn++)xi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ft.__webglTexture,Y,ut+wn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,Y),zi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Jt.__webglTexture,Te,Bt+wn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Jt.__webglTexture,Te),Y!==0?F.blitFramebuffer(Oe,et,Oe+Le,et+Ee,De,dt,De+Le,dt+Ee,F.COLOR_BUFFER_BIT,F.NEAREST):zi?F.copyTexSubImage3D(Ne,Te,De,dt,Bt+wn,Oe,et,Le,Ee):F.copyTexSubImage2D(Ne,Te,De,dt,Oe,et,Le,Ee);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else zi?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ne,Te,De,dt,Bt,Le,Ee,Ce,St,Qt,At.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ne,Te,De,dt,Bt,Le,Ee,Ce,St,At.data):F.texSubImage3D(Ne,Te,De,dt,Bt,Le,Ee,Ce,St,Qt,At):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,De,dt,Le,Ee,St,Qt,At.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,De,dt,At.width,At.height,St,At.data):F.texSubImage2D(F.TEXTURE_2D,Te,De,dt,Le,Ee,St,Qt,At);Me.pixelStorei(F.UNPACK_ROW_LENGTH,an),Me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),Me.pixelStorei(F.UNPACK_SKIP_PIXELS,Bi),Me.pixelStorei(F.UNPACK_SKIP_ROWS,jt),Me.pixelStorei(F.UNPACK_SKIP_IMAGES,jr),Te===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Ne),Me.unbindTexture()},this.initRenderTarget=function(w){ke.get(w).__webglFramebuffer===void 0&&He.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?He.setTextureCube(w,0):w.isData3DTexture?He.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?He.setTexture2DArray(w,0):He.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){G=0,O=0,re=null,Me.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Gs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},F_=new Ls(-1,1,1,-1,0,1),Fc=class extends bt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},O_=new Fc,Ni=class{constructor(e){this._mesh=new mt(O_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,F_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ui=class extends vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pi.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ni(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Zr=class extends vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},tl=class extends vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var nl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ot}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ui(Gs),this.copyPass.material.blending=ui,this.timer=new Cr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Zr!==void 0&&(a instanceof Zr?n=!0:a instanceof tl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var il=class extends vn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var ld={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Vs=class i extends vn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,a,{type:Ot,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Nt(r,a,{type:Ot,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Nt(r,a,{type:Ot,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=ld;this.highPassUniforms=pi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pi.clone(Gs.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:Gs.vertexShader,fragmentShader:Gs.fragmentShader,premultipliedAlpha:!0,blending:Pr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new Ln,this._fsQuad=new Ni(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ut({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Vs.BlurDirectionX=new ie(1,0);Vs.BlurDirectionY=new ie(0,1);var $r={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var sl=class extends vn{constructor(){super(),this.isOutputPass=!0,this.uniforms=pi.clone($r.uniforms),this.material=new Ps({name:$r.name,uniforms:this.uniforms,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader}),this._fsQuad=new Ni(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ir?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ji?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Nr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Fi(i){let e=i>>>0||1;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}function Et(i=1){let e=Fi(i),t=new Uint8Array(512),n=new Float32Array(256),s=new Float32Array(256);for(let a=0;a<256;a++){t[a]=a;let o=e()*Math.PI*2;n[a]=Math.cos(o),s[a]=Math.sin(o)}for(let a=255;a>0;a--){let o=e()*(a+1)|0,l=t[a];t[a]=t[o],t[o]=l}for(let a=0;a<256;a++)t[a+256]=t[a];let r=a=>a*a*a*(a*(a*6-15)+10);return function(a,o){let l=Math.floor(a),c=Math.floor(o),h=a-l,f=o-c,u=l&255,p=c&255,_=t[t[u]+p],y=t[t[u+1]+p],m=t[t[u]+p+1],d=t[t[u+1]+p+1],g=n[_]*h+s[_]*f,M=n[y]*(h-1)+s[y]*f,v=n[m]*h+s[m]*(f-1),S=n[d]*(h-1)+s[d]*(f-1),T=r(h),x=r(f);return 1.414*(g+T*(M-g)+x*(v+T*(S-v)-(g+T*(M-g))))}}function Tt(i,e,t,n=5,s=2.02,r=.5){let a=0,o=.5,l=1,c=0;for(let h=0;h<n;h++)a+=o*i(e*l,t*l),c+=o,o*=r,l*=s;return a/c}function is(i=1){let e=Fi(i),t=new Float32Array(512);for(let s=0;s<512;s++)t[s]=e();let n=(s,r)=>(Math.imul(s,374761393)+Math.imul(r,668265263)>>>0)%256;return function(s,r){let a=Math.floor(s),o=Math.floor(r),l=9,c=9;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){let u=n(a+f,o+h),p=a+f+t[u],_=o+h+t[u+256],y=(p-s)*(p-s)+(_-r)*(_-r);y<l?(c=l,l=y):y<c&&(c=y)}return[Math.sqrt(l),Math.sqrt(c)]}}var hn=(i,e=0,t=1)=>i<e?e:i>t?t:i,Fe=(i,e,t)=>{let n=hn((t-i)/(e-i));return n*n*(3-2*n)},Oc=(i,e,t)=>i+(e-i)*t;function Ge(i,e,t){return[Oc(i[0],e[0],t),Oc(i[1],e[1],t),Oc(i[2],e[2],t)]}function Qe(i){let e=parseInt(i.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}var Bc=new Map;function un(i,e){return Bc.has(i)||Bc.set(i,e()),Bc.get(i)}function dn(i,e,t={}){let n=i,s=t.h||i,r=rl(n,s),a=r.getContext("2d"),o=a.createImageData(n,s),l=o.data,c=t.normal?new Float32Array(n*s):null,h=t.rough?rl(n,s):null,f=h?h.getContext("2d").createImageData(n,s):null,u=t.alpha?rl(n,s):null,p=u?u.getContext("2d").createImageData(n,s):null,_={c:[0,0,0],h:0,r:.5,a:1};for(let m=0;m<s;m++)for(let d=0;d<n;d++){_.h=0,_.r=.5,_.a=1,e((d+.5)/n,(m+.5)/s,_);let g=(m*n+d)*4;if(l[g]=_.c[0],l[g+1]=_.c[1],l[g+2]=_.c[2],l[g+3]=t.alphaInMap?_.a*255:255,c&&(c[m*n+d]=_.h),f){let M=_.r*255;f.data[g]=f.data[g+1]=f.data[g+2]=M,f.data[g+3]=255}if(p){let M=_.a*255;p.data[g]=p.data[g+1]=p.data[g+2]=M,p.data[g+3]=255}}a.putImageData(o,0,0);let y={map:al(r,!0,t)};return c&&(y.normalMap=B_(c,n,s,t.normal,t)),h&&(h.getContext("2d").putImageData(f,0,0),y.roughnessMap=al(h,!1,t)),u&&(u.getContext("2d").putImageData(p,0,0),y.alphaMap=al(u,!1,t)),y.canvas=r,y}function rl(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function al(i,e,t={}){let n=new Wn(i);return n.colorSpace=e?kt:On,n.anisotropy=8,t.repeat&&(n.wrapS=n.wrapT=Ti),n.needsUpdate=!0,n}function B_(i,e,t,n,s){let r=rl(e,t),a=r.getContext("2d"),o=a.createImageData(e,t),l=o.data,c=!!s.repeat,h=(f,u)=>(c?(f=(f+e)%e,u=(u+t)%t):(f=f<0?0:f>=e?e-1:f,u=u<0?0:u>=t?t-1:u),i[u*e+f]);for(let f=0;f<t;f++)for(let u=0;u<e;u++){let p=(h(u+1,f)-h(u-1,f))*n,_=(h(u,f+1)-h(u,f-1))*n,y=-p,m=_,d=1,g=Math.hypot(y,m,d);y/=g,m/=g,d/=g;let M=(f*e+u)*4;l[M]=(y*.5+.5)*255,l[M+1]=(m*.5+.5)*255,l[M+2]=(d*.5+.5)*255,l[M+3]=255}return a.putImageData(o,0,0),al(r,!1,s)}function cd(i=3,e=1024){return un("batter"+i+e,()=>{let t=Et(i),n=Et(i+7),s=Et(i+13),r=Et(i+21),a=is(i+5),o=is(i+9),l=is(i+11),c=Qe("#ECCB8E"),h=Qe("#DEA556"),f=Qe("#C47E37"),u=Qe("#98531F"),p=Qe("#5E2C0F");return dn(e,(_,y,m)=>{let d=(_-.5)*2,g=(y-.5)*2,M=Math.hypot(d,g),v=Math.atan2(g,d),S=hn(.48+.6*Tt(s,d*1.5,g*1.5,4)+.22*Fe(.6,.98,M)),T=d*8.5+1.3*Tt(t,d*2.4,g*2.4,3),x=g*8.5+1.3*Tt(n,d*2.4+3,g*2.4,3),[b,P]=a(T,x),R=Fe(0,.24,P-b)*Fe(.3,.78,S+.22*r(d*6,g*6)),[N,L]=l(T*2.6,x*2.6),k=Fe(0,.26,L-N)*Fe(.4,.9,S),A=hn(.12+.38*S+.32*R+.14*k+.05*r(d*48,g*48)),B=A<.4?Ge(c,h,A/.4):A<.64?Ge(h,f,(A-.4)/.24):A<.84?Ge(f,u,(A-.64)/.2):Ge(u,p,(A-.84)/.16),[G]=o(d*26,g*26),O=(1-Fe(.035,.075,G))*Fe(.45,.85,S);B=Ge(B,Ge(B,p,.6),O*.6),m.c=B,m.h=.45*R+.22*k+.1*S-O*.35+.05*Tt(n,d*70,g*70,2),m.r=hn(.74-.22*A+.05*t(d*30,g*30));let re=.955+.03*Tt(t,Math.cos(v)*3,Math.sin(v)*3,3)+.012*n(v*14,1.3),[W]=o(d*14,g*14),H=(1-Fe(.05,.1,W))*Fe(.88,.95,M)*Fe(.55,.8,S);m.a=M<re&&H<.5?1:0},{normal:4,rough:!0,alpha:!0})})}function hd(i,e=4,t=1024){return un("waffle"+e+t,()=>{let n=Et(e),s=Et(e+3),r=Qe("#E6BE7A"),a=Qe("#CF9650"),o=Qe("#B5773A"),l=Qe("#80491D");return dn(t,(c,h,f)=>{let u=(c-.5)*2,p=(h-.5)*2,_=i(u,p),y=Tt(n,u*3,p*3,4)*.5+.5,m=_<.5?Ge(r,a,_/.5):Ge(a,o,(_-.5)/.5);m=Ge(m,l,Fe(.55,.95,y)*Fe(.7,1,_)*.7),m=Ge(m,Ge(m,Qe("#F3D79A"),.5),(1-Fe(.25,.6,y))*(1-_)*.5);let d=Math.hypot(u,p);m=Ge(m,l,Fe(.86,1,d)*.5),f.c=m,f.h=.3*Tt(s,u*36,p*36,3),f.r=hn(.62-.16*_+.08*s(u*20,p*20))},{normal:1.4,rough:!0})})}function ud(i=512){return un("sskin"+i,()=>{let e=Et(31),t=Et(32),n=Qe("#C8141E"),s=Qe("#8A0B12"),r=Qe("#E85A4F"),a=Qe("#E9C463");return dn(i,(o,l,c)=>{let u=l*14,p=Math.floor(u),_=p%2*.5,y=o*20+_,m=y-Math.floor(y)-.5,d=u-p-.5,g=Math.hypot(m*1.1,d*1.4),M=1-Fe(.12,.3,g),v=1-Fe(.06,.11,g),S=Ge(n,s,hn(.5+.5*Tt(e,o*8,l*8,4))*.7);S=Ge(S,r,Fe(.05,0,l)+Fe(.12,0,l)*.4),S=Ge(S,s,M*.5),S=Ge(S,a,v*(l>.06?1:0)),c.c=S,c.h=-M*.6+v*.5+.05*t(o*80,l*80),c.r=hn(.28+M*.2+v*.3)},{normal:4,rough:!0})})}function dd(i=512){return un("sface"+i,()=>{let e=Et(41),t=Et(43),n=Qe("#F2BFB2"),s=Qe("#E5746E"),r=Qe("#CF2F36"),a=Qe("#9C0E18"),o=Qe("#E3B85A");return dn(i,(l,c,h)=>{let f=(l-.5)*2,u=(c-.5)*2,p=Math.hypot(f*1.05,u*.82),_=Math.atan2(u,f),y=Math.hypot(f*3.2,(u+.08)*1.15),m=1-Fe(.12,.5,y),d=Math.pow(.5+.5*Math.sin(_*26+4*e(f*2.5,u*2.5)),3),g=Ge(r,s,(1-Fe(.2,.75,y))*.7);g=Ge(g,n,m*.9),g=Ge(g,Ge(g,n,.55),d*Fe(.25,.6,p)*(1-Fe(.72,.86,p))*.45),g=Ge(g,Ge(r,a,.5),.25*(Tt(t,f*5,u*5,3)*.5+.5)),g=Ge(g,a,Fe(.8,.95,p));let M=_*9,v=Math.hypot((M-Math.round(M))*.35,(p-.9)*6);g=Ge(g,o,(1-Fe(.05,.12,v))*.8),h.c=g,h.h=d*.25*Fe(.3,.8,p)+.12*Tt(e,f*14,u*14,3)-m*.05,h.r=.18+.12*m+.06*t(f*20,u*20)},{normal:3.5,rough:!0})})}function fd(i=256){return un("bface"+i,()=>{let e=Et(51),t=Qe("#F1DC9C"),n=Qe("#DDBF6E"),s=Qe("#6B4A22");return dn(i,(r,a,o)=>{let l=(r-.5)*2,c=(a-.5)*2,h=Math.hypot(l,c),f=Math.atan2(c,l),u=Ge(t,n,Fe(.75,.98,h)*.8);u=Ge(u,Qe("#F7E8B8"),(1-Fe(0,.35,h))*.4);let p=Math.cos(f*3)*.5+.5,_=(1-Fe(.04,.09,Math.abs(h-.16-.05*p)))*(h<.3?1:0),y=(1-Fe(.012,.03,Math.abs(h-.2)))*(Math.sin(f*18)>.6?1:0);u=Ge(u,Ge(u,s,.35),_*.6),u=Ge(u,s,y*.7),u=Ge(u,Ge(u,n,.5),(.5+.5*Math.sin(f*40+e(l*5,c*5)*4))*Fe(.3,.9,h)*.25),o.c=u,o.h=.15*Tt(e,l*10,c*10,3)-_*.1,o.r=.42},{normal:2,rough:!0})})}function zc(i,e=256){return un("berry"+i+e,()=>{let t=Et(i==="blue"?61:62),n=Qe(i==="blue"?"#2B3768":"#B4123A"),s=Qe(i==="blue"?"#141B3A":"#7A0A27"),r=Qe(i==="blue"?"#7C88B5":"#E0506E");return dn(e,(a,o,l)=>{let c=Tt(t,a*6,o*6,4)*.5+.5,h=Ge(n,s,c);if(i==="blue")h=Ge(h,r,Fe(.5,.9,Tt(t,a*12+3,o*12,3)*.5+.5)*.45);else{let f=Math.hypot(a*9%1-.5,o*7%1-.5);h=Ge(h,r,(1-Fe(.1,.45,f))*.35),l.h=1-Fe(.1,.5,f)}l.c=h,l.r=i==="blue"?.55:.3},{normal:3,rough:!0})})}function pd(i=1024){return un("wood"+i,()=>{let e=Et(71),t=Et(72),n=Qe("#6E4426"),s=Qe("#331B0C"),r=Qe("#573219"),a=dn(i,(l,c,h)=>{let f=(l-.5)*2,u=(c-.5)*2,p=u*11+1.6*Tt(e,f*.9,u*2.2,4)+.35*t(f*5,u*24),_=.5+.5*Math.sin(p*Math.PI),y=.5+.5*Math.sin((u*260+8*e(f*4,u*14))*Math.PI),m=Tt(t,f*2,u*6,3)*.5+.5,d=Ge(n,r,_*.35+m*.25);d=Ge(d,s,Fe(.9,1,_)*.18+y*.07);let g=Math.hypot(f,u);d=Ge(d,s,Fe(.88,1,g)*.45),h.c=d,h.h=_*.2+y*.2,h.r=.55+.12*_+.1*m},{normal:2,rough:!0}),o=a.canvas.getContext("2d");return o.save(),o.translate(i/2,i/2),o.rotate(-.42),o.font=`italic 700 ${i*.07}px Georgia, serif`,o.textAlign="center",o.fillStyle="rgba(60,30,12,.55)",o.fillText("Crepe Craft",0,-i*.36),o.restore(),a.map.needsUpdate=!0,a})}function kc(i="spinach",e=256){return un("leaf"+i+e,()=>{let t=Et(i==="basil"?81:82),n=Qe(i==="basil"?"#3E8E2C":"#1F4A1A"),s=Qe(i==="basil"?"#8CC46A":"#4E7A35"),r=Qe(i==="basil"?"#24561A":"#10260D");return dn(e,(a,o,l)=>{let c=(a-.5)*2,h=o,f=Math.sin(Math.PI*Math.pow(h,.8))*(i==="basil"?.62:.78)*(1+.05*t(h*9,1)),u=Math.abs(c)<f?1:0,p=1-Fe(.01,.05,Math.abs(c)),_=1-Fe(.01,.035,Math.abs(((Math.abs(c)*3-h*2.2)%.5+.5)%.5-.25)),y=Ge(n,r,hn(.5+.6*Tt(t,c*4,h*6,4))*.6);y=Ge(y,s,Math.max(p,_*.6)*.8),l.c=y,l.a=u,l.h=Math.max(p,_)*.5+.2*Tt(t,c*10,h*10,3),l.r=i==="basil"?.35:.45},{normal:3,rough:!0,alpha:!0})})}function md(i=256){return un("tomato"+i,()=>{let e=Et(91),t=Qe("#D3261C"),n=Qe("#E8714A"),s=Qe("#F2D58A"),r=Qe("#B3140F");return dn(i,(a,o,l)=>{let c=(a-.5)*2,h=(o-.5)*2,f=Math.hypot(c,h),u=Math.atan2(h,c),p=(u/(Math.PI*2)*5%1+1)%1,_=(1-Fe(.28,.42,Math.abs(p-.5)))*Fe(.25,.35,f)*(1-Fe(.72,.8,f)),y=Ge(t,n,_*.8),m=Math.sin(u*40)>.7&&Math.abs(f-.55)<.06?1:0;y=Ge(y,s,m*_),y=Ge(y,r,Fe(.9,.98,f)),l.c=y,l.h=_*-.3+m*.2,l.r=.2+.2*(1-_)},{normal:2,rough:!0})})}function gd(i=256){return un("grill"+i,()=>{let e=Et(101),t=Qe("#D9B07A"),n=Qe("#9A5E2A"),s=Qe("#3C2010");return dn(i,(r,a,o)=>{let l=Tt(e,r*6,a*6,4)*.5+.5,c=Ge(t,n,l*.8),h=1-Fe(.06,.14,Math.abs((r+a*.4)*5%1-.5));c=Ge(c,s,h*.8),o.c=c,o.h=-h*.3+.2*l,o.r=.5-h*.15},{normal:3,rough:!0})})}function _d(i=256){return un("mush"+i,()=>{let e=Et(111),t=Qe("#D8C6A4"),n=Qe("#7A5638"),s=Qe("#9C8466");return dn(i,(r,a,o)=>{let l=(r-.5)*2,c=(a-.5)*2,h=l*l/.9+Math.pow(Math.max(0,-c+.05),2)/.55<1&&c<.15,f=Math.abs(l)<.22+.05*c&&c>=.05&&c<.85,u=h||f?1:0,p=Ge(t,s,(1-Fe(0,.12,Math.abs(c-.12)))*.7),_=h?1-(l*l/.9+Math.pow(Math.max(0,-c+.05),2)/.55):1;p=Ge(p,n,(1-Fe(0,.12,_))*(c<.1?1:0)),p=Ge(p,Ge(p,n,.4),.3*(Tt(e,l*8,c*8,3)*.5+.5)),o.c=p,o.a=u,o.h=.2*Tt(e,l*12,c*12,3),o.r=.5},{normal:2,rough:!0,alpha:!0})})}function Jn(i,e,t,n=256,s=.9){return un("spk"+i+e+t+n,()=>{let r=Et(t),a=is(t+1),o=Qe(i),l=Qe(e);return dn(n,(c,h,f)=>{let u=Tt(r,c*5,h*5,4)*.5+.5,[p]=a(c*60,h*60),_=(1-Fe(.05,.12,p))*(r(c*9+7,h*9)>s-1?1:0),y=Ge(o,Ge(o,[255,255,255],.3),u*.4);y=Ge(y,l,_*.85),f.c=y,f.h=u*.6-_*.2,f.r=.5},{normal:2,rough:!0,repeat:!0})})}function xd(i=512){return un("cond"+i,()=>{let e=is(121),t=is(122),n=Et(123);return dn(i,(s,r,a)=>{let[o]=e(s*26,r*40),[l]=t(s*70,r*110),c=1-Fe(.18,.36,o),h=1-Fe(.1,.3,l);a.c=[255,255,255],a.h=c*.9+h*.25+.03*n(s*50,r*50),a.r=hn(.05+.25*h*(1-c))},{normal:6,rough:!0,repeat:!0})})}function vd(i,e=131,t=256,n={}){return un("liq"+JSON.stringify(i)+e+JSON.stringify(n),()=>{let s=Et(e),r=i.map(o=>[o[0],Qe(o[1])]),a=n.drip?Qe(n.drip):null;return dn(t,(o,l,c)=>{let h=1-l,f=hn(h+.04*Tt(s,o*6,h*3,3)),u=r[0][1];for(let p=1;p<r.length;p++){let _=Fe(r[p-1][0],r[p][0],f);u=Ge(u,r[p][1],_)}if(u=Ge(u,Ge(u,[255,255,255],.25),(Tt(s,o*10,h*14,4)*.5+.5)*(n.marble||.2)),a){let p=o*(n.drips||7)+.25*s(o*3,h*1.5),_=Math.abs(p%1-.5),y=.3+.5*(.5+.5*s(Math.floor(p)*3.1,2)),m=.035+.03*(.5+.5*s(Math.floor(p)*1.7,h*4)),d=1-y,g=Math.exp(-Math.pow((h-d)/.025,2))*.03,M=(1-Fe(m+g,m+g+.02,_))*Fe(d-.012,d+.004,h);u=Ge(u,a,M*.92)}c.c=u,c.r=.35},{h:t*2})})}var k_=`
float h13(vec3 p){ p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vn3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(mix(h13(i), h13(i + vec3(1,0,0)), f.x), mix(h13(i + vec3(0,1,0)), h13(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h13(i + vec3(0,0,1)), h13(i + vec3(1,0,1)), f.x), mix(h13(i + vec3(0,1,1)), h13(i + vec3(1,1,1)), f.x), f.y), f.z); }
`,ll={uDust:{value:0},uCook:{value:1},uTime:{value:0}};function ol(i,{scale:e=3,amount:t=null,batter:n=!1,uniform:s=null,cook:r=null}={}){let a=s||(t==null?ll.uDust:{value:t});return i.userData.dust=a,i.onBeforeCompile=o=>{o.uniforms.uDust=a,o.uniforms.uCook=r||ll.uCook,o.uniforms.uDustScale={value:e},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLPos = position;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLPos; uniform float uDust; uniform float uCook; uniform float uDustScale;
`+k_).replace("#include <map_fragment>",`#include <map_fragment>
`+(n?`
        float rr = length(vMapUv - .5) * 2.;
        float ck = smoothstep(0., 1., uCook * 1.5 - (1. - rr) * .55);
        vec3 rawC = vec3(.80, .62, .34);
        diffuseColor.rgb = mix(rawC, diffuseColor.rgb, ck);
        if (gl_FrontFacing) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.86, .66, .36), .42 * ck);
      `:"")).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
`+(n?"roughnessFactor = mix(.16, roughnessFactor, ck);":"")).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec3 upV = normalize((viewMatrix * vec4(0., 1., 0., 0.)).xyz);
          float facing = smoothstep(.2, .8, dot(normal, upV));
          float patchN = vn3(vLPos * uDustScale);
          float cover = uDust * (.3 + .7 * patchN);
          float fine = h13(floor(vLPos * uDustScale * 240.));
          float haze = vn3(vLPos * uDustScale * 22.) * patchN;
          float grain = smoothstep(1. - cover * .55, 1. - cover * .55 + .06, fine);
          float d = facing * clamp(grain * .55 + smoothstep(.25, .8, haze + cover * .25) * cover * .55, 0., .92);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.93, .92, .9), d);
          roughnessFactor = mix(roughnessFactor, .9, d);
        }`)},i.customProgramCacheKey=()=>"dust"+(n?"b":"")+e,i}var Hc=new Map,Je=(i,e)=>(Hc.has(i)||Hc.set(i,e()),Hc.get(i)),Ve={batter:(i=3,e=1024,t=null)=>Je("batter"+i+e+(t?t.id??(t.id=Math.random().toString(36).slice(2)):""),()=>{let n=cd(i,e),s=new Ye({map:n.map,normalMap:n.normalMap,normalScale:new ie(.9,.9),roughnessMap:n.roughnessMap,roughness:1,alphaMap:n.alphaMap,alphaTest:.5,side:Ft,sheen:.35,sheenRoughness:.6,sheenColor:new ge("#ffd9a0")});return ol(s,{scale:2.6,batter:!0,uniform:t,cook:t&&t.cook})}),waffle:i=>Je("waffle",()=>{let e=hd(i),t=Jn("#E8C27E","#B98444",141,256,.7),n=ol(new Ye({map:e.map,normalMap:e.normalMap,roughnessMap:e.roughnessMap,roughness:1,sheen:.3,sheenColor:new ge("#ffcf8a"),sheenRoughness:.5}),{scale:2.4}),s=new Zt({map:t.map,normalMap:t.normalMap,roughness:.85});t.map.repeat.set(3,1),t.normalMap.repeat.set(3,1);let r=new Ye({color:"#a8652c",roughness:.62,sheen:.3,sheenColor:new ge("#ffcf8a"),sheenRoughness:.5});return[n,s,r]}),nutella:()=>Je("nutella",()=>new Ye({color:"#3b1a0b",roughness:.3,clearcoat:.9,clearcoatRoughness:.12,sheen:.2})),chocolate:()=>Je("choc",()=>new Ye({color:"#2a1208",roughness:.26,clearcoat:1,clearcoatRoughness:.08})),caramel:()=>Je("caramel",()=>new Ye({color:"#b5621c",roughness:.18,clearcoat:1,clearcoatRoughness:.05,sheen:.3,sheenColor:new ge("#ffb060")})),cookiebutter:()=>Je("cbutter",()=>new Ye({color:"#a8642b",roughness:.35,clearcoat:.6,clearcoatRoughness:.2})),maple:()=>Je("maple",()=>new Ye({color:"#8c420b",roughness:.06,clearcoat:1,clearcoatRoughness:.03,sheen:.4,sheenColor:new ge("#ffae55")})),balsamic:()=>Je("balsamic",()=>new Ye({color:"#1a0805",roughness:.12,clearcoat:1,clearcoatRoughness:.05})),pesto:()=>Je("pesto",()=>new Ye({color:"#4d6a1c",roughness:.45,clearcoat:.5,clearcoatRoughness:.3})),cream:()=>Je("cream",()=>ol(new Ye({color:"#fbf6ec",roughness:.52,sheen:.7,sheenColor:new ge("#ffffff"),sheenRoughness:.45}),{scale:3,amount:0})),vanilla:()=>Je("vanilla",()=>{let i=Jn("#F4E7CB","#3d2a17",151,256,.82);return new Ye({map:i.map,normalMap:i.normalMap,normalScale:new ie(.5,.5),roughness:.6,sheen:.5,sheenColor:new ge("#fff3dc"),sheenRoughness:.5})}),strawberryIce:()=>Je("sice",()=>{let i=Jn("#EBA1A6","#C0303C",152,256,.75);return new Ye({map:i.map,normalMap:i.normalMap,normalScale:new ie(.5,.5),roughness:.6,sheen:.5,sheenColor:new ge("#ffd8dc")})}),sskin:()=>Je("sskin",()=>{let i=ud();return new Ye({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,clearcoat:.5,clearcoatRoughness:.25,sheen:.3,sheenColor:new ge("#ff6a6a")})}),sface:()=>Je("sface",()=>{let i=dd();return new Ye({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,clearcoat:.45,clearcoatRoughness:.28,sheen:.35,sheenColor:new ge("#ff8a80"),sheenRoughness:.5,emissive:new ge("#5a0408"),emissiveIntensity:.2})}),bface:()=>Je("bface",()=>{let i=fd();return new Ye({map:i.map,normalMap:i.normalMap,color:"#ddd2b8",roughness:.5,clearcoat:.3,clearcoatRoughness:.3,sheen:.25,sheenColor:new ge("#f2dfa8")})}),bside:()=>Je("bside",()=>new Ye({color:"#e6cc80",roughness:.45,sheen:.4,sheenColor:new ge("#fff0b0")})),blueberry:()=>Je("blue",()=>{let i=zc("blue");return new Ye({map:i.map,normalMap:i.normalMap,roughness:.5,sheen:.6,sheenColor:new ge("#9aa6d6")})}),raspberry:()=>Je("rasp",()=>{let i=zc("rasp");return new Ye({map:i.map,normalMap:i.normalMap,roughness:.3,clearcoat:.6,clearcoatRoughness:.2,sheen:.5,sheenColor:new ge("#ff7a9a")})}),marshmallow:()=>Je("mallow",()=>ol(new Ye({color:"#fbf8f2",roughness:.78,sheen:.8,sheenColor:new ge("#ffffff"),sheenRoughness:.6}),{scale:4,amount:.35})),graham:()=>Je("graham",()=>{let i=Jn("#C88B4E","#8A5426",161,256,.6);return new Zt({map:i.map,normalMap:i.normalMap,roughness:.85})}),oreo:()=>Je("oreo",()=>new Zt({color:"#1c1210",roughness:.7})),oreoCream:()=>Je("oreoc",()=>new Zt({color:"#f1ece4",roughness:.6})),biscoff:()=>Je("biscoff",()=>{let i=Jn("#B0692F","#7A4019",171,256,.6);return new Zt({map:i.map,normalMap:i.normalMap,roughness:.8})}),chip:()=>Je("chip",()=>new Ye({color:"#2b150a",roughness:.35,clearcoat:.5})),wood:()=>Je("wood",()=>{let i=pd();return new Ye({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,clearcoat:.15,clearcoatRoughness:.5})}),plate:()=>Je("plate",()=>new Ye({color:"#f4f1ec",roughness:.18,clearcoat:1,clearcoatRoughness:.05})),spinach:()=>Je("spinach",()=>{let i=kc("spinach");return new Ye({map:i.map,normalMap:i.normalMap,alphaMap:i.alphaMap,alphaTest:.5,side:Ft,roughness:.45,clearcoat:.4,clearcoatRoughness:.3})}),basil:()=>Je("basil",()=>{let i=kc("basil");return new Ye({map:i.map,normalMap:i.normalMap,alphaMap:i.alphaMap,alphaTest:.5,side:Ft,roughness:.35,clearcoat:.5,sheen:.3})}),tomato:()=>Je("tomato",()=>{let i=md();return new Ye({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,clearcoat:.9,clearcoatRoughness:.1})}),tomatoSkin:()=>Je("tskin",()=>new Ye({color:"#b5160f",roughness:.2,clearcoat:1})),mozzarella:()=>Je("mozz",()=>new Ye({color:"#f6f2e8",roughness:.4,sheen:.6,sheenColor:new ge("#ffffff"),clearcoat:.3})),feta:()=>Je("feta",()=>{let i=Jn("#F3F0E6","#DCD5C2",181,128,.7);return new Zt({map:i.map,normalMap:i.normalMap,roughness:.9})}),chicken:()=>Je("chicken",()=>{let i=gd();return new Ye({map:i.map,normalMap:i.normalMap,roughness:.55,clearcoat:.3,clearcoatRoughness:.4})}),chickenPesto:()=>Je("chickp",()=>{let i=Jn("#C99A5C","#3E6E1E",185,256,.55);return new Ye({map:i.map,normalMap:i.normalMap,roughness:.5,clearcoat:.45,clearcoatRoughness:.35})}),mushroom:()=>Je("mush",()=>{let i=_d();return new Zt({map:i.map,normalMap:i.normalMap,alphaMap:i.alphaMap,alphaTest:.5,side:Ft,roughness:.55})}),egg:()=>Je("egg",()=>{let i=Jn("#F4CF4A","#FBE9A0",191,128,.6);return new Ye({map:i.map,normalMap:i.normalMap,normalScale:new ie(1.4,1.4),roughness:.55,sheen:.5,sheenColor:new ge("#fff2a0")})}),cheese:()=>Je("cheese",()=>new Ye({color:"#F0A92C",roughness:.28,clearcoat:.7,clearcoatRoughness:.2,sheen:.4,sheenColor:new ge("#ffd27a")})),cheesecake:()=>Je("ckake",()=>{let i=Jn("#F3E2C0","#E8CFA0",195,128,.6);return new Ye({map:i.map,normalMap:i.normalMap,roughness:.7,sheen:.3})}),parmesan:()=>Je("parm",()=>new Zt({color:"#f1e6c4",roughness:.8})),glass:()=>Je("glass",()=>{let i=xd();return i.normalMap.repeat.set(3,4),i.roughnessMap.repeat.set(3,4),new Ye({color:"#ffffff",metalness:0,roughness:.06,transmission:1,thickness:.02,ior:1.46,normalMap:i.normalMap,normalScale:new ie(.35,.35),roughnessMap:i.roughnessMap,specularIntensity:1,side:Ft,transparent:!0,envMapIntensity:1.3})}),lid:()=>Je("lid",()=>new Ye({color:"#ffffff",metalness:0,roughness:.04,transmission:1,thickness:.01,ior:1.45,side:Ft,transparent:!0,envMapIntensity:1.4})),ice:()=>Je("ice",()=>new Ye({color:"#f4fbff",roughness:.08,transmission:.95,thickness:.15,ior:1.31,transparent:!0})),straw:(i="#f3efe6")=>Je("straw"+i,()=>new Ye({color:i,roughness:.35,clearcoat:.5,side:Ft})),pineapple:()=>Je("pine",()=>new Ye({color:"#f5c63c",roughness:.35,clearcoat:.6,sheen:.4,sheenColor:new ge("#fff0a0")})),rind:()=>Je("rind",()=>new Zt({color:"#8a7a2a",roughness:.7})),paper:i=>Je("paper"+i,()=>new Zt({color:i,roughness:.8,side:Ft})),pick:()=>Je("pick",()=>new Zt({color:"#d9b98a",roughness:.7})),liquid:(i,e={})=>Je("liq"+JSON.stringify(i)+JSON.stringify(e),()=>{let t=vd(i,131,256,e);return new Ye({map:t.map,roughness:e.rough??.38,sheen:.5,sheenColor:new ge("#ffffff"),sheenRoughness:.6,clearcoat:.2})}),flat:(i,e=.5)=>Je("flat"+i+e,()=>new Ye({color:i,roughness:e,sheen:.3}))};var H_=`
precision highp float;
uniform float uTime, uAspect, uZoom, uFlow;
uniform vec2 uRes, uGlowPos;
uniform vec3 uDeep, uMid, uRib, uCream, uSpec, uBokeh;
uniform float uGlow, uBokehAmt, uVig, uExpo, uRelief, uWarp, uDetail, uStyle;
varying vec2 vUv;

vec3 mod289(vec3 x){ return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(vec2 x){ return x - floor(x * (1. / 289.)) * 289.; }
vec3 permute(vec3 x){ return mod289(((x * 34.) + 1.) * x); }
float snoise(vec2 v){
  const vec4 C = vec4(.211324865405187, .366025403784439, -.577350269189626, .024390243902439);
  vec2 i = floor(v + dot(v, C.yy)); vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1., 0.) : vec2(0., 1.);
  vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));
  vec3 m = max(.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.); m = m * m; m = m * m;
  vec3 x = 2. * fract(p * C.www) - 1.; vec3 h = abs(x) - .5; vec3 ox = floor(x + .5); vec3 a0 = x - ox;
  m *= 1.79284291400159 - .85373472095314 * (a0 * a0 + h * h);
  vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130. * dot(m, g);
}
const mat2 R2 = mat2(1.6, 1.2, -1.2, 1.6);
float fbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 3; i++){ s += a * snoise(p); p = R2 * p; a *= .45; } return s; }

// domain-warped height: two layers of warp make the folded, ribbon-like flow of a thick sauce
float field(vec2 p, float t, out vec2 r){
  vec2 q = vec2(fbm(p + vec2(0., t * .05)), fbm(p + vec2(5.2, 1.3) - vec2(t * .04, 0.)));
  r = vec2(fbm(p + uWarp * q + vec2(1.7, 9.2) + t * .035), fbm(p + uWarp * q + vec2(8.3, 2.8) - t * .03));
  return fbm(p + uWarp * .85 * r);
}

void main(){
  vec2 uv = vUv;
  vec2 p = (uv - .5) * vec2(uAspect, 1.);
  float t = uTime * .06 * uFlow;
  // base: near-black espresso with a faint warm lift toward the middle
  vec3 c = uDeep * (.4 + .6 * smoothstep(1.1, 0., length(p * vec2(.6, 1.))));
  if (uStyle < .5) {
    // two slow ribbons of satin light drifting across the frame: soft body, one thin glossy edge
    for (int k = 0; k < 2; k++){
      float fk = float(k);
      float y0 = mix(-.22, .26, fk) + .14 * sin(p.x * (1.1 + .4 * fk) * 1.4 + t * (1. - .35 * fk) + fk * 2.1)
               + .06 * snoise(vec2(p.x * .7 + t * .5, fk * 4.3 + t * .2));
      float d = p.y - y0;
      float w = (.26 + .08 * fk) * (1. + .25 * sin(p.x * 2. - t * 1.3 + fk));
      float body = exp(-d * d / (w * w));
      float edge = exp(-pow((d - w * .55) / (w * .06), 2.));
      float fade = smoothstep(1.3, .1, abs(p.x));
      c += mix(uMid, uRib, .4 * fk) * body * uRelief * (1. - .45 * fk) * fade;
      c += uSpec * edge * uDetail * .12 * (1. - .5 * fk) * fade * (.5 + .5 * sin(p.x * 2.4 + t * 1.6 + fk * 5.));
    }
  } else {
    // the batter spiral: faint golden rings spun out from behind the subject, like a crepe spread on the griddle
    vec2 q = (uv - uGlowPos) * vec2(uAspect, 1.);
    float r = length(q), a = atan(q.y, q.x);
    float spiral = sin(r * 26. - a - uTime * .3);
    float ring = smoothstep(.93, 1., spiral) * smoothstep(1.25, .2, r) * smoothstep(.08, .3, r);
    float wobble = .6 + .4 * snoise(vec2(a * 1.5, r * 3. - uTime * .1));
    c += uMid * smoothstep(.85, 0., r) * uRelief * .7;
    c += uSpec * ring * wobble * uDetail * .07;
  }
  // glow behind the subject and a darker frame
  vec2 g = (uv - uGlowPos) * vec2(uAspect, 1.);
  c *= 1. + uGlow * exp(-dot(g, g) * 2.6);
  vec2 v = (uv - .5) * vec2(uAspect * .8, 1.);
  c *= 1. - uVig * smoothstep(.35, 1.05, length(v));
  // a few soft caf\xE9 lights, far away
  vec3 bk = vec3(0.);
  for (int i = 0; i < 6; i++){
    float fi = float(i);
    vec2 o = vec2(fract(sin(fi * 12.9898) * 43758.5), fract(sin(fi * 78.233) * 12345.6));
    vec2 cpos = vec2(o.x + .03 * sin(uTime * .15 + fi), fract(o.y + uTime * (.006 + .008 * fract(fi * .618))));
    float rad = .04 + .05 * fract(fi * .37);
    float ld = length((uv - cpos) * vec2(uAspect, 1.));
    bk += uBokeh * smoothstep(rad, rad * .6, ld) * sin(cpos.y * 3.14159) * (.3 + .7 * fract(fi * .73));
  }
  c += bk * uBokehAmt;
  gl_FragColor = vec4(c * uExpo, 1.);
}`,G_={caramel:{deep:"#1f0b04",mid:"#e08a2c",rib:"#3d1a0c",cream:"#f3d39a",spec:"#ffd9a0",bokeh:"#ffb45e"},chocolate:{deep:"#160805",mid:"#6b3418",rib:"#c27a2c",cream:"#e8b878",spec:"#ffd6a8",bokeh:"#ff9f4a"},butter:{deep:"#2c1a05",mid:"#b8862a",rib:"#5a3a10",cream:"#f6e2a8",spec:"#fff0c8",bokeh:"#ffd27a"},maple:{deep:"#2e1103",mid:"#b5601a",rib:"#5a2408",cream:"#f0c070",spec:"#ffdcae",bokeh:"#ffb04a"},berry:{deep:"#2a0512",mid:"#a01e44",rib:"#4a0a24",cream:"#f6c6d2",spec:"#ffe0e8",bokeh:"#ff8aa6"}};function yd(i,e={}){let t=e.scale??.26,n=new Nt(4,4,{type:Ot,depthBuffer:!1,magFilter:Yt,minFilter:Yt,generateMipmaps:!1}),s={uTime:{value:0},uAspect:{value:1.6},uZoom:{value:e.zoom??1},uFlow:{value:e.flow??1},uRes:{value:new ie(4,4)},uGlowPos:{value:new ie(.5,.55)},uGlow:{value:e.glow??.7},uBokehAmt:{value:e.bokeh??.05},uVig:{value:e.vig??.6},uExpo:{value:e.expo??1},uRelief:{value:e.relief??.2},uWarp:{value:e.warp??1},uDetail:{value:e.detail??1},uStyle:{value:e.style??0},uDeep:{value:new ge},uMid:{value:new ge},uRib:{value:new ge},uCream:{value:new ge},uSpec:{value:new ge},uBokeh:{value:new ge}},r=new Ut({uniforms:s,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:H_,depthTest:!1,depthWrite:!1}),a=new mt(new on(2,2),r);a.frustumCulled=!1;let o=new wi;o.add(a);let l=new Ji,c=["deep","mid","rib","cream","spec","bokeh"],h={deep:"uDeep",mid:"uMid",rib:"uRib",cream:"uCream",spec:"uSpec",bokeh:"uBokeh"},f={};function u(g,M){let v=typeof g=="string"?G_[g]:g;for(let S of c)f[S]=new ge(v[S]),M&&s[h[S]].value.copy(f[S])}u(e.palette||"caramel",!0);let p=0,_=0;function y(g,M){let v=Math.max(64,Math.round(g*t)),S=Math.max(64,Math.round(M*t));v===p&&S===_||(p=v,_=S,n.setSize(v,S),s.uRes.value.set(v,S),s.uAspect.value=g/M)}let m=0;function d(g,M,v){s.uTime.value=M;let S=1-Math.exp(-g*2.2);for(let x of c)f[x]&&s[h[x]].value.lerp(f[x],S);if(m+=g,!v&&m<1/31)return;m=0;let T=i.getRenderTarget();i.setRenderTarget(n),i.render(o,l),i.setRenderTarget(T)}return{texture:n.texture,uniforms:s,setPalette:u,resize:y,update:d}}var Md=i=>({uniforms:{tDiffuse:{value:null},uRes:{value:new ie(1,1)},uAmt:{value:0},uSharp:{value:.22},uDir:{value:i},uDim:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uRes, uDir; uniform float uAmt, uSharp, uDim; varying vec2 vUv;
    void main(){
      float b = uAmt * smoothstep(uSharp, uSharp + .2, abs(vUv.x - .5));
      if (b < .01) { gl_FragColor = texture2D(tDiffuse, vUv); return; }
      vec2 st = uDir / uRes * b * 2.2; vec4 acc = vec4(0.); float w = 0.;
      for (int i = -7; i <= 7; i++) { float fi = float(i); float k = exp(-fi * fi / 18.); acc += texture2D(tDiffuse, vUv + st * fi) * k; w += k; }
      gl_FragColor = acc / w; gl_FragColor.rgb *= 1. - uDim * b;
    }`}),V_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.35},uGrain:{value:.035},uFade:{value:0},uRes:{value:new ie(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uFade; uniform vec2 uRes; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = vUv - .5; q.x *= uRes.x / uRes.y * .75;
      c.rgb *= 1. - uVig * smoothstep(.25, .95, length(q));
      c.rgb += (h(vUv * uRes + fract(uTime) * 91.) - .5) * uGrain * (.4 + c.rgb);
      c.rgb *= 1. - uFade;
      gl_FragColor = c;
    }`};function W_(i){let e=new wi;e.add(new mt(new gn(24,14,24),new Ln({color:"#070403",side:$t})));let t=(n,s,r,a,o,l,c)=>{let h=new mt(new on(n,s),new Ln({color:new ge(r).multiplyScalar(a),side:Ft}));h.position.set(o,l,c),h.lookAt(0,0,0),e.add(h)};return t(7,3.5,"#fff4e8",5,1.5,6.5,3.5),t(1.6,7,"#ffe0bc",1.7,-7,2.5,-1),t(1.6,7,"#ffe0bc",2.2,7,2.5,-1.5),t(10,1.2,"#ffcf9e",1.4,0,1.2,-9),t(3,2,"#ffffff",1.2,-2,4,7),i.fromScene(e,.02).texture}function cl(i,e={}){let t=!!e.phone,n=new Qo({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.still}),s=window.devicePixelRatio||1,r={pr:e.fixedPR||Math.min(s,1.5),min:Math.min(s,.85),max:Math.min(s,t?1.75:2),fixed:!!e.fixedPR,acc:0,n:0,t:0,good:0,bloomOff:!1};n.setPixelRatio(r.pr),n.toneMapping=ji,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=Ki,n.setClearColor("#0c0705");let a=new wi,o=new nn(28,1,.1,120),l=new ks(n);a.environment=W_(l),a.environmentIntensity=1;let c={uGlow:{value:new ge("#c46a28")},uBase:{value:new ge("#0d0705")},uGlowAmt:{value:1},uGlowPos:{value:new ie(0,.12)}},h=new mt(new Zi(60,48,24),new Ut({uniforms:c,side:$t,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform vec3 uGlow, uBase; uniform float uGlowAmt; uniform vec2 uGlowPos; varying vec3 vD;
      void main(){
        vec2 p = vec2(atan(vD.x, -vD.z), vD.y);
        float g = exp(-pow(length((p - uGlowPos) * vec2(1.5, 2.3)), 2.) * 3.2);
        float floorF = smoothstep(.05, -.35, vD.y);
        vec3 c = uBase + uGlow * g * .34 * uGlowAmt;
        c = mix(c, uBase * .55, floorF);
        gl_FragColor = vec4(c, 1.);
      }`}));h.renderOrder=-10;let f=yd(n,{palette:e.palette||"caramel",zoom:e.zoom,bokeh:.05,style:e.bgStyle??1});a.background=f.texture,a.backgroundIntensity=1;let u=new hi("#ffeedd",95,0,.42,.9,2);u.position.set(3.2,6.2,4.2),u.castShadow=!0,u.shadow.mapSize.set(t?768:1024,t?768:1024),u.shadow.bias=-3e-4,u.shadow.normalBias=.02,u.shadow.camera.near=2,u.shadow.camera.far=16,u.shadow.radius=4,u.shadow.blurSamples=12,a.add(u,u.target);let p=new hi("#ffcf9a",70,0,.5,.8,2);p.position.set(-3.5,3.4,-4.6),a.add(p,p.target);let _=new hi("#ffcf9a",30,0,.55,.9,2);_.position.set(3.8,2.2,-4),a.add(_,_.target);let y=new Rr("#ffe8cf","#1b0e07",.45);a.add(y);let m=new vt,d=new Ye({color:"#0a0504",roughness:.35,metalness:0,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.8}),g=new ci([[0,-.42],[1.86,-.42],[1.9,-.38],[1.9,-.06],[1.86,-.012],[1.8,0],[0,0]].map(ue=>new ie(ue[0],ue[1])),128),M=new mt(g,d);M.receiveShadow=!0,m.add(M);let v=new Ln({color:new ge("#ffb15c").multiplyScalar(.9),toneMapped:!0}),S=new mt(new Er(1.885,.011,8,200),v);S.rotation.x=Math.PI/2,S.position.y=-.035,m.add(S);let T=document.createElement("canvas");T.width=T.height=256;let x=T.getContext("2d"),b=x.createRadialGradient(128,128,10,128,128,128);b.addColorStop(0,"rgba(0,0,0,.6)"),b.addColorStop(.55,"rgba(0,0,0,.25)"),b.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=b,x.fillRect(0,0,256,256);let P=new mt(new on(3.6,3.6),new Ln({map:new Wn(T),transparent:!0,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.y=.003,m.add(P),a.add(m);let R=new ie,N=new Nt(2,2,{type:Ot,samples:t?2:4}),L=new nl(n,N);L.addPass(new il(a,o));let k=new Ui(Md(new ie(1,0))),A=new Ui(Md(new ie(0,1)));A.uniforms.uDim.value=.45,L.addPass(k),L.addPass(A);let B=new Vs(new ie(256,256),.22,.5,.9);t||L.addPass(B);let G=new Ui(V_);L.addPass(G),L.addPass(new sl);let O={glow:new ge("#c46a28"),rim:new ge("#ffcf9a"),target:null,targetRim:null};function re(ue,Be,Ie){O.target=new ge(ue),O.targetRim=new ge(Be||ue),Ie&&(O.glow.copy(O.target),O.rim.copy(O.targetRim))}let W=0,H=0,z=new D;function j(){let ue=i.clientWidth||innerWidth,Be=i.clientHeight||innerHeight;return ue===W&&Be===H?!1:(W=ue,H=Be,n.setSize(ue,Be,!1),L.setSize(ue,Be),f.resize(ue,Be),n.getDrawingBufferSize(R),k.uniforms.uRes.value.copy(R),A.uniforms.uRes.value.copy(R),G.uniforms.uRes.value.copy(R),B.resolution.set(R.x/2,R.y/2),o.aspect=ue/Be,o.updateProjectionMatrix(),!0)}function de(ue){if(r.fixed||(r.acc+=ue,r.n++,r.t+=ue,r.t<1.1))return;let Be=r.acc/r.n;r.acc=r.n=r.t=0,Be>1/46?(r.good=0,r.pr>r.min+.01?(r.pr=Math.max(r.min,r.pr-.2),n.setPixelRatio(r.pr),W=0,j()):r.bloomOff||(r.bloomOff=!0,B.enabled=!1)):Be<1/57?++r.good>=4&&r.pr<r.max-.01&&(r.good=0,r.pr=Math.min(r.max,r.pr+.15),n.setPixelRatio(r.pr),W=0,j()):r.good=0}function V(ue,Be){f.setPalette(ue,Be)}let ee=new D;function ae(ue){ee.copy(ue).project(o),f.uniforms.uGlowPos.value.set(ee.x*.5+.5,ee.y*.5+.5)}function ve(ue,Be=.22){k.uniforms.uAmt.value=A.uniforms.uAmt.value=ue,k.uniforms.uSharp.value=A.uniforms.uSharp.value=Be,k.enabled=A.enabled=ue>.01}ve(0);function he(ue=1/60,Be=0){if(O.target){let Ie=1-Math.exp(-ue*3);O.glow.lerp(O.target,Ie),O.rim.lerp(O.targetRim,Ie),c.uGlow.value.copy(O.glow),p.color.copy(O.rim),_.color.copy(O.rim),v.color.copy(O.rim).multiplyScalar(.95)}o.getWorldDirection(z),c.uGlowPos.value.set(Math.atan2(z.x,-z.z),z.y+.1),G.uniforms.uTime.value=Be,ll.uTime.value=Be,f.update(ue,Be),L.render(ue),de(ue)}return{renderer:n,scene:a,camera:o,key:u,rim:p,rim2:_,fill:y,ped:m,pedMat:d,ring:S,shadow:P,bgU:c,composer:L,bloom:B,finish:G,backdrop:f,resize:j,render:he,setBlur:ve,setMood:re,setPalette:V,setGlowAt:ae,size:()=>[W,H],phone:t,Q:r}}var hl=class{constructor({R:e=1,seg:t=150,seed:n=3}={}){let s=new on(2*e,2*e,t,t);s.rotateX(-Math.PI/2),this.g=s,this.R=e;let r=s.attributes.position,a=r.count,o=Et(n+40);this.x0=new Float32Array(a),this.z0=new Float32Array(a),this.y0=new Float32Array(a);for(let l=0;l<a;l++){let c=r.getX(l),h=r.getZ(l),f=Math.hypot(c,h)/e,u=Math.atan2(h,c);this.x0[l]=c,this.z0[l]=h,this.y0[l]=e*(.004*Tt(o,c*1.5,h*1.5,3)+.007*Fe(.72,1,f)*o(Math.cos(u)*2.5+9,Math.sin(u)*2.5))}this.rho1=.016*e,this.gap2=.03*e,this.fold(0,0,0)}fold(e,t,n=0,s=1){let r=this.g.attributes.position,a=this.R,o=this.rho1,l=2*o+this.gap2;for(let c=0;c<r.count;c++){let h=this.x0[c]*s,f=this.z0[c]*s,u=this.y0[c],p=h,_=f;if(h>0&&e>0){let y=o-u,m=y*e;if(h<=m){let d=h/y;h=y*Math.sin(d),u=o-y*Math.cos(d)}else{let d=y*Math.sin(e),g=o-y*Math.cos(e),M=h-m;h=d+M*Math.cos(e),u=g+M*Math.sin(e)}}if(f>0&&t>0){let y=l-u,m=y*t;if(f<=m){let d=f/y;f=y*Math.sin(d),u=l-y*Math.cos(d)}else{let d=y*Math.sin(t),g=l-y*Math.cos(t),M=f-m;f=d+M*Math.cos(t),u=g+M*Math.sin(t)}}if(n>0){let y=p<0&&_<0?0:p>0&&_<0?1:p>0?2:3,m=Math.hypot(h,f)/a,d=Math.atan2(-f,-h)/(Math.PI/2),g=Math.pow(hn(Math.sin(Math.PI*hn(d))),.7)*Fe(.04,.35,m)*(1-.35*Fe(.6,1,m));u+=n*g*[0,.045,.09,.12][y]*a}r.setXYZ(c,h,u,f)}r.needsUpdate=!0,this.g.computeVertexNormals(),this.g.computeBoundingSphere(),this.g.computeBoundingBox()}};function Gc(i=.165,e=.2){return(t,n)=>{let s=Math.abs((t/i%1+1.5)%1-.5),r=Math.abs((n/i%1+1.5)%1-.5),a=Math.pow(Math.pow(s,6)+Math.pow(r,6),1/6),o=.5-e,l=Fe(o-.1,o+.03,a),c=Math.hypot(t,n);return Math.max(l,Fe(.86,.9,c))}}function Vc({R:i=1,T:e=.17,D:t=.075,t0:n=0,t1:s=Math.PI*2,res:r=160,segs:a=420,hf:o}={}){o=o||Gc();let l=[],c=[],h=[],f=e/2,u=i-f,p=Math.abs(s-n)>=Math.PI*2-1e-4,_=Math.max(8,Math.round(a*Math.abs(s-n)/(Math.PI*2))),y=Et(9),m=(z,j)=>e-t*(1-o(z/i,j/i))+.003*y(z*9,j*9),d=(z,j,de)=>(l.push(z,j,de),c.push(z/(2*i)+.5,.5-de/(2*i)),l.length/3-1),g=-u,M=u,v=-u,S=u;if(!p){let z=[0],j=[0];for(let de=0;de<=32;de++){let V=n+(s-n)*de/32;z.push(u*Math.cos(V)),j.push(u*Math.sin(V))}g=Math.min(...z),M=Math.max(...z),v=Math.min(...j),S=Math.max(...j)}let T=2*i/r,x=Math.max(2,Math.ceil((M-g)/T)),b=Math.max(2,Math.ceil((S-v)/T)),P=(n+s)/2,R=(s-n)/2,N=(z,j)=>{let de=Math.hypot(z,j);if(!p){let V=Math.atan2(j,z),ee=V-P;if(ee=Math.atan2(Math.sin(ee),Math.cos(ee)),Math.abs(ee)>R){let ae=P+Math.sign(ee)*R,ve=Math.cos(ae),he=Math.sin(ae),ue=Math.max(0,z*ve+j*he);z=ve*ue,j=he*ue,de=ue}}return de>u&&(z*=u/de,j*=u/de),[z,j]},L=[];for(let z=0;z<=b;z++){let j=[];for(let de=0;de<=x;de++){let[V,ee]=N(g+(M-g)*de/x,v+(S-v)*z/b);j.push(d(V,m(V,ee),ee))}L.push(j)}let k=z=>[l[z*3],l[z*3+2]],A=(z,j,de)=>{let V=k(z),ee=k(j),ae=k(de);return(ee[0]-V[0])*(ae[1]-V[1])-(ee[1]-V[1])*(ae[0]-V[0])};for(let z=0;z<b;z++)for(let j=0;j<x;j++){let de=L[z][j],V=L[z+1][j],ee=L[z+1][j+1],ae=L[z][j+1];Math.abs(A(de,V,ae))>1e-9&&h.push(de,V,ae),Math.abs(A(V,ee,ae))>1e-9&&h.push(V,ee,ae)}let B=h.length,G=10,O=null;for(let z=0;z<=G;z++){let j=Math.PI*z/G,de=u+f*Math.sin(j),V=f+f*Math.cos(j),ee=[];for(let ae=0;ae<=_;ae++){let ve=n+(s-n)*ae/_,he=d(de*Math.cos(ve),V,de*Math.sin(ve));ee.push(he)}if(O)for(let ae=0;ae<_;ae++)h.push(O[ae],O[ae+1],ee[ae],ee[ae],O[ae+1],ee[ae+1]);O=ee}let re=d(0,0,0);for(let z=0;z<_;z++)h.push(re,O[z],O[z+1]);let W=h.length;if(!p)for(let z of[n,s]){let j=Math.cos(z),de=Math.sin(z),V=[],ee=[],ae=Math.round(r*.7);for(let ve=0;ve<=ae;ve++){let he=u*ve/ae,ue=he*j,Be=he*de,Ie=d(ue,m(ue,Be),Be),Ue=d(ue,0,Be);c[Ie*2]=he/i,c[Ie*2+1]=m(ue,Be)/e,c[Ue*2]=he/i,c[Ue*2+1]=0,V.push(Ie),ee.push(Ue)}for(let ve=0;ve<ae;ve++)z===n?h.push(ee[ve],V[ve],ee[ve+1],V[ve],V[ve+1],ee[ve+1]):h.push(ee[ve],ee[ve+1],V[ve],V[ve],ee[ve+1],V[ve+1])}let H=new bt;return H.setAttribute("position",new $e(l,3)),H.setAttribute("uv",new $e(c,2)),H.setIndex(h),H.addGroup(0,B,0),H.addGroup(B,W-B,2),p||H.addGroup(W,h.length-W,1),H.computeVertexNormals(),H.userData={topY:m,R:i,T:e},H}function mi(i,e=64,t=0,n=Math.PI*2){return new ci(i.map(s=>new ie(s[0],s[1])),e,t,n)}function bd(i,e,t,n=.012){let s=[[0,.004],[i-.02,0],[i,.012]];for(let r=1;r<=24;r++){let a=r/24;s.push([i+(e-i)*a,.012+(t-.012)*a])}return s.push([e+n,t+n*.4],[e+n*.6,t+n*1.2],[e-.004,t+n*.6]),s}function Ed(i,e,t=.07){let n=[[i+.012,0],[i+.014,.02],[i*.99,.03]];for(let s=1;s<=20;s++){let r=s/20*Math.PI/2,a=i*Math.cos(r),o=.03+e*Math.sin(r);if(a<t)break;n.push([a,o])}return n.push([t,.03+e*.985],[t-.006,.03+e*.96]),n}function Jr(i=.5,e=.2){let t=[];for(let n=0;n<=24;n++){let s=n/24,r=e*Math.pow(Math.sin(Math.PI*.5*Math.pow(s,.75)),1.1)*(1-.25*Fe(.85,1,s));t.push([Math.max(.001,r),s*i])}return t.push([e*.5,i*1.02],[.001,i*1.03]),t}function gi(i=.3,e=5,t=.08,n=1,s=1,r={}){let a=new Sr(i,e),o=a.attributes.position,l=Et(n),c=new D;for(let h=0;h<o.count;h++){c.fromBufferAttribute(o,h);let f=c.clone().normalize(),u=1+t*Tt(l,f.x*2.2+f.z,f.y*2.2-f.z*.7,4);if(r.scoop){let p=Fe(-.15,-.45,f.y);u+=p*(.07+.05*Math.sin(Math.atan2(f.z,f.x)*9+3*l(f.x*3,f.z*3))),f.y<-.55&&(u*=.85+.15*Fe(-1,-.55,f.y))}c.copy(f).multiplyScalar(i*u),c.y*=s,r.flatBottom&&c.y<-i*r.flatBottom&&(c.y=-i*r.flatBottom),o.setXYZ(h,c.x,c.y,c.z)}return a.computeVertexNormals(),a}function Wc({R0:i=.3,H:e=.34,turns:t=2.4,s0:n=.11,ridges:s=8,seg:r=260,rad:a=18}={}){let o=[],l=[],c=[],h=m=>new D(i*Math.pow(1-m,.85)*Math.cos(m*t*Math.PI*2),e*Math.pow(m,1.05),i*Math.pow(1-m,.85)*Math.sin(m*t*Math.PI*2)),f=new D(0,1,0);for(let m=0;m<=r;m++){let d=m/r,g=h(d),M=h(Math.min(1,d+.002)).sub(h(Math.max(0,d-.002))).normalize(),v=new D().crossVectors(M,f).normalize(),S=new D().crossVectors(v,M).normalize(),T=(n*(1-.72*d)+.01)*Fe(0,.04,d+.02)*(1-Fe(.9,1,d)*.8);for(let x=0;x<=a;x++){let b=x/a*Math.PI*2,P=T*(1+.2*Math.cos(b*s)),R=g.clone().addScaledVector(v,Math.cos(b)*P).addScaledVector(S,Math.sin(b)*P*.9);o.push(R.x,R.y,R.z),c.push(x/a,d)}}for(let m=0;m<r;m++)for(let d=0;d<a;d++){let g=m*(a+1)+d,M=g+a+1;l.push(g,M,g+1,M,M+1,g+1)}let u=h(1);o.push(u.x,u.y+.035,u.z),c.push(.5,1);let p=o.length/3-1,_=r*(a+1);for(let m=0;m<a;m++)l.push(_+m,p,_+m+1);let y=new bt;return y.setAttribute("position",new $e(o,3)),y.setAttribute("uv",new $e(c,2)),y.setIndex(l),y.computeVertexNormals(),y}function Td(i=.12,e=2){return Wc({R0:i*.55,H:i*1.1,turns:1.6,s0:i*.55,ridges:8,seg:120,rad:16})}var Sd=new WeakMap;function X_(i){let e=i[0],t=i.length+":";for(let d of i){d.updateWorldMatrix(!0,!1);let g=d.matrixWorld.elements;t+=d.uuid+(d.geometry?d.geometry.attributes.position.version:0)+","+(g[0]+g[5]*3+g[10]*5+g[12]*7+g[13]*11+g[14]*13).toFixed(5)+";"}let n=Sd.get(e);if(n&&n.sig===t)return n;let s=[],r=new D,a=1/0,o=-1/0,l=1/0,c=-1/0,h=[];for(let d of i)d.traverse(g=>{g.isMesh&&g.geometry&&h.push(g)});for(let d of h){d.updateWorldMatrix(!0,!1);let g=d.geometry.attributes.position,M=d.geometry.index,v=g.count,S=new Float32Array(v*3);for(let T=0;T<v;T++)r.fromBufferAttribute(g,T).applyMatrix4(d.matrixWorld),S[T*3]=r.x,S[T*3+1]=r.y,S[T*3+2]=r.z,r.x<a&&(a=r.x),r.x>o&&(o=r.x),r.z<l&&(l=r.z),r.z>c&&(c=r.z);s.push({w:S,idx:M?M.array:null,count:M?M.count:v})}let f=224,u=.02;a-=u,l-=u,o+=u,c+=u;let p=(f-1)/(o-a),_=(f-1)/(c-l),y=new Float32Array(f*f).fill(-1/0);for(let{w:d,idx:g,count:M}of s)for(let v=0;v<M;v+=3){let S=(g?g[v]:v)*3,T=(g?g[v+1]:v+1)*3,x=(g?g[v+2]:v+2)*3,b=(d[S]-a)*p,P=(d[S+2]-l)*_,R=(d[T]-a)*p,N=(d[T+2]-l)*_,L=(d[x]-a)*p,k=(d[x+2]-l)*_,A=(N-k)*(b-L)+(L-R)*(P-k);if(Math.abs(A)<1e-9)continue;let B=Math.max(0,Math.ceil(Math.min(b,R,L))),G=Math.min(f-1,Math.floor(Math.max(b,R,L))),O=Math.max(0,Math.ceil(Math.min(P,N,k))),re=Math.min(f-1,Math.floor(Math.max(P,N,k)));for(let W=O;W<=re;W++)for(let H=B;H<=G;H++){let z=((N-k)*(H-L)+(L-R)*(W-k))/A,j=((k-P)*(H-L)+(b-L)*(W-k))/A,de=1-z-j;if(z<-1e-4||j<-1e-4||de<-1e-4)continue;let V=z*d[S+1]+j*d[T+1]+de*d[x+1],ee=W*f+H;V>y[ee]&&(y[ee]=V)}}let m={sig:t,grid:y,N:f,x0:a,z0:l,sx:p,sz:_};return Sd.set(e,m),m}function ul(i,e,t,n=0){let{grid:s,N:r,x0:a,z0:o,sx:l,sz:c}=X_(i),h=(e-a)*l,f=(t-o)*c;if(h<0||f<0||h>r-1||f>r-1)return n;let u=Math.min(r-2,Math.floor(h)),p=Math.min(r-2,Math.floor(f)),_=h-u,y=f-p,m=0,d=0,g=-1/0,M=[[u,p,(1-_)*(1-y)],[u+1,p,_*(1-y)],[u,p+1,(1-_)*y],[u+1,p+1,_*y]];for(let[v,S,T]of M){let x=s[S*r+v];x>-1/0&&(m+=x*T,d+=T,x>g&&(g=x))}return d<.25?g>-1/0&&d>0?m/d:n:m/d}function Xc(i,e,{radius:t=.012,lift:n=.42,floorY:s=0,samples:r=8,wobble:a=.25,seed:o=5}={}){let l=Et(o),c=[];for(let d=0;d<e.length-1;d++)for(let g=0;g<r;g++){let M=g/r,v=e[d][0]+(e[d+1][0]-e[d][0])*M,S=e[d][1]+(e[d+1][1]-e[d][1])*M;c.push([v,S])}c.push(e[e.length-1]);let h=c.map(([d,g])=>new D(d,ul(i,d,g,s)+t*n,g));for(let d=0;d<2;d++)for(let g=1;g<h.length-1;g++)h[g].y=Math.max(h[g].y,(h[g-1].y+h[g+1].y)/2-t*.3);let f=new Ci(h,!1,"centripetal"),u=Math.max(20,Math.min(600,h.length*3)),p=new $i(f,u,t,10,!1),_=p.attributes.position,y=p.attributes.normal,m=11;for(let d=0;d<=u;d++){let g=.65+.45*(.5+.5*l(d*.15,3.3)),M=f.getPointAt(d/u);for(let v=0;v<m;v++){let S=d*m+v;if(S>=_.count)break;let T=_.getX(S)-M.x,x=_.getY(S)-M.y,b=_.getZ(S)-M.z;_.setXYZ(S,M.x+T*g,M.y+x*g*.5,M.z+b*g)}}return p.computeVertexNormals(),p.userData.curve=f,p.userData.segs=u,p}function wd(i,e=8,t=0,n=1,s=220){let r=Fi(n),a=r()*6,o=[];for(let l=0;l<=s;l++){let c=l/s,h=(c-.5)*2*i*.82+.03*Math.sin(c*19+a),f=Math.sin(c*Math.PI*e+a),p=Math.sqrt(Math.max(0,i*i-h*h))*.86*Math.sign(f)*Math.pow(Math.abs(f),.55),_=Math.cos(t),y=Math.sin(t);o.push([h*_-p*y,h*y+p*_])}return o}var It=(i,e,t)=>new D(i,e,t);function ot(i,e,t=!0,n=!0){let s=new mt(i,e);return s.castShadow=t,s.receiveShadow=n,s}var qc=new Map,yt=(i,e)=>(qc.has(i)||qc.set(i,e()),qc.get(i)),Kr={strawberrySlice(i){let e=yt("sslice",()=>{let n=new Dn,s=Jr(.34,.15);n.moveTo(0,0),s.forEach(l=>n.lineTo(l[0],l[1]));for(let l=s.length-1;l>=0;l--)n.lineTo(-s[l][0],s[l][1]);let r=new li(n,{depth:.022,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:3,curveSegments:28});r.translate(0,-.17,-.011);let a=r.attributes.position,o=r.attributes.uv;for(let l=0;l<a.count;l++)o.setXY(l,a.getX(l)/.36+.5,a.getY(l)/.4+.5);return r}),t=new mt(e,[Ve.sface(),Ve.sskin()]);return t.castShadow=t.receiveShadow=!0,t.scale.setScalar(1.05+i()*.2),t},strawberryHalf(i){let e=yt("shalf",()=>mi(Jr(.36,.16),40,0,Math.PI)),t=yt("shalfFace",()=>{let a=new Dn,o=Jr(.36,.16);a.moveTo(0,0),o.forEach(f=>a.lineTo(f[0],f[1]));for(let f=o.length-1;f>=0;f--)a.lineTo(-o[f][0],o[f][1]);let l=new br(a,24),c=l.attributes.position,h=l.attributes.uv;for(let f=0;f<c.count;f++)h.setXY(f,c.getX(f)/.34+.5,(c.getY(f)-.18)/.38+.5);return l}),n=new vt;n.add(ot(e,Ve.sskin()));let s=ot(t,Ve.sface());s.rotation.y=-Math.PI/2,n.add(s),n.rotation.set(0,0,-Math.PI/2),n.position.x=-.18;let r=new vt;return r.add(n),r.scale.setScalar(.85+i()*.25),r},banana(i){let e=yt("banana",()=>new Tn(.13,.13,.055,40,1)),t=new mt(e,[Ve.bside(),Ve.bface(),Ve.bface()]);return t.castShadow=t.receiveShadow=!0,t.scale.set(1+i()*.1,1,1-i()*.12),t},blueberry(i){let e=yt("bb",()=>gi(.075,3,.04,7,.88)),t=ot(e,Ve.blueberry());return t.rotation.set(i()*6,i()*6,0),t},raspberry(i){let e=yt("rasp",()=>{let n=[],s=new Zi(.026,10,8);for(let r=0;r<42;r++){let a=r/42,o=.02+a*.13,l=.075*Math.sin(Math.PI*(.15+a*.8)),c=r*2.4,h=s.clone();h.translate(Math.cos(c)*l,o,Math.sin(c)*l),n.push(h)}return Y_(n)}),t=ot(e,Ve.raspberry());return t.rotation.set((i()-.5)*.6,i()*6,(i()-.5)*.6),t},marshmallow(i){let e=yt("mallow",()=>mi([[0,0],[.07,0],[.085,.012],[.09,.04],[.085,.085],[.07,.098],[0,.1]],28)),t=ot(e,Ve.marshmallow());return t.rotation.set((i()-.5)*1.2,i()*6,(i()-.5)*1.2),t.scale.setScalar(.85+i()*.3),t},graham(i){let e=yt("graham",()=>new gn(.2,.03,.14,4,1,3)),t=ot(e,Ve.graham());return t.rotation.set((i()-.5)*.5,i()*6,(i()-.5)*.5),t.scale.set(.6+i()*.6,1,.6+i()*.5),t},chip(i){let e=yt("chip",()=>mi([[0,0],[.03,0],[.022,.02],[.004,.045],[0,.05]],14)),t=ot(e,Ve.chip());return t.rotation.set((i()-.5)*.8,i()*6,(i()-.5)*.8),t},crumb(i,e="oreo"){let t=yt("crumb"+e+(i()*4|0),()=>gi(.045,1,.5,i()*100|0,.6)),n=e==="oreo"?i()<.22?Ve.oreoCream():Ve.oreo():Ve.biscoff(),s=ot(t,n);return s.rotation.set(i()*6,i()*6,i()*6),s.scale.setScalar(.6+i()*.9),s},scoop(i,e="vanilla"){let t=yt("scoop"+e,()=>gi(.3,6,.07,e==="vanilla"?3:4,.92,{scoop:!0,flatBottom:.62})),n=ot(t,e==="vanilla"?Ve.vanilla():Ve.strawberryIce());return n.rotation.y=i()*6,n},cream(i,e=1){let t=yt("rosette",()=>Td(.16)),n=ot(t,Ve.cream());return n.scale.setScalar(e*(.85+i()*.3)),n.rotation.y=i()*6,n},leaf(i,e="spinach"){let t=yt("leaf",()=>{let s=new on(.22,.34,6,8);s.translate(0,.17,0);let r=s.attributes.position;for(let a=0;a<r.count;a++){let o=r.getX(a),l=r.getY(a);r.setZ(a,-Math.abs(o)*.35+Math.sin(l*9)*.012+l*l*.25)}return s.computeVertexNormals(),s}),n=ot(t,e==="basil"?Ve.basil():Ve.spinach());return n.scale.setScalar(e==="basil"?.7+i()*.3:.9+i()*.4),n},tomato(i){let e=yt("tomato",()=>new Tn(.16,.16,.045,40)),t=new mt(e,[Ve.tomatoSkin(),Ve.tomato(),Ve.tomato()]);return t.castShadow=t.receiveShadow=!0,t.rotation.y=i()*6,t},mozzarella(i){let e=yt("mozz",()=>gi(.12,3,.12,11,.45)),t=ot(e,Ve.mozzarella());return t.scale.setScalar(.8+i()*.4),t},feta(i){let e=yt("feta"+(i()*3|0),()=>gi(.04,0,.35,i()*50|0,.8)),t=ot(e,Ve.feta());return t.rotation.set(i()*6,i()*6,i()*6),t.scale.setScalar(.7+i()*.8),t},chicken(i,e){let t=yt("chick",()=>{let s=new fr(.065,.36,6,14);s.rotateZ(Math.PI/2),s.scale(1,.62,1.15);let r=s.attributes.position;for(let a=0;a<r.count;a++)r.setY(a,r.getY(a)+.012*Math.sin(r.getX(a)*18));return s.computeVertexNormals(),s}),n=ot(t,e==="pesto"?Ve.chickenPesto():Ve.chicken());return n.rotation.y=i()*6,n.scale.setScalar(.9+i()*.25),n},cheese(i){let e=yt("cheeseMelt",()=>gi(.12,3,.25,21,.18)),t=ot(e,Ve.cheese());return t.scale.set(1.3,1,.8),t.rotation.y=i()*6,t},mushroom(i){let e=yt("mushp",()=>new on(.2,.2)),t=ot(e,Ve.mushroom());return t.rotation.x=-Math.PI/2+(i()-.5)*.4,t.rotation.z=i()*6,t},egg(i){let e=yt("egg"+(i()*3|0),()=>gi(.12,3,.42,i()*40|0,.5)),t=ot(e,Ve.egg());return t.rotation.y=i()*6,t.scale.setScalar(.85+i()*.35),t},cheesecake(i){let e=yt("cheese",()=>{let n=new gn(.13,.1,.11,3,3,3),s=n.attributes.position,r=new D;for(let a=0;a<s.count;a++)r.fromBufferAttribute(s,a),r.multiplyScalar(1-.1*(r.length()-.06)/.06),s.setXYZ(a,r.x,r.y,r.z);return n.computeVertexNormals(),n}),t=ot(e,Ve.cheesecake());return t.rotation.set((i()-.5)*.6,i()*6,(i()-.5)*.6),t.scale.setScalar(.8+i()*.4),t},parm(i){let e=yt("parm",()=>new gn(.03,.006,.012)),t=ot(e,Ve.parmesan(),!1);return t.rotation.set(i()*.3,i()*6,0),t}};function Y_(i){let e=[],t=[],n=[],s=0;for(let a of i){let o=a.attributes.position,l=a.attributes.normal;for(let c=0;c<o.count;c++)e.push(o.getX(c),o.getY(c),o.getZ(c)),t.push(l.getX(c),l.getY(c),l.getZ(c));if(a.index)for(let c=0;c<a.index.count;c++)n.push(a.index.getX(c)+s);else for(let c=0;c<o.count;c++)n.push(c+s);s+=o.count}let r=new bt;return r.setAttribute("position",new $e(e,3)),r.setAttribute("normal",new $e(t,3)),r.setIndex(n),r}var Zc={maple:()=>Ve.maple(),nutella:()=>Ve.nutella(),chocolate:()=>Ve.chocolate(),caramel:()=>Ve.caramel(),cookiebutter:()=>Ve.cookiebutter(),balsamic:()=>Ve.balsamic(),pesto:()=>Ve.pesto()};function Ad(i=1.38){let e=yt("board"+i,()=>{let t=mi([[0,0],[i-.03,0],[i,.025],[i,.065],[i-.03,.085],[0,.085]],96),n=t.attributes.position,s=t.attributes.uv;for(let r=0;r<n.count;r++)s.setXY(r,n.getX(r)/(2*i)+.5,.5-n.getZ(r)/(2*i));return t});return ot(e,Ve.wood(),!1,!0)}function $c(i,e={}){let t=Fi(i.seed||7),n=new vt,s=[],r=new vt;n.add(r);let a=e.board===!1?null:Ad();a&&r.add(a);let o=a?.085:0,l=1.5,c=new hl({R:l,seg:e.lite?100:170,seed:i.seed||3});c.fold(Math.PI,Math.PI,i.puff??.8);let h=e.dust||(i.sugar?{value:i.sugar}:null),f=ot(c.g,Ve.batter(i.batterSeed||3,e.lite?512:1024,h)),u=new vt;u.add(f),f.position.set(.62,o+.002,.62),u.rotation.y=i.turn??.78,r.add(u),s.push({obj:u,dir:It(0,-.1,0)}),u.updateMatrixWorld(!0);let p=(S,T)=>{let x=Math.PI+Math.PI/2*S,b=l*T;return It(Math.cos(x)*b+.62,0,Math.sin(x)*b+.62).applyAxisAngle(It(0,1,0),u.rotation.y)},_=(S,T)=>{let x=p(S,T);return x.y=ul([f],x.x,x.z,o),x};for(let S of i.peek||[]){let T=S.n||4;for(let x=0;x<T;x++){let b=.14+.72*(x+.2+t()*.6)/T,P=p(b,(S.t==="strawberrySlice"||S.t==="banana"?.86:.93)+t()*.05),R=Kr[S.t](t,S.kind),N=Math.PI+Math.PI/2*b+u.rotation.y,L=new vt;L.add(R),R.rotation.set(0,0,0),S.t==="strawberrySlice"?R.rotation.set(-Math.PI/2,0,Math.PI/2+(t()-.5)*.6):S.t==="banana"||S.t==="tomato"?R.rotation.set(0,0,0):S.t==="leaf"&&R.rotation.set(-Math.PI/2+.2,0,-Math.PI/2),L.position.set(P.x,o+(S.t==="chicken"||S.t==="egg"||S.t==="mushroom"||S.t==="feta"||S.t==="cheese"?.2:.11)+t()*.04,P.z),L.rotation.order="YZX",L.rotation.y=-N,L.rotation.z=.35+t()*.25,r.add(L),s.push({obj:L,dir:It(P.x,.5,P.z)})}}let y=p(.5,.2),m=p(.5,.9),d=m.clone().sub(y),g=Math.atan2(d.x,d.z);for(let S of i.top||[]){let T=S.n||4;for(let x=0;x<T;x++){let b=S.t==="strawberrySlice"||S.t==="banana",P=b?.5+(x%2?.1:-.1)+(t()-.5)*.08:.22+.56*t(),R=b?.24+.6*(x+.5)/T+(t()-.5)*.03:.3+.5*t(),N=_(P,R),L=Kr[S.t](t,S.kind);if(S.t==="strawberrySlice"){let k=new vt;L.rotation.set(-Math.PI/2,0,(t()-.5)*.5),k.add(L),k.rotation.order="YXZ",k.rotation.y=g+(t()-.5)*.5+(x%2?.35:-.35),k.rotation.x=-.55-t()*.2,k.position.copy(N),k.position.y+=.045+.012*x,r.add(k),s.push({obj:k,dir:It(N.x*.6,1+t()*.4,N.z*.6)});continue}L.position.copy(N),S.t==="banana"||S.t==="tomato"?(L.position.y+=.04,L.rotation.order="YXZ",L.rotation.set(-.5-t()*.2,g+(t()-.5)*.6,0)):S.t==="strawberryHalf"?L.rotation.y=t()*6:S.t==="leaf"?(L.rotation.set(-Math.PI/2+.3,t()*6,0),L.position.y+=.01):L.position.y+=.02,r.add(L),s.push({obj:L,dir:It(L.position.x*.6,1+t()*.4,L.position.z*.6)})}}let M=a?[f,a]:[f],v=[];(i.drizzle?[].concat(i.drizzle):[]).forEach((S,T)=>{let x=[],b=9+T*2,P=200,R=t()*6;for(let k=0;k<=P;k++){let A=k/P,B=Math.sin(A*Math.PI*b+R),G=.5+.43*Math.sign(B)*Math.pow(Math.abs(B),.55)+.03*Math.sin(A*23+T),O=.13+.8*A+.025*Math.sin(A*17+R),re=p(G,Math.min(.93,O));x.push([re.x,re.z])}let N=Xc(M,x,{radius:S==="balsamic"||S==="pesto"?.011:.015,floorY:o,seed:T+3,samples:1,lift:.25}),L=ot(N,Zc[S](),!0,!1);r.add(L),v.push(L),s.push({obj:L,dir:It(0,1.6,0)})});for(let S of i.side||[]){let T=Kr[S.t](t,S.kind);T.position.set(S.at[0],o+(S.t==="scoop"?.17:0),S.at[1]),r.add(T),s.push({obj:T,dir:It(S.at[0]*1.2,.8,S.at[1]*1.2)})}return n.userData={parts:s,crepe:f,cg:u,base:r,geo:c,drizzles:v,kind:"crepe",sugar:i.sugar??0,H:.9,sample:_,Y0:o,CR:l,dust:h},n}function Z_(i,e={}){let t=Fi(i.seed||11),n=new vt,s=[],r=new vt;n.add(r);let a=Ad();r.add(a);let o=.085,l=1.12,c=Gc(),h=Ve.waffle(c),f=new vt;r.add(f);let u=i.wedges??4,p=[];if(u===1){let d=yt("wfull"+(e.lite?1:0),()=>Vc({R:l,res:e.lite?120:190,segs:e.lite?240:420,hf:c})),g=ot(d,h);g.position.y=o,f.add(g),p.push(g)}else for(let d=0;d<u;d++){let g=d*Math.PI*2/u,M=g+Math.PI*2/u,v=yt("wedge"+u+d+(e.lite?1:0),()=>Vc({R:l,t0:g,t1:M,res:e.lite?120:190,segs:e.lite?240:420,hf:c})),S=ot(v,h),T=(g+M)/2;S.position.set(Math.cos(T)*.045,o,Math.sin(T)*.045),f.add(S),p.push(S)}f.rotation.y=i.turn??.4,s.push({obj:f,dir:It(0,-.1,0)}),f.updateMatrixWorld(!0);let _=p,y=(d,g)=>It(d,ul(_,d,g,o),g);for(let d of i.top||[]){let g=d.n||5;for(let M=0;M<g;M++){let v=t()*Math.PI*2,S=Math.sqrt(t())*(d.spread||.75),T=Math.cos(v)*S,x=Math.sin(v)*S,b=Kr[d.t](t,d.kind),P=y(T,x);b.position.copy(P),d.t==="strawberrySlice"?(b.rotation.order="YXZ",b.rotation.set(-Math.PI/2+.12+t()*.18,t()*6,0),b.position.y+=.03):d.t==="banana"?(b.position.y+=.03,b.rotation.set((t()-.5)*.4,0,(t()-.5)*.4)):d.t==="strawberryHalf"?b.rotation.y=t()*6:b.position.y+=.03,r.add(b),s.push({obj:b,dir:It(T*.6,1+t()*.5,x*.6)})}}let m=[];(i.drizzle?[].concat(i.drizzle):[]).forEach((d,g)=>{let M=wd(l*.92,9+g*2,.5+g*1.1,(i.seed||11)+g),v=Xc([..._,a],M,{radius:.015,floorY:o,seed:g+5,samples:1,lift:.3}),S=ot(v,Zc[d](),!0,!1);r.add(S),m.push(S),s.push({obj:S,dir:It(0,1.7,0)})});for(let d of i.side||[]){let g=Kr[d.t](t,d.kind),M=y(d.at[0],d.at[1]);g.position.set(d.at[0],M.y+(d.t==="scoop"?.16:0),d.at[1]),r.add(g),s.push({obj:g,dir:It(d.at[0],1,d.at[1])})}return n.userData={parts:s,drizzles:m,kind:"waffle",sugar:i.sugar??0,H:.8},n}var Yc=null;function Rd(i){Yc=i}function $_(i,e={}){let t=Fi(i.seed||21),n=new vt,s=[],r=.34,a=.5,o=1.5,l=m=>r+(a-r)*(m/o),c=i.fill??.86,h=mi([[0,.02],[r-.018,.02],...Array.from({length:12},(m,d)=>{let g=.02+(o*c-.02)*(d+1)/12;return[l(g)-.018,g]}),[0,o*c]],64);{let m=h.attributes.position,d=h.attributes.uv;for(let g=0;g<m.count;g++)d.setY(g,m.getY(g)/(o*c))}let f=Ve.liquid(i.liquid,{drip:i.drip,drips:7,marble:i.marble??.18}),u=ot(h,f,!0,!0);n.add(u),s.push({obj:u,dir:It(0,0,0)});let p=mi(bd(r,a,o),72),_=ot(p,Ve.glass(),!1,!1);_.renderOrder=2,n.add(_),s.push({obj:_,dir:It(0,0,0)});for(let m=0;m<(i.ice||0);m++){let d=yt("ice",()=>{let S=new gn(.2,.18,.2,3,3,3),T=S.attributes.position,x=new D;for(let b=0;b<T.count;b++){x.fromBufferAttribute(T,b);let P=x.length();x.multiplyScalar(1-.12*(P-.1)/.1),T.setXYZ(b,x.x,x.y,x.z)}return S.computeVertexNormals(),S}),g=ot(d,Ve.ice(),!1,!1),M=t()*6,v=.15+t()*.12;g.position.set(Math.cos(M)*v,o*c-.08-t()*.12,Math.sin(M)*v),g.rotation.set(t()*2,t()*6,t()*2),n.add(g)}if(i.sticker!==!1&&Yc){let m=o*.48,d=.5,g=new Tn(l(m+d/2)+.007,l(m-d/2)+.007,d,48,1,!0,-.55,1.1),M=new Ye({map:Yc,alphaTest:.4,roughness:.35,clearcoat:.6,side:Xn}),v=ot(g,M,!1,!1);v.position.y=m,v.renderOrder=4,n.add(v),s.push({obj:v,dir:It(0,0,.6)})}let y=o*c;if(i.heap){let m=gi(a*.92,5,.14,(i.seed||3)+2,.45,{flatBottom:.1}),d=ot(m,Ve.flat(i.heap,.55));d.position.y=o*c+.02,n.add(d),y=o*c+.2,s.push({obj:d,dir:It(0,.6,0)})}if(i.cream){let m=ot(yt("swirlBig",()=>Wc({R0:.34,H:.42,turns:2.6,s0:.13})),Ve.cream());if(m.position.y=o*c+(i.dome?.02:.04),m.rotation.y=t()*6,n.add(m),y=m.position.y+.45,s.push({obj:m,dir:It(0,1.1,0)}),i.creamDrizzle){let d=[];for(let v=0;v<=40;v++){let S=v/40,T=S*Math.PI*7,x=.3*(1-S*.8);d.push(new D(Math.cos(T)*x,m.position.y+.07+S*.34+.02*Math.sin(T*3),Math.sin(T)*x))}let g=new $i(new Ci(d),160,.014,8,!1),M=ot(g,Zc[i.creamDrizzle](),!1,!1);n.add(M),s.push({obj:M,dir:It(0,1.4,0)})}}if(i.dome){let m=mi(Ed(a,.42,.075),72),d=ot(m,Ve.lid(),!1,!1);d.position.y=o-.005,d.renderOrder=3,n.add(d),s.push({obj:d,dir:It(0,1.8,0)}),y=o+.45}if(i.straw){let m=yt("straw",()=>new Tn(.034,.034,1.9,20,1,!0)),d=ot(m,Ve.straw(i.straw),!0,!1);d.position.set(.08,o*.82,-.04),d.rotation.z=-.16,d.rotation.x=.05,n.add(d),s.push({obj:d,dir:It(.4,1.6,0)})}for(let m of i.garnish||[])if(m==="umbrella"){let d=new vt,g=ot(new As(.3,.12,12,1,!0),Ve.paper(i.umbrella||"#5fc9c4"));g.position.y=.62,d.add(g);let M=ot(new Tn(.008,.008,.7,6),Ve.pick());M.position.y=.3,d.add(M),d.position.set(.18,y-.05,.05),d.rotation.z=-.35,d.rotation.x=.15,n.add(d),s.push({obj:d,dir:It(.8,1.6,0)})}else if(m==="strawberry"){let d=new vt,g=ot(yt("swhole",()=>mi(Jr(.3,.14),32)),Ve.sskin());g.rotation.x=Math.PI,g.position.y=.3,d.add(g);let M=ot(new As(.12,.05,7,1,!0),Ve.paper("#3f7a2a"));M.position.y=.31,d.add(M),d.position.set(.12,y-.02,.1),d.rotation.z=-.3,n.add(d),s.push({obj:d,dir:It(.5,1.3,.3)})}else if(m==="pineapple"){let d=new Dn;d.moveTo(0,0),d.lineTo(.26,0),d.lineTo(.13,.2),d.closePath();let g=new li(d,{depth:.1,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:2}),M=ot(g,[Ve.pineapple(),Ve.rind()]);M.position.set(-.05,y-.08,.18),M.rotation.set(0,.4,-.2),n.add(M),s.push({obj:M,dir:It(-.4,1.2,.5)})}return n.userData={parts:s,kind:"drink",sugar:0,H:y},n}function Cd(i,e){return i.type==="crepe"?$c(i,e):i.type==="waffle"?Z_(i,e):$_(i,e)}var Ws={crepe:[{o:[1.299,.47,1.251,.411,1.19,.352,1.137,.309,1.084,.275,1.03,.249,1.003,.238,.948,.224,.898,.218,.947,.247,.992,.282,1.033,.325,1.071,.374,1.104,.431,1.132,.491,1.152,.55,1.165,.608,1.17,.666,1.168,.724,1.16,.773,1.143,.829,1.122,.872,1.102,.9,1.079,.925,1.054,.946,1.026,.962,.995,.975,.961,.984,.924,.989,.884,.991,.812,.984,.756,.969,.73,.958,.682,.931,.66,.914,.62,.873,.602,.85,.576,.897,.539,.946,.514,.968,.49,.982,.467,.988,.444,.986,.416,.975,.394,.955,.38,.926,.319,.703,.287,.558,.262,.416,.255,.364,.205,.312,.153,.269,.126,.25,.072,.221,.015,.201,-.013,.194,-.057,.189,-.097,.19,-.147,.199,-.182,.212,-.209,.232,-.228,.261,-.235,.284,-.242,.345,-.125,.408,-.051,.444,.029,.491,.053,.508,.086,.535,.114,.565,.144,.609,.158,.647,.165,.689,.164,.735,.154,.781,.134,.82,.106,.852,.081,.87,.054,.884,.006,.896,-.05,.898,-.111,.89,-.169,.874,-.224,.85,-.276,.818,-.324,.779,-.367,.734,-.393,.701,-.428,.646,-.458,.586,-.489,.497,-.509,.404,-.516,.336,-.517,.303,-.627,.171,-.656,.144,-.676,.132,-.697,.127,-.707,.131,-.715,.146,-.717,.158,-.709,.254,-.662,.531,-.652,.605,-.693,.684,-.719,.72,-.744,.744,-.767,.754,-.785,.753,-.817,.739,-.89,.693,-.928,.675,-.964,.664,-.994,.659,-1.048,.661,-1.053,.663,-1.082,.724,-1.112,.766,-1.145,.8,-1.184,.825,-1.197,.831,-1.224,.837,-1.251,.837,-1.277,.833,-1.3,.827,-1.319,.818,-1.336,.807,-1.35,.794,-1.361,.779,-1.369,.762,-1.375,.72,-1.372,.684,-1.362,.658,-1.355,.645,-1.334,.618,-1.307,.59,-1.272,.561,-1.289,.513,-1.309,.442,-1.325,.348,-1.329,.289,-1.36,.252,-1.395,.198,-1.446,.144,-1.502,.098,-1.531,.078,-1.592,.045,-1.655,.021,-1.72,.005,-1.754,.001,-1.807,-.001,-1.855,.004,-1.898,.017,-1.936,.037,-1.97,.065,-1.999,.101,-2.023,.144,-2.042,.194,-2.056,.252,-2.066,.317,-2.07,.367,-2.071,.417,-2.065,.516,-2.058,.565,-2.036,.663,-2.021,.712,-2.003,.761,-1.982,.81,-1.917,.794,-1.823,.78,-1.732,.777,-1.672,.781,-1.616,.79,-1.566,.803,-1.521,.822,-1.481,.845,-1.446,.874,-1.418,.905,-1.406,.922,-1.389,.956,-1.379,.993,-1.376,1.012,-1.377,1.051,-1.389,1.111,-1.401,1.142,-1.411,1.16,-1.428,1.181,-1.448,1.2,-1.47,1.216,-1.495,1.229,-1.523,1.24,-1.554,1.248,-1.587,1.253,-1.663,1.255,-1.747,1.245,-1.789,1.236,-1.83,1.224,-1.91,1.19,-1.948,1.168,-1.985,1.143,-2.057,1.084,-2.091,1.05,-2.133,1.075,-2.235,1.153,-2.254,1.161,-2.271,1.163,-2.285,1.16,-2.295,1.152,-2.303,1.135,-2.303,1.102,-2.294,1.074,-2.281,1.047,-2.263,1.016,-2.242,.985,-2.208,.946,-2.189,.927,-2.227,.865,-2.268,.781,-2.296,.71,-2.328,.602,-2.341,.547,-2.357,.437,-2.361,.326,-2.36,.271,-2.355,.214,-2.349,.17,-2.34,.128,-2.329,.088,-2.315,.05,-2.279,-.019,-2.233,-.078,-2.206,-.104,-2.176,-.128,-2.144,-.149,-2.11,-.168,-2.074,-.183,-2.035,-.196,-1.953,-.214,-1.862,-.22,-1.764,-.214,-1.682,-.202,-1.605,-.181,-1.534,-.153,-1.5,-.136,-1.437,-.097,-1.394,-.062,-1.368,-.038,-1.345,-.012,-1.316,.03,-1.304,-.056,-1.293,-.097,-1.276,-.138,-1.265,-.153,-1.244,-.167,-1.219,-.172,-1.179,-.167,-1.126,-.15,-1.095,-.13,-1.07,-.106,-1.058,-.089,-1.048,-.063,-1.046,-.045,-1.084,.206,-1.085,.273,-1.08,.33,-1.061,.478,-1.023,.479,-.946,.489,-.91,.501,-.894,.509,-.918,.434,-.936,.358,-.948,.242,-.947,.164,-.937,.085,-.915,.017,-.89,-.028,-.87,-.054,-.834,-.082,-.806,-.093,-.759,-.099,-.713,-.094,-.658,-.078,-.632,-.067,-.606,-.053,-.559,-.017,-.536,.004,-.514,.028,-.469,.092,-.447,.061,-.423,.035,-.397,.014,-.369,-.005,-.338,-.02,-.304,-.031,-.268,-.039,-.23,-.043,-.188,-.043,-.145,-.04,-.089,-.033,-.037,-.023,.013,-.01,.06,.006,.105,.024,.146,.046,.185,.07,.231,.106,.222,-.145,.224,-.238,.234,-.346,.25,-.397,.271,-.425,.35,-.486,.382,-.495,.404,-.495,.435,-.481,.459,-.45,.468,-.427,.512,.359,.531,.454,.591,.616,.62,.667,.647,.701,.678,.731,.731,.765,.762,.775,.791,.777,.818,.773,.848,.757,.873,.733,.891,.696,.896,.647,.897,.582,.885,.493,.869,.439,.846,.388,.832,.365,.799,.325,.78,.308,.759,.293,.713,.27,.66,.255,.631,.251,.623,.222,.622,.174,.628,.145,.639,.121,.647,.11,.667,.09,.679,.082,.707,.068,.761,.055,.809,.05,.896,.055,.996,.072,1.066,.09,1.105,.103,1.143,.119,1.178,.137,1.212,.158,1.244,.181,1.274,.206,1.303,.234,1.329,.264,1.353,.296,1.382,.253,1.406,.228,1.432,.206,1.46,.187,1.491,.173,1.525,.161,1.561,.154,1.6,.149,1.641,.149,1.684,.152,1.74,.159,1.792,.169,1.842,.182,1.889,.198,1.934,.217,1.975,.238,2.014,.262,2.05,.289,2.084,.319,2.137,.379,2.156,.407,2.179,.448,2.203,.516,2.212,.577,2.21,.62,2.204,.644,2.193,.657,2.184,.66,2.176,.66,2.164,.653,2.14,.626,2.086,.558,2.034,.504,1.982,.461,1.928,.427,1.901,.413,1.844,.393,1.786,.382,1.732,.382,1.682,.391,1.647,.404,1.628,.417,1.613,.433,1.601,.453,1.592,.49,1.587,.537,1.689,.593,1.792,.644,1.846,.676,1.894,.709,1.925,.737,1.943,.757,1.973,.801,1.987,.839,1.993,.866,1.993,.927,1.983,.973,1.964,1.012,1.935,1.044,1.923,1.054,1.897,1.07,1.851,1.085,1.817,1.09,1.779,1.09,1.739,1.086,1.699,1.078,1.623,1.051,1.553,1.01,1.521,.985,1.476,.942,1.436,.893,1.401,.838,1.363,.757,1.347,.713,1.324,.619,1.313,.528,1.313,.491],h:[[-1.757,.922,-1.843,.926,-1.904,.936,-1.865,.978,-1.824,1.012,-1.78,1.038,-1.733,1.055,-1.709,1.061,-1.666,1.066,-1.636,1.063,-1.613,1.053,-1.603,1.046,-1.59,1.027,-1.584,1,-1.586,.978,-1.598,.959,-1.607,.951,-1.633,.938,-1.669,.929,-1.713,.924],[1.586,.669,1.595,.753,1.602,.788,1.621,.846,1.633,.868,1.647,.886,1.662,.899,1.679,.907,1.698,.912,1.729,.911,1.743,.905,1.754,.894,1.762,.871,1.759,.839,1.756,.829,1.746,.809,1.732,.789],[-.243,.477,-.234,.561,-.227,.596,-.208,.654,-.196,.676,-.182,.693,-.167,.706,-.15,.715,-.12,.72,-.093,.716,-.08,.708,-.071,.695,-.067,.678,-.07,.647,-.073,.637,-.083,.617,-.106,.587]]}],craft:[{o:[1.903,-.892,1.948,-.893,2.001,-.889,2.077,-.879,2.209,-.849,2.224,-.84,2.227,-.835,2.171,-.3,2.331,-.283,2.346,-.267,2.356,-.233,2.361,-.185,2.361,-.135,2.352,-.048,2.343,-.003,2.331,.026,2.318,.036,1.634,-.035,1.621,-.045,1.609,-.073,1.603,-.105,1.6,-.141,1.604,-.233,1.621,-.315,1.637,-.347,1.648,-.355,1.824,-.337,1.88,-.871,1.883,-.88,1.895,-.89],h:[]},{o:[1.024,-.991,1.214,-.963,1.265,-.949,1.285,-.938,1.291,-.93,1.265,-.678,1.477,-.663,1.488,-.654,1.502,-.609,1.506,-.544,1.493,-.438,1.488,-.423,1.474,-.408,1.46,-.406,1.24,-.437,1.231,-.352,1.492,-.336,1.503,-.319,1.51,-.286,1.513,-.252,1.509,-.16,1.493,-.072,1.481,-.053,1.471,-.051,.961,-.105,.896,-.122,.874,-.137,.867,-.147,.863,-.157,.861,-.169,.946,-.97,.957,-.983,.986,-.991],h:[]},{o:[.131,-1.084,.202,-1.078,.294,-1.059,.31,-1.053,.322,-1.045,.338,-1.025,.342,-1.013,.341,-.929,.461,-.916,.478,-.996,.482,-1.005,.491,-1.014,.503,-1.02,.541,-1.029,.595,-1.032,.728,-1.022,.78,-1.013,.828,-.994,.844,-.983,.856,-.961,.856,-.956,.534,-.181,.52,-.17,.499,-.163,.454,-.16,.331,-.173,.155,-.21,.128,-.221,.117,-.232,-.014,-.887,-.036,-1.017,-.038,-1.043,-.026,-1.061,-.004,-1.071,.041,-1.081,.084,-1.084],h:[[.34,-.464,.368,-.461,.41,-.683,.343,-.69]]},{o:[-.841,-1.186,-.728,-1.174,-.611,-1.149,-.57,-1.132,-.565,-1.125,-.591,-.867,-.57,-.866,-.458,-1.121,-.448,-1.13,-.44,-1.134,-.419,-1.138,-.34,-1.135,-.279,-1.128,-.202,-1.115,-.144,-1.099,-.122,-1.09,-.106,-1.08,-.095,-1.069,-.089,-1.058,-.087,-1.047,-.096,-1.016,-.118,-.974,-.175,-.888,-.26,-.776,-.232,-.749,-.201,-.704,-.179,-.649,-.171,-.619,-.165,-.551,-.166,-.513,-.173,-.456,-.191,-.393,-.203,-.367,-.235,-.324,-.287,-.28,-.382,-.253,-.423,-.248,-.547,-.252,-.808,-.281,-.92,-.304,-.971,-.324,-.986,-.335,-.995,-.347,-.997,-.359,-.912,-1.162,-.906,-1.174,-.9,-1.179,-.883,-1.185],h:[[-.634,-.459,-.583,-.455,-.565,-.46,-.555,-.466,-.535,-.49,-.526,-.513,-.517,-.574,-.519,-.61,-.528,-.638,-.543,-.658,-.566,-.67,-.612,-.676]]},{o:[-1.442,-1.254,-1.371,-1.254,-1.247,-1.239,-1.147,-1.215,-1.109,-1.201,-1.065,-1.174,-1.046,-1.151,-1.035,-1.116,-1.035,-1.091,-1.046,-1.041,-1.081,-.954,-1.101,-.928,-1.115,-.918,-1.129,-.914,-1.151,-.918,-1.307,-.98,-1.339,-.987,-1.356,-.987,-1.38,-.979,-1.408,-.954,-1.427,-.924,-1.445,-.873,-1.458,-.791,-1.459,-.758,-1.455,-.714,-1.445,-.678,-1.423,-.64,-1.403,-.622,-1.38,-.612,-1.349,-.61,-1.167,-.63,-1.145,-.621,-1.132,-.609,-1.114,-.568,-1.1,-.468,-1.101,-.439,-1.106,-.414,-1.118,-.388,-1.154,-.358,-1.189,-.344,-1.238,-.336,-1.352,-.337,-1.452,-.348,-1.534,-.372,-1.595,-.4,-1.639,-.426,-1.693,-.469,-1.731,-.51,-1.755,-.547,-1.788,-.625,-1.798,-.661,-1.806,-.699,-1.811,-.76,-1.81,-.824,-1.804,-.88,-1.792,-.942,-1.776,-.998,-1.755,-1.049,-1.73,-1.095,-1.702,-1.133,-1.648,-1.182,-1.597,-1.214,-1.534,-1.239],h:[]}],border:[{o:[.023,-1.19,.076,-1.194,.222,-1.186,.333,-1.162,.371,-1.145,.4,-1.123,.422,-1.098,.442,-1.112,.472,-1.126,.532,-1.139,.598,-1.142,.745,-1.131,.833,-1.112,.902,-1.078,.946,-1.096,.986,-1.101,1.058,-1.099,1.266,-1.064,1.342,-1.032,1.367,-1.012,1.389,-.979,1.401,-.927,1.386,-.78,1.499,-.771,1.53,-.759,1.559,-.739,1.585,-.706,1.608,-.641,1.616,-.565,1.612,-.479,1.608,-.455,1.651,-.465,1.726,-.457,1.771,-.882,1.779,-.915,1.805,-.958,1.834,-.982,1.876,-.999,1.929,-1.004,2.016,-.998,2.099,-.987,2.252,-.95,2.278,-.937,2.302,-.918,2.318,-.898,2.325,-.884,2.336,-.824,2.291,-.398,2.353,-.391,2.384,-.379,2.417,-.355,2.438,-.328,2.462,-.265,2.471,-.194,2.471,-.127,2.46,-.026,2.45,.024,2.438,.057,2.409,.104,2.383,.126,2.367,.134,2.318,.146,1.962,.11,1.984,.119,2.033,.144,2.072,.168,2.123,.207,2.165,.245,2.227,.315,2.252,.352,2.28,.405,2.31,.491,2.322,.568,2.315,.656,2.31,.674,2.295,.706,2.283,.723,2.259,.745,2.238,.757,2.206,.768,2.176,.77,2.127,.758,2.098,.741,2.065,.709,2.007,.635,1.941,.568,1.877,.525,1.84,.507,1.798,.496,1.764,.491,1.736,.493,1.847,.548,1.907,.584,1.968,.627,2.007,.663,2.032,.692,2.066,.742,2.094,.814,2.103,.859,2.103,.934,2.089,1.001,2.066,1.055,2.049,1.082,2.005,1.129,1.981,1.148,1.955,1.164,1.916,1.181,1.847,1.197,1.817,1.2,1.768,1.199,1.695,1.19,1.62,1.169,1.549,1.137,1.487,1.098,1.446,1.065,1.398,1.02,1.344,.954,1.306,.893,1.265,.807,1.236,.889,1.212,.936,1.183,.974,1.15,1.009,1.109,1.042,1.069,1.063,1.023,1.081,.976,1.093,.929,1.099,.876,1.101,.786,1.091,.713,1.07,.678,1.055,.619,1.021,.575,1.06,.525,1.086,.487,1.096,.458,1.098,.435,1.096,.383,1.081,.342,1.057,.316,1.033,.298,1.008,.274,.957,.244,.849,.215,.896,.176,.937,.152,.956,.087,.989,.012,1.006,-.061,1.007,-.127,.999,-.207,.977,-.251,.96,-.302,.932,-.38,.876,-.402,.857,-.467,.785,-.485,.762,-.523,.701,-.551,.645,-.552,.652,-.603,.747,-.638,.795,-.674,.829,-.718,.853,-.757,.864,-.768,.865,-.812,.86,-.824,.857,-.854,.844,-.945,.789,-.969,.777,-.983,.773,-1.018,.825,-1.078,.887,-1.138,.925,-1.187,.942,-1.224,.947,-1.277,.945,-1.267,.995,-1.268,1.068,-1.286,1.149,-1.305,1.195,-1.326,1.229,-1.352,1.261,-1.383,1.289,-1.419,1.314,-1.496,1.347,-1.538,1.357,-1.581,1.363,-1.673,1.365,-1.77,1.353,-1.82,1.342,-1.861,1.33,-1.965,1.285,-2.01,1.259,-2.053,1.23,-2.101,1.191,-2.174,1.245,-2.219,1.265,-2.248,1.272,-2.293,1.271,-2.32,1.264,-2.347,1.251,-2.373,1.23,-2.392,1.204,-2.407,1.17,-2.413,1.141,-2.412,1.084,-2.395,1.029,-2.36,.963,-2.326,.914,-2.371,.821,-2.401,.743,-2.435,.627,-2.45,.565,-2.467,.443,-2.471,.324,-2.47,.261,-2.457,.147,-2.432,.05,-2.414,.002,-2.368,-.084,-2.318,-.148,-2.275,-.19,-2.236,-.22,-2.198,-.245,-2.152,-.27,-2.062,-.303,-1.963,-.324,-1.857,-.33,-1.751,-.323,-1.658,-.309,-1.704,-.337,-1.767,-.387,-1.823,-.449,-1.849,-.489,-1.886,-.571,-1.906,-.638,-1.915,-.688,-1.921,-.755,-1.92,-.834,-1.912,-.901,-1.898,-.971,-1.879,-1.036,-1.853,-1.098,-1.838,-1.129,-1.789,-1.201,-1.75,-1.241,-1.709,-1.274,-1.646,-1.312,-1.62,-1.325,-1.561,-1.346,-1.496,-1.358,-1.428,-1.365,-1.225,-1.347,-1.082,-1.309,-1.001,-1.264,-.985,-1.248,-.98,-1.253,-.981,-1.254,-.964,-1.268,-.963,-1.266,-.944,-1.276,-.945,-1.278,-.915,-1.289,-.886,-1.295,-.82,-1.295,-.676,-1.277,-.558,-1.247,-.513,-1.226,-.508,-1.222,-.489,-1.232,-.462,-1.242,-.437,-1.247,-.324,-1.244,-.175,-1.222,-.102,-1.201,-.08,-1.192,-.047,-1.172,-.001,-1.186],h:[[-1.517,.227,-1.518,.228,-1.546,.204,-1.545,.203,-1.592,.17,-1.642,.143,-1.685,.127,-1.743,.113,-1.807,.109,-1.832,.112,-1.857,.119,-1.872,.127,-1.891,.142,-1.906,.161,-1.922,.189,-1.936,.224,-1.947,.269,-1.957,.334,-1.961,.419,-1.955,.504,-1.95,.543,-1.929,.636,-1.915,.682,-1.83,.67,-1.725,.667,-1.656,.672,-1.59,.683,-1.526,.701,-1.485,.717,-1.481,.666,-1.468,.625,-1.452,.593,-1.412,.54,-1.4,.528,-1.422,.437,-1.435,.353,-1.436,.334,-1.502,.243],[.72,.618,.75,.647,.783,.667,.787,.611,.787,.582,.778,.516,.766,.477,.747,.436,.716,.398,.701,.387,.672,.372,.624,.361,.643,.442,.693,.575],[-.092,.301,.004,.348,.087,.397,.123,.423,.157,.451,.15,.413,.112,.376,.064,.341,.011,.315,-.037,.302,-.076,.299],[1.352,.129,1.398,.096,1.454,.069,1.494,.055,1.471,.059,1.215,.033,1.236,.043,1.314,.096],[1.543,.033,1.52,.05,1.555,.044],[.785,-.494,.63,-.126,.606,-.097,.596,-.09,.601,.002,.618,-.01,.68,-.039,.775,-.058,.795,-.06,.773,-.09,.761,-.116,.752,-.151,.754,-.193],[-.11,-.308,-.157,-.246,-.202,-.204,-.259,-.173,-.385,-.141,-.423,-.138,-.54,-.142,-.485,-.098,-.461,-.076,-.417,-.104,-.372,-.125,-.328,-.138,-.28,-.148,-.23,-.153,-.18,-.153,-.068,-.141,-.009,-.129,.048,-.114,.113,-.091,.113,-.109,.085,-.12,.054,-.139,.041,-.151,.025,-.171,.008,-.216,.004,-.244,-.055,-.526,-.066,-.431,-.09,-.35],[-1.105,-.26,-1.056,-.237,-1.022,-.212,-.987,-.178,-.957,-.134,-.953,-.125,-.94,-.139,-.895,-.174,-.88,-.182,-.972,-.205,-1.037,-.236,-1.058,-.251,-1.079,-.275],[-1.346,-.227,-1.459,-.238,-1.408,-.209,-1.374,-.187,-1.355,-.217],[-1.343,-.721,-1.167,-.74,-1.132,-.735,-1.09,-.717,-1.071,-.703,-1.058,-.825,-1.085,-.812,-1.099,-.808,-1.137,-.804,-1.167,-.808,-1.33,-.871,-1.34,-.836,-1.348,-.791,-1.348,-.744],[-.107,-.794,-.118,-.78,-.098,-.744]]}],w:4.942,h:2.73};function Pd(i){return i.map(e=>{let t=[];for(let s=0;s<e.o.length;s+=2)t.push(new ie(e.o[s],e.o[s+1]));let n=new Dn(t);for(let s of e.h){let r=[];for(let a=0;a<s.length;a+=2)r.push(new ie(s[a],s[a+1]));n.holes.push(new qi(r))}return n})}function Id(i={}){let e=new vt,t=i.lite?2:4,n=new Ye({color:"#4b2416",roughness:.26,clearcoat:1,clearcoatRoughness:.12,sheen:.4,sheenColor:new ge("#a8603a"),sheenRoughness:.4}),s=new Ye({color:"#f3e4c8",roughness:.5,clearcoat:.35,clearcoatRoughness:.4,sheen:.6,sheenColor:new ge("#fff2dc")}),r=new li(Pd([...Ws.crepe,...Ws.craft]),{depth:.16,bevelEnabled:!0,bevelThickness:.05,bevelSize:.028,bevelSegments:t,curveSegments:t}),a=new li(Pd(Ws.border),{depth:.14,bevelEnabled:!0,bevelThickness:.035,bevelSize:.03,bevelSegments:t,curveSegments:t}),o=new mt(r,n),l=new mt(a,s);return o.position.z=.02,l.position.z=-.16,o.castShadow=l.castShadow=!0,o.receiveShadow=l.receiveShadow=!0,e.add(l,o),e.userData={face:o,border:l,w:Ws.w,h:Ws.h,mats:{choc:n,cream:s}},e}var fn=i=>i<0?0:i>1?1:i,yn=(i,e,t)=>i+(e-i)*t,Kn=(i,e,t)=>fn((i-e)/(t-e)),Bn={inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,out:i=>1-Math.pow(1-i,3),in:i=>i*i*i,outBack:(i,e=1.70158)=>1+(e+1)*Math.pow(i-1,3)+e*Math.pow(i-1,2),outExpo:i=>i>=1?1:1-Math.pow(2,-10*i),smooth:i=>i*i*(3-2*i)};var Xs=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-n*t));var lt={fade:[0,.35],fall:[.15,.82],settle:[.82,1.25],drizzle:[1.2,2.05],fruit:[1.95,2.95],sugar:[2.8,3.55],logoFall:[3.3,3.68],logoSettle:[3.68,4.3],ui:4.15,end:4.6};function J_(i=.5){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(i,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Wn(e);return s.colorSpace=kt,s}function K_(){let e=document.createElement("canvas");e.width=e.height=512;let t=e.getContext("2d");t.fillStyle="#181412",t.fillRect(0,0,512,512);for(let s=0;s<1800;s++){let r=Math.random()*1.1+.25;t.fillStyle=`rgba(${200+Math.random()*40},${180+Math.random()*40},${150+Math.random()*40},${.05+Math.random()*.14})`,t.beginPath(),t.arc(Math.random()*512,Math.random()*512,r,0,6.283),t.fill()}for(let s=0;s<900;s++)t.fillStyle=`rgba(0,0,0,${Math.random()*.25})`,t.fillRect(Math.random()*512,Math.random()*512,2,2);let n=new Wn(e);return n.colorSpace=kt,n.wrapS=n.wrapT=Ti,n.anisotropy=4,n}function Ld(i,e,t={}){let n=!!t.phone,s=!!t.reduce,r=cl(i,{phone:n,palette:"caramel",fixedPR:t.fixedPR}),{scene:a,camera:o}=r;r.ped.visible=!1,r.setBlur(0),r.setMood("#c2652a","#ffc58e",!0),r.key.position.set(3.4,7.2,5.2),r.key.angle=.5,r.key.intensity=120,r.rim.position.set(-4.5,4.2,-5.5),r.rim.intensity=90,r.rim2.position.set(4.6,3,-4.5),r.rim2.intensity=45,r.finish.uniforms.uVig.value=.42;let l=new hi("#fff0dc",160,0,.6,.9,2);l.position.set(-2.5,6,7),a.add(l,l.target);let c=[[0,-.12],[1.15,-.12],[1.45,-.1],[1.7,-.045],[1.86,.04],[1.95,.105],[1.99,.115],[2,.1],[1.97,.08],[1.84,.02],[1.5,-.012],[0,-.012]],h=new ci(c.map(J=>new ie(J[0],J[1])),n?96:160);{let J=h.attributes.position,Pe=h.attributes.uv;for(let ce=0;ce<J.count;ce++)Pe.setXY(ce,J.getX(ce)/4+.5,J.getZ(ce)/4+.5)}let f=new Ye({map:K_(),color:"#ffffff",roughness:.42,clearcoat:.9,clearcoatRoughness:.12}),u=new mt(h,f);u.receiveShadow=!0,u.castShadow=!0;let p=new vt;p.add(u),p.scale.setScalar(.82),a.add(p);let _={value:0,cook:{value:1}},m=$c({type:"crepe",seed:11,turn:.78,drizzle:["nutella"],sugar:.5,top:[{t:"strawberrySlice",n:4},{t:"banana",n:4},{t:"strawberryHalf",n:2}]},{board:!1,lite:n,dust:_}),d=m.userData;a.add(m);let g=d.parts.filter(J=>J.obj!==d.cg&&!d.drizzles.includes(J.obj)),M=(()=>{let J=7;return()=>(J=J*16807%2147483647)/2147483647})(),v=g.map((J,Pe)=>({obj:J.obj,p0:J.obj.position.clone(),q0:J.obj.quaternion.clone(),from:J.obj.position.clone().add(new D((M()-.5)*.6,4.6+M()*1.4,(M()-.5)*.6)),qFrom:J.obj.quaternion.clone().multiply(new En().setFromEuler(new In((M()-.5)*5,(M()-.5)*5,(M()-.5)*5))),t0:lt.fruit[0]+(lt.fruit[1]-lt.fruit[0]-.62)*(Pe/Math.max(1,g.length-1))+M()*.06})),S=d.drizzles.map(J=>({m:J,total:J.geometry.index.count,ring:10*6,curve:J.geometry.userData.curve})),T=new Tn(.016,.02,1,10,1,!0);T.translate(0,.5,0);let x=new mt(T,S[0]?S[0].m.material:new Zt);x.visible=!1,a.add(x);let b=s?0:n?260:560,P=new Float32Array(b*3),R=[],N=[],L=[];for(let J=0;J<b;J++){let Pe=.04+.92*Math.random(),ce=.08+.88*Math.sqrt(Math.random()),Xe=d.sample(Pe,ce);N.push(new D(Xe.x,Xe.y+.01,Xe.z)),R.push(new D(Xe.x*.55+(Math.random()-.5)*.5,2.6+Math.random()*1.6,Xe.z*.55+(Math.random()-.5)*.5)),L.push(lt.sugar[0]+Math.random()*(lt.sugar[1]-lt.sugar[0]-.45))}let k=new bt;k.setAttribute("position",new bn(P,3));let A=new ws({size:n?.034:.026,map:J_(.55),transparent:!0,opacity:0,depthWrite:!1,color:"#fbf7f0"}),B=new cr(k,A);B.frustumCulled=!1,m.add(B);let G=Id({lite:n});a.add(G);let O={y:0,z:-2.4,s:1.15},re=1.5,W=t.yaw??-.75,H=1.4,z=new D,j=new D,de=new D,V=new D,ee={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",J=>{J.pointerType==="mouse"&&(ee.x=J.clientX/innerWidth-.5,ee.y=J.clientY/innerHeight-.5)},{passive:!0});let ae=s?lt.end:0,ve=!1,he=!1,ue=!1,Be=!1,Ie=()=>{ae<lt.ui&&(ae=lt.ui)},Ue=()=>{ve=!0},We=()=>{ae=s?lt.end:0,he=!1,ue=!1};function te(){Be=!0;for(let J of[1.6,3.2,lt.end])ae=J,fe(0,0);Be=!1,We()}function _e(){let[J,Pe]=r.size(),ce=J/Math.max(1,Pe),Xe=ce<.9;if(O.y=Xe?2.3:1.8,O.s=Xe?.95:1.02,!Xe){let Mt=ce<1.3?1.2:1;return{pullB:Mt,pullF:Mt,tgy:0,portrait:Xe}}let tt=.4986*ce,ht=Math.max(1,3.9/(tt*6.27)),F=Math.max(1,((O.s*4.94+.35)/tt-2.4)/10);return{pullB:ht,pullF:F,tgy:-.4,portrait:Xe}}function fe(J,Pe){ve&&(ae=Math.min(lt.end+1e3,ae+J));let ce=ae,Xe=_e(),tt=Kn(ce,...lt.fall),ht=tt*tt,F=yn(6.2,0,ht),Mt=Kn(ce,...lt.settle),nt=ce<lt.settle[0]?0:Math.exp(-Mt*5)*Math.cos(Mt*15)*.22,_t=H*Bn.inOut(Kn(ce,2.9,4.25));m.position.set(0,ce<lt.fall[1]?F:Math.max(0,Math.sin(Mt*Math.PI)*.05*(1-Mt)),_t),p.position.z=_t,m.scale.set(re*(1+nt*.35),re*(1-nt),re*(1+nt*.35));let Me=1-Bn.out(tt);m.rotation.set(.45*Me,W-.7*Me,.3*Me),m.visible=ce>lt.fall[0]-.01;let wt=Kn(ce,...lt.drizzle);x.visible=!1;for(let oe of S){let I=oe.total/oe.ring,K=Math.floor(I*Bn.inOut(wt));if(oe.m.geometry.setDrawRange(0,K*oe.ring),oe.m.visible=K>0,oe===S[0]&&wt>0&&ce<lt.drizzle[1]+.2){V.copy(oe.curve.getPointAt(Math.min(1,Bn.inOut(wt)))),m.localToWorld(V);let $=fn((ce-lt.drizzle[1])/.2),ye=V.y+7.5*(1-$),pe=V.y+.01;x.visible=ye-pe>.02,x.position.set(V.x,pe,V.z),x.scale.set(1,Math.max(.001,ye-pe),1)}}for(let oe of v){let I=fn((ce-oe.t0)/.46),K=fn((ce-oe.t0-.46)/.24);oe.obj.visible=I>0,oe.obj.position.lerpVectors(oe.from,oe.p0,I*I),I>=1&&(oe.obj.position.y=oe.p0.y+Math.sin(K*Math.PI)*.07*(1-K)),oe.obj.quaternion.slerpQuaternions(oe.qFrom,oe.q0,Bn.out(I))}if(b){let oe=!1;for(let I=0;I<b;I++){let K=fn((ce-L[I])/.5);de.lerpVectors(R[I],N[I],K*K),K<=0&&(de.y=99),K>0&&K<1&&(oe=!0),P[I*3]=de.x,P[I*3+1]=de.y,P[I*3+2]=de.z}k.attributes.position.needsUpdate=!0,A.opacity=ce<lt.sugar[0]?0:Math.min(1,(ce-lt.sugar[0])/.15)*(1-fn((ce-lt.sugar[1]-.05)/.35)),B.visible=A.opacity>.01}_.value=.5*Bn.smooth(Kn(ce,lt.sugar[0]+.25,lt.sugar[1]+.2));let ke=Kn(ce,...lt.logoFall),He=Math.max(0,ce-lt.logoFall[1]),C=O.y+9*(1-ke*ke),E=0,X=1;ce>=lt.logoFall[1]&&(C=O.y-.34*Math.exp(-He*6.5)*Math.sin(He*15),E=.1*Math.exp(-He*5)*Math.sin(He*12),X=1-.05*Math.exp(-He*9)*Math.cos(He*20)),G.visible=ce>lt.logoFall[0]-.02,G.position.set(0,C+(ue&&!s?Math.sin(Pe*.8)*.025:0),O.z),G.scale.set(O.s,O.s*X,O.s),G.rotation.set(-.06+E,0,0);let le=Bn.inOut(Kn(ce,2.9,4.25)),se=[0,2.3,5.9],xe=[0,1.45,10],Se=[0,.2,0],Q=[0,1.1,0];z.set(yn(se[0],xe[0],le),yn(se[1],xe[1],le),yn(se[2],xe[2],le)),j.set(yn(Se[0],Q[0],le),yn(Se[1],Q[1],le),yn(Se[2],Q[2],le)),z.z-=Kn(ce,0,2.9)*.5*(1-le),j.y+=Xe.tgy*le,z.sub(j).multiplyScalar(yn(Xe.pullB,Xe.pullF,le)).add(j);let ne=ce>lt.logoFall[1]?.05*Math.exp(-He*7)*Math.sin(He*42):ce>lt.fall[1]&&ce<lt.fall[1]+.4?.02*Math.exp(-(ce-lt.fall[1])*9)*Math.sin((ce-lt.fall[1])*50):0;if(z.y+=ne,!s){ee.sx+=(ee.x-ee.sx)*Math.min(1,J*3),ee.sy+=(ee.y-ee.sy)*Math.min(1,J*3);let oe=fn((ce-lt.end+.4)/1.5);z.x+=(Math.sin(Pe*.17)*(Xe.portrait?.12:.35)+ee.sx*1)*oe,z.y+=(Math.sin(Pe*.13)*.15-ee.sy*.5)*oe}o.position.copy(z),o.lookAt(j),r.key.target.position.set(0,.2,0),l.target.position.set(0,O.y,O.z),de.set(0,.3,0),r.setGlowAt(de),r.finish.uniforms.uFade.value=1-Bn.out(Kn(ce,...lt.fade)),!Be&&!he&&ce>=lt.ui&&(he=!0,e.show&&e.show()),!Be&&!ue&&ce>=lt.end&&(ue=!0,e.done&&e.done()),r.render(J,Pe)}function Re(){if(r.resize()){let[J,Pe]=r.size();Pe>J?o.setViewOffset(J,Pe,0,-Pe*.02,J,Pe):o.setViewOffset(J,Pe,0,Pe*.03,J,Pe)}}return Re(),{frame:fe,resize:Re,stage:r,start:Ue,skip:Ie,restart:We,warm:te,get clock(){return ae},set clock(J){ae=J},set yaw(J){W=J},set pf(J){H=J},T:lt}}var ss=[{id:"sweet",name:"Sweet crepes",mood:["#c2652a","#ffc58e"],note:"Build your own, up to 4 toppings: $14.99"},{id:"savory",name:"Savory crepes",mood:["#b98a22","#ffe2a2"],note:"Build your own, up to 4 toppings: $16.99"},{id:"waffles",name:"Waffles",mood:["#cf8418","#ffd38a"],note:"Savory waffles $13.49: chicken, spinach & feta, avocado & egg, buffalo chicken, caprese"},{id:"drinks",name:"Drinks",mood:["#8a2748","#ffc9d6"],note:"Shakes, smoothies, coffee and tea. Sizes S / M / L"}],zn=[{id:"crepe-craft",cat:"sweet",name:"Crepe Craft",price:"$9.25",ing:"Nutella, powdered sugar",r:{type:"crepe",seed:7,drizzle:["nutella"],sugar:.55}},{id:"banana-bites",cat:"sweet",name:"Banana Bites",price:"$11.49",ing:"Banana, Nutella",r:{type:"crepe",seed:8,drizzle:["nutella"],sugar:0,peek:[{t:"banana",n:4}],top:[{t:"banana",n:5}]}},{id:"strawberryfic",cat:"sweet",name:"Strawberryfic",price:"$11.49",ing:"Strawberry, Nutella",r:{type:"crepe",seed:9,drizzle:["nutella"],sugar:0,peek:[{t:"strawberrySlice",n:5}],top:[{t:"strawberrySlice",n:6},{t:"strawberryHalf",n:2}]}},{id:"berry-bliss",cat:"sweet",name:"Berry Bliss",price:"$14.25",ing:"Berries, New York style cheesecake",r:{type:"crepe",seed:10,sugar:0,peek:[{t:"cheesecake",n:4}],top:[{t:"blueberry",n:7},{t:"raspberry",n:4},{t:"strawberrySlice",n:2}]}},{id:"banana-berry",cat:"sweet",name:"Banana Berry",price:"$12.49",ing:"Banana, strawberry, Nutella",r:{type:"crepe",seed:11,drizzle:["nutella"],sugar:0,peek:[{t:"banana",n:2},{t:"strawberrySlice",n:3}],top:[{t:"banana",n:3},{t:"strawberrySlice",n:3}]}},{id:"smorelicious",cat:"sweet",name:"S\u2019morelicious",price:"$12.49",ing:"Marshmallows, graham crackers, chocolate chips, caramel, Nutella",r:{type:"crepe",seed:12,drizzle:["nutella","caramel"],sugar:0,peek:[{t:"marshmallow",n:4}],top:[{t:"marshmallow",n:6},{t:"graham",n:4},{t:"chip",n:10}]}},{id:"lotus-fusion",cat:"sweet",name:"Lotus Fusion",price:"$12.49",ing:"Banana, Biscoff cookie crumbs, Biscoff butter",r:{type:"crepe",seed:13,drizzle:["cookiebutter"],sugar:0,peek:[{t:"banana",n:3}],top:[{t:"banana",n:3},{t:"crumb",kind:"biscoff",n:18}]}},{id:"mushroom-spinach",cat:"savory",name:"Mushroom and Spinach",price:"$14.25",ing:"Saut\xE9ed mushrooms, garlic, onions, wilted spinach and a sprinkle of Parmesan",r:{type:"crepe",seed:21,batterSeed:5,sugar:0,peek:[{t:"leaf",kind:"spinach",n:4},{t:"mushroom",n:3}],top:[{t:"parm",n:40},{t:"mushroom",n:2}]}},{id:"chicken-pesto",cat:"savory",name:"Chicken and Pesto",price:"$14.25",ing:"Grilled chicken strips tossed in basil pesto, with a drizzle of balsamic glaze",r:{type:"crepe",seed:22,batterSeed:5,sugar:0,drizzle:["balsamic"],peek:[{t:"chicken",n:4,kind:"pesto"}],top:[{t:"chicken",n:4,kind:"pesto"}]}},{id:"spinach-feta",cat:"savory",name:"Spinach and Feta",price:"$14.25",ing:"Saut\xE9ed spinach with crumbled feta cheese",r:{type:"crepe",seed:23,batterSeed:5,sugar:0,peek:[{t:"leaf",kind:"spinach",n:5},{t:"feta",n:4}],top:[{t:"feta",n:9}]}},{id:"caprese",cat:"savory",name:"Caprese",price:"$12.99",ing:"Sliced fresh tomatoes, basil leaves, mozzarella, balsamic vinegar",r:{type:"crepe",seed:24,batterSeed:5,sugar:0,drizzle:["balsamic"],peek:[{t:"tomato",n:3},{t:"mozzarella",n:2}],top:[{t:"leaf",kind:"basil",n:3}]}},{id:"egg-cheese",cat:"savory",name:"Egg and Cheese",price:"$12.99",ing:"Scrambled egg and cheese",r:{type:"crepe",seed:25,batterSeed:5,sugar:0,peek:[{t:"egg",n:6},{t:"cheese",n:3}],top:[{t:"egg",n:5}]}},{id:"classic-waffle",cat:"waffles",name:"Classic Waffle",price:"$9.49",ing:"Maple syrup",r:{type:"waffle",seed:31,wedges:1,drizzle:["maple"],sugar:0}},{id:"banana-waffle",cat:"waffles",name:"Banana Waffle",price:"$10.95",ing:"Banana, Nutella",r:{type:"waffle",seed:32,drizzle:["nutella"],sugar:0,top:[{t:"banana",n:8}]}},{id:"chocolate-chip-waffle",cat:"waffles",name:"Chocolate Chip Waffle",price:"$10.95",ing:"Nutella, whipped cream",r:{type:"waffle",seed:33,drizzle:["nutella"],sugar:0,top:[{t:"chip",n:16},{t:"cream",n:3,spread:.55}]}},{id:"berry-waffle",cat:"waffles",name:"Berry Waffle",price:"$10.95",ing:"Blueberry, raspberry",r:{type:"waffle",seed:34,sugar:0,top:[{t:"blueberry",n:14},{t:"raspberry",n:8}]}},{id:"oreo-waffle",cat:"waffles",name:"Oreo Waffle",price:"$10.95",ing:"Crushed Oreo, banana, Nutella",r:{type:"waffle",seed:35,drizzle:["nutella"],sugar:0,top:[{t:"banana",n:5},{t:"crumb",kind:"oreo",n:26}]}},{id:"strawberry-waffle",cat:"waffles",name:"Strawberry Waffle",price:"$10.95",ing:"Strawberry, Nutella",r:{type:"waffle",seed:36,drizzle:["nutella"],sugar:0,top:[{t:"strawberrySlice",n:7},{t:"strawberryHalf",n:3}]}},{id:"smores-waffle",cat:"waffles",name:"S\u2019mores Waffle",price:"$11.95",ing:"Marshmallows, graham cracker, caramel, Nutella",r:{type:"waffle",seed:37,drizzle:["nutella","caramel"],sugar:0,top:[{t:"marshmallow",n:10},{t:"graham",n:5}]}},{id:"lotus-waffle",cat:"waffles",name:"Lotus Waffle",price:"$10.95",ing:"Biscoff, cookie butter, banana",r:{type:"waffle",seed:38,drizzle:["cookiebutter"],sugar:0,top:[{t:"banana",n:5},{t:"crumb",kind:"biscoff",n:22}]}},{id:"mango-madness",cat:"drinks",name:"Mango Madness",price:"S $7.99 \xB7 M $8.49 \xB7 L $9.50",ing:"Smoothie",r:{type:"drink",seed:41,liquid:[[0,"#F0A92E"],[1,"#F7C64A"]],marble:.12,heap:"#F5B83A",garnish:["pineapple","strawberry","umbrella"],umbrella:"#6cc7e8"}},{id:"strawberry-banana",cat:"drinks",name:"Strawberry Banana",price:"S $6.99 \xB7 M $7.49 \xB7 L $8.25",ing:"Smoothie",r:{type:"drink",seed:42,liquid:[[0,"#C93A4E"],[1,"#E2677A"]],marble:.16,heap:"#D44258",garnish:["strawberry","umbrella"],umbrella:"#5fc9a4"}},{id:"mixed-berry",cat:"drinks",name:"Mixed Berry",price:"S $6.99 \xB7 M $7.49 \xB7 L $8.25",ing:"Smoothie",r:{type:"drink",seed:43,liquid:[[0,"#6E1A3E"],[1,"#A2345E"]],marble:.14,heap:"#8E2850",straw:"#f0e2d0"}},{id:"oreo-milkshake",cat:"drinks",name:"Oreo Milkshake",price:"S $6.99 \xB7 M $7.49 \xB7 L $8.25",ing:"Milkshake",r:{type:"drink",seed:44,liquid:[[0,"#B9AA9C"],[1,"#D8CDC2"]],marble:.1,drip:"#2a1c16",cream:!0,dome:!0,straw:"#2b2522"}},{id:"nutella-milkshake",cat:"drinks",name:"Nutella Milkshake",price:"S $6.99 \xB7 M $7.49 \xB7 L $8.25",ing:"Milkshake",r:{type:"drink",seed:45,liquid:[[0,"#8C5A38"],[1,"#B07D57"]],marble:.12,drip:"#3b1a0b",cream:!0,creamDrizzle:"nutella",dome:!0,straw:"#e9dccb"}},{id:"iced-caramel-macchiato",cat:"drinks",name:"Iced Caramel Macchiato",price:"S $3.95 \xB7 M $4.49 \xB7 L $5.49",ing:"Iced coffee",r:{type:"drink",seed:46,liquid:[[0,"#EFE4D2"],[.55,"#E2CBA8"],[.72,"#8A552E"],[1,"#6E3F20"]],marble:.08,drip:"#b5621c",ice:5,sticker:!1,straw:"#f3efe6",fill:.9}}];function Dd(i,e,t={}){let n=!!t.phone,s=!!t.reduce,r=cl(i,{phone:n,palette:"chocolate",fixedPR:t.fixedPR}),a={sweet:"chocolate",savory:"butter",waffles:"maple",drinks:"berry"},{scene:o,camera:l}=r,c=zn.length,h=zn.map(()=>{let H=new vt;return H.visible=!1,o.add(H),H}),f=new Array(c),u=new Array(c).fill(0);function p(H){if(H<0||H>=c||f[H])return;let z=Cd(zn[H].r,{lite:n}),j=zn[H].r.type==="drink"?1.22:1;z.scale.setScalar(j),f[H]=z,h[H].add(z)}let _=0,y=0,m=-1,d=null,g=0,M=0,v=null,S=-9,T=0,x=new D(0,2,6.4),b=new D(0,.4,0),P=new D,R=.35;function N(H){return H>1.05?{th:.42,R:7.2,s:.5,y:.15}:{th:.36,R:4.2,s:.46,y:.3}}let L=i;L.addEventListener("pointerdown",H=>{v={x:H.clientX,y:H.clientY,t:performance.now(),lx:H.clientX,moved:0},M=0}),window.addEventListener("pointermove",H=>{if(!v){if(H.pointerType==="mouse"){let j=L.getBoundingClientRect();A.x=((H.clientX-j.left)/j.width-.5)*2,A.y=((H.clientY-j.top)/j.height-.5)*2}return}let z=H.clientX-v.lx;v.lx=H.clientX,v.moved+=Math.abs(z),g+=z*.012,M=z*.012*60});let k=H=>{if(!v)return;let z=performance.now()-v.t,j=H.clientX-v.x,de=H.clientY-v.y;z<380&&Math.abs(j)>60&&Math.abs(j)>Math.abs(de)*1.4&&e.go&&(e.go(y+(j<0?1:-1)),M=0),v=null};window.addEventListener("pointerup",k),window.addEventListener("pointercancel",k);let A={x:0,y:0},B={x:0,y:0};function G(H,z,j){let[de,V]=r.size(),ee=de/Math.max(1,V),ae=N(ee);y=Math.round(fn(j)*(c-1));for(let Ue=-2;Ue<=2;Ue++)p(y+Ue);if(y!==m){m>=0&&!s&&!t.instant&&(S=z,T=Math.sign(y-m)),m=y,g=0,M=0;let Ue=zn[y],We=ss.find(te=>te.id===Ue.cat);if(We.id!==d){let te=d===null;d=We.id,r.setMood(We.mood[0],We.mood[1],te),r.setPalette(a[We.id]||"chocolate",te)}e.onItem&&e.onItem(y,Ue,We)}_=t.instant?y:s?Xs(_,y,14,H):Xs(_,y,6.5,H),v||(g+=M*H,M*=Math.exp(-H*2.6));for(let Ue=0;Ue<c;Ue++){let We=h[Ue],te=Ue-_,_e=Math.abs(te);if(We.visible=!!f[Ue]&&_e<2.6,!We.visible)continue;let fe=fn(_e),Re=te*ae.th;We.position.set(Math.sin(Re)*ae.R,yn(0,ae.y,fe)+(s?0:Math.sin(z*1.1+Ue)*.03*fe),(Math.cos(Re)-1)*ae.R-fe*.4),We.scale.setScalar(yn(1,ae.s,fe)),We.rotation.set(yn(0,.22,fe),-te*.35,-te*.05);let J=0;if(Ue===y){let Pe=fn((z-S)/1.05);J=g+(s?0:z*.22)-(1-Bn.outBack(Pe,1.3))*Math.PI*2*T,We.position.y+=s?0:Math.sin(Pe*Math.PI)*.28*(1-Pe)}else J=(s?0:z*.1)+Ue;f[Ue].rotation.y=J}let ve=zn[y],he=ve.r.type==="drink";r.shadow.scale.setScalar(he?.55:1),R=Xs(R,he?1.05:.32,4,H),B.x=Xs(B.x,A.x,3,H),B.y=Xs(B.y,A.y,3,H);let Be=ee>1.05?he?9.4:9:Math.min(15,(he?6.4:6.6)/Math.max(.4,ee)),Ie=he?.18:.42;x.set(B.x*.35,R+Math.sin(Ie)*Be+B.y*-.15,Math.cos(Ie)*Be),l.position.copy(x),b.set(0,R,0),l.lookAt(b),r.key.target.position.set(0,R*.5,0),r.render(H,z)}let O=0;function re(){for(;O<c&&f[O];)O++;return O<c?(p(O),!0):!1}function W(){if(r.resize()){let[H,z]=r.size(),j=z>H;j?l.setViewOffset(H,z,0,z*.17,H,z):l.setViewOffset(H,z,-H*(H/z>1.25?.11:.06),z*.1,H,z),r.setBlur(1,j?.3:.2)}}return W(),{frame:G,resize:W,warm:re,stage:r,count:c}}var ln=(i,e=document)=>e.querySelector(i),Q_=(i,e=document)=>Array.from(e.querySelectorAll(i));function j_(i){let e=i.getBoundingClientRect().top,t=i.offsetHeight-innerHeight;return t>0?fn(-e/t):0}var ex=()=>new Promise(i=>requestAnimationFrame(()=>i()));async function yM({reduce:i=!1}={}){let e=document.documentElement,t=matchMedia("(max-width: 760px), (pointer: coarse)").matches,n=/[?&]shot\b/.test(location.search),s=n?1:void 0;await new Promise(A=>{let B=setTimeout(A,2500);new wr().load("assets/media/sticker.webp",G=>{G.colorSpace=kt,Rd(G),clearTimeout(B),A()},void 0,()=>{clearTimeout(B),A()})});let r=ln("[data-hero]"),a=ln("[data-menu]"),o={show(){e.classList.add("hero-live")},done(){e.classList.add("hero-done")}},l=Ld(ln("[data-hero-gl]"),o,{phone:t,reduce:i,fixedPR:s});l.warm(),await ex(),l.frame(0,0),e.classList.add("gl-ready"),l.start();let c=()=>{l.clock<l.T.ui&&l.skip()};["wheel","touchstart","keydown","pointerdown"].forEach(A=>addEventListener(A,c,{passive:!0})),addEventListener("scroll",()=>{scrollY>40&&c()},{passive:!0});let h=ln("[data-replay]");h&&h.addEventListener("click",A=>{A.stopPropagation(),e.classList.remove("hero-live","hero-done"),l.restart()});let f=zn.length,u={cat:ln("[data-m-cat]"),count:ln("[data-m-count]"),name:ln("[data-m-name]"),ing:ln("[data-m-ing]"),price:ln("[data-m-price]"),note:ln("[data-m-note]"),item:ln("[data-m-item]"),tabs:Q_("[data-m-tab]"),order:ln("[data-m-order]")},p=Object.fromEntries(ss.map(A=>[A.id,zn.findIndex(B=>B.cat===A.id)])),_=Object.fromEntries(ss.map(A=>[A.id,zn.filter(B=>B.cat===A.id).length])),y=A=>a.offsetTop+(A+.02)/(f-1)*(a.offsetHeight-innerHeight),m=0,d=A=>{A=Math.max(0,Math.min(f-1,A)),scrollTo({top:y(A),behavior:i?"auto":"smooth"})},g={go:d,onItem(A,B,G){m=A;let O=A-p[G.id]+1;u.item.classList.remove("is-in"),u.item.offsetWidth,u.cat.textContent=G.name,u.count.textContent=`${String(O).padStart(2,"0")} / ${String(_[G.id]).padStart(2,"0")}`,u.name.textContent=B.name,u.ing.textContent=B.ing,u.price.textContent=B.price,u.note.textContent=G.note,u.order.setAttribute("aria-label",`Order ${B.name} now on Seamless (opens in a new tab)`),u.item.classList.add("is-in"),u.tabs.forEach(re=>{let W=re.dataset.mTab===G.id;re.classList.toggle("is-on",W),W?re.setAttribute("aria-current","true"):re.removeAttribute("aria-current"),re.style.setProperty("--p",W?(O/_[G.id]).toFixed(3):ss.findIndex(H=>H.id===re.dataset.mTab)<ss.findIndex(H=>H.id===G.id)?1:0)}),e.style.setProperty("--mood",G.mood[1])}};u.tabs.forEach(A=>A.addEventListener("click",()=>d(p[A.dataset.mTab]))),ln("[data-m-prev]").addEventListener("click",()=>d(m-1)),ln("[data-m-next]").addEventListener("click",()=>d(m+1));let M=!1,v=!0,S=null,T=0;addEventListener("keydown",A=>{!M||A.altKey||A.metaKey||A.ctrlKey||/input|select|textarea/i.test((document.activeElement||{}).tagName||"")||(A.key==="ArrowRight"?(A.preventDefault(),d(m+1)):A.key==="ArrowLeft"&&(A.preventDefault(),d(m-1)))}),addEventListener("scroll",()=>{T=performance.now()},{passive:!0});let x=()=>{S||(S=Dd(ln("[data-menu-gl]"),g,{phone:t,reduce:i,instant:n,fixedPR:s}))};new IntersectionObserver(A=>A.forEach(B=>{v=B.isIntersecting})).observe(r),new IntersectionObserver(A=>A.forEach(B=>{M=B.isIntersecting,M&&x()})).observe(a);let b=performance.now(),P=!1;document.addEventListener("visibilitychange",()=>{P=document.hidden,b=performance.now()}),addEventListener("resize",()=>{l.resize(),S&&S.resize()});let R=performance.now();function N(A){if(requestAnimationFrame(N),P)return;let B=Math.min(.05,(A-b)/1e3);b=A;let G=(A-R)/1e3;v?(l.resize(),l.frame(B,G)):l.clock<l.T.end&&(l.clock=l.T.end),S&&M&&(S.resize(),S.frame(B,G,j_(a)),e.classList.add("menu-ready"))}requestAnimationFrame(N);let L=window.requestIdleCallback||(A=>setTimeout(()=>A({timeRemaining:()=>8}),120)),k=()=>{if(performance.now()-T<400||v&&l.clock<l.T.end){setTimeout(()=>L(k),300);return}x(),S.warm()&&L(k)};setTimeout(()=>L(k),i?600:(l.T.end+.6)*1e3),window.__cc={hero:l,get menu(){return S},go:d}}export{yM as boot};
