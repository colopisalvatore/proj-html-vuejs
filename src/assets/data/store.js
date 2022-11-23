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
})