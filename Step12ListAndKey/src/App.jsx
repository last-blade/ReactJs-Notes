



/*
arr1 = ["CSK", "KKR", "RCB"];
arr2 = ["CSK", "KKR", "RCB", "MI"];

-->oopar 2 aarray di huyi hain.....virtual dom jo hai arr2 ko arr1 se compare karega....pehle arr2 ke first element ko
arr1 ke first element se compare karega and dono same element hain, similarly dekhegea ki arr2 ka "RCB" element jo hai arr1 mein hai..
fir dekhega ki arr2 kaa "MI" element jo hai arr1 mein hai hi nahin toh fir kewal "MI" element ko hi add karega arr1 mein, naa ki
poori arr1 ko firse rewrite karega, toh yahi faayeda hai virtual dom kaa......


-->but ek case mein yeh fail ho sakta hai....see below:-
arr1 = ["CSK", "KKR", "RCB"];
arr2 = ["MI", "CSK", "KKR", "RCB"];

Virtual dom pehle mtach karega arr2 ke first element ko arr1 ke first element se (i.e., MI ko CSK se) but dono element alag hain
dir dekhega arr2 ki second element ko arr1 ke second element se match karega (CSK ko KKR se) but dono hi alaga hain....similary aage
bhi same hi hoga, arrr2 ke third element "KKR" ko arr1 ke third element "RCB" se match karega but dono alaga hain, Virtual dom
dekhega ki poori array hi alag hai, kyoki koi bhi element match nahin ho raha hai....lekin hum human ki nazar se dekhenge toh humein
dikh raha hai ki arr2 mein kewal "MI" element add hai extra, baaki sab toh arr1 or arr2 ke elements same hi hain, lekin virtual
dom jo hai first element se match karta hua chal raha hai isliye usko alag lag rahin hain dono arrays......toh hum iske liye 
ek solution karenge ki har ek value ko uski key provide karayenge jisse ki pata chal sake ki yeh element pehle se exist karta
hai ki nahin....or aise vitual dom fail nahin hoga or poori arr1 ko re-render karne ki need nahin hogi....tabhi toh
step11 mein humne dekha ki usmein error show kar raha tha yeh wali (Warning: Each child in a list should have a unique "key" prop.)

Solution below:-
You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:
Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important
if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what
exactly has happened, and make the correct updates to the DOM tree.
*/


function App() {
  const IPLteams = ["CSK", "KKR", "MI", "RCB", "CSK"];
  const ans = IPLteams.map((x, index) => <h1 key={index}>{x} and key is: {index}</h1>); /* har ek element ko maine unique key dedi hai..and woh unique
                                                                    key humne index number hi de diya hai */
  return (
    <>
      {ans};
    </>
  )
}

export default App
