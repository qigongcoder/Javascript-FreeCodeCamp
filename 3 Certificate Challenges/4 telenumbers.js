/*
Return true if the passed string looks like a valid US phone number.

For this challenge you will be presented with a string
such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to
validate or reject the US phone number based on any
combination of the formats provided above. The area code
is required. If the country code is provided, you must
confirm that the country code is 1. Return true if the
string is a valid US phone number; otherwise return false.
*/


function telephoneCheck(str) {

  let res=true;
  let arr = str.split("");
  let uni=[];

  arr.forEach(char_to_unicode);
  function char_to_unicode(item, index) {
    uni.push(item.charCodeAt(0))
  }

  let num_of_num=0;
  uni.forEach(count_num);
  function count_num(item, index) {
    if(item>=48 && item<=57){
      num_of_num++;
    }
  }

  if(!(num_of_num == 10 || num_of_num ==11)){
    res=false;
  }

  if(num_of_num == 11 && uni[0]!=49){
    res=false;
  }

  let open_b=uni.findIndex(check_open_brack);
  let close_b=uni.findIndex(check_close_brack);

  if(open_b!=-1 && close_b==-1){
    res=false;
  }

  if(open_b!=-1 && close_b!=-1 && close_b<open_b){
    res=false;
  }

  if(open_b!=-1 && close_b!=-1 && close_b>6){
    res=false;
  }

  if(close_b!=-1 && open_b==-1){
    res=false;
  }

  function check_open_brack(val){
    if(val==40)
      return true;
  }
  function check_close_brack(val){
    if(val==41)
      return true;
  }

  let bad_val=uni.findIndex(check_for_bad_val);
  function check_for_bad_val(val){
    if(val==48 ||
      val==49 ||
      val==50 ||
      val==51 ||
      val==52 ||
      val==53 ||
      val==54 ||
      val==55 ||
      val==56 ||
      val==57 ||
      val==45 ||
      val==32 ||
      val==40 ||
      val==41){
      return false;
    }else{
      return true;
    }
  }

  if (bad_val!=-1){
    res=false;
  }

  return res;

}

telephoneCheck("(555)555-5555")
telephoneCheck("1 555-555-5555")
telephoneCheck("14567894444");
telephoneCheck("1 456 789 4444");


