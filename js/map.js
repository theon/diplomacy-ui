$(document).ready(function() {
   
   //function mapLoad() {
    
    console.log("woooo");
    
    $("#mapCopy").svg({
        loadURL: "img/map.svg",
        settings: {addTo: false, 
        changeSize: false},
        onLoad: function(svgWrapper) {
            
            svg = svgWrapper.root();
            
            resizeMapWidth(svg);
            
            $(window).resize(function() {
                resizeMapWidth(svg);
            });
            
            //svg.removeAttribute('width');
            //svg.removeAttribute('height');
            
            //$(".army use").draggable().bind('mousedown', function(event, ui) {
                // bring target to front
                //$(event.target.parentElement).append(event.target);
                //$(this).find("use").attr("transform", "");
                
            //}).bind('drag', function(event, ui) {
                // update coordinates manually, since top/left style props don't work on SVG

                //console.log(ui);
                //console.log(event);
                
               // var use = $(this).find("use");
              //  console.log(use);
                
                
                //use.attr("x", ui.position.left * svg.widthZoomRatio());
                //use.attr("y", ui.position.top * svg.heightZoomRatio());
             //   use.attr("x", ui.position.left * getWidthZoomRatio());
             //   use.attr("y", ui.position.top * getHeightZoomRatio());
                
            //}).bind('mouseup', function(event, ui) {
                
             //   var use = $(this).find("use");
             //   use.attr("x", DuiConf.Paris.unitPos.x);
             //   use.attr("y", DuiConf.Paris.unitPos.y);
                
            //});
       }
    });
});

function resizeMapWidth(svg) {
    var map = $("#map");
    map.width(map.height() * svg.apectRatio());
    console.log(svg.apectRatio());
    //map.width(map.height() * getViewBoxAspectRatio());
}