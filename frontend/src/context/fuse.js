let options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "user",
      "coupon"
    ]
  };
  let fuse = new Fuse(list, options); // "list" is the item array
  let result = fuse.search()//grab from ui