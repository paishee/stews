const Stew = require('../index.js');
const Soup = require('@stews/soup');
const Noodle = require('@stews/noodle');


module.exports = function __form(object, splitter) {
    
    // fixes uninitiated class
    if (object instanceof Function) object = new object();


        /* == MISC == */
    

    // if instance is a stew or soup
    // gets content of the stew/soup
    if (object instanceof Stew || object instanceof Soup) {
        object = object.insides;
    }


    // if instance is a noodle
    // gets content of the noodle
    if (object instanceof Noodle) {
        object = object.content;
    }


    // if object is not given
    // defaults to a blank list type
    if (!object) {
        this.insides = new Set();
        this.type = "list";
    }


    // if instance is a string
    // check for matching stuff
    else if (typeof object == "string") {
        [ this.insides, this.type ] = 

        // list
        ( ["set", "array", "list", "arr"].includes(object.toLowerCase()) ) ? [
            new Set(),      // insides
            "list"   // type
        ] :

        // object
        ( ["map", "object", "pair", "obj"].includes(object.toLowerCase()) ) ? [
            new Map(),      // insides
            "pair"   // type
        ] :

        // neither
        [ new Set(object.split(splitter)), "list" ]
    }



    // if instance is a number
    // turn into string then split
    else if (typeof object == "number") {
        object = object.toString().split("").map( (value) => { return Number(value) } );
        this.insides = new Set(object);
        this.type = "list";
    }


        /* == TYPES == */

        
    // if instance is an array
    // nothing rlly interesting happens
    else if (object instanceof Array) {
        this.insides = new Set(object);
        this.type = "list";
    }


    // if instance is a set
    // turn the set into an array
    else if (object instanceof Set) {
        this.insides = object;
        this.type = "list";
    }


    // if instance is a map
    // turn the map into an object
    else if (object instanceof Map) {
        this.insides = object
        this.type = "pair";
    }


    // if instance is an object
    // nothing rlly interesting happens again
    else if (object instanceof Object) {
        this.insides = new Map(Object.entries(object));
        this.type = "pair";
    }
}
