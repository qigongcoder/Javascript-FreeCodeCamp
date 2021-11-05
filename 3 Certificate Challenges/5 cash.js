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

    data.push([100,cid[8][1]]);
    data.push([20,cid[7][1]]);
    data.push([10,cid[6][1]]);
    data.push([5,cid[5][1]]);
    data.push([1,cid[4][1]]);
    data.push([0.25,cid[3][1]]);
    data.push([0.1,cid[2][1]]);
    data.push([0.05,cid[1][1]]);
    data.push([0.01,cid[0][1]]);

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

    if(change!=0){
      solution.status="INSUFFICIENT_FUNDS";
      return solution;
    }

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

    return_money[8][1]=(cid[8][1]-data[0][1]).toFixed(2);
    return_money[7][1]=(cid[7][1]-data[1][1]).toFixed(2);
    return_money[6][1]=(cid[6][1]-data[2][1]).toFixed(2);
    return_money[5][1]=(cid[5][1]-data[3][1]).toFixed(2);
    return_money[4][1]=(cid[4][1]-data[4][1]).toFixed(2);
    return_money[3][1]=(cid[3][1]-data[5][1]).toFixed(2);
    return_money[2][1]=(cid[2][1]-data[6][1]).toFixed(2);
    return_money[1][1]=(cid[1][1]-data[7][1]).toFixed(2);
    return_money[0][1]=(cid[0][1]-data[8][1]).toFixed(2);

    return_money.reverse();


    for(let i in return_money){
      return_money[i][1]=Number(return_money[i][1]);
    }

    for(let i=0;i<9;i++){
      if(return_money[i][1]!=0){
        sol_return.push(return_money[i])
      }
    }

    solution.change=sol_return;
    return solution;
}

checkCashRegister(19.5, 20,
  [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
  ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
  ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
);
