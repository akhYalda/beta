webpackJsonp([2,262],{87:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return{filter:e.filter,isStudentMode:e.isStudentMode}}Object.defineProperty(t,"__esModule",{value:!0}),t.LessonFilterContainer=t.LessonFilter=void 0;var a=l(1),s=n(a),u=l(29),o=l(72),i=l(109),d=n(i),c=l(36),f=n(c),p=t.LessonFilter=s["default"].createClass({displayName:"LessonFilter",render:function(){var e=this,t=this.props.filter||{},l=Object.keys(t).map(function(l,n){var r=t[l];return s["default"].createElement(d["default"],{key:n,groupName:l,tagItems:r,onFilterCheck:e.props.onFilterCheck})});return s["default"].createElement("div",{className:this.props.isStudentMode?"panel panel-student":"panel panel-teacher"},s["default"].createElement("div",{className:"panel-heading"},s["default"].createElement("h3",{className:"panel-title"},"Filter")),s["default"].createElement("div",{className:"panel-body"},l,s["default"].createElement("br",null),s["default"].createElement(f["default"],{block:!0,onClick:function(){return e.props.resetFilter()}},"Fjern filter")))}});p.propTypes={filter:a.PropTypes.object,onFilterCheck:a.PropTypes.func,resetFilter:a.PropTypes.func,isStudentMode:a.PropTypes.bool},t.LessonFilterContainer=(0,u.connect)(r,{onFilterCheck:o.onFilterCheck,resetFilter:o.resetFilter})(p)},88:function(e,t,l){"use strict";function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}Object.defineProperty(t,"__esModule",{value:!0}),t.getFilteredAndIndexedLessons=t.getFilteredLessons=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},a=l(86),s=l(22),u=function(e){var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];return Object.keys(e.lessons).reduce(function(l,a){return a.startsWith("./"+t)?r({},l,n({},a,e.lessons[a])):l},{})},o=function(e){return e.filter},i=t.getFilteredLessons=(0,a.createSelector)([o,u],function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return Object.keys(t).reduce(function(l,n){var r=t[n];return(0,s.tagsMatchFilter)(r.tags,e)&&(l[n]=r),l},{})});t.getFilteredAndIndexedLessons=(0,a.createSelector)([i],function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return Object.keys(e).reduce(function(t,l){var a=e[l];return a.indexed?r({},t,n({},l,a)):t},{})})},109:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),a=n(r),s=l(110),u=n(s),o=l(22),i=l(119),d=n(i),c=l(18),f=n(c),p=a["default"].createClass({displayName:"FilterGroup",render:function(){var e=this,t=(0,o.capitalize)(this.props.groupName),l=this.props.tagItems,n=Object.keys(l).map(function(n,r){var s=function(){return e.props.onFilterCheck(t,n)};return a["default"].createElement(u["default"],{key:r,tagItem:n,checked:l[n],onCheck:s})});return a["default"].createElement("div",{className:d["default"].filterGroup},a["default"].createElement("h4",null,t),n)}});p.propTypes={groupName:r.PropTypes.string,tagItems:r.PropTypes.object,onCheck:r.PropTypes.func},t["default"]=(0,f["default"])(d["default"])(p)},110:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),a=n(r),s=l(22),u=a["default"].createClass({displayName:"FilterItem",render:function(){var e=(0,s.capitalize)(this.props.tagItem);return a["default"].createElement("div",{className:"checkbox"},a["default"].createElement("label",null,a["default"].createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.props.onCheck}),e))}});u.propTypes={tagItem:r.PropTypes.string,checked:r.PropTypes.bool,onCheck:r.PropTypes.func},t["default"]=u},113:function(e,t,l){t=e.exports=l(16)(),t.push([e.id,".FilterGroup__filterGroup__2yRjx:first-child>h4{margin-top:0}.FilterGroup__filterGroup__2yRjx:not(:last-child){border-bottom:1px solid #dadada}",""]),t.locals={filterGroup:"FilterGroup__filterGroup__2yRjx"}},119:function(e,t,l){var n=l(113),r=l(17);"string"==typeof n&&(n=[[e.id,n,""]]),e.exports=n.locals||{},e.exports._getCss=function(){return n.toString()},e.exports._insertCss=function(e){return r(n,e)}},202:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return{isStudentMode:e.isStudentMode}}Object.defineProperty(t,"__esModule",{value:!0}),t.LessonItemContainer=t.LessonItem=void 0;var a=l(1),s=n(a),u=l(29),o=l(147),i=n(o),d=l(1729),c=n(d),f=l(18),p=n(f),m=l(36),y=n(m),h=l(67),g=n(h),v=t.LessonItem=s["default"].createClass({displayName:"LessonItem",render:function(){var e=this.props.lesson,t={"float":"right",color:"gray",fontSize:"1.1em"},l=(this.props.constraints||[]).map(function(e,l){switch(e){case"internet-explorer":return s["default"].createElement("span",{key:l,style:t},s["default"].createElement(g["default"],{glyph:"fire"}));case"tablet":return s["default"].createElement("span",{key:l,style:t},s["default"].createElement(g["default"],{key:l,glyph:"phone"}));case"money":return s["default"].createElement("span",{key:l,style:t},s["default"].createElement(g["default"],{key:l,glyph:"euro"}))}return null}),n=e.external.length>0;return s["default"].createElement("li",{className:"list-group-item"},n?s["default"].createElement("a",{href:e.external,target:"_blank"},s["default"].createElement("div",{className:c["default"].lessonItem},l,e.title," ",s["default"].createElement(g["default"],{glyph:"new-window"}))):s["default"].createElement("div",null,!this.props.isStudentMode&&(e.readmePath||"").length>0?s["default"].createElement(i["default"],{to:e.readmePath},s["default"].createElement(y["default"],{className:c["default"].instructionBtn,bsSize:"xs"},"Veiledning")):null,s["default"].createElement(i["default"],{to:e.path},s["default"].createElement("div",{className:c["default"].lessonItem},l,e.title))))}});v.propTypes={constraints:a.PropTypes.array,lesson:a.PropTypes.object,isStudentMode:a.PropTypes.bool},t.LessonItemContainer=(0,u.connect)(r)((0,p["default"])(c["default"])(v))},203:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),a=n(r),s=l(22),u=a["default"].createClass({displayName:"LevelNavigation",render:function(){var e=this.props.levels||[],t=e.map(function(e,t){return a["default"].createElement("li",{key:t,className:"list-group-item"},a["default"].createElement("a",{href:"#level-"+e},e+". "+(0,s.getLevelName)(e)))});return a["default"].createElement("div",null,a["default"].createElement("h3",null,"Hopp til"),a["default"].createElement("ul",{className:"list-group"},t))}});u.propTypes={levels:r.PropTypes.array},t["default"]=u},204:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),a=n(r),s=l(581),u=n(s),o=a["default"].createClass({displayName:"PlaylistNavigation",render:function(){var e=this.props.playlists||{},t=Object.keys(e).map(function(t,l){return e[t].length?a["default"].createElement(u["default"],{key:l,name:t,lessons:e[t]}):null});return a["default"].createElement("div",null,a["default"].createElement("h3",null,"Oppgavesamlinger"),a["default"].createElement("ul",{className:"list-group"},t.length?t:a["default"].createElement("li",{className:"list-group-item list-group-item-warning"},"Ingen samlinger")))}});o.propTypes={playLists:r.PropTypes.object},t["default"]=o},576:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),a=n(r),s=l(202),u=l(22),o=a["default"].createClass({displayName:"LessonList",generateMockConstraints:function(e){return e%6===0?["money","tablet","internet-explorer"]:e%5===0?["money"]:e%7===0?["tablet"]:null},render:function(){var e=this,t=this.props.lessons,l=this.props.level;return a["default"].createElement("div",{id:this.props.id},a["default"].createElement("h3",null,l+". "+(0,u.getLevelName)(l)),a["default"].createElement("ul",{className:"list-group"},t.map(function(t,l){return t.indexed?a["default"].createElement(s.LessonItemContainer,{key:l,lesson:t,constraints:e.generateMockConstraints(l)}):null})))}});o.propTypes={lessons:r.PropTypes.array,level:r.PropTypes.string},t["default"]=o},581:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),a=n(r),s=l(202),u=l(1734),o=n(u),i=l(18),d=n(i),c=l(1873),f=n(c),p=l(67),m=n(p),y=a["default"].createClass({displayName:"Playlist",getInitialState:function(){return{expanded:!1}},expand:function(){this.setState({expanded:!this.state.expanded})},render:function(){var e=this.props.name,t=this.props.lessons||[];return a["default"].createElement("div",null,a["default"].createElement("li",{className:o["default"].playlist+" list-group-item",onClick:this.expand},a["default"].createElement(m["default"],{glyph:this.state.expanded?"chevron-down":"chevron-right"})," ",a["default"].createElement(f["default"],null,t.length),e),a["default"].createElement("ul",{className:"list-group",style:this.state.expanded?null:{display:"none"}},t.map(function(e,t){return a["default"].createElement(s.LessonItemContainer,{key:t,lesson:e})})))}});y.propTypes={name:r.PropTypes.string,lessons:r.PropTypes.array},t["default"]=(0,d["default"])(o["default"])(y)},582:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),a=n(r),s=l(22),u=l(36),o=n(u),i=l(46),d=n(i),c=l(33),f=n(c),p=a["default"].createClass({displayName:"HeadRow",render:function(){return a["default"].createElement(f["default"],null,a["default"].createElement(d["default"],{xs:12,sm:9,smOffset:3},a["default"].createElement("h1",null,(0,s.capitalize)(this.props.courseName)," Oppgaver  ",a["default"].createElement(o["default"],{bsSize:"large"},"Start her!"))))}});p.propTypes={courseName:r.PropTypes.string},t["default"]=p},583:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=l(1),a=n(r),s=l(36),u=n(s),o=l(46),i=n(o),d=l(33),c=n(d),f=a["default"].createClass({displayName:"MobileButtonsRow",render:function(){var e=this;return a["default"].createElement(c["default"],null,a["default"].createElement(i["default"],{xs:12,smHidden:!0,mdHidden:!0,lgHidden:!0},a["default"].createElement(u["default"],{onClick:function(){return e.props.toggle("Filter")}},"Vis/skjul filter"),a["default"].createElement(u["default"],{onClick:function(){return e.props.toggle("Playlists")}},"Vis/skjul oppgavesamlinger")))}});f.propTypes={toggle:r.PropTypes.func,showLevelNavigation:r.PropTypes.bool},t["default"]=f},584:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}Object.defineProperty(t,"__esModule",{value:!0});var a=l(1),s=n(a),u=l(87),o=l(203),i=n(o),d=l(204),c=n(d),f=l(583),p=n(f),m=l(46),y=n(m),h=l(96),g=n(h),v=l(33),_=n(v),E=s["default"].createClass({displayName:"MobileComponents",getInitialState:function(){return{showFilter:!1,showPlaylists:!1}},toggle:function(e){this.setState(r({},"show"+e,!this.state["show"+e]))},render:function(){return s["default"].createElement("div",null,s["default"].createElement(p["default"],{toggle:this.toggle}),s["default"].createElement(_["default"],null,s["default"].createElement(y["default"],{smHidden:!0,mdHidden:!0,lgHidden:!0,xs:12},s["default"].createElement(g["default"],{"in":this.state.showFilter},s["default"].createElement("div",null,s["default"].createElement(u.LessonFilterContainer,null))),s["default"].createElement(g["default"],{"in":this.state.showPlaylists},s["default"].createElement("div",null,s["default"].createElement(c["default"],{playlists:this.props.playlists}))),s["default"].createElement("div",null,this.props.showLevelNavigation?s["default"].createElement(i["default"],{levels:this.props.levels}):null))))}});E.propTypes={showLevelNavigation:a.PropTypes.bool,levels:a.PropTypes.array,playlists:a.PropTypes.object},t["default"]=E},587:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return{filteredAndIndexedLessons:(0,f.getFilteredAndIndexedLessons)(e,t.params.course),filteredPlaylists:(0,p.getPlaylists)(e,t.params.course)}}Object.defineProperty(t,"__esModule",{value:!0}),t.PlaylistPageContainer=t.PlaylistPage=void 0;var a=l(1),s=n(a),u=l(29),o=l(18),i=n(o),d=l(1737),c=n(d),f=l(88),p=l(597),m=l(87),y=l(576),h=n(y),g=l(203),v=n(g),_=l(204),E=n(_),P=l(582),b=n(P),x=l(584),C=n(x),N=l(46),k=n(N),j=l(79),L=n(j),O=l(33),T=n(O),M=t.PlaylistPage=s["default"].createClass({displayName:"PlaylistPage",getLessonsByLevel:function(e){return null==e?{}:Object.keys(e).reduce(function(t,l){var n=e[l],r=n.level;return null!=r&&(t.hasOwnProperty(r)?t[r].push(n):t[r]=[n]),t},{})},render:function(){var e=this.props.filteredAndIndexedLessons,t=this.props.filteredPlaylists,l=this.getLessonsByLevel(e),n=Object.keys(l),r=n.map(function(e,t){return s["default"].createElement("div",{key:t,className:"col-xs-12"},s["default"].createElement(h["default"],{id:"level-"+e,level:e,lessons:l[e]}))}),a=Object.keys(e).length>10&&n.length>1,u=Object.keys(e).length>15&&n.length>1;return s["default"].createElement(L["default"],{fluid:!0},s["default"].createElement(b["default"],{courseName:this.props.params.course}),s["default"].createElement(C["default"],{playlists:t,levels:n,showLevelNavigation:a}),s["default"].createElement(T["default"],null,s["default"].createElement(k["default"],{sm:3,lg:2,xsHidden:!0,className:c["default"].fixed},s["default"].createElement("div",{className:c["default"].scrollable},s["default"].createElement(m.LessonFilterContainer,null))),s["default"].createElement(k["default"],{xs:12,sm:6,lg:5,smOffset:3,lgOffset:3},r.length?r:"Ingen oppgaver passer til filteret"),s["default"].createElement(k["default"],{sm:3,smOffset:9,lgOffset:9,xsHidden:!0,className:c["default"].fixed},s["default"].createElement("div",{className:c["default"].scrollable},u?s["default"].createElement(v["default"],{levels:n}):null,s["default"].createElement(E["default"],{playlists:t})))))}});M.propTypes={filteredPlaylists:a.PropTypes.object,filteredAndIndexedLessons:a.PropTypes.object,params:a.PropTypes.shape({course:a.PropTypes.string.isRequired})},t.PlaylistPageContainer=(0,u.connect)(r)((0,i["default"])(c["default"])(M))},597:function(e,t,l){"use strict";function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}Object.defineProperty(t,"__esModule",{value:!0}),t.getPlaylists=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},a=l(86),s=l(88),u=l(22),o=function(e){var t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];return e.context.playlistContext.keys().filter(function(e){return e.startsWith("./"+t)})},i=function(e){return e.context.playlistContext};t.getPlaylists=(0,a.createSelector)([s.getFilteredLessons,i,o],function(e,t,l){return l.reduce(function(l,a){var s=a.slice(2,a.indexOf("/",2)).toLowerCase(),o=(0,u.capitalize)(a.slice(a.lastIndexOf("/")+1,a.indexOf(".txt"))).replace(/_/g," "),i=t(a),d=i.split("\n").map(function(e){return"./"+s.toLowerCase()+"/"+e}),c=d.reduce(function(t,l){var n=e[l];return null!=n&&t.push(n),t},[]);return r({},l,n({},o,c))},{})})},1420:function(e,t,l){t=e.exports=l(16)(),t.push([e.id,"a:hover{text-decoration:none}.LessonItem__lessonItem__3d8tq{font-size:1.3em}.LessonItem__lessonItem__3d8tq:hover{cursor:pointer;font-weight:700}.LessonItem__instructionBtn__1vAU8{float:right;margin-left:.5em}",""]),t.locals={lessonItem:"LessonItem__lessonItem__3d8tq",instructionBtn:"LessonItem__instructionBtn__1vAU8"}},1425:function(e,t,l){t=e.exports=l(16)(),t.push([e.id,".Playlist__playlist__-VWYh:hover{cursor:pointer;font-weight:700}",""]),t.locals={playlist:"Playlist__playlist__-VWYh"}},1428:function(e,t,l){t=e.exports=l(16)(),t.push([e.id,".PlaylistPage__fixed__30jUc{position:fixed;top:200px;bottom:25px}.PlaylistPage__scrollable__1EfZw{overflow-y:auto;height:100%}",""]),t.locals={fixed:"PlaylistPage__fixed__30jUc",scrollable:"PlaylistPage__scrollable__1EfZw"}},1729:function(e,t,l){var n=l(1420),r=l(17);"string"==typeof n&&(n=[[e.id,n,""]]),e.exports=n.locals||{},e.exports._getCss=function(){return n.toString()},e.exports._insertCss=function(e){return r(n,e)}},1734:function(e,t,l){var n=l(1425),r=l(17);"string"==typeof n&&(n=[[e.id,n,""]]),e.exports=n.locals||{},e.exports._getCss=function(){return n.toString()},e.exports._insertCss=function(e){return r(n,e)}},1737:function(e,t,l){var n=l(1428),r=l(17);"string"==typeof n&&(n=[[e.id,n,""]]),e.exports=n.locals||{},e.exports._getCss=function(){return n.toString()},e.exports._insertCss=function(e){return r(n,e)}},1873:function(e,t,l){"use strict";var n=l(6)["default"],r=l(5)["default"];t.__esModule=!0;var a=l(8),s=r(a),u=l(1),o=r(u),i=l(19),d=l(81),c=r(d),f=o["default"].createClass({displayName:"Badge",propTypes:{pullRight:o["default"].PropTypes.bool},getDefaultProps:function(){return{pullRight:!1,bsClass:"badge"}},hasContent:function(){var e=this.props.children;return c["default"].count(e)>0||o["default"].Children.count(e)>1||"string"==typeof e||"number"==typeof e},render:function(){var e,t=(e={"pull-right":this.props.pullRight},e[i.prefix(this.props)]=this.hasContent(),e);return o["default"].createElement("span",n({},this.props,{className:s["default"](this.props.className,t)}),this.props.children)}});t["default"]=f,e.exports=t["default"]}});