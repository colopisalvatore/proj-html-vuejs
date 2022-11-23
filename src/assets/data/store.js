import { reactive } from "vue";

export const store = reactive ({
    projectList: [
        {
            name: "Purinky Products",
            href: "/purinky",
            img: "project-dry",
            description: "Digital Experience"
        },
        {
            name: "Satisfy Poster",
            href: "/satisfy",
            img: "project-satisfy",
            description: "Branding Strategy"
        },
        {
            name: "Basket of Flower",
            href: "/basket",
            img: "project-basket",
            description: "Branding Strategy" 
        },
        {
            name: "Mock Up",
            href: "/mockup",
            img: "project-mockup",
            description: "Digital Experience"
        }
    ],

    productList: [
        {
            name: "Designing",
            type: "process",
            price: 40,
            descriptionList: [
                {
                    title: "Creative",
                    description: "Design Enabled"
                },
                {
                    title: "Vibrant",
                    description: "Color Usage"
                },
                {
                    title: "Eye",
                    description: "Catching Design"
                },
                {
                    title: "Extreme",
                    description: "Typografy"
                },
                {
                    title: "Exceptional",
                    description: "Design"
                },
            ]
        },
        {
            name: "Developing",
            type: "productt",
            price: 60,
            descriptionList: [
                {
                    title: "Creative",
                    description: "Design Enabled"
                },
                {
                    title: "Vibrant",
                    description: "Color Usage"
                },
                {
                    title: "Eye",
                    description: "Catching Design"
                },
                {
                    title: "Extreme",
                    description: "Typografy"
                },
                {
                    title: "Exceptional",
                    description: "Design"
                },
            ]
        },
        {
            name: "Supporting",
            type: "clients",
            price: 80,
            descriptionList: [
                {
                    title: "Creative",
                    description: "Design Enabled"
                },
                {
                    title: "Vibrant",
                    description: "Color Usage"
                },
                {
                    title: "Eye",
                    description: "Catching Design"
                },
                {
                    title: "Extreme",
                    description: "Typografy"
                },
                {
                    title: "Exceptional",
                    description: "Design"
                },
            ]
        }
    ],

    blogLists: [
        {
            img: "blog",
            name: "Paul",
            message: {
                date: "April 21, 2019",
                title: "Amazon gets CCI nod to acquire 49% stake in",
                description: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface ."
            }
        },
        {
            img: "",
            name: "Paul",
            message: {
                date: "April 21, 2019",
                title: "Clearing Corporations get SEBI nod to invest in overnight funds",
                description: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface ."
            }
        },
        {
            img: "",
            name: "Paul",
            message: {
                date: "April 21, 2019",
                title: "Shabnam Dhillion, wife of RSSB chief Gurinder Dhillon, passes away in London",
                description: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface ."
            }
        }
    ],

    testimonialList: [
        {
            fullName: "Michkel Angel",
            employment: "Marketing Managment",
            urlImg: "Michkel-Angel",
            rating: 3,
            comment: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand "
        },
        {
            fullName: "Fabiola Angel",
            employment: "Marketing Managment",
            urlImg: "Fabiola-Angel",
            rating: 3,
            comment: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand "
        },
        {
            fullName: "Federica Angel",
            employment: "Marketing Managment",
            urlImg: "Federica-Angel",
            rating: 3,
            comment: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand "
        }
    ],
})