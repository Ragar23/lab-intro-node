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

  get(pos) {
    if (pos > this.items.length){
      throw new Error('OutOfBounds');
    }

    return this.items[pos]
  
  }

  max() {
    let highestValue = 0
    for (let i = 0; i <= this.items.length; i++){
      if (highestValue < this.items[i]) {
        highestValue = this.items[i]
      }  
    }

    if (this.items == 0){
      throw new Error('EmptySortedList')

    }
    return highestValue
    
    
  }

  min() {
    let minimumValue = this.items[0] 
    for (let i = 0; i <= this.items.length; i++){
      if (minimumValue > this.items[i]){
        minimumValue = this.items[i]
      }
    }
    if (this.items == 0){
      throw new Error('EmptySortedList')

    }

    return minimumValue

  }

  sum() {}

  avg() {}
}

/*let sortedList = new SortedList()
sortedList.add(1)
console.log(this.items)*/


module.exports = SortedList;
