var mn=document.getElementById("mn")
var app=document.getElementById("app")
var bv=document.getElementById("bv")
var i=document.getElementById("i")
var m1=document.getElementById("m1")
var m2=document.getElementById("m2")
var m3=document.getElementById("m3")
var one=document.getElementById("one")
mn.addEventListener("mouseover",function(event){
    mn.style.height="230px";
    mn.style.width="230px";
    mn.style.padding="0px";

})
mn.addEventListener("mouseout",function(event){
    mn.style.height="200px";
    mn.style.width="200px";
    mn.style.padding="15px";

})
mn.addEventListener("click",function(event){
    i.style.display="none";
    m1.style.display="block";
   
})
app.addEventListener("mouseover",function(event){
    app.style.height="230px";
    app.style.width="230px";
    app.style.padding="0px";
})
app.addEventListener("mouseout",function(event){
    app.style.height="200px";
    app.style.width="200px";
    app.style.padding="15px";
})
app.addEventListener("click",function(event){
    i.style.display="none";
    m2.style.display="block";
   
})
bv.addEventListener("mouseover",function(event){
    bv.style.height="230px";
    bv.style.width="230px";
    bv.style.padding="0px";
})
bv.addEventListener("mouseout",function(event){
    bv.style.height="200px";
    bv.style.width="200px";
    bv.style.padding="15px";

})
bv.addEventListener("click",function(event){
    i.style.display="none";
    m3.style.display="block";
})
function home()
{
    i.style.display="block";
    m1.style.display="none";
    m2.style.display="none";
    m3.style.display="none";
    o1.style.display="none";
    order.style.display="block";
    el.style.textAlign="right";
}



var cb=document.getElementById("cb")
var cs=document.getElementById("cs")
var hd=document.getElementById("hd")
var sc=document.getElementById("sc")
cb.addEventListener("mouseover",function(event){
    cb.style.height="230px";
    cb.style.width="230px";
    cb.style.padding="0px";

})
cb.addEventListener("mouseout",function(event){
    cb.style.height="200px";
    cb.style.width="200px";
    cb.style.padding="15px";

})
cs.addEventListener("mouseover",function(event){
    cs.style.height="230px";
    cs.style.width="230px";
    cs.style.padding="0px";
})
cs.addEventListener("mouseout",function(event){
    cs.style.height="200px";
    cs.style.width="200px";
    cs.style.padding="15px";
})
hd.addEventListener("mouseover",function(event){
    hd.style.height="230px";
    hd.style.width="230px";
    hd.style.padding="0px";
})
hd.addEventListener("mouseout",function(event){
    hd.style.height="200px";
    hd.style.width="200px";
    hd.style.padding="15px";

})
sc.addEventListener("mouseover",function(event){
    sc.style.height="230px";
    sc.style.width="230px";
    sc.style.padding="0px";
})
sc.addEventListener("mouseout",function(event){
    sc.style.height="200px";
    sc.style.width="200px";
    sc.style.padding="15px";

})




var ct=document.getElementById("ct")
var ng=document.getElementById("ng")
var ff=document.getElementById("ff")
var sal=document.getElementById("sal")
ct.addEventListener("mouseover",function(event){
    ct.style.height="230px";
    ct.style.width="230px";
    ct.style.padding="0px";

})
ct.addEventListener("mouseout",function(event){
    ct.style.height="200px";
    ct.style.width="200px";
    ct.style.padding="15px";

})
ng.addEventListener("mouseover",function(event){
    ng.style.height="230px";
    ng.style.width="230px";
    ng.style.padding="0px";
})
ng.addEventListener("mouseout",function(event){
    ng.style.height="200px";
    ng.style.width="200px";
    ng.style.padding="15px";
})
ff.addEventListener("mouseover",function(event){
    ff.style.height="230px";
    ff.style.width="230px";
    ff.style.padding="0px";
})
ff.addEventListener("mouseout",function(event){
    ff.style.height="200px";
    ff.style.width="200px";
    ff.style.padding="15px";

})
sal.addEventListener("mouseover",function(event){
    sal.style.height="230px";
    sal.style.width="230px";
    sal.style.padding="0px";
})
sal.addEventListener("mouseout",function(event){
    sal.style.height="200px";
    sal.style.width="200px";
    sal.style.padding="15px";

})



var ic=document.getElementById("ic")
var it=document.getElementById("it")
var ms=document.getElementById("ms")
var or=document.getElementById("or")
ic.addEventListener("mouseover",function(event){
    ic.style.height="230px";
    ic.style.width="230px";
    ic.style.padding="0px";

})
ic.addEventListener("mouseout",function(event){
    ic.style.height="200px";
    ic.style.width="200px";
    ic.style.padding="15px";

})
it.addEventListener("mouseover",function(event){
    it.style.height="230px";
    it.style.width="230px";
    it.style.padding="0px";
})
it.addEventListener("mouseout",function(event){
    it.style.height="200px";
    it.style.width="200px";
    it.style.padding="15px";
})
ms.addEventListener("mouseover",function(event){
    ms.style.height="230px";
    ms.style.width="230px";
    ms.style.padding="0px";
})
ms.addEventListener("mouseout",function(event){
    ms.style.height="200px";
    ms.style.width="200px";
    ms.style.padding="15px";

})
or.addEventListener("mouseover",function(event){
    or.style.height="230px";
    or.style.width="230px";
    or.style.padding="0px";
})
or.addEventListener("mouseout",function(event){
    or.style.height="200px";
    or.style.width="200px";
    or.style.padding="15px";

})
var tab=document.getElementById("tab");
var close=document.getElementById("close")
var o1=document.getElementById("o1")
var order=document.getElementById("order")
var r=document.getElementById("r");
function order1(event)
{
o1.style.display="block";
i.style.display="none";
m1.style.display="none";
m2.style.display="none";
m3.style.display="none";
buyy.style.display="block";

}
function clo(event)
{
    o1.style.display="none";
    home.style.display="block";
    order.style.display="block";

}

var aw=0;
var ao=0;
var acb=0;
var acs=0;
var ahd=0;
var asc=0;
var act=0;
var ang=0;
var aff=0;
var asal=0;
var aic=0;
var ait=0;
var ams=0;
var t1=document.getElementById("t1");
var cbh=document.getElementById("cbh");
function addcb(event){
    t1.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${cbh.textContent}</td>
<td>90</td>
<td><input onchange="mulcb(event)"type="number" id="qcb"></td>
<td id="ccb"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulcb(event)
{
    var ans=90*qcb.value;
    acb=ans;
    ccb.textContent=ans;
}


var t2=document.getElementById("t2");
var csh=document.getElementById("csh");
function addcs(event){
    t2.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${csh.textContent}</td>
<td>80</td>
<td><input onchange="mulcs(event)"type="number" id="qcs"></td>
<td id="ccs"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulcs(event)
{
    var ans=80*qcs.value;
    acs=ans;
    ccs.textContent=ans;
}

var t3=document.getElementById("t3");
var hdh=document.getElementById("hdh");
function addhd(event){
    t3.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${hdh.textContent}</td>
<td>100</td>
<td><input onchange="mulhd(event)"type="number" id="qhd"></td>
<td id="chd"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulhd(event)
{
    var ans=100*qhd.value;
    ahd=ans;
    chd.textContent=ans;
}



var t4=document.getElementById("t4");
var sch=document.getElementById("sch");
function addsc(event){
    t4.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${sch.textContent}</td>
<td>120</td>
<td><input onchange="mulsc(event)"type="number" id="qsc"></td>
<td id="csc"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulsc(event)
{
    var ans=120*qsc.value;
    asc=ans;
    csc.textContent=ans;
}


var t5=document.getElementById("t5");
var cth=document.getElementById("cth");
function addct(event){
    t5.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${cth.textContent}</td>
<td>150</td>
<td><input onchange="mulct(event)"type="number" id="qct"></td>
<td id="cct"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulct(event)
{
    var ans=150*qct.value;
    act=ans;
    cct.textContent=ans;
}



var t6=document.getElementById("t6");
var ngh=document.getElementById("ngh");
function addng(event){
    t6.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${ngh.textContent}</td>
<td>70</td>
<td><input onchange="mulng(event)"type="number" id="qng"></td>
<td id="cng"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulng(event)
{
    var ans=70*qng.value;
    ang=ans;
    cng.textContent=ans;
}


var t7=document.getElementById("t7");
var ffh=document.getElementById("ffh");
function addff(event){
t7.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${ffh.textContent}</td>
<td>60</td>
<td><input onchange="mulff(event)"type="number" id="qff"></td>
<td id="cff"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulff(event)
{
    var ans=60*qff.value;
    aff=ans;
    cff.textContent=ans;
}


var t8=document.getElementById("t8");
var salh=document.getElementById("salh");
function addsal(event){
t8.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${salh.textContent}</td>
<td>130</td>
<td><input onchange="mulsal(event)"type="number" id="qsal"></td>
<td id="csal"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulsal(event)
{
    var ans=130*qsal.value;
    asal=ans;
    csal.textContent=ans;
}


var ich=document.getElementById("ich");
var t9=document.getElementById("t9");
function addic(event){
t9.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${ich.textContent}</td>
<td>80</td>
<td><input onchange="mulic(event)"type="number" id="qic"></td>
<td id="cic"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulic(event)
{
    var ans=80*qic.value;
    aic=ans;
    cic.textContent=ans;
}


var t10=document.getElementById("t10");
var ith=document.getElementById("ith");
function addit(event){
t10.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${ith.textContent}</td>
<td>80</td>
<td><input onchange="mulit(event)"type="number" id="qit"></td>
<td id="cit"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulit(event)
{
    var ans=80*qit.value;
    ait=ans;
    cit.textContent=ans;
}


var t11=document.getElementById("t11");
var msh=document.getElementById("msh");
function addms(event){
t11.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${msh.textContent}</td>
<td>100</td>
<td><input onchange="mulms(event)"type="number" id="qms"></td>
<td id="cms"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulms(event)
{
    var ans=100*qms.value;
    ams=ans;
    cms.textContent=ans;
}


var t12=document.getElementById("t12");
var oh=document.getElementById("oh");
function addo(event){
t12.style.backgroundColor="lightgreen";
var tr=document.createElement("tr")
tr.innerHTML=`<td>${oh.textContent}</td>
<td>60</td>
<td><input onchange="mulo(event)"type="number" id="qo"></td>
<td id="co"></td>
<td><button id="r" onclick="rem(event)">Remove</button></td>`;
tab.append(tr);
}
function mulo(event)
{
    var ans=60*qo.value;
    ao=ans;
    co.textContent=ans;
}




function rem(event)
{
    event.target.parentElement.parentElement.remove();
}
var quan=document.getElementById("quan")
var cost=document.getElementById("cost")
function mulw(event)
{
    var ans=20*quan.value;
    aw=ans;
    cost.textContent=ans;
}
var prin=document.getElementById("prin")
var home1=document.getElementById("home1");
var r1=document.getElementById("r1")
var el=document.getElementById("el")
var mos=document.getElementById("mos")
var pos=document.getElementById("pos")
var dbill=document.getElementById("dbill")
var h=document.getElementById("h")
function buy(event)
{  
    r1.parentElement.remove();
    r.parentElement.remove();
    var am=0;
    var dom=Math.floor(Math.random()*10000)+1;
    mos.innerHTML=`Bill No.${dom}`;
    pos.innerHTML=`Visit again!`;
    am=aw+ao+ams+ait+aic+asal+aff+ang+act+acb+acs+asc+ahd;
    h.innerHTML=`Total amount: Rs.${am}`;
    home1.style.display="none";
    order.style.display="none";
    buyy.style.display="none";
    i.style.display="none";
    prin.style.display="block";
    el.style.textAlign="center";
}
prin.addEventListener("click",function(event){
    close.style.display="none";
    prin.style.display="none";
    home1.style.display="block";
})
