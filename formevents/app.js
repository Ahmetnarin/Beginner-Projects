

// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});


const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const btag = document.createElement('b');
    btag.append(username);
    newTweet.append(btag);
    newTweet.append(`- ${tweet}`);
    console.log(newTweet);
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function(e){
    // console.log("clicked on ul");
    // console.log(e);
    // tweetsContainer.remove();
    e.target.nodeName === 'LI' && e.target.remove();
})

