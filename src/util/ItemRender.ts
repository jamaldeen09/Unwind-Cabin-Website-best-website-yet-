import { starRating } from "./Icons"
export const navLinks: string [] = [
    "Our cabins",
    "Get inspired",
    "Gift a stay",
    "About us",
]

export const starStyles = [
    {
        icon: starRating,
        styles: "p-2 flex justify-center items-center text-white text-md starColor bg-green-500",
    },
    {
        icon: starRating,
        styles: "p-2 flex justify-center items-center text-white text-md starColor  bg-green-500",
    },
    {
        icon: starRating,
        styles: "p-2 flex justify-center items-center text-white text-md starColor  bg-green-500",
    },
    {
        icon: starRating,
        styles: "p-2 flex justify-center items-center text-white text-md starColor  bg-green-500",
    }
]

interface CardInfo {
    cardLocation: string,
    cardTitle: string,
    cardPrice: string,
    cardDescription: string,
    cardUrl: string
}

export const cardInformation: CardInfo[] = [
    {
        cardLocation: "HAMPSHIRE.ENGLAND",
        cardTitle: "Rustic country retreat",
        cardPrice: "£210",
        cardDescription: `Step outside and take in the stunning\nviews.Our cabin sits on a quiet and\nsecluded property,providing the perfect\nsetting for a peaceful retreat`,
        cardUrl: "https://blog.nature.org/wp-content/uploads/2018/09/tnc_74469051_preview_cropped.jpg"
    },
    
    {
        cardLocation: "NORFOLK.ENGLAND",
        cardTitle: "Cozy getaway cabin",
        cardPrice: "£312",
        cardDescription: "Step outside and take in the stunning\nviews.Our cabin sits on a quiet and\nsecluded property,providing the perfect\nsetting for a peaceful retreat",
        cardUrl: "https://media.istockphoto.com/id/121669473/photo/old-cabin-in-the-smokies.jpg?s=612x612&w=0&k=20&c=U5a4i548WpqrBuIQtBW97xIcRqSr_OmITaxtNLd7cTU="
    },

    {
        cardLocation: "HAMPSHIRE.ENGLAND",
        cardTitle: "Rustic country retreat",
        cardPrice: "£210",
        cardDescription: "Step outside and take in the stunning\nviews.Our cabin sits on a quiet and\nsecluded property,providing the perfect\nsetting for a peaceful retreat",
        cardUrl: "https://media.istockphoto.com/id/135565559/photo/photo-of-a-rustic-house-on-the-woods.jpg?s=612x612&w=0&k=20&c=a_dXNd5oF0HpiSoJ015FEz0Jt7p3kWJKkoI1G_7NZ88="
    },
]

interface thirdSecInfo {
    lovelyTxt: string,
    title: string,
    description: string
    url: string
}

export const thirdSecinfo: thirdSecInfo[] = [
    {
        lovelyTxt: "FOR THOSE WHO LOVE",
        title: "To Explore nature",
        description: "Discover some of the most beautiful\nscenery - from the wonders of\nSnowdania to the famous beauty of\nthe Scottish Highlands.",
        url: "https://t4.ftcdn.net/jpg/07/01/12/35/360_F_701123557_heCZ66lyTWQNObx4SvogIw2jw2SY35wH.jpg"
    },

    {
        lovelyTxt: "FOR THOSE WHO WANT",
        title: "To Relax, rest & re-set",
        description: "Experience mind and body connection\nthrough breathing exercises and\nrelaxation with our Yoga inspired get\naway for you.",
        url: "https://images.squarespace-cdn.com/content/v1/64215ea3b299371803db25a8/baf411ba-1217-461b-bb0e-116be0770a52/spring+bridget.jpg"
    },

    {
        lovelyTxt: "FOR THOSE WHO HAVE",
        title: "Four-legged friends",
        description: "When going on holiday nobody wants\nto put their dog in a kennel. So, lets\nkeep the family yogether without our\npet friendly cabins.",
        url: "https://i.pinimg.com/originals/ca/c9/b5/cac9b54e98f2f9b53b3159141d4e1450.jpg"
    },
]

interface ListItems {
    title: string,
    item1: string,
    item2: string,
}

export const freqAsked: ListItems[] = [
    {
        title: "About Unwind Cabins",
        item1: "How long have you been in business?",
        item2: "Why did you start this journey?",
    },

    {
        title: "Tell me more about the cabin",
        item1: "What do I need to bring",
        item2: "How do i get to the cabin",
    },

    {
        title: "Pets, family & friends",
        item1: "Please tell me i can bring my dog",
        item2: "How many people do you cabins sleep?",
    },
]


export const footerInfo = [
  {
    title: "About Us",
    info: [
        "Our story",
        "Why us",
        "How it works",
        "FAQ"
    ],
  },

  {
    title: "Our cabins",
    info: [
        "North of London",
        "Golden Hideaway",
        "Oak Treehouse",
        "Acacia Retreat",
        "Blue Lagoon"
    ],
    infoSecond: [
        "South of London",
        "Lavendar Retreat",
        "Butterfly Treehouse",
        "Mahogany Hideaway",
    ] 
  },
]

export const footerSecondInfo = [
    {
        title: "Get inspired",
        info: [
            {
                txt: "Explore nature",
                styling: "text-green-200",
            },

            {
                txt: "Hiking trails",
                styling: "text-white",
            },

            {
                txt: "Swimming",
                styling: "text-white",
            },

            {
                txt: "Fishing",
                styling: "text-white",
            },

            {
                txt: "Booting",
                styling: "text-white",
            },

            {
                txt: "Cycling",
                styling: "text-white",
            },
        ],
        info2: [
            {
                txt: "Rest, relax and re-set",
                styling: "text-green-200",
            },

            {
                txt: "Spa treatments",
                styling: "text-white",
            },

            {
                txt: "Hot rubs",
                styling: "text-white",
            },

            {
                txt: "Nature Trails",
                styling: "text-white",
            },
        ]
    }
]

export const footerThirdInfo = {
    firsPart: [
        {
            txt: "Great food and drink",
            styles: "text-green-200"
        },
    
        {
            txt: "Pubs",
            styles: "text-white"
        },
    
        {
            txt: "Resturants",
            styles: "text-white"
        },
    
        {
            txt: "Food markets",
            styles: "text-white"
        },
    
        {
            txt: "Picnics",
            styles: "text-white"
        },
    ],
   
    secondPart: [
        {
            txt: "For you and yours",
            styles: "text-green-200"
        },
    
        {
            txt: "Solo or a couple",
            styles: "text-white"
        },
    
        {
            txt: "Pet friendly",
            styles: "text-white"
        },
    
        {
            txt: "Accessible cabins",
            styles: "text-white"
        },
    ]
}

export const foorterFourthInfo = {
    title: "Support",
    info: [
        "Help",
        "Contact Us",
        "Privacy Policy",
        "Terms of Services",
        "Complaints Policy",
    ]
}