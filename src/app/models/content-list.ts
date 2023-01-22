import { IContent } from "./icontent";

export class ContentList {
    private _items: IContent[];
    
    public constructor(){
        this._items = [];
    }

    get contentList(): IContent[]{
        return this._items;
    }

    addContent(content: IContent){
        this._items.push(content);
    }

    listLength(): number{
        return this._items.length;
    }

    toString(index: number): string{
        let content: IContent = this._items[index];
        let zero = ""
        if (content.id < 10){
             zero = "00";
        }else if (content.id < 100){
             zero = "0";
        }
        let htmlContent = `<h2>${content.name} #${zero}${content.id}</h2>
        <figure>
            <img src="${content.imgSrc}" alt="${content.name}">
            <figcaption>${content.description}</figcaption>
        </figure>`;
        return htmlContent;
    }
}
