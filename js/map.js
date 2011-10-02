$(document).ready(function() {
    
    $("#map").svg({
        loadURL: "img/map.svg",
        onLoad: function(svg) {
            
            var originalWidth = svg._svg.viewBox.baseVal.width;
            var originalHeight = svg._svg.viewBox.baseVal.height;
            
            
            $(".army").draggable().bind('mousedown', function(event, ui) {
                // bring target to front
                $(event.target.parentElement).append(event.target);
                //$(this).find("use").attr("transform", "");
                
            }).bind('drag', function(event, ui) {
                // update coordinates manually, since top/left style props don't work on SVG

                var widthRatio = originalWidth / svg._svg.width.baseVal.value;
                var heightRatio = originalHeight / svg._svg.height.baseVal.value;

console.log(originalHeight + "," + svg._svg.height);

                //console.log(ui);
                //console.log(event);
                
                var use = $(this).find("use");
                use.attr("x", ui.position.left * widthRatio);
                use.attr("y", ui.position.top * heightRatio);
                
            }).bind('mouseup', function(event, ui) {
                
                var use = $(this).find("use");
                use.attr("x", "");
                use.attr("y", "");
                
                
                use.attr("transform", "&Paris;");
                
            });
        }
    });
});