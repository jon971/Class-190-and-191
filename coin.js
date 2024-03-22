AFRAME.registerComponent("coin",{
    init: function (){
        for(var i = 1; i<=20; i++) {
            var id=`coin${i}`;
var posX = Math.random() * 3000 + (-1000);
var posY = Math.random() * 2 + (-1);
var posZ = Math.random() * 3000 + -1000;

var position = {x: posX, y:posY, z: posZ };
this.createCoins(id, position);
        }
    },
    createCoins: function(id,position) {
     var terrainEl = document.querySelector("#env");
       var coinEl = document.createElement("a-entity");

       coinEl.setAttribute("id",id);
       coinEl.setAttribute("position", position)
       coinEl.setAttribute("geometry", { primitive: "circle", radius: 2 });

       coinEl.setAttribute("static-body", {
    shape: "sphere",
    sphereRadius: 2
       });
       terrainEl.appendChild(coinEl)
    }
})