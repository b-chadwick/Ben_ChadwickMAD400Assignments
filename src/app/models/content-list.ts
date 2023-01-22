import { IContent } from "./icontent";

export class ContentList {
    private _items: IContent[];
    
    constructor(){
        this._items = [];
    }

    get contentList(): IContent[]{
        return this._items;
    }

    addContent(content: IContent){
        this._items.push(content);
    }

    listLength(){
        return this._items.length;
    }
}
