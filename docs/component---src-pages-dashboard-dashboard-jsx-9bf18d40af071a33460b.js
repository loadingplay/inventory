(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});n(38),n(13),n(39);var a=n(200),r=n.n(a),o=(n(199),n(0)),s=n.n(o),c=n(201);n(207);function l(e,t,n,a,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void n(i)}c.done?t(l):Promise.resolve(l).then(a,r)}var i=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).loadCellars=function(){var e,t=(e=r.a.mark(function e(t){var a,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=new c.d(t),e.next=3,a.loadCellars();case 3:o=e.sent,n.setState({cellars:o.cellars});case 5:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function s(e){l(o,a,r,s,c,"next",e)}function c(e){l(o,a,r,s,c,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}(),n.state={cellars:null,selected_id:0},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentWillReceiveProps=function(e){""!==e.access_token&&this.loadCellars(e.access_token)},o.render=function(){var e=this,t=this.state.cellars?this.state.cellars.map(function(t,n){return s.a.createElement("tr",{key:n,className:e.state.selected_id===t.id?"stores_selected":""},s.a.createElement("td",{onClick:function(){e.setState({selected_id:t.id}),e.props.cellarSelected(t.id)}},t.name))}):s.a.createElement("tr",null,s.a.createElement("td",null,"Cargando..."));return s.a.createElement("section",{className:"stores_wrapper"},s.a.createElement("table",{className:"table table-hover table-borderless table-sm"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"table-info"},s.a.createElement("th",{scope:"col"},"tiendas"))),s.a.createElement("tbody",null,t)))},a}(o.Component)},191:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});n(38),n(13),n(206);var a=n(200),r=n.n(a),o=(n(199),n(0)),s=n.n(o),c=n(201),l=n(205);n(208);function i(e,t,n,a,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void n(i)}c.done?t(l):Promise.resolve(l).then(a,r)}var u=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleNewStatus=function(e){"error"===e.status?n.setState({error_message:e.message}):n.setState({products:e.replenishments,error_message:""})},n.loadInventory=function(){var e,t=(e=r.a.mark(function e(t,a){var o,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({products:null}),o=new c.d(n.props.accessToken),e.next=4,o.loadProducts(a,t);case 4:s=e.sent,n.handleNewStatus(s),s.replenishments&&n.loadStoreInventory(t,s.replenishments);case 7:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function s(e){i(o,a,r,s,c,"next",e)}function c(e){i(o,a,r,s,c,"throw",e)}s(void 0)})});return function(e,n){return t.apply(this,arguments)}}(),n.loadStoreInventory=function(e,t){if(void 0!==t){var a=t.map(function(e){return e.sku});Object(c.StockLoader)(n.props.accessToken).load([e],a).done(function(e,t){if(n.state.products){var a=n.state.products.map(function(e,n){var a=t.find(function(t){return e.sku===t.product_sku});return void 0===e.current_inventory&&(e.current_inventory=void 0!==a?a.balance_units:void 0),e});n.setState({products:a})}})}},n.componentWillReceiveProps=function(e){0!==e.selectedCellar&&n.loadInventory(e.selectedCellar,e.currentPage+1)},n.renderProductList=function(){return n.props.selectedCellar?""!==n.state.error_message?s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"6",className:"stock-message"},n.state.error_message)):n.state.products?0===n.state.products.length?s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"6"},"No hay productos sugeridos en esta tienda")):n.state.products.map(function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("th",{scope:"row"},e.sku),s.a.createElement("td",null),s.a.createElement("td",null),s.a.createElement("td",null,void 0===e.current_inventory?"cargando...":e.current_inventory),s.a.createElement("td",null,e.suggested),s.a.createElement("td",null,s.a.createElement(l.c,{cellar_id:n.props.selectedCellar,sku:e.sku})))}):s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"6",className:"stock-message"},"Cargando...")):s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"6",className:"stock-message"},"Seleccione una bodega"))},n.state={products:null,error_message:""},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return s.a.createElement("section",{className:"stores_wrapper col-12"},s.a.createElement("table",{className:"table table-sm"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"table-info"},s.a.createElement("th",{scope:"col"},"sku"),s.a.createElement("th",{scope:"col"},"nombre"),s.a.createElement("th",{scope:"col"},"stock bodega"),s.a.createElement("th",{scope:"col"},"stock tienda"),s.a.createElement("th",{scope:"col"},"sugerido"),s.a.createElement("th",{scope:"col"},"picker"))),s.a.createElement("tbody",null,this.renderProductList())))},a}(o.Component)},192:function(e,t,n){"use strict";n.r(t);var a=n(190);t.default=a.Stores},193:function(e,t,n){"use strict";n.r(t);n(191);var a=n(202);n.d(t,"PickerControl",function(){return a.a}),t.default=Stock},194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(209),s=n.n(o),c=n(192),l=n(193),i=n(205),u=(n(38),n(200)),d=n.n(u),p=(n(199),n(29),n(30),n(13),n(50),n(201));function m(e,t,n,a,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void n(i)}c.done?t(l):Promise.resolve(l).then(a,r)}function f(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function s(e){m(o,a,r,s,c,"next",e)}function c(e){m(o,a,r,s,c,"throw",e)}s(void 0)})}}var h=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this)._generateOrderData=function(){var e,t;return e=p.b.get(n.props.selectedCellar),t=Object.keys(e).map(function(t){return{sku:t,price:0,name:"",combination:"",quantity:e[t]}}),{origin:"replenishments",payment_type:"guia",products:JSON.stringify(t)}},n._sendShippedOrder=f(d.a.mark(function e(){var t,a,r,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=new p.a(n.props.accessToken),a=n._generateOrderData(),e.next=4,o.create(a);case 4:if("success"!==(t=e.sent).status){e.next=9;break}return r=t.order.id,e.next=9,o.update(r,{status:"despachado"});case 9:case"end":return e.stop()}},e)})),n.handleClick=f(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({button_status:a.Statusses.GENERATING}),e.next=3,n._sendShippedOrder();case 3:p.b.clear(n.props.selectedCellar),n.props.onOrderGenerated(),n.setState({button_status:a.Statusses.DONE}),setTimeout(function(){n.setState({button_status:a.Statusses.IDLE})},5e3);case 7:case"end":return e.stop()}},e)})),n.getMessage=function(){var e;return n.state.button_status===a.Statusses.IDLE?e="generar guía":n.state.button_status===a.Statusses.GENERATING?e="generando...":n.state.button_status===a.Statusses.DONE&&(e="guía enviada"),e},n.render=function(){return r.a.createElement("button",{type:"button",disabled:n.state.button_status!==a.Statusses.IDLE,onClick:n.handleClick,className:"btn btn-primary btn-block float-right"},n.getMessage())},n.state={button_status:a.Statusses.IDLE},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a}(r.a.Component);h.Statusses={IDLE:0,GENERATING:1,DONE:2},h.defaultProps={onOrderGenerated:function(){}},n.d(t,"default",function(){return v});var v=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleSelectedCellar=function(e){n.setState({selected_cellar_id:e})},n.handlePageClick=function(e){n.setState({current_page:e.selected})},n.handlePickerClear=function(){n.setState({selected_cellar_id:n.state.selected_cellar_id,current_page:0})},n.componentDidMount=function(){var e=window.localStorage.getItem("access_token");n.setState({access_token:e})},n.state={access_token:"",selected_cellar_id:0,current_page:0},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e;return r.a.createElement("div",{className:"container dashboard_wrapper"},r.a.createElement("div",{className:"dashboard_elements row"},r.a.createElement("h3",{className:"dashboard_title col-12"},"Reposición de inventario."),r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{className:"subtitle"},"1. Seleccion de tienda"),r.a.createElement(c.Stores,{access_token:this.state.access_token,cellarSelected:this.handleSelectedCellar})),r.a.createElement("div",{className:"col-10 row"},r.a.createElement("div",{className:"subtitle col-6"},"2. Pedidos"),r.a.createElement("div",{className:"col-6"},r.a.createElement(i.a,null)),r.a.createElement(l.Stock,{currentPage:this.state.current_page,selectedCellar:this.state.selected_cellar_id,accessToken:this.state.access_token}),r.a.createElement("section",{className:"controls col-12 row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(s.a,((e={previousLabel:"anterior",nextLabel:"siguiente",breakLabel:"...",breakClassName:"break-me",pageCount:3,forcePage:this.state.current_page,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageClassName:"page-item",pageLinkClassName:"page-link"}).breakClassName="page-item",e.breakLinkClassName="page-link",e.activeClassName="active",e))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"search",className:"col-sm-2 col-form-label"},"SKU"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",placeholder:"ingrese sku",className:"form-control",id:"search"})))),r.a.createElement("div",{className:"col-4 offset-md-4 row"},r.a.createElement(i.b,{selected_cellar_id:this.state.selected_cellar_id,onPickerClear:this.handlePickerClear}),r.a.createElement("button",{type:"button",className:"btn btn-success btn-block float-right"},"imprimir"),r.a.createElement(h,{selectedCellar:this.state.selected_cellar_id,accessToken:this.state.access_token,onOrderGenerated:this.handlePickerClear}))))))},a}(a.Component)},201:function(e,t,n){"use strict";n(204);var a=new function e(){var t=this;if(this.set=function(e,n,a){t.data&&t.data.hasOwnProperty(e)&&""!==t.data[e]||(t.data[e]={}),0===a?delete t.data[e][n]:t.data[e][n]=a,"undefined"!=typeof window&&window.localStorage&&localStorage.setItem("picker-data",JSON.stringify(t.data))},this.get=function(e,n){if(!t.data||!t.data.hasOwnProperty(e))return 0;if(void 0===n)return t.data[e];var a=parseInt(t.data[e][n]);return isNaN(a)?0:a},this.clear=function(e){t.data&&t.data.hasOwnProperty(e)&&(t.data[e]=void 0,delete t.data[e],"undefined"!=typeof window&&window.localStorage&&localStorage.setItem("picker-data",JSON.stringify(t.data)))},!e.instance){var n;try{"undefined"!=typeof window&&window.localStorage&&(n=JSON.parse(localStorage.getItem("picker-data")))}catch(a){console.log(a)}this.data=n||{},e.instance=this}return e.instance};Object.freeze(a),"undefined"!=typeof window&&window.StockLoader&&(window.StockLoader,window.Loader.prototype.performRequest=function(e,t){var n=this;n.instances>n.max_instances?setTimeout(function(){n.performRequest(e,t)},100):(this.instances+=1,fetch("https://apibodegas.loadingplay.com/v1/cellar/"+e+"/product/?sku_list="+t.join(","),{headers:{Authorization:"Bearer "+this.access_token}}).then(function(e){return e.json()}).then(function(t){n.instances-=1,n.callback(e,t.products)}))});n(38),n(13);var r=n(200),o=n.n(r);n(199);function s(e,t,n,a,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void n(i)}c.done?t(l):Promise.resolve(l).then(a,r)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function c(e){s(o,a,r,c,l,"next",e)}function l(e){s(o,a,r,c,l,"throw",e)}c(void 0)})}}var l=function(e){var t=this;this.loadCellars=c(o.a.mark(function e(){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://apibodegas.loadingplay.com/v1/cellar",{headers:{Authorization:"Bearer "+t.access_token}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}},e)})),this.loadProducts=function(){var e=c(o.a.mark(function e(n,a){var r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://replenishments.loadingplay.com/replenishment?items=100&page="+n+"&cellar_id="+a,{headers:{Authorization:"Bearer "+t.access_token}});case 2:return r=e.sent,e.next=5,r.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),this.access_token=e};n(29),n(30),n(50);function i(e,t,n,a,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void n(i)}c.done?t(l):Promise.resolve(l).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function s(e){i(o,a,r,s,c,"next",e)}function c(e){i(o,a,r,s,c,"throw",e)}s(void 0)})}}var d=function e(t){var n=this;this.create=function(){var t=u(o.a.mark(function t(a){var r,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.API_URL+"/v1/order?",{method:"POST",headers:{Authorization:"Bearer "+n.access_token,"Content-Type":"application/x-www-form-urlencoded"},body:n._convertToQueryString(a)});case 2:return r=t.sent,t.next=5,r.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),this.update=function(){var t=u(o.a.mark(function t(a,r){var s,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.API_URL+"/v1/order/"+a,{method:"PUT",headers:{Authorization:"Bearer "+n.access_token,"Content-Type":"application/x-www-form-urlencoded"},body:n._convertToQueryString(r)});case 2:return s=t.sent,t.next=5,s.json();case 5:return c=t.sent,t.abrupt("return",c);case 7:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),this._convertToQueryString=function(e){return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")},this.access_token=t};d.API_URL="https://apibodegas.loadingplay.com",n.d(t,"b",function(){return a}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return d})},202:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),o=n(201);var s=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleUpdate=function(){o.b.set(n.props.cellar_id,n.props.sku,n.state.q)},n.handlePlus=function(){n.setState({q:n.state.q+1},n.handleUpdate)},n.handleMinus=function(){n.state.q<=0||n.setState({q:n.state.q-1},n.handleUpdate)},n.handleChange=function(e){var t=parseInt(e.target.value);isNaN(t)||n.setState({q:t},n.handleUpdate)},n.render=function(){return r.a.createElement("div",{className:"btn-toolbar mb-3",role:"toolbar","aria-label":"Toolbar with button groups"},r.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"First group"},r.a.createElement("button",{type:"button",onClick:n.handleMinus,className:"btn btn-outline-secondary"},"-"),r.a.createElement("input",{type:"text",className:"form-control text-center",onChange:n.handleChange,value:n.state.q}),r.a.createElement("button",{type:"button",onClick:n.handlePlus,className:"btn btn-outline-secondary"},"+")))},n.state={q:o.b.get(n.props.cellar_id,n.props.sku)},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a}(r.a.Component)},203:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a);var o=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",{className:"login_wrapper"},e)},a}(a.Component)},205:function(e,t,n){"use strict";var a=n(202),r=n(0),o=n.n(r),s=n(201);var c=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleClear=function(){s.b.clear(n.props.selected_cellar_id),n.props.onPickerClear()},n.render=function(){return o.a.createElement("button",{type:"button",onClick:n.handleClear,className:"btn btn-danger btn-block float-right"},"limpiar picker")},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a}(o.a.Component);c.defaultProps={onPickerClear:function(){}};n(203);var l=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleLogout=function(){document.location.href="https://accounts.loadingplay.com/auth/logout?next=http://localhost:8000"},t.render=function(){return o.a.createElement("a",{type:"button",onClick:t.handleLogout,className:"float-right"},"Salir")},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a}(o.a.Component);n.d(t,"c",function(){return a.a}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return l})}}]);
//# sourceMappingURL=component---src-pages-dashboard-dashboard-jsx-9bf18d40af071a33460b.js.map