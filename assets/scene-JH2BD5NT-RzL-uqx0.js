var Wt=Object.defineProperty;var Gt=(e,t,i)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var x=(e,t,i)=>Gt(e,typeof t!="symbol"?t+"":t,i);import{N as ot,d as ce,c as st,L as re,r as Q,a as Ae,O as Yt,I as Ut,T as Kt,_ as Zt,P as Jt,q as Qt,M as ea,h as ta,A as aa,C as ia}from"./main-xI3hpapq.js";import{D as ra,E as oa,q as sa,s as na,k as la,a as de,U as I,f as Z,H as Be,b as pe,h as fe,R as $t,N as He,A as ca,c as ha,O as Ge,T as ua,$ as da,Z as pa,F as _e,t as nt,G as lt,d as O,Y as Ye,e as fa,g as ma,M as Te,i as ct,j as ze,v as va,l as ga,V as ya,W as xa,m as Re,P as ht,n as je,o as wa,y as ut,p as ba,r as Ma,u as Sa,w as ka,x as Vt}from"./chunk-CSUSIQUH--OCz0pPU.js";import"./preload-helper-lMf9uHy8.js";function Aa(){return{phase:2,morphProgress:1,holdProgress:0,particleCount:0,fps:0,pointer:{x:0,y:0,inside:!1},mode:"static",entrance:0,scatter:0,running:!1}}var dt=.85,pt=.5,ft=.28,Ne=11,mt=2*.82*Math.sqrt(Ne);function za(){return{yaw:0,pitch:0,yawVelocity:0,pitchVelocity:0}}function vt(e,t,i){if(t===0||Math.sign(t)!==Math.sign(e)||Math.abs(e)<i)return t;let a=(Math.abs(e)-i)/(i*.6);return t*Math.max(0,1-a)**2}function Pa(e,t,{dragging:i,dx:a,dy:r}){let o=Number.isFinite(t)?Math.max(0,Math.min(t,.05)):0;if(o===0)return e;if(i){let c=vt(e.yaw,a*dt,pt),n=vt(e.pitch,-r*dt,ft);e.yaw+=c,e.pitch+=n;let h=Math.min(1,o*18);return e.yawVelocity+=(c/o-e.yawVelocity)*h,e.pitchVelocity+=(n/o-e.pitchVelocity)*h,e}e.yawVelocity+=(-Ne*e.yaw-mt*e.yawVelocity)*o,e.pitchVelocity+=(-Ne*e.pitch-mt*e.pitchVelocity)*o,e.yaw+=e.yawVelocity*o,e.pitch+=e.pitchVelocity*o;let s=pt*1.6,l=ft*1.6;return Math.abs(e.yaw)>s&&(e.yaw=Math.sign(e.yaw)*s,e.yawVelocity=0),Math.abs(e.pitch)>l&&(e.pitch=Math.sign(e.pitch)*l,e.pitchVelocity=0),Math.abs(e.yaw)<1e-5&&Math.abs(e.yawVelocity)<1e-4&&(e.yaw=0,e.yawVelocity=0),Math.abs(e.pitch)<1e-5&&Math.abs(e.pitchVelocity)<1e-4&&(e.pitch=0,e.pitchVelocity=0),e}function gt(e,t,i){if(!(i>0)||!(t>0)||!Number.isFinite(e))return 0;let a=e+t/2,r=i*.4,o=i*.4+t*.35;return Math.max(0,Math.min(1,(r-a)/o))}var Oe=[{id:0,x:-2.12,height:2.2,depth:1.48,thickness:.1,accent:.04},{id:1,x:-1.35,height:1.82,depth:1.22,thickness:.2,accent:.08,kernel:!0},{id:2,x:-.62,height:1.42,depth:1,thickness:.12,accent:.04},{id:3,x:.05,height:1.1,depth:.82,thickness:.28,accent:.12,kernel:!0},{id:4,x:.7,height:.82,depth:.62,thickness:.14,accent:.04},{id:5,x:1.25,height:.6,depth:.48,thickness:.26,accent:.12,kernel:!0},{id:6,x:1.82,height:1.18,depth:.18,thickness:.1,accent:.8},{id:7,x:2.25,height:1.6,depth:.12,thickness:.08,accent:.18}];function me([e,t,i]){let a=e*Math.cos(-.62)+i*Math.sin(-.62),r=-e*Math.sin(-.62)+i*Math.cos(-.62);return[a,t*Math.cos(.24)-r*Math.sin(.24),t*Math.sin(.24)+r*Math.cos(.24)]}function It(e){return[-1,1].flatMap(t=>[-1,1].flatMap(i=>[-1,1].map(a=>[e.x+t*e.thickness/2,i*e.height/2,a*e.depth/2])))}function Ta(){return Oe.map(e=>({id:e.id,center:me([e.x,0,0]),corners:It(e).map(me)}))}function De(e,t,i,a,r=a){return{weight:Math.hypot(...e.map((o,s)=>t[s]-o)),sample(o,s){let l=(o+.5)/s;return{position:me(e.map((c,n)=>c+(t[n]-c)*l)),style:i,link:[a,r,a===r?-1:l]}}}}function $e(e,t,i){let a=[e.thickness,e.height,e.depth],r=[0,1,2].filter(l=>l!==t),[o,s]=r;return{weight:a[o]*a[s],sample(l,c){let n=Math.max(1,Math.ceil(Math.sqrt(c*a[o]/a[s]))),h=Math.ceil(c/n),v=Math.floor((l+.5)*n*h/c),u=[0,0,0];return u[t]=a[t]/2,u[o]=((v%n+.5)/n-.5)*a[o],u[s]=((Math.floor(v/n)+.5)/h-.5)*a[s],u[0]+=e.x,{position:me(u),style:i,link:[e.id,e.id,-1]}}}}function be(e,t,i){let a=e.reduce((s,l)=>s+l.weight,0),r=0,o=0;e.forEach((s,l)=>{o+=s.weight;let c=l===e.length-1?t:Math.round(o/a*t),n=c-r;for(let h=0;h<n;h++)i.push(s.sample(h,n));r=c})}function Ea(e){if(!Number.isSafeInteger(e)||e<0)throw new RangeError("Particle count must be a non-negative safe integer.");let t=[],i=[],a=[],r=[];Oe.forEach((u,p)=>{t.push($e(u,0,[u.accent,.52,.78])),t.push($e(u,1,[u.accent*.6,.38,.72])),t.push($e(u,2,[u.accent*.7,.3,.74]));let g=It(u);for(let f=0;f<g.length;f++)for(let y=0;y<3;y++){let b=f^1<<2-y;if(f>=b)continue;let z=g[f][0]<u.x&&g[b][0]<u.x;i.push(De(g[f],g[b],[u.accent,z?.4:.94,z?.65:.84],u.id))}if(u.kernel){let f=u.x+u.thickness/2+.004,y=u.height*.3,b=u.depth*.34,z=u.height*.12,F=u.depth*.08,R=[[f,z-y/2,F-b/2],[f,z+y/2,F-b/2],[f,z+y/2,F+b/2],[f,z-y/2,F+b/2]];for(let P=0;P<4;P++)a.push(De(R[P],R[(P+1)%4],[.96,1,.9],u.id))}if(u.id>=6){let f=u.id===6?7:5;for(let y=0;y<f;y++){let b=(y/(f-1)-.5)*u.height*.84;a.push({weight:.35,sample(z,F){let R=Math.sqrt((z+.5)/F)*.037,P=z*Math.PI*(3-Math.sqrt(5)),S=me([u.x+u.thickness/2,b,0]);return{position:[S[0]+Math.cos(P)*R,S[1]+Math.sin(P)*R,S[2]+.01],style:[u.id===6?.95:.3,1.3,1.12],link:[u.id,u.id,-1]}}})}}let d=Oe[p+1];if(!d)return;let M=[[-.36,-.36],[-.36,.36],[.36,-.36],[.36,.36],[0,0]];for(let[f,y]of M)r.push(De([u.x+u.thickness/2,f*u.height,y*u.depth],[d.x-d.thickness/2,f*d.height,y*d.depth],[.08,.33,.64],u.id,d.id))});let o=[],s=Math.floor(e*.62),l=Math.floor(e*.22),c=Math.floor(e*.06);be(t,s,o),be(i,l,o),be(a,c,o),be(r,e-s-l-c,o),o.sort((u,p)=>u.position[0]-p.position[0]||u.position[1]-p.position[1]||u.position[2]-p.position[2]);let n=new Float32Array(e*3),h=new Float32Array(e*3),v=new Float32Array(e*3);return o.forEach((u,p)=>{n.set(u.position,p*3),h.set(u.style,p*3),v.set(u.link,p*3)}),{positions:n,styles:h,links:v}}var Lt=Math.PI*2,yt=Math.PI*(3-Math.sqrt(5)),Ve=[0,7*Math.sin(.28),7*Math.cos(.28)];function qe(e,t){let i=Math.imul(e+1,2654435761)^t;return i=Math.imul(i^i>>>16,2246822507),i=Math.imul(i^i>>>13,3266489909),((i^i>>>16)>>>0)/4294967296}function xt(e){let t=Math.max(0,Math.abs(e)-.235)/.055;return 1.32-.055+.055*Math.sqrt(Math.max(0,1-t*t))}function Fa([e,t,i],a){let r=Ve[0]-e,o=Ve[1]-t,s=Ve[2]-i,l=r*r+s*s,c=2*(e*r+i*s),n=e*e+i*i-1.32*1.32,h=c*c-4*l*n;if(h<=0)return!1;let v=Math.sqrt(h),u=(-c-v)/(2*l),p=(-c+v)/(2*l);for(let g=0;g<3;g++){if(g===a)continue;let d=(g-1)*.72,M=(d-.58/2-t)/o,f=(d+.58/2-t)/o,y=Math.max(u,Math.min(M,f),1e-4);if(Math.min(p,Math.max(M,f),1)>y)return!0}return!1}function Ra(e){let[t,i,a]=e,r=Math.cos(.28),o=Math.sin(.28);return[t,i*r-a*o,i*o+a*r]}function he(e,t,i,a){let r=(Math.atan2(e[2],e[0])/Lt+1)%1;return{position:e,style:t,details:[i,r,a]}}function Me(e,t,i){if(e===0)return[];let a=[];for(let r of[3,8,20,48]){let o=Math.max(48,e*r);a=[];for(let s=0;s<o;s++){let l=i(s,o);Fa(l.position,t)||a.push(l)}if(a.length>=e)break}if(a.length===0)throw new Error("A database surface has no visible samples.");return Array.from({length:e},(r,o)=>{let s=Math.floor(o*a.length/e),l=Math.floor((o+1)*a.length/e),c=Math.floor(qe(o,731+t)*Math.max(1,l-s));return a[s+c]})}function Da(e){if(!Number.isSafeInteger(e)||e<0)throw new RangeError("Particle count must be a non-negative safe integer.");let t=[];for(let o=0;o<3;o++){let s=Math.floor(e/3)+(o<e%3?1:0),l=(o-1)*.72,c=l+.58/2,n=l-.58/2,h=Math.floor(s*(o===2?.32:.07)),v=Math.floor(s*.13),u=Math.floor(s*.04),p=Math.floor(s*.025),g=s-h-v-u-p;t.push(...Me(h,o,(d,M)=>{let f=Math.sqrt((d+.5)/M)*1.2590000000000001,y=d*yt+o*.4,b=Math.cos(y)*f,z=Math.sin(y)*f,F=.4+.16*(1-f/1.32)+.08*(-b/1.32);return he([b,c,z],[.035,F,.7],o,1)})),t.push(...Me(g,o,(d,M)=>{let f=Math.max(1,Math.ceil(Math.sqrt(M*1.32*2/.58))),y=Math.ceil(M/f),b=Math.floor((d+.5)*f*y/M),z=(b%f+.15+qe(d,91+o)*.7)/f,F=((Math.floor(b/f)+.15+qe(d,121+o)*.7)/y-.5)*.58,R=xt(F),P=(z*2-1)*R,S=Math.sqrt(Math.max(0,R*R-P*P)),D=S/R,V=Math.abs(F)/(.58/2),T=.36+.46*Math.pow(D,.65)+.14*(-P/R)-.12*Math.pow(V,6);return he([P,l+F,S],[.025,T,.78],o,0)})),t.push(...Me(v,o,(d,M)=>{let f=(d+.5)/M*Lt,y=1.32-.055;return he([Math.cos(f)*y,c,Math.sin(f)*y],[.5,.84,.82],o,2)})),t.push(...Me(u,o,(d,M)=>{let f=(d+.5)/M*Math.PI,y=-.58/2+.055*.25,b=xt(y);return he([Math.cos(f)*b,n+.055*.25,Math.sin(f)*b],[.04,.4,.72],o,3)}));for(let d=0;d<p;d++){let M=d%3,f=Math.floor(d/3),y=Math.floor(p/3)+(M<p%3?1:0),b=Math.sqrt((f+.5)/y)*.02,z=f*yt,F=-.48+M*.11+Math.cos(z)*b,R=l+Math.sin(z)*b,P=Math.sqrt(1.32*1.32-F*F)+.002;t.push(he([F,R,P],[M===0?.98:.2,M===0?1.4:.7,1.05],o,4))}}let i=new Float32Array(e*3),a=new Float32Array(e*3),r=new Float32Array(e*3);return t.forEach((o,s)=>{i.set(Ra(o.position),s*3),a.set(o.style,s*3),r.set(o.details,s*3)}),{positions:i,styles:a,details:r}}var Pe={restStiffness:62,restDamping:.46,looseStiffness:15,looseDamping:.4,lockAt:.74,landingStiffness:110,landingDamping:.72,restFlow:.07,looseFlow:2.8,flowScale:.55,flowSpeed:.16,maxSpeed:7.5,pointerRadius:.36,pointerPush:5,pointerStir:4.2,pointerFullSpeed:2.2,shockSpeed:4.2,shockWidth:.3,shockLife:1.25,shockPush:30,shockLift:10,heatDecay:1.7,sparkFraction:.028,streakTime:.035,streakMax:22,focus:7,dofRange:.9,dofGain:.55,bokehSize:1.9,dustKeep:.42,dustAlpha:.62,maxPointSize:72};function w(e){let t=String(e);return/[.eE]/.test(t)?t:`${t}.0`}var k=Pe,$a=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

// Simplex noise gradient (McEwan/Gustavson, MIT); three of them give divergence-free curl flow.
vec3 snoiseGradient(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  vec4 m2 = m * m;
  vec4 m4 = m2 * m2;
  vec4 pdotx = vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3));
  vec4 temp = m2 * m * pdotx;
  vec3 gradient = -8.0 * (temp.x * x0 + temp.y * x1 + temp.z * x2 + temp.w * x3);
  gradient += m4.x * p0 + m4.y * p1 + m4.z * p2 + m4.w * p3;
  return gradient * 105.0;
}

vec3 curlNoise(vec3 p) {
  vec3 a = snoiseGradient(p);
  vec3 b = snoiseGradient(p + vec3(31.416, -47.853, 12.679));
  vec3 c = snoiseGradient(p + vec3(-233.145, -113.408, -185.31));
  return vec3(c.y - b.z, a.z - c.x, b.x - a.y);
}
`,Ct=`
#define PI 3.141592653589793
#define TAU 6.283185307179586

uniform highp sampler2D tShapePos;
uniform highp sampler2D tShapeStyle;
uniform highp sampler2D tShapeDetail;
uniform float uFromSlot;
uniform float uToSlot;
uniform mat4 uFromMotion;
uniform mat4 uToMotion;
uniform float uTime;
uniform float uSimTime;
uniform float uElapsed;
uniform float uMovement;
uniform vec4 uSweep;
uniform float uPhaseSeed;
uniform float uEntrance;
uniform float uScatter;

${$a}

uvec3 pcg3d(uvec3 v) {
  v = v * 1664525u + 1013904223u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  v ^= v >> 16u;
  v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
  return v;
}

/** Three stable uniforms in [0, 1) per particle and salt. */
vec3 random3(int index, uint salt) {
  return vec3(pcg3d(uvec3(uint(index), salt, 0x2545F491u))) * (1.0 / 4294967296.0);
}

ivec2 atlasTexel(ivec2 ij, float slot) {
  return ivec2(ij.x, ij.y + int(slot + 0.5) * SIDE);
}

vec3 turnY(vec3 p, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
}

// Resting position with the shape's idle motion (see ShapeMotion / motionElements).
vec3 restingTarget(mat4 m, vec4 data) {
  vec3 p = data.xyz;
  if (m[0].w > 0.0) {
    vec3 q = data.xyz * m[1].x + uTime * m[1].y;
    p += vec3(snoise(q), snoise(q + 31.7), snoise(q + 71.3)) * m[0].w * uMovement;
  }
  float wave = sin(uTime * m[2].x);
  float lift = (wave * m[1].z + (data.w - m[2].y) * (0.5 + 0.5 * wave) * m[1].w) * uMovement;
  p = (p + m[3].xyz * lift) * m[0].x;
  return turnY(p, sin(uTime * m[0].z) * m[0].y * uMovement);
}

// Sweep order: linear along uSweep.xy, or radial from uSweep.xy (a click point).
float releaseOrder(vec2 p) {
  float linear = dot(p, uSweep.xy) * uSweep.w + 0.5;
  float radial = length(p - uSweep.xy) * uSweep.w;
  return clamp(mix(linear, radial, uSweep.z), 0.0, 1.0);
}

// Departure time mixes where a particle leaves and where it lands (weighted to the
// landing, which is what the eye reads), so peel-off and assembly follow one sweep.
float morphT(vec4 fromData, vec4 toData, float jitter) {
  float order = mix(releaseOrder(fromData.xy * uFromMotion[0].x), releaseOrder(toData.xy * uToMotion[0].x), 0.7);
  float release = order * ${w(.8)} + jitter * ${w(.25)};
  return clamp((uElapsed - release) / ${w(1.6)}, 0.0, 1.0);
}

// Wind-up, fast middle, a landing slightly past the target.
float travelEase(float t) {
  const float c2 = 1.1 * 1.525;
  float a = 2.0 * t;
  float b = 2.0 * t - 2.0;
  return t < 0.5 ? a * a * ((c2 + 1.0) * a - c2) * 0.5 : (b * b * ((c2 + 1.0) * b + c2) + 2.0) * 0.5;
}

// A coherent lift field: neighbours share one stream, bulging towards the viewer.
vec3 flightArc(vec3 a, vec3 b, float t) {
  vec3 m = (a + b) * 0.5;
  vec3 stream = vec3(
    sin(m.y * 1.7 + uPhaseSeed * 1.3) * 0.55,
    cos(m.x * 1.3 - uPhaseSeed) * 0.45 + 0.2,
    0.75 + 0.35 * sin((m.x - m.y) * 1.1 + uPhaseSeed * 2.1));
  return stream * sin(PI * t) * min(distance(a, b), 2.6) * 0.42;
}

// Wide depth-of-field dust used by the entrance and by scroll dispersal.
vec3 dustPosition(vec3 r) {
  float radius = min(sqrt(-2.0 * log(max(r.x, 1e-4))), 2.6);
  float angle = TAU * r.y;
  vec3 dust = vec3(cos(angle) * radius * 1.85, sin(angle) * radius * 1.2, mix(-4.0, 3.0, r.z));
  dust.xy += vec2(sin(uSimTime * 0.07 + r.x * TAU), cos(uSimTime * 0.05 + r.y * TAU)) * 0.22 * uMovement;
  return dust;
}

float entranceT(vec3 dust, float jitter) {
  float order = clamp(length(dust.xy) / 4.2, 0.0, 1.0);
  float start = order * ${w(ta)} + jitter * ${w(aa)};
  return clamp((uEntrance - start) / ${w(ia)}, 0.0, 1.0);
}

float scatterT(float jitter) {
  float s = clamp(uScatter * 1.45 - jitter * 0.45, 0.0, 1.0);
  return s * s * (3.0 - 2.0 * s);
}

struct Guide {
  vec3 position;
  vec3 velocity;
  float morph;
  /** Flow and glow energy: peaks mid-flight. */
  float flight;
  /** Spring looseness: high in flight, back to 0 before landing so the guide's overshoot shows. */
  float loose;
  float entrance;
  float scatter;
};

// Where a particle should be right now; the simulation springs towards it,
// the stateless fallback renders it directly.
Guide heroGuide(vec4 fromData, vec4 toData, vec3 r0, vec3 r1, vec3 r2) {
  Guide g;
  g.morph = morphT(fromData, toData, r0.x);
  g.flight = sin(PI * g.morph) * uMovement;
  g.loose = sin(PI * clamp(g.morph / ${w(k.lockAt)}, 0.0, 1.0)) * uMovement;
  g.velocity = vec3(0.0);
  vec3 p = vec3(0.0);
  if (g.morph <= 0.0) {
    p = restingTarget(uFromMotion, fromData);
  } else if (g.morph >= 1.0) {
    p = restingTarget(uToMotion, toData);
  } else {
    vec3 a = restingTarget(uFromMotion, fromData);
    vec3 b = restingTarget(uToMotion, toData);
    float e = travelEase(g.morph);
    p = mix(a, b, e) + flightArc(a, b, g.morph);
    float ahead = min(g.morph + 0.02, 1.0);
    vec3 next = mix(a, b, travelEase(ahead)) + flightArc(a, b, ahead);
    g.velocity = (next - p) / max((ahead - g.morph) * ${w(1.6)}, 1e-4);
  }

  vec3 dust = dustPosition(r1);
  float te = entranceT(dust, r2.x);
  g.entrance = 1.0 - te;
  g.loose = max(g.loose, (1.0 - smoothstep(0.55, 0.9, te)) * uMovement);
  if (te < 1.0) {
    // Spiral in from a wider cloud; the remaining twist unwinds as particles land.
    float e = 1.0 - pow(1.0 - te, 3.0);
    float twist = (1.0 - e) * 2.3;
    float c = cos(twist);
    float s = sin(twist);
    vec3 start = dust * vec3(1.25, 1.25, 1.0);
    start.xy = mat2(c, s, -s, c) * start.xy;
    g.velocity = (p - start) * 3.0 * (1.0 - e);
    p = mix(start, p, e);
  }

  g.scatter = scatterT(r2.z);
  g.loose = max(g.loose, g.scatter);
  vec3 drift = dust + vec3(0.0, uScatter * 0.9, 0.0);
  p = mix(p, drift, g.scatter);
  g.position = p;
  return g;
}
`,Bt=`
uniform vec3 uPointerOrigin;
uniform vec3 uPointerDir;
uniform vec3 uPointerVelocity;
uniform float uPointerStrength;
uniform float uPointerRadius;
uniform vec4 uShockA0;
uniform vec4 uShockB0;
uniform vec4 uShockA1;
uniform vec4 uShockB1;
`,Va=`
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Ia=`
precision highp float;
${Ct}
${Bt}
uniform highp sampler2D tPosition;
uniform highp sampler2D tVelocity;
uniform float uDt;
uniform float uReset;
layout(location = 0) out highp vec4 outPosition;
layout(location = 1) out highp vec4 outVelocity;

vec3 shockForce(vec3 pos, vec4 A, vec4 B, inout float energy) {
  vec3 force = vec3(0.0);
  float age = uSimTime - A.w;
  if (B.w > 0.0 && age >= 0.0 && age < ${w(k.shockLife)}) {
    vec3 rel = pos - A.xyz;
    vec3 radial = rel - dot(rel, B.xyz) * B.xyz;
    float d = length(radial);
    float x = (d - age * ${w(k.shockSpeed)}) / ${w(k.shockWidth)};
    float band = exp(-x * x);
    float fade = 1.0 - age / ${w(k.shockLife)};
    fade *= fade * B.w;
    vec3 n = radial / max(d, 1e-4);
    force = (n * ${w(k.shockPush)} - B.xyz * ${w(k.shockLift)}) * band * fade;
    energy = max(energy, band * fade);
  }
  return force;
}

void main() {
  ivec2 ij = ivec2(gl_FragCoord.xy);
  int index = ij.y * SIDE + ij.x;
  vec3 r0 = random3(index, 1u);
  vec3 r1 = random3(index, 2u);
  vec3 r2 = random3(index, 3u);
  vec4 fromData = texelFetch(tShapePos, atlasTexel(ij, uFromSlot), 0);
  vec4 toData = texelFetch(tShapePos, atlasTexel(ij, uToSlot), 0);
  Guide g = heroGuide(fromData, toData, r0, r1, r2);

  vec4 P = texelFetch(tPosition, ij, 0);
  vec4 V = texelFetch(tVelocity, ij, 0);
  vec3 pos = P.xyz;
  vec3 vel = V.xyz;

  // Landing particles (locked, not yet arrived) get a stiffer, better damped spring so a
  // shape reads crisply as soon as its last particles arrive.
  float landing = step(${w(k.lockAt)}, g.morph) * (1.0 - step(1.0, g.morph)) * uMovement;
  float stiffness = mix(mix(${w(k.restStiffness)}, ${w(k.landingStiffness)}, landing), ${w(k.looseStiffness)}, g.loose);
  float zeta = mix(mix(${w(k.restDamping)}, ${w(k.landingDamping)}, landing), ${w(k.looseDamping)}, g.loose);
  float damping = 2.0 * zeta * sqrt(stiffness);
  vec3 acc = (g.position - pos) * stiffness - vel * damping;
  float flow = max(g.flight, max(g.entrance * g.loose, g.scatter));
  acc += curlNoise(pos * ${w(k.flowScale)} + vec3(0.0, uSimTime * ${w(k.flowSpeed)}, uPhaseSeed))
    * mix(${w(k.restFlow)}, ${w(k.looseFlow)}, flow) * uMovement;

  float energy = 0.0;
  if (uPointerStrength > 0.001) {
    vec3 rel = pos - uPointerOrigin;
    vec3 radial = rel - dot(rel, uPointerDir) * uPointerDir;
    float d2 = dot(radial, radial);
    float brush = clamp(length(uPointerVelocity) / ${w(k.pointerFullSpeed)}, 0.0, 1.0);
    float w = uPointerStrength * brush * exp(-d2 / (uPointerRadius * uPointerRadius));
    vec3 n = radial * inversesqrt(max(d2, 1e-6));
    acc += (n * ${w(k.pointerPush)} + uPointerVelocity * ${w(k.pointerStir)}) * w;
    energy = w;
  }
  acc += shockForce(pos, uShockA0, uShockB0, energy);
  acc += shockForce(pos, uShockA1, uShockB1, energy);

  vel += acc * uDt;
  float speed = length(vel);
  vel *= min(1.0, ${w(k.maxSpeed)} / max(speed, 1e-4));
  pos += vel * uDt;
  float heat = max(P.w * exp(-uDt * ${w(k.heatDecay)}), energy);

  outPosition = uReset > 0.5 ? vec4(g.position, 0.0) : vec4(pos, clamp(heat, 0.0, 1.0));
  outVelocity = uReset > 0.5 ? vec4(0.0) : vec4(vel, 0.0);
}
`,La=`
${Ct}
${Bt}
uniform highp sampler2D tPosition;
uniform highp sampler2D tVelocity;
uniform float uSimulated;
uniform float uFromEffect;
uniform float uToEffect;
uniform float uSize;
uniform float uPixelRatio;
uniform vec2 uViewport;
uniform float uHoverNode;
uniform float uHoverTime;
uniform float uHoverStrength;
uniform vec3 uColor;
uniform vec3 uAccent;
uniform vec3 uHot;
uniform float uOpacity;
uniform float uGlow;
uniform float uDof;
varying vec3 vColor;
varying float vAlpha;
varying float vSoft;
varying vec3 vStreak;

float databaseHeight(vec3 p) {
  return p.y * ${w(Math.cos(.28))} + p.z * ${w(Math.sin(.28))};
}

// x: accent, y: opacity, z: size. Distinct weights keep rims and synapses readable.
vec3 appearance(float effect, vec4 data, vec4 style, vec2 detail) {
  vec3 look = style.xyz;
  if (effect > 0.5 && effect < 1.5) {
    // Database: group = tier, style.w = azimuth, detail.x = surface kind.
    float tier = data.w;
    float kind = detail.x;
    float rim = 1.0 - step(0.5, abs(kind - 2.0));
    float wall = 1.0 - step(0.5, kind);
    float indicator = step(3.5, kind);
    // Opposite travelling highlights keep one scan visible on the front half.
    float head = fract(uTime * 0.20 - tier * 0.16);
    float gap = abs(style.w - head);
    gap = min(gap, 1.0 - gap);
    gap = min(gap, abs(gap - 0.5));
    float sweep = (1.0 - smoothstep(0.012, 0.065, gap)) * uMovement;
    // Enter and leave beyond the silhouette so the wrap never flashes in place.
    float readHead = mod(uTime * 0.82, 3.0) - 1.5;
    float read = (1.0 - smoothstep(0.035, 0.19, abs(databaseHeight(data.xyz) - readHead))) * uMovement;
    float activity = max(sweep * max(rim, wall * 0.45), read * max(wall * 0.82, indicator));
    float heartbeat = (0.5 + 0.5 * sin(uTime * 2.1 - tier * 1.4)) * indicator * uMovement;
    look = vec3(
      mix(style.x, 1.0, activity),
      style.y + activity * 0.60 + heartbeat * 0.16,
      style.z * (1.0 + activity * 0.28));
  } else if (effect > 1.5) {
    // Network: group = source layer, style.w = target layer, detail.x = edge t (-1 on surfaces).
    float source = data.w;
    float target = style.w;
    float edgeT = detail.x;
    float edge = step(0.0, edgeT);
    // Stage-index flow lights complete feature maps, then their outgoing paths.
    float stage = mix(source, mix(source, target, edgeT), edge);
    float wave = mod(uTime * 1.35, 9.5) - 1.0;
    float signal = (1.0 - smoothstep(0.12, 0.65, abs(stage - wave))) * uMovement;
    float hover = step(-0.5, uHoverNode) * clamp(uHoverStrength, 0.0, 1.0);
    float fromSelected = 1.0 - step(0.5, abs(source - uHoverNode));
    float toSelected = 1.0 - step(0.5, abs(target - uHoverNode));
    float selected = (1.0 - edge) * fromSelected * hover;
    float connected = edge * max(fromSelected, toSelected) * hover;
    // Reverse the edge parameter when the selected node is at its target end.
    float outwardT = mix(1.0 - edgeT, edgeT, fromSelected);
    float pulsePosition = mod(max(uHoverTime, 0.0) * 0.85, 1.5);
    float pulse = (1.0 - smoothstep(0.035, 0.16, abs(outwardT - pulsePosition))) * uMovement;
    // Keep automatic layer flow; hover emphasizes only adjacent connections.
    float automatic = signal * (1.0 - edge * hover);
    look = vec3(
      mix(style.x, 1.0, automatic * 0.9),
      mix(style.y, max(style.y, 0.85), automatic),
      style.z * (1.0 + signal * 0.10));
    float highlight = max(selected * 0.94, connected * (0.18 + pulse * 0.78));
    look.x = mix(look.x, 1.0, highlight);
    look.y = max(look.y, mix(look.y, 1.85, selected * 0.65));
    look.y = max(look.y, mix(look.y, 0.52 + pulse * 0.63, connected));
  }
  return look;
}

float isDatabase(float effect) {
  return step(0.5, effect) * (1.0 - step(1.5, effect));
}

vec3 shockOffset(vec3 pos, vec4 A, vec4 B, inout float energy) {
  vec3 offset = vec3(0.0);
  float age = uSimTime - A.w;
  if (B.w > 0.0 && age >= 0.0 && age < ${w(k.shockLife)}) {
    vec3 rel = pos - A.xyz;
    vec3 radial = rel - dot(rel, B.xyz) * B.xyz;
    float d = length(radial);
    float x = (d - age * ${w(k.shockSpeed)}) / ${w(k.shockWidth*1.6)};
    float band = exp(-x * x);
    float fade = 1.0 - age / ${w(k.shockLife)};
    fade *= fade * B.w;
    offset = (radial / max(d, 1e-4) * 0.32 - B.xyz * 0.18) * band * fade;
    energy = max(energy, band * fade);
  }
  return offset;
}

void main() {
  int index = gl_VertexID;
  ivec2 ij = ivec2(index % SIDE, index / SIDE);
  vec3 r0 = random3(index, 1u);
  vec3 r1 = random3(index, 2u);
  vec3 r2 = random3(index, 3u);
  vec4 fromData = texelFetch(tShapePos, atlasTexel(ij, uFromSlot), 0);
  vec4 toData = texelFetch(tShapePos, atlasTexel(ij, uToSlot), 0);

  vec3 position = vec3(0.0);
  vec3 velocity = vec3(0.0);
  float heat = 0.0;
  float morph = 1.0;
  float entrance = 0.0;
  float scatter = 0.0;
  if (uSimulated > 0.5) {
    vec4 P = texelFetch(tPosition, ij, 0);
    position = P.xyz;
    heat = P.w;
    velocity = texelFetch(tVelocity, ij, 0).xyz;
    morph = morphT(fromData, toData, r0.x);
    entrance = 1.0 - entranceT(dustPosition(r1), r2.x);
    scatter = scatterT(r2.z);
  } else {
    // Stateless path (reduced motion, or no float render targets): same choreography, no inertia.
    Guide g = heroGuide(fromData, toData, r0, r1, r2);
    position = g.position;
    velocity = g.velocity;
    morph = g.morph;
    entrance = g.entrance;
    scatter = g.scatter;
    float loose = max(g.flight, max(entrance, scatter)) * uMovement;
    if (loose > 0.001) {
      position += curlNoise(position * ${w(k.flowScale)} + vec3(0.0, uSimTime * ${w(k.flowSpeed)}, uPhaseSeed)) * 0.05 * loose;
    }
    if (uPointerStrength > 0.001) {
      vec3 rel = position - uPointerOrigin;
      vec3 radial = rel - dot(rel, uPointerDir) * uPointerDir;
      float d2 = dot(radial, radial);
      float brush = clamp(length(uPointerVelocity) / ${w(k.pointerFullSpeed)}, 0.0, 1.0);
      float w = uPointerStrength * brush * exp(-d2 / (uPointerRadius * uPointerRadius));
      vec3 n = radial * inversesqrt(max(d2, 1e-6));
      position += (n * 0.05 + uPointerVelocity * 0.03) * w;
      heat = w * 0.8;
    }
    position += shockOffset(position, uShockA0, uShockB0, heat);
    position += shockOffset(position, uShockA1, uShockB1, heat);
  }

  // Shape styling: the landing shape's look, blended from the departing one mid-flight.
  vec4 styleTo = texelFetch(tShapeStyle, atlasTexel(ij, uToSlot), 0);
  vec2 detailTo = texelFetch(tShapeDetail, atlasTexel(ij, uToSlot), 0).xy;
  vec3 look = appearance(uToEffect, toData, styleTo, detailTo);
  float databaseWeight = isDatabase(uToEffect);
  if (morph < 1.0) {
    vec4 styleFrom = texelFetch(tShapeStyle, atlasTexel(ij, uFromSlot), 0);
    vec2 detailFrom = texelFetch(tShapeDetail, atlasTexel(ij, uFromSlot), 0).xy;
    float blend = smoothstep(0.25, 0.75, morph);
    look = mix(appearance(uFromEffect, fromData, styleFrom, detailFrom), look, blend);
    databaseWeight = mix(isDatabase(uFromEffect), databaseWeight, blend);
  }

  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float depth = max(-mv.z, 0.5);
  // Depth fog; database surfaces already encode lighting, so they fade less.
  float fog = mix(1.12, 0.55, smoothstep(5.7, 8.3, depth));
  fog = mix(fog, mix(1.04, 0.76, smoothstep(5.2, 8.8, depth)), databaseWeight);

  float dusty = max(entrance, scatter);
  // Every particle shows on a formed shape; dust keeps only a sparse share (cheaper, cleaner bokeh).
  float keep = mix(1.08, ${w(k.dustKeep)}, dusty);
  float visible = 1.0 - smoothstep(keep - 0.08, keep, r2.y);
  float twinkle = 1.0 + (0.08 + 0.22 * dusty) * sin(uSimTime * (1.1 + r2.y * 2.4) + r2.z * TAU) * uMovement;

  // Energy: flight glow, entrance glow and interaction heat drive the accent ramp.
  float flight = sin(PI * morph) * uMovement;
  float arrival = sin(PI * clamp(entrance, 0.0, 1.0)) * uMovement;
  float energy = max(flight, arrival);
  float spark = step(1.0 - ${w(k.sparkFraction)}, r0.y);
  float sparkLevel = spark * max(energy, heat);
  float accent = max(look.x, max(energy * 0.3, heat * 0.9));
  accent = max(accent, sparkLevel);
  vec3 color = mix(uColor, uAccent, clamp(accent, 0.0, 1.0));
  vColor = mix(color, uHot, clamp(sparkLevel * 0.8 + heat * heat * 0.35, 0.0, 1.0));

  float baseSize = uSize * uPixelRatio * look.z * (0.85 + r0.z * 0.3) * (7.0 / depth);
  float size = baseSize * (1.0 + heat * 0.35);
  float alpha = look.y * (0.85 + r0.z * 0.15) * fog * twinkle * visible;
  alpha *= mix(1.0, ${w(k.dustAlpha)}, dusty) * uOpacity;

  vec4 clip = projectionMatrix * mv;
  vStreak = vec3(0.0);
  vSoft = 0.0;
  bool streaking = false;
  if (sparkLevel > 0.05 && uMovement > 0.5) {
    // Sparks become thin comets along their screen-space velocity.
    vec4 tail = projectionMatrix * (modelViewMatrix * vec4(position - velocity * ${w(k.streakTime)}, 1.0));
    vec2 delta = (clip.xy / clip.w - tail.xy / max(tail.w, 1e-3)) * 0.5 * uViewport;
    float travel = length(delta);
    float len = min(travel, ${w(k.streakMax)}) * sparkLevel;
    if (len > 2.0) {
      streaking = true;
      vec2 dir = delta / travel;
      float width = max(baseSize * 0.9, 1.6 * uPixelRatio);
      float total = width + len;
      vStreak = vec3(dir, len / total);
      alpha = min(alpha * (1.0 + sparkLevel), 1.0);
      // Shift the sprite back so the bright head sits on the particle.
      clip.xy -= dir * (len * 0.5) / (0.5 * uViewport) * clip.w;
      size = total;
    }
  }
  if (!streaking) {
    size *= 1.0 + sparkLevel * 0.5;
    float coc = clamp((abs(depth - ${w(k.focus)}) - ${w(k.dofRange)}) * ${w(k.dofGain)}, 0.0, 1.0);
    coc = max(coc, dusty * clamp(abs(depth - ${w(k.focus)}) * 0.32, 0.0, 1.0)) * uDof;
    float glow = uGlow * clamp(max(accent - 0.35, 0.0) * 0.5 + sparkLevel + heat * 0.5, 0.0, 1.0);
    size *= (1.0 + coc * ${w(k.bokehSize)}) * (1.0 + glow * 1.2);
    alpha /= (1.0 + coc * ${w(k.bokehSize*1.3)}) * (1.0 + glow * 0.9);
    vSoft = max(coc, glow * 0.85);
  }
  vAlpha = alpha;
  gl_Position = clip;
  gl_PointSize = visible > 0.001 ? min(size, ${w(k.maxPointSize)}) : 0.0;
}
`,Ca=`
varying vec3 vColor;
varying float vAlpha;
varying float vSoft;
varying vec3 vStreak;

void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  c.y = -c.y;
  float d = length(c);
  float along = 1.0;
  float edge = mix(0.5, 0.0, vSoft);
  if (vStreak.z > 0.0) {
    // Capsule with a hard edge; brightness fades from the head to the tail.
    float h = vStreak.z;
    float t = clamp(dot(c, vStreak.xy), -h, h);
    d = length(c - vStreak.xy * t) / max(1.0 - h, 1e-3);
    along = mix(0.08, 1.0, t / h * 0.5 + 0.5);
    along *= along;
    edge = 0.72;
  }
  // Crisp dots in focus; soft, faintly rimmed bokeh discs when defocused.
  float disc = 1.0 - smoothstep(edge, 1.0, d);
  float rim = smoothstep(0.5, 0.92, d) * (1.0 - smoothstep(0.92, 1.0, d)) * vSoft * 0.3;
  float alpha = (disc + rim) * vAlpha * along;
  if (alpha < 0.003) discard;
  gl_FragColor = vec4(vColor, min(alpha, 1.0));
  #include <colorspace_fragment>
}
`,Ba=`
uniform vec4 uRect;
varying vec2 vNdc;
void main() {
  vNdc = mix(uRect.xy, uRect.zw, uv);
  gl_Position = vec4(vNdc, 0.0, 1.0);
}
`,Ha=`
uniform float uAspect;
uniform vec4 uRing0;
uniform vec4 uRing1;
uniform vec3 uColor;
uniform float uStrength;
varying vec2 vNdc;

float ring(vec4 r) {
  float d = length((vNdc - r.xy) * vec2(uAspect, 1.0)) - r.z;
  float line = exp(-pow(d / 0.006, 2.0));
  float haze = exp(-pow(d / 0.05, 2.0)) * 0.22;
  return (line + haze) * r.w;
}

void main() {
  float alpha = (ring(uRing0) + ring(uRing1)) * uStrength;
  if (alpha < 0.002) discard;
  gl_FragColor = vec4(uColor, min(alpha, 1.0));
  #include <colorspace_fragment>
}
`;function _a(e){let t=new Float32Array(e*3),i=6,a=2.8,r=.78,o=.6,s=.35,l=0,c=(n,h)=>{let v=Math.sin(n*12.9898+h*78.233)*43758.5453;return v-Math.floor(v)};for(let n=0;n<i;n++){let h=Math.floor(e/i)+(n<e%i?1:0),v=Math.ceil(Math.sqrt(h));for(let u=0;u<h;u++,l++){let p=Math.floor((u+.5)*v*v/h),g=Math.floor(p/v),d=p%v,M=(v>1?(d/(v-1)-.5)*a:0)+(c(l,13)-.5)*.006,f=-1.25+n*.5+(c(l,14)-.5)*.006,y=(v>1?(g/(v-1)-.5)*a:0)+(c(l,15)-.5)*.006,b=M*Math.cos(o)+y*Math.sin(o),z=-M*Math.sin(o)+y*Math.cos(o);t.set([b*r,(f*Math.cos(s)-z*Math.sin(s))*r,(f*Math.sin(s)+z*Math.cos(s))*r],l*3)}}return{positions:t}}function G(e,t){let i=Math.imul(e+1,2654435761)^t;return i=Math.imul(i^i>>>16,2246822507),i=Math.imul(i^i>>>13,3266489909),((i^i>>>16)>>>0)/4294967296}var wt=2.15,bt=1.7,te=1024,Ie=1<<20;function Ht(e){return Math.max(0,Math.min(te-1,Math.floor((e+wt)/(wt*2)*(te-1))))}function _t(e){return Math.max(0,Math.min(te-1,Math.floor((e+bt)/(bt*2)*(te-1))))}function Mt(e){return e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,(e|e<<1)&1431655765}function ja(e,t){return Mt(Ht(e))|Mt(_t(t))<<1}function Na(e,t){let i=Ht(e),a=_t(t),r=0;for(let o=te/2;o>0;o>>=1){let s=(i&o)>0?1:0,l=(a&o)>0?1:0;if(r+=o*o*(3*s^l),l===0){s===1&&(i=te-1-i,a=te-1-a);let c=i;i=a,a=c}}return r}function Ee(e){let t=Math.floor(e.length/3);if(t>Ie)throw new RangeError("Too many particles to order.");let i=new Float64Array(t);for(let r=0;r<t;r++)i[r]=Na(e[r*3],e[r*3+1])*Ie+r;i.sort();let a=new Uint32Array(t);for(let r=0;r<t;r++)a[r]=i[r]%Ie;return a}function K(e,t,i){let a=new Float32Array(i.length*t);for(let r=0;r<i.length;r++){let o=i[r]*t;for(let s=0;s<t;s++)a[r*t+s]=e[o+s]}return a}function Fe(e){if(!Number.isSafeInteger(e)||e<0)throw new RangeError("Particle count must be a non-negative safe integer.")}function ee(e,t,i,a=.052){let r=i[0]-t[0],o=i[1]-t[1],s=Math.hypot(r,o);s!==0&&e.push({x:t[0],y:t[1],dx:r,dy:o,length:s,width:a})}function Oa(e,t,i=.052){for(let a=1;a<t.length;a++)ee(e,t[a-1],t[a],i)}function qa(e,t,i,a,r,o,s=.052){let l=Math.max(4,Math.ceil(Math.abs(o-r)*12)),c=[t+Math.cos(r)*a,i+Math.sin(r)*a];for(let n=1;n<=l;n++){let h=r+(o-r)*n/l,v=[t+Math.cos(h)*a,i+Math.sin(h)*a];ee(e,c,v,s),c=v}}function Xa(){let e=[];return ee(e,[-1.99,.82],[-.91,.82],.17),ee(e,[-1.45,.82],[-1.45,-.9],.17),Oa(e,[[-.65,-.82],[-.65,.82],[-.3,.82]],.16),qa(e,-.3,0,.82,Math.PI/2,-Math.PI/2,.16),ee(e,[-.3,-.82],[-.65,-.82],.16),ee(e,[.91,.84],[1.96,-.86],.17),ee(e,[.91,-.86],[1.96,.84],.17),e}function Wa(e){Fe(e);let t=Xa(),i=t.reduce((n,h)=>n+h.length,0),a=[],r=0,o=0,s=101;for(let n=0;n<e;n++){let h=(n+G(n,s))/e*i;for(;r<t.length-1&&h>o+t[r].length;)o+=t[r].length,r++;let v=t[r],u=(h-o)/v.length,p=(G(n,s+1)-.5)*v.width,g=v.x+v.dx*u-v.dy/v.length*p,d=v.y+v.dy*u+v.dx/v.length*p,M=(G(n,s+2)-.5)*.08;a.push({x:g,y:d,z:M,order:ja(g,d)})}a.sort((n,h)=>n.order-h.order||n.x-h.x||n.y-h.y||n.z-h.z);let l=new Float32Array(e*3),c=new Float32Array(e*3);return a.forEach((n,h)=>{l.set([n.x,n.y,n.z],h*3),c.set([n.x<-.8?1:0,.9,.82],h*3)}),{positions:l,styles:c}}var Ga={plain:0,database:1,network:2},J={scale:1,sway:{amplitude:0,speed:0},ripple:{amplitude:0,frequency:1,speed:0},breathe:{amplitude:0,spread:0,speed:0,center:0,axis:[0,1,0]}};function jt(e){let t=Ee(e.positions);return{positions:K(e.positions,3,t),styles:K(e.styles,3,t),groups:K(e.groups,1,t),details:K(e.details,2,t)}}function Ya(e){let t=Da(e),i=new Float32Array(e),a=new Float32Array(e*2);for(let r=0;r<e;r++)i[r]=t.details[r*3],a[r*2]=t.details[r*3+1],a[r*2+1]=t.details[r*3+2];return jt({positions:t.positions,styles:t.styles,groups:i,details:a})}function Ua(e){let t=Ea(e),i=new Float32Array(e),a=new Float32Array(e*2);for(let r=0;r<e;r++)i[r]=t.links[r*3],a[r*2]=t.links[r*3+1],a[r*2+1]=t.links[r*3+2];return jt({positions:t.positions,styles:t.styles,groups:i,details:a})}function Ka(e){let{positions:t}=_a(e),i=Ee(t),a=new Float32Array(e*3);for(let r=0;r<e;r++){let o=G(r,503)>=.96?1:0;a.set([o,.96,o?1.15:.8],r*3)}return{positions:K(t,3,i),styles:a}}var Za=[{id:0,key:"monogram",effect:"plain",motion:J,build:Wa},{id:1,key:"database",effect:"database",motion:{...J,breathe:{amplitude:.055,spread:.035,speed:1.15,center:1,axis:[0,Math.cos(.28),Math.sin(.28)]}},build:Ya},{id:2,key:"network",effect:"network",motion:{...J,scale:.86,sway:{amplitude:.045,speed:.26}},build:Ua},{id:3,key:"lattice",effect:"plain",motion:{...J,sway:{amplitude:.22,speed:.15},ripple:{amplitude:.06,frequency:.9,speed:.12}},build:Ka}],Xe=new Map(Za.map(e=>[e.id,e]));function Le(e){if(!Number.isInteger(e.id)||e.id<0)throw new RangeError("Shape IDs are non-negative integers.");if(!e.key)throw new Error("A shape needs a Home.particles message key.");if(Xe.has(e.id))throw new Error(`Shape ID ${e.id} is already registered.`);Xe.set(e.id,e)}function We(e){let t=Xe.get(e);if(!t)throw new Error(`Unknown particle shape ${e}.`);return t}function Ja(e,t=new Float32Array(16)){let{scale:i,sway:a,ripple:r,breathe:o}=e;return t.set([i,a.amplitude,a.speed,r.amplitude,r.frequency,r.speed,o.amplitude,o.spread,o.speed,o.center,0,0,o.axis[0],o.axis[1],o.axis[2],0]),t}function Qa(e){return Math.max(1,Math.ceil(Math.sqrt(e)))}function ei(e,t,i){let a=[["positions",3],["styles",3],["groups",1],["details",2]];for(let[r,o]of a){let s=e[r];if(!(s===void 0&&(r==="groups"||r==="details"))&&(!(s instanceof Float32Array)||s.length!==t*o))throw new Error(`Shape "${i}" returned ${r} with the wrong length.`)}}function ti(e,t){if(Fe(t),e.length===0)throw new Error("The atlas needs at least one shape.");if(new Set(e).size!==e.length)throw new Error("Atlas shape IDs must be unique.");let i=Qa(t),a=i*i*e.length;return{count:t,side:i,ids:[...e],positions:new Float32Array(a*4),styles:new Float32Array(a*4),details:new Float32Array(a*2)}}function ai(e,t){let i=We(e.ids[t]),a=i.build(e.count);ei(a,e.count,i.key);let r=t*e.side*e.side;for(let o=0;o<e.count;o++){let s=r+o;e.positions[s*4]=a.positions[o*3],e.positions[s*4+1]=a.positions[o*3+1],e.positions[s*4+2]=a.positions[o*3+2],e.positions[s*4+3]=a.groups?a.groups[o]:0,e.styles[s*4]=a.styles[o*3],e.styles[s*4+1]=a.styles[o*3+1],e.styles[s*4+2]=a.styles[o*3+2],e.styles[s*4+3]=a.details?a.details[o*2]:0,e.details[s*2]=a.details?a.details[o*2+1]:0}}async function ii(e,t,i=()=>new Promise(a=>setTimeout(a,0))){let a=ti(e,t);for(let r=0;r<e.length;r++)await i(),ai(a,r);return a}var ri=/swiftshader|llvmpipe|softpipe|software|basic render/i;function oi(e){let t=e.getContext(),i=t.getExtension("WEBGL_debug_renderer_info"),a=i?t.getParameter(i.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof a=="string"?a:""}function Nt(e){return ri.test(oi(e))}function si(e){let t=e.getContext();return typeof WebGL2RenderingContext>"u"||!(t instanceof WebGL2RenderingContext)||e.capabilities.maxVertexTextures<6||e.capabilities.maxTextures<6||t.getParameter(t.MAX_DRAW_BUFFERS)<2||Nt(e)?null:e.extensions.has("EXT_color_buffer_float")?Ye:e.extensions.has("EXT_color_buffer_half_float")?fa:null}var ni=class{constructor(e,t,i){x(this,"side");x(this,"type");x(this,"material");x(this,"targets");x(this,"mesh");x(this,"camera",new ya(-1,1,1,-1,0,1));x(this,"current",0);this.side=e,this.type=t;let a={type:t,format:ze,minFilter:Te,magFilter:Te,wrapS:ct,wrapT:ct,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1,count:2};this.targets=[new _e(e,e,a),new _e(e,e,a)],this.material=new Be({name:"HeroSimulation",glslVersion:va,defines:{SIDE:e},uniforms:{...i,tPosition:{value:null},tVelocity:{value:null},uDt:{value:0},uReset:{value:0}},vertexShader:Va,fragmentShader:Ia,depthTest:!1,depthWrite:!1});let r=new $t;r.setAttribute("position",new ga([-1,3,0,-1,-1,0,3,-1,0],3)),this.mesh=new Ge(r,this.material),this.mesh.frustumCulled=!1}get position(){return this.targets[this.current].textures[0]}get velocity(){return this.targets[this.current].textures[1]}draw(e,t){let i=e.getRenderTarget();e.setRenderTarget(t),e.render(this.mesh,this.camera),e.setRenderTarget(i)}compile(e){return e.compileAsync(this.mesh,this.camera)}reset(e){let t=this.material.uniforms;t.uReset.value=1;for(let i of this.targets){let a=i===this.targets[0]?this.targets[1]:this.targets[0];t.tPosition.value=a.textures[0],t.tVelocity.value=a.textures[1],this.draw(e,i)}t.uReset.value=0}step(e,t){let i=this.targets[this.current],a=this.targets[1-this.current],r=this.material.uniforms;r.tPosition.value=i.textures[0],r.tVelocity.value=i.textures[1],r.uDt.value=t,this.draw(e,a),this.current=1-this.current}verify(e){let t=e.getContext(),i=e.getRenderTarget();e.setRenderTarget(this.targets[this.current]);let a=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;if(e.setRenderTarget(i),!a)return!1;if(this.type!==Ye)return!0;let r=new Float32Array(4),o=[[0,0],[this.side-1,this.side-1],[this.side>>1,this.side>>2]],s=0;for(let[l,c]of o){e.readRenderTargetPixels(this.targets[this.current],l,c,1,1,r,void 0,0);for(let n of r){if(!Number.isFinite(n)||Math.abs(n)>100)return!1;s+=Math.abs(n)}}return s>0}dispose(){for(let e of this.targets)e.dispose();this.material.dispose(),this.mesh.geometry.dispose()}},li=7,ci=Math.tan(O.degToRad(38/2)),St=2.35,hi=[[-2.35,-1.85],[-2.35,1.85],[2.35,-1.85],[2.35,1.85]],kt=[.3,Math.PI+.55,-Math.PI/2+.25,Math.PI*.72,Math.PI/2+.4],ui=1/30;function Ce(e,t){var i,a;return((a=(i=e.properties.get(t).currentProgram)==null?void 0:i.diagnostics)==null?void 0:a.runnable)===!1}function Se(e,t,i,a){let r=new ma(e,t,i,a,Ye);return r.minFilter=Te,r.magFilter=Te,r.generateMipmaps=!1,r.needsUpdate=!0,r}var di=class{constructor(e,t,i,a,r,o){x(this,"atlas");x(this,"cycle");x(this,"entrance");x(this,"object",new da);x(this,"count");x(this,"mode","shader");x(this,"points");x(this,"material");x(this,"overlay");x(this,"overlayMaterial");x(this,"textures");x(this,"placeholder",Se(new Float32Array(4),1,1,ze));x(this,"uniforms");x(this,"slots",new Map);x(this,"sim",null);x(this,"needsReset",!0);x(this,"wasReduced");x(this,"raycaster",new pa);x(this,"ndc",new fe);x(this,"inverse",new de);x(this,"origin",new I);x(this,"direction",new I);x(this,"hit",new I);x(this,"lastHit",new I);x(this,"probe",new I);x(this,"axis",new I(0,1,0));x(this,"networkLayers",Ta());x(this,"orbit",za());x(this,"tilt",{x:0,y:0});x(this,"hasLastHit",!1);x(this,"pointerStrength",0);x(this,"hoverTime",0);x(this,"simTime",0);x(this,"scatter",0);x(this,"transitions",0);x(this,"fps",0);x(this,"shocks",[{a:new Z(0,0,0,-99),b:new Z(0,0,1,0),x:0,y:0},{a:new Z(0,0,0,-99),b:new Z(0,0,1,0),x:0,y:0}]);x(this,"nextShock",0);x(this,"clickPoint",null);x(this,"cycleOptions",{active:!1,reduced:!1});x(this,"entranceOptions",{active:!1,reduced:!1,hold:!1});x(this,"orbitInput",{dragging:!1,dx:0,dy:0});x(this,"bounds",{minX:0,minY:0,maxX:0,maxY:0,aspect:1});this.atlas=e,this.cycle=t,this.entrance=i,this.count=e.count,this.wasReduced=o;let s=e.side,l=s*e.ids.length;this.textures=[Se(e.positions,s,l,ze),Se(e.styles,s,l,ze),Se(e.details,s,l,xa)],e.ids.forEach((h,v)=>{let u=We(h),p=new de().fromArray(Ja(u.motion));this.slots.set(h,{slot:v,effect:Ga[u.effect],motion:p})});let c={tShapePos:{value:this.textures[0]},tShapeStyle:{value:this.textures[1]},tShapeDetail:{value:this.textures[2]},uFromSlot:{value:0},uToSlot:{value:0},uFromMotion:{value:new de},uToMotion:{value:new de},uTime:{value:0},uSimTime:{value:0},uElapsed:{value:Q},uMovement:{value:1},uSweep:{value:new Z(1,0,0,1/(2*St))},uPhaseSeed:{value:0},uEntrance:{value:0},uScatter:{value:0},uPointerOrigin:{value:new I},uPointerDir:{value:new I(0,0,-1)},uPointerVelocity:{value:new I},uPointerStrength:{value:0},uPointerRadius:{value:Pe.pointerRadius},uShockA0:{value:this.shocks[0].a},uShockB0:{value:this.shocks[0].b},uShockA1:{value:this.shocks[1].a},uShockB1:{value:this.shocks[1].b}};this.uniforms=c,this.material=new Be({name:"HeroParticles",defines:{SIDE:s},uniforms:{...c,tPosition:{value:this.placeholder},tVelocity:{value:this.placeholder},uSimulated:{value:0},uFromEffect:{value:0},uToEffect:{value:0},uSize:{value:2},uPixelRatio:{value:1},uViewport:{value:new fe(1,1)},uHoverNode:{value:-1},uHoverTime:{value:0},uHoverStrength:{value:0},uColor:{value:new pe},uAccent:{value:new pe},uHot:{value:new pe},uOpacity:{value:1},uGlow:{value:0},uDof:{value:1}},vertexShader:La,fragmentShader:Ca,transparent:!0,depthWrite:!1,depthTest:!1});let n=new $t;n.setAttribute("position",new He(new Float32Array(this.count*3),3)),n.boundingSphere=new ca(new I,8),this.points=new ha(n,this.material),this.points.frustumCulled=!1,this.overlayMaterial=new Be({name:"HeroOverlay",uniforms:{uRect:{value:new Z(-1,-1,1,1)},uAspect:{value:1},uRing0:{value:new Z},uRing1:{value:new Z},uColor:{value:new pe},uStrength:{value:1}},vertexShader:Ba,fragmentShader:Ha,transparent:!0,depthWrite:!1,depthTest:!1}),this.overlay=new Ge(new ua(1,1),this.overlayMaterial),this.overlay.frustumCulled=!1,this.overlay.renderOrder=-1,this.overlay.visible=!1,this.object.add(this.points,this.overlay),a!==null&&(this.sim=new ni(s,a,c),this.mode="gpgpu"),this.setPalette(r),this.syncShapes()}async prepare(e,t){this.syncShapes(),this.syncInputs(this.wasReduced);let i=e.debug,a=i.onShaderError;i.onShaderError=()=>{};let r=new _e(1,1,{depthBuffer:!1});try{this.overlay.visible=!0,await e.compileAsync(this.object,t);let o=e.getRenderTarget();if(e.setRenderTarget(r),e.render(this.object,t),e.setRenderTarget(o),Ce(e,this.material)||Ce(e,this.overlayMaterial))throw new Error("Particle shaders failed to compile.");if(!this.sim)return;try{if(await this.sim.compile(e),this.sim.reset(e),this.needsReset=!1,Ce(e,this.sim.material)||!this.sim.verify(e))throw new Error("Particle simulation self-test failed.")}catch{this.sim.dispose(),this.sim=null,this.mode="shader"}}finally{i.onShaderError=a,r.dispose(),this.overlay.visible=!1}}get simulated(){return this.sim!==null}restoreContext(){this.needsReset=!0}setPalette(e){let t=this.material.uniforms;t.uColor.value.set(e.point),t.uAccent.value.set(e.accent),t.uHot.value.set(e.additive?e.amber:e.accentStrong),t.uOpacity.value=e.additive?.62:.92,t.uGlow.value=e.additive?1:0,this.material.blending=e.additive?nt:lt,this.overlayMaterial.uniforms.uColor.value.set(e.accent),this.overlayMaterial.uniforms.uStrength.value=e.additive?.9:.55,this.overlayMaterial.blending=e.additive?nt:lt}shock(e,t,i,a,r=1){if(a)return;this.modelRay(e,t,i);let o=this.shocks[this.nextShock];this.nextShock=(this.nextShock+1)%this.shocks.length,o.a.set(this.origin.x,this.origin.y,this.origin.z,this.simTime),o.b.set(this.direction.x,this.direction.y,this.direction.z,r),o.x=e,o.y=t,r>=1&&(this.clickPoint=this.planeHit()?[this.hit.x,this.hit.y]:null)}modelRay(e,t,i){this.points.updateMatrixWorld(),this.ndc.set(e,t),this.raycaster.setFromCamera(this.ndc,i),this.inverse.copy(this.points.matrixWorld).invert(),this.origin.copy(this.raycaster.ray.origin).applyMatrix4(this.inverse),this.direction.copy(this.raycaster.ray.direction).transformDirection(this.inverse)}planeHit(){if(Math.abs(this.direction.z)<1e-4)return!1;let e=-this.origin.z/this.direction.z;return this.hit.copy(this.direction).multiplyScalar(e).add(this.origin),!0}syncShapes(){let e=this.cycle,t=this.slots.get(e.from)??this.slots.get(e.to),i=this.slots.get(e.to)??t;if(!t||!i)return;let a=this.material.uniforms;a.uFromSlot.value=t.slot,a.uToSlot.value=i.slot,a.uFromMotion.value.copy(t.motion),a.uToMotion.value.copy(i.motion),a.uFromEffect.value=t.effect,a.uToEffect.value=i.effect}syncInputs(e){let t=this.material.uniforms;t.uTime.value=this.cycle.time,t.uSimTime.value=this.simTime,t.uElapsed.value=this.entrance.done?this.cycle.elapsed:Q,t.uMovement.value=e?0:1,t.uEntrance.value=e?Ae:this.entrance.elapsed,t.uScatter.value=e?0:this.scatter,t.uDof.value=e?0:1}planSweep(e){this.transitions+=1,this.uniforms.uPhaseSeed.value=this.transitions*1.618%17;let t=this.uniforms.uSweep.value;if(e&&this.clickPoint){let[i,a]=this.clickPoint,r=0;for(let[o,s]of hi)r=Math.max(r,Math.hypot(o-i,s-a));t.set(i,a,1,1/r)}else{let i=kt[this.transitions%kt.length];t.set(Math.cos(i),Math.sin(i),0,1/(2*St))}this.clickPoint=null}frame(e,t){let{active:i,reduced:a,interaction:r,camera:o}=t,s=t.resume||!i?0:Math.min(Math.max(t.delta,0),.05),l=this.material.uniforms,c=this.cycle;this.wasReduced&&!a&&(this.needsReset=!0),this.wasReduced=a;let n=this.entranceOptions;n.active=i,n.reduced=a,n.hold=t.holdEntrance,Yt(this.entrance,s,n)&&!a&&this.shock(0,0,o,a,.45);let h=null;if(this.entrance.done){let b=c.pending;this.cycleOptions.active=i,this.cycleOptions.reduced=a,h=Ut(c,s,this.cycleOptions),h!==null&&!a&&c.elapsed<Q&&this.planSweep(b)}s>0&&!a&&(this.simTime+=s),this.scatter=a?0:O.damp(this.scatter,t.scroll,5,s);let v=r.dragX??0,u=r.dragY??0;r.dragX!==void 0&&(r.dragX=0),r.dragY!==void 0&&(r.dragY=0);let p=!a&&r.inside;if(a)this.orbit.yaw=this.orbit.pitch=this.orbit.yawVelocity=this.orbit.pitchVelocity=0,this.tilt.x=this.tilt.y=0;else{this.orbitInput.dragging=!!r.dragging,this.orbitInput.dx=v,this.orbitInput.dy=u,Pa(this.orbit,s,this.orbitInput);let b=O.smoothstep(c.elapsed,0,Q),z=O.lerp(+(c.from===2),+(c.to===2),b),F=p?-r.y*O.lerp(.045,.028,z):0,R=p?r.x*O.lerp(.065,.04,z):0;this.tilt.x=O.damp(this.tilt.x,F,3,s),this.tilt.y=O.damp(this.tilt.y,R,3,s)}this.points.rotation.set(this.tilt.x+this.orbit.pitch,this.tilt.y+this.orbit.yaw,0),this.points.updateMatrixWorld();let g=-1;if(p&&this.entrance.done&&c.to===2&&c.elapsed>=Q&&this.scatter<.2){let b=We(2).motion,z=Math.sin(c.time*b.sway.speed)*b.sway.amplitude,F=1/0,R=12/Math.max(t.width,1),P=12/Math.max(t.height,1);for(let S=0;S<this.networkLayers.length;S++){let D=this.networkLayers[S],V=1/0,T=-1/0,E=1/0,_=-1/0;for(let B=0;B<D.corners.length;B++)this.probe.fromArray(D.corners[B]).multiplyScalar(b.scale).applyAxisAngle(this.axis,z).applyMatrix4(this.points.matrixWorld).project(o),V=Math.min(V,this.probe.x),T=Math.max(T,this.probe.x),E=Math.min(E,this.probe.y),_=Math.max(_,this.probe.y);if(r.x<V-R||r.x>T+R||r.y<E-P||r.y>_+P)continue;let L=Math.abs(r.x-(V+T)/2)/(T-V+R*2)+.15*Math.abs(r.y-(_+E)/2)/(_-E+P*2);L<F&&(g=D.id,F=L)}}g>=0&&g!==l.uHoverNode.value&&(l.uHoverNode.value=g,this.hoverTime=0);let d=g>=0?1:0;l.uHoverStrength.value=i&&!a?O.damp(l.uHoverStrength.value,d,12,s):d,g<0&&l.uHoverStrength.value<.002&&(l.uHoverNode.value=-1),i&&!a&&(this.hoverTime+=s),l.uHoverTime.value=this.hoverTime;let M=p?g>=0?.35:1:0;this.pointerStrength=O.damp(this.pointerStrength,M,p?8:4,s);let f=l.uPointerVelocity.value;p?(this.modelRay(r.x,r.y,o),l.uPointerOrigin.value.copy(this.origin),l.uPointerDir.value.copy(this.direction),this.planeHit()&&(this.hasLastHit&&s>0&&(this.probe.copy(this.hit).sub(this.lastHit).divideScalar(s).clampLength(0,6),f.lerp(this.probe,Math.min(1,s*12))),this.lastHit.copy(this.hit),this.hasLastHit=!0)):(this.hasLastHit=!1,f.multiplyScalar(Math.exp(-s*6))),l.uPointerStrength.value=a?0:this.pointerStrength,this.syncShapes(),this.syncInputs(a),l.uPixelRatio.value=t.pixelRatio,l.uViewport.value.set(t.width*t.pixelRatio,t.height*t.pixelRatio),l.uSize.value=2.5*Math.max(.6,t.width/560)*Math.sqrt(11e3/Math.max(this.count,1));let y=this.sim!==null&&!a;if(this.sim&&y?(this.needsReset&&(this.sim.reset(e),this.needsReset=!1),s>0&&this.sim.step(e,Math.min(s,ui)),l.tPosition.value=this.sim.position,l.tVelocity.value=this.sim.velocity):(l.tPosition.value=this.placeholder,l.tVelocity.value=this.placeholder),l.uSimulated.value=y?1:0,this.updateOverlay(t,a),s>0){let b=1/Math.max(t.delta,.001);this.fps=this.fps===0?b:this.fps+(b-this.fps)*Math.min(1,t.delta*2.5)}return h}include(e,t,i){let a=this.bounds;a.minX=Math.min(a.minX,e-i/a.aspect),a.maxX=Math.max(a.maxX,e+i/a.aspect),a.minY=Math.min(a.minY,t-i),a.maxY=Math.max(a.maxY,t+i)}updateOverlay(e,t){let i=this.overlayMaterial.uniforms,a=this.bounds;a.aspect=e.width/Math.max(e.height,1),a.minX=a.minY=1/0,a.maxX=a.maxY=-1/0,i.uAspect.value=a.aspect;for(let r=0;r<this.shocks.length;r++){let o=this.shocks[r],s=r===0?i.uRing0.value:i.uRing1.value,l=this.simTime-o.a.w,c=Pe.shockLife;if(t||o.b.w<=0||l<0||l>=c){s.set(0,0,0,0);continue}let n=l*Pe.shockSpeed/(li*ci),h=(1-l/c)**2*Math.min(1,l*12)*o.b.w;s.set(o.x,o.y,n,h*.55),this.include(o.x,o.y,n+.12)}this.overlay.visible=a.minX<a.maxX,this.overlay.visible&&i.uRect.value.set(Math.max(-1,a.minX),Math.max(-1,a.minY),Math.min(1,a.maxX),Math.min(1,a.maxY))}writeTelemetry(e,t,i,a){e.phase=this.cycle.to,e.morphProgress=this.entrance.done?Kt(this.cycle):this.entrance.elapsed/Ae,e.holdProgress=this.entrance.done?Zt(this.cycle):0,e.particleCount=this.count,e.fps=i?Math.round(this.fps*10)/10:0,e.pointer.x=t.x,e.pointer.y=t.y,e.pointer.inside=t.inside,e.mode=a?"static":this.mode,e.entrance=this.entrance.elapsed/Ae,e.scatter=this.scatter,e.running=i}dispose(){var e;(e=this.sim)==null||e.dispose(),this.sim=null,this.points.geometry.dispose(),this.material.dispose(),this.overlay.geometry.dispose(),this.overlayMaterial.dispose();for(let t of this.textures)t.dispose();this.placeholder.dispose(),this.object.clear()}},ue=new I;function j(e,t,i,a,r,o){let s=2*Math.PI*r/4,l=Math.max(o-2*r,0),c=Math.PI/4;ue.copy(t),ue[a]=0,ue.normalize();let n=.5*s/(s+l),h=1-ue.angleTo(e)/c;return Math.sign(ue[i])===1?h*n:l/(s+l)+n+n*(1-h)}var pi=class Ot extends je{constructor(t=1,i=1,a=1,r=2,o=.1){let s=r*2+1;if(o=Math.min(t/2,i/2,a/2,o),super(1,1,1,s,s,s),this.type="RoundedBoxGeometry",this.parameters={width:t,height:i,depth:a,segments:r,radius:o},s===1)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let c=new I,n=new I,h=new I(t,i,a).divideScalar(2).subScalar(o),v=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,g=v.length/6,d=new I,M=.5/s;for(let f=0,y=0;f<v.length;f+=3,y+=2)switch(c.fromArray(v,f),n.copy(c),n.x-=Math.sign(n.x)*M,n.y-=Math.sign(n.y)*M,n.z-=Math.sign(n.z)*M,n.normalize(),v[f+0]=h.x*Math.sign(c.x)+n.x*o,v[f+1]=h.y*Math.sign(c.y)+n.y*o,v[f+2]=h.z*Math.sign(c.z)+n.z*o,u[f+0]=n.x,u[f+1]=n.y,u[f+2]=n.z,Math.floor(f/g)){case 0:d.set(1,0,0),p[y+0]=j(d,n,"z","y",o,a),p[y+1]=1-j(d,n,"y","z",o,i);break;case 1:d.set(-1,0,0),p[y+0]=1-j(d,n,"z","y",o,a),p[y+1]=1-j(d,n,"y","z",o,i);break;case 2:d.set(0,1,0),p[y+0]=1-j(d,n,"x","z",o,t),p[y+1]=j(d,n,"z","x",o,a);break;case 3:d.set(0,-1,0),p[y+0]=1-j(d,n,"x","z",o,t),p[y+1]=1-j(d,n,"z","x",o,a);break;case 4:d.set(0,0,1),p[y+0]=1-j(d,n,"x","y",o,t),p[y+1]=1-j(d,n,"y","x",o,i);break;case 5:d.set(0,0,-1),p[y+0]=j(d,n,"x","y",o,t),p[y+1]=1-j(d,n,"y","x",o,i);break}}static fromJSON(t){return new Ot(t.width,t.height,t.depth,t.segments,t.radius)}},$=new ka,ke=new I,At=new fe,zt=new fe,Pt=new fe,fi=class{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){let e=this.indexAttribute,t=this.positionAttribute,i=this.weightAttribute,a=e?e.count/3:t.count/3,r=new Float32Array(a);for(let l=0;l<a;l++){let c=1,n=3*l,h=3*l+1,v=3*l+2;e&&(n=e.getX(n),h=e.getX(h),v=e.getX(v)),i&&(c=i.getX(n)+i.getX(h)+i.getX(v)),$.a.fromBufferAttribute(t,n),$.b.fromBufferAttribute(t,h),$.c.fromBufferAttribute(t,v),c*=$.getArea(),r[l]=c}let o=new Float32Array(a),s=0;for(let l=0;l<a;l++)s+=r[l],o[l]=s;return this.distribution=o,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,i,a){let r=this._sampleFaceIndex();return this._sampleFace(r,e,t,i,a)}_sampleFaceIndex(){let e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){let t=this.distribution,i=0,a=t.length-1,r=-1;for(;i<=a;){let o=Math.ceil((i+a)/2);if(o===0||t[o-1]<=e&&t[o]>e){r=o;break}else e<t[o]?a=o-1:i=o+1}return r}_sampleFace(e,t,i,a,r){let o=this.randomFunction(),s=this.randomFunction();o+s>1&&(o=1-o,s=1-s);let l=this.indexAttribute,c=e*3,n=e*3+1,h=e*3+2;return l&&(c=l.getX(c),n=l.getX(n),h=l.getX(h)),$.a.fromBufferAttribute(this.positionAttribute,c),$.b.fromBufferAttribute(this.positionAttribute,n),$.c.fromBufferAttribute(this.positionAttribute,h),t.set(0,0,0).addScaledVector($.a,o).addScaledVector($.b,s).addScaledVector($.c,1-(o+s)),i!==void 0&&(this.normalAttribute!==void 0?($.a.fromBufferAttribute(this.normalAttribute,c),$.b.fromBufferAttribute(this.normalAttribute,n),$.c.fromBufferAttribute(this.normalAttribute,h),i.set(0,0,0).addScaledVector($.a,o).addScaledVector($.b,s).addScaledVector($.c,1-(o+s)).normalize()):$.getNormal(i)),a!==void 0&&this.colorAttribute!==void 0&&($.a.fromBufferAttribute(this.colorAttribute,c),$.b.fromBufferAttribute(this.colorAttribute,n),$.c.fromBufferAttribute(this.colorAttribute,h),ke.set(0,0,0).addScaledVector($.a,o).addScaledVector($.b,s).addScaledVector($.c,1-(o+s)),a.r=ke.x,a.g=ke.y,a.b=ke.z),r!==void 0&&this.uvAttribute!==void 0&&(At.fromBufferAttribute(this.uvAttribute,c),zt.fromBufferAttribute(this.uvAttribute,n),Pt.fromBufferAttribute(this.uvAttribute,h),r.set(0,0).addScaledVector(At,o).addScaledVector(zt,s).addScaledVector(Pt,1-(o+s))),this}},mi={width:3.6,height:2.5,depth:.16,threshold:.5,edgeWeight:1.5,accent:"none",salt:907};function vi(e){let t=e.width*e.height;if(!Number.isInteger(e.width)||!Number.isInteger(e.height)||e.width<=0||e.height<=0)throw new RangeError("Mask dimensions must be positive integers.");if(e.data.length===t*4)return 4;if(e.data.length===t)return 1;throw new RangeError("Mask data must hold one alpha value or four RGBA values per pixel.")}function gi(e,t){let i=0;for(let a=t-1;a<e.data.length;a+=t)i=Math.max(i,e.data[a]);return i>1?1/255:1}function yi(e,t,i={}){Fe(t);let a={...mi,...i},r=vi(e),o=gi(e,r),{width:s,height:l}=e,c=(S,D)=>S<0||D<0||S>=s||D>=l?0:e.data[(D*s+S)*r+r-1]*o,n=[],h=1/0,v=-1/0,u=1/0,p=-1/0;for(let S=0;S<l;S++)for(let D=0;D<s;D++)c(D,S)<a.threshold||(n.push(S*s+D),h=Math.min(h,D),v=Math.max(v,D+1),u=Math.min(u,S),p=Math.max(p,S+1));if(n.length===0)throw new Error("The mask has no filled pixels.");let g=new Uint8Array(n.length),d=new Float64Array(n.length),M=0;n.forEach((S,D)=>{let V=S%s,T=Math.floor(S/s),E=c(V-1,T)<a.threshold||c(V+1,T)<a.threshold||c(V,T-1)<a.threshold||c(V,T+1)<a.threshold;g[D]=E?1:0,M+=1+(E?a.edgeWeight:0),d[D]=M});let f=Math.min(a.width/(v-h),a.height/(p-u)),y=(h+v)/2,b=(u+p)/2,z=new Float32Array(t*3),F=new Float32Array(t*3),R=a.salt;for(let S=0;S<t;S++){let D=(S+G(S,R))/t*M,V=0,T=n.length-1;for(;V<T;){let H=V+T>>1;d[H]<=D?V=H+1:T=H}let E=n[V],_=E%s+G(S,R+1),L=Math.floor(E/s)+G(S,R+2),B=g[V]===1,ve=(G(S,R+3)-.5)*a.depth*(B?.35:1);z.set([(_-y)*f,(b-L)*f,ve],S*3);let N=0;if(a.accent==="color"&&r===4){let H=E*4,oe=e.data[H]*o,X=e.data[H+1]*o,se=e.data[H+2]*o,Y=Math.max(oe,X,se),ge=Math.min(oe,X,se);N=Y>.25&&Y-ge>.3*Y?1:0}F.set([N,B?.95:.72,B?.9:.78],S*3)}let P=Ee(z);return{positions:K(z,3,P),styles:K(F,3,P),groups:new Float32Array(t),details:new Float32Array(t*2)}}function xi({id:e,key:t,mask:i,motion:a=J,sample:r}){return{id:e,key:t,effect:"plain",motion:a,build:o=>yi(i,o,r)}}function Tt(e,t){if(typeof OffscreenCanvas<"u"){let r=new OffscreenCanvas(e,t).getContext("2d",{willReadFrequently:!0});if(r)return r}if(typeof document>"u")throw new Error("Rasterising a mask needs a browser canvas.");let i=document.createElement("canvas");i.width=e,i.height=t;let a=i.getContext("2d",{willReadFrequently:!0});if(!a)throw new Error("2D canvas is unavailable.");return a}function wi(e,t,i){let{data:a}=e.getImageData(0,0,t,i);return{width:t,height:i,data:a}}function bi(e,{font:t="700 160px sans-serif",padding:i=12,letterSpacing:a="0px"}={}){let r=Tt(8,8);r.font=t,"letterSpacing"in r&&(r.letterSpacing=a);let o=r.measureText(e),s=o.actualBoundingBoxAscent||o.fontBoundingBoxAscent||120,l=o.actualBoundingBoxDescent||o.fontBoundingBoxDescent||30,c=Math.max(1,Math.ceil(o.width+i*2)),n=Math.max(1,Math.ceil(s+l+i*2)),h=Tt(c,n);return h.font=t,"letterSpacing"in h&&(h.letterSpacing=a),h.fillStyle="#000",h.textBaseline="alphabetic",h.fillText(e,i,i+s),wi(h,c,n)}function Mi(e,t){return new Sa(e,{depth:t,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.012,bevelThickness:.012,curveSegments:6}).translate(0,0,-t/2)}function qt(e,t,i){let a=new de().makeRotationFromEuler(t).setPosition(i);for(let r of e)r.geometry.applyMatrix4(a);return e}function Xt(e,t,i){Fe(t);let a=e.map(({geometry:d,accent:M})=>{let f=d.index?d.toNonIndexed():d,y=new Float32Array(f.getAttribute("position").count*3);M&&y.fill(1),f.setAttribute("color",new He(y,3));let b=f.getAttribute("normal"),z=new Float32Array(b.count);for(let F=0;F<b.count;F++)z[F]=.08+Math.max(0,b.getZ(F))*.92;return f.setAttribute("sampleWeight",new He(z,1)),f}),r=ba(a);if(!r)throw new Error("The content target surfaces could not be merged.");let o=new Ma,s=new Ge(r,o),l=0,c=new fi(s).setWeightAttribute("sampleWeight").setRandomGenerator(()=>G(l++,i)).build(),n=new I,h=new I,v=new pe,u=new Float32Array(t*3),p=new Float32Array(t*3);try{for(let d=0;d<t;d++){c.sample(n,h,v),u.set([n.x,n.y,n.z],d*3);let M=v.r>.5||G(d,i+1)>.955?1:0,f=Math.pow(Math.max(0,h.z),.45);p.set([M,M?.94:.035+f*.89,M?1.05:.68+f*.1],d*3)}}finally{for(let d of a)d.dispose();for(let d of e)a.includes(d.geometry)||d.geometry.dispose();r.dispose(),o.dispose()}let g=Ee(u);return{positions:K(u,3,g),styles:K(p,3,g)}}function q(e,t,i,a=.08){return new pi(e,t,i,2,a)}function Et(){let e=new wa;e.absarc(0,0,.56,0,Math.PI*2,!1);let t=new ut;t.absarc(0,0,.12,0,Math.PI*2,!0),e.holes.push(t);for(let i=0;i<5;i++){let a=i/5*Math.PI*2,r=new ut;r.absarc(Math.cos(a)*.335,Math.sin(a)*.335,.115,0,Math.PI*2,!0),e.holes.push(r)}return Mi(e,.26)}function Si(e){let t=[{geometry:q(2.02,1.25,.94,.14).translate(0,-.29,0)},{geometry:q(.88,.13,1.02,.04).translate(-.03,-.98,-.03)},{geometry:q(.5,.24,.48,.05).translate(-.52,.43,-.14)},{geometry:q(1.4,.055,.035,.014).translate(-.1,.11,.49),accent:!0},{geometry:Et().translate(-.59,.83,-.11)},{geometry:Et().translate(.61,.83,-.11)},{geometry:new Re(.465,.035,6,48).translate(-.59,.83,.045),accent:!0},{geometry:new Re(.465,.035,6,48).translate(.61,.83,.045),accent:!0},{geometry:new ht(.405,.48,.69,48,1,!1).rotateX(Math.PI/2).translate(.43,-.31,.78)},{geometry:new Re(.405,.043,8,48).translate(.43,-.31,1.14),accent:!0},{geometry:new ht(.285,.285,.035,48,1,!1).rotateX(Math.PI/2).translate(.43,-.31,1.17)}];return qt(t,new Vt(.14,-.48,-.055),new I(.04,-.24,-.12)),Xt(t,e,1739)}function ki(e){let t=[{geometry:q(.12,1.97,1.48,.035).translate(-1.15,0,-.12)},{geometry:q(.12,1.97,1.48,.035).translate(1.15,0,-.12)},{geometry:q(2.3,.12,1.48,.035).translate(0,-.985,-.12)},{geometry:q(2.3,.12,1.48,.035).translate(0,.985,-.12)}];for(let i=0;i<3;i++){let a=.66-i*.66,r=.55+i*.29;t.push({geometry:q(2.05,.42,1.32,.045).translate(0,a,r-.66)},{geometry:q(.63,.15,.04,.02).translate(-.37,a+.04,r+.025),accent:i===1},{geometry:q(.46,.06,.14,.025).translate(.57,a-.04,r+.085),accent:!0},{geometry:new je(2.01,.021,.025).translate(0,a+.19,r+.015),accent:!0},{geometry:new je(2.01,.021,.025).translate(0,a-.19,r+.015),accent:!0})}return qt(t,new Vt(.25,-.49,-.055),new I(.03,-.03,-.18)),Xt(t,e,2633)}var Ft;function Ai(){return Ft??(Ft=(async()=>{var i;let e='700 180px "Noto Sans SC Variable", sans-serif';await((i=document.fonts)==null?void 0:i.load(e,"洋洋子"));let t=bi("洋洋子",{font:e,padding:16});Le({id:4,key:"storyboard",effect:"plain",motion:{...J,sway:{amplitude:.075,speed:.2}},build:Si}),Le({id:5,key:"knowledge",effect:"plain",motion:{...J,sway:{amplitude:.095,speed:.19}},build:ki}),Le(xi({id:6,key:"identity",mask:t,motion:{...J,sway:{amplitude:.1,speed:.2}},sample:{width:3.8,height:2.2,depth:.56,edgeWeight:1.8,salt:3253}}))})()),Ft}var Rt={light:{accent:"#354cff",accentStrong:"#2230a7",amber:"#778aff",cool:"#87b6f0",wire:"#354cff",point:"#202b40",pointOpacity:.58,additive:!1},dark:{accent:"#9aaaff",accentStrong:"#c0cbff",amber:"#c2d9ff",cool:"#9dc7ef",wire:"#a3b4ff",point:"#dce6f7",pointOpacity:.56,additive:!0}},zi=["storyboard","knowledge","identity"],Pi="(prefers-reduced-motion: reduce)",Dt={4:.9,5:.9,6:1};function Di(e,t={}){let i=t.inputSurface??e,a=window.matchMedia(Pi),r=a.matches,o=!1,s=!0,l=!0,c=!1,n=!1,h=!1,v=!1,u=document.documentElement.dataset.theme==="dark"?"dark":"light",p=null,g=null,d=0,M=0,f=0,y="",b=1,z=1,F=0,R=!0,P=null,S=null,D=t.initialIndex!==void 0&&ot(t.initialIndex)?t.initialIndex:0,V=Dt[ce[D]],T=Jt(r,D),E={x:0,y:0,inside:!1,dragging:!1,dragX:0,dragY:0},_=Aa(),L=new ra(38,1,.1,100);L.position.set(0,0,7),L.updateMatrixWorld();let B=new oa,ve=Math.min(window.devicePixelRatio||1,1.5),N={delta:0,resume:!0,active:!0,reduced:r,holdEntrance:!1,interaction:E,camera:L,width:b,height:z,pixelRatio:ve,scroll:0},H=()=>h&&!c&&!n&&!v&&s&&l&&document.visibilityState==="visible"&&!o&&!r;function oe(){let m=S??re(T.cycle.to),A=n?"error":h?T.entrance.done?T.cycle.elapsed<Q?"morphing":"settled":"entrance":"loading";return{index:m,shape:zi[m],phase:A,progress:A==="entrance"?T.entrance.elapsed/Ae:A==="morphing"?T.cycle.elapsed/Q:1,paused:o,manual:T.manual,reduced:r,mode:r?"static":(g==null?void 0:g.mode)??"shader",particleCount:(g==null?void 0:g.count)??0,fps:H()?_.fps:0,pointerX:E.x,pointerY:E.y,pointerInside:E.inside,holdProgress:_.holdProgress,scatter:_.scatter,running:H()}}function X(m=!1){var ie;let A=oe(),C=`${A.index}:${A.phase}:${A.paused}:${A.manual}:${A.reduced}:${A.mode}`,W=performance.now();(m||C!==y||W-f>100)&&(y=C,f=W,(ie=t.onState)==null||ie.call(t,A))}function se(m){var A;c||n||(n=!0,cancelAnimationFrame(d),d=0,e.dataset.sceneReady="false",X(!0),(A=t.onError)==null||A.call(t,m instanceof Error?m:new Error(String(m))))}function Y(m=0,A=!1){if(!g||!p||c||n||v)return;Qt(T);let C=r||A;C&&(T.cycle.reduced=!0);let W=Dt[T.cycle.to]??1;V=C?W:O.damp(V,W,5,Math.max(0,Math.min(m,.05))),g.object.scale.setScalar(V),g.object.updateMatrixWorld(!0),N.delta=m,N.resume=R,N.active=s&&l&&document.visibilityState==="visible",N.reduced=C,N.width=b,N.height=z,N.scroll=F,g.frame(p,N),R=!1,p.render(B,L),g.writeTelemetry(_,E,H(),C),X()}function ge(m){if(d=0,!!H())try{let A=M?Math.min((m-M)/1e3,.05):0;M=m,Y(A),d=requestAnimationFrame(ge)}catch(A){se(A)}}function U(){if(!H()){cancelAnimationFrame(d),d=0,M=0,R=!0;return}d||(M=0,R=!0,d=requestAnimationFrame(ge))}function ye(){let m=e.getBoundingClientRect();b=Math.max(1,m.width),z=Math.max(1,m.height),L.aspect=b/z,L.updateProjectionMatrix(),p==null||p.setSize(b,z,!1),F=gt(m.top,m.height,window.innerHeight),h&&(o?p==null||p.render(B,L):Y(0,r))}function xe(m,A=0,C=0){!ot(m)||c||(S=m,ea(T,m,o||r),h&&(!o&&!r&&(g==null||g.shock(A,C,L,!1)),Y(0,o||r),U()),X(!0))}function ne(m){P&&Math.hypot(m.clientX-P.x,m.clientY-P.y)>8&&(P.moved=!0);let A=e.getBoundingClientRect();if(!A.width||!A.height)return;let C=Math.max(-1,Math.min(1,(m.clientX-A.left)/A.width*2-1)),W=Math.max(-1,Math.min(1,1-(m.clientY-A.top)/A.height*2));P!=null&&P.mouse&&(m.buttons&1)===1&&(E.dragging=P.moved,E.dragX=(E.dragX??0)+C-E.x,E.dragY=(E.dragY??0)+W-E.y,i.dataset.dragging=P.moved?"true":"false"),E.x=C,E.y=W,E.inside=m.pointerType!=="touch"}function ae(){E.inside=!1,E.dragging=!1,E.dragX=E.dragY=0,i.dataset.dragging="false"}function Ue(m){m.button===0&&(P={x:m.clientX,y:m.clientY,moved:!1,mouse:m.pointerType==="mouse"},P.mouse&&i.setPointerCapture(m.pointerId),ne(m))}function we(){E.dragging=!1,i.dataset.dragging="false"}function le(){P=null,ae()}function Ke(m){let A=m.detail!==0&&(P==null?void 0:P.moved);P=null,E.dragging=!1,!A&&xe(((S??re(T.cycle.to))+1)%ce.length,m.detail?E.x:0,m.detail?E.y:0)}function Ze(m){m.key==="Enter"||m.key===" "?(m.preventDefault(),xe(((S??re(T.cycle.to))+1)%ce.length)):(m.key==="ArrowRight"||m.key==="ArrowLeft")&&(m.preventDefault(),xe(((S??re(T.cycle.to))+(m.key==="ArrowRight"?1:2))%ce.length))}function Je(){let m=e.getBoundingClientRect();F=gt(m.top,m.height,window.innerHeight)}function Qe(){document.visibilityState!=="visible"&&le(),U()}function et(){r=a.matches,r&&(st(T,S??re(T.cycle.to)),T.cycle.reduced=!0,Y(0,!0)),U(),X(!0)}function tt(m){m.preventDefault(),v=!0,U()}function at(){v=!1,g==null||g.restoreContext(),ye(),U()}i.addEventListener("pointerenter",ne),i.addEventListener("pointermove",ne),i.addEventListener("pointerleave",ae),i.addEventListener("pointerdown",Ue),i.addEventListener("pointerup",we),i.addEventListener("lostpointercapture",we),i.addEventListener("pointercancel",le),i.addEventListener("click",Ke),i.addEventListener("keydown",Ze),i.addEventListener("blur",ae),e.addEventListener("webglcontextlost",tt),e.addEventListener("webglcontextrestored",at),window.addEventListener("scroll",Je,{passive:!0}),window.addEventListener("blur",le),document.addEventListener("visibilitychange",Qe),a.addEventListener("change",et);let it=new ResizeObserver(ye);it.observe(e);let rt=new IntersectionObserver(m=>{var A;l=((A=m[0])==null?void 0:A.isIntersecting)??!1,U()},{threshold:.1});return rt.observe(e),(async()=>{var m;try{p=new sa({canvas:e,antialias:!1,alpha:!0,powerPreference:"low-power"}),p.setPixelRatio(ve),p.setClearColor(0,0),p.toneMapping=na,p.outputColorSpace=la,ye();let A=navigator.deviceMemory,C=(navigator.hardwareConcurrency||8)<=4||A!==void 0&&A<=4||window.matchMedia("(pointer: coarse)").matches||Nt(p)?120**2:256**2;if(await Ai(),c)return;let W=await ii(ce,C);if(c)return;let ie=new di(W,T.cycle,T.entrance,si(p),Rt[u],r);if(g=ie,await ie.prepare(p,L),c)return;B.add(ie.object),h=!0,e.dataset.sceneReady="true",o&&st(T,S??re(T.cycle.to)),Y(0,r||o),(m=t.onReady)==null||m.call(t),X(!0),U()}catch(A){se(A)}})(),X(!0),{select:m=>xe(m),setPaused(m){o!==m&&(o=m,ae(),U(),X(!0))},setTheme(m){u=m,g==null||g.setPalette(Rt[u]),h&&p&&p.render(B,L)},setActive(m){s!==m&&(s=m,U())},resize:ye,getState:oe,dispose(){c||(c=!0,cancelAnimationFrame(d),rt.disconnect(),it.disconnect(),i.removeEventListener("pointerenter",ne),i.removeEventListener("pointermove",ne),i.removeEventListener("pointerleave",ae),i.removeEventListener("pointerdown",Ue),i.removeEventListener("pointerup",we),i.removeEventListener("lostpointercapture",we),i.removeEventListener("pointercancel",le),i.removeEventListener("click",Ke),i.removeEventListener("keydown",Ze),i.removeEventListener("blur",ae),e.removeEventListener("webglcontextlost",tt),e.removeEventListener("webglcontextrestored",at),window.removeEventListener("scroll",Je),window.removeEventListener("blur",le),document.removeEventListener("visibilitychange",Qe),a.removeEventListener("change",et),g==null||g.dispose(),p==null||p.dispose(),B.clear(),g=null,p=null)}}}export{Di as mountScene};
