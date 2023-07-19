
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false; 
      this._ratings = []; 
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

    addRating(number) {
        this._ratings.push(number); 
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings)
        this._author = author 
        this._pages = pages; 
    }

    get author() {
        return this._author
    }

    get pages() {
        return this._pages
    }
  }

  class Movie extends Media {
    constructor(director, title, runTime, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings) 
        this._director = director; 
        this._runTime = runTime; 
    }
    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime; 
    }
  }

  class CD extends Media {
    constructor(artist, isCheckedOut, ratings, songs) {
        super(isCheckedOut, ratings)
        this._artist = artist; 
        this._songs = songs; 
    }

    get artist() {
        return this._artist; 
    }

    get songs() {
        return this._songs; 
    }
  }