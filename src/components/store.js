import {reactive} from 'vue';

export const store = reactive({
    trip: {
        name: 'Southern Germany',
        active: 0,
        stops: [
            {
                name: 'Miltenberg',
                date: new Date("2024-08-17"),
                description: 'A charming town in Bavaria that sits on the left bank of the river Main.',
                img: 'https://miltenberg.info/wp-content/uploads/2021/02/DREI-AM-MAIN-Miltenberg-von-oben-l-%C2%A9-Holger-Leue.jpg',
                coordinates: [9.26725, 49.70452],
                notes: '',
            },
            {
                name: 'Bad Mergentheim',
                date: new Date("2024-08-17"),
                description: 'A spa-town on the Tauber in the Franconian northeast of Baden-Württemberg.',
                coordinates: [9.789023, 49.493649],
                img: 'https://media.spar-mit.com/image-handler/media/dms/e97d4fc291aeb92bafa1226d27287fd95cef3d7e/w1024_0.055-0-0.945-0.591/Bad%20Mergentheim%20c%20Mathias%20Hollerbach%20%282%29.jpeg',
                notes: '',
            },
        ]
    }
})