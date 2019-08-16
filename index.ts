import unirest from 'unirest'

var req = unirest("POST", "https://yodish.p.rapidapi.com/yoda.json");

req.query({
  "text": "Master Obiwan has lost a planet."
});

req.headers({
  "x-rapidapi-host": "yodish.p.rapidapi.com",
  "x-rapidapi-key": "6cb49c45bbmsha972f4f58457a05p11a8d0jsnc92a525d2ac0",
  "content-type": "application/x-www-form-urlencoded"
});

req.form({});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});