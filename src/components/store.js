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
                date: new Date("2024-08-12"),
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
                paragraph: 'Bad Mergentheim is a town in the Main-Tauber-Kreis district in the German state of Baden-Württemberg. The best-known sight of Bad Mergentheim is the Deutschordensschloss, the castle where the Teutonic Knights once had their home base. It is a complex of buildings built over a period of eight hundred years. The city is also a recognized spa-town hosting the Solymar Therme, a wellness center with thermal baths, saunas, and a sports pool.',
                coordinates: [9.789023, 49.493649],
                img: [
                    'https://media.spar-mit.com/image-handler/media/dms/e97d4fc291aeb92bafa1226d27287fd95cef3d7e/w1024_0.055-0-0.945-0.591/Bad%20Mergentheim%20c%20Mathias%20Hollerbach%20%282%29.jpeg',
                    'https://mein.toubiz.de/api/v1/media/4679daf9-631c-4a6f-9815-e1e4aebdac0a/view',
                    'https://solymar-therme.de/fileadmin/templates/images/gallery/3.jpg'
                ],
                notes: '',
            },
            {
                id: 2,
                name: 'Wildpark Bad Mergentheim',
                date: new Date("2024-08-24"),
                description: 'One of the most species-rich wildparks in Europe',
                paragraph: 'The Bad Mergentheim wildlife park is one of the most species-rich wildlife parks in Europe and boasts over 50 species of animals on a total area of ​​35 hectares. There is hardly any wire mesh, cages or bars here; almost all enclosures are built as open-view enclosures with barely perceptible boundaries. Naturalness and species-appropriate animal husbandry are our top priority. We use mostly natural materials for the enclosures and facilities and ensure that all measures are ecologically compatible.',
                coordinates: [9.796944, 49.468333],
                img: [
                    'https://www.blicklokal.de/wp-content/uploads/2017/09/Wildpark-Bad-Mergentheim-Wolf-W%C3%B6lfe-mit-Welpen.jpg',
                    'https://www.wildtierpark.de/templates/yootheme/cache/b1/200707-Fischotter-dreht-sich-um_MG_0932-b10283f9.jpeg',
                    'https://www.lokalmatador.de/fileadmin/user_upload/Lokalmatador/Artikel/Ausflugsziele/Tierparks-Zoos/Bad-Mergentheim/Wildpark-Bad-Mergentheim/Tierparks-und-Zoos-Wildpark-Bad-Mergentheim4.jpg',
                    'https://www.wiwa-lokal.de/wp-content/uploads/2013/08/Wildpark-Bad-Mergentheim-Luchs-zwei-auf-schr%C3%A4gem-Stamm.jpg',
                    'https://www.wiwa-lokal.de/wp-content/uploads/2013/08/Wildpark-Bad-Mergentheim-Geier-Foto-Harald-Grunwald.jpg',
                    'https://www.wildtierpark.de/images/Wildpark/Oeffnungszeiten/0098-Luchs-in-Pusteblumen_86A7388.jpg'

                ],
                notes: '',
            },
            {
                id: 3,
                name: 'Würzburg',
                date: new Date("2024-08-17"),
                description: 'The third largest city in Franconia',
                paragraph: 'Würzburg is a city in Germany\'s Bavaria region. It\'s known for lavish baroque and rococo architecture, particularly the 18th-century Residenz palace, with ornate rooms, a huge fresco by Venetian artist Tiepolo and an elaborate staircase. Home to numerous wine bars, cellars and wineries, Würzburg is the center of the Franconian wine country, with its distinctive bocksbeutel (bottles with flattened round shapes).',
                coordinates: [9.926119, 49.793314],
                img: [
                    'https://www.annees-de-pelerinage.com/wp-content/uploads/2019/11/old-town-w%C3%BCrzburg-cover.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marienberg_wuerzburg.jpg/1200px-Marienberg_wuerzburg.jpg',
                    'https://traveladdicts.net/wp-content/uploads/2014/09/German-Wurzburg-old-town-Domstrasse.jpg',
                    'https://www.ikea.com/images/ikea-wuerzburg-a1600bf0ff9266cd3cdfed57ad794732.jpg?f=xl'
                ],
                notes: '',
            },
            {
                id: 4,
                name: 'Buchen',
                date: new Date("2024-08-31"),
                description: 'A town in Baden-Württemberg built around an ancient roman wall',
                paragraph: 'This charming little town hosts The Buchener Schützenmarkt (Buchen Shooting Market) the first week of September, a traditional folk festival for the entire region, that combines colorful market activity with cheerful folk entertainment. As is often the case in rural areas, social life in Buchen is mainly supported by local clubs. The oldest club is the Schützen-Corps, founded in 1822 as a citizens\' guard. Eight years later, the initial September festival shooting became the Schützenmarkt - to this day one of the largest regional folk festivals with thousands of visitors from near and far.',
                coordinates: [9.327405, 49.520771],
                img: [
                    'https://mein.toubiz.de/api/v1/article/87299deb-4e2b-4c6b-b160-d36d3ef1cfa1/mainImage?format=image/jpeg&width=1900',
                    'https://www.limesstrasse.de/fileadmin/_processed_/c/6/csm_BW_-_Buchen_-_Neu_Galerie_-_Luftaufnahme_Buchener_Innenstadt__c__anatoli.photography_cd02694c12.jpg',
                    'https://www.main-echo.de/storage/image/4/1/7/1/5471714_original2560_1zX9HW_VYXHUK.jpg',
                    'https://www.buchen.de/images/tourismus/highlights-buchen/schuetzenmarkt/bildergalerie/buchener_schuetzenmarkt_05.jpg'

                ],
                notes: '',
            },
        ]
    }
})