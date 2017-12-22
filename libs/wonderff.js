
var Wonder = function(props){
	Hammer.call(this, props);
}

function TransMethod(){
}

TransMethod.prototype = Hammer.prototype;

Wonder.prototype = new TransMethod();

Wonder.prototype.constructor = Wonder;

Wonder.prototype.css = function( param1, param2 ){    
    if (typeof param1 === 'object') {
        for (attr in param1) {
            this.element.style[attr] = param1[attr];
        }
        return this;
        
    } else if (param2 === undefined) {
        return getComputedStyle(this.element)[param1];
    } else {
        this.element.style[param1] = param2;
        return this;
    } 
};

Wonder.prototype.attr = function(param1,param2){   
    if (typeof param1 === 'object') {
        for (attr in param1) {
            this.element.style[attr] = param1[attr];
            this.element.setAttribute(attr, param1[attr])
        }
        return this;
        
    } else if (param2 === undefined) {
        return this.element.getAttribute(param1);
    } else {
        this.element.setAttribute(param1, param2);
        return this;
    } 
};


Wonder.prototype.html = function(param){   
    if (param === undefined) {
        return this.element.innerHTML;
    } else {
        this.element.innerHTML = param;
    };
    return this;
};

console.dir(new Wonder(document.querySelector("html")));