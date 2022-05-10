import LocalStorage from "./LocalStorage";

const storageContain = LocalStorage.create({
    content: [
        {
            id: '1',
            title: 'Book #1',
            description: 'Book',
            seen: false,
            notes: '',
            available: false,
        },{
            id: '2',
            title: 'Book #2',
            description: 'Book',
            seen: false,
            notes: '',
            available: false,
        },
    ]
})

export default storageContain