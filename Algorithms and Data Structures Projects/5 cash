/*
Design a cash register drawer function checkCashRegister() that
accepts purchase price as the first argument (price), payment
as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return
an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer
is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer
as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the
change due in coins and bills, sorted in highest to lowest
order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {

    var change=cash-price;
    var data=[];
    var solution={status:"OPEN",change: []};
    var return_money=cid;
    var sol_return=[];

    //Convert input so words are now numbers and can be evaluated
    data.push([100,cid[8][1]]);
    data.push([20,cid[7][1]]);
    data.push([10,cid[6][1]]);
    data.push([5,cid[5][1]]);
    data.push([1,cid[4][1]]);
    data.push([0.25,cid[3][1]]);
    data.push([0.1,cid[2][1]]);
    data.push([0.05,cid[1][1]]);
    data.push([0.01,cid[0][1]]);

    //Get to the correct starting value
    let note_val=0;
    while(data[note_val][0]>change && note_val<9 && change>0){
      note_val++;
    }

    while(change>0 && note_val<9){
      while(data[note_val][1]>0 && change>0 && change>=data[note_val][0]){
        change=change-data[note_val][0];
        change=change.toFixed(2);
        data[note_val][1]=(data[note_val][1]-data[note_val][0]).toFixed(2);
      }
      note_val++;
    }

    //Not enough money in the cid
    if(change!=0){
      solution.status="INSUFFICIENT_FUNDS";
      return solution;
    }

    //if all of cid==0 set status to closed
    let state="ZERO";
    for(let i=0;i<9;i++){
      if(data[i][1]!=0){
        state="CASH";
      }
    }
    if (state=='ZERO'){
      solution.status="CLOSED";
      solution.change=cid;
      return solution;
    }

    //After working out the change
    //Update the values in the cid array
    return_money[8][1]=(cid[8][1]-data[0][1]).toFixed(2);
    return_money[7][1]=(cid[7][1]-data[1][1]).toFixed(2);
    return_money[6][1]=(cid[6][1]-data[2][1]).toFixed(2);
    return_money[5][1]=(cid[5][1]-data[3][1]).toFixed(2);
    return_money[4][1]=(cid[4][1]-data[4][1]).toFixed(2);
    return_money[3][1]=(cid[3][1]-data[5][1]).toFixed(2);
    return_money[2][1]=(cid[2][1]-data[6][1]).toFixed(2);
    return_money[1][1]=(cid[1][1]-data[7][1]).toFixed(2);
    return_money[0][1]=(cid[0][1]-data[8][1]).toFixed(2);

    //reverse array

    return_money.reverse();


    for(let i in return_money){
      return_money[i][1]=Number(return_money[i][1]);
    }

    //filters out empty values in array
    for(let i=0;i<9;i++){
      if(return_money[i][1]!=0){
        sol_return.push(return_money[i])
      }
    }

    solution.change=sol_return;
    console.log(solution);
    return solution;
}

/*
checkCashRegister(19.5, 20,
  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
  ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
);
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}


checkCashRegister(3.26, 100,
  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
  ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
);
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

checkCashRegister(19.5, 20,
  [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
  ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
  ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
);
//should return {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20,
[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
["QUARTER", 0], ["ONE", 1], ["FIVE", 0],
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//should return {status: "INSUFFICIENT_FUNDS", change: []}
*/
checkCashRegister(19.5, 20,
  [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
  ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
  ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
);
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
