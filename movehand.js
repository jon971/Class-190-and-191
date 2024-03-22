AFRAME.registerComponent("movehand", {
    schema: {
        position: {type: "number", default: 0}
    },
    tick:function(){
        window.addEventListener("keydown", e=>{
            this.data.position=this.el.getAttribute("rotation")
            var position=this.data.position
            if (e.key==="p"){
                position.x=position.x + 0.005
                this.el.setAttribute("rotation",position)
            }
        })
    }
})