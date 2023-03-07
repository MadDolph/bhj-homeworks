const interest = document.querySelectorAll('.interest__check');
let interestArray = Array.from(interest);
let rootInterest = [];
for(el of interestArray) {
    console.log(el.parentNode.parentNode.parentNode.parentNode);
}
