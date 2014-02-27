w=a.width
h=a.height
c.globalCompositeOperation='lighter'
p=[]
with(Math)z=2*PI,R=random,C=cos,S=sin
s=(N=Date.now)()

m=a.cloneNode(0)
n=m.getContext('2d')
n.fillStyle='#2a2430'
n.fillRect(0,0,w,h)
n.fillStyle='#333044'
n.fillRect(0,0,w,h/2+100)
n.translate(w/2,h/2)
n.beginPath()
n.arc(200,-260,30,0,z)
n.fillStyle='#fff9af'
n.fill()

n.strokeStyle='#50ffff'

n=c
~function L(){
    requestAnimationFrame(L)
    t=N()-s
    s+=t
    t/=6

    for(i=t|0;i--;){
        u=R()*t-t/2
        v=-R()*t
        p.push({x:w/2,y:h/2,u:u/2,v:v,l:0})
    }

    t/=4
    n.clearRect(0,0,w,h)
    n.drawImage(m,0,0)

    for(i=p.length;i--;){
        q=p[i]
        q.x+=t*q.u
        q.y+=t*q.v

        k=2*q.l|0
        n.beginPath()
        n.arc(q.x,q.y,(60-q.l)/6+10,0,z)
        n.fillStyle='rgba('+[260-k,k+50,k,(120-k)/300]+')'
        n.fill()

        if((q.l+=t)>60)p.splice(i,1)
    }
}()
