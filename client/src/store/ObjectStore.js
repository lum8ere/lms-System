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
        this._object = [
            {id: 1, name: "Test", img: `https://vk.cc/cd71Zg`}
        ]
        this._file = [
            {id: 1, pfd: `https://vk.cc/cd726z`}
        ]
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

    get group() {
        return this._group;
    }

    get directions() {
        return this._directions;
    }

    get object() {
        return this._object;
    }

    get file() {
        return this._file;
    }
}