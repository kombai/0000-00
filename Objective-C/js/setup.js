    
    function copy() {
        var arg = arguments, source = null;
        return {
            to: function(target) {
                target = target != null ? target : {};
                for (var i = 0; i < arg.length; ++i) {
                    source = arg[i];
                    for (var o in source) {
                        // do not copy the static method;
                        if (source.hasOwnProperty(o)) {
                            if (source[o] &&  source[o].constructor == Object) {
                                (target[o] && "object" === typeof target[o]) || (target[o] = {});
                                copy(source[o]).to(target[o]);
                            } else {
                                // override;
                                target[o] = source[o];
                            }
                        }
                    }
                }
                return target;
            }
        }
    }

    $(function() {

        // update ClassRef with inherits;    
        var listTemp = '<div id="" class="tiny-doc"><h3 class="ask"><a href="#{ClassName}">{ClassName}</a></h3></div>';
        var fullList = $("#full-list");
        var inherits, parent, api, keyword = [];

        for (var i in ClassRef) {
            if (inherits = ClassRef[i]['[:]']) {
                inherits = inherits.split(" : ");
                api = {};
                ClassRef[i]["[.]"] && (api["[.]"] = {}) && copy(ClassRef[i]["[.]"]).to(api["[.]"]);
                ClassRef[i]["[-]"] && (api["[-]"] = {}) && copy(ClassRef[i]["[-]"]).to(api["[-]"]);
                for (var u = inherits.length - 1; u >= 0; --u) {
                    if (parent = ClassRef[inherits[u]]) {
                        if (parent["[.]"]) {
                            !api["[.]"] && (api["[.]"] = {});
                            copy(parent["[.]"] || {}).to(api["[.]"]);
                        }
                        
                        if (parent["[-]"]) {
                            !api["[-]"] && (api["[-]"] = {});
                            copy(parent["[-]"]).to(api["[-]"]);
                        }
                    }
                }
                ClassRef[i]["[*]"] = api;
            }
            keyword.push(i);
            fullList.append(listTemp.replace(/\{ClassName\}/g, i));
        }

        $("#update").click(function() {
            $.ajax({
                type: "POST",
                url: 'build.php',
                success: function(data) {
                    console.log(data);
                    window.location.href = "index.html";
                }
            });
        });

        var searhResult = $("#searh-result");
        $("#search").focus(function() {
            $(this).val("");
            detailContainer.find(".close").trigger("click");
        }).keyup(function() {
            var searhTemp = '<li><a href="#{result}">{result}</li>';
            var val = this.value;
            document.body.scrollIntoView(true);
            if (val.length) {
                searhResult.html("");
                for (var i = 0; i < keyword.length; ++i) {
                    if (keyword[i].replace(new RegExp(val, "gi"), "") != keyword[i]) {
                        searhResult.append(searhTemp.replace(/\{result\}/g, keyword[i]));
                    }
                }
            }
        });
        


        if ("onhashchange" in window) {
            window.onhashchange = function () {
                hashChanged(window.location.hash);
            }
        } else {
            var storedHash = window.location.hash;
            setInterval(function () {
                if (window.location.hash != storedHash) {
                    storedHash = window.location.hash;
                    hashChanged(storedHash);
                }
            }, 100);
        }

        function hashChanged(hash) {
            hash = hash.replace("#", "");
            if (hash.length && hash != "#") {
                setTimeout(function() {
                    ClassRef[hash] && viewDetail(hash);
                }, 125);
            }
        }

        var detailContainer = $("#detail-content");
        detailContainer.find(".close").click(function() {
            detailContainer.removeClass("expand");
            window.location.hash = new Date().getTime();
            detailContainer.animate({height: 0}, 'fast');
        });

        function viewDetail(className) {
            var windowHeight = $(window).height();
            windowHeight -= $(".top-page").outerHeight();

            if (!detailContainer.hasClass("expand")) {
                detailContainer.addClass("expand");
                detailContainer.animate({height: windowHeight}, 'fast');
            }

            detailContainer.find(".dt-header .title").html(className);
            detailContainer.find(".main-content").html( getDetail(ClassRef[className]), null );
            console.log( ClassRef[className] );
            $("#detail-content .inherits").get(0).previousSibling.scrollIntoView();
        }

        var origin = '<div class="item"><div class="title origin">{title}</div><div class="desc">{desc}</div></div>';
        
        function getDetail(item, root) {
           
            var  html = [], rest = true;
            
            if (item["[:]"] && item["[*]"]) {
                rest = false;
                html.push("<div class='row-header'> Inherits From </div>");
                html.push("<div class='inherits'>" + item["[:]"] + "</div>");
                html.push(getDetail(item["[*]"], item));
            }

            // get inherits properties;          
            if (item["[.]"] && !item["[:]"]) {
                rest = false;
                html.push("<div class='row-header'> Properties </div>");
                html.push("<div class='row-content'>" + getDetail(item["[.]"], root) + "</div>");
            }
            
            // get inherits methods;
            if (item["[-]"] && !item["[:]"]) {
                rest = false;
                html.push("<div class='row-header'> Methods </div>");
                html.push("<div class='row-content'>" + getDetail(item["[-]"], root) + "</div>");
            }

            // get constants;
            if (item["[=]"]) {
                rest = false;
                html.push("<div class='row-header'> Constants </div>");
                html.push("<div class='row-content'>" + getDetail(item["[=]"], null) + "</div>");
            }

            // get static methods;
            if (item["[+]"]) {
                rest = false;
                html.push("<div class='row-header'> Static Methods </div>");
                html.push("<div class='row-content'>" + getDetail(item["[+]"], null) + "</div>");
            }


            if (rest) {
                var desc, row, keys = [];
                
                for (var i in item) {
                    item.hasOwnProperty(i) && keys.push(i);
                }
                keys.sort();

                for (var i  = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (item[key]) {
                        desc =  "<div class='abstract'>" + item[key]["abs"] + "</div>" +
                                "<div class='declaration'>" + item[key]["dec"] + "</div>";
                    } else {
                        desc = "";
                    }
                    
                    // check inherits;
                    if (root && (root["[.]"] && root["[.]"][key] || root["[-]"] && root["[-]"][key])) {
                        row = origin;
                    } else {
                        row = origin.replace("origin", "");
                    }

                    row = row.replace("{title}", key);
                    row = row.replace("{desc}", desc);
                    
                    html.push(row);
                }
            }

            return html.join("");
        }

    }); // ready