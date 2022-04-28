import { makeAutoObservable } from "mobx"

export default class ObjectStore {
    constructor() {
        this._group = [
            {id: 1, name: "191-Ч091"},
            {id: 2, name: "180-Ч025"}
        ]
        this._directions = [
            {id: 1, name: "ИВТ"},
            {id: 2, name: "Строители"}
        ]
        this._objects = [
            {id: 1, name: "Тест предмет", img: `https://sun9-62.userapi.com/s/v1/if2/f7axPjAZMl7_lXNZVqjCU7nW1VWus-VEXY3LVuiCjrIy3h1qTJuP8Qtr9ss2xV4vikm9-MSgiyyH1uW2ahfQMRDt.jpg?size=750x750&quality=96&type=album`}
        ]
        this._files = [
            {id: 1, pfd: `https://vk.cc/cd726z`}
        ]
        this._selectedDirections = {}
        makeAutoObservable(this)
    }

    setGroup(group) {
        this._group = group;
    }

    setDirections(directions) {
        this._directions = directions;
    }

    setObject(object) {
        this._object = object;
    }

    setFile(file) {
        this._file = file;
    }

    setSelectedDirections(direction) {
        this._selectedDirections = direction;
    }

    get group() {
        return this._group;
    }

    get directions() {
        return this._directions;
    }

    get objects() {
        return this._objects;
    }

    get files() {
        return this._files;
    }

    get selectedDirections() {
        return this._selectedDirections;
    }
}