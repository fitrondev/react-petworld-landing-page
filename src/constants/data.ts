import { Features } from "./image";

type FeaturesProps = {
    id: number,
    title: string,
    desc: string,
    img: string,
};

export const Feature: FeaturesProps[] = [
    {
        id: 1,
        title: "Best quality pet food",
        desc: "Super delicious food. Available in a range of delicious flavors.",
        img: Features.PetFood,
    },
    {
        id: 2,
        title: "Toys & Accessories",
        desc: "Soft toys, chew toys, and rope toys. Strong, interactive, and fun.",
        img: Features.Accessories,
    },
    {
        id: 3,
        title: "Pets medical care",
        desc: "You can get a wide range of great treatments for your dog.",
        img: Features.Medical,
    },
    {
        id: 4,
        title: "Full service grooming",
        desc: "It's the right time to groom your dog with a variety of treatments.",
        img: Features.Grooming,
    },
];

import { Brands } from "./image";

type BrandsProps = {
    id: number,
    img: string,
};

export const Brand: BrandsProps[] = [
    {
        id: 1,
        img: Brands.Nestle,
    },
    {
        id: 2,
        img: Brands.Apple,
    },
    {
        id: 3,
        img: Brands.Beco,
    },
    {
        id: 4,
        img: Brands.Amazon,
    },
    {
        id: 5,
        img: Brands.Google,
    },
    {
        id: 6,
        img: Brands.Walmart,
    },
];