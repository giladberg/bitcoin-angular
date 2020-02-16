import MoveModel from './move.model'

export default class UserModel {
    public _id: string=this._makeId()
    constructor(
         public  name: string,
         public coin:number,
         public moves:MoveModel[]
         ) { 
    }

    private _makeId?(length = 10) {
        let txt = ''
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return txt
    }
}

