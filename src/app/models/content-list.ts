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
        let htmlContent = `<h2>{{content.name}} #{{content.id}}</h2>
        <figure>
            <img src='{{content.imgsrc}}' alt='{{content.name}}>
            <figcaption>{{content.description}}</figcaption>
        </figure>`;
        return htmlContent;
    }
}
