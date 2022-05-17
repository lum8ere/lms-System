import { makeAutoObservable } from "mobx"

export default class SubObjectStore {
    constructor() {
        this._subobjects = [
            {id: 1, name: "Тест тема", img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`},
            {id: 2, name: "Тест тема", img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`},
            {id: 3, name: "Тест тема", img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`},
            {id: 4, name: "Тест тема", img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`},
            {id: 5, name: "Тест тема", img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`},
            {id: 6, name: "Тест тема", img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`},
            {id: 7, name: "Тест тема", img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`}
        ]
        this._files = [
            {id: 1, pfd: `https://vk.cc/cd726z`}
        ]
        this._selectedDirections = {}
        makeAutoObservable(this)
    }

    setObject(subobject) {
        this._subobjects = subobject;
    }

    setFile(file) {
        this._file = file;
    }

    get subobjects() {
        return this._subobjects;
    }

    get files() {
        return this._files;
    }

    get selectedDirections() {
        return this._selectedDirections;
    }
}