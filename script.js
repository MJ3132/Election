

var campaign = function (name,partyColor){

var politician = {};
politician.name = name;
politician.electionResults = null;
politician.totalVotes = 0;
politician.partyColor = partyColor;

// tally up votes

politician.tallyVotes = function () {
  this.totalVotes = 0;
  for ( var i = 0; i < this.electionResults.length; i++){
      this.totalVotes = this.totalVotes +this.electionResults[i];
    }

  }

  return politician;
};

// create politicians

var flo = campaign ("Flo Florrick",[132, 17, 11]);
var jane= campaign ("Jane Doesitall",[245, 141, 136]);

// adding new parameter rgb partyColor to factory function, make sure the property is assigned correctly
console.log("these are Mr.Florrick's party color: " + flo.partyColor);
console.log("these are Mrs. Doesitall's party color:" + jane.partyColor);


// votes per state of each politician


flo.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jane.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];


// state votes fixes of each candidate

flo.electionResults [9] = 1;
jane.electionResults [9] = 28;

flo.electionResults [4] = 17;
jane.electionResults [4] = 38;

flo.electionResults [43] = 11;
jane.electionResults [43] = 27;


// state results

var setStateResults = function(state) {
    theStates[state].winner = null;
    if (flo.electionResults[state] > jane.electionResults[state]) {
    theStates[state].winner = flo;
  } else if (flo.electionResults[state]  < jane.electionResults[state]) {
    theStates[state].winner = jane;
  }
  var stateWinner = theStates[state].winner;
   if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor;
   } else {
      theStates[state].rgbColor = [11,32,57];
   }


// state table results

var stateInfoTable = document.getElementById("stateResults");


var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];

var candidate1 = body.children[0].children[0];
var results1 = body.children[0].children[1];

var candidate2 = body.children[1].children[0];
var results2 = body.children[1].children[1];

var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = theStates[state].nameAbbrev;

candidate1.innerText = flo.name;
results1.innerText = flo.electionResults[state];

candidate2.innerText = jane.name;
results2.innerText = jane.electionResults[state];


  if (theStates[state].winner === null){
  winnersName = "draw"

  } else {
  winnersName.innerText = theStates[state].winner.name;
  }
};





// calling the method for each politician, add below the code that updates the electionResults arrays

flo.tallyVotes();
jane.tallyVotes();

//console log total votes
console.log("Flo Florrick has: " + flo.totalVotes + " votes!");
console.log("Jane Doesitall has: " + jane.totalVotes + "votes!");




// declaring the winner (conditions)

var winner;
  if (flo.totalVotes > jane.totalVotes){
   winner = flo.name;
  }else if (jane.totalVotes > flo.totalVotes){
   winner = jane.name;
  }else {
   winner = "draw"
  }

  console.log("Candidate " + winner + " is the winner!" )


// country results total (top table)

var countryInfoTable = document.getElementById("countryResults");

var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = flo.name;
row.children[1].innerText = flo.totalVotes;
row.children[2].innerText = jane.name;
row.children[3].innerText = jane.totalVotes;
row.children[5].innerText = winner;




console.log(this.winner + " just won the election!");
