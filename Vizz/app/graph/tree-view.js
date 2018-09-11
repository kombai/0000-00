
var
    textSearch = "",
    rootCluster = {},
    isVertical = true,
    graphScale = 1,
    graphTrans = {},
    showFullTree = 1, // show full tree with search;
    usePosCache = false,
    showNodeLabel = true,
    selectedNode = null, // for radius option;
    highlightNode = null;

var sourceNodes = {};

function translateNode(node, transX, transY) {
    node.posX += transX;
    node.posY += transY;
    if (usePosCache) {
        if (node.x != null) {
            node.x += transX;
        }
        if (node.y != null) {
            node.y += transY;
        }
    } else {
        node.x = node.posX;
        node.y = node.posY;
    }
    node.dragging = true;
    if (node.children && node.children.length) {
        node.children.forEach(function(item) {
            translateNode(item, transX, transY);
        });
    }
}

// every node holds all child name of it;
function getChildName(source) {
    var childName = [source.name];
    source.children.forEach(function(item) {
        var child = sourceNodes[item.toString()] || item;
        if (child && !child.hasChildName) {
            // don't allow multi parents;
            child.hasChildName = true;
            childName = childName.concat(getChildName(child));
        }
    });
    source.childName = childName;
    return childName;
}

function estimateSize(source) {
    var children = [];
    var size = 0;
    // hightlight the grandchild with text search;
    var sourceName = source.name.toLowerCase();
    if (textSearch && sourceName.indexOf(textSearch) > -1) {
        source.isFocus = true;
        source.foundText = true;
    }

    if (source.children) {
        source.children.forEach(function(item) {
            var child = sourceNodes[item.toString()] || item;
            if (child) {
                // hightlight the grandchild with text search;
                if (source.foundText == true) {
                    child.foundText = true;
                }

                var childName = child.childName.join("::").toLowerCase();
                var allowChild = childName.indexOf(textSearch) > -1;
                allowChild = allowChild || showFullTree || !textSearch;
                allowChild = allowChild || child.foundText;

                if (allowChild && !child.parentId) {
                    // allow multi parents;
                    // children.push(child);
                    children.push(child); // don't allow multi parents;
                    child.parentId = source.id; // main parent node, use for set position;
                    size += estimateSize(child);
                }
            }
        });
        source.children = children;
    }

    // keep the size to expand node when hover on it;
    if (!source.size) {
        source.size = size ? size : 20;
    }

    return source.size;
}



function createConnect(source, nodes, links) {
    if (!source) return false;
    var children = source.children;
    var radial = Math.PI / 2;
    var radius = 200;
    var size = source.size;
    var startX = source.posX + 200;
    var startY = source.posY - size / 2;

    if (source.isRadial && source.option) {
        radius = source.option.radius;
        radial = (source.option.radial / 180) * Math.PI;
    }

    if (children && children.length) {
        var length = children.length;
        var offset = 0;
        var unit = 0;
        var rad = 0;
        if (length > 3) {
            unit = radial / (length - 1);
        }
        var offsetRal = (Math.PI - radial) / 2;

        children.forEach(function(child, index) {
            // get posX, posY from cache;
            if (usePosCache || child.dragging) {
                if (child.x != null) {
                    child.posX = child.x;
                }

                if (child.y != null) {
                    child.posY = child.y;
                }
            }

            if (child.posX == null) {
                if (source.isRadial && unit) {
                    rad = offsetRal + index * unit;
                    child.posX = source.posX + radius * Math.sin(rad);
                } else {
                    child.posX = startX;
                }
            }

            if (child.posY == null) {
                if (source.isRadial && unit) {
                    rad = offsetRal + index * unit;
                    child.posY = source.posY + radius * Math.cos(rad);
                } else {
                    child.posY = startY + offset + child.size / 2;
                }
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
                    },
                    childName: child.childName,
                    foundText: child.foundText,
                    hightlight: child.hightlight
                });
            }
        });
    }

    // hide the root node;
    if (source.id !== rootCluster.id) {
        nodes.push(source);
    }
}


function showNodeOption(callback) {
    var nodeOption = $("#node-option");
    var radius = $("#node-radius");
    var radial = $("#node-radial");
    var event = d3.event;
    var node = selectedNode;
    var option = node.option || {};
    if (option.radius != null) {
        radius.val(option.radius);
    } else {
        radius.val(200);
    }

    if (option.radial != null) {
        radial.val(option.radial);
    } else {
        radial.val(90);
    }

    nodeOption.show().css({
        top: event.clientY,
        left: event.clientX
    });

    event.stopPropagation();

    nodeOption.find(".apply-node-option").one("click", function(evt) {
        evt.stopPropagation();
        node.option = {
            radius: Number(radius.val()),
            radial: Number(radial.val())
        };
        node.isRadial = true;
        callback && callback();
        $("#node-option").hide();
    });

    nodeOption.find(".cancel-node-option").one("click", function(evt) {
        evt.stopPropagation();
        $("#node-option").hide();
    });
}


function hightlighting(source, hightlight) {
    var isMouseOver = false;
    if (source.id == highlightNode.id) {
        isMouseOver = true;
        hightlight = true;
        source.isFocus = true;
    }

    if (source.children) {
        source.children.forEach(function(item) {
            if (hightlighting(item, hightlight)) {
                isMouseOver = true;
            }
        });
    }

    if (isMouseOver || hightlight) {
        source.hightlight = true;
    }

    return isMouseOver;
}

class TreeView {

    constructor() {

    }

    plot(activeTab, jsonData, graphSetting) {
        // mapping option;
        textSearch = graphSetting.textSearch.toLowerCase();
        isVertical = graphSetting.isVertical || false;
        showFullTree = graphSetting.showFullTree || false;
        showNodeLabel = graphSetting.showNodeLabel || false;
        usePosCache = graphSetting.usePosCache || false;


        var svgSize = activeTab.node().getBoundingClientRect();
        var clickNum = 0;
        var padding = 48;
        var timer = 0;
        var minX = 9999;
        var minY = 9999;
        var maxX = -9999;
        var maxY = -9999;
        var contentWidth = 0;
        var contentHeight = 0;
        var svgWidth = svgSize.width;
        var svgHeight = svgSize.height;


        var isZoom = true;
        function zoom() {
            if (isZoom) {
                graphTrans = d3.event.translate;
                graphScale = d3.event.scale;
            }
            svgGroup.attr("transform", "translate(" + graphTrans + ")scale(" + graphScale + ")");
        }

        var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

        var baseSvg = activeTab
                        .html("")
                        .append("svg")
                        .attr("width", "100%")
                        .attr("height", "100%")
                        .call(zoomListener)
                        .on("mouseover", function(d) {
                            if (highlightNode) {
                                highlightNode = null;
                                renderNode();
                            }
                        });

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

        // Define the drag listeners for drag/drop behaviour of nodes.
        var startDragPos = {X: 0, Y: 0}, dragStarted, draggingNode, dragScale = 1;

        var dragListener = d3.behavior.drag()
        .on("dragstart", function(d) {
            var event = d3.event.sourceEvent;
            event.stopPropagation();
            if (d.id == rootCluster.id) {
                return;
            }

            dragScale = zoomListener.scale();
            dragStarted = true;
            startDragPos.X = event.pageX;
            startDragPos.Y = event.pageY;

            draggingNode = this.parentNode;

            draggingNode.originalPosX = d.posX;
            draggingNode.originalPosY = d.posY;

            cloneDraggingNode(d); // virtual dragged node;
            dragGroup.attr("transform", "translate(" + 0 + "," + 0 + ")");
        })
        .on("drag", function(d) {
            var event = d3.event.sourceEvent;
            if (d.id == rootCluster.id) {
                return;
            }
            dragStarted = null;

            var dx = (event.pageX - startDragPos.X) / dragScale;
            var dy = (event.pageY - startDragPos.Y) / dragScale;
            d3.select(draggingNode).style("pointer-events", 'none');
            dragGroup.attr("transform", "translate(" + dx + "," + dy + ")");
        })
        .on("dragend", function(d) {
            var event = d3.event.sourceEvent;
            if (d.id == rootCluster.id) {
                return;
            }

            if (dragStarted == null) {
                // snap with cloest node;
                var dx = (event.pageX - startDragPos.X) / dragScale;
                var dy = (event.pageY - startDragPos.Y) / dragScale;
                if (!isVertical) {
                    translateNode(d, dx, dy);
                } else {
                    translateNode(d, dy, -dx);
                }
                // rerender graph;
                renderNode();
            }

            d3.select(draggingNode).style("pointer-events", "auto");

            // remove fake dragging nodes;
            dragGroup.selectAll("g.node").data([]).exit().remove();
            dragGroup.selectAll("path.connect").data([]).exit().remove();
        });


        function centerNode(source) {
            var scale = zoomListener.scale();
            var x = 0;
            var y = 0;
            if (!isVertical) {
                scale = svgWidth / contentWidth;
                scale = Math.max(scale, 0.3);
                scale = Math.min(scale, 1);
                y = svgHeight / 2;
                x = Math.max(48, (svgWidth - scale * contentWidth) / 2);
            } else {
                scale = svgHeight / contentHeight;
                scale = Math.max(scale, 0.3);
                scale = Math.min(scale, 1);
                x = svgWidth / 2;
                y = Math.max(48, (svgHeight - scale * contentHeight) / 2);
            }

            svgGroup.attr({
                "transform": "translate(" + x + "," + y + ")scale(" + scale + ")"
            });

            zoomListener.scale(scale);
            zoomListener.translate([x, y]);
        }


        rootCluster = {
            children: [],
            name: "Root",
            size: 0,
            id: Date.now() // random id for dragdrop
        };
        sourceNodes = {}; // reset node dictionary;
        sourceNodes[rootCluster.id] = rootCluster;

        // revert tree data from cached;
        if (jsonData.name === "Root") {
            rootCluster = jsonData;
            function restoreChild(node) {
                node.children.forEach(function(item) {
                    sourceNodes[item.id] = item;
                    item.x = item.posX;
                    item.y = item.posY;
                    restoreChild(item);
                });
            }
            restoreChild(rootCluster);
            rootCluster.x = rootCluster.posX;
            rootCluster.y = rootCluster.posY;
        } else {
            jsonData.forEach(function(node) {
                if (!node.name) {
                    node.name = node.friendlyName;
                }

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

            getChildName(rootCluster);
        }


        // for dragging node;
        function cloneDraggingNode(node) {
            dragGroup.selectAll("path.connect").data([]).exit().remove();
            dragGroup.selectAll("g.node").data([]).exit().remove();

            var cloneNodes = [node];
            var clonePaths = [];

            function recursive(source) {
                if (!source || !source.children) return;
                source.children.forEach(function(child) {
                    cloneNodes.push(child);
                    clonePaths.push({
                        source: {
                            x: source.posX,
                            y: source.posY
                        },
                        target: {
                            x: child.posX,
                            y: child.posY
                        }
                    })
                    recursive(child);
                });
            }

            recursive(node);

            var pathGroup = dragGroup.selectAll("path.connect").data(clonePaths).enter();
            pathGroup
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
                'stroke': "#ccc",
                'stroke-width': "3px"
            });

            var nodeGroup = dragGroup.selectAll("g.node").data(cloneNodes);
            var nodeEnter = nodeGroup.enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
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
                "r": 6,
                "stroke": "lightsteelblue",
                "stroke-width": "1px",
                "fill": function(d) {
                    var dcolor = "#c6dbef";
                    if (d._children) {
                        dcolor = "#fd8d3c";
                    } else if (d.children && d.children.length) {
                        dcolor = "#3182bd";
                    }
                    return dcolor;
                }
            });


            nodeEnter
            .append('text')
            .text(function(d) {
                var nodeName = d.name;
                if (showNodeLabel) {
                    return nodeName.substr(0, 12);
                } else {
                    return "";
                }
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
        }

        function renderNode() {
            // clear graph;
            pathGroup.selectAll("path.connect").data([]).exit().remove();
            nodeGroup.selectAll("g.node").data([]).exit().remove();
            // enable zoom effect;
            isZoom = true;

            // reset old data;
            for (var i in sourceNodes) {
                if (!usePosCache) {
                    sourceNodes[i].posX = null;
                    sourceNodes[i].posY = null;
                }
                sourceNodes[i].isFocus = null;
                sourceNodes[i].parentId = null;
                sourceNodes[i].foundText = null;
                sourceNodes[i].hightlight = null;
            }

            estimateSize(rootCluster);

            if (usePosCache) {
                if (!isVertical) {
                    rootCluster.posX = rootCluster.size / 2;
                    rootCluster.posY = 0;
                } else {
                    rootCluster.posY = rootCluster.size / 2;
                    rootCluster.posX = 0;
                }
            } else {
                rootCluster.posX = 0;
                rootCluster.posY = 0;
            }

            // mouse over a node;
            if (highlightNode) {
                hightlighting(rootCluster);
            }

            var nodes = [];
            var links = [];
            createConnect(rootCluster, nodes, links);
            // console.log("rootCluster", rootCluster, nodes, links);
            // store current cluster;
            rootCluster.isVertical = isVertical;
            graphSetting.currentCluster = JSON.stringify(rootCluster);

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
                        var childName = d.childName.join("::").toLowerCase();
                        if (textSearch && childName.indexOf(textSearch) > -1 || d.foundText) {
                            return "#fd8d3c";
                        } else {
                            // hightlight state;
                            if (d.hightlight) {
                                return "#5B5BF5"
                            } else {
                                return  "#CCCCCC";
                            }
                        }
                    },
                    'stroke-width': "2px"
                })
                .style({
                    "opacity": function(d) {
                        var childName = d.childName.join("::").toLowerCase();
                        if (textSearch && childName.indexOf(textSearch) > -1  || d.hightlight) {
                            return 1;
                        } else if (!textSearch && !highlightNode || d.foundText) {
                            return 1;
                        } else {
                            return 0.2;
                        }
                    }
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
                    "r": function(d) {
                        // hightlight state;
                        if (d.isFocus) {
                            return 10;
                        } else {
                            return 6;
                        }
                    },
                    "stroke": function(d) {
                        // hightlight state;
                        if (highlightNode && d.hightlight) {
                            return "#5B5BF5";
                        } else if (d.isFocus) {
                            return "#fd8d3c";
                        } else {
                            return "lightsteelblue";
                        }
                    },
                    "stroke-width": function(d) {
                        if (highlightNode && d.hightlight) {
                            return "3px";
                        } else if (d.isFocus) {
                            return "2px";
                        } else {
                            return "1px";
                        }
                    },
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
                .style({
                    "opacity": function(d) {
                        var childName = d.childName.join("::").toLowerCase();
                        if (textSearch && childName.indexOf(textSearch) > -1  || d.hightlight) {
                            return 1;
                        } else if (!textSearch && !highlightNode || d.foundText) {
                            return 1;
                        } else {
                            return 0.2;
                        }
                    }
                })
                .call(dragListener)
                .on("click", function(d) {
                    d3.event.stopPropagation();
                    clearTimeout(timer);
                    clickNum += 1;
                    isZoom = false; // disable zoom effect when double click;
                    if (clickNum == 2) {
                        d.isRadial = !d.isRadial;
                        clickNum = 0;
                        selectedNode = d;
                        showNodeOption(renderNode);
                    } else {
                        timer = setTimeout(function() {
                            clickNum = 0;
                            //toggle node child;
                            if (d.children) {
                                d._children = d.children;
                                d.children = null;
                            } else {
                                d.children = d._children;
                                d._children = null;
                            }
                            renderNode();
                        }, 333);
                    }
                }).on("mouseover", function(d) {
                    //toggle node child;
                    if (!d3.event.defaultPrevented) {
                        if (!highlightNode) {
                            highlightNode = d;
                            renderNode();
                        }
                    }
                    d3.event.stopPropagation();
                });


                nodeEnter
                .append('text')
                .text(function(d) {
                    var nodeName = d.name;
                    if (showNodeLabel || d.hightlight) {
                        return nodeName.substr(0, 12);
                    } else {
                        return "";
                    }
                })
                .attr({
                    "text-anchor": "start",
                    "transform": function(d) {
                        var trans = "";
                        if (!isVertical) {
                            trans = "translate(15, 5)";
                        } else {
                            trans = "translate(-5, 15) rotate(90)";
                        }
                        return trans;
                    }
                })
                .style({
                    "font-size": function(d) {
                        if (d.isFocus) {
                            return "20px";
                        } else {
                            return "14px";
                        }
                    },
                    "opacity": function(d) {
                        var childName = d.childName.join("::").toLowerCase();
                        if (textSearch && childName.indexOf(textSearch) > -1  || d.hightlight) {
                            return 1;
                        } else if (!textSearch && !highlightNode || d.foundText) {
                            return 1;
                        } else {
                            return 0.2;
                        }
                    }
                });

            // update svg size;
            contentWidth = !isVertical ? (maxX - minX) : (maxY - minY);
            contentHeight = !isVertical ? (maxY - minY) : (maxX - minX);

            baseSvg.attr("width", Math.max(svgWidth, contentWidth));
            baseSvg.attr("height", Math.max(svgHeight, contentHeight));

            $("#scroll-box .scroll-content")
            .width(Math.max(svgWidth, contentWidth))
            .height(Math.max(svgHeight, contentHeight));
        }

        renderNode();
        centerNode(rootCluster);
    }
}

export default TreeView;
