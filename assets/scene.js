var Ro="187";var xu=0,xc=1,vu=2;var es=1,yu=2,qs=3,Yn=0,Qt=1,Bt=2,di=0,Ys=1,Li=2,vc=3,yc=4,Mu=5;var ts=100,Su=101,bu=102,Eu=103,Tu=104,wu=200,Au=201,Ru=202,Cu=203,Mc=204,Sc=205,Pu=206,Iu=207,Lu=208,Du=209,Nu=210,Uu=211,Fu=212,Ou=213,Bu=214,Xa=0,qa=1,Ya=2,As=3,Za=4,$a=5,Ja=6,Ka=7,bc=0,zu=1,Hu=2,Zn=0,qr=1,Yr=2,Zr=3,ns=4,$r=5,Jr=6,Kr=7;var Ec=300,is=301,Zs=302,Co=303,Po=304,Rs=1e3,kn=1001,Qa=1002,Jt=1003,ku=1004;var Qr=1005;var dn=1006,Io=1007;var fi=1008;var pn=1009,Tc=1010,wc=1011,$s=1012,Lo=1013,Un=1014,Fn=1015,Wt=1016,Do=1017,No=1018,ss=1020,Ac=35902,Rc=35899,Cc=1021,Pc=1022,On=1023,oi=1026,pi=1027,Ic=1028,Uo=1029,Di=1030,Fo=1031;var Oo=1033,jr=33776,ea=33777,ta=33778,na=33779,Bo=35840,zo=35841,Ho=35842,ko=35843,Go=36196,Vo=37492,Wo=37496,Xo=37488,qo=37489,ia=37490,Yo=37491,Zo=37808,$o=37809,Jo=37810,Ko=37811,Qo=37812,jo=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,al=37820,ol=37821,ll=36492,cl=36494,hl=36495,ul=36283,dl=36284,sa=36285,fl=36286;var pr=2300,ja=2301,Ga=2302,ac=2303,oc=2400,lc=2401,cc=2402;var Gu=3200;var pl=0,Vu=1,Bn="",Ft="srgb",mr="srgb-linear",gr="linear",_t="srgb";var Va=7680;var Wu=519,Xu=512,qu=513,Yu=514,Lc=515,Zu=516,$u=517,Dc=518,Nc=519,Uc=35044;var Fc="300 es",Rn=2e3,Cs=2001;function gf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _f(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=Ps("canvas");return i.style.display="block",i}var Nh={},Is=null;function _r(...i){let e="THREE."+i.shift();Is?Is("log",e,...i):console.log(e,...i)}function Ku(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=Ku(i);let e="THREE."+i.shift();if(Is)Is("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Ku(i);let e="THREE."+i.shift();if(Is)Is("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qi(...i){let e=i.join(" ");e in Nh||(Nh[e]=!0,Xe(...i))}function Qu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ju={[Xa]:Xa,[Ya]:Ja,[Za]:Za,[As]:$a,[qa]:qa,[Ja]:Ya,[Ka]:Ka,[$a]:As},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uh=1234567,hr=Math.PI/180,Yi=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Oc(i,e){return(i%e+e)%e}function xf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vf(i,e,t){return i!==e?(t-i)/(e-i):0}function ur(i,e,t){return(1-t)*i+t*e}function yf(i,e,t,n){return ur(i,e,1-Math.exp(-t*n))}function Mf(i,e=1){return e-Math.abs(Oc(i,e*2)-e)}function Sf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ef(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tf(i,e){return i+Math.random()*(e-i)}function wf(i){return i*(.5-Math.random())}function Af(i){i!==void 0&&(Uh=i);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rf(i){return i*hr}function Cf(i){return i*Yi}function Pf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function If(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ml(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zc(i,e){if(e.constructor===Float32Array)return i;let t=ml(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Hc(i,e){if(e.constructor===Float32Array)return i;let t=ml(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var kc={DEG2RAD:hr,RAD2DEG:Yi,generateUUID:mi,clamp:at,euclideanModulo:Oc,mapLinear:xf,inverseLerp:vf,lerp:ur,damp:yf,pingpong:Mf,smoothstep:Sf,smootherstep:bf,randInt:Ef,randFloat:Tf,randFloatSpread:wf,seededRandom:Af,degToRad:Rf,radToDeg:Cf,isPowerOfTwo:Pf,ceilPowerOfTwo:If,floorPowerOfTwo:Bc,setQuaternionFromProperEuler:Lf,normalize:Hc,denormalize:zc},Yc=class Yc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yc.prototype.isVector2=!0;var te=Yc,Wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+d*y;m<0&&(u=-u,p=-p,g=-g,y=-y,m=-m);let f=1-o;if(m<.9995){let _=Math.acos(m),v=Math.sin(_);f=Math.sin(f*_)/v,o=Math.sin(o*_)/v,l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+y*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+g*o,d=d*f+y*o;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zc=class Zc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fl.copy(this).projectOnVector(e),this.sub(Fl)}reflect(e){return this.sub(Fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zc.prototype.isVector3=!0;var I=Zc,Fl=new I,Fh=new Wn,$c=class $c{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],_=s[1],v=s[4],M=s[7],b=s[2],T=s[5],x=s[8];return r[0]=a*y+o*_+l*b,r[3]=a*m+o*v+l*T,r[6]=a*f+o*M+l*x,r[1]=c*y+h*_+d*b,r[4]=c*m+h*v+d*T,r[7]=c*f+h*M+d*x,r[2]=u*y+p*_+g*b,r[5]=u*m+p*v+g*T,r[8]=u*f+p*M+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,g=t*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$c.prototype.isMatrix3=!0;var et=$c,Ol=new et,Oh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Df(){let i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:e,whitePoint:n,transfer:gr,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var dt=Df();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ls,eo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=Ps("canvas")),ls.width=e.width,ls.height=e.height;let s=ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ps("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nf=0,Ls=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bl(s[a].image)):r.push(Bl(s[a]))}else r=Bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var Uf=0,zl=new I,an=class i extends Vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=kn,s=kn,r=dn,a=fi,o=On,l=pn,c=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=mi(),this.name="",this.source=new Ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Ec;an.DEFAULT_ANISOTROPY=1;var Jc=class Jc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(p+1)/2,b=(f+1)/2,T=(h+u)/4,x=(d+y)/4,S=(g+m)/4;return v>M&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=x/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=x/r,s=S/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-y)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jc.prototype.isVector4=!0;var Pt=Jc,to=class extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ls(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends to{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xr=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var no=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ao=class Ao{constructor(e,t,n,s,r,a,o,l,c,h,d,u,p,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,p,g,y,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ao().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ff,e,Of)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Mi.crossVectors(n,xn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Mi.crossVectors(n,xn)),Mi.normalize(),ma.crossVectors(xn,Mi),s[0]=Mi.x,s[4]=ma.x,s[8]=xn.x,s[1]=Mi.y,s[5]=ma.y,s[9]=xn.y,s[2]=Mi.z,s[6]=ma.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],_=n[3],v=n[7],M=n[11],b=n[15],T=s[0],x=s[4],S=s[8],P=s[12],A=s[1],L=s[5],D=s[9],z=s[13],C=s[2],W=s[6],Z=s[10],V=s[14],ae=s[3],O=s[7],q=s[11],H=s[15];return r[0]=a*T+o*A+l*C+c*ae,r[4]=a*x+o*L+l*W+c*O,r[8]=a*S+o*D+l*Z+c*q,r[12]=a*P+o*z+l*V+c*H,r[1]=h*T+d*A+u*C+p*ae,r[5]=h*x+d*L+u*W+p*O,r[9]=h*S+d*D+u*Z+p*q,r[13]=h*P+d*z+u*V+p*H,r[2]=g*T+y*A+m*C+f*ae,r[6]=g*x+y*L+m*W+f*O,r[10]=g*S+y*D+m*Z+f*q,r[14]=g*P+y*z+m*V+f*H,r[3]=_*T+v*A+M*C+b*ae,r[7]=_*x+v*L+M*W+b*O,r[11]=_*S+v*D+M*Z+b*q,r[15]=_*P+v*z+M*V+b*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15],_=l*p-c*u,v=o*p-c*d,M=o*u-l*d,b=a*p-c*h,T=a*u-l*h,x=a*d-o*h;return t*(y*_-m*v+f*M)-n*(g*_-m*b+f*T)+s*(g*v-y*b+f*x)-r*(g*M-y*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],_=t*o-n*a,v=t*l-s*a,M=t*c-r*a,b=n*l-s*o,T=n*c-r*o,x=s*c-r*l,S=h*y-d*g,P=h*m-u*g,A=h*f-p*g,L=d*m-u*y,D=d*f-p*y,z=u*f-p*m,C=_*z-v*D+M*L+b*A-T*P+x*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/C;return e[0]=(o*z-l*D+c*L)*W,e[1]=(s*D-n*z-r*L)*W,e[2]=(y*x-m*T+f*b)*W,e[3]=(u*T-d*x-p*b)*W,e[4]=(l*A-a*z-c*P)*W,e[5]=(t*z-s*A+r*P)*W,e[6]=(m*M-g*x-f*v)*W,e[7]=(h*x-u*M+p*v)*W,e[8]=(a*D-o*A+c*S)*W,e[9]=(n*A-t*D-r*S)*W,e[10]=(g*T-y*M+f*_)*W,e[11]=(d*M-h*T-p*_)*W,e[12]=(o*P-a*L-l*S)*W,e[13]=(t*L-n*P+s*S)*W,e[14]=(y*v-g*b-m*_)*W,e[15]=(h*b-d*v+u*_)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,g=r*d,y=a*h,m=a*d,f=o*d,_=l*c,v=l*h,M=l*d,b=n.x,T=n.y,x=n.z;return s[0]=(1-(y+f))*b,s[1]=(p+M)*b,s[2]=(g-v)*b,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(u+f))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+v)*x,s[9]=(m-_)*x,s[10]=(1-(u+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=cs.set(s[0],s[1],s[2]).length(),o=cs.set(s[4],s[5],s[6]).length(),l=cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ln.copy(this);let c=1/a,h=1/o,d=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Rn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Rn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Cs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Rn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Rn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Cs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ao.prototype.isMatrix4=!0;var Tt=Ao,cs=new I,Ln=new Tt,Ff=new I(0,0,0),Of=new I(1,1,1),Mi=new I,ma=new I,xn=new I,zh=new Tt,Hh=new Wn,li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bf=0,kh=new I,hs=new Wn,ei=new Tt,ga=new I,nr=new I,zf=new I,Hf=new Wn,Gh=new I(1,0,0),Vh=new I(0,1,0),Wh=new I(0,0,1),Xh={type:"added"},kf={type:"removed"},us={type:"childadded",child:null},Hl={type:"childremoved",child:null},Kt=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new li,n=new Wn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new et}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(nr,ga,this.up):ei.lookAt(ga,nr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(ei),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xh),us.child=e,this.dispatchEvent(us),us.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kf),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xh),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new I(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gf={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},_a={h:0,s:0,l:0};function kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Oc(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=kl(a,r,e+1/3),this.g=kl(a,r,e),this.b=kl(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return dt.workingToColorSpace(sn.copy(this),e),Math.round(at(sn.r*255,0,255))*65536+Math.round(at(sn.g*255,0,255))*256+Math.round(at(sn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Ft){dt.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(_a);let n=ur(Si.h,_a.h,t),s=ur(Si.s,_a.s,t),r=ur(Si.l,_a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Se;Se.NAMES=ed;var Us=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dn=new I,ti=new I,Gl=new I,ni=new I,ds=new I,fs=new I,qh=new I,Vl=new I,Wl=new I,Xl=new I,ql=new Pt,Yl=new Pt,Zl=new Pt,ri=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),ti.subVectors(n,t),Gl.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(ti),l=Dn.dot(Gl),c=ti.dot(ti),h=ti.dot(Gl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ql.setScalar(0),Yl.setScalar(0),Zl.setScalar(0),ql.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,n),Zl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ql,r.x),a.addScaledVector(Yl,r.y),a.addScaledVector(Zl,r.z),a}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),ti.subVectors(e,t),Dn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Dn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ds.subVectors(s,n),fs.subVectors(r,n),Vl.subVectors(e,n);let l=ds.dot(Vl),c=fs.dot(Vl);if(l<=0&&c<=0)return t.copy(n);Wl.subVectors(e,s);let h=ds.dot(Wl),d=fs.dot(Wl);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(ds,a);Xl.subVectors(e,r);let p=ds.dot(Xl),g=fs.dot(Xl);if(g>=0&&p<=g)return t.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(fs,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return qh.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(qh,o);let f=1/(m+y+u);return a=y*f,o=u*f,t.copy(n).addScaledVector(ds,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),va.subVectors(this.max,ir),ps.subVectors(e.a,ir),ms.subVectors(e.b,ir),gs.subVectors(e.c,ir),bi.subVectors(ms,ps),Ei.subVectors(gs,ms),Gi.subVectors(ps,gs);let t=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Gi.z,Gi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Gi.z,0,-Gi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Gi.y,Gi.x,0];return!$l(t,ps,ms,gs,va)||(t=[1,0,0,0,1,0,0,0,1],!$l(t,ps,ms,gs,va))?!1:(ya.crossVectors(bi,Ei),t=[ya.x,ya.y,ya.z],$l(t,ps,ms,gs,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,xa=new wi,ps=new I,ms=new I,gs=new I,bi=new I,Ei=new I,Gi=new I,ir=new I,va=new I,ya=new I,Vi=new I;function $l(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var kt=new I,Ma=new te,Vf=0,Mn=class extends Vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=e!==void 0?ml(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zc(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.array)}};var vr=class extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yr=class extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wf=new wi,sr=new I,Jl=new I,Zi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Jl)),this.expandByPoint(sr.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xf=0,An=new Tt,Kl=new Kt,_s=new I,vn=new wi,rr=new wi,$t=new I,wt=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?yr:vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(vn.min,rr.min),vn.expandByPoint($t),$t.addVectors(vn.max,rr.max),vn.expandByPoint($t)):(vn.expandByPoint(rr.min),vn.expandByPoint(rr.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(_s.fromBufferAttribute(e,c),$t.add(_s)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;let h=new I,d=new I,u=new I,p=new te,g=new te,y=new te,m=new I,f=new I;function _(P,A,L){c[P]=c[A]=c[L]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,L),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,A),y.fromBufferAttribute(r,L),d.sub(h),u.sub(h),g.sub(p),y.sub(p);let D=1/(g.x*y.y-y.x*g.y);isFinite(D)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(u,-g.y).multiplyScalar(D),f.copy(u).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(D),o[P].add(m),o[A].add(m),o[L].add(m),l[P].add(f),l[A].add(f),l[L].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,A=v.length;P<A;++P){let L=v[P],D=L.start,z=L.count;for(let C=D,W=D+z;C<W;C+=3)_(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let M=new I,b=new I,T=new I,x=new I;function S(P){T.fromBufferAttribute(s,P),x.copy(T);let A=o[P];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),b.crossVectors(x,A);let D=b.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,D)}for(let P=0,A=n.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Mn(u,h,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uc,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Yh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Yh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Yh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=mi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var un=new I,Mr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?ml(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zc(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hc(e,this.data.array)}},Ql=new I,qf=new I,Yf=new et,yn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ql.subVectors(n,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ql),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yf.getNormalMatrix(e),s=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zf=0,Xn=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Ys,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fs=class extends Xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xs,ar=new I,vs=new I,ys=new I,Ms=new te,or=new te,td=new Tt,Sa=new I,lr=new I,ba=new I,Zh=new te,jl=new te,$h=new te,Sr=class extends Kt{constructor(e=new Fs){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new io(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Mr(n,3,0,!1)),xs.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=xs,this.material=e,this.center=new te(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ea(Sa.set(-.5,-.5,0),ys,a,vs,s,r),Ea(lr.set(.5,-.5,0),ys,a,vs,s,r),Ea(ba.set(.5,.5,0),ys,a,vs,s,r),Zh.set(0,0),jl.set(1,0),$h.set(1,1);let o=e.ray.intersectTriangle(Sa,lr,ba,!1,ar);if(o===null&&(Ea(lr.set(-.5,.5,0),ys,a,vs,s,r),jl.set(0,1),o=e.ray.intersectTriangle(Sa,ba,lr,!1,ar),o===null))return;let l=e.ray.origin.distanceTo(ar);l<e.near||l>e.far||t.push({distance:l,point:ar.clone(),uv:ri.getInterpolation(ar,Sa,lr,ba,Zh,jl,$h,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ea(i,e,t,n,s,r){Ms.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(or.x=r*Ms.x-s*Ms.y,or.y=s*Ms.x+r*Ms.y):or.copy(Ms),i.copy(e),i.x+=or.x,i.y+=or.y,i.applyMatrix4(td)}var si=new I,ec=new I,Ta=new I,wa=new I,Ai=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ec.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),wa.copy(this.origin).sub(ec);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=wa.dot(this.direction),l=-wa.dot(Ta),c=wa.lengthSq(),h=Math.abs(1-a*a),d,u,p,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ec).addScaledVector(Ta,u),p}intersectSphere(e,t){if(e.radius<0)return null;si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,f=n.x-a.x,_=n.y-a.y,v=n.z-a.z,M=Math.abs(l),b=Math.abs(c),T=Math.abs(h),x,S,P,A,L,D,z,C,W,Z,V,ae;if(M>=b&&M>=T?(P=l,D=d,W=g,ae=f,l>=0?(x=c,S=h,A=u,L=p,z=y,C=m,Z=_,V=v):(x=h,S=c,A=p,L=u,z=m,C=y,Z=v,V=_)):b>=T?(P=c,D=u,W=y,ae=_,c>=0?(x=h,S=l,A=p,L=d,z=m,C=g,Z=v,V=f):(x=l,S=h,A=d,L=p,z=g,C=m,Z=f,V=v)):(P=h,D=p,W=m,ae=v,h>=0?(x=l,S=c,A=d,L=u,z=g,C=y,Z=f,V=_):(x=c,S=l,A=u,L=d,z=y,C=g,Z=_,V=f)),P===0)return null;let O=x/P,q=S/P,H=1/P,k=A-O*D,j=L-q*D,B=z-O*W,ie=C-q*W,le=Z-O*ae,ge=V-q*ae,he=le*ie-ge*B,Re=k*ge-j*le,ft=B*j-ie*k;if(s){if(he<0||Re<0||ft<0)return null}else if((he<0||Re<0||ft<0)&&(he>0||Re>0||ft>0))return null;let we=he+Re+ft;if(we===0)return null;let ke=H*(he*D+Re*W+ft*ae);return(we>0?ke<0:ke>0)?null:this.at(ke/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jh=new Tt,Wi=new Ai,Aa=new Zi,Kh=new I,Ra=new I,Ca=new I,Pa=new I,tc=new I,Ia=new I,Qh=new I,La=new I,vt=class extends Kt{constructor(e=new wt,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(tc.fromBufferAttribute(d,e),a?Ia.addScaledVector(tc,h):Ia.addScaledVector(tc.sub(t),h))}t.add(Ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Aa.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Aa,Kh)===null||Wi.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=v;M<b;M+=3){let T=o.getX(M),x=o.getX(M+1),S=o.getX(M+2);s=Da(this,f,e,n,c,h,d,T,x,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let _=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);s=Da(this,a,e,n,c,h,d,_,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,b=v;M<b;M+=3){let T=M,x=M+1,S=M+2;s=Da(this,f,e,n,c,h,d,T,x,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let _=m,v=m+1,M=m+2;s=Da(this,a,e,n,c,h,d,_,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function $f(i,e,t,n,s,r,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Yn,o),l===null)return null;La.copy(o),La.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(La);return c<t.near||c>t.far?null:{distance:c,point:La.clone(),object:i}}function Da(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ra),i.getVertexPosition(l,Ca),i.getVertexPosition(c,Pa);let h=$f(i,e,t,n,Ra,Ca,Pa,Qh);if(h){let d=new I;ri.getBarycoord(Qh,Ra,Ca,Pa,d),s&&(h.uv=ri.getInterpolatedAttribute(s,o,l,c,d,new te)),r&&(h.uv1=ri.getInterpolatedAttribute(r,o,l,c,d,new te)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};ri.getNormal(Ra,Ca,Pa,u.normal),h.face=u,h.barycoord=d}return h}var so=class extends an{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Jt,h=Jt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xi=new Zi,Jf=new te(.5,.5),Na=new I,Ri=class{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],y=r[9],m=r[10],f=r[11],_=r[12],v=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-a,p-h,f-g,b-_).normalize(),s[1].setComponents(c+a,p+h,f+g,b+_).normalize(),s[2].setComponents(c+o,p+d,f+y,b+v).normalize(),s[3].setComponents(c-o,p-d,f-y,b-v).normalize(),n)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,p-u,f-m,b-M).normalize();else if(s[4].setComponents(c-l,p-u,f-m,b-M).normalize(),t===Rn)s[5].setComponents(c+l,p+u,f+m,b+M).normalize();else if(t===Cs)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);let t=Jf.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Na.x=s.normal.x>0?e.max.x:e.min.x,Na.y=s.normal.y>0?e.max.y:e.min.y,Na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jh=new Tt,ro=class i{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];jh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ri),n[s].setFromProjectionMatrix(jh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ri),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Os=class extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eu=new Tt,hc=new Ai,Ua=new Zi,Fa=new I,br=class extends Kt{constructor(e=new wt,t=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;eu.copy(s).invert(),hc.copy(e.ray).applyMatrix4(eu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,y=p;g<y;g++){let m=c.getX(g);Fa.fromBufferAttribute(d,m),tu(Fa,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,y=p;g<y;g++)Fa.fromBufferAttribute(d,g),tu(Fa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function tu(i,e,t,n,s,r,a){let o=hc.distanceSqToPoint(i);if(o<t){let l=new I;hc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Er=class extends an{constructor(e=[],t=is,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cn=class extends an{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends an{constructor(e,t,n=Un,s,r,a,o=Jt,l=Jt,c,h=oi,d=1){if(h!==oi&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Tr=class extends ci{constructor(e,t=Un,n=is,s,r,a=Jt,o=Jt,l,c=oi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wr=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Sn=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2));function g(y,m,f,_,v,M,b,T,x,S,P){let A=M/x,L=b/S,D=M/2,z=b/2,C=T/2,W=x+1,Z=S+1,V=0,ae=0,O=new I;for(let q=0;q<Z;q++){let H=q*L-z;for(let k=0;k<W;k++){let j=k*A-D;O[y]=j*_,O[m]=H*v,O[f]=C,c.push(O.x,O.y,O.z),O[y]=0,O[m]=0,O[f]=T>0?1:-1,h.push(O.x,O.y,O.z),d.push(k/x),d.push(1-q/S),V+=1}}for(let q=0;q<S;q++)for(let H=0;H<x;H++){let k=u+H+W*q,j=u+H+W*(q+1),B=u+(H+1)+W*(q+1),ie=u+(H+1)+W*q;l.push(k,j,ie),l.push(j,B,ie),ae+=6}o.addGroup(p,ae,P),p+=ae,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ar=class i extends wt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,p=2*d+u,g=n*2+r,y=s+1,m=new I,f=new I;for(let _=0;_<=g;_++){let v=0,M=0,b=0,T=0;if(_<=n){let P=_/n,A=P*Math.PI/2;M=-h-e*Math.cos(A),b=e*Math.sin(A),T=-e*Math.cos(A),v=P*d}else if(_<=n+r){let P=(_-n)/r;M=-h+P*t,b=e,T=0,v=d+P*u}else{let P=(_-n-r)/n,A=P*Math.PI/2;M=h+e*Math.sin(A),b=e*Math.cos(A),T=e*Math.sin(A),v=d+u+P*d}let x=Math.max(0,Math.min(1,v/p)),S=0;_===0?S=.5/s:_===g&&(S=-.5/s);for(let P=0;P<=s;P++){let A=P/s,L=A*Math.PI*2,D=Math.sin(L),z=Math.cos(L);f.x=-b*z,f.y=M,f.z=b*D,o.push(f.x,f.y,f.z),m.set(-b*z,T,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+S,x)}if(_>0){let P=(_-1)*y;for(let A=0;A<s;A++){let L=P+A,D=P+A+1,z=_*y+A,C=_*y+A+1;a.push(L,D,z),a.push(D,C,z)}}}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Pn=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],g=0,y=[],m=n/2,f=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2));function _(){let M=new I,b=new I,T=0,x=(t-e)/n;for(let S=0;S<=r;S++){let P=[],A=S/r,L=A*(t-e)+e;for(let D=0;D<=s;D++){let z=D/s,C=z*l+o,W=Math.sin(C),Z=Math.cos(C);b.x=L*W,b.y=-A*n+m,b.z=L*Z,d.push(b.x,b.y,b.z),M.set(W,x,Z).normalize(),u.push(M.x,M.y,M.z),p.push(z,1-A),P.push(g++)}y.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let A=y[P][S],L=y[P+1][S],D=y[P+1][S+1],z=y[P][S+1];(e>0||P!==0)&&(h.push(A,L,z),T+=3),(t>0||P!==r-1)&&(h.push(L,D,z),T+=3)}c.addGroup(f,T,0),f+=T}function v(M){let b=g,T=new te,x=new I,S=0,P=M===!0?e:t,A=M===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*A,0),u.push(0,A,0),p.push(.5,.5),g++;let L=g;for(let D=0;D<=s;D++){let C=D/s*l+o,W=Math.cos(C),Z=Math.sin(C);x.x=P*Z,x.y=m*A,x.z=P*W,d.push(x.x,x.y,x.z),u.push(0,A,0),T.x=W*.5+.5,T.y=Z*.5*A+.5,p.push(T.x,T.y),g++}for(let D=0;D<s;D++){let z=b+D,C=L+D;M===!0?h.push(C,C+1,z):h.push(C+1,C,z),S+=3}c.addGroup(f,S,M===!0?1:2),f+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bs=class i extends Pn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ao=class i extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let v=new I,M=new I,b=new I;for(let T=0;T<t.length;T+=3)p(t[T+0],v),p(t[T+1],M),p(t[T+2],b),l(v,M,b,_)}function l(_,v,M,b){let T=b+1,x=[];for(let S=0;S<=T;S++){x[S]=[];let P=_.clone().lerp(M,S/T),A=v.clone().lerp(M,S/T),L=T-S;for(let D=0;D<=L;D++)D===0&&S===T?x[S][D]=P:x[S][D]=P.clone().lerp(A,D/L)}for(let S=0;S<T;S++)for(let P=0;P<2*(T-S)-1;P++){let A=Math.floor(P/2);P%2===0?(u(x[S][A+1]),u(x[S+1][A]),u(x[S][A])):(u(x[S][A+1]),u(x[S+1][A+1]),u(x[S+1][A]))}}function c(_){let v=new I;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let _=new I;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];let M=m(_)/2/Math.PI+.5,b=f(_)/Math.PI+.5;a.push(M,1-b)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let v=a[_+0],M=a[_+2],b=a[_+4],T=Math.max(v,M,b),x=Math.min(v,M,b);T>.9&&x<.1&&(v<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function p(_,v){let M=_*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function g(){let _=new I,v=new I,M=new I,b=new I,T=new te,x=new te,S=new te;for(let P=0,A=0;P<r.length;P+=9,A+=6){_.set(r[P+0],r[P+1],r[P+2]),v.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),T.set(a[A+0],a[A+1]),x.set(a[A+2],a[A+3]),S.set(a[A+4],a[A+5]),b.copy(_).add(v).add(M).divideScalar(3);let L=m(b);y(T,A+0,_,L),y(x,A+2,v,L),y(S,A+4,M,L)}}function y(_,v,M,b){b<0&&_.x===1&&(a[v]=_.x-1),M.x===0&&M.z===0&&(a[v]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new te:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Tt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(at(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(at(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},zs=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new te){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oo=class extends zs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var nu=new I,iu=new I,nc=new Gc,ic=new Gc,sc=new Gc,qn=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(iu.subVectors(s[0],s[1]).add(s[0]),c=iu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(nu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=nu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),nc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),ic.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),sc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ic.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),sc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(nc.calc(l),ic.calc(l),sc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function su(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Kf(i,e){let t=1-i;return t*t*e}function Qf(i,e){return 2*(1-i)*i*e}function jf(i,e){return i*i*e}function dr(i,e,t,n){return Kf(i,e)+Qf(i,t)+jf(i,n)}function ep(i,e){let t=1-i;return t*t*t*e}function tp(i,e){let t=1-i;return 3*t*t*i*e}function np(i,e){return 3*(1-i)*i*i*e}function ip(i,e){return i*i*i*e}function fr(i,e,t,n,s){return ep(i,e)+tp(i,t)+np(i,n)+ip(i,s)}var Rr=class extends bn{constructor(e=new te,t=new te,n=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new te){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,s.x,r.x,a.x,o.x),fr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends bn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(e,s.x,r.x,a.x,o.x),fr(e,s.y,r.y,a.y,o.y),fr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cr=class extends bn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends bn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pr=class extends bn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(dr(e,s.x,r.x,a.x),dr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ir=class extends bn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(dr(e,s.x,r.x,a.x),dr(e,s.y,r.y,a.y),dr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lr=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(su(o,l.x,c.x,h.x,d.x),su(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},ho=Object.freeze({__proto__:null,ArcCurve:oo,CatmullRomCurve3:qn,CubicBezierCurve:Rr,CubicBezierCurve3:lo,EllipseCurve:zs,LineCurve:Cr,LineCurve3:co,QuadraticBezierCurve:Pr,QuadraticBezierCurve3:Ir,SplineCurve:Lr}),uo=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ho[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ho[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Dr=class extends uo{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Cr(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Pr(this.currentPoint.clone(),new te(e,t),new te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Rr(this.currentPoint.clone(),new te(e,t),new te(n,s),new te(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Lr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new zs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hi=class extends Dr{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Dr().fromJSON(s))}return this}};function sp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=nd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=cp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let p=i[u],g=i[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Nr(r,a,t,o,l,c,0),a}function nd(i,e,t,n,s){let r;if(s===yp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=ru(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ru(a/n|0,i[a],i[a+1],r);return r&&Hs(r,r.next)&&(Fr(r),r=r.next),r}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hs(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Nr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&pp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ap(i,n,s,r):rp(i)){e.push(l.i,i.i,c.i),Fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=op($i(i),e),Nr(i,e,t,n,s,r,2)):a===2&&lp(i,e,t,n,s,r):Nr($i(i),e,t,n,s,r,1);break}}}function rp(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&cr(s,o,r,l,a,c,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ap(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,p=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),f=uc(p,g,e,t,n),_=uc(y,m,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=f&&M&&M.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&cr(o,h,l,d,c,u,v.x,v.y)&&Dt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=p&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&cr(o,h,l,d,c,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&cr(o,h,l,d,c,u,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&cr(o,h,l,d,c,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function op(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Hs(n,s)&&sd(n,t,t.next,s)&&Ur(n,s)&&Ur(s,n)&&(e.push(n.i,t.i,s.i),Fr(t),Fr(t.next),t=i=s),t=t.next}while(t!==i);return $i(t)}function lp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_p(a,o)){let l=rd(a,o);a=$i(a,a.next),l=$i(l,l.next),Nr(a,e,t,n,s,r,0),Nr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=nd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gp(c))}s.sort(hp);for(let r=0;r<s.length;r++)t=up(s[r],t);return t}function hp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function up(i,e){let t=dp(i,e);if(!t)return e;let n=rd(t,i);return $i(n,n.next),$i(t,t.next)}function dp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Hs(i,t))return t;do{if(Hs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&id(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ur(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&fp(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function fp(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function pp(i,e,t,n){let s=i;do s.z===0&&(s.z=uc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mp(s)}function mp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function uc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function id(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function cr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&id(i,e,t,n,s,r,a,o)}function _p(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xp(i,e)&&(Ur(i,e)&&Ur(e,i)&&vp(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Hs(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hs(i,e){return i.x===e.x&&i.y===e.y}function sd(i,e,t,n){let s=Ba(Dt(i,e,t)),r=Ba(Dt(i,e,n)),a=Ba(Dt(t,n,i)),o=Ba(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&Oa(i,t,e)||r===0&&Oa(i,n,e)||a===0&&Oa(t,i,n)||o===0&&Oa(t,e,n))}function Oa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ba(i){return i>0?1:i<0?-1:0}function xp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&sd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ur(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function vp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rd(i,e){let t=dc(i.i,i.x,i.y),n=dc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ru(i,e,t,n){let s=dc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var fc=class{static triangulate(e,t,n=2){return sp(e,t,n)}},Gn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];au(e),ou(n,e);let a=e.length;t.forEach(au);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ou(n,t[l]);let o=fc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function au(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ou(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ks=class i extends wt{constructor(e=new hi([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Mp,v,M=!1,b,T,x,S;if(f){v=f.getSpacedPoints(h),M=!0,u=!1;let se=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(h,se),T=new I,x=new I,S=new I}u||(m=0,p=0,g=0,y=0);let P=o.extractPoints(c),A=P.shape,L=P.holes;if(!Gn.isClockWise(A)){A=A.reverse();for(let se=0,_e=L.length;se<_e;se++){let fe=L[se];Gn.isClockWise(fe)&&(L[se]=fe.reverse())}}function z(se){let fe=10000000000000001e-36,Ae=se[0];for(let xe=1;xe<=se.length;xe++){let je=xe%se.length,Be=se[je],it=Be.x-Ae.x,ht=Be.y-Ae.y,ut=it*it+ht*ht,F=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(Ae.x),Math.abs(Ae.y)),Nt=fe*F*F;if(ut<=Nt){se.splice(je,1),xe--;continue}Ae=Be}}z(A),L.forEach(z);let C=L.length,W=A;for(let se=0;se<C;se++){let _e=L[se];A=A.concat(_e)}function Z(se,_e,fe){return _e||Ye("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(_e,fe)}let V=A.length;function ae(se,_e,fe){let Ae,xe,je,Be=se.x-_e.x,it=se.y-_e.y,ht=fe.x-se.x,ut=fe.y-se.y,F=Be*Be+it*it,Nt=Be*ut-it*ht;if(Math.abs(Nt)>Number.EPSILON){let st=Math.sqrt(F),Le=Math.sqrt(ht*ht+ut*ut),de=_e.x-it/st,lt=_e.y+Be/st,ue=fe.x-ut/Le,Ne=fe.y+ht/Le,R=((ue-de)*ut-(Ne-lt)*ht)/(Be*ut-it*ht);Ae=de+Be*R-se.x,xe=lt+it*R-se.y;let E=Ae*Ae+xe*xe;if(E<=2)return new te(Ae,xe);je=Math.sqrt(E/2)}else{let st=!1;Be>Number.EPSILON?ht>Number.EPSILON&&(st=!0):Be<-Number.EPSILON?ht<-Number.EPSILON&&(st=!0):Math.sign(it)===Math.sign(ut)&&(st=!0),st?(Ae=-it,xe=Be,je=Math.sqrt(F)):(Ae=Be,xe=it,je=Math.sqrt(F/2))}return new te(Ae/je,xe/je)}let O=[];for(let se=0,_e=W.length,fe=_e-1,Ae=se+1;se<_e;se++,fe++,Ae++)fe===_e&&(fe=0),Ae===_e&&(Ae=0),O[se]=ae(W[se],W[fe],W[Ae]);let q=[],H,k=O.concat();for(let se=0,_e=C;se<_e;se++){let fe=L[se];H=[];for(let Ae=0,xe=fe.length,je=xe-1,Be=Ae+1;Ae<xe;Ae++,je++,Be++)je===xe&&(je=0),Be===xe&&(Be=0),H[Ae]=ae(fe[Ae],fe[je],fe[Be]);q.push(H),k=k.concat(H)}let j;if(m===0)j=Gn.triangulateShape(W,L);else{let se=[],_e=[];for(let fe=0;fe<m;fe++){let Ae=fe/m,xe=p*Math.cos(Ae*Math.PI/2),je=g*Math.sin(Ae*Math.PI/2)+y;for(let Be=0,it=W.length;Be<it;Be++){let ht=Z(W[Be],O[Be],je);Re(ht.x,ht.y,-xe),Ae===0&&se.push(ht)}for(let Be=0,it=C;Be<it;Be++){let ht=L[Be];H=q[Be];let ut=[];for(let F=0,Nt=ht.length;F<Nt;F++){let st=Z(ht[F],H[F],je);Re(st.x,st.y,-xe),Ae===0&&ut.push(st)}Ae===0&&_e.push(ut)}}j=Gn.triangulateShape(se,_e)}let B=j.length,ie=g+y;for(let se=0;se<V;se++){let _e=u?Z(A[se],k[se],ie):A[se];M?(x.copy(b.normals[0]).multiplyScalar(_e.x),T.copy(b.binormals[0]).multiplyScalar(_e.y),S.copy(v[0]).add(x).add(T),Re(S.x,S.y,S.z)):Re(_e.x,_e.y,0)}for(let se=1;se<=h;se++)for(let _e=0;_e<V;_e++){let fe=u?Z(A[_e],k[_e],ie):A[_e];M?(x.copy(b.normals[se]).multiplyScalar(fe.x),T.copy(b.binormals[se]).multiplyScalar(fe.y),S.copy(v[se]).add(x).add(T),Re(S.x,S.y,S.z)):Re(fe.x,fe.y,d/h*se)}for(let se=m-1;se>=0;se--){let _e=se/m,fe=p*Math.cos(_e*Math.PI/2),Ae=g*Math.sin(_e*Math.PI/2)+y;for(let xe=0,je=W.length;xe<je;xe++){let Be=Z(W[xe],O[xe],Ae);Re(Be.x,Be.y,d+fe)}for(let xe=0,je=L.length;xe<je;xe++){let Be=L[xe];H=q[xe];for(let it=0,ht=Be.length;it<ht;it++){let ut=Z(Be[it],H[it],Ae);M?Re(ut.x,ut.y+v[h-1].y,v[h-1].x+fe):Re(ut.x,ut.y,d+fe)}}}le(),ge();function le(){let se=s.length/3;if(u){let _e=0,fe=V*_e;for(let Ae=0;Ae<B;Ae++){let xe=j[Ae];ft(xe[2]+fe,xe[1]+fe,xe[0]+fe)}_e=h+m*2,fe=V*_e;for(let Ae=0;Ae<B;Ae++){let xe=j[Ae];ft(xe[0]+fe,xe[1]+fe,xe[2]+fe)}}else{for(let _e=0;_e<B;_e++){let fe=j[_e];ft(fe[2],fe[1],fe[0])}for(let _e=0;_e<B;_e++){let fe=j[_e];ft(fe[0]+V*h,fe[1]+V*h,fe[2]+V*h)}}n.addGroup(se,s.length/3-se,0)}function ge(){let se=s.length/3,_e=0;he(W,_e),_e+=W.length;for(let fe=0,Ae=L.length;fe<Ae;fe++){let xe=L[fe];he(xe,_e),_e+=xe.length}n.addGroup(se,s.length/3-se,1)}function he(se,_e){let fe=se.length;for(;--fe>=0;){let Ae=fe,xe=fe-1;xe<0&&(xe=se.length-1);for(let je=0,Be=h+m*2;je<Be;je++){let it=V*je,ht=V*(je+1),ut=_e+Ae+it,F=_e+xe+it,Nt=_e+xe+ht,st=_e+Ae+ht;we(ut,F,Nt,st)}}}function Re(se,_e,fe){l.push(se),l.push(_e),l.push(fe)}function ft(se,_e,fe){ke(se),ke(_e),ke(fe);let Ae=s.length/3,xe=_.generateTopUV(n,s,Ae-3,Ae-2,Ae-1);Ze(xe[0]),Ze(xe[1]),Ze(xe[2])}function we(se,_e,fe,Ae){ke(se),ke(_e),ke(Ae),ke(_e),ke(fe),ke(Ae);let xe=s.length/3,je=_.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);Ze(je[0]),Ze(je[1]),Ze(je[3]),Ze(je[1]),Ze(je[2]),Ze(je[3])}function ke(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function Ze(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ho[s.type]().fromJSON(s)),new i(n,e.options)}},Mp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new te(r,a),new te(o,l),new te(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new te(a,1-l),new te(c,1-d),new te(u,1-g),new te(y,1-f)]:[new te(o,1-l),new te(h,1-d),new te(p,1-g),new te(m,1-f)]}};function Sp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Or=class i extends ao{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ji=class i extends wt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new I,u=new te,p=new I,g=new I,y=new I,m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let _=0;_<=t;_++){let v=n+_*h*s,M=Math.sin(v),b=Math.cos(v);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*M,d.y=e[T].y,d.z=e[T].x*b,a.push(d.x,d.y,d.z),u.x=_/t,u.y=T/(e.length-1),o.push(u.x,u.y);let x=l[3*T+0]*M,S=l[3*T+1],P=l[3*T+0]*b;c.push(x,S,P)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let M=v+_*e.length,b=M,T=M+e.length,x=M+e.length+1,S=M+1;r.push(b,T,S),r.push(x,S,T)}this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("uv",new $e(o,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var on=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let _=f*u-a;for(let v=0;v<c;v++){let M=v*d-r;g.push(M,-_,0),y.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let v=_+c*f,M=_+c*(f+1),b=_+1+c*(f+1),T=_+1+c*f;p.push(v,M,T),p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Br=class i extends wt{constructor(e=new hi([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(a,2));function c(h){let d=s.length/3,u=h.extractPoints(t),p=u.shape,g=u.holes;Gn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let _=g[m];Gn.isClockWise(_)===!0&&(g[m]=_.reverse())}let y=Gn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let _=g[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){let _=p[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,f=y.length;m<f;m++){let _=y[m],v=_[0]+d,M=_[1]+d,b=_[2]+d;n.push(v,M,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return bp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function bp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ki=class i extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let _=[],v=f/n,M=a+v*o,b=e*Math.cos(M),T=Math.sqrt(e*e-b*b),x=0;f===0&&a===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let P=S/t,A=s+P*r;d.x=-T*Math.cos(A),d.y=b,d.z=T*Math.sin(A),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(P+x,1-v),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){let v=h[f][_+1],M=h[f][_],b=h[f+1][_],T=h[f+1][_+1];(f!==0||a>0)&&p.push(v,M,T),(f!==n-1||l<Math.PI)&&p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qi=class i extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,p=new I,g=new I;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let f=0;f<=s;f++){let _=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(_),p.y=(e+t*Math.cos(m))*Math.sin(_),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let f=(s+1)*y+m-1,_=(s+1)*(y-1)+m-1,v=(s+1)*(y-1)+m,M=(s+1)*y+m;l.push(f,_,M),l.push(_,v,M)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ui=class i extends wt{constructor(e=new Ir(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new te,h=new I,d=[],u=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(p,2));function y(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),f()}function m(v){h=e.getPointAt(v/t,h);let M=a.normals[v],b=a.binormals[v];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,S=Math.sin(x),P=-Math.cos(x);l.x=P*M.x+S*b.x,l.y=P*M.y+S*b.y,l.z=P*M.z+S*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let b=(s+1)*(v-1)+(M-1),T=(s+1)*v+(M-1),x=(s+1)*v+M,S=(s+1)*(v-1)+M;g.push(b,T,S),g.push(T,x,S)}}function _(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ho[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(lu(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(lu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=rs(i[t]);for(let s in n)e[s]=n[s]}return e}function lu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ep(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var gi={clone:rs,merge:cn},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(s.value);break;case"v2":this.uniforms[n].value=new te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gs=class extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ln=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qe=class extends ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var fo=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},po=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function za(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lc:r=e,o=2*t-n;break;case cc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:a=e,l=2*n-t;break;case cc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,f=-u*m+2*u*y-u*g,_=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*y+.5*g,M=p*m-p*y;for(let b=0;b!==o;++b)r[b]=f*a[h+b]+_*a[c+b]+v*a[l+b]+M*a[d+b];return r}},go=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},_o=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xo=class extends Ci{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,p=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],f=p*u+g*2,_=d[f],v=d[f+1],M=e*u+g*2,b=h[M],T=h[M+1],x=Rp(n,t,_,b,s);r[g]=ad(x,y,v,T,m)}return r}};function ad(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ap(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Rp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=ad(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Ap(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var En=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ss(t,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ss(e.times,Array),values:Ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),za(e.settings)&&(n.settings={inTangents:Ss(e.settings.inTangents,Array),outTangents:Ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break;case ac:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;za(this.settings)&&(cu(this.settings.inTangents,e),cu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;za(this.settings)&&(hu(this.settings.inTangents,e),hu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&_f(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,za(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function hu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=ja;var Pi=class extends En{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=pr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};vo.prototype.ValueTypeName="color";var yo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};yo.prototype.ValueTypeName="number";var Mo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},zr=class extends En{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends En{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=pr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};So.prototype.ValueTypeName="vector";var Wa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(uu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!uu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function uu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var bo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},od=new bo,Vs=class{constructor(e){this.manager=e!==void 0?e:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=new WeakMap,Eo=class extends Vs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=bs.get(a);d===void 0&&(d=[],bs.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Ps("img");function l(){h(),t&&t(this);let d=bs.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onLoad&&p.onLoad(this)}bs.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Wa.remove(`image:${e}`);let u=bs.get(this)||[];for(let p=0;p<u.length;p++){let g=u[p];g.onError&&g.onError(d)}bs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wa.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Hr=class extends Vs{constructor(e){super(e)}load(e,t,n,s){let r=new an,a=new Eo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},kr=class extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gr=class extends kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},rc=new Tt,du=new I,fu=new I,To=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Cs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ha=new I,ka=new Wn,Hn=new I,Vr=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ha,ka,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,ka,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ha,ka,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,ka,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new I,pu=new te,mu=new te,rn=class extends Vr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pc=class extends To{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Yi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ji=class extends kr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new pc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Ws=class extends Vr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Es=-90,Ts=1,Xs=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Es,Ts,e,t);s.layers=this.layers,this.add(s);let r=new rn(Es,Ts,e,t);r.layers=this.layers,this.add(r);let a=new rn(Es,Ts,e,t);a.layers=this.layers,this.add(a);let o=new rn(Es,Ts,e,t);o.layers=this.layers,this.add(o);let l=new rn(Es,Ts,e,t);l.layers=this.layers,this.add(l);let c=new rn(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wo=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Wr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Cp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Cp(){this._document.hidden===!1&&this.reset()}var Wc="\\[\\]\\.:\\/",Pp=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",Ip="[^"+Wc.replace("\\.","")+"]",Lp=/((?:WC+[\/:])*)/.source.replace("WC",Xc),Dp=/(WCOD+)?/.source.replace("WCOD",Ip),Np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),Up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),Fp=new RegExp("^"+Lp+Dp+Np+Up+"$"),Op=["material","materials","bones","map"],mc=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pp,"")}static parseTrackName(e){let t=Fp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Op.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=mc;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hx=new Float32Array(1);var gu=new Tt,Xr=class{constructor(e,t,n=0,s=1/0){this.ray=new Ai(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(e,t=!0,n=[]){return gc(e,this,n,t),n.sort(_u),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)gc(e[s],this,n,t);return n.sort(_u),n}};function _u(i,e){return i.distance-e.distance}function gc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)gc(r[a],e,t,!0)}}var Kc=class Kc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Kc.prototype.isMatrix2=!0;var _c=Kc;function qc(i,e,t,n){let s=Bp(n);switch(t){case Cc:return i*e;case Ic:return i*e/s.components*s.byteLength;case Uo:return i*e/s.components*s.byteLength;case Di:return i*e*2/s.components*s.byteLength;case Fo:return i*e*2/s.components*s.byteLength;case Pc:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Oo:return i*e*4/s.components*s.byteLength;case jr:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zo:case ko:return Math.max(i,16)*Math.max(e,8)/4;case Bo:case Ho:return Math.max(i,8)*Math.max(e,8)/2;case Go:case Vo:case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wo:case ia:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ll:case cl:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ul:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sa:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bp(i){switch(i){case pn:case Tc:return{byteLength:1,components:1};case $s:case wc:case Wt:return{byteLength:2,components:1};case Do:case No:return{byteLength:2,components:4};case Un:case Lo:case Fn:return{byteLength:4,components:1};case Ac:case Rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function Cd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jp=`#ifdef USE_IRIDESCENCE
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
#endif`,em=`#ifdef USE_BUMPMAP
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,Am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Om=`uniform sampler2D dfgLUT;
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
}`,Bm=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
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
#endif`,eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
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
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lg=`#ifdef USE_NORMALMAP
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
#endif`,cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eg=`float getShadowMask() {
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
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform float backgroundBlurriness;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,e0=`uniform vec3 diffuse;
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
}`,t0=`#define LAMBERT
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define MATCAP
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
}`,s0=`#define MATCAP
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
}`,r0=`#define NORMAL
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
}`,a0=`#define NORMAL
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
}`,o0=`#define PHONG
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
}`,l0=`#define PHONG
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
}`,c0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
}`,u0=`#define TOON
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
}`,d0=`#define TOON
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
}`,f0=`uniform float size;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 color;
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
}`,_0=`uniform float rotation;
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
}`,x0=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Hp,alphahash_pars_fragment:kp,alphamap_fragment:Gp,alphamap_pars_fragment:Vp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Zp,batching_vertex:$p,begin_vertex:Jp,beginnormal_vertex:Kp,bsdfs:Qp,iridescence_fragment:jp,bumpmap_pars_fragment:em,clipping_planes_fragment:tm,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:am,color_pars_vertex:om,color_vertex:lm,common:cm,defaultnormal_vertex:hm,displacementmap_pars_vertex:um,displacementmap_vertex:dm,emissivemap_fragment:fm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:gm,envmap_fragment:_m,envmap_common_pars_fragment:xm,envmap_pars_fragment:vm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Im,envmap_vertex:Mm,fog_vertex:Sm,fog_pars_vertex:bm,fog_fragment:Em,fog_pars_fragment:Tm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Am,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Cm,lights_pars_begin:Pm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Nm,lights_phong_pars_fragment:Um,lights_physical_fragment:Fm,lights_physical_pars_fragment:Om,lights_fragment_begin:Bm,lights_fragment_maps:zm,lights_fragment_end:Hm,lightprobes_pars_fragment:km,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:Wm,logdepthbuf_vertex:Xm,map_fragment:qm,map_pars_fragment:Ym,map_particle_fragment:Zm,map_particle_pars_fragment:$m,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Km,morphinstance_vertex:Qm,morphcolor_vertex:jm,morphnormal_vertex:eg,morphtarget_pars_vertex:tg,morphtarget_vertex:ng,normal_fragment_begin:ig,normal_fragment_maps:sg,normal_pars_fragment:rg,normal_pars_vertex:ag,normal_vertex:og,normalmap_pars_fragment:lg,clearcoat_normal_fragment_begin:cg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:dg,opaque_fragment:fg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:_g,dithering_pars_fragment:xg,roughnessmap_fragment:vg,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:Sg,shadowmap_vertex:bg,shadowmask_pars_fragment:Eg,skinbase_vertex:Tg,skinning_pars_vertex:wg,skinning_vertex:Ag,skinnormal_vertex:Rg,specularmap_fragment:Cg,specularmap_pars_fragment:Pg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Lg,transmission_fragment:Dg,transmission_pars_fragment:Ng,uv_pars_fragment:Ug,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:Bg,background_vert:zg,background_frag:Hg,backgroundCube_vert:kg,backgroundCube_frag:Gg,cube_vert:Vg,cube_frag:Wg,depth_vert:Xg,depth_frag:qg,distance_vert:Yg,distance_frag:Zg,equirect_vert:$g,equirect_frag:Jg,linedashed_vert:Kg,linedashed_frag:Qg,meshbasic_vert:jg,meshbasic_frag:e0,meshlambert_vert:t0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:a0,meshphong_vert:o0,meshphong_frag:l0,meshphysical_vert:c0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:d0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:_0,sprite_frag:x0},Ce={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Jn={basic:{uniforms:cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:cn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:cn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:cn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:cn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:cn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:cn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:cn([Ce.common,Ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:cn([Ce.lights,Ce.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Jn.physical={uniforms:cn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var gl={r:0,b:0,g:0},v0=new Tt,Pd=new et;Pd.set(-1,0,0,0,1,0,0,0,1);function y0(i,e,t,n,s,r){let a=new Se(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){let M=_.backgroundBlurriness>0;v=e.get(v,M)}return v}function g(_){let v=!1,M=p(_);M===null?m(a,o):M&&M.isColor&&(m(M,1),v=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(_,v){let M=p(v);M&&M.isCubeTexture?(c===void 0&&(c=new vt(new Sn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:rs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pd),c.material.toneMapped=dt.getTransfer(M.colorSpace)!==_t,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new vt(new on(2,2),new Gt({name:"BackgroundMaterial",uniforms:rs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=dt.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(gl,Vc(i)),t.buffers.color.setClear(gl.r,gl.g,gl.b,v,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:y,dispose:f}}function M0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,D,z,C,W){let Z=!1,V=d(L,C,z,D);r!==V&&(r=V,c(r.object)),Z=p(L,C,z,W),Z&&g(L,C,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(L,D,z,C),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,D,z,C){let W=C.wireframe===!0,Z=n[D.id];Z===void 0&&(Z={},n[D.id]=Z);let V=L.isInstancedMesh===!0?L.id:0,ae=Z[V];ae===void 0&&(ae={},Z[V]=ae);let O=ae[z.id];O===void 0&&(O={},ae[z.id]=O);let q=O[W];return q===void 0&&(q=u(l()),O[W]=q),q}function u(L){let D=[],z=[],C=[];for(let W=0;W<t;W++)D[W]=0,z[W]=0,C[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:C,object:L,attributes:{},index:null}}function p(L,D,z,C){let W=r.attributes,Z=D.attributes,V=0,ae=z.getAttributes();for(let O in ae)if(ae[O].location>=0){let H=W[O],k=Z[O];if(k===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),H===void 0||H.attribute!==k||k&&H.data!==k.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function g(L,D,z,C){let W={},Z=D.attributes,V=0,ae=z.getAttributes();for(let O in ae)if(ae[O].location>=0){let H=Z[O];H===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));let k={};k.attribute=H,H&&H.data&&(k.data=H.data),W[O]=k,V++}r.attributes=W,r.attributesNum=V,r.index=C}function y(){let L=r.newAttributes;for(let D=0,z=L.length;D<z;D++)L[D]=0}function m(L){f(L,0)}function f(L,D){let z=r.newAttributes,C=r.enabledAttributes,W=r.attributeDivisors;z[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),W[L]!==D&&(i.vertexAttribDivisor(L,D),W[L]=D)}function _(){let L=r.newAttributes,D=r.enabledAttributes;for(let z=0,C=D.length;z<C;z++)D[z]!==L[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function v(L,D,z,C,W,Z,V){V===!0?i.vertexAttribIPointer(L,D,z,W,Z):i.vertexAttribPointer(L,D,z,C,W,Z)}function M(L,D,z,C){y();let W=C.attributes,Z=z.getAttributes(),V=D.defaultAttributeValues;for(let ae in Z){let O=Z[ae];if(O.location>=0){let q=W[ae];if(q===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let H=q.normalized,k=q.itemSize,j=e.get(q);if(j===void 0)continue;let B=j.buffer,ie=j.type,le=j.bytesPerElement,ge=ie===i.INT||ie===i.UNSIGNED_INT||q.gpuType===Lo;if(q.isInterleavedBufferAttribute){let he=q.data,Re=he.isInterleavedBuffer===!0?he.stride:he.itemSize,ft=q.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let we=0;we<O.locationSize;we++)f(O.location+we,he.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let we=0;we<O.locationSize;we++)m(O.location+we);i.bindBuffer(i.ARRAY_BUFFER,B);for(let we=0;we<O.locationSize;we++)v(O.location+we,k/O.locationSize,ie,H,Re*le,(ft+k/O.locationSize*we)*le,ge)}else{if(q.isInstancedBufferAttribute){for(let he=0;he<O.locationSize;he++)f(O.location+he,q.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let he=0;he<O.locationSize;he++)m(O.location+he);i.bindBuffer(i.ARRAY_BUFFER,B);for(let he=0;he<O.locationSize;he++)v(O.location+he,k/O.locationSize,ie,H,k*le,k/O.locationSize*he*le,ge)}}else if(V!==void 0){let H=V[ae];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(O.location,H);break;case 3:i.vertexAttrib3fv(O.location,H);break;case 4:i.vertexAttrib4fv(O.location,H);break;default:i.vertexAttrib1fv(O.location,H)}}}}_()}function b(){P();for(let L in n){let D=n[L];for(let z in D){let C=D[z];for(let W in C){let Z=C[W];for(let V in Z)h(Z[V].object),delete Z[V];delete C[W]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let z in D){let C=D[z];for(let W in C){let Z=C[W];for(let V in Z)h(Z[V].object),delete Z[V];delete C[W]}}delete n[L.id]}function x(L){for(let D in n){let z=n[D];for(let C in z){let W=z[C];if(W[L.id]===void 0)continue;let Z=W[L.id];for(let V in Z)h(Z[V].object),delete Z[V];delete W[L.id]}}}function S(L){for(let D in n){let z=n[D],C=L.isInstancedMesh===!0?L.id:0,W=z[C];if(W!==void 0){for(let Z in W){let V=W[Z];for(let ae in V)h(V[ae].object),delete V[ae];delete W[Z]}delete z[C],Object.keys(z).length===0&&delete n[D]}}}function P(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function S0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function b0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==On&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==pn&&x!==Fn&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Xe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,maxSamples:b,samples:T}}function E0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yn,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,v=_*4,M=f.clippingState||null;l.value=M,M=h(g,u,v,p);for(let b=0;b!==v;++b)M[b]=t[b];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,M=p;v!==y;++v,M+=4)a.copy(d[v]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var oa=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sn(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:di});r.uniforms.tEquirect.value=t;let a=new vt(s,r),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=dn),new Xs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ld=256,T0=3,w0=20,Id=256,Ld=16,A0=3,R0=new I,C0=new Se,Ks=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xs(1,10,null),this._boxMesh=new vt(new Sn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=R0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(C0));let m=new Xs(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ld,Bc(e))}_fromTexture(e,t){e.mapping===is||e.mapping===Zs?this._setSize(e.image.length===0?ld:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=cd(e,!1,!1),n=Math.log2(e)-T0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=cd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===is||e.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=P0(),this._integrationMaterial=I0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ld);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-A0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Id*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=L0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function cd(i,e,t){return new oa(i,{minFilter:fi,generateMipmaps:e,type:Wt,colorSpace:mr,depthBuffer:t})}function la(i,e,t){return new Gt({name:i,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:Qt,blending:di,depthTest:!1,depthWrite:!1})}function P0(){return la("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Id}u

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
	`)}function I0(){return la("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ld}},`

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
	`)}function L0(){return la("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${w0}
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
	`)}function hd(){return la("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ud(){return la("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function D0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Co||p===Po)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new oa(g.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,g=p===Co||p===Po,y=p===is||p===Zs;if(g||y){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Ks(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||y&&_&&l(_)?(n===null&&(n=new Ks(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Co?u.mapping=is:p===Po&&(u.mapping=Zs),u}function l(u){let p=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function N0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&qi("WebGLRenderer: "+n+" extension not supported."),s}}}function U0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(g){let y=g.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function d(g){let y=g.index,m=g.attributes.position,f=0;if(m===void 0)return;let _=y!==null?y.array.length:m.array.length/3-1,v=m.count>=65535?yr:vr,M=new v(Math.ceil(_/3)*6,1),b=M.array;if(y!==null){let x=y.array;f=y.version;for(let S=0,P=0;S<_;S+=3){let A=x[S+0],L=x[S+1],D=x[S+2];b[P++]=A,b[P++]=L,b[P++]=L,b[P++]=D,b[P++]=D,b[P++]=A}}else{f=m.version;for(let x=0,S=0;x<_;x+=3){let P=x+0,A=x+1,L=x+2;b[S++]=P,b[S++]=A,b[S++]=A,b[S++]=L,b[S++]=L,b[S++]=P}}M.version=f;let T=r.get(g);T&&e.remove(T),r.set(g,M)}function u(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&d(g)}else d(g);return r.get(g)}function p(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function F0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let y=0;for(let m=0;m<p;m++)y+=u[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function O0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function B0(i,e,t){let n=new WeakMap,s=new Pt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let M=o.attributes.position.count*v,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*b*4*d),x=new xr(T,M,b,d);x.type=Fn,x.needsUpdate=!0;let S=v*4;for(let A=0;A<d;A++){let L=m[A],D=f[A],z=_[A],C=M*b*4*A;for(let W=0;W<L.count;W++){let Z=W*S;p===!0&&(s.fromBufferAttribute(L,W),T[C+Z+0]=s.x,T[C+Z+1]=s.y,T[C+Z+2]=s.z,T[C+Z+3]=0),g===!0&&(s.fromBufferAttribute(D,W),T[C+Z+4]=s.x,T[C+Z+5]=s.y,T[C+Z+6]=s.z,T[C+Z+7]=0),y===!0&&(s.fromBufferAttribute(z,W),T[C+Z+8]=s.x,T[C+Z+9]=s.y,T[C+Z+10]=s.z,T[C+Z+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new te(M,b)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function z0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var H0={[qr]:"LINEAR_TONE_MAPPING",[Yr]:"REINHARD_TONE_MAPPING",[Zr]:"CINEON_TONE_MAPPING",[ns]:"ACES_FILMIC_TONE_MAPPING",[Jr]:"AGX_TONE_MAPPING",[Kr]:"NEUTRAL_TONE_MAPPING",[$r]:"CUSTOM_TONE_MAPPING"};function k0(i,e,t,n,s,r){let a=new Ot(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new wt;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));let d=new Gs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new vt(h,d),p=new Ws(-1,1,1,-1,0,1),g=null,y=null,m=!1,f,_=null,v=[],M=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),l!==null&&l.setSize(b,T);for(let x=0;x<v.length;x++){let S=v[x];S.setSize&&S.setSize(b,T)}},this.setEffects=function(b){v=b,M=v.length>0&&v[0].isRenderPass===!0;let T=a.width,x=a.height;v.length>0&&o===null&&(o=new Ot(T,x,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new Ot(T,x,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&v.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new ci(T,x),r===!0&&(c.format=pi,c.type=ss)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<v.length;P++){let A=v[P];A.setSize&&A.setSize(T,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(b,T){if(m||b.toneMapping===Zn&&v.length===0)return!1;if(_=T,T!==null){let x=T.width,S=T.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return M===!1&&b.setRenderTarget(a),f=b.toneMapping,b.toneMapping=Zn,!0},this.hasRenderPass=function(){return M},this.end=function(b,T){b.toneMapping=f,m=!0;let x=a,S=o;for(let P=0;P<v.length;P++){let A=v[P];A.enabled!==!1&&(A.render(b,S,x,T),A.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(g!==b.outputColorSpace||y!==b.toneMapping){g=b.outputColorSpace,y=b.toneMapping,d.defines={},dt.getTransfer(g)===_t&&(d.defines.SRGB_TRANSFER="");let P=H0[y];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(_),b.render(u,p),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Dd=new an,Nd=new ci(1,1),Ud=new Tr(1),Fd=new xr,Od=new no,Bd=new Er,dd=[],fd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=dd[s];if(r===void 0&&(r=new Float32Array(s),dd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vl(i,e){let t=fd[e];t===void 0&&(t=new Int32Array(e),fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function W0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function X0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function q0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;gd.set(n),i.uniformMatrix2fv(this.addr,!1,gd),qt(t,n)}}function Y0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;md.set(n),i.uniformMatrix3fv(this.addr,!1,md),qt(t,n)}}function Z0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;pd.set(n),i.uniformMatrix4fv(this.addr,!1,pd),qt(t,n)}}function $0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function j0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function yl(i){return i.version===0&&(i.compareFunction=Nc,i.needsUpdate=!0),i}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=yl(Nd):r=Dd,t.setTexture2D(e||r,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Od,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=yl(Ud):r=Bd,t.setTextureCube(e||r,s)}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fd,s)}function o_(i){switch(i){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return $0;case 35667:case 35671:return J0;case 35668:case 35672:return K0;case 35669:case 35673:return Q0;case 5125:return j0;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return a_}}function l_(i,e){i.uniform1fv(this.addr,e)}function c_(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function h_(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function u_(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function d_(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f_(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p_(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m_(i,e){i.uniform1iv(this.addr,e)}function g_(i,e){i.uniform2iv(this.addr,e)}function __(i,e){i.uniform3iv(this.addr,e)}function x_(i,e){i.uniform4iv(this.addr,e)}function v_(i,e){i.uniform1uiv(this.addr,e)}function y_(i,e){i.uniform2uiv(this.addr,e)}function M_(i,e){i.uniform3uiv(this.addr,e)}function S_(i,e){i.uniform4uiv(this.addr,e)}function b_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=yl(Nd):a=Dd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function E_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Od,r[a])}function T_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=yl(Ud):a=Bd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function w_(i,e,t){let n=this.cache,s=e.length,r=vl(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Fd,r[a])}function A_(i){switch(i){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return v_;case 36294:return y_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return w_}}var eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}},th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A_(t.type)}},nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function _d(i,e){i.seq.push(e),i.map[e.id]=e}function R_(i,e,t){let n=i.name,s=n.length;for(Qc.lastIndex=0;;){let r=Qc.exec(n),a=Qc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_d(t,c===void 0?new eh(o,i,e):new th(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new nh(o),_d(t,d)),t=d}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);R_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function xd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var C_=37297,P_=0;function I_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var vd=new et;function L_(i){dt._getMatrix(vd,dt.workingColorSpace,i);let e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case gr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+I_(i.getShaderSource(e),o)}else return r}function D_(i,e){let t=L_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var N_={[qr]:"Linear",[Yr]:"Reinhard",[Zr]:"Cineon",[ns]:"ACESFilmic",[Jr]:"AgX",[Kr]:"Neutral",[$r]:"Custom"};function U_(i,e){let t=N_[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _l=new I;function F_(){dt.getLuminanceCoefficients(_l);let i=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function B_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function aa(i){return i!==""}function Md(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Sd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(H_,k_)}function k_(i,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ih(t)}var G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(i){return i.replace(G_,V_)}function V_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ed(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var W_={[es]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function X_(i){return W_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var q_={[Zs]:"ENVMAP_MODE_REFRACTION"};function Y_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":q_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Z_={[bc]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[Hu]:"ENVMAP_BLENDING_ADD"};function $_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Z_[i.combine]||"ENVMAP_BLENDING_NONE"}function J_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=X_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Y_(t),d=$_(t),u=O_(t),p=B_(r),g=s.createProgram(),y,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(aa).join(`
`),m.length>0&&(m+=`
`)):(y=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),m=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?ot.tonemapping_pars_fragment:"",t.toneMapping!==Zn?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,D_("linearToOutputTexel",t.outputColorSpace),F_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=ih(a),a=Md(a,t),a=Sd(a,t),o=ih(o),o=Md(o,t),o=Sd(o,t),a=bd(a),o=bd(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=f+y+a,v=f+m+o,M=xd(s,s.VERTEX_SHADER,_),b=xd(s,s.FRAGMENT_SHADER,v);s.attachShader(g,M),s.attachShader(g,b),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",D=s.getShaderInfoLog(M)||"",z=s.getShaderInfoLog(b)||"",C=L.trim(),W=D.trim(),Z=z.trim(),V=!0,ae=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,b);else{let O=yd(s,M,"vertex"),q=yd(s,b,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+O+`
`+q)}else C!==""?Xe("WebGLProgram: Program Info Log:",C):(W===""||Z==="")&&(ae=!1);ae&&(A.diagnostics={runnable:V,programLog:C,vertexShader:{log:W,prefix:y},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(M),s.deleteShader(b),x=new Js(s,g),S=z_(s,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,C_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=b,this}var K_=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rh(e),t.set(e,n)),n}},rh=class{constructor(e){this.id=K_++,this.code=e,this.usedTimes=0}};function Q_(i){return i===Di||i===ia||i===sa}function j_(i,e,t,n,s,r){let a=new Ds,o=new sh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,P,A,L,D){let z=A.fog,C=L.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||W,Z),ae=u[x.type],O=n.precision;x.precision!==null&&(O=n.getMaxPrecision(x.precision),O!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",O,"instead."));let q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,H=q!==void 0?q.length:0,k=0;C.morphAttributes.position!==void 0&&(k=1),C.morphAttributes.normal!==void 0&&(k=2),C.morphAttributes.color!==void 0&&(k=3);let j,B,ie,le;if(ae){let Te=Jn[ae];j=Te.vertexShader,B=Te.fragmentShader}else{j=x.vertexShader,B=x.fragmentShader;let Te=o.getVertexShaderStage(x),nt=o.getFragmentShaderStage(x);o.update(x,Te,nt),ie=Te.id,le=nt.id}let ge=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Re=L.isInstancedMesh===!0,ft=L.isBatchedMesh===!0,we=!!x.map,ke=!!x.matcap,Ze=!!V,se=Ze&&V.isPMREMTexture===!0,_e=!!x.aoMap,fe=!!x.lightMap,Ae=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,je=!!x.displacementMap,Be=!!x.emissiveMap,it=!!x.metalnessMap,ht=!!x.roughnessMap,ut=x.anisotropy>0,F=x.clearcoat>0,Nt=x.diffuseRoughness>0,st=x.dispersion>0,Le=x.retroreflectivity>0,de=x.iridescence>0,lt=x.sheen>0,ue=x.transmission>0,Ne=ut&&!!x.anisotropyMap,R=F&&!!x.clearcoatMap,E=F&&!!x.clearcoatNormalMap,G=F&&!!x.clearcoatRoughnessMap,pe=Nt&&!!x.diffuseRoughnessMap,re=de&&!!x.iridescenceMap,ve=de&&!!x.iridescenceThicknessMap,Me=lt&&!!x.sheenColorMap,Q=lt&&!!x.sheenRoughnessMap,ee=!!x.specularMap,ye=!!x.specularColorMap,N=!!x.specularIntensityMap,ne=ue&&!!x.transmissionMap,K=ue&&!!x.thicknessMap,$=!!x.gradientMap,oe=!!x.alphaMap,ce=x.alphaTest>0,Pe=!!x.alphaHash,We=!!x.extensions,me=Zn;x.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(me=i.toneMapping);let ze=se?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ke={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:j,fragmentShader:B,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:O,batching:ft,batchingColor:ft&&L._colorsTexture!==null,instancing:Re,instancingColor:Re&&L.instanceColor!==null,instancingMorph:Re&&L.morphTexture!==null,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:ke,envMap:Ze,envMapMode:Ze&&V.mapping,envMapPMREM:se,envMapMaxLod:se?ze.length-1:null,envMapSize:se?ze[0].width:null,aoMap:_e,lightMap:fe,bumpMap:Ae,normalMap:xe,displacementMap:je,emissiveMap:Be,normalMapObjectSpace:xe&&x.normalMapType===Vu,normalMapTangentSpace:xe&&x.normalMapType===pl,packedNormalMap:xe&&x.normalMapType===pl&&Q_(x.normalMap.format),metalnessMap:it,roughnessMap:ht,anisotropy:ut,anisotropyMap:Ne,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:G,diffuseRoughness:Nt,diffuseRoughnessMap:pe,dispersion:st,retroreflection:Le,iridescence:de,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:lt,sheenColorMap:Me,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:ye,specularIntensityMap:N,transmission:ue,transmissionMap:ne,thicknessMap:K,gradientMap:$,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:ce,alphaHash:Pe,combine:x.combine,mapUv:we&&p(x.map.channel),aoMapUv:_e&&p(x.aoMap.channel),lightMapUv:fe&&p(x.lightMap.channel),bumpMapUv:Ae&&p(x.bumpMap.channel),normalMapUv:xe&&p(x.normalMap.channel),displacementMapUv:je&&p(x.displacementMap.channel),emissiveMapUv:Be&&p(x.emissiveMap.channel),metalnessMapUv:it&&p(x.metalnessMap.channel),roughnessMapUv:ht&&p(x.roughnessMap.channel),anisotropyMapUv:Ne&&p(x.anisotropyMap.channel),clearcoatMapUv:R&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:re&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(x.sheenRoughnessMap.channel),specularMapUv:ee&&p(x.specularMap.channel),specularColorMapUv:ye&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:ne&&p(x.transmissionMap.channel),thicknessMapUv:K&&p(x.thicknessMap.channel),alphaMapUv:oe&&p(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(xe||ut),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(we||oe),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:k,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bt,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:We&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&x.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function y(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(S,x),f(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function f(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let S=u[x.type],P;if(S){let A=Jn[S];P=gi.clone(A.uniforms)}else P=x.uniforms;return P}function v(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new J_(i,S,x,s),c.push(P),h.set(S,P)),P}function M(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:T}}function ex(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Td(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,y,m,f){let _=i[e];return _===void 0?(_={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:f},i[e]=_):(_.id=u.id,_.object=u,_.geometry=p,_.material=g,_.materialVariant=a(u),_.groupOrder=y,_.renderOrder=u.renderOrder,_.z=m,_.group=f),e++,_}function l(u,p,g,y,m,f,_){_.reversedDepth===!0&&(m=-m);let v=o(u,p,g,y,m,f);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):t.push(v)}function c(u,p,g,y,m,f){let _=o(u,p,g,y,m,f);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):t.unshift(_)}function h(u,p){t.length>1&&t.sort(u||tx),n.length>1&&n.sort(p||Td),s.length>1&&s.sort(p||Td)}function d(){for(let u=e,p=i.length;u<p;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function nx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new wd,i.set(n,[a])):s>=r.length?(a=new wd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ix(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Se};break;case"SpotLight":t={position:new I,direction:new I,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rx=0;function ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ox(i){let e=new ix,t=sx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Tt,a=new Tt;function o(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,_=0,v=0,M=0,b=0,T=0,x=0,S=0,P=0,A=0;c.sort(ax);for(let D=0,z=c.length;D<z;D++){let C=c[D],W=C.color,Z=C.intensity,V=C.distance,ae=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Di?ae=C.shadow.map.texture:ae=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=W.r*Z,d+=W.g*Z,u+=W.b*Z;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],Z);A++}else if(C.isSunLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,H=t.get(C);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[g]=H,n.sunShadowMap[g]=ae;let k=q.getViewportCount();for(let j=0;j<k;j++)n.sunShadowMatrix[y+j]=q.getMatrix(j),n.sunShadowCascade[y+j]=q._cascadeData[j];y+=k,g++}n.sun[p]=O,p++}else if(C.isDirectionalLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let q=C.shadow,H=t.get(C);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=ae,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=O,m++}else if(C.isSpotLight){let O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(W).multiplyScalar(Z),O.distance=V,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[_]=O;let q=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,q.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[_]=q.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=ae,x++}_++}else if(C.isRectAreaLight){let O=e.get(C);O.color.copy(W).multiplyScalar(Z),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[v]=O,v++}else if(C.isPointLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let q=C.shadow,H=t.get(C);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[f]=H,n.pointShadowMap[f]=ae,n.pointShadowMatrix[f]=C.shadow.matrix,T++}n.point[f]=O,f++}else if(C.isHemisphereLight){let O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(Z),O.groundColor.copy(C.groundColor).multiplyScalar(Z),n.hemi[M]=O,M++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==_||L.rectAreaLength!==v||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==S||L.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=m,n.spot.length=_,n.rectArea.length=v,n.point.length=f,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=_,L.rectAreaLength=v,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=S,L.numLightProbes=A,n.version=rx++)}function l(c,h){let d=0,u=0,p=0,g=0,y=0,m=0,f=h.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){let M=c[_];if(M.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),d++}else if(M.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),u++}else if(M.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let b=n.rectArea[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function Ad(i){let e=new ox(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function lx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ad(i),e.set(s,[o])):r>=a.length?(o=new Ad(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
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
}`,ux=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],dx=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Rd=new Tt,ra=new I,jc=new I;function fx(i,e,t){let n=new Ri,s=new te,r=new te,a=new Pt,o=new fo,l=new po,c={},h=t.maxTextureSize,d={[Yn]:Qt,[Qt]:Yn,[Bt]:Bt},u=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:cx,fragmentShader:hx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new vt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=es;let f=this.type;this.render=function(T,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===yu&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=es);let P=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(di),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=f!==this.type;z&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(W=>W.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,W=T.length;C<W;C++){let Z=T[C],V=Z.shadow;if(V===void 0){Xe("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ae=V.getFrameExtents();s.multiply(ae),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,V.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=O,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===qs){if(Z.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ot(s.x,s.y,{format:Di,type:Wt,minFilter:dn,magFilter:dn,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new ci(s.x,s.y,Fn),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=oi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt}else Z.isPointLight?(V.map=new oa(s.x),V.map.depthTexture=new Tr(s.x,Un)):(V.map=new Ot(s.x,s.y),V.map.depthTexture=new ci(s.x,s.y,Un)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=oi,this.type===es?(V.map.depthTexture.compareFunction=O?Dc:Lc,V.map.depthTexture.minFilter=dn,V.map.depthTexture.magFilter=dn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,S);let H=V.camera.layers.mask&4294967294?V.camera.layers:S.layers;for(let k=0;k<q;k++){let j=V.getCamera(k);if(Z.isPointLight){let B=V.camera,ie=V.matrix,le=Z.distance||B.far;le!==B.far&&(B.far=le,B.updateProjectionMatrix()),ra.setFromMatrixPosition(Z.matrixWorld),B.position.copy(ra),jc.copy(B.position),jc.add(ux[k]),B.up.copy(dx[k]),B.lookAt(jc),B.updateMatrixWorld(),ie.makeTranslation(-ra.x,-ra.y,-ra.z),Rd.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Rd,B.coordinateSystem,B.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,k),i.clear();else{k===0&&(i.setRenderTarget(V.map),i.clear());let B=V.getViewport(k);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),D.viewport(a)}n=V.getFrustum(k),M(x,S,j,Z,H,this.type)}V.isPointLightShadow!==!0&&this.type===qs&&_(V,S),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(P,A,L)};function _(T,x){let S=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ot(s.x,s.y,{format:Di,type:Wt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,S,u,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,S,p,y,null)}function v(T,x,S,P){let A=null,L=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)A=L;else if(A=S.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=A.uuid,z=x.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let W=C[z];W===void 0&&(W=A.clone(),C[z]=W,x.addEventListener("dispose",b)),A=W}if(A.visible=x.visible,A.wireframe=x.wireframe,P===qs?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:d[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=i.properties.get(A);D.light=S}return A}function M(T,x,S,P,A,L){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===qs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let C=e.update(T),W=T.material;if(Array.isArray(W)){let Z=C.groups;for(let V=0,ae=Z.length;V<ae;V++){let O=Z[V],q=W[O.materialIndex];if(q&&q.visible){let H=v(T,q,P,L);T.onBeforeShadow(i,T,x,S,C,H,O),i.renderBufferDirect(S,null,C,H,T,O),T.onAfterShadow(i,T,x,S,C,H,O)}}}else if(W.visible){let Z=v(T,W,P,L);T.onBeforeShadow(i,T,x,S,C,Z,null),i.renderBufferDirect(S,null,C,Z,T,null),T.onAfterShadow(i,T,x,S,C,Z,null)}}let z=T.children;for(let C=0,W=z.length;C<W;C++)M(z[C],x,S,P,A,L)}function b(T){T.target.removeEventListener("dispose",b);for(let S in c){let P=c[S],A=T.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function px(i,e){function t(){let N=!1,ne=new Pt,K=null,$=new Pt(0,0,0,0);return{setMask:function(oe){K!==oe&&!N&&(i.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){N=oe},setClear:function(oe,ce,Pe,We,me){me===!0&&(oe*=We,ce*=We,Pe*=We),ne.set(oe,ce,Pe,We),$.equals(ne)===!1&&(i.clearColor(oe,ce,Pe,We),$.copy(ne))},reset:function(){N=!1,K=null,$.set(-1,0,0,0)}}}function n(){let N=!1,ne=!1,K=null,$=null,oe=null;return{setReversed:function(ce){if(ne!==ce){let Pe=e.get("EXT_clip_control");ce?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ne=ce;let We=oe;oe=null,this.setClear(We)}},getReversed:function(){return ne},setTest:function(ce){ce?he(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(ce){K!==ce&&!N&&(i.depthMask(ce),K=ce)},setFunc:function(ce){if(ne&&(ce=ju[ce]),$!==ce){switch(ce){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ce}},setLocked:function(ce){N=ce},setClear:function(ce){oe!==ce&&(oe=ce,ne&&(ce=1-ce),i.clearDepth(ce))},reset:function(){N=!1,K=null,$=null,oe=null,ne=!1}}}function s(){let N=!1,ne=null,K=null,$=null,oe=null,ce=null,Pe=null,We=null,me=null;return{setTest:function(ze){N||(ze?he(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(ze){ne!==ze&&!N&&(i.stencilMask(ze),ne=ze)},setFunc:function(ze,Ke,Te){(K!==ze||$!==Ke||oe!==Te)&&(i.stencilFunc(ze,Ke,Te),K=ze,$=Ke,oe=Te)},setOp:function(ze,Ke,Te){(ce!==ze||Pe!==Ke||We!==Te)&&(i.stencilOp(ze,Ke,Te),ce=ze,Pe=Ke,We=Te)},setLocked:function(ze){N=ze},setClear:function(ze){me!==ze&&(i.clearStencil(ze),me=ze)},reset:function(){N=!1,ne=null,K=null,$=null,oe=null,ce=null,Pe=null,We=null,me=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],y=null,m=!1,f=null,_=null,v=null,M=null,b=null,T=null,x=null,S=new Se(0,0,0),P=0,A=!1,L=null,D=null,z=null,C=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ae=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=ae>=1):O.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=ae>=2);let q=null,H={},k=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),B=new Pt().fromArray(k),ie=new Pt().fromArray(j);function le(N,ne,K,$){let oe=new Uint8Array(4),ce=i.createTexture();i.bindTexture(N,ce),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<K;Pe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(ne+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ce}let ge={};ge[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(As),Ae(!1),xe(xc),he(i.CULL_FACE),_e(di);function he(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Re(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function ft(N,ne){return u[N]!==ne?(i.bindFramebuffer(N,ne),u[N]=ne,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function we(N,ne){let K=g,$=!1;if(N){K=p.get(ne),K===void 0&&(K=[],p.set(ne,K));let oe=N.textures;if(K.length!==oe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Pe=oe.length;ce<Pe;ce++)K[ce]=i.COLOR_ATTACHMENT0+ce;K.length=oe.length,$=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,$=!0);$&&i.drawBuffers(K)}function ke(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let Ze={[ts]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};Ze[Eu]=i.MIN,Ze[Tu]=i.MAX;let se={[wu]:i.ZERO,[Au]:i.ONE,[Ru]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[Nu]:i.SRC_ALPHA_SATURATE,[Lu]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[Sc]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Uu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Ou]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(N,ne,K,$,oe,ce,Pe,We,me,ze){if(N===di){m===!0&&(Re(i.BLEND),m=!1);return}if(m===!1&&(he(i.BLEND),m=!0),N!==Mu){if(N!==f||ze!==A){if((_!==ts||b!==ts)&&(i.blendEquation(i.FUNC_ADD),_=ts,b=ts),ze)switch(N){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Li:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",N);break}else switch(N){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vc:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",N);break}v=null,M=null,T=null,x=null,S.set(0,0,0),P=0,f=N,A=ze}return}oe=oe||ne,ce=ce||K,Pe=Pe||$,(ne!==_||oe!==b)&&(i.blendEquationSeparate(Ze[ne],Ze[oe]),_=ne,b=oe),(K!==v||$!==M||ce!==T||Pe!==x)&&(i.blendFuncSeparate(se[K],se[$],se[ce],se[Pe]),v=K,M=$,T=ce,x=Pe),(We.equals(S)===!1||me!==P)&&(i.blendColor(We.r,We.g,We.b,me),S.copy(We),P=me),f=N,A=!1}function fe(N,ne){N.side===Bt?Re(i.CULL_FACE):he(i.CULL_FACE);let K=N.side===Qt;ne&&(K=!K),Ae(K),N.blending===Ys&&N.transparent===!1?_e(di):_e(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let $=N.stencilWrite;o.setTest($),$&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function xe(N){N!==xu?(he(i.CULL_FACE),N!==D&&(N===xc?i.cullFace(i.BACK):N===vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),D=N}function je(N){N!==z&&(V&&i.lineWidth(N),z=N)}function Be(N,ne,K){N?(he(i.POLYGON_OFFSET_FILL),(C!==ne||W!==K)&&(C=ne,W=K,a.getReversed()&&(ne=-ne,K=-K),i.polygonOffset(ne,K))):Re(i.POLYGON_OFFSET_FILL)}function it(N){N?he(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function ht(N){N===void 0&&(N=i.TEXTURE0+Z-1),q!==N&&(i.activeTexture(N),q=N)}function ut(N,ne,K){K===void 0&&(q===null?K=i.TEXTURE0+Z-1:K=q);let $=H[K];$===void 0&&($={type:void 0,texture:void 0},H[K]=$),($.type!==N||$.texture!==ne)&&(q!==K&&(i.activeTexture(K),q=K),i.bindTexture(N,ne||ge[N]),$.type=N,$.texture=ne)}function F(){let N=H[q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Nt(){try{i.compressedTexImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function st(){try{i.compressedTexImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Le(){try{i.texSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function de(){try{i.texSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ue(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Ne(){try{i.texStorage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function R(){try{i.texStorage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function E(){try{i.texImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function G(){try{i.texImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function pe(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function re(N,ne){d[N]!==ne&&(i.pixelStorei(N,ne),d[N]=ne)}function ve(N){B.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),B.copy(N))}function Me(N){ie.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function Q(N,ne){let K=c.get(ne);K===void 0&&(K=new WeakMap,c.set(ne,K));let $=K.get(N);$===void 0&&($=i.getUniformBlockIndex(ne,N.name),i.uniformBlockBinding(ne,$,$),K.set(N,$))}function ee(N,ne,K){let oe=c.get(ne).get(N);l[oe]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,oe,K),l[oe]=K)}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},q=null,H={},u={},l={},p=new WeakMap,g=[],y=null,m=!1,f=null,_=null,v=null,M=null,b=null,T=null,x=null,S=new Se(0,0,0),P=0,A=!1,L=null,D=null,z=null,C=null,W=null,B.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Re,bindFramebuffer:ft,drawBuffers:we,useProgram:ke,setBlending:_e,setMaterial:fe,setFlipSided:Ae,setCullFace:xe,setLineWidth:je,setPolygonOffset:Be,setScissorTest:it,activeTexture:ht,bindTexture:ut,unbindTexture:F,compressedTexImage2D:Nt,compressedTexImage3D:st,texImage2D:E,texImage3D:G,pixelStorei:re,getParameter:pe,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Ne,texStorage3D:R,texSubImage2D:Le,texSubImage3D:de,compressedTexSubImage2D:lt,compressedTexSubImage3D:ue,scissor:ve,viewport:Me,reset:ye}}function mx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,d=new Set,u,p=new WeakMap,g=new Set,y=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,E){return m?new OffscreenCanvas(R,E):Ps("canvas")}function _(R,E,G){let pe=1,re=Ne(R);if((re.width>G||re.height>G)&&(pe=G/Math.max(re.width,re.height)),pe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ve=Math.floor(pe*re.width),Me=Math.floor(pe*re.height);u===void 0&&(u=f(ve,Me));let Q=E?f(ve,Me):u;return Q.width=ve,Q.height=Me,Q.getContext("2d").drawImage(R,0,0,ve,Me),Xe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ve+"x"+Me+")."),Q}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function v(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,E,G,pe,re,ve=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Me;pe&&(Me=e.get("EXT_texture_norm16"),Me||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8),G===i.UNSIGNED_SHORT&&Me&&(Q=Me.R16_EXT),G===i.SHORT&&Me&&(Q=Me.R16_SNORM_EXT)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),E===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8),G===i.UNSIGNED_SHORT&&Me&&(Q=Me.RG16_EXT),G===i.SHORT&&Me&&(Q=Me.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),E===i.RGB&&(G===i.UNSIGNED_SHORT&&Me&&(Q=Me.RGB16_EXT),G===i.SHORT&&Me&&(Q=Me.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),E===i.RGBA){let ee=ve?gr:dt.getTransfer(re);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=ee===_t?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Me&&(Q=Me.RGBA16_EXT),G===i.SHORT&&Me&&(Q=Me.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(R,E){let G;return R?E===null||E===Un||E===ss?G=i.DEPTH24_STENCIL8:E===Fn?G=i.DEPTH32F_STENCIL8:E===$s&&(G=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Un||E===ss?G=i.DEPTH_COMPONENT24:E===Fn?G=i.DEPTH_COMPONENT32F:E===$s&&(G=i.DEPTH_COMPONENT16),G}function S(R,E){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){let E=new WeakRef(R);n.get(R).__ref=E,g.add(E),y.register(R,E,E)}function A(R){let E=n.get(R).__ref;E!==void 0&&(g.delete(E),y.unregister(E))}function L(R){z(R.target)}function D(R){C(R.target)}function z(R){R.removeEventListener("dispose",L),A(R),Z(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function C(R){R.removeEventListener("dispose",D),A(R),ae(R)}function W(){for(let R of g){let E=R.deref();E!==void 0&&(E.isRenderTarget===!0?C(E):z(E))}g.clear(),d.clear()}function Z(R){let E=n.get(R);if(E.__webglInit===void 0)return;let G=R.source,pe=p.get(G);if(pe){let re=pe[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&V(R),Object.keys(pe).length===0&&p.delete(G)}n.remove(R)}function V(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let G=R.source,pe=p.get(G);delete pe[E.__cacheKey],a.memory.textures--}function ae(R){let E=n.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&z(G),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let ve=0;ve<E.__webglFramebuffer[re].length;ve++)i.deleteFramebuffer(E.__webglFramebuffer[re][ve]);else i.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)i.deleteFramebuffer(E.__webglFramebuffer[re]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let pe=R.textures;for(let re=0,ve=pe.length;re<ve;re++){let Me=n.get(pe[re]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(pe[re])}n.remove(R)}let O=0;function q(){O=0}function H(){return O}function k(R){O=R}function j(){let R=O;return R>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function B(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function ie(R,E){let G=n.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let pe=R.image;if(pe===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(G,R,E);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function le(R,E){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){fe(G,R,E);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function ge(R,E){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){fe(G,R,E);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function he(R,E){let G=n.get(R);if(R.version>0&&G.__version!==R.version){Ae(G,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}let Re={[Rs]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},ft={[Jt]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Io]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},we={[Xu]:i.NEVER,[Nc]:i.ALWAYS,[qu]:i.LESS,[Lc]:i.LEQUAL,[Yu]:i.EQUAL,[Dc]:i.GEQUAL,[Zu]:i.GREATER,[$u]:i.NOTEQUAL};function ke(R,E){if(E.type===Fn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===Io||E.magFilter===Qr||E.magFilter===fi||E.minFilter===dn||E.minFilter===Io||E.minFilter===Qr||E.minFilter===fi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Re[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Re[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Re[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ft[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ft[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jt||E.minFilter!==Qr&&E.minFilter!==fi||E.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ze(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",L),P(E));let pe=E.source,re=p.get(pe);re===void 0&&(re={},p.set(pe,re));let ve=B(E);if(ve!==R.__cacheKey){re[ve]===void 0&&(re[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),re[ve].usedTimes++;let Me=re[R.__cacheKey];Me!==void 0&&(re[R.__cacheKey].usedTimes--,Me.usedTimes===0&&V(E)),R.__cacheKey=ve,R.__webglTexture=re[ve].texture}return G}function se(R,E,G){return Math.floor(Math.floor(R/G)/E)}function _e(R,E,G,pe){let ve=R.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,G,pe,E.data);else{ve.sort((N,ne)=>N.start-ne.start);let Me=0;for(let N=1;N<ve.length;N++){let ne=ve[Me],K=ve[N],$=ne.start+ne.count,oe=se(K.start,E.width,4),ce=se(ne.start,E.width,4);K.start<=$+1&&oe===ce&&se(K.start+K.count-1,E.width,4)===oe?ne.count=Math.max(ne.count,K.start+K.count-ne.start):(++Me,ve[Me]=K)}ve.length=Me+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let N=0,ne=ve.length;N<ne;N++){let K=ve[N],$=Math.floor(K.start/4),oe=Math.ceil(K.count/4),ce=$%E.width,Pe=Math.floor($/E.width),We=oe,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(i.TEXTURE_2D,0,ce,Pe,We,me,G,pe,E.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function fe(R,E,G){let pe=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=i.TEXTURE_3D);let re=Ze(R,E),ve=E.source;t.bindTexture(pe,R.__webglTexture,i.TEXTURE0+G);let Me=n.get(ve);if(ve.version!==Me.__version||re===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let me=dt.getPrimaries(dt.workingColorSpace),ze=E.colorSpace===Bn?null:dt.getPrimaries(E.colorSpace),Ke=E.colorSpace===Bn||me===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=_(E.image,!1,s.maxTextureSize);ee=ue(E,ee);let ye=r.convert(E.format,E.colorSpace),N=r.convert(E.type),ne=T(E.internalFormat,ye,N,E.normalized,E.colorSpace,E.isVideoTexture);ke(pe,E);let K,$=E.mipmaps,oe=E.isVideoTexture!==!0,ce=Me.__version===void 0||re===!0,Pe=ve.dataReady,We=S(E,ee);if(E.isDepthTexture)ne=x(E.format===pi,E.type),ce&&(oe?t.texStorage2D(i.TEXTURE_2D,1,ne,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ne,ee.width,ee.height,0,ye,N,null));else if(E.isDataTexture)if($.length>0){oe&&ce&&t.texStorage2D(i.TEXTURE_2D,We,ne,$[0].width,$[0].height);for(let me=0,ze=$.length;me<ze;me++)K=$[me],oe?Pe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,K.width,K.height,ye,N,K.data):t.texImage2D(i.TEXTURE_2D,me,ne,K.width,K.height,0,ye,N,K.data);E.generateMipmaps=!1}else oe?(ce&&t.texStorage2D(i.TEXTURE_2D,We,ne,ee.width,ee.height),Pe&&_e(E,ee,ye,N)):t.texImage2D(i.TEXTURE_2D,0,ne,ee.width,ee.height,0,ye,N,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,ne,$[0].width,$[0].height,ee.depth);for(let me=0,ze=$.length;me<ze;me++)if(K=$[me],E.format!==On)if(ye!==null)if(oe){if(Pe)if(E.layerUpdates.size>0){let Ke=qc(K.width,K.height,E.format,E.type);for(let Te of E.layerUpdates){let nt=K.data.subarray(Te*Ke/K.data.BYTES_PER_ELEMENT,(Te+1)*Ke/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Te,K.width,K.height,1,ye,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,K.width,K.height,ee.depth,ye,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ne,K.width,K.height,ee.depth,0,K.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,K.width,K.height,ee.depth,ye,N,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ne,K.width,K.height,ee.depth,0,ye,N,K.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{oe&&ce&&t.texStorage2D(i.TEXTURE_2D,We,ne,$[0].width,$[0].height);for(let me=0,ze=$.length;me<ze;me++)K=$[me],E.format!==On?ye!==null?oe?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,K.width,K.height,ye,K.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ne,K.width,K.height,0,K.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Pe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,K.width,K.height,ye,N,K.data):t.texImage2D(i.TEXTURE_2D,me,ne,K.width,K.height,0,ye,N,K.data)}else if(E.isDataArrayTexture)if(oe){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,ne,ee.width,ee.height,ee.depth),Pe)if(E.layerUpdates.size>0){let me=qc(ee.width,ee.height,E.format,E.type);for(let ze of E.layerUpdates){let Ke=ee.data.subarray(ze*me/ee.data.BYTES_PER_ELEMENT,(ze+1)*me/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,ee.width,ee.height,1,ye,N,Ke)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ye,N,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,ee.width,ee.height,ee.depth,0,ye,N,ee.data);else if(E.isData3DTexture)oe?(ce&&t.texStorage3D(i.TEXTURE_3D,We,ne,ee.width,ee.height,ee.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ye,N,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ne,ee.width,ee.height,ee.depth,0,ye,N,ee.data);else if(E.isFramebufferTexture){if(ce)if(oe)t.texStorage2D(i.TEXTURE_2D,We,ne,ee.width,ee.height);else{let me=ee.width,ze=ee.height;for(let Ke=0;Ke<We;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,ne,me,ze,0,ye,N,null),me>>=1,ze>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ee.parentNode!==me){me.appendChild(ee),d.add(E),me.onpaint=ze=>{let Ke=ze.changedElements;for(let Te of d)Ke.includes(Te.image)&&(Te.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let Ke=i.RGBA,Te=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,Te,nt,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($.length>0){if(oe&&ce){let me=Ne($[0]);t.texStorage2D(i.TEXTURE_2D,We,ne,me.width,me.height)}for(let me=0,ze=$.length;me<ze;me++)K=$[me],oe?Pe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ye,N,K):t.texImage2D(i.TEXTURE_2D,me,ne,ye,N,K);E.generateMipmaps=!1}else if(oe){if(ce){let me=Ne(ee);t.texStorage2D(i.TEXTURE_2D,We,ne,me.width,me.height)}Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,N,ee)}else t.texImage2D(i.TEXTURE_2D,0,ne,ye,N,ee);v(E)&&E.mipmapsAutoUpdate===!0&&M(pe),Me.__version=ve.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ae(R,E,G){if(E.image.length!==6)return;let pe=Ze(R,E),re=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let ve=n.get(re);if(re.version!==ve.__version||pe===!0){t.activeTexture(i.TEXTURE0+G);let Me=dt.getPrimaries(dt.workingColorSpace),Q=E.colorSpace===Bn?null:dt.getPrimaries(E.colorSpace),ee=E.colorSpace===Bn||Me===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ye=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let Te=0;Te<6;Te++)!ye&&!N?ne[Te]=_(E.image[Te],!0,s.maxCubemapSize):ne[Te]=N?E.image[Te].image:E.image[Te],ne[Te]=ue(E,ne[Te]);let K=ne[0],$=r.convert(E.format,E.colorSpace),oe=r.convert(E.type),ce=T(E.internalFormat,$,oe,E.normalized,E.colorSpace),Pe=E.isVideoTexture!==!0,We=ve.__version===void 0||pe===!0,me=re.dataReady,ze=S(E,K);ke(i.TEXTURE_CUBE_MAP,E);let Ke;if(E.isDepthTexture){if(ce=x(E.format===pi,E.type),We)if(Pe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ce,K.width,K.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ce,K.width,K.height,0,$,oe,null)}else if(ye){Pe&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ce,K.width,K.height);for(let Te=0;Te<6;Te++){Ke=ne[Te].mipmaps;for(let nt=0;nt<Ke.length;nt++){let Yt=Ke[nt];E.format!==On?$!==null?Pe?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,nt,0,0,Yt.width,Yt.height,$,Yt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,nt,ce,Yt.width,Yt.height,0,Yt.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,nt,0,0,Yt.width,Yt.height,$,oe,Yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,nt,ce,Yt.width,Yt.height,0,$,oe,Yt.data)}}}else{if(Ke=E.mipmaps,Pe&&We){Ke.length>0&&ze++;let Te=Ne(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ce,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(N){Pe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ne[Te].width,ne[Te].height,$,oe,ne[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ce,ne[Te].width,ne[Te].height,0,$,oe,ne[Te].data);for(let nt=0;nt<Ke.length;nt++){let vi=Ke[nt].image[Te].image;Pe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,nt+1,0,0,vi.width,vi.height,$,oe,vi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,nt+1,ce,vi.width,vi.height,0,$,oe,vi.data)}}else{Pe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,$,oe,ne[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ce,$,oe,ne[Te]);for(let nt=0;nt<Ke.length;nt++){let Yt=Ke[nt];Pe?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,nt+1,0,0,$,oe,Yt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,nt+1,ce,$,oe,Yt.image[Te])}}}v(E)&&E.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ve.__version=re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function xe(R,E,G,pe,re,ve){let Me=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),ee=T(G.internalFormat,Me,Q,G.normalized,G.colorSpace),ye=n.get(E),N=n.get(G);if(N.__renderTarget=E,!ye.__hasExternalTextures){let ne=Math.max(1,E.width>>ve),K=Math.max(1,E.height>>ve);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ve,ee,ne,K,E.depth,0,Me,Q,null):t.texImage2D(re,ve,ee,ne,K,0,Me,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),de(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,re,N.__webglTexture,0,Le(E)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,re,N.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(R,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let pe=E.depthTexture,re=pe&&pe.isDepthTexture?pe.type:null,ve=x(E.stencilBuffer,re),Me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(E),ve,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(E),ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ve,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,R)}else{let pe=E.textures;for(let re=0;re<pe.length;re++){let ve=pe[re],Me=r.convert(ve.format,ve.colorSpace),Q=r.convert(ve.type),ee=T(ve.internalFormat,Me,Q,ve.normalized,ve.colorSpace);de(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(E),ee,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(E),ee,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ee,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(R,E,G){let pe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(E.depthTexture);re.__renderTarget=E;let ve=pe?E.depthTexture.image[0]:E.depthTexture.image;(!re.__webglTexture||ve.width!==E.width||ve.height!==E.height)&&(ve.width=E.width,ve.height=E.height,E.depthTexture.needsUpdate=!0),pe?he(E.depthTexture,0):ie(E.depthTexture,0);let Me=re.__webglTexture,Q=Le(E),ee=pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ye=E.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===oi)de(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ee,Me,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ee,Me,0);else if(E.depthTexture.format===pi)de(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ee,Me,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ee,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(R){let E=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let pe=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){let re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",re)};pe.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=pe}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let pe=0;pe<6;pe++)Be(E.__webglFramebuffer[pe],R,pe);else R.texture.mipmaps.length>0?Be(E.__webglFramebuffer[0],R,0):Be(E.__webglFramebuffer,R,0);else if(G){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=i.createRenderbuffer(),je(E.__webglDepthbuffer[pe],R,!1);else{let re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ve)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),je(E.__webglDepthbuffer,R,!1);else{let re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(R,E,G){let pe=n.get(R);E!==void 0&&xe(pe.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&it(R)}function ut(R){let E=R.texture,G=n.get(R),pe=n.get(E);R.addEventListener("dispose",D),P(R);let re=R.textures,ve=R.isWebGLCubeRenderTarget===!0,Me=re.length>1;if(Me||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=E.version,a.memory.textures++),ve){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let ee=0;ee<E.mipmaps.length;ee++)G.__webglFramebuffer[Q][ee]=i.createFramebuffer()}else G.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)G.__webglFramebuffer[Q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Me)for(let Q=0,ee=re.length;Q<ee;Q++){let ye=n.get(re[Q]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&de(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<re.length;Q++){let ee=re[Q];G.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let ye=r.convert(ee.format,ee.colorSpace),N=r.convert(ee.type),ne=T(ee.internalFormat,ye,N,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),K=Le(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,ne,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),je(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),ke(i.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)xe(G.__webglFramebuffer[Q][ee],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else xe(G.__webglFramebuffer[Q],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);v(E)?M(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let Q=0,ee=re.length;Q<ee;Q++){let ye=re[Q],N=n.get(ye),ne=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),ke(ne,ye),xe(G.__webglFramebuffer,R,ye,i.COLOR_ATTACHMENT0+Q,ne,0),v(ye)&&M(ne)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,pe.__webglTexture),ke(Q,E),E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)xe(G.__webglFramebuffer[ee],R,E,i.COLOR_ATTACHMENT0,Q,ee);else xe(G.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,Q,0);v(E)?M(Q):E.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&it(R)}function F(R){let E=R.textures;for(let G=0,pe=E.length;G<pe;G++){let re=E[G];if(v(re)&&re.mipmapsAutoUpdate===!0){let ve=b(R),Me=n.get(re).__webglTexture;t.bindTexture(ve,Me),M(ve),t.unbindTexture()}}}let Nt=[];function st(R){if(R.samples>0){if(de(R)===!1){let E=R.textures,G=R.width,pe=R.height,re=i.COLOR_BUFFER_BIT,ve=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(R),Q=E.length>1;if(Q)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);let N=n.get(E[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,G,pe,0,0,G,pe,re,i.NEAREST),l===!0&&(Nt.length=0,Nt.push(i.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Nt.push(ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);let N=n.get(E[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Le(R){return Math.min(s.maxSamples,R.samples)}function de(R){let E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function lt(R){let E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ue(R,E){let G=R.colorSpace,pe=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==mr&&G!==Bn&&(dt.getTransfer(G)===_t?(pe!==On||re!==pn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",G)),E}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.getTextureUnits=H,this.setTextureUnits=k,this.setTexture2D=ie,this.setTexture2DArray=le,this.setTexture3D=ge,this.setTextureCube=he,this.rebindTextures=ht,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=de,this.dispose=W}function gx(i,e){function t(n,s=Bn){let r,a=dt.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tc)return i.BYTE;if(n===wc)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===Lo)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Wt)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Pc)return i.RGB;if(n===On)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Uo)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===jr||n===ea||n===ta||n===na)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===zo||n===Ho||n===ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===ia||n===Yo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Vo)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xo)return r.COMPRESSED_R11_EAC;if(n===qo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===Yo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zo||n===$o||n===Jo||n===Ko||n===Qo||n===jo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zo)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ll||n===cl||n===hl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ll)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===sa||n===fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new wr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Gt({vertexShader:_x,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends Vn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new ah,f={},_=t.getContextAttributes(),v=null,M=null,b=[],T=[],x=new te,S=null,P=null,A=new rn;A.viewport=new Pt;let L=new rn;L.viewport=new Pt;let D=[A,L],z=new wo,C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ie=b[B];return ie===void 0&&(ie=new Ns,b[B]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(B){let ie=b[B];return ie===void 0&&(ie=new Ns,b[B]=ie),ie.getGripSpace()},this.getHand=function(B){let ie=b[B];return ie===void 0&&(ie=new Ns,b[B]=ie),ie.getHandSpace()};function Z(B){let ie=T.indexOf(B.inputSource);if(ie===-1)return;let le=b[ie];le!==void 0&&(le.update(B.inputSource,B.frame,c||a),le.dispatchEvent({type:B.type,data:B.inputSource}))}function V(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ae);for(let B=0;B<b.length;B++){let ie=T[B];ie!==null&&(T[B]=null,b[B].disconnect(ie))}C=null,W=null,m.reset();for(let B in f)delete f[B];if(e.setRenderTarget(v),p=null,u=null,d=null,s=null,M=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),P!==null){let B=P.camera;B.fov=P.fov,B.zoom=P.zoom,B.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ge=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?pi:oi,ge=_.stencil?ss:Un);let Re={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Ot(u.textureWidth,u.textureHeight,{format:On,type:pn,depthTexture:new ci(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ot(p.framebufferWidth,p.framebufferHeight,{format:On,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(B){for(let ie=0;ie<B.removed.length;ie++){let le=B.removed[ie],ge=T.indexOf(le);ge>=0&&(T[ge]=null,b[ge].disconnect(le))}for(let ie=0;ie<B.added.length;ie++){let le=B.added[ie],ge=T.indexOf(le);if(ge===-1){for(let Re=0;Re<b.length;Re++)if(Re>=T.length){T.push(le),ge=Re;break}else if(T[Re]===null){T[Re]=le,ge=Re;break}if(ge===-1)break}let he=b[ge];he&&he.connect(le)}}function O(B,ie){ie===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ie.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let ie=B.near,le=B.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(le=m.depthFar)),z.near=L.near=A.near=ie,z.far=L.far=A.far=le,(C!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),C=z.near,W=z.far),z.layers.mask=B.layers.mask|6,A.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let ge=B.parent,he=z.cameras;O(z,ge);for(let Re=0;Re<he.length;Re++)O(he[Re],ge);z.projectionMatrix.copy(A.projectionMatrix),z.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&B.isPerspectiveCamera&&(P={camera:B,fov:B.fov,zoom:B.zoom}),q(B,z,ge)};function q(B,ie,le){le===null?B.matrix.copy(ie.matrixWorld):(B.matrix.copy(le.matrixWorld),B.matrix.invert(),B.matrix.multiply(ie.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(ie.projectionMatrix),B.projectionMatrixInverse.copy(ie.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Yi*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(B){return f[B]};let H=null;function k(B,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){let le=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let ge=!1;le.length!==z.cameras.length&&(z.cameras.length=0,ge=!0);for(let we=0;we<le.length;we++){let ke=le[we],Ze=null;if(p!==null)Ze=p.getViewport(ke);else{let _e=d.getViewSubImage(u,ke);Ze=_e.viewport,we===0&&(e.setRenderTargetTextures(M,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(M))}let se=D[we];se===void 0&&(se=new rn,se.layers.enable(we),se.viewport=new Pt,D[we]=se),se.matrix.fromArray(ke.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ke.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),we===0&&(z.matrix.copy(se.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ge===!0&&z.cameras.push(se)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let we=d.getDepthInformation(le[0]);we&&we.isValid&&we.texture&&m.init(we,s.renderState)}if(he&&he.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let we=0;we<le.length;we++){let ke=le[we].camera;if(ke){let Ze=f[ke];Ze||(Ze=new wr,f[ke]=Ze);let se=d.getCameraImage(ke);Ze.sourceTexture=se}}}}for(let le=0;le<b.length;le++){let ge=T[le],he=b[le];ge!==null&&he!==void 0&&he.update(ge,ie,c||a)}H&&H(B,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let j=new Cd;j.setAnimationLoop(k),this.setAnimationLoop=function(B){H=B},this.dispose=function(){}}},vx=new Tt,zd=new et;zd.set(-1,0,0,0,1,0,0,0,1);function yx(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Vc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,v,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=e.get(f),v=_.envMap,M=_.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mx(i,e,t,n){let s={},r={};function a(_,v){let M=v.program;n.uniformBlockBinding(_,M,s[_.id])}function o(_,v){let M=s[_.id];M===void 0&&(g(_),M=l(_),s[_.id]=M,_.addEventListener("dispose",m));let b=v.program;n.updateUBOMapping(_,b);let T=e.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let v=i.createBuffer(),M=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function c(_){let v=s[_.id],M=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,x=M.length;T<x;T++){let S=M[T];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)h(S[P],T,P,b);else h(S,T,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,v,M,b){if(u(_,v,M,b)===!0){let T=_.__offset,x=_.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let A=x[P],L=y(A,!0);d(A,_.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,_.__data)}}function d(_,v,M){typeof _=="number"||typeof _=="boolean"?v[M]=_:_.isMatrix3?(v[M]=_.elements[0],v[M+1]=_.elements[1],v[M+2]=_.elements[2],v[M+3]=0,v[M+4]=_.elements[3],v[M+5]=_.elements[4],v[M+6]=_.elements[5],v[M+7]=0,v[M+8]=_.elements[6],v[M+9]=_.elements[7],v[M+10]=_.elements[8],v[M+11]=0):ArrayBuffer.isView(_)?v.set(_.subarray(0,v.length-M),M):_.toArray(v,M)}function u(_,v,M,b){let T=_.value,x=v+"_"+M;if(Array.isArray(T)){b[x]===void 0&&(b[x]=[]);let S=b[x],P=!1;for(let A=0;A<T.length;A++)p(T[A],S,A)===!0&&(P=!0);return P}return p(T,b,x)}function p(_,v,M){if(v[M]===void 0)return typeof _=="number"||typeof _=="boolean"?v[M]=_:ArrayBuffer.isView(_)?v[M]=_.slice():v[M]=_.clone(),!0;{let b=v[M];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return v[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function g(_){let v=_.uniforms,M=0,b=16;for(let x=0,S=v.length;x<S;x++){let P=Array.isArray(v[x])?v[x]:[v[x]];for(let A=0,L=P.length;A<L;A++){let D=P[A],z=Array.isArray(D.value)?D.value:[D.value],C=Array.isArray(v[x])||Array.isArray(D.value),W=M;for(let V=0,ae=z.length;V<ae;V++){let O=z[V],q=y(O,C),H=M%b,k=H%q.boundary,j=H+k;M+=k,j!==0&&b-j<q.storage&&(M+=b-j),V===0&&(W=M),M+=q.storage}let Z=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new Z((M-W)/Float32Array.BYTES_PER_ELEMENT),D.__offset=W}}let T=M%b;return T>0&&(M+=b-T),_.__size=M,_.__cache={},this}function y(_,v){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",_),v===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){let v=_.target;v.removeEventListener("dispose",m),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:f}}var Sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function bx(){return $n===null&&($n=new so(Sx,16,16,Di,Wt),$n.name="DFG_LUT",$n.minFilter=dn,$n.magFilter=dn,$n.wrapS=kn,$n.wrapT=kn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var xl=class{constructor(e={}){let{canvas:t=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=p,m=new Set([Oo,Fo,Uo]),f=new Set([pn,Un,$s,ss,Do,No]),_=new Uint32Array(4),v=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},b=null,T=null,x=[],S=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,z=null,C=null,W=null;this._outputColorSpace=Ft;let Z=0,V=0,ae=null,O=-1,q=null,H=new Pt,k=new Pt,j=null,B=new Se(0),ie=0,le=t.width,ge=t.height,he=1,Re=null,ft=null,we=new Pt(0,0,le,ge),ke=new Pt(0,0,le,ge),Ze=!1,se=new Ri,_e=new ro,fe=!1,Ae=!1,xe=new Tt,je=new I,Be=new Pt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function ut(){return ae===null?he:1}let F=n;function Nt(w,U){return t.getContext(w,U)}let st,Le,de,lt,ue,Ne,R,E,G,pe,re,ve,Me,Q,ee,ye,N,ne,K,$,oe,ce,Pe;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Te,!1),F===null){let U="webgl2";if(F=Nt(U,w),F===null)throw Nt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(w){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ye("WebGLRenderer: "+w.message),w}function We(){st=new N0(F),st.init(),oe=new gx(F,st),Le=new b0(F,st,e,oe),de=new px(F,st),Le.reversedDepthBuffer&&u&&de.buffers.depth.setReversed(!0),z=F.createFramebuffer(),C=F.createFramebuffer(),W=F.createFramebuffer(),lt=new O0(F),ue=new ex,Ne=new mx(F,st,de,ue,Le,oe,lt),R=new D0(A),E=new zp(F),ce=new M0(F,E),G=new U0(F,E,lt,ce),pe=new z0(F,G,E,ce,lt),ne=new B0(F,Le,Ne),ee=new E0(ue),re=new j_(A,R,st,Le,ce,ee),ve=new yx(A,ue),Me=new nx,Q=new lx(st),N=new y0(A,R,de,pe,g,l),ye=new fx(A,pe,Le),Pe=new Mx(F,lt,Le,de),K=new S0(F,st,lt),$=new F0(F,st,lt),lt.programs=re.programs,A.capabilities=Le,A.extensions=st,A.properties=ue,A.renderLists=Me,A.shadowMap=ye,A.state=de,A.info=lt}y!==pn&&(P=new k0(y,t.width,t.height,o,s,r));let me=new oh(A,F);this.xr=me,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(w){w!==void 0&&(he=w,this.setSize(le,ge,!1))},this.getSize=function(w){return w.set(le,ge)},this.setSize=function(w,U,J=!0){if(me.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}le=w,ge=U,t.width=Math.floor(w*he),t.height=Math.floor(U*he),J===!0&&(t.style.width=w+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(le*he,ge*he).floor()},this.setDrawingBufferSize=function(w,U,J){le=w,ge=U,he=J,t.width=Math.floor(w*J),t.height=Math.floor(U*J),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(y===pn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(we)},this.setViewport=function(w,U,J,X){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,U,J,X),de.viewport(H.copy(we).multiplyScalar(ut()).round())},this.getScissor=function(w){return w.copy(ke)},this.setScissor=function(w,U,J,X){w.isVector4?ke.set(w.x,w.y,w.z,w.w):ke.set(w,U,J,X),de.scissor(k.copy(ke).multiplyScalar(ut()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){de.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){Re=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,J=!0){let X=0;if(w){let Y=!1;if(ae!==null){let Ee=ae.texture.format;Y=m.has(Ee)}if(Y){let Ee=ae.texture.type,De=f.has(Ee),be=N.getClearColor(),Ie=N.getClearAlpha(),He=be.r,tt=be.g,pt=be.b;De?(_[0]=He,_[1]=tt,_[2]=pt,_[3]=Ie,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=He,v[1]=tt,v[2]=pt,v[3]=Ie,F.clearBufferiv(F.COLOR,0,v))}else X|=F.COLOR_BUFFER_BIT}U&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),N.dispose(),Me.dispose(),Q.dispose(),Ne.dispose(),ue.dispose(),R.dispose(),pe.dispose(),G.dispose(),ce.dispose(),Pe.dispose(),re.dispose(),me.dispose(),me.removeEventListener("sessionstart",Eh),me.removeEventListener("sessionend",Th),zi.stop()};function ze(w){w.preventDefault(),_r("WebGLRenderer: Context Lost."),L=!0}function Ke(){_r("WebGLRenderer: Context Restored."),L=!1;let w=lt.autoReset,U=ye.enabled,J=ye.autoUpdate,X=ye.needsUpdate,Y=ye.type;We(),lt.autoReset=w,ye.enabled=U,ye.autoUpdate=J,ye.needsUpdate=X,ye.type=Y}function Te(w){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function nt(w){let U=w.target;U.removeEventListener("dispose",nt),Yt(U)}function Yt(w){vi(w),ue.remove(w)}function vi(w){let U=ue.get(w).programs;U!==void 0&&(U.forEach(function(J){re.releaseProgram(J)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,J,X,Y,Ee){U===null&&(U=it);let De=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,be=ff(w,U,J,X,Y);de.setMaterial(X,De);let Ie=J.index,He=1;if(X.wireframe===!0){if(Ie=G.getWireframeAttribute(J),Ie===void 0)return;He=2}let tt=J.drawRange,pt=J.attributes.position,Ue=tt.start*He,mt=(tt.start+tt.count)*He;Ee!==null&&(Ue=Math.max(Ue,Ee.start*He),mt=Math.min(mt,(Ee.start+Ee.count)*He)),Ie!==null?(Ue=Math.max(Ue,0),mt=Math.min(mt,Ie.count)):pt!=null&&(Ue=Math.max(Ue,0),mt=Math.min(mt,pt.count));let Ht=mt-Ue;if(Ht<0||Ht===1/0)return;ce.setup(Y,X,be,J,Ie);let Rt,At=K;if(Ie!==null&&(Rt=E.get(Ie),At=$,At.setIndex(Rt)),Y.isMesh)X.wireframe===!0?(de.setLineWidth(X.wireframeLinewidth*ut()),At.setMode(F.LINES)):At.setMode(F.TRIANGLES);else if(Y.isLine){let en=X.linewidth;en===void 0&&(en=1),de.setLineWidth(en*ut()),Y.isLineSegments?At.setMode(F.LINES):Y.isLineLoop?At.setMode(F.LINE_LOOP):At.setMode(F.LINE_STRIP)}else Y.isPoints?At.setMode(F.POINTS):Y.isSprite&&At.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(st.get("WEBGL_multi_draw"))At.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let en=Y._multiDrawStarts,Fe=Y._multiDrawCounts,hn=Y._multiDrawCount,xt=Ie?E.get(Ie).bytesPerElement:1,Hi=ue.get(X).currentProgram.getUniforms();for(let tn=0;tn<hn;tn++)Hi.setValue(F,"_gl_DrawID",tn),At.render(en[tn]/xt,Fe[tn])}else if(Y.isInstancedMesh)At.renderInstances(Ue,Ht,Y.count);else if(J.isInstancedBufferGeometry){let en=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Fe=Math.min(J.instanceCount,en);At.renderInstances(Ue,Ht,Fe)}else At.render(Ue,Ht)};function bh(w,U,J,X){D!==null&&w.isNodeMaterial&&D.setObject(X,w),fe===!0&&ee.setState(w,J,!1),w.transparent===!0&&w.side===Bt&&w.forceSinglePass===!1?(w.side=Qt,w.needsUpdate=!0,tr(w,U,X),w.side=Yn,w.needsUpdate=!0,tr(w,U,X),w.side=Bt):tr(w,U,X)}this.compile=function(w,U,J=null){J===null&&(J=w),D!==null&&D.renderStart(w,U,J),T=Q.get(J),T.init(U),S.push(T),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),w!==J&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),Ae=this.localClippingEnabled,fe=ee.init(this.clippingPlanes,Ae),fe===!0&&ee.setGlobalState(this.clippingPlanes,U),D!==null&&ye.render(T.state.shadowsArray,J,U);let X=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){let be=Ee[De];bh(be,J,U,Y),X.add(be)}else bh(Ee,J,U,Y),X.add(Ee)}),T=S.pop(),D!==null&&D.renderEnd(),X},this.compileAsync=function(w,U,J=null){let X=this.compile(w,U,J);return new Promise(Y=>{function Ee(){if(X.forEach(function(De){let Ie=ue.get(De).currentProgram;(Ie===void 0||Ie.isReady())&&X.delete(De)}),X.size===0){Y(w);return}setTimeout(Ee,10)}st.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Nl=null;function uf(w){Nl&&Nl(w)}function Eh(){zi.stop()}function Th(){zi.start()}let zi=new Cd;zi.setAnimationLoop(uf),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(w){Nl=w,me.setAnimationLoop(w),w===null?zi.stop():zi.start()},me.addEventListener("sessionstart",Eh),me.addEventListener("sessionend",Th),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(w,U);let J=me.enabled===!0&&me.isPresenting===!0,X=P!==null&&(ae===null||J)&&P.begin(A,ae);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(U),U=me.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,U,ae),T=Q.get(w,S.length),T.init(U),T.state.textureUnits=Ne.getTextureUnits(),S.push(T),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?_e.setFromArrayCamera(U):se.setFromProjectionMatrix(xe,Rn,U.reversedDepth),Ae=this.localClippingEnabled,fe=ee.init(this.clippingPlanes,Ae),b=Me.get(w,x.length),b.init(),x.push(b),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let De=A.xr.getDepthSensingMesh();De!==null&&Ul(De,U,-1/0,A.sortObjects)}Ul(w,U,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(T.state.lightsArray),A.sortObjects===!0&&b.sort(Re,ft),ht=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ht&&N.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),fe===!0&&ee.beginShadows();let Y=T.state.shadowsArray;if(ye.render(Y,w,U),fe===!0&&ee.endShadows(),(X&&P.hasRenderPass())===!1){let De=b.opaque,be=b.transmissive;if(T.setupLights(),U.isArrayCamera){let Ie=U.cameras;if(be.length>0)for(let He=0,tt=Ie.length;He<tt;He++){let pt=Ie[He];Ah(De,be,w,pt)}ht&&N.render(w);for(let He=0,tt=Ie.length;He<tt;He++){let pt=Ie[He];wh(b,w,pt,pt.viewport)}}else be.length>0&&Ah(De,be,w,U),ht&&N.render(w),wh(b,w,U)}ae!==null&&V===0&&(Ne.updateMultisampleRenderTarget(ae),Ne.updateRenderTargetMipmap(ae)),X&&P.end(A),w.isScene===!0&&w.onAfterRender(A,w,U),ce.resetDefaultState(),O=-1,q=null,S.pop(),S.length>0?(T=S[S.length-1],Ne.setTextureUnits(T.state.textureUnits),fe===!0&&ee.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,D!==null&&D.renderEnd()};function Ul(w,U,J,X){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let De=U.isArrayCamera?_e:se;if(!w.frustumCulled||w.intersectsFrustum(De)){X&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);let be=pe.update(w),Ie=w.material;Ie.visible&&b.push(w,be,Ie,J,Be.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let De=U.isArrayCamera?_e:se;if(!w.frustumCulled||w.intersectsFrustum(De)){let be=pe.update(w),Ie=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Be.copy(be.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(Ie)){let He=be.groups;for(let tt=0,pt=He.length;tt<pt;tt++){let Ue=He[tt],mt=Ie[Ue.materialIndex];mt&&mt.visible&&b.push(w,be,mt,J,Be.z,Ue,U)}}else Ie.visible&&b.push(w,be,Ie,J,Be.z,null,U)}}}let Ee=w.children;for(let De=0,be=Ee.length;De<be;De++)Ul(Ee[De],U,J,X)}function wh(w,U,J,X){let{opaque:Y,transmissive:Ee,transparent:De}=w;T.setupLightsView(J),fe===!0&&ee.setGlobalState(A.clippingPlanes,J),X&&de.viewport(H.copy(X)),Y.length>0&&fa(Y,U,J),Ee.length>0&&fa(Ee,U,J),De.length>0&&fa(De,U,J),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ah(w,U,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let Ue=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Ot(1,1,{generateMipmaps:!0,type:Ue?Wt:pn,minFilter:fi,samples:Math.max(4,Le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Ee=T.state.transmissionRenderTarget[X.id],De=X.viewport||H;Ee.setSize(De.z*A.transmissionResolutionScale,De.w*A.transmissionResolutionScale);let be=A.getRenderTarget(),Ie=A.getActiveCubeFace(),He=A.getActiveMipmapLevel();A.setRenderTarget(Ee),A.getClearColor(B),ie=A.getClearAlpha(),ie<1&&A.setClearColor(16777215,.5),A.clear(),ht&&N.render(J);let tt=A.toneMapping;A.toneMapping=Zn;let pt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),fe===!0&&ee.setGlobalState(A.clippingPlanes,X),fa(w,J,X),Ne.updateMultisampleRenderTarget(Ee),Ne.updateRenderTargetMipmap(Ee),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let mt=0,Ht=U.length;mt<Ht;mt++){let Rt=U[mt],{object:At,geometry:en,material:Fe,group:hn}=Rt;if(Fe.side===Bt&&At.layers.test(X.layers)){let xt=Fe.side;Fe.side=Qt,Fe.needsUpdate=!0,Rh(At,J,X,en,Fe,hn),Fe.side=xt,Fe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ne.updateMultisampleRenderTarget(Ee),Ne.updateRenderTargetMipmap(Ee))}A.setRenderTarget(be,Ie,He),A.setClearColor(B,ie),pt!==void 0&&(X.viewport=pt),A.toneMapping=tt}function fa(w,U,J){let X=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,Ee=w.length;Y<Ee;Y++){let De=w[Y],{object:be,geometry:Ie,group:He}=De,tt=De.material;tt.allowOverride===!0&&X!==null&&(tt=X),be.layers.test(J.layers)&&Rh(be,U,J,Ie,tt,He)}}function Rh(w,U,J,X,Y,Ee){D!==null&&Y.isNodeMaterial&&D.setObject(w,Y),w.onBeforeRender(A,U,J,X,Y,Ee),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(A,U,J,X,w,Ee),Y.transparent===!0&&Y.side===Bt&&Y.forceSinglePass===!1?(Y.side=Qt,Y.needsUpdate=!0,A.renderBufferDirect(J,U,X,Y,w,Ee),Y.side=Yn,Y.needsUpdate=!0,A.renderBufferDirect(J,U,X,Y,w,Ee),Y.side=Bt):A.renderBufferDirect(J,U,X,Y,w,Ee),w.onAfterRender(A,U,J,X,Y,Ee)}function Ch(w){let U=0;for(let J of w)J.texture!==null&&U++;return U}function tr(w,U,J){U.isScene!==!0&&(U=it);let X=ue.get(w),Y=T.state.lights,Ee=T.state.shadowsArray,De=Y.state.version,be=re.getParameters(w,Y.state,Ee,U,J,T.state.lightProbeGridArray),Ie=re.getProgramCacheKey(be),He=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let tt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=R.get(w.envMap||X.environment,tt),X.envMapRotation=X.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",nt),He=new Map,X.programs=He,X.programVariants=new Map);let pt=He.get(Ie);if(pt!==void 0){if(X.currentProgram===pt&&X.lightsStateVersion===De)return Ih(w,be),pt}else be.uniforms=re.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,J,be),w.onBeforeCompile(be,A),pt=re.acquireProgram(be,Ie),He.set(Ie,pt),X.uniforms=be.uniforms;let Ue=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=ee.uniform),Ih(w,be),X.needsLights=mf(w),X.lightsStateVersion=De,X.needsLights&&(Ue.ambientLightColor.value=Y.state.ambient,Ue.lightProbe.value=Y.state.probe,Ue.sunLights.value=Y.state.sun,Ue.sunLightShadows.value=Y.state.sunShadow,Ue.directionalLights.value=Y.state.directional,Ue.directionalLightShadows.value=Y.state.directionalShadow,Ue.spotLights.value=Y.state.spot,Ue.spotLightShadows.value=Y.state.spotShadow,Ue.rectAreaLights.value=Y.state.rectArea,Ue.ltc_1.value=Y.state.rectAreaLTC1,Ue.ltc_2.value=Y.state.rectAreaLTC2,Ue.pointLights.value=Y.state.point,Ue.pointLightShadows.value=Y.state.pointShadow,Ue.hemisphereLights.value=Y.state.hemi,Ue.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ue.sunShadowCascade.value=Y.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Y.state.spotLightMatrix,Ue.spotLightMap.value=Y.state.spotLightMap,Ue.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=Ch(T.state.lightProbeGridArray),X.currentProgram=pt,X.uniformsList=null,pt}function df(w,U,J,X,Y){let Ee=ue.get(w),De=Ee.currentProgram.id+","+X+","+Y,be=Ee.programVariants.get(De);return be===void 0?(be=tr(w,U,J),Ee.programVariants.set(De,be)):(Ee.currentProgram=be,Ee.uniformsList=null,Ee.outputColorSpace=X,Ee.toneMapping=Y),be}function Ph(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Js.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ih(w,U){let J=ue.get(w);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function ff(w,U,J,X,Y){U.isScene!==!0&&(U=it),Ne.resetTextureUnits();let Ee=U.fog,De=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,be=ae===null?A.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:dt.workingColorSpace,Ie=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,He=R.get(X.envMap||De,Ie),tt=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pt=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!J.morphAttributes.position,mt=!!J.morphAttributes.normal,Ht=!!J.morphAttributes.color,Rt=Zn;X.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Rt=A.toneMapping);let At=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,en=At!==void 0?At.length:0,Fe=ue.get(X),hn=T.state.lights;if(fe===!0&&(Ae===!0||w!==q)){let Lt=w===q&&X.id===O;ee.setState(X,w,Lt)}let xt=!1,Hi=!1;X.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==hn.state.version||Y.isBatchedMesh&&Fe.batching===!1||!Y.isBatchedMesh&&Fe.batching===!0||Y.isBatchedMesh&&Fe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Fe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Y.isInstancedMesh&&Fe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Fe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Fe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Fe.instancingMorph===!1&&Y.morphTexture!==null||Fe.envMap!==He||X.fog===!0&&Fe.fog!==Ee||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ee.numPlanes||Fe.numIntersection!==ee.numIntersection)||Fe.vertexAlphas!==tt||Fe.vertexTangents!==pt||Fe.morphTargets!==Ue||Fe.morphNormals!==mt||Fe.morphColors!==Ht||Fe.morphTargetsCount!==en||Fe.numLightProbeGrids!==Ch(T.state.lightProbeGridArray)?xt=!0:(Fe.outputColorSpace!==be||Fe.toneMapping!==Rt)&&(Hi=!0):(xt=!0,Fe.__version=X.version);let tn=Fe.currentProgram;(xt===!0||Hi===!0)&&(tn=Hi===!0?df(X,U,Y,be,Rt):tr(X,U,Y),D&&X.isNodeMaterial&&D.onUpdateProgram(X,tn,Fe));let pa=!1,yi=!1,ki=!1,gt=tn.getUniforms(),jt=Fe.uniforms;if(de.useProgram(tn.program)&&(pa=!0,yi=!0,ki=!0),X.id!==O&&(O=X.id,yi=!0),pa||q!==w){de.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),gt.setValue(F,"projectionMatrix",w.projectionMatrix),gt.setValue(F,"viewMatrix",w.matrixWorldInverse);let Zt=gt.map.cameraPosition;Zt!==void 0&&Zt.setValue(F,je.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&gt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,yi=!0,ki=!0)}if(Fe.needsLights&&(hn.state.sunShadowMap.length>0&&gt.setValue(F,"sunShadowMap",hn.state.sunShadowMap,Ne),hn.state.directionalShadowMap.length>0&&gt.setValue(F,"directionalShadowMap",hn.state.directionalShadowMap,Ne),hn.state.spotShadowMap.length>0&&gt.setValue(F,"spotShadowMap",hn.state.spotShadowMap,Ne),hn.state.pointShadowMap.length>0&&gt.setValue(F,"pointShadowMap",hn.state.pointShadowMap,Ne)),Y.isSkinnedMesh){gt.setOptional(F,Y,"bindMatrix"),gt.setOptional(F,Y,"bindMatrixInverse");let Lt=Y.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),gt.setValue(F,"boneTexture",Lt.boneTexture,Ne))}Y.isBatchedMesh&&(gt.setOptional(F,Y,"batchingTexture"),gt.setValue(F,"batchingTexture",Y._matricesTexture,Ne),gt.setOptional(F,Y,"batchingIdTexture"),gt.setValue(F,"batchingIdTexture",Y._indirectTexture,Ne),gt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&gt.setValue(F,"batchingColorTexture",Y._colorsTexture,Ne));let In=J.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&ne.update(Y,J,tn),(yi||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,gt.setValue(F,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(jt.envMapIntensity.value=U.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=bx()),yi){if(gt.setValue(F,"toneMappingExposure",A.toneMappingExposure),Fe.needsLights&&pf(jt,ki),Ee&&X.fog===!0&&ve.refreshFogUniforms(jt,Ee),ve.refreshMaterialUniforms(jt,X,he,ge,T.state.transmissionRenderTarget[w.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Lt=M,Zt=0;for(let jn of T.state.lightProbeGridArray)jn.texture!==null&&(Lt.textures[Zt]=jn.texture,Lt.min[Zt]=jn.boundingBox.min,Lt.max[Zt]=jn.boundingBox.max,Lt.resolution[Zt]=jn.resolution,Zt++);for(let jn in Lt)Lt[jn].length=Zt;jt.probesSH.value=Lt.textures,jt.probesMin.value=Lt.min,jt.probesMax.value=Lt.max,jt.probesResolution.value=Lt.resolution}Js.upload(F,Ph(Fe),jt,Ne)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Js.upload(F,Ph(Fe),jt,Ne),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(F,"center",Y.center),gt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(F,"normalMatrix",Y.normalMatrix),gt.setValue(F,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Lt=X.uniformsGroups;for(let Zt=0,jn=Lt.length;Zt<jn;Zt++){let Dh=Lt[Zt];Pe.update(Dh,tn),Pe.bind(Dh,tn)}}return tn}function pf(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function mf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(w,U,J){let X=ue.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ue.get(w.texture).__webglTexture=U,ue.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let J=ue.get(w);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,J=0){ae=w,Z=U,V=J;let X=null,Y=!1,Ee=!1;if(w){let be=ue.get(w);if(be.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(F.FRAMEBUFFER,be.__webglFramebuffer),H.copy(w.viewport),k.copy(w.scissor),j=w.scissorTest,de.viewport(H),de.scissor(k),de.setScissorTest(j),O=-1;return}else if(be.__webglFramebuffer===void 0)Ne.setupRenderTarget(w);else if(be.__hasExternalTextures)Ne.rebindTextures(w,ue.get(w.texture).__webglTexture,ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let tt=w.depthTexture;if(be.__boundDepthTexture!==tt){if(tt!==null&&ue.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(w)}}let Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);let He=ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[U])?X=He[U][J]:X=He[U],Y=!0):w.samples>0&&Ne.useMultisampledRTT(w)===!1?X=ue.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?X=He[J]:X=He,H.copy(w.viewport),k.copy(w.scissor),j=w.scissorTest}else H.copy(we).multiplyScalar(he).floor(),k.copy(ke).multiplyScalar(he).floor(),j=Ze;if(J!==0&&(X=z),de.bindFramebuffer(F.FRAMEBUFFER,X)&&de.drawBuffers(w,X),de.viewport(H),de.scissor(k),de.setScissorTest(j),Y){let be=ue.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,J)}else if(Ee){let be=U;for(let Ie=0;Ie<w.textures.length;Ie++){let He=ue.get(w.textures[Ie]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ie,He.__webglTexture,J,be)}}else if(w!==null&&J!==0){let be=ue.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,J)}O=-1};function Lh(w){let U=ue.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=Le.textureFormatReadable(w.format),U.__typeReadable=Le.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,J,X,Y,Ee,De,be=0){if(!(w&&w.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){de.bindFramebuffer(F.FRAMEBUFFER,Ie);try{let He=w.textures[be],tt=He.format,pt=He.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be);let Ue=Lh(He);if(Ue.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-X&&J>=0&&J<=w.height-Y&&F.readPixels(U,J,X,Y,oe.convert(tt),oe.convert(pt),Ee)}finally{let He=ae!==null?ue.get(ae).__webglFramebuffer:null;de.bindFramebuffer(F.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(w,U,J,X,Y,Ee,De,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(U>=0&&U<=w.width-X&&J>=0&&J<=w.height-Y){de.bindFramebuffer(F.FRAMEBUFFER,Ie);let He=w.textures[be],tt=He.format,pt=He.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be);let Ue=Lh(He);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.bufferData(F.PIXEL_PACK_BUFFER,Ee.byteLength,F.STREAM_READ),F.readPixels(U,J,X,Y,oe.convert(tt),oe.convert(pt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ht=ae!==null?ue.get(ae).__webglFramebuffer:null;de.bindFramebuffer(F.FRAMEBUFFER,Ht);let Rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qu(F,Rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ee),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(mt),F.deleteSync(Rt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,J=0){let X=Math.pow(2,-J),Y=Math.floor(w.image.width*X),Ee=Math.floor(w.image.height*X),De=U!==null?U.x:0,be=U!==null?U.y:0;Ne.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,De,be,Y,Ee),de.unbindTexture()},this.copyTextureToTexture=function(w,U,J=null,X=null,Y=0,Ee=0){let De,be,Ie,He,tt,pt,Ue,mt,Ht,Rt=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(J!==null)De=J.max.x-J.min.x,be=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,tt=J.min.y,pt=J.isBox3?J.min.z:0;else{let gt=Math.pow(2,-Y);De=Math.floor(Rt.width*gt),be=Math.floor(Rt.height*gt),w.isDataArrayTexture?Ie=Rt.depth:w.isData3DTexture?Ie=Math.floor(Rt.depth*gt):Ie=1,He=0,tt=0,pt=0}X!==null?(Ue=X.x,mt=X.y,Ht=X.z):(Ue=0,mt=0,Ht=0);let At=oe.convert(U.format),en=oe.convert(U.type),Fe;U.isData3DTexture?(Ne.setTexture3D(U,0),Fe=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ne.setTexture2DArray(U,0),Fe=F.TEXTURE_2D_ARRAY):(Ne.setTexture2D(U,0),Fe=F.TEXTURE_2D),de.activeTexture(F.TEXTURE0),de.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),de.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),de.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let hn=de.getParameter(F.UNPACK_ROW_LENGTH),xt=de.getParameter(F.UNPACK_IMAGE_HEIGHT),Hi=de.getParameter(F.UNPACK_SKIP_PIXELS),tn=de.getParameter(F.UNPACK_SKIP_ROWS),pa=de.getParameter(F.UNPACK_SKIP_IMAGES);de.pixelStorei(F.UNPACK_ROW_LENGTH,Rt.width),de.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rt.height),de.pixelStorei(F.UNPACK_SKIP_PIXELS,He),de.pixelStorei(F.UNPACK_SKIP_ROWS,tt),de.pixelStorei(F.UNPACK_SKIP_IMAGES,pt);let yi=w.isDataArrayTexture||w.isData3DTexture,ki=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let gt=ue.get(w),jt=ue.get(U),In=ue.get(gt.__renderTarget),Lt=ue.get(jt.__renderTarget);de.bindFramebuffer(F.READ_FRAMEBUFFER,In.__webglFramebuffer),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Zt=0;Zt<Ie;Zt++)yi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ue.get(w).__webglTexture,Y,pt+Zt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ue.get(U).__webglTexture,Ee,Ht+Zt)),F.blitFramebuffer(He,tt,He+De,tt+be,Ue,mt,Ue+De,mt+be,F.DEPTH_BUFFER_BIT,F.NEAREST);de.bindFramebuffer(F.READ_FRAMEBUFFER,null),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||ue.has(w)){let gt=ue.get(w),jt=ue.get(U);de.bindFramebuffer(F.READ_FRAMEBUFFER,C),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let In=0;In<Ie;In++)yi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gt.__webglTexture,Y,pt+In):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gt.__webglTexture,Y),ki?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,Ee,Ht+In):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jt.__webglTexture,Ee),Y!==0?F.blitFramebuffer(He,tt,He+De,tt+be,Ue,mt,Ue+De,mt+be,F.COLOR_BUFFER_BIT,F.NEAREST):ki?F.copyTexSubImage3D(Fe,Ee,Ue,mt,Ht+In,He,tt,De,be):F.copyTexSubImage2D(Fe,Ee,Ue,mt,He,tt,De,be);de.bindFramebuffer(F.READ_FRAMEBUFFER,null),de.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ki?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Fe,Ee,Ue,mt,Ht,De,be,Ie,At,en,Rt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Fe,Ee,Ue,mt,Ht,De,be,Ie,At,Rt.data):F.texSubImage3D(Fe,Ee,Ue,mt,Ht,De,be,Ie,At,en,Rt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ee,Ue,mt,De,be,At,en,Rt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ee,Ue,mt,Rt.width,Rt.height,At,Rt.data):F.texSubImage2D(F.TEXTURE_2D,Ee,Ue,mt,De,be,At,en,Rt);de.pixelStorei(F.UNPACK_ROW_LENGTH,hn),de.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),de.pixelStorei(F.UNPACK_SKIP_PIXELS,Hi),de.pixelStorei(F.UNPACK_SKIP_ROWS,tn),de.pixelStorei(F.UNPACK_SKIP_IMAGES,pa),Ee===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Fe),de.unbindTexture()},this.initRenderTarget=function(w){ue.get(w).__webglFramebuffer===void 0&&Ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ne.setTextureCube(w,0):w.isData3DTexture?Ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ne.setTexture2DArray(w,0):Ne.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){Z=0,V=0,ae=null,de.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var js={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ex=new Ws(-1,1,1,-1,0,1),lh=class extends wt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},Tx=new lh,Ui=class{constructor(e){this._mesh=new vt(Tx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ex)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fi=class extends Tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gi.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ui(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ca=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ml=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Sl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new te);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fi(js),this.copyPass.material.blending=di,this.timer=new Wr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ca!==void 0&&(a instanceof ca?n=!0:a instanceof Ml&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var bl=class extends Tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Se}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Hd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var er=class i extends Tn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ot(r,a,{type:Wt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ot(r,a,{type:Wt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Hd;this.highPassUniforms=gi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(js.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:js.vertexShader,fragmentShader:js.fragmentShader,premultipliedAlpha:!0,blending:Li,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new fn,this._fsQuad=new Ui(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Gt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};er.BlurDirectionX=new te(1,0);er.BlurDirectionY=new te(0,1);var ha={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var El=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=gi.clone(ha.uniforms),this.material=new Gs({name:ha.name,uniforms:this.uniforms,vertexShader:ha.vertexShader,fragmentShader:ha.fragmentShader}),this._fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ns?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$r&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Oi(i){let e=i>>>0||1;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}function Mt(i=1){let e=Oi(i),t=new Uint8Array(512),n=new Float32Array(256),s=new Float32Array(256);for(let a=0;a<256;a++){t[a]=a;let o=e()*Math.PI*2;n[a]=Math.cos(o),s[a]=Math.sin(o)}for(let a=255;a>0;a--){let o=e()*(a+1)|0,l=t[a];t[a]=t[o],t[o]=l}for(let a=0;a<256;a++)t[a+256]=t[a];let r=a=>a*a*a*(a*(a*6-15)+10);return function(a,o){let l=Math.floor(a),c=Math.floor(o),h=a-l,d=o-c,u=l&255,p=c&255,g=t[t[u]+p],y=t[t[u+1]+p],m=t[t[u]+p+1],f=t[t[u+1]+p+1],_=n[g]*h+s[g]*d,v=n[y]*(h-1)+s[y]*d,M=n[m]*h+s[m]*(d-1),b=n[f]*(h-1)+s[f]*(d-1),T=r(h),x=r(d);return 1.414*(_+T*(v-_)+x*(M+T*(b-M)-(_+T*(v-_))))}}function St(i,e,t,n=5,s=2.02,r=.5){let a=0,o=.5,l=1,c=0;for(let h=0;h<n;h++)a+=o*i(e*l,t*l),c+=o,o*=r,l*=s;return a/c}function as(i=1){let e=Oi(i),t=new Float32Array(512);for(let s=0;s<512;s++)t[s]=e();let n=(s,r)=>(Math.imul(s,374761393)+Math.imul(r,668265263)>>>0)%256;return function(s,r){let a=Math.floor(s),o=Math.floor(r),l=9,c=9;for(let h=-1;h<=1;h++)for(let d=-1;d<=1;d++){let u=n(a+d,o+h),p=a+d+t[u],g=o+h+t[u+256],y=(p-s)*(p-s)+(g-r)*(g-r);y<l?(c=l,l=y):y<c&&(c=y)}return[Math.sqrt(l),Math.sqrt(c)]}}var mn=(i,e=0,t=1)=>i<e?e:i>t?t:i,Oe=(i,e,t)=>{let n=mn((t-i)/(e-i));return n*n*(3-2*n)},ch=(i,e,t)=>i+(e-i)*t;function Ge(i,e,t){return[ch(i[0],e[0],t),ch(i[1],e[1],t),ch(i[2],e[2],t)]}function Qe(i){let e=parseInt(i.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}var hh=new Map;function gn(i,e){return hh.has(i)||hh.set(i,e()),hh.get(i)}function _n(i,e,t={}){let n=i,s=t.h||i,r=Tl(n,s),a=r.getContext("2d"),o=a.createImageData(n,s),l=o.data,c=t.normal?new Float32Array(n*s):null,h=t.rough?Tl(n,s):null,d=h?h.getContext("2d").createImageData(n,s):null,u=t.alpha?Tl(n,s):null,p=u?u.getContext("2d").createImageData(n,s):null,g={c:[0,0,0],h:0,r:.5,a:1};for(let m=0;m<s;m++)for(let f=0;f<n;f++){g.h=0,g.r=.5,g.a=1,e((f+.5)/n,(m+.5)/s,g);let _=(m*n+f)*4;if(l[_]=g.c[0],l[_+1]=g.c[1],l[_+2]=g.c[2],l[_+3]=t.alphaInMap?g.a*255:255,c&&(c[m*n+f]=g.h),d){let v=g.r*255;d.data[_]=d.data[_+1]=d.data[_+2]=v,d.data[_+3]=255}if(p){let v=g.a*255;p.data[_]=p.data[_+1]=p.data[_+2]=v,p.data[_+3]=255}}a.putImageData(o,0,0);let y={map:wl(r,!0,t)};return c&&(y.normalMap=wx(c,n,s,t.normal,t)),h&&(h.getContext("2d").putImageData(d,0,0),y.roughnessMap=wl(h,!1,t)),u&&(u.getContext("2d").putImageData(p,0,0),y.alphaMap=wl(u,!1,t)),y.canvas=r,y}function Tl(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function wl(i,e,t={}){let n=new Cn(i);return n.colorSpace=e?Ft:Bn,n.anisotropy=8,t.repeat&&(n.wrapS=n.wrapT=Rs),n.needsUpdate=!0,n}function wx(i,e,t,n,s){let r=Tl(e,t),a=r.getContext("2d"),o=a.createImageData(e,t),l=o.data,c=!!s.repeat,h=(d,u)=>(c?(d=(d+e)%e,u=(u+t)%t):(d=d<0?0:d>=e?e-1:d,u=u<0?0:u>=t?t-1:u),i[u*e+d]);for(let d=0;d<t;d++)for(let u=0;u<e;u++){let p=(h(u+1,d)-h(u-1,d))*n,g=(h(u,d+1)-h(u,d-1))*n,y=-p,m=g,f=1,_=Math.hypot(y,m,f);y/=_,m/=_,f/=_;let v=(d*e+u)*4;l[v]=(y*.5+.5)*255,l[v+1]=(m*.5+.5)*255,l[v+2]=(f*.5+.5)*255,l[v+3]=255}return a.putImageData(o,0,0),wl(r,!1,s)}function kd(i=3,e=1024){return gn("batter"+i+e,()=>{let t=Mt(i),n=Mt(i+7),s=Mt(i+13),r=Mt(i+21),a=as(i+5),o=as(i+9),l=as(i+11),c=Qe("#ECCB8E"),h=Qe("#DEA556"),d=Qe("#C47E37"),u=Qe("#98531F"),p=Qe("#5E2C0F");return _n(e,(g,y,m)=>{let f=(g-.5)*2,_=(y-.5)*2,v=Math.hypot(f,_),M=Math.atan2(_,f),b=mn(.48+.6*St(s,f*1.5,_*1.5,4)+.22*Oe(.6,.98,v)),T=f*8.5+1.3*St(t,f*2.4,_*2.4,3),x=_*8.5+1.3*St(n,f*2.4+3,_*2.4,3),[S,P]=a(T,x),A=Oe(0,.24,P-S)*Oe(.3,.78,b+.22*r(f*6,_*6)),[L,D]=l(T*2.6,x*2.6),z=Oe(0,.26,D-L)*Oe(.4,.9,b),C=mn(.12+.38*b+.32*A+.14*z+.05*r(f*48,_*48)),W=C<.4?Ge(c,h,C/.4):C<.64?Ge(h,d,(C-.4)/.24):C<.84?Ge(d,u,(C-.64)/.2):Ge(u,p,(C-.84)/.16),[Z]=o(f*26,_*26),V=(1-Oe(.035,.075,Z))*Oe(.45,.85,b);W=Ge(W,Ge(W,p,.6),V*.6),m.c=W,m.h=.45*A+.22*z+.1*b-V*.35+.05*St(n,f*70,_*70,2),m.r=mn(.74-.22*C+.05*t(f*30,_*30));let ae=.955+.03*St(t,Math.cos(M)*3,Math.sin(M)*3,3)+.012*n(M*14,1.3),[O]=o(f*14,_*14),q=(1-Oe(.05,.1,O))*Oe(.88,.95,v)*Oe(.55,.8,b);m.a=v<ae&&q<.5?1:0},{normal:4,rough:!0,alpha:!0})})}function Gd(i,e=4,t=1024){return gn("waffle"+e+t,()=>{let n=Mt(e),s=Mt(e+3),r=Qe("#E6BE7A"),a=Qe("#CF9650"),o=Qe("#B5773A"),l=Qe("#80491D");return _n(t,(c,h,d)=>{let u=(c-.5)*2,p=(h-.5)*2,g=i(u,p),y=St(n,u*3,p*3,4)*.5+.5,m=g<.5?Ge(r,a,g/.5):Ge(a,o,(g-.5)/.5);m=Ge(m,l,Oe(.55,.95,y)*Oe(.7,1,g)*.7),m=Ge(m,Ge(m,Qe("#F3D79A"),.5),(1-Oe(.25,.6,y))*(1-g)*.5);let f=Math.hypot(u,p);m=Ge(m,l,Oe(.86,1,f)*.5),d.c=m,d.h=.3*St(s,u*36,p*36,3),d.r=mn(.62-.16*g+.08*s(u*20,p*20))},{normal:1.4,rough:!0})})}function Vd(i=512){return gn("sskin"+i,()=>{let e=Mt(31),t=Mt(32),n=Qe("#C8141E"),s=Qe("#8A0B12"),r=Qe("#E85A4F"),a=Qe("#E9C463");return _n(i,(o,l,c)=>{let u=l*14,p=Math.floor(u),g=p%2*.5,y=o*20+g,m=y-Math.floor(y)-.5,f=u-p-.5,_=Math.hypot(m*1.1,f*1.4),v=1-Oe(.12,.3,_),M=1-Oe(.06,.11,_),b=Ge(n,s,mn(.5+.5*St(e,o*8,l*8,4))*.7);b=Ge(b,r,Oe(.05,0,l)+Oe(.12,0,l)*.4),b=Ge(b,s,v*.5),b=Ge(b,a,M*(l>.06?1:0)),c.c=b,c.h=-v*.6+M*.5+.05*t(o*80,l*80),c.r=mn(.28+v*.2+M*.3)},{normal:4,rough:!0})})}function Wd(i=512){return gn("sface"+i,()=>{let e=Mt(41),t=Mt(43),n=Qe("#F2BFB2"),s=Qe("#E5746E"),r=Qe("#CF2F36"),a=Qe("#9C0E18"),o=Qe("#E3B85A");return _n(i,(l,c,h)=>{let d=(l-.5)*2,u=(c-.5)*2,p=Math.hypot(d*1.05,u*.82),g=Math.atan2(u,d),y=Math.hypot(d*3.2,(u+.08)*1.15),m=1-Oe(.12,.5,y),f=Math.pow(.5+.5*Math.sin(g*26+4*e(d*2.5,u*2.5)),3),_=Ge(r,s,(1-Oe(.2,.75,y))*.7);_=Ge(_,n,m*.9),_=Ge(_,Ge(_,n,.55),f*Oe(.25,.6,p)*(1-Oe(.72,.86,p))*.45),_=Ge(_,Ge(r,a,.5),.25*(St(t,d*5,u*5,3)*.5+.5)),_=Ge(_,a,Oe(.8,.95,p));let v=g*9,M=Math.hypot((v-Math.round(v))*.35,(p-.9)*6);_=Ge(_,o,(1-Oe(.05,.12,M))*.8),h.c=_,h.h=f*.25*Oe(.3,.8,p)+.12*St(e,d*14,u*14,3)-m*.05,h.r=.18+.12*m+.06*t(d*20,u*20)},{normal:3.5,rough:!0})})}function Xd(i=256){return gn("bface"+i,()=>{let e=Mt(51),t=Qe("#F1DC9C"),n=Qe("#DDBF6E"),s=Qe("#6B4A22");return _n(i,(r,a,o)=>{let l=(r-.5)*2,c=(a-.5)*2,h=Math.hypot(l,c),d=Math.atan2(c,l),u=Ge(t,n,Oe(.75,.98,h)*.8);u=Ge(u,Qe("#F7E8B8"),(1-Oe(0,.35,h))*.4);let p=Math.cos(d*3)*.5+.5,g=(1-Oe(.04,.09,Math.abs(h-.16-.05*p)))*(h<.3?1:0),y=(1-Oe(.012,.03,Math.abs(h-.2)))*(Math.sin(d*18)>.6?1:0);u=Ge(u,Ge(u,s,.35),g*.6),u=Ge(u,s,y*.7),u=Ge(u,Ge(u,n,.5),(.5+.5*Math.sin(d*40+e(l*5,c*5)*4))*Oe(.3,.9,h)*.25),o.c=u,o.h=.15*St(e,l*10,c*10,3)-g*.1,o.r=.42},{normal:2,rough:!0})})}function uh(i,e=256){return gn("berry"+i+e,()=>{let t=Mt(i==="blue"?61:62),n=Qe(i==="blue"?"#2B3768":"#B4123A"),s=Qe(i==="blue"?"#141B3A":"#7A0A27"),r=Qe(i==="blue"?"#7C88B5":"#E0506E");return _n(e,(a,o,l)=>{let c=St(t,a*6,o*6,4)*.5+.5,h=Ge(n,s,c);if(i==="blue")h=Ge(h,r,Oe(.5,.9,St(t,a*12+3,o*12,3)*.5+.5)*.45);else{let d=Math.hypot(a*9%1-.5,o*7%1-.5);h=Ge(h,r,(1-Oe(.1,.45,d))*.35),l.h=1-Oe(.1,.5,d)}l.c=h,l.r=i==="blue"?.55:.3},{normal:3,rough:!0})})}function qd(i=1024){return gn("wood"+i,()=>{let e=Mt(71),t=Mt(72),n=Qe("#6E4426"),s=Qe("#331B0C"),r=Qe("#573219"),a=_n(i,(l,c,h)=>{let d=(l-.5)*2,u=(c-.5)*2,p=u*11+1.6*St(e,d*.9,u*2.2,4)+.35*t(d*5,u*24),g=.5+.5*Math.sin(p*Math.PI),y=.5+.5*Math.sin((u*260+8*e(d*4,u*14))*Math.PI),m=St(t,d*2,u*6,3)*.5+.5,f=Ge(n,r,g*.35+m*.25);f=Ge(f,s,Oe(.9,1,g)*.18+y*.07);let _=Math.hypot(d,u);f=Ge(f,s,Oe(.88,1,_)*.45),h.c=f,h.h=g*.2+y*.2,h.r=.55+.12*g+.1*m},{normal:2,rough:!0}),o=a.canvas.getContext("2d");return o.save(),o.translate(i/2,i/2),o.rotate(-.42),o.font=`italic 700 ${i*.07}px Georgia, serif`,o.textAlign="center",o.fillStyle="rgba(60,30,12,.55)",o.fillText("Crepe Craft",0,-i*.36),o.restore(),a.map.needsUpdate=!0,a})}function dh(i="spinach",e=256){return gn("leaf"+i+e,()=>{let t=Mt(i==="basil"?81:82),n=Qe(i==="basil"?"#3E8E2C":"#1F4A1A"),s=Qe(i==="basil"?"#8CC46A":"#4E7A35"),r=Qe(i==="basil"?"#24561A":"#10260D");return _n(e,(a,o,l)=>{let c=(a-.5)*2,h=o,d=Math.sin(Math.PI*Math.pow(h,.8))*(i==="basil"?.62:.78)*(1+.05*t(h*9,1)),u=Math.abs(c)<d?1:0,p=1-Oe(.01,.05,Math.abs(c)),g=1-Oe(.01,.035,Math.abs(((Math.abs(c)*3-h*2.2)%.5+.5)%.5-.25)),y=Ge(n,r,mn(.5+.6*St(t,c*4,h*6,4))*.6);y=Ge(y,s,Math.max(p,g*.6)*.8),l.c=y,l.a=u,l.h=Math.max(p,g)*.5+.2*St(t,c*10,h*10,3),l.r=i==="basil"?.35:.45},{normal:3,rough:!0,alpha:!0})})}function Yd(i=256){return gn("tomato"+i,()=>{let e=Mt(91),t=Qe("#D3261C"),n=Qe("#E8714A"),s=Qe("#F2D58A"),r=Qe("#B3140F");return _n(i,(a,o,l)=>{let c=(a-.5)*2,h=(o-.5)*2,d=Math.hypot(c,h),u=Math.atan2(h,c),p=(u/(Math.PI*2)*5%1+1)%1,g=(1-Oe(.28,.42,Math.abs(p-.5)))*Oe(.25,.35,d)*(1-Oe(.72,.8,d)),y=Ge(t,n,g*.8),m=Math.sin(u*40)>.7&&Math.abs(d-.55)<.06?1:0;y=Ge(y,s,m*g),y=Ge(y,r,Oe(.9,.98,d)),l.c=y,l.h=g*-.3+m*.2,l.r=.2+.2*(1-g)},{normal:2,rough:!0})})}function Zd(i=256){return gn("grill"+i,()=>{let e=Mt(101),t=Qe("#D9B07A"),n=Qe("#9A5E2A"),s=Qe("#3C2010");return _n(i,(r,a,o)=>{let l=St(e,r*6,a*6,4)*.5+.5,c=Ge(t,n,l*.8),h=1-Oe(.06,.14,Math.abs((r+a*.4)*5%1-.5));c=Ge(c,s,h*.8),o.c=c,o.h=-h*.3+.2*l,o.r=.5-h*.15},{normal:3,rough:!0})})}function $d(i=256){return gn("mush"+i,()=>{let e=Mt(111),t=Qe("#D8C6A4"),n=Qe("#7A5638"),s=Qe("#9C8466");return _n(i,(r,a,o)=>{let l=(r-.5)*2,c=(a-.5)*2,h=l*l/.9+Math.pow(Math.max(0,-c+.05),2)/.55<1&&c<.15,d=Math.abs(l)<.22+.05*c&&c>=.05&&c<.85,u=h||d?1:0,p=Ge(t,s,(1-Oe(0,.12,Math.abs(c-.12)))*.7),g=h?1-(l*l/.9+Math.pow(Math.max(0,-c+.05),2)/.55):1;p=Ge(p,n,(1-Oe(0,.12,g))*(c<.1?1:0)),p=Ge(p,Ge(p,n,.4),.3*(St(e,l*8,c*8,3)*.5+.5)),o.c=p,o.a=u,o.h=.2*St(e,l*12,c*12,3),o.r=.5},{normal:2,rough:!0,alpha:!0})})}function Kn(i,e,t,n=256,s=.9){return gn("spk"+i+e+t+n,()=>{let r=Mt(t),a=as(t+1),o=Qe(i),l=Qe(e);return _n(n,(c,h,d)=>{let u=St(r,c*5,h*5,4)*.5+.5,[p]=a(c*60,h*60),g=(1-Oe(.05,.12,p))*(r(c*9+7,h*9)>s-1?1:0),y=Ge(o,Ge(o,[255,255,255],.3),u*.4);y=Ge(y,l,g*.85),d.c=y,d.h=u*.6-g*.2,d.r=.5},{normal:2,rough:!0,repeat:!0})})}function Jd(i=512){return gn("cond"+i,()=>{let e=as(121),t=as(122),n=Mt(123);return _n(i,(s,r,a)=>{let[o]=e(s*26,r*40),[l]=t(s*70,r*110),c=1-Oe(.18,.36,o),h=1-Oe(.1,.3,l);a.c=[255,255,255],a.h=c*.9+h*.25+.03*n(s*50,r*50),a.r=mn(.05+.25*h*(1-c))},{normal:6,rough:!0,repeat:!0})})}function Kd(i,e=131,t=256,n={}){return gn("liq"+JSON.stringify(i)+e+JSON.stringify(n),()=>{let s=Mt(e),r=i.map(o=>[o[0],Qe(o[1])]),a=n.drip?Qe(n.drip):null;return _n(t,(o,l,c)=>{let h=1-l,d=mn(h+.04*St(s,o*6,h*3,3)),u=r[0][1];for(let p=1;p<r.length;p++){let g=Oe(r[p-1][0],r[p][0],d);u=Ge(u,r[p][1],g)}if(u=Ge(u,Ge(u,[255,255,255],.25),(St(s,o*10,h*14,4)*.5+.5)*(n.marble||.2)),a){let p=o*(n.drips||7)+.25*s(o*3,h*1.5),g=Math.abs(p%1-.5),y=.3+.5*(.5+.5*s(Math.floor(p)*3.1,2)),m=.035+.03*(.5+.5*s(Math.floor(p)*1.7,h*4)),f=1-y,_=Math.exp(-Math.pow((h-f)/.025,2))*.03,v=(1-Oe(m+_,m+_+.02,g))*Oe(f-.012,f+.004,h);u=Ge(u,a,v*.92)}c.c=u,c.r=.35},{h:t*2})})}var Rx=`
float h13(vec3 p){ p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vn3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(mix(h13(i), h13(i + vec3(1,0,0)), f.x), mix(h13(i + vec3(0,1,0)), h13(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h13(i + vec3(0,0,1)), h13(i + vec3(1,0,1)), f.x), mix(h13(i + vec3(0,1,1)), h13(i + vec3(1,1,1)), f.x), f.y), f.z); }
`,Rl={uDust:{value:0},uCook:{value:1},uTime:{value:0}};function Al(i,{scale:e=3,amount:t=null,batter:n=!1,uniform:s=null,cook:r=null}={}){let a=s||(t==null?Rl.uDust:{value:t});return i.userData.dust=a,i.onBeforeCompile=o=>{o.uniforms.uDust=a,o.uniforms.uCook=r||Rl.uCook,o.uniforms.uDustScale={value:e},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLPos = position;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLPos; uniform float uDust; uniform float uCook; uniform float uDustScale;
`+Rx).replace("#include <map_fragment>",`#include <map_fragment>
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
        }`)},i.customProgramCacheKey=()=>"dust"+(n?"b":"")+e,i}var fh=new Map,Je=(i,e)=>(fh.has(i)||fh.set(i,e()),fh.get(i)),Ve={batter:(i=3,e=1024,t=null)=>Je("batter"+i+e+(t?t.id??(t.id=Math.random().toString(36).slice(2)):""),()=>{let n=kd(i,e),s=new qe({map:n.map,normalMap:n.normalMap,normalScale:new te(.9,.9),roughnessMap:n.roughnessMap,roughness:1,alphaMap:n.alphaMap,alphaTest:.5,side:Bt,sheen:.35,sheenRoughness:.6,sheenColor:new Se("#ffd9a0")});return Al(s,{scale:2.6,batter:!0,uniform:t,cook:t&&t.cook})}),waffle:i=>Je("waffle",()=>{let e=Gd(i),t=Kn("#E8C27E","#B98444",141,256,.7),n=Al(new qe({map:e.map,normalMap:e.normalMap,roughnessMap:e.roughnessMap,roughness:1,sheen:.3,sheenColor:new Se("#ffcf8a"),sheenRoughness:.5}),{scale:2.4}),s=new ln({map:t.map,normalMap:t.normalMap,roughness:.85});t.map.repeat.set(3,1),t.normalMap.repeat.set(3,1);let r=new qe({color:"#a8652c",roughness:.62,sheen:.3,sheenColor:new Se("#ffcf8a"),sheenRoughness:.5});return[n,s,r]}),nutella:()=>Je("nutella",()=>new qe({color:"#3b1a0b",roughness:.3,clearcoat:.9,clearcoatRoughness:.12,sheen:.2})),chocolate:()=>Je("choc",()=>new qe({color:"#2a1208",roughness:.26,clearcoat:1,clearcoatRoughness:.08})),caramel:()=>Je("caramel",()=>new qe({color:"#b5621c",roughness:.18,clearcoat:1,clearcoatRoughness:.05,sheen:.3,sheenColor:new Se("#ffb060")})),cookiebutter:()=>Je("cbutter",()=>new qe({color:"#a8642b",roughness:.35,clearcoat:.6,clearcoatRoughness:.2})),maple:()=>Je("maple",()=>new qe({color:"#8c420b",roughness:.06,clearcoat:1,clearcoatRoughness:.03,sheen:.4,sheenColor:new Se("#ffae55")})),balsamic:()=>Je("balsamic",()=>new qe({color:"#1a0805",roughness:.12,clearcoat:1,clearcoatRoughness:.05})),pesto:()=>Je("pesto",()=>new qe({color:"#4d6a1c",roughness:.45,clearcoat:.5,clearcoatRoughness:.3})),cream:()=>Je("cream",()=>Al(new qe({color:"#fbf6ec",roughness:.52,sheen:.7,sheenColor:new Se("#ffffff"),sheenRoughness:.45}),{scale:3,amount:0})),vanilla:()=>Je("vanilla",()=>{let i=Kn("#F4E7CB","#3d2a17",151,256,.82);return new qe({map:i.map,normalMap:i.normalMap,normalScale:new te(.5,.5),roughness:.6,sheen:.5,sheenColor:new Se("#fff3dc"),sheenRoughness:.5})}),strawberryIce:()=>Je("sice",()=>{let i=Kn("#EBA1A6","#C0303C",152,256,.75);return new qe({map:i.map,normalMap:i.normalMap,normalScale:new te(.5,.5),roughness:.6,sheen:.5,sheenColor:new Se("#ffd8dc")})}),sskin:()=>Je("sskin",()=>{let i=Vd();return new qe({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,clearcoat:.5,clearcoatRoughness:.25,sheen:.3,sheenColor:new Se("#ff6a6a")})}),sface:()=>Je("sface",()=>{let i=Wd();return new qe({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,clearcoat:.45,clearcoatRoughness:.28,sheen:.35,sheenColor:new Se("#ff8a80"),sheenRoughness:.5,emissive:new Se("#5a0408"),emissiveIntensity:.2})}),bface:()=>Je("bface",()=>{let i=Xd();return new qe({map:i.map,normalMap:i.normalMap,roughness:.42,clearcoat:.35,clearcoatRoughness:.3,sheen:.4,sheenColor:new Se("#fff2c0")})}),bside:()=>Je("bside",()=>new qe({color:"#e6cc80",roughness:.45,sheen:.4,sheenColor:new Se("#fff0b0")})),blueberry:()=>Je("blue",()=>{let i=uh("blue");return new qe({map:i.map,normalMap:i.normalMap,roughness:.5,sheen:.6,sheenColor:new Se("#9aa6d6")})}),raspberry:()=>Je("rasp",()=>{let i=uh("rasp");return new qe({map:i.map,normalMap:i.normalMap,roughness:.3,clearcoat:.6,clearcoatRoughness:.2,sheen:.5,sheenColor:new Se("#ff7a9a")})}),marshmallow:()=>Je("mallow",()=>Al(new qe({color:"#fbf8f2",roughness:.78,sheen:.8,sheenColor:new Se("#ffffff"),sheenRoughness:.6}),{scale:4,amount:.35})),graham:()=>Je("graham",()=>{let i=Kn("#C88B4E","#8A5426",161,256,.6);return new ln({map:i.map,normalMap:i.normalMap,roughness:.85})}),oreo:()=>Je("oreo",()=>new ln({color:"#1c1210",roughness:.7})),oreoCream:()=>Je("oreoc",()=>new ln({color:"#f1ece4",roughness:.6})),biscoff:()=>Je("biscoff",()=>{let i=Kn("#B0692F","#7A4019",171,256,.6);return new ln({map:i.map,normalMap:i.normalMap,roughness:.8})}),chip:()=>Je("chip",()=>new qe({color:"#2b150a",roughness:.35,clearcoat:.5})),wood:()=>Je("wood",()=>{let i=qd();return new qe({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,clearcoat:.15,clearcoatRoughness:.5})}),plate:()=>Je("plate",()=>new qe({color:"#f4f1ec",roughness:.18,clearcoat:1,clearcoatRoughness:.05})),spinach:()=>Je("spinach",()=>{let i=dh("spinach");return new qe({map:i.map,normalMap:i.normalMap,alphaMap:i.alphaMap,alphaTest:.5,side:Bt,roughness:.45,clearcoat:.4,clearcoatRoughness:.3})}),basil:()=>Je("basil",()=>{let i=dh("basil");return new qe({map:i.map,normalMap:i.normalMap,alphaMap:i.alphaMap,alphaTest:.5,side:Bt,roughness:.35,clearcoat:.5,sheen:.3})}),tomato:()=>Je("tomato",()=>{let i=Yd();return new qe({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,clearcoat:.9,clearcoatRoughness:.1})}),tomatoSkin:()=>Je("tskin",()=>new qe({color:"#b5160f",roughness:.2,clearcoat:1})),mozzarella:()=>Je("mozz",()=>new qe({color:"#f6f2e8",roughness:.4,sheen:.6,sheenColor:new Se("#ffffff"),clearcoat:.3})),feta:()=>Je("feta",()=>{let i=Kn("#F3F0E6","#DCD5C2",181,128,.7);return new ln({map:i.map,normalMap:i.normalMap,roughness:.9})}),chicken:()=>Je("chicken",()=>{let i=Zd();return new qe({map:i.map,normalMap:i.normalMap,roughness:.55,clearcoat:.3,clearcoatRoughness:.4})}),chickenPesto:()=>Je("chickp",()=>{let i=Kn("#C99A5C","#3E6E1E",185,256,.55);return new qe({map:i.map,normalMap:i.normalMap,roughness:.5,clearcoat:.45,clearcoatRoughness:.35})}),mushroom:()=>Je("mush",()=>{let i=$d();return new ln({map:i.map,normalMap:i.normalMap,alphaMap:i.alphaMap,alphaTest:.5,side:Bt,roughness:.55})}),egg:()=>Je("egg",()=>{let i=Kn("#F4CF4A","#FBE9A0",191,128,.6);return new qe({map:i.map,normalMap:i.normalMap,normalScale:new te(1.4,1.4),roughness:.55,sheen:.5,sheenColor:new Se("#fff2a0")})}),cheese:()=>Je("cheese",()=>new qe({color:"#F0A92C",roughness:.28,clearcoat:.7,clearcoatRoughness:.2,sheen:.4,sheenColor:new Se("#ffd27a")})),cheesecake:()=>Je("ckake",()=>{let i=Kn("#F3E2C0","#E8CFA0",195,128,.6);return new qe({map:i.map,normalMap:i.normalMap,roughness:.7,sheen:.3})}),parmesan:()=>Je("parm",()=>new ln({color:"#f1e6c4",roughness:.8})),glass:()=>Je("glass",()=>{let i=Jd();return i.normalMap.repeat.set(3,4),i.roughnessMap.repeat.set(3,4),new qe({color:"#ffffff",metalness:0,roughness:.06,transmission:1,thickness:.02,ior:1.46,normalMap:i.normalMap,normalScale:new te(.35,.35),roughnessMap:i.roughnessMap,specularIntensity:1,side:Bt,transparent:!0,envMapIntensity:1.3})}),lid:()=>Je("lid",()=>new qe({color:"#ffffff",metalness:0,roughness:.04,transmission:1,thickness:.01,ior:1.45,side:Bt,transparent:!0,envMapIntensity:1.4})),ice:()=>Je("ice",()=>new qe({color:"#f4fbff",roughness:.08,transmission:.95,thickness:.15,ior:1.31,transparent:!0})),straw:(i="#f3efe6")=>Je("straw"+i,()=>new qe({color:i,roughness:.35,clearcoat:.5,side:Bt})),pineapple:()=>Je("pine",()=>new qe({color:"#f5c63c",roughness:.35,clearcoat:.6,sheen:.4,sheenColor:new Se("#fff0a0")})),rind:()=>Je("rind",()=>new ln({color:"#8a7a2a",roughness:.7})),paper:i=>Je("paper"+i,()=>new ln({color:i,roughness:.8,side:Bt})),pick:()=>Je("pick",()=>new ln({color:"#d9b98a",roughness:.7})),liquid:(i,e={})=>Je("liq"+JSON.stringify(i)+JSON.stringify(e),()=>{let t=Kd(i,131,256,e);return new qe({map:t.map,roughness:e.rough??.38,sheen:.5,sheenColor:new Se("#ffffff"),sheenRoughness:.6,clearcoat:.2})}),flat:(i,e=.5)=>Je("flat"+i+e,()=>new qe({color:i,roughness:e,sheen:.3}))};var Qd=i=>({uniforms:{tDiffuse:{value:null},uRes:{value:new te(1,1)},uAmt:{value:0},uSharp:{value:.22},uDir:{value:i},uDim:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uRes, uDir; uniform float uAmt, uSharp, uDim; varying vec2 vUv;
    void main(){
      float b = uAmt * smoothstep(uSharp, uSharp + .2, abs(vUv.x - .5));
      if (b < .01) { gl_FragColor = texture2D(tDiffuse, vUv); return; }
      vec2 st = uDir / uRes * b * 2.2; vec4 acc = vec4(0.); float w = 0.;
      for (int i = -7; i <= 7; i++) { float fi = float(i); float k = exp(-fi * fi / 18.); acc += texture2D(tDiffuse, vUv + st * fi) * k; w += k; }
      gl_FragColor = acc / w; gl_FragColor.rgb *= 1. - uDim * b;
    }`}),Cx={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.35},uGrain:{value:.035},uFade:{value:0},uRes:{value:new te(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVig, uGrain, uFade; uniform vec2 uRes; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 q = vUv - .5; q.x *= uRes.x / uRes.y * .75;
      c.rgb *= 1. - uVig * smoothstep(.25, .95, length(q));
      c.rgb += (h(vUv * uRes + fract(uTime) * 91.) - .5) * uGrain * (.4 + c.rgb);
      c.rgb *= 1. - uFade;
      gl_FragColor = c;
    }`};function Px(i){let e=new Us;e.add(new vt(new Sn(24,14,24),new fn({color:"#070403",side:Qt})));let t=(n,s,r,a,o,l,c)=>{let h=new vt(new on(n,s),new fn({color:new Se(r).multiplyScalar(a),side:Bt}));h.position.set(o,l,c),h.lookAt(0,0,0),e.add(h)};return t(7,3.5,"#fff4e8",5,1.5,6.5,3.5),t(1.6,7,"#ffe0bc",1.7,-7,2.5,-1),t(1.6,7,"#ffe0bc",2.2,7,2.5,-1.5),t(10,1.2,"#ffcf9e",1.4,0,1.2,-9),t(3,2,"#ffffff",1.2,-2,4,7),i.fromScene(e,.02).texture}function Cl(i,e={}){let t=!!e.phone,n=new xl({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!e.still});n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.75:2)),n.toneMapping=ns,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=es,n.setClearColor("#0c0705");let s=new Us,r=new rn(28,1,.1,120),a=new Ks(n);s.environment=Px(a),s.environmentIntensity=1;let o={uGlow:{value:new Se("#c46a28")},uBase:{value:new Se("#0d0705")},uGlowAmt:{value:1},uGlowPos:{value:new te(0,.12)}},l=new vt(new Ki(60,48,24),new Gt({uniforms:o,side:Qt,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform vec3 uGlow, uBase; uniform float uGlowAmt; uniform vec2 uGlowPos; varying vec3 vD;
      void main(){
        vec2 p = vec2(atan(vD.x, -vD.z), vD.y);
        float g = exp(-pow(length((p - uGlowPos) * vec2(1.5, 2.3)), 2.) * 3.2);
        float floorF = smoothstep(.05, -.35, vD.y);
        vec3 c = uBase + uGlow * g * .34 * uGlowAmt;
        c = mix(c, uBase * .55, floorF);
        gl_FragColor = vec4(c, 1.);
      }`}));l.renderOrder=-10,s.add(l);let c=new ji("#ffeedd",95,0,.42,.9,2);c.position.set(3.2,6.2,4.2),c.castShadow=!0,c.shadow.mapSize.set(t?1024:2048,t?1024:2048),c.shadow.bias=-3e-4,c.shadow.normalBias=.02,c.shadow.camera.near=2,c.shadow.camera.far=16,c.shadow.radius=4,c.shadow.blurSamples=12,s.add(c,c.target);let h=new ji("#ffcf9a",70,0,.5,.8,2);h.position.set(-3.5,3.4,-4.6),s.add(h,h.target);let d=new ji("#ffcf9a",30,0,.55,.9,2);d.position.set(3.8,2.2,-4),s.add(d,d.target);let u=new Gr("#ffe8cf","#1b0e07",.45);s.add(u);let p=new Et,g=new qe({color:"#0a0504",roughness:.35,metalness:0,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.8}),y=new Ji([[0,-.42],[1.86,-.42],[1.9,-.38],[1.9,-.06],[1.86,-.012],[1.8,0],[0,0]].map(k=>new te(k[0],k[1])),128),m=new vt(y,g);m.receiveShadow=!0,p.add(m);let f=new fn({color:new Se("#ffb15c").multiplyScalar(.9),toneMapped:!0}),_=new vt(new Qi(1.885,.011,8,200),f);_.rotation.x=Math.PI/2,_.position.y=-.035,p.add(_);let v=document.createElement("canvas");v.width=v.height=256;let M=v.getContext("2d"),b=M.createRadialGradient(128,128,10,128,128,128);b.addColorStop(0,"rgba(0,0,0,.6)"),b.addColorStop(.55,"rgba(0,0,0,.25)"),b.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=b,M.fillRect(0,0,256,256);let T=new vt(new on(3.6,3.6),new fn({map:new Cn(v),transparent:!0,depthWrite:!1}));T.rotation.x=-Math.PI/2,T.position.y=.003,p.add(T),s.add(p);let x=new te,S=new Ot(2,2,{type:Wt,samples:t?2:4}),P=new Sl(n,S);P.addPass(new bl(s,r));let A=new Fi(Qd(new te(1,0))),L=new Fi(Qd(new te(0,1)));L.uniforms.uDim.value=.45,P.addPass(A),P.addPass(L);let D=new er(new te(256,256),.22,.5,.9);t||P.addPass(D);let z=new Fi(Cx);P.addPass(z),P.addPass(new El);let C={glow:new Se("#c46a28"),rim:new Se("#ffcf9a"),target:null,targetRim:null};function W(k,j,B){C.target=new Se(k),C.targetRim=new Se(j||k),B&&(C.glow.copy(C.target),C.rim.copy(C.targetRim))}let Z=0,V=0,ae=new I;function O(){let k=i.clientWidth||innerWidth,j=i.clientHeight||innerHeight;return k===Z&&j===V?!1:(Z=k,V=j,n.setSize(k,j,!1),P.setSize(k,j),n.getDrawingBufferSize(x),A.uniforms.uRes.value.copy(x),L.uniforms.uRes.value.copy(x),z.uniforms.uRes.value.copy(x),D.resolution.set(x.x/2,x.y/2),r.aspect=k/j,r.updateProjectionMatrix(),!0)}function q(k,j=.22){A.uniforms.uAmt.value=L.uniforms.uAmt.value=k,A.uniforms.uSharp.value=L.uniforms.uSharp.value=j,A.enabled=L.enabled=k>.01}q(0);function H(k=1/60,j=0){if(C.target){let B=1-Math.exp(-k*3);C.glow.lerp(C.target,B),C.rim.lerp(C.targetRim,B),o.uGlow.value.copy(C.glow),h.color.copy(C.rim),d.color.copy(C.rim),f.color.copy(C.rim).multiplyScalar(.95)}r.getWorldDirection(ae),o.uGlowPos.value.set(Math.atan2(ae.x,-ae.z),ae.y+.1),z.uniforms.uTime.value=j,Rl.uTime.value=j,P.render(k)}return{renderer:n,scene:s,camera:r,key:c,rim:h,rim2:d,fill:u,ped:p,pedMat:g,ring:_,shadow:T,bgU:o,composer:P,bloom:D,finish:z,resize:O,render:H,setBlur:q,setMood:W,size:()=>[Z,V],phone:t}}var Pl=class{constructor({R:e=1,seg:t=150,seed:n=3}={}){let s=new on(2*e,2*e,t,t);s.rotateX(-Math.PI/2),this.g=s,this.R=e;let r=s.attributes.position,a=r.count,o=Mt(n+40);this.x0=new Float32Array(a),this.z0=new Float32Array(a),this.y0=new Float32Array(a);for(let l=0;l<a;l++){let c=r.getX(l),h=r.getZ(l),d=Math.hypot(c,h)/e,u=Math.atan2(h,c);this.x0[l]=c,this.z0[l]=h,this.y0[l]=e*(.004*St(o,c*1.5,h*1.5,3)+.007*Oe(.72,1,d)*o(Math.cos(u)*2.5+9,Math.sin(u)*2.5))}this.rho1=.016*e,this.gap2=.03*e,this.fold(0,0,0)}fold(e,t,n=0,s=1){let r=this.g.attributes.position,a=this.R,o=this.rho1,l=2*o+this.gap2;for(let c=0;c<r.count;c++){let h=this.x0[c]*s,d=this.z0[c]*s,u=this.y0[c],p=h,g=d;if(h>0&&e>0){let y=o-u,m=y*e;if(h<=m){let f=h/y;h=y*Math.sin(f),u=o-y*Math.cos(f)}else{let f=y*Math.sin(e),_=o-y*Math.cos(e),v=h-m;h=f+v*Math.cos(e),u=_+v*Math.sin(e)}}if(d>0&&t>0){let y=l-u,m=y*t;if(d<=m){let f=d/y;d=y*Math.sin(f),u=l-y*Math.cos(f)}else{let f=y*Math.sin(t),_=l-y*Math.cos(t),v=d-m;d=f+v*Math.cos(t),u=_+v*Math.sin(t)}}if(n>0){let y=p<0&&g<0?0:p>0&&g<0?1:p>0?2:3,m=Math.hypot(h,d)/a,f=Math.atan2(-d,-h)/(Math.PI/2),_=Math.pow(mn(Math.sin(Math.PI*mn(f))),.7)*Oe(.04,.35,m)*(1-.35*Oe(.6,1,m));u+=n*_*[0,.045,.09,.12][y]*a}r.setXYZ(c,h,u,d)}r.needsUpdate=!0,this.g.computeVertexNormals(),this.g.computeBoundingSphere(),this.g.computeBoundingBox()}};function ph(i=.165,e=.2){return(t,n)=>{let s=Math.abs((t/i%1+1.5)%1-.5),r=Math.abs((n/i%1+1.5)%1-.5),a=Math.pow(Math.pow(s,6)+Math.pow(r,6),1/6),o=.5-e,l=Oe(o-.1,o+.03,a),c=Math.hypot(t,n);return Math.max(l,Oe(.86,.9,c))}}function mh({R:i=1,T:e=.17,D:t=.075,t0:n=0,t1:s=Math.PI*2,res:r=160,segs:a=420,hf:o}={}){o=o||ph();let l=[],c=[],h=[],d=e/2,u=i-d,p=Math.abs(s-n)>=Math.PI*2-1e-4,g=Math.max(8,Math.round(a*Math.abs(s-n)/(Math.PI*2))),y=Mt(9),m=(H,k)=>e-t*(1-o(H/i,k/i))+.003*y(H*9,k*9),f=(H,k,j)=>(l.push(H,k,j),c.push(H/(2*i)+.5,.5-j/(2*i)),l.length/3-1),_=-u,v=u,M=-u,b=u;if(!p){let H=[0],k=[0];for(let j=0;j<=32;j++){let B=n+(s-n)*j/32;H.push(u*Math.cos(B)),k.push(u*Math.sin(B))}_=Math.min(...H),v=Math.max(...H),M=Math.min(...k),b=Math.max(...k)}let T=2*i/r,x=Math.max(2,Math.ceil((v-_)/T)),S=Math.max(2,Math.ceil((b-M)/T)),P=(n+s)/2,A=(s-n)/2,L=(H,k)=>{let j=Math.hypot(H,k);if(!p){let B=Math.atan2(k,H),ie=B-P;if(ie=Math.atan2(Math.sin(ie),Math.cos(ie)),Math.abs(ie)>A){let le=P+Math.sign(ie)*A,ge=Math.cos(le),he=Math.sin(le),Re=Math.max(0,H*ge+k*he);H=ge*Re,k=he*Re,j=Re}}return j>u&&(H*=u/j,k*=u/j),[H,k]},D=[];for(let H=0;H<=S;H++){let k=[];for(let j=0;j<=x;j++){let[B,ie]=L(_+(v-_)*j/x,M+(b-M)*H/S);k.push(f(B,m(B,ie),ie))}D.push(k)}let z=H=>[l[H*3],l[H*3+2]],C=(H,k,j)=>{let B=z(H),ie=z(k),le=z(j);return(ie[0]-B[0])*(le[1]-B[1])-(ie[1]-B[1])*(le[0]-B[0])};for(let H=0;H<S;H++)for(let k=0;k<x;k++){let j=D[H][k],B=D[H+1][k],ie=D[H+1][k+1],le=D[H][k+1];Math.abs(C(j,B,le))>1e-9&&h.push(j,B,le),Math.abs(C(B,ie,le))>1e-9&&h.push(B,ie,le)}let W=h.length,Z=10,V=null;for(let H=0;H<=Z;H++){let k=Math.PI*H/Z,j=u+d*Math.sin(k),B=d+d*Math.cos(k),ie=[];for(let le=0;le<=g;le++){let ge=n+(s-n)*le/g,he=f(j*Math.cos(ge),B,j*Math.sin(ge));ie.push(he)}if(V)for(let le=0;le<g;le++)h.push(V[le],V[le+1],ie[le],ie[le],V[le+1],ie[le+1]);V=ie}let ae=f(0,0,0);for(let H=0;H<g;H++)h.push(ae,V[H],V[H+1]);let O=h.length;if(!p)for(let H of[n,s]){let k=Math.cos(H),j=Math.sin(H),B=[],ie=[],le=Math.round(r*.7);for(let ge=0;ge<=le;ge++){let he=u*ge/le,Re=he*k,ft=he*j,we=f(Re,m(Re,ft),ft),ke=f(Re,0,ft);c[we*2]=he/i,c[we*2+1]=m(Re,ft)/e,c[ke*2]=he/i,c[ke*2+1]=0,B.push(we),ie.push(ke)}for(let ge=0;ge<le;ge++)H===n?h.push(ie[ge],B[ge],ie[ge+1],B[ge],B[ge+1],ie[ge+1]):h.push(ie[ge],ie[ge+1],B[ge],B[ge],ie[ge+1],B[ge+1])}let q=new wt;return q.setAttribute("position",new $e(l,3)),q.setAttribute("uv",new $e(c,2)),q.setIndex(h),q.addGroup(0,W,0),q.addGroup(W,O-W,2),p||q.addGroup(O,h.length-O,1),q.computeVertexNormals(),q.userData={topY:m,R:i,T:e},q}function _i(i,e=64,t=0,n=Math.PI*2){return new Ji(i.map(s=>new te(s[0],s[1])),e,t,n)}function ef(i,e,t,n=.012){let s=[[0,.004],[i-.02,0],[i,.012]];for(let r=1;r<=24;r++){let a=r/24;s.push([i+(e-i)*a,.012+(t-.012)*a])}return s.push([e+n,t+n*.4],[e+n*.6,t+n*1.2],[e-.004,t+n*.6]),s}function tf(i,e,t=.07){let n=[[i+.012,0],[i+.014,.02],[i*.99,.03]];for(let s=1;s<=20;s++){let r=s/20*Math.PI/2,a=i*Math.cos(r),o=.03+e*Math.sin(r);if(a<t)break;n.push([a,o])}return n.push([t,.03+e*.985],[t-.006,.03+e*.96]),n}function ua(i=.5,e=.2){let t=[];for(let n=0;n<=24;n++){let s=n/24,r=e*Math.pow(Math.sin(Math.PI*.5*Math.pow(s,.75)),1.1)*(1-.25*Oe(.85,1,s));t.push([Math.max(.001,r),s*i])}return t.push([e*.5,i*1.02],[.001,i*1.03]),t}function xi(i=.3,e=5,t=.08,n=1,s=1,r={}){let a=new Or(i,e),o=a.attributes.position,l=Mt(n),c=new I;for(let h=0;h<o.count;h++){c.fromBufferAttribute(o,h);let d=c.clone().normalize(),u=1+t*St(l,d.x*2.2+d.z,d.y*2.2-d.z*.7,4);if(r.scoop){let p=Oe(-.15,-.45,d.y);u+=p*(.07+.05*Math.sin(Math.atan2(d.z,d.x)*9+3*l(d.x*3,d.z*3))),d.y<-.55&&(u*=.85+.15*Oe(-1,-.55,d.y))}c.copy(d).multiplyScalar(i*u),c.y*=s,r.flatBottom&&c.y<-i*r.flatBottom&&(c.y=-i*r.flatBottom),o.setXYZ(h,c.x,c.y,c.z)}return a.computeVertexNormals(),a}function gh({R0:i=.3,H:e=.34,turns:t=2.4,s0:n=.11,ridges:s=8,seg:r=260,rad:a=18}={}){let o=[],l=[],c=[],h=m=>new I(i*Math.pow(1-m,.85)*Math.cos(m*t*Math.PI*2),e*Math.pow(m,1.05),i*Math.pow(1-m,.85)*Math.sin(m*t*Math.PI*2)),d=new I(0,1,0);for(let m=0;m<=r;m++){let f=m/r,_=h(f),v=h(Math.min(1,f+.002)).sub(h(Math.max(0,f-.002))).normalize(),M=new I().crossVectors(v,d).normalize(),b=new I().crossVectors(M,v).normalize(),T=(n*(1-.72*f)+.01)*Oe(0,.04,f+.02)*(1-Oe(.9,1,f)*.8);for(let x=0;x<=a;x++){let S=x/a*Math.PI*2,P=T*(1+.2*Math.cos(S*s)),A=_.clone().addScaledVector(M,Math.cos(S)*P).addScaledVector(b,Math.sin(S)*P*.9);o.push(A.x,A.y,A.z),c.push(x/a,f)}}for(let m=0;m<r;m++)for(let f=0;f<a;f++){let _=m*(a+1)+f,v=_+a+1;l.push(_,v,_+1,v,v+1,_+1)}let u=h(1);o.push(u.x,u.y+.035,u.z),c.push(.5,1);let p=o.length/3-1,g=r*(a+1);for(let m=0;m<a;m++)l.push(g+m,p,g+m+1);let y=new wt;return y.setAttribute("position",new $e(o,3)),y.setAttribute("uv",new $e(c,2)),y.setIndex(l),y.computeVertexNormals(),y}function nf(i=.12,e=2){return gh({R0:i*.55,H:i*1.1,turns:1.6,s0:i*.55,ridges:8,seg:120,rad:16})}var jd=new Xr,Ix=new I(0,-1,0);function Il(i,e,t,n=0){jd.set(new I(e,10,t),Ix);let s=jd.intersectObjects(i,!0)[0];return s?s.point.y:n}function _h(i,e,{radius:t=.012,lift:n=.42,floorY:s=0,samples:r=8,wobble:a=.25,seed:o=5}={}){let l=Mt(o),c=[];for(let f=0;f<e.length-1;f++)for(let _=0;_<r;_++){let v=_/r,M=e[f][0]+(e[f+1][0]-e[f][0])*v,b=e[f][1]+(e[f+1][1]-e[f][1])*v;c.push([M,b])}c.push(e[e.length-1]);let h=c.map(([f,_])=>new I(f,Il(i,f,_,s)+t*n,_));for(let f=0;f<2;f++)for(let _=1;_<h.length-1;_++)h[_].y=Math.max(h[_].y,(h[_-1].y+h[_+1].y)/2-t*.3);let d=new qn(h,!1,"centripetal"),u=Math.max(20,Math.min(600,h.length*3)),p=new ui(d,u,t,10,!1),g=p.attributes.position,y=p.attributes.normal,m=11;for(let f=0;f<=u;f++){let _=.65+.45*(.5+.5*l(f*.15,3.3)),v=d.getPointAt(f/u);for(let M=0;M<m;M++){let b=f*m+M;if(b>=g.count)break;let T=g.getX(b)-v.x,x=g.getY(b)-v.y,S=g.getZ(b)-v.z;g.setXYZ(b,v.x+T*_,v.y+x*_*.5,v.z+S*_)}}return p.computeVertexNormals(),p.userData.curve=d,p.userData.segs=u,p}function sf(i,e=8,t=0,n=1,s=220){let r=Oi(n),a=r()*6,o=[];for(let l=0;l<=s;l++){let c=l/s,h=(c-.5)*2*i*.82+.03*Math.sin(c*19+a),d=Math.sin(c*Math.PI*e+a),p=Math.sqrt(Math.max(0,i*i-h*h))*.86*Math.sign(d)*Math.pow(Math.abs(d),.55),g=Math.cos(t),y=Math.sin(t);o.push([h*g-p*y,h*y+p*g])}return o}var It=(i,e,t)=>new I(i,e,t);function ct(i,e,t=!0,n=!0){let s=new vt(i,e);return s.castShadow=t,s.receiveShadow=n,s}var xh=new Map,bt=(i,e)=>(xh.has(i)||xh.set(i,e()),xh.get(i)),da={strawberrySlice(i){let e=bt("sslice",()=>{let n=new hi,s=ua(.34,.15);n.moveTo(0,0),s.forEach(l=>n.lineTo(l[0],l[1]));for(let l=s.length-1;l>=0;l--)n.lineTo(-s[l][0],s[l][1]);let r=new ks(n,{depth:.022,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:3,curveSegments:28});r.translate(0,-.17,-.011);let a=r.attributes.position,o=r.attributes.uv;for(let l=0;l<a.count;l++)o.setXY(l,a.getX(l)/.36+.5,a.getY(l)/.4+.5);return r}),t=new vt(e,[Ve.sface(),Ve.sskin()]);return t.castShadow=t.receiveShadow=!0,t.scale.setScalar(1.05+i()*.2),t},strawberryHalf(i){let e=bt("shalf",()=>_i(ua(.36,.16),40,0,Math.PI)),t=bt("shalfFace",()=>{let a=new hi,o=ua(.36,.16);a.moveTo(0,0),o.forEach(d=>a.lineTo(d[0],d[1]));for(let d=o.length-1;d>=0;d--)a.lineTo(-o[d][0],o[d][1]);let l=new Br(a,24),c=l.attributes.position,h=l.attributes.uv;for(let d=0;d<c.count;d++)h.setXY(d,c.getX(d)/.34+.5,(c.getY(d)-.18)/.38+.5);return l}),n=new Et;n.add(ct(e,Ve.sskin()));let s=ct(t,Ve.sface());s.rotation.y=-Math.PI/2,n.add(s),n.rotation.set(0,0,-Math.PI/2),n.position.x=-.18;let r=new Et;return r.add(n),r.scale.setScalar(.85+i()*.25),r},banana(i){let e=bt("banana",()=>new Pn(.13,.13,.055,40,1)),t=new vt(e,[Ve.bside(),Ve.bface(),Ve.bface()]);return t.castShadow=t.receiveShadow=!0,t.scale.set(1+i()*.1,1,1-i()*.12),t},blueberry(i){let e=bt("bb",()=>xi(.075,3,.04,7,.88)),t=ct(e,Ve.blueberry());return t.rotation.set(i()*6,i()*6,0),t},raspberry(i){let e=bt("rasp",()=>{let n=[],s=new Ki(.026,10,8);for(let r=0;r<42;r++){let a=r/42,o=.02+a*.13,l=.075*Math.sin(Math.PI*(.15+a*.8)),c=r*2.4,h=s.clone();h.translate(Math.cos(c)*l,o,Math.sin(c)*l),n.push(h)}return Dx(n)}),t=ct(e,Ve.raspberry());return t.rotation.set((i()-.5)*.6,i()*6,(i()-.5)*.6),t},marshmallow(i){let e=bt("mallow",()=>_i([[0,0],[.07,0],[.085,.012],[.09,.04],[.085,.085],[.07,.098],[0,.1]],28)),t=ct(e,Ve.marshmallow());return t.rotation.set((i()-.5)*1.2,i()*6,(i()-.5)*1.2),t.scale.setScalar(.85+i()*.3),t},graham(i){let e=bt("graham",()=>new Sn(.2,.03,.14,4,1,3)),t=ct(e,Ve.graham());return t.rotation.set((i()-.5)*.5,i()*6,(i()-.5)*.5),t.scale.set(.6+i()*.6,1,.6+i()*.5),t},chip(i){let e=bt("chip",()=>_i([[0,0],[.03,0],[.022,.02],[.004,.045],[0,.05]],14)),t=ct(e,Ve.chip());return t.rotation.set((i()-.5)*.8,i()*6,(i()-.5)*.8),t},crumb(i,e="oreo"){let t=bt("crumb"+e+(i()*4|0),()=>xi(.045,1,.5,i()*100|0,.6)),n=e==="oreo"?i()<.22?Ve.oreoCream():Ve.oreo():Ve.biscoff(),s=ct(t,n);return s.rotation.set(i()*6,i()*6,i()*6),s.scale.setScalar(.6+i()*.9),s},scoop(i,e="vanilla"){let t=bt("scoop"+e,()=>xi(.3,6,.07,e==="vanilla"?3:4,.92,{scoop:!0,flatBottom:.62})),n=ct(t,e==="vanilla"?Ve.vanilla():Ve.strawberryIce());return n.rotation.y=i()*6,n},cream(i,e=1){let t=bt("rosette",()=>nf(.16)),n=ct(t,Ve.cream());return n.scale.setScalar(e*(.85+i()*.3)),n.rotation.y=i()*6,n},leaf(i,e="spinach"){let t=bt("leaf",()=>{let s=new on(.22,.34,6,8);s.translate(0,.17,0);let r=s.attributes.position;for(let a=0;a<r.count;a++){let o=r.getX(a),l=r.getY(a);r.setZ(a,-Math.abs(o)*.35+Math.sin(l*9)*.012+l*l*.25)}return s.computeVertexNormals(),s}),n=ct(t,e==="basil"?Ve.basil():Ve.spinach());return n.scale.setScalar(e==="basil"?.7+i()*.3:.9+i()*.4),n},tomato(i){let e=bt("tomato",()=>new Pn(.16,.16,.045,40)),t=new vt(e,[Ve.tomatoSkin(),Ve.tomato(),Ve.tomato()]);return t.castShadow=t.receiveShadow=!0,t.rotation.y=i()*6,t},mozzarella(i){let e=bt("mozz",()=>xi(.12,3,.12,11,.45)),t=ct(e,Ve.mozzarella());return t.scale.setScalar(.8+i()*.4),t},feta(i){let e=bt("feta"+(i()*3|0),()=>xi(.04,0,.35,i()*50|0,.8)),t=ct(e,Ve.feta());return t.rotation.set(i()*6,i()*6,i()*6),t.scale.setScalar(.7+i()*.8),t},chicken(i,e){let t=bt("chick",()=>{let s=new Ar(.065,.36,6,14);s.rotateZ(Math.PI/2),s.scale(1,.62,1.15);let r=s.attributes.position;for(let a=0;a<r.count;a++)r.setY(a,r.getY(a)+.012*Math.sin(r.getX(a)*18));return s.computeVertexNormals(),s}),n=ct(t,e==="pesto"?Ve.chickenPesto():Ve.chicken());return n.rotation.y=i()*6,n.scale.setScalar(.9+i()*.25),n},cheese(i){let e=bt("cheeseMelt",()=>xi(.12,3,.25,21,.18)),t=ct(e,Ve.cheese());return t.scale.set(1.3,1,.8),t.rotation.y=i()*6,t},mushroom(i){let e=bt("mushp",()=>new on(.2,.2)),t=ct(e,Ve.mushroom());return t.rotation.x=-Math.PI/2+(i()-.5)*.4,t.rotation.z=i()*6,t},egg(i){let e=bt("egg"+(i()*3|0),()=>xi(.12,3,.42,i()*40|0,.5)),t=ct(e,Ve.egg());return t.rotation.y=i()*6,t.scale.setScalar(.85+i()*.35),t},cheesecake(i){let e=bt("cheese",()=>{let n=new Sn(.13,.1,.11,3,3,3),s=n.attributes.position,r=new I;for(let a=0;a<s.count;a++)r.fromBufferAttribute(s,a),r.multiplyScalar(1-.1*(r.length()-.06)/.06),s.setXYZ(a,r.x,r.y,r.z);return n.computeVertexNormals(),n}),t=ct(e,Ve.cheesecake());return t.rotation.set((i()-.5)*.6,i()*6,(i()-.5)*.6),t.scale.setScalar(.8+i()*.4),t},parm(i){let e=bt("parm",()=>new Sn(.03,.006,.012)),t=ct(e,Ve.parmesan(),!1);return t.rotation.set(i()*.3,i()*6,0),t}};function Dx(i){let e=[],t=[],n=[],s=0;for(let a of i){let o=a.attributes.position,l=a.attributes.normal;for(let c=0;c<o.count;c++)e.push(o.getX(c),o.getY(c),o.getZ(c)),t.push(l.getX(c),l.getY(c),l.getZ(c));if(a.index)for(let c=0;c<a.index.count;c++)n.push(a.index.getX(c)+s);else for(let c=0;c<o.count;c++)n.push(c+s);s+=o.count}let r=new wt;return r.setAttribute("position",new $e(e,3)),r.setAttribute("normal",new $e(t,3)),r.setIndex(n),r}var yh={maple:()=>Ve.maple(),nutella:()=>Ve.nutella(),chocolate:()=>Ve.chocolate(),caramel:()=>Ve.caramel(),cookiebutter:()=>Ve.cookiebutter(),balsamic:()=>Ve.balsamic(),pesto:()=>Ve.pesto()};function rf(i=1.38){let e=bt("board"+i,()=>{let t=_i([[0,0],[i-.03,0],[i,.025],[i,.065],[i-.03,.085],[0,.085]],96),n=t.attributes.position,s=t.attributes.uv;for(let r=0;r<n.count;r++)s.setXY(r,n.getX(r)/(2*i)+.5,.5-n.getZ(r)/(2*i));return t});return ct(e,Ve.wood(),!1,!0)}function Mh(i,e={}){let t=Oi(i.seed||7),n=new Et,s=[],r=new Et;n.add(r);let a=e.board===!1?null:rf();a&&r.add(a);let o=a?.085:0,l=1.5,c=new Pl({R:l,seg:e.lite?100:170,seed:i.seed||3});c.fold(Math.PI,Math.PI,i.puff??.8);let h=e.dust||(i.sugar?{value:i.sugar}:null),d=ct(c.g,Ve.batter(i.batterSeed||3,e.lite?512:1024,h)),u=new Et;u.add(d),d.position.set(.62,o+.002,.62),u.rotation.y=i.turn??.78,r.add(u),s.push({obj:u,dir:It(0,-.1,0)}),u.updateMatrixWorld(!0);let p=(b,T)=>{let x=Math.PI+Math.PI/2*b,S=l*T;return It(Math.cos(x)*S+.62,0,Math.sin(x)*S+.62).applyAxisAngle(It(0,1,0),u.rotation.y)},g=(b,T)=>{let x=p(b,T);return x.y=Il([d],x.x,x.z,o),x};for(let b of i.peek||[]){let T=b.n||4;for(let x=0;x<T;x++){let S=.14+.72*(x+.2+t()*.6)/T,P=p(S,(b.t==="strawberrySlice"||b.t==="banana"?.86:.93)+t()*.05),A=da[b.t](t,b.kind),L=Math.PI+Math.PI/2*S+u.rotation.y,D=new Et;D.add(A),A.rotation.set(0,0,0),b.t==="strawberrySlice"?A.rotation.set(-Math.PI/2,0,Math.PI/2+(t()-.5)*.6):b.t==="banana"||b.t==="tomato"?A.rotation.set(0,0,0):b.t==="leaf"&&A.rotation.set(-Math.PI/2+.2,0,-Math.PI/2),D.position.set(P.x,o+(b.t==="chicken"||b.t==="egg"||b.t==="mushroom"||b.t==="feta"||b.t==="cheese"?.2:.11)+t()*.04,P.z),D.rotation.order="YZX",D.rotation.y=-L,D.rotation.z=.35+t()*.25,r.add(D),s.push({obj:D,dir:It(P.x,.5,P.z)})}}let y=p(.5,.2),m=p(.5,.9),f=m.clone().sub(y),_=Math.atan2(f.x,f.z);for(let b of i.top||[]){let T=b.n||4;for(let x=0;x<T;x++){let S=b.t==="strawberrySlice"||b.t==="banana",P=S?.5+(x%2?.1:-.1)+(t()-.5)*.08:.22+.56*t(),A=S?.24+.6*(x+.5)/T+(t()-.5)*.03:.3+.5*t(),L=g(P,A),D=da[b.t](t,b.kind);if(b.t==="strawberrySlice"){let z=new Et;D.rotation.set(-Math.PI/2,0,(t()-.5)*.5),z.add(D),z.rotation.order="YXZ",z.rotation.y=_+(t()-.5)*.5+(x%2?.35:-.35),z.rotation.x=-.55-t()*.2,z.position.copy(L),z.position.y+=.045+.012*x,r.add(z),s.push({obj:z,dir:It(L.x*.6,1+t()*.4,L.z*.6)});continue}D.position.copy(L),b.t==="banana"||b.t==="tomato"?(D.position.y+=.04,D.rotation.order="YXZ",D.rotation.set(-.5-t()*.2,_+(t()-.5)*.6,0)):b.t==="strawberryHalf"?D.rotation.y=t()*6:b.t==="leaf"?(D.rotation.set(-Math.PI/2+.3,t()*6,0),D.position.y+=.01):D.position.y+=.02,r.add(D),s.push({obj:D,dir:It(D.position.x*.6,1+t()*.4,D.position.z*.6)})}}let v=a?[d,a]:[d],M=[];(i.drizzle?[].concat(i.drizzle):[]).forEach((b,T)=>{let x=[],S=9+T*2,P=200,A=t()*6;for(let z=0;z<=P;z++){let C=z/P,W=Math.sin(C*Math.PI*S+A),Z=.5+.43*Math.sign(W)*Math.pow(Math.abs(W),.55)+.03*Math.sin(C*23+T),V=.13+.8*C+.025*Math.sin(C*17+A),ae=p(Z,Math.min(.93,V));x.push([ae.x,ae.z])}let L=_h(v,x,{radius:b==="balsamic"||b==="pesto"?.011:.015,floorY:o,seed:T+3,samples:1,lift:.25}),D=ct(L,yh[b](),!0,!1);r.add(D),M.push(D),s.push({obj:D,dir:It(0,1.6,0)})});for(let b of i.side||[]){let T=da[b.t](t,b.kind);T.position.set(b.at[0],o+(b.t==="scoop"?.17:0),b.at[1]),r.add(T),s.push({obj:T,dir:It(b.at[0]*1.2,.8,b.at[1]*1.2)})}return n.userData={parts:s,crepe:d,cg:u,base:r,geo:c,drizzles:M,kind:"crepe",sugar:i.sugar??0,H:.9,sample:g,Y0:o,CR:l,dust:h},n}function Nx(i,e={}){let t=Oi(i.seed||11),n=new Et,s=[],r=new Et;n.add(r);let a=rf();r.add(a);let o=.085,l=1.12,c=ph(),h=Ve.waffle(c),d=new Et;r.add(d);let u=i.wedges??4,p=[];if(u===1){let f=bt("wfull"+(e.lite?1:0),()=>mh({R:l,res:e.lite?120:190,segs:e.lite?240:420,hf:c})),_=ct(f,h);_.position.y=o,d.add(_),p.push(_)}else for(let f=0;f<u;f++){let _=f*Math.PI*2/u,v=_+Math.PI*2/u,M=bt("wedge"+u+f+(e.lite?1:0),()=>mh({R:l,t0:_,t1:v,res:e.lite?120:190,segs:e.lite?240:420,hf:c})),b=ct(M,h),T=(_+v)/2;b.position.set(Math.cos(T)*.045,o,Math.sin(T)*.045),d.add(b),p.push(b)}d.rotation.y=i.turn??.4,s.push({obj:d,dir:It(0,-.1,0)}),d.updateMatrixWorld(!0);let g=p,y=(f,_)=>It(f,Il(g,f,_,o),_);for(let f of i.top||[]){let _=f.n||5;for(let v=0;v<_;v++){let M=t()*Math.PI*2,b=Math.sqrt(t())*(f.spread||.75),T=Math.cos(M)*b,x=Math.sin(M)*b,S=da[f.t](t,f.kind),P=y(T,x);S.position.copy(P),f.t==="strawberrySlice"?(S.rotation.order="YXZ",S.rotation.set(-Math.PI/2+.12+t()*.18,t()*6,0),S.position.y+=.03):f.t==="banana"?(S.position.y+=.03,S.rotation.set((t()-.5)*.4,0,(t()-.5)*.4)):f.t==="strawberryHalf"?S.rotation.y=t()*6:S.position.y+=.03,r.add(S),s.push({obj:S,dir:It(T*.6,1+t()*.5,x*.6)})}}let m=[];(i.drizzle?[].concat(i.drizzle):[]).forEach((f,_)=>{let v=sf(l*.92,9+_*2,.5+_*1.1,(i.seed||11)+_),M=_h([...g,a],v,{radius:.015,floorY:o,seed:_+5,samples:1,lift:.3}),b=ct(M,yh[f](),!0,!1);r.add(b),m.push(b),s.push({obj:b,dir:It(0,1.7,0)})});for(let f of i.side||[]){let _=da[f.t](t,f.kind),v=y(f.at[0],f.at[1]);_.position.set(f.at[0],v.y+(f.t==="scoop"?.16:0),f.at[1]),r.add(_),s.push({obj:_,dir:It(f.at[0],1,f.at[1])})}return n.userData={parts:s,drizzles:m,kind:"waffle",sugar:i.sugar??0,H:.8},n}var vh=null;function af(i){vh=i}function Ux(i,e={}){let t=Oi(i.seed||21),n=new Et,s=[],r=.34,a=.5,o=1.5,l=m=>r+(a-r)*(m/o),c=i.fill??.86,h=_i([[0,.02],[r-.018,.02],...Array.from({length:12},(m,f)=>{let _=.02+(o*c-.02)*(f+1)/12;return[l(_)-.018,_]}),[0,o*c]],64);{let m=h.attributes.position,f=h.attributes.uv;for(let _=0;_<m.count;_++)f.setY(_,m.getY(_)/(o*c))}let d=Ve.liquid(i.liquid,{drip:i.drip,drips:7,marble:i.marble??.18}),u=ct(h,d,!0,!0);n.add(u),s.push({obj:u,dir:It(0,0,0)});let p=_i(ef(r,a,o),72),g=ct(p,Ve.glass(),!1,!1);g.renderOrder=2,n.add(g),s.push({obj:g,dir:It(0,0,0)});for(let m=0;m<(i.ice||0);m++){let f=bt("ice",()=>{let b=new Sn(.2,.18,.2,3,3,3),T=b.attributes.position,x=new I;for(let S=0;S<T.count;S++){x.fromBufferAttribute(T,S);let P=x.length();x.multiplyScalar(1-.12*(P-.1)/.1),T.setXYZ(S,x.x,x.y,x.z)}return b.computeVertexNormals(),b}),_=ct(f,Ve.ice(),!1,!1),v=t()*6,M=.15+t()*.12;_.position.set(Math.cos(v)*M,o*c-.08-t()*.12,Math.sin(v)*M),_.rotation.set(t()*2,t()*6,t()*2),n.add(_)}if(i.sticker!==!1&&vh){let m=o*.48,f=.5,_=new Pn(l(m+f/2)+.007,l(m-f/2)+.007,f,48,1,!0,-.55,1.1),v=new qe({map:vh,alphaTest:.4,roughness:.35,clearcoat:.6,side:Yn}),M=ct(_,v,!1,!1);M.position.y=m,M.renderOrder=4,n.add(M),s.push({obj:M,dir:It(0,0,.6)})}let y=o*c;if(i.heap){let m=xi(a*.92,5,.14,(i.seed||3)+2,.45,{flatBottom:.1}),f=ct(m,Ve.flat(i.heap,.55));f.position.y=o*c+.02,n.add(f),y=o*c+.2,s.push({obj:f,dir:It(0,.6,0)})}if(i.cream){let m=ct(bt("swirlBig",()=>gh({R0:.34,H:.42,turns:2.6,s0:.13})),Ve.cream());if(m.position.y=o*c+(i.dome?.02:.04),m.rotation.y=t()*6,n.add(m),y=m.position.y+.45,s.push({obj:m,dir:It(0,1.1,0)}),i.creamDrizzle){let f=[];for(let M=0;M<=40;M++){let b=M/40,T=b*Math.PI*7,x=.3*(1-b*.8);f.push(new I(Math.cos(T)*x,m.position.y+.07+b*.34+.02*Math.sin(T*3),Math.sin(T)*x))}let _=new ui(new qn(f),160,.014,8,!1),v=ct(_,yh[i.creamDrizzle](),!1,!1);n.add(v),s.push({obj:v,dir:It(0,1.4,0)})}}if(i.dome){let m=_i(tf(a,.42,.075),72),f=ct(m,Ve.lid(),!1,!1);f.position.y=o-.005,f.renderOrder=3,n.add(f),s.push({obj:f,dir:It(0,1.8,0)}),y=o+.45}if(i.straw){let m=bt("straw",()=>new Pn(.034,.034,1.9,20,1,!0)),f=ct(m,Ve.straw(i.straw),!0,!1);f.position.set(.08,o*.82,-.04),f.rotation.z=-.16,f.rotation.x=.05,n.add(f),s.push({obj:f,dir:It(.4,1.6,0)})}for(let m of i.garnish||[])if(m==="umbrella"){let f=new Et,_=ct(new Bs(.3,.12,12,1,!0),Ve.paper(i.umbrella||"#5fc9c4"));_.position.y=.62,f.add(_);let v=ct(new Pn(.008,.008,.7,6),Ve.pick());v.position.y=.3,f.add(v),f.position.set(.18,y-.05,.05),f.rotation.z=-.35,f.rotation.x=.15,n.add(f),s.push({obj:f,dir:It(.8,1.6,0)})}else if(m==="strawberry"){let f=new Et,_=ct(bt("swhole",()=>_i(ua(.3,.14),32)),Ve.sskin());_.rotation.x=Math.PI,_.position.y=.3,f.add(_);let v=ct(new Bs(.12,.05,7,1,!0),Ve.paper("#3f7a2a"));v.position.y=.31,f.add(v),f.position.set(.12,y-.02,.1),f.rotation.z=-.3,n.add(f),s.push({obj:f,dir:It(.5,1.3,.3)})}else if(m==="pineapple"){let f=new hi;f.moveTo(0,0),f.lineTo(.26,0),f.lineTo(.13,.2),f.closePath();let _=new ks(f,{depth:.1,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:2}),v=ct(_,[Ve.pineapple(),Ve.rind()]);v.position.set(-.05,y-.08,.18),v.rotation.set(0,.4,-.2),n.add(v),s.push({obj:v,dir:It(-.4,1.2,.5)})}return n.userData={parts:s,kind:"drink",sugar:0,H:y},n}function of(i,e){return i.type==="crepe"?Mh(i,e):i.type==="waffle"?Nx(i,e):Ux(i,e)}var os=[{id:"sweet",name:"Sweet crepes",mood:["#c2652a","#ffc58e"],note:"Build your own, up to 4 toppings: $14.99"},{id:"savory",name:"Savory crepes",mood:["#b98a22","#ffe2a2"],note:"Build your own, up to 4 toppings: $16.99"},{id:"waffles",name:"Waffles",mood:["#cf8418","#ffd38a"],note:"Savory waffles $13.49: chicken, spinach & feta, avocado & egg, buffalo chicken, caprese"},{id:"drinks",name:"Drinks",mood:["#8a2748","#ffc9d6"],note:"Shakes, smoothies, coffee and tea. Sizes S / M / L"}],wn=[{id:"crepe-craft",cat:"sweet",name:"Crepe Craft",price:"$9.25",ing:"Nutella, powdered sugar",r:{type:"crepe",seed:7,drizzle:["nutella"],sugar:.55}},{id:"banana-bites",cat:"sweet",name:"Banana Bites",price:"$11.49",ing:"Banana, Nutella",r:{type:"crepe",seed:8,drizzle:["nutella"],sugar:0,peek:[{t:"banana",n:4}],top:[{t:"banana",n:5}]}},{id:"strawberryfic",cat:"sweet",name:"Strawberryfic",price:"$11.49",ing:"Strawberry, Nutella",r:{type:"crepe",seed:9,drizzle:["nutella"],sugar:0,peek:[{t:"strawberrySlice",n:5}],top:[{t:"strawberrySlice",n:6},{t:"strawberryHalf",n:2}]}},{id:"berry-bliss",cat:"sweet",name:"Berry Bliss",price:"$14.25",ing:"Berries, New York style cheesecake",r:{type:"crepe",seed:10,sugar:0,peek:[{t:"cheesecake",n:4}],top:[{t:"blueberry",n:7},{t:"raspberry",n:4},{t:"strawberrySlice",n:2}]}},{id:"banana-berry",cat:"sweet",name:"Banana Berry",price:"$12.49",ing:"Banana, strawberry, Nutella",r:{type:"crepe",seed:11,drizzle:["nutella"],sugar:0,peek:[{t:"banana",n:2},{t:"strawberrySlice",n:3}],top:[{t:"banana",n:3},{t:"strawberrySlice",n:3}]}},{id:"smorelicious",cat:"sweet",name:"S\u2019morelicious",price:"$12.49",ing:"Marshmallows, graham crackers, chocolate chips, caramel, Nutella",r:{type:"crepe",seed:12,drizzle:["nutella","caramel"],sugar:0,peek:[{t:"marshmallow",n:4}],top:[{t:"marshmallow",n:6},{t:"graham",n:4},{t:"chip",n:10}]}},{id:"lotus-fusion",cat:"sweet",name:"Lotus Fusion",price:"$12.49",ing:"Banana, Biscoff cookie crumbs, Biscoff butter",r:{type:"crepe",seed:13,drizzle:["cookiebutter"],sugar:0,peek:[{t:"banana",n:3}],top:[{t:"banana",n:3},{t:"crumb",kind:"biscoff",n:18}]}},{id:"mushroom-spinach",cat:"savory",name:"Mushroom and Spinach",price:"$14.25",ing:"Saut\xE9ed mushrooms, garlic, onions, wilted spinach and a sprinkle of Parmesan",r:{type:"crepe",seed:21,batterSeed:5,sugar:0,peek:[{t:"leaf",kind:"spinach",n:4},{t:"mushroom",n:3}],top:[{t:"parm",n:40},{t:"mushroom",n:2}]}},{id:"chicken-pesto",cat:"savory",name:"Chicken and Pesto",price:"$14.25",ing:"Grilled chicken strips tossed in basil pesto, with a drizzle of balsamic glaze",r:{type:"crepe",seed:22,batterSeed:5,sugar:0,drizzle:["balsamic"],peek:[{t:"chicken",n:4,kind:"pesto"}],top:[{t:"chicken",n:4,kind:"pesto"}]}},{id:"spinach-feta",cat:"savory",name:"Spinach and Feta",price:"$14.25",ing:"Saut\xE9ed spinach with crumbled feta cheese",r:{type:"crepe",seed:23,batterSeed:5,sugar:0,peek:[{t:"leaf",kind:"spinach",n:5},{t:"feta",n:4}],top:[{t:"feta",n:9}]}},{id:"caprese",cat:"savory",name:"Caprese",price:"$12.99",ing:"Sliced fresh tomatoes, basil leaves, mozzarella, balsamic vinegar",r:{type:"crepe",seed:24,batterSeed:5,sugar:0,drizzle:["balsamic"],peek:[{t:"tomato",n:3},{t:"mozzarella",n:2}],top:[{t:"leaf",kind:"basil",n:3}]}},{id:"egg-cheese",cat:"savory",name:"Egg and Cheese",price:"$12.99",ing:"Scrambled egg and cheese",r:{type:"crepe",seed:25,batterSeed:5,sugar:0,peek:[{t:"egg",n:6},{t:"cheese",n:3}],top:[{t:"egg",n:5}]}},{id:"classic-waffle",cat:"waffles",name:"Classic Waffle",price:"$9.49",ing:"Maple syrup",r:{type:"waffle",seed:31,wedges:1,drizzle:["maple"],sugar:0}},{id:"banana-waffle",cat:"waffles",name:"Banana Waffle",price:"$10.95",ing:"Banana, Nutella",r:{type:"waffle",seed:32,drizzle:["nutella"],sugar:0,top:[{t:"banana",n:8}]}},{id:"chocolate-chip-waffle",cat:"waffles",name:"Chocolate Chip Waffle",price:"$10.95",ing:"Nutella, whipped cream",r:{type:"waffle",seed:33,drizzle:["nutella"],sugar:0,top:[{t:"chip",n:16},{t:"cream",n:3,spread:.55}]}},{id:"berry-waffle",cat:"waffles",name:"Berry Waffle",price:"$10.95",ing:"Blueberry, raspberry",r:{type:"waffle",seed:34,sugar:0,top:[{t:"blueberry",n:14},{t:"raspberry",n:8}]}},{id:"oreo-waffle",cat:"waffles",name:"Oreo Waffle",price:"$10.95",ing:"Crushed Oreo, banana, Nutella",r:{type:"waffle",seed:35,drizzle:["nutella"],sugar:0,top:[{t:"banana",n:5},{t:"crumb",kind:"oreo",n:26}]}},{id:"strawberry-waffle",cat:"waffles",name:"Strawberry Waffle",price:"$10.95",ing:"Strawberry, Nutella",r:{type:"waffle",seed:36,drizzle:["nutella"],sugar:0,top:[{t:"strawberrySlice",n:7},{t:"strawberryHalf",n:3}]}},{id:"smores-waffle",cat:"waffles",name:"S\u2019mores Waffle",price:"$11.95",ing:"Marshmallows, graham cracker, caramel, Nutella",r:{type:"waffle",seed:37,drizzle:["nutella","caramel"],sugar:0,top:[{t:"marshmallow",n:10},{t:"graham",n:5}]}},{id:"lotus-waffle",cat:"waffles",name:"Lotus Waffle",price:"$10.95",ing:"Biscoff, cookie butter, banana",r:{type:"waffle",seed:38,drizzle:["cookiebutter"],sugar:0,top:[{t:"banana",n:5},{t:"crumb",kind:"biscoff",n:22}]}},{id:"mango-madness",cat:"drinks",name:"Mango Madness",price:"S $7.99 \xB7 M $8.49 \xB7 L $9.50",ing:"Smoothie",r:{type:"drink",seed:41,liquid:[[0,"#F0A92E"],[1,"#F7C64A"]],marble:.12,heap:"#F5B83A",garnish:["pineapple","strawberry","umbrella"],umbrella:"#6cc7e8"}},{id:"strawberry-banana",cat:"drinks",name:"Strawberry Banana",price:"S $6.99 \xB7 M $7.49 \xB7 L $8.25",ing:"Smoothie",r:{type:"drink",seed:42,liquid:[[0,"#C93A4E"],[1,"#E2677A"]],marble:.16,heap:"#D44258",garnish:["strawberry","umbrella"],umbrella:"#5fc9a4"}},{id:"mixed-berry",cat:"drinks",name:"Mixed Berry",price:"S $6.99 \xB7 M $7.49 \xB7 L $8.25",ing:"Smoothie",r:{type:"drink",seed:43,liquid:[[0,"#6E1A3E"],[1,"#A2345E"]],marble:.14,heap:"#8E2850",straw:"#f0e2d0"}},{id:"oreo-milkshake",cat:"drinks",name:"Oreo Milkshake",price:"S $6.99 \xB7 M $7.49 \xB7 L $8.25",ing:"Milkshake",r:{type:"drink",seed:44,liquid:[[0,"#B9AA9C"],[1,"#D8CDC2"]],marble:.1,drip:"#2a1c16",cream:!0,dome:!0,straw:"#2b2522"}},{id:"nutella-milkshake",cat:"drinks",name:"Nutella Milkshake",price:"S $6.99 \xB7 M $7.49 \xB7 L $8.25",ing:"Milkshake",r:{type:"drink",seed:45,liquid:[[0,"#8C5A38"],[1,"#B07D57"]],marble:.12,drip:"#3b1a0b",cream:!0,creamDrizzle:"nutella",dome:!0,straw:"#e9dccb"}},{id:"iced-caramel-macchiato",cat:"drinks",name:"Iced Caramel Macchiato",price:"S $3.95 \xB7 M $4.49 \xB7 L $5.49",ing:"Iced coffee",r:{type:"drink",seed:46,liquid:[[0,"#EFE4D2"],[.55,"#E2CBA8"],[.72,"#8A552E"],[1,"#6E3F20"]],marble:.08,drip:"#b5621c",ice:5,sticker:!1,straw:"#f3efe6",fill:.9}}];var Qn=i=>i<0?0:i>1?1:i,zt=(i,e,t)=>i+(e-i)*t,yt=(i,e,t)=>Qn((i-e)/(t-e)),Ut={inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,out:i=>1-Math.pow(1-i,3),in:i=>i*i*i,outBack:(i,e=1.70158)=>1+(e+1)*Math.pow(i-1,3)+e*Math.pow(i-1,2),outExpo:i=>i>=1?1:1-Math.pow(2,-10*i),smooth:i=>i*i*(3-2*i)},zn=(i,e,t,n=.25)=>{let s=(t-e)*n;return Math.min(yt(i,e,e+s),1-yt(i,t-s,t))};function Sh(i,e,t){if(e<=i[0][0])return t.fromArray(i[0][1]);for(let n=1;n<i.length;n++)if(e<=i[n][0]){let s=Ut.inOut(yt(e,i[n-1][0],i[n][0])),r=i[n-1][1],a=i[n][1];return t.set(zt(r[0],a[0],s),zt(r[1],a[1],s),zt(r[2],a[2],s))}return t.fromArray(i[i.length-1][1])}var Bi=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-n*t));var rt={heroOut:[.05,.1],spin:[.1,.2],dip:[.19,.25],pour:[.23,.33],cook:[.3,.37],fold1:[.37,.42],fold2:[.42,.47],peek:[.455,.49],drizzle:[.47,.53],tops:[.5,.555],sugar:[.52,.585],lift:[.56,.62],explode:[.67,.8],brand:[.8,.94]},Fx=[[0,[0,2.05,5.3]],[.1,[0,2.05,5.3]],[.2,[.75,1.35,3.9]],[.214,[.75,1.35,3.9]],[.228,[0,4.6,4.3]],[.37,[0,4,3.8]],[.47,[.9,3.5,3.7]],[.56,[.3,3,4.7]],[.62,[1.9,1.55,2.5]],[.67,[.9,1.25,2.6]],[.72,[0,2,8.4]],[.8,[0,2,8.4]],[.83,[0,1.2,6.4]],[1,[0,1.2,6.4]]],Ox=[[0,[0,.42,0]],[.1,[0,.42,0]],[.2,[0,.45,0]],[.214,[0,.45,0]],[.228,[0,0,0]],[.56,[0,.12,0]],[.62,[-.35,.38,-.25]],[.67,[-.45,.4,-.1]],[.72,[0,1.2,0]],[.8,[0,1.2,0]],[.83,[0,.6,0]],[1,[0,.6,0]]];function Bx(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createImageData(128,128),s=Mt(77);for(let a=0;a<128;a++)for(let o=0;o<128;o++){let l=o/128-.5,c=a/128-.5,h=Math.hypot(l,c)*2,d=St(s,l*4+3,c*4,4)*.5+.5,u=Math.max(0,1-h)**1.6*Math.max(0,d*1.6-.45),p=(a*128+o)*4;n.data[p]=n.data[p+1]=n.data[p+2]=255,n.data[p+3]=Math.min(255,u*255)}t.putImageData(n,0,0);let r=new Cn(e);return r.colorSpace=Ft,r}function zx(i=.5){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(i,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Cn(e);return s.colorSpace=Ft,s}function lf(i){let e=document.createElement("canvas");e.width=2048,e.height=512;let t=e.getContext("2d");t.font='italic 800 330px "Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#F7ECDD",t.fillText(i,1024,270);let n=new Cn(e);return n.colorSpace=Ft,n.anisotropy=4,n}function cf(i,e,t={}){let n=!!t.phone,s=!!t.reduce,r=Cl(i,{phone:n}),{scene:a,camera:o}=r;r.ped.visible=!1,r.setMood("#c2652a","#ffc58e",!0),r.key.position.set(2.6,6.4,3.6);let l={value:0,cook:{value:1}},c={...wn.find(Le=>Le.id==="strawberryfic").r,sugar:.5},h=Mh(c,{board:!1,lite:n,dust:l}),d=h.userData,u=d.base,p=d.crepe,g=d.geo,y=d.CR;a.add(h);for(let Le of d.parts)Le.p0=Le.obj.position.clone();let m=d.parts.filter(Le=>Le.obj!==d.cg&&!d.drizzles.includes(Le.obj)),f=m.filter(Le=>Le.dir.y===.5),_=m.filter(Le=>Le.dir.y!==.5),v=d.drizzles.map(Le=>({m:Le,total:Le.geometry.index.count,ring:10*6})),M=new fn({map:lf("Crepe Craft"),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),b=new vt(new on(1,.25),M);b.position.set(0,-.25,-3.8),a.add(b);let T=()=>{let Le=o.position.distanceTo(b.position),de=Math.tan(kc.degToRad(o.fov/2))*Le*o.aspect,lt=Math.min(de*2*.97,12);b.scale.set(lt,lt,1)};document.fonts&&document.fonts.load&&document.fonts.load('italic 800 100px "Schibsted Grotesk"').then(()=>{M.map.dispose(),M.map=lf("Crepe Craft"),M.needsUpdate=!0}).catch(()=>{});let x=new Et;a.add(x);let S=new qe({color:"#191513",metalness:.65,roughness:.36,clearcoat:.35,clearcoatRoughness:.3}),P=new vt(new Pn(1.9,1.86,.14,96),S);P.position.y=-.074,P.receiveShadow=!0,x.add(P);let A=new fn({color:new Se("#ff7a2a"),transparent:!0,opacity:0,toneMapped:!1}),L=new vt(new Qi(1.885,.012,6,160),A);L.rotation.x=Math.PI/2,L.position.y=-.13,x.add(L);let D=document.createElement("canvas");D.width=D.height=256;{let Le=D.getContext("2d"),de=Le.createRadialGradient(128,128,60,128,128,128);de.addColorStop(0,"rgba(255,120,40,.9)"),de.addColorStop(.5,"rgba(255,90,20,.35)"),de.addColorStop(1,"rgba(255,60,10,0)"),Le.fillStyle=de,Le.fillRect(0,0,256,256)}let z=new fn({map:new Cn(D),transparent:!0,opacity:0,blending:Li,depthWrite:!1,toneMapped:!1}),C=new vt(new on(5.6,5.6),z);C.rotation.x=-Math.PI/2,C.position.y=-.2,x.add(C);let W=new qn([new I(.35,3.6,-.2),new I(.18,2.2,-.08),new I(.04,1,-.02),new I(0,.01,0)]),Z=new ui(W,80,.042,12,!1),V=new qe({color:"#EBD3A0",roughness:.22,clearcoat:.6,clearcoatRoughness:.2,sheen:.4,sheenColor:new Se("#fff2d0")}),ae=new vt(Z,V);ae.castShadow=!0,a.add(ae);let O=Z.index.count,q=12*6,H=s?0:n?9:16,k=H?Bx():null,j=new Et;a.add(j);let B=Array.from({length:H},(Le,de)=>{let lt=new Fs({map:k,transparent:!0,depthWrite:!1,opacity:0,color:"#fff1e2",blending:Li}),ue=new Sr(lt);return j.add(ue),{sp:ue,m:lt,o:de/H+Math.random()*.05,a:Math.random()*6.28,r:Math.random()}}),ie=s?0:n?260:520,le=new Float32Array(ie*3),ge=[],he=[],Re=[],ft=[];for(let Le=0;Le<ie;Le++){let de=.06+.88*Math.random(),lt=.1+.85*Math.sqrt(Math.random()),ue=d.sample(de,lt);he.push(new I(ue.x,ue.y+.008,ue.z));let Ne=Math.random()*6.283,R=Math.random()*1.1;ge.push(new I(ue.x*.5+Math.cos(Ne)*R*.4,1.6+Math.random()*1.2,ue.z*.5+Math.sin(Ne)*R*.4));let E=Math.random()*6.283,G=Math.cbrt(Math.random())*.55;Re.push(new I(Math.cos(E)*G*1.5,2.05+(Math.random()-.5)*.4,Math.sin(E)*G)),ft.push(Math.random())}let we=new wt;we.setAttribute("position",new Mn(le,3));let ke=new Os({size:n?.03:.022,map:zx(.6),transparent:!0,opacity:0,depthWrite:!1,color:"#fbf7f0"}),Ze=new br(we,ke);Ze.frustumCulled=!1,u.add(Ze);let se=0,_e={s:-1,a1:-1,a2:-1,puff:-1},fe=new I,Ae=new I,xe=new I,je=new I,Be=new yn(new I(0,0,1),0),it=new Ai;function ht(Le,de,lt){return je.set(Le,de,.5).unproject(o),it.origin.copy(o.position),it.direction.copy(je).sub(o.position).normalize(),it.intersectPlane(Be,lt)||lt.set(0,0,0)}function ut(Le){return Ae.copy(Le).project(o),[(Ae.x*.5+.5)*r.size()[0],(-Ae.y*.5+.5)*r.size()[1]]}function F(Le,de,lt,ue){Math.abs(Le-_e.s)+Math.abs(de-_e.a1)+Math.abs(lt-_e.a2)+Math.abs(ue-_e.puff)<1e-4||(g.fold(de,lt,ue,Le),_e={s:Le,a1:de,a2:lt,puff:ue})}function Nt(Le,de,lt){se=lt;let ue=se,Ne=ue>=.214,R=ue<.214||ue>=rt.lift[0];if(!Ne)F(1,Math.PI,Math.PI,.8),p.position.set(.62,d.Y0+.002,.62),p.rotation.y=0,l.cook.value=1;else{let $=Ut.out(yt(ue,rt.pour[0]+.005,rt.pour[1])),oe=Ut.inOut(yt(ue,...rt.fold1)),ce=Ut.inOut(yt(ue,...rt.fold2));F(zt(.05,1,$),Math.PI*oe,Math.PI*ce,.8*Ut.out(yt(ue,rt.fold2[0],rt.fold2[1]+.01))),p.position.set(.62*oe,d.Y0+.002,.62*ce),p.rotation.y=(1-$)*2.4,l.cook.value=Ut.inOut(yt(ue,rt.pour[0]+.03,rt.cook[1]))}f.forEach(($,oe)=>{let ce=Ne?Ut.outBack(yt(ue,rt.peek[0]+oe*.005,rt.peek[1])):1;$.obj.visible=ce>.001,$.obj.scale.setScalar(Math.max(ce,.001))}),_.forEach(($,oe)=>{let ce=Ne?yt(ue,rt.tops[0]+oe*.006,rt.tops[0]+.03+oe*.006):1;$.obj.visible=ce>0,$.drop=(1-(ce<1?1-Math.pow(1-ce,2)*(1-.3*Math.sin(ce*9)):1))*1.6}),v.forEach(({m:$,total:oe,ring:ce})=>{let Pe=Ne?yt(ue,...rt.drizzle):1,We=Math.floor(Pe*oe/ce)*ce;$.visible=We>0,$.geometry.setDrawRange(0,We)});let E=Ne?yt(ue,...rt.sugar):1,G=Ut.inOut(zn(ue,rt.explode[0],rt.explode[1],.32));if(l.value=.5*(Ne?yt(ue,rt.sugar[0]+.03,rt.sugar[1]+.02):1)*(1-G),ie){for(let $=0;$<ie;$++){let oe=Qn((E-ft[$]*.55)/.45),ce=Ut.in(oe);fe.lerpVectors(ge[$],he[$],oe),fe.y=zt(ge[$].y,he[$].y,ce),G>0&&fe.lerp(Re[$],Ut.inOut(Qn(G*1.2-ft[$]*.2))),le[$*3]=fe.x,le[$*3+1]=fe.y,le[$*3+2]=fe.z}we.attributes.position.needsUpdate=!0,ke.opacity=Ne?Math.max(zn(ue,rt.sugar[0],rt.sugar[1]+.03,.2),G):G}let pe=s?0:1,re=Math.sin(de*1.3)*.045*pe;if(h.scale.setScalar(1),Ne)if(ue<rt.lift[0])h.position.set(0,0,0),h.rotation.set(0,.25+(ue-.23)*.8,0);else if(ue<rt.brand[0]){let $=Ut.inOut(yt(ue,...rt.lift));h.position.set(0,zt(0,.5,$)+re*$,0),h.rotation.set(0,.25+(rt.lift[0]-.23)*.8+$*.6+(ue-rt.lift[0])*1.4,0)}else{let $=yt(ue,...rt.brand),oe=r.size()[0]>r.size()[1],ce=[0,.05],Pe=oe?[-1.45,-.05]:[-1.6,-.3],We=oe?[.44,.02]:[0,.4],me=oe?[-.2,0]:[1.05,-.28],ze,Ke;if($<.2){let nt=Ut.in($/.2);ze=zt(ce[0],Pe[0],nt),Ke=zt(ce[1],Pe[1],nt)}else if(oe){let nt=Ut.out(($-.2)/.8);ze=zt(Pe[0],We[0],nt),Ke=zt(Pe[1],We[1],nt)+.06*Math.sin(nt*Math.PI)}else if($<.65){let nt=Ut.inOut(($-.2)/.45);ze=zt(Pe[0],me[0],nt),Ke=zt(Pe[1],me[1],nt)}else{let nt=Ut.inOut(($-.65)/.35);ze=zt(me[0],We[0],nt),Ke=zt(me[1],We[1],nt)}ht(ze,Ke,fe),h.position.copy(fe),h.position.y+=re*$;let Te=$<.2?zt(1,.8,$/.2):zt(.8,oe?1.12:.82,Ut.inOut(yt($,.55,1)));h.scale.setScalar(Te),h.rotation.set(.32*yt($,.6,1)+.1*Math.sin($*Math.PI),-.5+$*Math.PI*2+de*.15*pe*yt($,.9,1),-.1*Math.sin($*Math.PI*2))}else{let $=Ut.inOut(yt(ue,...rt.spin));h.position.set(0,.45+re,0),h.rotation.set(.32*(1-$)+.1,de*.2*pe+$*Math.PI*2-.5,.05*(1-$))}for(let $ of d.parts){let oe=$.drop||0;$.obj.position.copy($.p0).addScaledVector($.dir,G*($.obj===d.cg?1:d.drizzles.includes($.obj)?.8:.78)),oe&&($.obj.position.y+=oe)}let ve=Ne&&ue<rt.lift[1];if(x.visible=ve,ve){let $=Ut.in(yt(ue,rt.lift[0],rt.lift[1]));x.position.y=-$*2.2;let oe=Math.max(zn(ue,.225,rt.fold2[1],.15),.35*(1-$));A.opacity=oe*.9,z.opacity=oe*.55}let Me=yt(ue,rt.pour[0]-.005,rt.pour[0]+.02),Q=yt(ue,rt.pour[1]-.035,rt.pour[1]),ee=80,ye=Math.floor(Q*ee),N=Math.floor(Me*ee);if(ae.visible=Ne&&Me>0&&Q<1,ae.visible&&Z.setDrawRange(ye*q,Math.max(0,N-ye)*q),H){let $=.5*zn(ue,.09,.22,.3)+zn(ue,.26,.5,.2);if(j.visible=$>.01,j.visible){let oe=Ne?0:h.position.y;for(let ce of B){let Pe=(de*.09+ce.o)%1,We=.2+ce.r*.9;ce.sp.position.set(Math.cos(ce.a+Pe)*We,oe+.15+Pe*2.1,Math.sin(ce.a+Pe)*We*.6),ce.sp.scale.setScalar(.7+Pe*1.8),ce.m.rotation=ce.a+Pe*1.2,ce.m.opacity=$*.22*Math.sin(Math.PI*Pe)}}}Sh(Fx,ue,o.position),Sh(Ox,ue,xe);let ne=r.size()[0]/Math.max(1,r.size()[1]),K=Math.max(1,Math.min(2.3,1.02/ne));if(K>1&&o.position.sub(xe).multiplyScalar(K).add(xe),t.tilt&&(o.position.x+=t.tilt.x*.25,o.position.y+=t.tilt.y*.15),o.lookAt(xe),r.key.target.position.set(0,Ne&&ue<rt.lift[0]?0:.4,0),r.finish.uniforms.uFade.value=Ut.smooth(zn(ue,...rt.dip,.45)),r.bgU.uGlowAmt.value=1+.7*zn(ue,.08,.22,.4)+.4*zn(ue,.25,.5,.2),M.opacity=.024*(1-yt(ue,...rt.heroOut)),b.visible=M.opacity>5e-4,b.visible&&T(),e.update){let $=G>.55?{crepe:ut(u.localToWorld(fe.set(-.2,.12-.1*G,-.2))),fruit:ut(u.localToWorld(fe.copy(_[0]?_[0].obj.position:fe.set(0,1,0)))),drizzle:ut(u.localToWorld(fe.set(.3,.38+1.6*G*.8,.3))),sugar:ut(u.localToWorld(fe.set(.7,2.05,0)))}:null,oe=0;ue>=rt.brand[0]&&(oe=ut(h.getWorldPosition(new I))[0]),e.update(ue,{labels:$,labelAlpha:yt(G,.55,.9),wipe:oe})}r.render(Le,de)}function st(){r.resize()&&T()}return st(),{frame:Nt,resize:st,stage:r,P:rt,setProgress:Le=>{se=Le}}}function hf(i,e,t={}){let n=!!t.phone,s=!!t.reduce,r=Cl(i,{phone:n}),{scene:a,camera:o}=r,l=wn.length,c=wn.map(()=>{let O=new Et;return O.visible=!1,a.add(O),O}),h=new Array(l),d=new Array(l).fill(0);function u(O){if(O<0||O>=l||h[O])return;let q=of(wn[O].r,{lite:n}),H=wn[O].r.type==="drink"?1.22:1;q.scale.setScalar(H),h[O]=q,c[O].add(q)}let p=0,g=0,y=-1,m=null,f=0,_=0,v=null,M=-9,b=0,T=new I(0,2,6.4),x=new I(0,.4,0),S=new I,P=.35;function A(O){return O>1.05?{th:.42,R:7.2,s:.5,y:.15}:{th:.36,R:4.2,s:.46,y:.3}}let L=i;L.addEventListener("pointerdown",O=>{v={x:O.clientX,y:O.clientY,t:performance.now(),lx:O.clientX,moved:0},_=0}),window.addEventListener("pointermove",O=>{if(!v){if(O.pointerType==="mouse"){let H=L.getBoundingClientRect();z.x=((O.clientX-H.left)/H.width-.5)*2,z.y=((O.clientY-H.top)/H.height-.5)*2}return}let q=O.clientX-v.lx;v.lx=O.clientX,v.moved+=Math.abs(q),f+=q*.012,_=q*.012*60});let D=O=>{if(!v)return;let q=performance.now()-v.t,H=O.clientX-v.x,k=O.clientY-v.y;q<380&&Math.abs(H)>60&&Math.abs(H)>Math.abs(k)*1.4&&e.go&&(e.go(g+(H<0?1:-1)),_=0),v=null};window.addEventListener("pointerup",D),window.addEventListener("pointercancel",D);let z={x:0,y:0},C={x:0,y:0};function W(O,q,H){let[k,j]=r.size(),B=k/Math.max(1,j),ie=A(B);g=Math.round(Qn(H)*(l-1));for(let we=-2;we<=2;we++)u(g+we);if(g!==y){y>=0&&!s&&!t.instant&&(M=q,b=Math.sign(g-y)),y=g,f=0,_=0;let we=wn[g],ke=os.find(Ze=>Ze.id===we.cat);if(ke.id!==m){let Ze=m===null;m=ke.id,r.setMood(ke.mood[0],ke.mood[1],Ze)}e.onItem&&e.onItem(g,we,ke)}p=t.instant?g:s?Bi(p,g,14,O):Bi(p,g,6.5,O),v||(f+=_*O,_*=Math.exp(-O*2.6));for(let we=0;we<l;we++){let ke=c[we],Ze=we-p,se=Math.abs(Ze);if(ke.visible=!!h[we]&&se<2.6,!ke.visible)continue;let _e=Qn(se),fe=Ze*ie.th;ke.position.set(Math.sin(fe)*ie.R,zt(0,ie.y,_e)+(s?0:Math.sin(q*1.1+we)*.03*_e),(Math.cos(fe)-1)*ie.R-_e*.4),ke.scale.setScalar(zt(1,ie.s,_e)),ke.rotation.set(zt(0,.22,_e),-Ze*.35,-Ze*.05);let Ae=0;if(we===g){let xe=Qn((q-M)/1.05);Ae=f+(s?0:q*.22)-(1-Ut.outBack(xe,1.3))*Math.PI*2*b,ke.position.y+=s?0:Math.sin(xe*Math.PI)*.28*(1-xe)}else Ae=(s?0:q*.1)+we;h[we].rotation.y=Ae}let le=wn[g],ge=le.r.type==="drink";r.shadow.scale.setScalar(ge?.55:1),P=Bi(P,ge?1.05:.32,4,O),C.x=Bi(C.x,z.x,3,O),C.y=Bi(C.y,z.y,3,O);let Re=B>1.05?ge?9.4:9:Math.min(15,(ge?6.4:6.6)/Math.max(.4,B)),ft=ge?.18:.42;T.set(C.x*.35,P+Math.sin(ft)*Re+C.y*-.15,Math.cos(ft)*Re),o.position.copy(T),x.set(0,P,0),o.lookAt(x),r.key.target.position.set(0,P*.5,0),r.render(O,q)}let Z=0;function V(){for(;Z<l&&h[Z];)Z++;return Z<l?(u(Z),!0):!1}function ae(){if(r.resize()){let[O,q]=r.size(),H=q>O;H?o.setViewOffset(O,q,0,q*.17,O,q):o.setViewOffset(O,q,-O*(O/q>1.25?.11:.06),q*.1,O,q),r.setBlur(1,H?.3:.2)}}return ae(),{frame:W,resize:ae,warm:V,stage:r,count:l}}var Vt=(i,e=document)=>e.querySelector(i),Ll=(i,e=document)=>Array.from(e.querySelectorAll(i));function Dl(i){let e=i.getBoundingClientRect().top,t=i.offsetHeight-innerHeight;return t>0?Qn(-e/t):0}async function $S({reduce:i=!1}={}){let e=document.documentElement,t=matchMedia("(max-width: 760px), (pointer: coarse)").matches,n=/[?&]shot\b/.test(location.search);await new Promise(k=>{let j=setTimeout(k,2500);new Hr().load("assets/media/sticker.webp",B=>{B.colorSpace=Ft,af(B),clearTimeout(j),k()},void 0,()=>{clearTimeout(j),k()})});let s=Vt("[data-intro]"),r=Vt("[data-menu]"),a=Ll(".intro__caps li").map(k=>({li:k,a:+k.dataset.from,b:+k.dataset.to})),o=Object.fromEntries(Ll("[data-label]").map(k=>[k.dataset.label,k])),l=Vt('[data-beat="hero"]'),c=Vt("[data-brand]"),h=Vt(".wordmark"),d=Ll("[data-brand-rest]"),u=Vt("[data-intro-bar]"),p=Vt("[data-skip]"),g=null,y={update(k,j){l.style.opacity=1-yt(k,.025,.075);for(let he of a){let Re=zn(k,he.a,he.b,.22);he.li.style.opacity=Re,he.li.style.transform=`translateY(${((1-Re)*14).toFixed(1)}px)`}for(let he in o){let Re=o[he];j.labels&&j.labels[he]?(Re.style.opacity=j.labelAlpha,Re.style.transform=`translate(${j.labels[he][0].toFixed(0)}px, ${j.labels[he][1].toFixed(0)}px)`):Re.style.opacity=0}let B=yt(k,.8,.94);(!g||!g.width)&&(g=h.getBoundingClientRect());let ie=g.width+80,le=0;B>=.2&&B<.7?le=j.wipe-g.left:B>=.7&&(le=ie),le=Math.max(0,Math.min(ie,le)),h.style.setProperty("--wipe",le.toFixed(1)+"px"),h.style.setProperty("--edge",le>0&&le<g.width+30?1:0);let ge=yt(k,.885,.93);d.forEach(he=>{he.style.opacity=ge,he.style.transform=`translateY(${((1-ge)*16).toFixed(1)}px)`}),c.classList.toggle("is-live",ge>.5),p.style.opacity=1-yt(k,.86,.9),u.style.transform=`scaleX(${k.toFixed(4)})`}};p.addEventListener("click",k=>{k.preventDefault(),scrollTo({top:r.offsetTop,behavior:"auto"}),Vt("[data-m-next]").focus({preventScroll:!0})});let m=cf(Vt("[data-intro-gl]"),y,{phone:t,reduce:i}),f=Dl(s),_=wn.length,v={cat:Vt("[data-m-cat]"),count:Vt("[data-m-count]"),name:Vt("[data-m-name]"),ing:Vt("[data-m-ing]"),price:Vt("[data-m-price]"),note:Vt("[data-m-note]"),item:Vt("[data-m-item]"),tabs:Ll("[data-m-tab]"),order:Vt("[data-m-order]")},M=Object.fromEntries(os.map(k=>[k.id,wn.findIndex(j=>j.cat===k.id)])),b=Object.fromEntries(os.map(k=>[k.id,wn.filter(j=>j.cat===k.id).length])),T=k=>r.offsetTop+(k+.02)/(_-1)*(r.offsetHeight-innerHeight),x=0,S=k=>{k=Math.max(0,Math.min(_-1,k)),scrollTo({top:T(k),behavior:i?"auto":"smooth"})},P={go:S,onItem(k,j,B){x=k;let ie=k-M[B.id]+1;v.item.classList.remove("is-in"),v.item.offsetWidth,v.cat.textContent=B.name,v.count.textContent=`${String(ie).padStart(2,"0")} / ${String(b[B.id]).padStart(2,"0")}`,v.name.textContent=j.name,v.ing.textContent=j.ing,v.price.textContent=j.price,v.note.textContent=B.note,v.order.setAttribute("aria-label",`Order ${j.name} online (opens in a new tab)`),v.item.classList.add("is-in"),v.tabs.forEach(le=>{let ge=le.dataset.mTab===B.id;le.classList.toggle("is-on",ge),ge?le.setAttribute("aria-current","true"):le.removeAttribute("aria-current"),le.style.setProperty("--p",ge?(ie/b[B.id]).toFixed(3):os.findIndex(he=>he.id===le.dataset.mTab)<os.findIndex(he=>he.id===B.id)?1:0)}),e.style.setProperty("--mood",B.mood[1])}};v.tabs.forEach(k=>k.addEventListener("click",()=>S(M[k.dataset.mTab]))),Vt("[data-m-prev]").addEventListener("click",()=>S(x-1)),Vt("[data-m-next]").addEventListener("click",()=>S(x+1));let A=!1,L=!0,D=null;addEventListener("keydown",k=>{!A||k.altKey||k.metaKey||k.ctrlKey||/input|select|textarea/i.test((document.activeElement||{}).tagName||"")||(k.key==="ArrowRight"?(k.preventDefault(),S(x+1)):k.key==="ArrowLeft"&&(k.preventDefault(),S(x-1)))});let z=()=>{D||(D=hf(Vt("[data-menu-gl]"),P,{phone:t,reduce:i,instant:n}))};new IntersectionObserver(k=>k.forEach(j=>{L=j.isIntersecting})).observe(s),new IntersectionObserver(k=>k.forEach(j=>{A=j.isIntersecting,A&&z()})).observe(r);let C=new IntersectionObserver(k=>k.forEach(j=>{j.isIntersecting&&(z(),C.disconnect())}),{rootMargin:"120% 0px"});C.observe(r);let W=performance.now(),Z=!1,V=!0;document.addEventListener("visibilitychange",()=>{Z=document.hidden,W=performance.now()}),addEventListener("resize",()=>{m.resize(),D&&D.resize(),g=null});let ae=performance.now();function O(k){if(requestAnimationFrame(O),Z)return;let j=Math.min(.05,(k-W)/1e3);W=k;let B=(k-ae)/1e3;L&&(f=n?Dl(s):Bi(f,Dl(s),6,j),m.resize(),m.frame(j,B,f),V&&(V=!1,e.classList.add("gl-ready"))),D&&A&&(D.resize(),D.frame(j,B,Dl(r)),e.classList.add("menu-ready"))}requestAnimationFrame(O);let q=window.requestIdleCallback||(k=>setTimeout(k,200)),H=()=>{z(),D.warm()&&q(H)};setTimeout(()=>q(H),2500),window.__cc={intro:m,get menu(){return D},go:S}}export{$S as boot};
