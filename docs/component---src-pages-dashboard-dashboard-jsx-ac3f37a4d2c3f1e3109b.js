(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(198),s=a.n(o),c=(a(199),new function e(){var t=this;if(this.set=function(e,a,n){t.data&&t.data.hasOwnProperty(e)&&""!==t.data[e]||(t.data[e]={}),0===n?delete t.data[e][a]:t.data[e][a]=n,"undefined"!=typeof window&&window.localStorage&&localStorage.setItem("picker-data",JSON.stringify(t.data))},this.get=function(e,a){if(!t.data||!t.data.hasOwnProperty(e))return 0;if(void 0===a)return t.data[e];var n=parseInt(t.data[e][a]);return isNaN(n)?0:n},this.clear=function(e){t.data&&t.data.hasOwnProperty(e)&&(t.data[e]=void 0,delete t.data[e],"undefined"!=typeof window&&window.localStorage&&localStorage.setItem("picker-data",JSON.stringify(t.data)))},!e.instance){var a;try{"undefined"!=typeof window&&window.localStorage&&(a=JSON.parse(localStorage.getItem("picker-data")))}catch(n){console.log(n)}this.data=a||{},e.instance=this}return e.instance});Object.freeze(c);var l="undefined"!=typeof window&&window;void 0===l&&(function(e){throw new Error('"'+e+'" is read-only')}("windowGlobal"),l=function(){l.StockLoader=function(){},l.Loader=function(){}});var i=l.StockLoader;l.Loader.prototype.performRequest=function(e,t){var a=this;a.instances>a.max_instances?setTimeout(function(){a.performRequest(e,t)},100):(this.instances+=1,fetch("https://apibodegas.loadingplay.com/v1/cellar/"+e+"/product/?sku_list="+t.join(","),{headers:{Authorization:"Bearer "+this.access_token}}).then(function(e){return e.json()}).then(function(t){a.instances-=1,a.callback(e,t.products)}))};a(38),a(13);var u=a(196),p=a.n(u);a(195);function d(e,t,a,n,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void a(i)}c.done?t(l):Promise.resolve(l).then(n,r)}function m(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function s(e){d(o,n,r,s,c,"next",e)}function c(e){d(o,n,r,s,c,"throw",e)}s(void 0)})}}var h=function(e){var t=this;this.loadCellars=m(p.a.mark(function e(){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://apibodegas.loadingplay.com/v1/cellar",{headers:{Authorization:"Bearer "+t.access_token}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)})),this.loadProducts=function(){var e=m(p.a.mark(function e(a,n){var r,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://replenishments.loadingplay.com/replenishment?items=100&page="+a+"&cellar_id="+n,{headers:{Authorization:"Bearer "+t.access_token}});case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),this.access_token=e};a(29),a(30),a(50);function f(e,t,a,n,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void a(i)}c.done?t(l):Promise.resolve(l).then(n,r)}function v(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function s(e){f(o,n,r,s,c,"next",e)}function c(e){f(o,n,r,s,c,"throw",e)}s(void 0)})}}var _=function e(t){var a=this;this.create=function(){var t=v(p.a.mark(function t(n){var r,o;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.API_URL+"/v1/order?",{method:"POST",headers:{Authorization:"Bearer "+a.access_token,"Content-Type":"application/x-www-form-urlencoded"},body:a._convertToQueryString(n)});case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),this.update=function(){var t=v(p.a.mark(function t(n,r){var o,s;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.API_URL+"/v1/order/"+n,{method:"PUT",headers:{Authorization:"Bearer "+a.access_token,"Content-Type":"application/x-www-form-urlencoded"},body:a._convertToQueryString(r)});case 2:return o=t.sent,t.next=5,o.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),this._convertToQueryString=function(e){return Object.keys(e).map(function(t){return t+"="+e[t]}).join("&")},this.access_token=t};_.API_URL="https://apibodegas.loadingplay.com";var g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleUpdate=function(){c.set(a.props.cellar_id,a.props.sku,a.state.q)},a.handlePlus=function(){a.setState({q:a.state.q+1},a.handleUpdate)},a.handleMinus=function(){a.state.q<=0||a.setState({q:a.state.q-1},a.handleUpdate)},a.handleChange=function(e){var t=parseInt(e.target.value);isNaN(t)||a.setState({q:t},a.handleUpdate)},a.render=function(){return r.a.createElement("div",{className:"btn-toolbar mb-3",role:"toolbar","aria-label":"Toolbar with button groups"},r.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"First group"},r.a.createElement("button",{type:"button",onClick:a.handleMinus,className:"btn btn-outline-secondary"},"-"),r.a.createElement("input",{type:"text",className:"form-control text-center",onChange:a.handleChange,value:a.state.q}),r.a.createElement("button",{type:"button",onClick:a.handlePlus,className:"btn btn-outline-secondary"},"+")))},a.state={q:c.get(a.props.cellar_id,a.props.sku)},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n}(r.a.Component);var b=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleClear=function(){c.clear(a.props.selected_cellar_id),a.props.onPickerClear()},a.render=function(){return r.a.createElement("button",{type:"button",onClick:a.handleClear,className:"btn btn-danger btn-block float-right"},"limpiar picker")},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n}(r.a.Component);b.defaultProps={onPickerClear:function(){}};a(197);var y=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleLogout=function(){document.location.href="https://accounts.loadingplay.com/auth/logout?next=http://localhost:8000"},t.render=function(){return r.a.createElement("a",{type:"button",onClick:t.handleLogout,className:"float-right"},"Salir")},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n}(r.a.Component);a(200),a(201);function k(e,t,a,n,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void a(i)}c.done?t(l):Promise.resolve(l).then(n,r)}var E=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleNewStatus=function(e){"error"===e.status?a.setState({error_message:e.message}):a.setState({products:e.replenishments,error_message:""})},a.loadInventory=function(){var e,t=(e=p.a.mark(function e(t,n){var r,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({products:null}),r=new h(a.props.accessToken),e.next=4,r.loadProducts(n,t);case 4:o=e.sent,a.handleNewStatus(o),o.replenishments&&a.loadStoreInventory(t,o.replenishments);case 7:case"end":return e.stop()}},e)}),function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function s(e){k(o,n,r,s,c,"next",e)}function c(e){k(o,n,r,s,c,"throw",e)}s(void 0)})});return function(e,a){return t.apply(this,arguments)}}(),a.loadStoreInventory=function(e,t){if(void 0!==t){var n=t.map(function(e){return e.sku});i(a.props.accessToken).load([e],n).done(function(e,t){if(a.state.products){var n=a.state.products.map(function(e,a){var n=t.find(function(t){return e.sku===t.product_sku});return void 0===e.current_inventory&&(e.current_inventory=void 0!==n?n.balance_units:void 0),e});a.setState({products:n})}})}},a.componentWillReceiveProps=function(e){0!==e.selectedCellar&&a.loadInventory(e.selectedCellar,e.currentPage+1)},a.renderProductList=function(){return a.props.selectedCellar?""!==a.state.error_message?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6",className:"stock-message"},a.state.error_message)):a.state.products?0===a.state.products.length?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6"},"No hay productos sugeridos en esta tienda")):a.state.products.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},e.sku),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,void 0===e.current_inventory?"cargando...":e.current_inventory),r.a.createElement("td",null,e.suggested),r.a.createElement("td",null,r.a.createElement(g,{cellar_id:a.props.selectedCellar,sku:e.sku})))}):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6",className:"stock-message"},"Cargando...")):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6",className:"stock-message"},"Seleccione una bodega"))},a.state={products:null,error_message:""},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("section",{className:"stores_wrapper col-12"},r.a.createElement("table",{className:"table table-sm"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-info"},r.a.createElement("th",{scope:"col"},"sku"),r.a.createElement("th",{scope:"col"},"nombre"),r.a.createElement("th",{scope:"col"},"stock bodega"),r.a.createElement("th",{scope:"col"},"stock tienda"),r.a.createElement("th",{scope:"col"},"sugerido"),r.a.createElement("th",{scope:"col"},"picker"))),r.a.createElement("tbody",null,this.renderProductList())))},n}(n.Component);a(39),a(202);function w(e,t,a,n,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void a(i)}c.done?t(l):Promise.resolve(l).then(n,r)}var N=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).loadCellars=function(){var e,t=(e=p.a.mark(function e(t){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new h(t),e.next=3,n.loadCellars();case 3:r=e.sent,a.setState({cellars:r.cellars});case 5:case"end":return e.stop()}},e)}),function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function s(e){w(o,n,r,s,c,"next",e)}function c(e){w(o,n,r,s,c,"throw",e)}s(void 0)})});return function(e){return t.apply(this,arguments)}}(),a.state={cellars:null,selected_id:0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentWillReceiveProps=function(e){""!==e.access_token&&this.loadCellars(e.access_token)},o.render=function(){var e=this,t=this.state.cellars?this.state.cellars.map(function(t,a){return r.a.createElement("tr",{key:a,className:e.state.selected_id===t.id?"stores_selected":""},r.a.createElement("td",{onClick:function(){e.setState({selected_id:t.id}),e.props.cellarSelected(t.id)}},t.name))}):r.a.createElement("tr",null,r.a.createElement("td",null,"Cargando..."));return r.a.createElement("section",{className:"stores_wrapper"},r.a.createElement("table",{className:"table table-hover table-borderless table-sm"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-info"},r.a.createElement("th",{scope:"col"},"tiendas"))),r.a.createElement("tbody",null,t)))},n}(n.Component);function C(e,t,a,n,r,o,s){try{var c=e[o](s),l=c.value}catch(i){return void a(i)}c.done?t(l):Promise.resolve(l).then(n,r)}function S(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function s(e){C(o,n,r,s,c,"next",e)}function c(e){C(o,n,r,s,c,"throw",e)}s(void 0)})}}var P=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this)._generateOrderData=function(){var e,t;return e=c.get(a.props.selectedCellar),t=Object.keys(e).map(function(t){return{sku:t,price:0,name:"",combination:"",quantity:e[t]}}),{origin:"replenishments",payment_type:"guia",products:JSON.stringify(t)}},a._sendShippedOrder=S(p.a.mark(function e(){var t,n,r,o;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=new _(a.props.accessToken),n=a._generateOrderData(),e.next=4,o.create(n);case 4:if("success"!==(t=e.sent).status){e.next=9;break}return r=t.order.id,e.next=9,o.update(r,{status:"despachado"});case 9:case"end":return e.stop()}},e)})),a.handleClick=S(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({button_status:n.Statusses.GENERATING}),e.next=3,a._sendShippedOrder();case 3:c.clear(a.props.selectedCellar),a.props.onOrderGenerated(),a.setState({button_status:n.Statusses.DONE}),setTimeout(function(){a.setState({button_status:n.Statusses.IDLE})},5e3);case 7:case"end":return e.stop()}},e)})),a.getMessage=function(){var e;return a.state.button_status===n.Statusses.IDLE?e="generar guía":a.state.button_status===n.Statusses.GENERATING?e="generando...":a.state.button_status===n.Statusses.DONE&&(e="guía enviada"),e},a.render=function(){return r.a.createElement("button",{type:"button",disabled:a.state.button_status!==n.Statusses.IDLE,onClick:a.handleClick,className:"btn btn-primary btn-block float-right"},a.getMessage())},a.state={button_status:n.Statusses.IDLE},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n}(r.a.Component);P.Statusses={IDLE:0,GENERATING:1,DONE:2},P.defaultProps={onOrderGenerated:function(){}},a.d(t,"default",function(){return x});var x=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleSelectedCellar=function(e){a.setState({selected_cellar_id:e})},a.handlePageClick=function(e){a.setState({current_page:e.selected})},a.handlePickerClear=function(){a.setState({selected_cellar_id:a.state.selected_cellar_id,current_page:0})},a.componentDidMount=function(){var e=window.localStorage.getItem("access_token");a.setState({access_token:e})},a.state={access_token:"",selected_cellar_id:0,current_page:0},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e;return r.a.createElement("div",{className:"container dashboard_wrapper"},r.a.createElement("div",{className:"dashboard_elements row"},r.a.createElement("h3",{className:"dashboard_title col-12"},"Reposición de inventario."),r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{className:"subtitle"},"1. Seleccion de tienda"),r.a.createElement(N,{access_token:this.state.access_token,cellarSelected:this.handleSelectedCellar})),r.a.createElement("div",{className:"col-10 row"},r.a.createElement("div",{className:"subtitle col-6"},"2. Pedidos"),r.a.createElement("div",{className:"col-6"},r.a.createElement(y,null)),r.a.createElement(E,{currentPage:this.state.current_page,selectedCellar:this.state.selected_cellar_id,accessToken:this.state.access_token}),r.a.createElement("section",{className:"controls col-12 row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(s.a,((e={previousLabel:"anterior",nextLabel:"siguiente",breakLabel:"...",breakClassName:"break-me",pageCount:3,forcePage:this.state.current_page,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageClassName:"page-item",pageLinkClassName:"page-link"}).breakClassName="page-item",e.breakLinkClassName="page-link",e.activeClassName="active",e))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"search",className:"col-sm-2 col-form-label"},"SKU"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",placeholder:"ingrese sku",className:"form-control",id:"search"})))),r.a.createElement("div",{className:"col-4 offset-md-4 row"},r.a.createElement(b,{selected_cellar_id:this.state.selected_cellar_id,onPickerClear:this.handlePickerClear}),r.a.createElement("button",{type:"button",className:"btn btn-success btn-block float-right"},"imprimir"),r.a.createElement(P,{selectedCellar:this.state.selected_cellar_id,accessToken:this.state.access_token,onOrderGenerated:this.handlePickerClear}))))))},n}(n.Component)},197:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n);var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",{className:"login_wrapper"},e)},n}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-dashboard-dashboard-jsx-ac3f37a4d2c3f1e3109b.js.map