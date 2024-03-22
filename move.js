AFRAME.registerComponent("move", {
    schema: {
        moveX: { type: "number", default: 0 },
        rotate: {type: "number", default: 0}
    },
    tick: function () {
        window.addEventListener("keydown", e => {
           this.data.moveX=this.el.getAttribute("position")
           this.data.rotate=this.el.getAttribute("rotation")
            var pos=this.data.moveX
            var rotate=this.data.rotate
            if(e.key==="ArrowRight"){
            pos.x = pos.x + 0.01
            this.el.setAttribute("position",pos)
            }
            if(e.key==="ArrowLeft"){
                pos.x = pos.x - 0.01
                this.el.setAttribute("position",pos)
                }
                if(e.key==="ArrowUp"){
                    pos.y = pos.y + 0.01
                    this.el.setAttribute("position",pos.y)
                    }
                    if(e.key==="ArrowDown"){
                        pos.y = pos.y - 0.01
                        this.el.setAttribute("position",pos.y)
                        }
                        if(e.key==="r"){
                            rotate.z = rotate.z + 20
                            this.el.setAttribute("rotation",rotate)
                            }
                            this.data.moveX=this.el.getAttribute("position")
        })
    }
})