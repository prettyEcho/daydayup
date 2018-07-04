var template = `
    <div @click="add">
        {{count}}
    </div>
`;

Vue.component('my-count', {
    template,
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count++;
        }
    }
})