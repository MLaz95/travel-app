import {reactive} from 'vue';

export const store = reactive({
    trip: {
        name: 'Southern Germany',
        currentSlide: 0,
        active: 0,
        stops: [
            {
                id: 0,
                name: 'Miltenberg',
                date: new Date("2024-08-17"),
                description: 'A charming town in Bavaria that sits on the left bank of the river Main.',
                paragraph: 'The small Franconian town of Miltenberg is called "the Pearl of the Main". It got its name thanks to its beautiful location in the bend of the river and elegant half-timbered buildings. Germany’s oldest hotel is located in one of them. Its walls remember Commander Wallenstein and King of Sweden Gustav II Adolf. Visitors to Miltenberg describe it as “fairy", "toy", "a fairy tale on the Main" in their reviews.',
                img: [
                    'https://miltenberg.info/wp-content/uploads/2021/02/DREI-AM-MAIN-Miltenberg-von-oben-l-%C2%A9-Holger-Leue.jpg',
                    'https://www.miltenberg.de/media/38251/tmbk-zum-riesen-holger-leue.jpg?anchor=center&mode=max&width=1500&height=1500',
                    'https://www.miltenberg.de/media/72606/miltenberg-im-april-1742009-hq-foto-roland-schoenmueller.jpg?center=0.58641975308642,0.504098360655738&mode=max&width=1500&height=1500',
                    'https://www.miltenberg.de/media/39093/2017-07-21_miltenberger-stimmungen-c-bernd-ullrich-mainblende-15.jpg?center=0.389655172413793,0.506896551724138&mode=max&width=1500&height=1500',
                ],
                coordinates: [9.26725, 49.70452],
                notes: '',
            },
            {
                id: 1,
                name: 'Bad Mergentheim',
                date: new Date("2024-08-17"),
                description: 'A spa-town on the Tauber in the Franconian northeast of Baden-Württemberg.',
                paragraph: '',
                coordinates: [9.789023, 49.493649],
                img: [
                    'https://media.spar-mit.com/image-handler/media/dms/e97d4fc291aeb92bafa1226d27287fd95cef3d7e/w1024_0.055-0-0.945-0.591/Bad%20Mergentheim%20c%20Mathias%20Hollerbach%20%282%29.jpeg',
                ],
                notes: '',
            },
        ]
    }
})