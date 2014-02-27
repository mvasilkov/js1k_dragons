z=2*Math.PI
w=a.width
h=a.height
R=Math.random
c.globalCompositeOperation='lighter'
p=[]
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
    c.clearRect(0,0,w,h)
    c.drawImage(m,0,0)

    for(i=p.length;i--;){
        q=p[i]
        q.x+=t*q.u
        q.y+=t*q.v

        k=2*q.l|0
        c.beginPath()
        c.arc(q.x,q.y,(60-q.l)/6+10,0,z)
        c.fillStyle='rgba('+[260-k,k+50,k,(120-k)/300]+')'
        c.fill()

        if((q.l+=t)>60)p.splice(i,1)
    }
}()
