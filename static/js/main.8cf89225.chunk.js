(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(37)},,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),i=(a(21),a(7)),s=a(10),o=a(1),u=a(2),m=a(4),f=a(3),d=a(5),h=(a(23),a(25),function(e){var t=e.increased,a=e.employes;return r.a.createElement("div",{className:"app-info"},r.a.createElement("h1",null,"\u0423\u0447\u0435\u0442 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),r.a.createElement("h2",null,"\u041e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432: ",a),r.a.createElement("h2",null,"\u041f\u0440\u0435\u043c\u0438\u044e \u043f\u043e\u043b\u0443\u0447\u0430\u0442: ",t))}),p=(a(27),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).onUpdateSearchLocal=function(e){var t=e.target.value;a.setState({term:t}),a.props.onUpdateSearch(t)},a.state={term:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430",value:this.state.term,onChange:this.onUpdateSearchLocal})}}]),t}(n.Component)),b=(a(29),function(e){var t=[{name:"all",label:"\u0412\u0441\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"},{name:"rise",label:"\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438 \u043d\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435"},{name:"moreThen1000",label:"\u0417/\u041f \u0431\u043e\u043b\u0448\u0435 1000$"}].map(function(t){var a=t.name,n=t.label,l=e.filter===a?"btn-light":"btn-outline-light";return r.a.createElement("button",{className:"btn ".concat(l),type:"button",key:a,onClick:function(){return e.onFilterSelect(a)}},n)});return r.a.createElement("div",{className:"btn-group"},t)}),g=a(11),E=(a(31),function(e){var t=e.name,a=e.salary,n=e.increase,l=e.rise,c=e.onDelete,i=e.onToggleIncrease,s=e.onToggleRise,o="list-group-item d-flex justify-content-between";return n&&(o+=" increase"),l&&(o+=" like"),r.a.createElement("li",{className:o},r.a.createElement("span",{className:"list-group-item-label",onClick:s},t),r.a.createElement("input",{type:"text",className:"list-group-item-input",defaultValue:a+"$"}),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"btn-cookie btn-sm ",onClick:i},r.a.createElement("i",{className:"fas fa-cookie"})),r.a.createElement("button",{type:"button",className:"btn-trash btn-sm ",onClick:c},r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement("i",{className:"fas fa-star"})))}),v=(a(33),function(e){var t=e.data,a=e.onDelete,n=e.onToggleIncrease,l=e.onToggleRise,c=t.map(function(e){var t=e.id,c=Object(g.a)(e,["id"]);return r.a.createElement(E,Object.assign({key:t},c,{onDelete:function(){return a(t)},onToggleIncrease:function(){return n(t)},onToggleRise:function(){return l(t)}}))});return r.a.createElement("ul",{className:"app-list list-group"},c)}),y=a(6),j=(a(35),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.onAdd(a.state.name,a.state.salary),a.setState({name:"",salary:""})},a.onValueChange=function(e){a.setState(Object(y.a)({},e.target.name,e.target.value))},a.state={name:"",salary:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.salary;return r.a.createElement("div",{className:"app-add-form"},r.a.createElement("h3",null,"\u0414\u043e\u0431\u0430\u0432\u044c \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"),r.a.createElement("form",{className:"add-form d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",className:"form-control new-post-label",placeholder:"\u041a\u0430\u043a \u0435\u0433\u043e \u0437\u043e\u0432\u0443\u0442",name:"name",value:t,required:"required",onChange:this.onValueChange}),r.a.createElement("input",{type:"number",className:"form-control new-post-label",placeholder:"\u0417/\u041f \u0432 $?",name:"salary",value:a,required:"required",onChange:this.onValueChange}),r.a.createElement("button",{className:"btn btn-outline-light",type:"submit",onClick:this.addItem},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).addItem=function(e,t){var n={name:e,salary:t,increase:!1,rise:!1,id:a.maxId++};a.setState(function(e){var t=e.data;return{data:[].concat(Object(s.a)(t),[n])}})},a.deleteItem=function(e){a.setState(function(t){return{data:t.data.filter(function(t){return t.id!==e})}})},a.onToggleIncrease=function(e){a.setState(function(t){return{data:t.data.map(function(t){return t.id===e?Object(i.a)({},t,{increase:!t.increase}):t})}})},a.onToggleRise=function(e){a.setState(function(t){return{data:t.data.map(function(t){return t.id===e?Object(i.a)({},t,{rise:!t.rise}):t})}})},a.searchEmp=function(e,t){return 0===e.length?e:e.filter(function(e){return e.name.indexOf(t)>-1})},a.filterPost=function(e,t){switch(t){case"rise":return e.filter(function(e){return e.rise});case"moreThen1000":return e.filter(function(e){return e.salary>1e3});default:return e}},a.onFilterSelect=function(e){a.setState({filter:e})},a.onUpdateSearch=function(e){a.setState({term:e})},a.state={data:[{name:"John C.",salary:800,increase:!1,rise:!1,id:1},{name:"Alex M.",salary:3e3,increase:!1,rise:!1,id:2},{name:"Carl W.",salary:5e3,increase:!1,rise:!1,id:3}],term:"",filter:"all"},a.maxId=4,a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.term,n=e.filter,l=this.state.data.length,c=this.state.data.filter(function(e){return e.increase}).length,i=this.filterPost(this.searchEmp(t,a),n);return r.a.createElement("div",{className:"app"},r.a.createElement(h,{employes:l,increased:c}),r.a.createElement("div",{className:"search-panel"},r.a.createElement(p,{onUpdateSearch:this.onUpdateSearch}),r.a.createElement(b,{filter:n,onFilterSelect:this.onFilterSelect})),r.a.createElement(v,{data:i,onDelete:this.deleteItem,onToggleIncrease:this.onToggleIncrease,onToggleRise:this.onToggleRise}),r.a.createElement(j,{onAdd:this.addItem}))}}]),t}(n.Component);c.a.createRoot(document.getElementById("root")).render(r.a.createElement(O,null))}],[[12,2,1]]]);
//# sourceMappingURL=main.8cf89225.chunk.js.map