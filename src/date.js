function Cat(name) {
    this.name = name;
    console.log(this);
  }
  let cat = new Cat(12); // Cat {name: "felix"}