
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

    set isCheckedOut(value) {
        this._isCheckedOut = value; 
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

       // can also be implemented that way => this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(number) {
        if (number > 0 && number < 6) {
          this._ratings.push(number)
        } else {
          return `Please input a number between 1 and 5`
        }
        
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
        super(title)
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
    constructor(director, title, runTime) {
        super(title) 
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
    constructor(artist, title, songs) {
        super(title)
        this._artist = artist; 
        this._songs = songs; 
    }

    get artist() {
        return this._artist; 
    }

    get songs() {
        return this._songs; 
    }

    shuffle() {
        const shuffledSongs = this._songs; 
      
        // Fisher-Yates shuffle algorithm
        for (let i = shuffledSongs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
        }
      
        return shuffledSongs;
    }
  }

  // creating and instance of Book and testing some methods
  let fictionBook = new Book('Paulo Coelho', 'The Alchemist', 167, false); 
  fictionBook.addRating(4)
  fictionBook.addRating(5)
  fictionBook.addRating(6)
  console.log(fictionBook.getAverageRating());

  //creating an instance of Movie and testing some methods 
  let dramaMovie = new Movie('Frank Darabont', 'The Shawshank Redemption', 142) 
  console.log(dramaMovie); 
  console.log(dramaMovie.toggleCheckOutStatus()); 
  console.log(dramaMovie.toggleCheckOutStatus()); 

  //creating an instance of CD and testing some methods 
  const Jacksongs = [
    "Better Together",
    "Never Know",
    "Banana Pancakes",
    "Good People",
    "No Other Way",
    "Sitting, Waiting, Wishing",
    "Staple It Together",
    "Situations",
    "Crying Shame",
    "If I Could"
  ];
  let softCD = new CD('Jack Johnson', 'In Between Dreams', Jacksongs)
  console.log(softCD);
  console.log(softCD.songs[2])

  console.log(softCD.addRating(5));
  console.log(softCD.shuffle()); 