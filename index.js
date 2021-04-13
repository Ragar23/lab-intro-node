class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item) {
    //push and sort
      this.items.push(item) 
      this.items.sort((elem1, elem2)=>{
        if (elem1 > elem2){
          return 1 
        }
        else if (elem1 < elem2){
          return -1
        }
        else {
          return 0
        }

      })    
     this.length++
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

/*let sortedList = new SortedList()
sortedList.add(1)
console.log(this.items)*/


module.exports = SortedList;
