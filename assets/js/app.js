function fullSize(){}function renderProtests(a,b,c,d){var e,f=0,g=b,h=c,i=1,j=d3.select("body").append("div").attr("class","tooltip").style("opacity",0),k=viz.append("g").attr("transform","translate("+g+","+h+") rotate("+d+")"),l=k.selectAll("circle").data(a).enter().append("circle");return l.attr("r",3).attr("cx",function(a,b){return 4>i?(i+=1,f):(i=2,f+=11)}).attr("cy",function(a,b){return 39>=e?e+=11:e=26}).on("mouseover",function(a){j.transition().duration(200).style("opacity",.9),j.html(a.Chant).style("left",d3.event.pageX+"px").style("top",d3.event.pageY-28+"px")}).on("mouseout",function(a){j.transition().duration(500).style("opacity",0)}).style("fill",function(a){return colors[a.GroupName]}).style("padding",0),k}var $window=$(window),width=$window.width(),height=$window.height(),padding=50,viz=d3.select("#viz-wrapper").append("svg").attr("id","viz").attr("width",width).attr("height",height).style("background-color","#FFF8F1");d3.csv("data/egypt_protest_data.csv",function(a){colors={"Muslim Brotherhood":"#4C5D84","Civil Protesters":"#BF4B6A",Student:"#549E9C","social and workers protestors":"#E96445","Pro Protesters":"#A98A78"};var b=d3.nest().key(function(a){return a.Month}).map(a);renderProtests(b[3],width/2+78,height/2-80,0),renderProtests(b[4],width/2+89,height/2-37,30),renderProtests(b[4],width/2+75,height/2+7,60),renderProtests(b[6],width/2+40,height/2+35,90),renderProtests(b[7],width/2-5,height/2+45,120),renderProtests(b[8],width/2-47,height/2+30,150),renderProtests(b[9],width/2-77,height/2-3,180),renderProtests(b[10],width/2-87,height/2-47,210),renderProtests(b[11],width/2-73,height/2-90,240),console.log(b)}),$("#toggle").click(function(){$(this).toggleClass("active"),$("#overlay").toggleClass("open")}),$("#overlay a").click(function(){$("#toggle").toggleClass("active"),$("#overlay").toggleClass("open")});