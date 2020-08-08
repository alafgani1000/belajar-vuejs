Vue.component('kota',{
    template: `<li>
        <slot></slot>
    </li>`
});

new Vue({
    el: '#app'
});