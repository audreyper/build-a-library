class Media {
    constructor(title, isCheckedOut, ratings) {
      this._title = title;
      this._isCheckedOut = isCheckedOut; 
      this._ratings = ratings; 
    }
    get title() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut
    }
    get ratings() {
      return this._ratings
    }
    getAverageRating() {
    const average = this._ratings.reduce((acc, currVal) => {return acc + currVal })
    return average/this._ratings.length
    }
    toggleCheckOutStatus() {
      this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true; 
      return this._isCheckedOut; 
    }
  }
  
  