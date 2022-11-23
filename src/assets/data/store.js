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
})