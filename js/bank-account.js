"use strict";
var accountInfoList = [];
const bankModule = (function () {
    const createAccount = function (name, deposit) {
        let acct;
        for(let i=0; i<accountInfoList.length; i++){
            if(accountInfoList[i].name === name){
                acct = accountInfoList[i];
            }
        }

        if(!acct){
            acct = {
                name: name,
                balance: deposit
            };
            accountInfoList.push(acct);
        }else {
            acct.balance += deposit;
        }
    };

    return {
        createAccount: createAccount
    }
})();

const btnCreateAcct = document.getElementById("btnCreateAcct");
btnCreateAcct.onclick = function () {
    const accountsArea = document.getElementById("accountsArea");
    const inputAcctName = document.getElementById("acctName");
    const inputDeposit = document.getElementById("deposit");
    const areValid = validateFields(inputAcctName, inputDeposit);
    if(!areValid) return;

    let acctName = inputAcctName.value;
    let deposit = parseFloat(inputDeposit.value);

    bankModule.createAccount(acctName, deposit);
    //accountsArea.value = "hgdvwabjbhd";
    let str = '';
    for(let i=0; i<accountInfoList.length; i++){
        let obj = accountInfoList[i];
        str += "Account name: " + obj.name + "  Balance: " + obj.balance + "\n";
    }
    accountsArea.value = str;
};

function validateFields(acctName, deposit) {
    if(!acctName.value || !deposit.value){
        window.alert("Both fields are required!");
        return false;
    }
    if(parseFloat(deposit.value) <= 0){
        alert("Positive value is required!");
        return false;
    }
    return true;
}