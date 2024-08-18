import {reactive} from 'vue';

export const store = reactive({
    trip: {
        name: 'Germany',
        stops: [
            {
                name: 'test',
                date: '08-15-2024'
            }
        ]
    }
})