z=2*Math.PI
w=a.width
h=a.height
a.style.background='#2c3e50'
function P(x,y,u,v){return{x:x,y:y,u:u,v:v,l:0}}
R=Math.random
c.globalCompositeOperation='lighter'
p=[]
r=requestAnimationFrame
s=Date.now()
~function L(){
    r(L)
    t=Date.now()-s
    s+=t
    t/=6

    for(i=0;i<10;++i){
        u=R()*t-t/2
        v=-R()*t
        p.push(P(w/2,h/1.3,u/2,v))
    }

    t/=4
    c.clearRect(0,0,w,h)

    for(i=0;i<p.length;++i){
        q=p[i]
        q.x+=t*q.u
        q.y+=t*q.v

        k=2*q.l|0
        c.beginPath()
        c.arc(q.x,q.y,(60-q.l)/6+10,0,z)
        c.fillStyle='rgba('+(260-k)+','+(k+50)+','+k+','+(120-k)/300+')'
        c.fill()

        if((q.l+=t)>60)p.splice(i--,1)
    }
}()
