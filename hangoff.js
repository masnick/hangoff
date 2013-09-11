// http://stackoverflow.com/questions/3387427/javascript-remove-element-by-id
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

setInterval(function() {
  document.getElementById("content").remove();
  document.getElementById("gb").remove();
}, 10000);