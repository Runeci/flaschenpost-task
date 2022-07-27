export interface Beverage {
    readonly id: number,
    readonly brandName: string,
    readonly name: string,
    readonly descriptionText?: string,
    readonly articles: Articles[],
}

interface Articles {
    readonly id: number,
    readonly shortDescription: string,
    readonly price: number,
    readonly unit: string,
    readonly pricePerUnitText: string,
    readonly image: string,
}
