Vue.component('PemainBola', {
    template: `
        <div>
            <penjaga-gawang v-for="(goalKeeper, index) in listGoalKeeper" :key=index>
                {{ goalKeeper.nama }} -- {{ goalKeeper.pensiun ? 'Pensiun' : 'Aktif' }}
            </penjaga-gawang>
        </div>
    `,
    data: function() {
        return {
            listGoalKeeper: [
                { nama: 'Fabien Barthez', pensiun: true },
                { nama: 'Alisson Becker', pensiun: false },
                { nama: 'Peter Schmeichel', pensiun: true },
                { nama: 'Kasper Schmeichel', pensiun: false },
                { nama: 'Thibaut Courtois', pensiun: false },
                { nama: 'Gianluga Pagliuca', pensiun: true },
                { nama: 'David De Gea', pensiun: false },
            ]
        }
    }
});

Vue.component('PenjagaGawang', {
    template: `
        <li>
            <slot></slot>
        </li>
    `
});
new Vue({
    el: '#app'
});