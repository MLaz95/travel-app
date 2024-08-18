import {reactive} from 'vue';

export const store = reactive({
    trip: {
        name: 'Southern Germany',
        stops: [
            {
                name: 'Miltenberg',
                date: new Date("2024-08-17"),
                description: 'A charming town in Bavaria that sits on the left bank of the river Main.',
                img: 'https://miltenberg.info/wp-content/uploads/2021/02/DREI-AM-MAIN-Miltenberg-von-oben-l-%C2%A9-Holger-Leue.jpg',
                notes: '',
                active: false,
            },
            {
                name: 'Test',
                date: new Date("2024-08-17"),
                description: 'A charming town in Bavaria that sits on the left bank of the river Main.',
                img: 'https://miltenberg.info/wp-content/uploads/2021/02/DREI-AM-MAIN-Miltenberg-von-oben-l-%C2%A9-Holger-Leue.jpg',
                notes: '',
                active: false,
            },
            {
                name: 'Test',
                date: new Date("2024-08-17"),
                description: 'A charming town in Bavaria that sits on the left bank of the river Main.',
                img: 'https://miltenberg.info/wp-content/uploads/2021/02/DREI-AM-MAIN-Miltenberg-von-oben-l-%C2%A9-Holger-Leue.jpg',
                notes: '',
                active: false,
            }
        ]
    }
})