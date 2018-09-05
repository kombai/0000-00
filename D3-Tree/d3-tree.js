"use strict";
(function() {

    var 
        isVertical = true,
    
        drawTree = function(jsonData) {
            var activeTab = d3.select(".tab-content");
            var svgSize = activeTab.node().getBoundingClientRect();
            var padding = 48;

            var minX = 9999;
            var minY = 9999;
            var maxX = -9999;
            var maxY = -9999;
            var contentWidth = 0;
            var contentHeight = 0;
            var svgWidth = svgSize.width;
            var svgHeight = svgSize.height;

            function zoom() {
                svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            }

            var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

            var baseSvg = activeTab
                            .html("")
                            .append("svg")
                            .attr("width", "100%")
                            .attr("height", "100%")
                            .call(zoomListener);

            var svgGroup = baseSvg
                            .append("g")
                            .attr("class", "pan-cover")
                            .attr("transform", "translate(" + padding + "," + padding + ")");

            var dragGroup = svgGroup
                            .append("g")
                            .attr("class", "group drag-group");

            var pathGroup = svgGroup
                            .append("g")
                            .attr("class", "group path-group");

            var nodeGroup = svgGroup
                            .append("g")
                            .attr("class", "group node-group");

            function centerNode(source) {
                var scale = zoomListener.scale();
                var x = 0;
                var y = 0;
                
                scale = svgHeight / contentHeight;
                scale = Math.max(scale, 0.3);
                scale = Math.min(scale, 1);
               
                x = svgWidth / 2;
                y = 0;
                
                svgGroup.transition().attr({
                    "transform": "translate(" + x + "," + y + ")scale(" + scale + ")"
                });

                zoomListener.scale(scale);
                zoomListener.translate([x, y]);
            }

            var sourceNodes = {}; // node dictionary;
            var rootCluster = {
                children: [],
                name: "Root",
                size: 0,
                id: Date.now() // random id for dragdrop
            };

            sourceNodes[rootCluster.id] = rootCluster;
           
            jsonData.forEach(function(node) {
                var newNode = Object.assign({}, node);
                // add first group to root;
                if (!newNode.parents || !newNode.parents.length) {
                    rootCluster.children.push(newNode.id);
                }
                // create dictionary for quick access;
                delete newNode.parents;
                // assign node id;
                if (!newNode.id) {
                    newNode.id = Date.now();
                }
                sourceNodes[newNode.id] = newNode;
            });

            function estimateSize(source) {
                var children = [];
                var size = 0;

                if (source.children) {
                    source.children.forEach(function(item) {
                        var child = sourceNodes[item.toString()] || item;

                        if (child) {
                            // allow multi parents;
                            // children.push(child);
                            if (!child.parentId) {
                                children.push(child); // don't allow multi parents;
                                child.parentId = source.id; // main parent node, use for set position;
                                size += estimateSize(child);
                            }
                        }
                    });
                    source.children = children;
                }

                source.size = size ? size : 20;
                return source.size;
            }

            function createConnect(source, nodes, links) {
                if (!source) return false;
                var children = source.children;
                var offset = 0;
                var size = source.size;
                var startX = source.posX + 200;
                var startY = source.posY - size / 2;
                if (children && children.length) {

                    children.forEach(function(child) {

                        if (child.posX == null) {
                            child.posX = startX;
                        }

                        if (child.posY == null) {
                            child.posY = startY + offset + child.size / 2;
                        }

                        offset += child.size;

                        var sX = source.posX;
                        var sY = source.posY;
                        var tX = child.posX;
                        var tY = child.posY;

                        createConnect(child, nodes, links);
                        // hide the root links;
                        if (source.id !== rootCluster.id) {
                            links.push({
                                source: {
                                    x: sX,
                                    y: sY
                                },
                                target: {
                                    x: tX,
                                    y: tY
                                }
                            });
                        }
                    });
                }
                // hide the root node;
                if (source.id !== rootCluster.id) {
                    nodes.push(source);
                }
            }

            function renderNode() {
                // clear graph;
                pathGroup.selectAll("path.connect").data([]).exit().remove();
                nodeGroup.selectAll("g.node").data([]).exit().remove();

                estimateSize(rootCluster);

                // reset old data;
                for (var i in sourceNodes) {
                    sourceNodes[i].posX = null;
                    sourceNodes[i].posY = null;
                    sourceNodes[i].parentId = null;
                }
                rootCluster.posX = 0;
                rootCluster.posY = 0;
              
                var nodes = [];
                var links = [];
                
                createConnect(rootCluster, nodes, links);
                
                
                var pathView = pathGroup.selectAll("path.connect").data(links);
                var pathEnter = pathView.enter()
                    .append("path")
                    .attr("class", "connect")
                    .attr({
                        'd': function(d) {
                            var path = "";
                            if (!isVertical) {
                                path = [
                                    "M", d.source.x, d.source.y,
                                    "L", d.target.x, d.target.y
                                ].join(" ");
                            } else {
                                path = [
                                    "M", -d.source.y, d.source.x,
                                    "L", -d.target.y, d.target.x
                                ].join(" ");
                            }
                            return path;
                        },
                        'fill': 'none',
                        'stroke': function(d) {
                            return "#ccc";
                        },
                        'stroke-width': '2px'
                    });


                var nodeView = nodeGroup.selectAll("g.node").data(nodes);
                var nodeEnter = nodeView.enter()
                    .append("g")
                    .attr({
                        "class": "node",
                        "size": function(d) {return d.size}
                    })
                    .attr("transform", function(d) {
                        maxX = Math.max(maxX, d.posX);
                        maxY = Math.max(maxY, d.posY);

                        minX = Math.min(minX, d.posX);
                        minY = Math.min(minY, d.posY);

                        var gPos = "";
                        if (!isVertical) {
                            gPos = "translate(" + d.posX + "," + d.posY + ")";
                        } else {
                            gPos = "translate(" + -d.posY + "," + d.posX + ")";
                        }
                        return gPos;
                    });

                    nodeEnter
                    .append("circle")
                    .attr({
                        "id": function(d) {return d.id},
                        "r": 6,
                        "stroke": "lightsteelblue",
                        "stroke-width": "1px",
                        "posX": function(d) {return d.posX},
                        "posY": function(d) {return d.posY},
                        "fill": function(d) {
                            var dcolor = "#c6dbef";
                            if (d._children) {
                                dcolor = "#fd8d3c";
                            } else if (d.children && d.children.length) {
                                dcolor = "#3182bd";
                            }
                            return dcolor;
                        }
                    })
                    .on("click", function(d) {
                        //toggle node child;
                        if (!d3.event.defaultPrevented) {
                            if (d.children) {
                                d._children = d.children;
                                d.children = null;
                            } else {
                                d.children = d._children;
                                d._children = null;
                            }
                            renderNode();
                        }
                    });


                    nodeEnter
                    .append('text')
                    .text(function(d) {
                        var nodeName = d.name;
                        return nodeName.substr(0, 12);
                    })
                    .attr({
                        "text-anchor": "start",
                        "transform": function(d) {
                            var trans = "";
                            if (!isVertical) {
                                trans = "translate(15, 5)";
                            } else {
                                trans = "translate(-5, 15) rotate(90)"
                            }
                            return trans;
                        }
                    })
                    .style({
                        "font-size": "14px"
                    });

                // update svg size;
                contentWidth = !isVertical ? (maxX - minX) : (maxY - minY);
                contentHeight = !isVertical ? (maxY - minY) : (maxX - minX);

                baseSvg.attr("width", Math.max(svgWidth, contentWidth));
                baseSvg.attr("height", Math.max(svgHeight, contentHeight));
            }

            renderNode();
            centerNode(rootCluster);
        },
       
        init = function() {
            $("#rotate-button").click(function() {
                isVertical = !!!isVertical;
                drawTree(jsonData);
            });

            var jsonData;

            $.ajax({
                url: 'data.json?id=' + Date.now(),
                success: function (res) {
                    jsonData = res;
                    isVertical = true;
                    drawTree(jsonData);
                },
                error: function () { }
            })
        };

    $(document).ready(function() {
        init();
    })
})();
