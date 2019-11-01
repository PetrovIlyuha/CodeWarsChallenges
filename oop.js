function UserCreator(name, score){
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function(){
  function add1(){
    this.score++
  }
  add1()
}