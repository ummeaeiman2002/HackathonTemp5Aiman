import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Product {
    discountPercentage: number;
    tags: any;
    productName: any;
    imageUrl: string | StaticImport;
    _id : string;
    title : string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description? : string;
    slug : {
        _type : "slug"
        current : string;
    };
    isNew : boolean;
    

}