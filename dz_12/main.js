function Field(width, height){
    this.n =  width || 10;
    this.m = height || 10;

}

var f = new Field();

Field.prototype.field = function(){
    arr = [];
    for(i = 0; i < this.n; i++){
        arr[i] =[]
        for(j = 0; j < this.m; j++){
            arr[i][j] = 0;
        }
    }

    this.list = arr;
}

console.log(f.field());

Field.prototype.renderField = function (separator){
    if(!separator) separator = '<hr/>';
    this.separator = separator || '<hr/>';
    document.write(separator);
    for(var i = 0; i < this.list.length; i++){
        for(var j = 0; j < this.list[i].length; j++){
            
            document.write(this.list[i][j] + ' ');
        }
        document.write('<br />');
    }
    document.write(separator);

}
console.log(f.renderField());

Field.prototype.clearField = function(){
    for(i = 0; i < this.list; i++){
        for(j = 0; j <  this.list; j++){
            this.list[i][j] = 10;
        }
    } 
    console.log(this.list);
}

// console.log(f.clearField());




function Person(name, XPosition, YPosition, position){
    this.name = name || 'First';
    this.x = XPosition || 1;
    this.y = YPosition || 1;
    position = position || this.list;
    

}

// Field.prototype = Object.create(Person.prototype);

// var p = new Person();

// Person.prototype.start = function(){
//     console.log(this.list); 
//     for(var i = 0; i < this.list.length; i++){
//         for(var j = 0; j < this.list[i].length; j++){
//            this.list[this.y][this.x];
//         }
//     }

// }

// console.log(p.start());