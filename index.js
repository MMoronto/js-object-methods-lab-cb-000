class President {
  constructor(name, poiticalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }
  
  veto() {
    return "NO!";
  }
  
  passBill() {
    return "You can do that!";
  }
  
  doCharity() {
    return "I like to help People."
  }
  
  conductPressInterview() {
    return "I am proud to be an American."
  }
  
  sayHi() {
    return "Hi, my name is <name>. I am from <homestate>. I represent the <politicalParty>s, and was in office <yearsInOffice>."
  }
}
