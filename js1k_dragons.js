z=2*Math.PI
w=a.width
h=a.height
a.style.background='#2c3e50'
R=Math.random
c.globalCompositeOperation='lighter'
p=[]
s=(N=Date.now)()
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
