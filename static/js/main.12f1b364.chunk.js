(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(20)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(5),s=n.n(r),c=n(1),i=n.n(c),u=n(3),l=n(2),d=n(6),m=n(7),p=n(9),f=n(8),b=(n(16),n(17),function(t){var e,n=t.todo;return a.a.createElement("div",{className:"todo__item-wrapper",style:{backgroundColor:"".concat(n.completed?"green":"red")}},a.a.createElement("span",{className:"todo__item-name"},null===(e=n.user)||void 0===e?void 0:e.name),a.a.createElement("p",{className:"todo__item-title"},n.title))}),h=(n(18),function(t){var e=t.todos;return a.a.createElement("ul",{className:"todo__list list"},e.map((function(t){return a.a.createElement("li",{className:"list__item",key:t.id},a.a.createElement(b,{todo:t}))})))}),y="https://mate.academy/students-api/users",v="https://mate.academy/students-api/todos",E=function(){var t=Object(l.a)(i.a.mark((function t(e){var n,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return o=t.sent,t.abrupt("return",o.data);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=(n(19),function(t){return a.a.createElement("div",{className:"todo__buttons"},a.a.createElement("button",{className:"btn",type:"button",onClick:t.titleSort},"Sort by title"),a.a.createElement("button",{className:"btn",type:"button",onClick:t.nameSort},"Sort by name"),a.a.createElement("button",{className:"btn",type:"button",onClick:t.showCompleted},"Show completed first"))}),_=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[],isLoading:!1},t.loadTodos=Object(l.a)(i.a.mark((function e(){var n,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,E(v);case 3:return n=e.sent,e.next=6,E(y);case 6:o=e.sent,a=n.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{user:o.find((function(e){return e.id===t.userId}))})})),t.setState({todos:a,isLoading:!1});case 9:case"end":return e.stop()}}),e)}))),t.sortByTitle=function(){t.setState((function(t){return{todos:t.todos.sort((function(t,e){return t.title.localeCompare(e.title)}))}}))},t.sortByName=function(){t.setState((function(t){return{todos:t.todos.sort((function(t,e){return t.user&&e.user?t.user.name.localeCompare(e.user.name):0}))}}))},t.showCompleted=function(){t.setState((function(t){return{todos:t.todos.sort((function(t,e){return Number(e.completed)-Number(t.completed)}))}}))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.todos,n=t.isLoading;return a.a.createElement("div",{className:"todo"},a.a.createElement("h1",null,"Dynamic list of todos"),e.length?a.a.createElement("div",null,a.a.createElement(N,{titleSort:this.sortByTitle,nameSort:this.sortByName,showCompleted:this.showCompleted}),a.a.createElement(h,{todos:e})):a.a.createElement("button",{className:"btn",type:"button",onClick:this.loadTodos,disabled:n},"".concat(n?"Loading...":"Load")))}}]),n}(a.a.Component);s.a.render(a.a.createElement(_,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.12f1b364.chunk.js.map