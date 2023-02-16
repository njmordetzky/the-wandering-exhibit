let username = 'njmordetzky'
let followers = [], followings = []
try {
  let res = await fetch(`https://www.instagram.com/${username}/?__a=1`)

  res = await res.json()
  let userId = res.graphql.user.id

  let after = null, has_next = true
  while (has_next) {
    await fetch(`https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=` + encodeURIComponent(JSON.stringify({
      id: userId,
      include_reel: true,
      fetch_mutual: true,
      first: 50,
      after: after
    }))).then(res => res.json()).then(res => {
      has_next = res.data.user.edge_followed_by.page_info.has_next_page
      after = res.data.user.edge_followed_by.page_info.end_cursor
      followers = followers.concat(res.data.user.edge_followed_by.edges.map(({ node }) => {
        return {
          username: node.username,
          full_name: node.full_name,
          media_type: node.media_type
        }
      }))
    })
  }
  console.log('Followers', followers)

  has_next = true
  after = null
  while (has_next) {
    await fetch(`https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables=` + encodeURIComponent(JSON.stringify({
      id: userId,
      include_reel: true,
      fetch_mutual: true,
      first: 50,
      after: after
    }))).then(res => res.json()).then(res => {
      has_next = res.data.user.edge_follow.page_info.has_next_page
      after = res.data.user.edge_follow.page_info.end_cursor
      followings = followings.concat(res.data.user.edge_follow.edges.map(({ node }) => {
        return {
          username: node.username,
          full_name: node.full_name,
          media_type: https://graph.facebook.com/v13.0/17895695668004550?fields=id
        }
      }))
    })
  }
  console.log('Followings', followings)
} catch (err) {
  console.log('Invalid username')
}

https://api.instagram.com/v1/users/{user-id}/media/recent?access_token={access-token}


window._sharedData.config.viewer.id

user_token
IGQVJXZAjJmTGhabTdicXRLMUlPR2ZAKVUl4MHd5MVZAfb3ZALSFpRbDMxVTZAhT3FCR0I1NEpvZAUNPYk9mSldvVEM3eC1JdjFSdjc2SjNSZA3EtZATBqUG9WSTFsbkhYMVVxMDhLVEpxWGk0WkNOUDRXWk5iUwZDZD


public class SocialFeedService {
  private readonly string instagramBaseAPIUrl = "https://graph.instagram.com/";

  public IEnumerable<InstagramMediaContent> GetInstagramContents(string userToken) {
    using(var client = new HttpClient()) {
      try {
        string queryUrl = $"me/media?fields=id,username,timestamp,caption,media_url,media_type,permalink&access_token={userToken}";
        string fullUrl = $"{this.instagramBaseAPIUrl}{queryUrl}";

    client.DefaultRequestHeaders.Accept.Clear();
    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

    var response = client.GetStringAsync(new Uri(fullUrl)).Result;

    if (!string.IsNullOrEmpty(response)) {
      var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
      var result = serializer.Deserialize < InstagramMediaContentResult > (response);
      return result.Data;
    }

    return new List < InstagramMediaContent > ();
  }
  catch(Exception ex) {
    throw ex;
  }
}
  }
}


<script>
window.fbAsyncInit = function () {
  FB.init({
    appId: '1006914519923929',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v13.0'
  });
};
</script>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>

<script>
window.fbAsyncInit = function () {
  FB.init({
    appId: '{your-app-id}',
    cookie: true,
    xfbml: true,
    version: '{api-version}'
  });

  FB.AppEvents.logPageView();

};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

Paste this into a browser to get an authorization code 
its short lived and will be valid for 1 hour only,
  When code expires just paste the URL in again to generate a new one
https://www.instagram.com/oauth/authorize?client_id=509631933891140&redirect_uri=https://nathanielmordetzky.com/&scope=user_profile,user_media&response_type=code

get the code from the URL youre redirected to: code = { this is your authorization code }#
https://nathanielmordetzky.com/?code=#_
AQDYr0unT_ - FUyVQL65mhYtBJ2Zf_yASn5tyAf1TRA1T - PYXA67dSenqC2AxZPav - GR8DxiLBPmo6v6MB4eMbr_0g2Pjv0QEduiW4WrFcL - ynLIZ44tLZXLRfmVWIBPuQeVag1lygVfi8HC3jPXDBL_DarU0TmjhQPmlvheADeIxyb6JsXP7EVoH167 - azQCCJn0pcOrq9pvnsAO1U1dndM7JO4fxGLlG52t2cVVoKPEIA

curl - X POST \
https://api.instagram.com/oauth/access_token \
-F client_id = 509631933891140  \
-F client_secret = 9720491097a3b7d940e619096dc1118f \
-F grant_type = authorization_code \
-F redirect_uri = https://nathanielmordetzky.com/ \
-F code = AQDYr0unT_ - FUyVQL65mhYtBJ2Zf_yASn5tyAf1TRA1T - PYXA67dSenqC2AxZPav - GR8DxiLBPmo6v6MB4eMbr_0g2Pjv0QEduiW4WrFcL - ynLIZ44tLZXLRfmVWIBPuQeVag1lygVfi8HC3jPXDBL_DarU0TmjhQPmlvheADeIxyb6JsXP7EVoH167 - azQCCJn0pcOrq9pvnsAO1U1dndM7JO4fxGLlG52t2cVVoKPEIA

{
  "access_token": "IGQVJWaWU2X3BUckM2X091aE9KdHBNM09wT0ZAaSE1WRkdDWk1pRlRUV0tEV3M5a0dQeDM0dXlCSF9tazAzX0o4WUFhR0FkQ0lHTVhJbWh5blBIZAERWZAl92T1ZAvcEp2ODlVTWtwN0pxSXQ3eEFTb2NYeE5LVmdCVHRmQk5ZA",
    "user_id": 17841403152081781
}

curl - X GET \
'https://graph.instagram.com/17841403152081781?fields=id,username&access_token=IGQVJWaWU2X3BUckM2X091aE9KdHBNM09wT0ZAaSE1WRkdDWk1pRlRUV0tEV3M5a0dQeDM0dXlCSF9tazAzX0o4WUFhR0FkQ0lHTVhJbWh5blBIZAERWZAl92T1ZAvcEp2ODlVTWtwN0pxSXQ3eEFTb2NYeE5LVmdCVHRmQk5ZA'

{ "id": "5663694586990910", "username": "njmordetzky" }

curl - i - X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=9720491097a3b7d940e619096dc1118f&access_token=IGQVJWaWU2X3BUckM2X091aE9KdHBNM09wT0ZAaSE1WRkdDWk1pRlRUV0tEV3M5a0dQeDM0dXlCSF9tazAzX0o4WUFhR0FkQ0lHTVhJbWh5blBIZAERWZAl92T1ZAvcEp2ODlVTWtwN0pxSXQ3eEFTb2NYeE5LVmdCVHRmQk5ZA"

Longer 60 day Access Token
{
  "access_token": "IGQVJWZA3BieU5OWF9FbXVWS2kxN0Vzd1N6QkZAXcG8yN2VGS1RfRzB0STdqMi1wMVc0dXF6Nm5tMGV3MXROR0wteHJUaDBUUzZALWkZAKY3RiYTlxTzNsV3o5c0VzLTdxbzM4TThSbDl3",
    "token_type": "bearer",
      "expires_in": 5184000
}


curl - X POST \
https://api.instagram.com/oauth/access_token \
-F client_id = 509631933891140  \
-F client_secret = 9720491097a3b7d940e619096dc1118f \
-F grant_type = authorization_code \
-F redirect_uri = https://nathanielmordetzky.com/ \
-F code = IGQVJWd1JkX0RTaTJqR2dMV25SUU93RllkaEZASY0JtbzJGZAkxReHlCN0lBYm1DYjZAnb2ZARMV93TlJ0QTBzenBLUUhMMzlMMlZA6ZAnczRXZAlejBrWVZAJOGMwUUEzUnVjc1NqVzVOb2s4eHk5U2NKWGUzSQZDZD

IGQVJWd1JkX0RTaTJqR2dMV25SUU93RllkaEZASY0JtbzJGZAkxReHlCN0lBYm1DYjZAnb2ZARMV93TlJ0QTBzenBLUUhMMzlMMlZA6ZAnczRXZAlejBrWVZAJOGMwUUEzUnVjc1NqVzVOb2s4eHk5U2NKWGUzSQZDZD

curl - i - X GET \
"https://graph.facebook.com/me?access_token=IGQVJWd1JkX0RTaTJqR2dMV25SUU93RllkaEZASY0JtbzJGZAkxReHlCN0lBYm1DYjZAnb2ZARMV93TlJ0QTBzenBLUUhMMzlMMlZA6ZAnczRXZAlejBrWVZAJOGMwUUEzUnVjc1NqVzVOb2s4eHk5U2NKWGUzSQZDZD"

https://graph.facebook.com/509631933891140?access_token=IGQVJWd1JkX0RTaTJqR2dMV25SUU93RllkaEZASY0JtbzJGZAkxReHlCN0lBYm1DYjZAnb2ZARMV93TlJ0QTBzenBLUUhMMzlMMlZA6ZAnczRXZAlejBrWVZAJOGMwUUEzUnVjc1NqVzVOb2s4eHk5U2NKWGUzSQZDZD

POST https://api.instagram.com/oauth/IGQVJWd1JkX0RTaTJqR2dMV25SUU93RllkaEZASY0JtbzJGZAkxReHlCN0lBYm1DYjZAnb2ZARMV93TlJ0QTBzenBLUUhMMzlMMlZA6ZAnczRXZAlejBrWVZAJOGMwUUEzUnVjc1NqVzVOb2s4eHk5U2NKWGUzSQZDZD

curl - X POST \
https://api.instagram.com/oauth/access_token \
-F client_id = 990602627938098 \
-F client_secret = eb8c7... \
-F grant_type = authorization_code \
-F redirect_uri = https://socialsizzle.herokuapp.com/auth/ \
-F code = AQBx - hBsH3...

curl - X GET "https://graph.facebook.com/oauth/access_token?client_id=990602627938098&client_secret=9720491097a3b7d940e619096dc1118f&grant_type=client_credentials"




{ --OBTAIN YOUR 1 HOUR AND LONG LIVED ACCESS TOKENS-- }

1. Paste this into your browser's search bar:

https://api.instagram.com/oauth/authorize
  ? client_id = { app- id}
  & redirect_uri={ redirect - uri }
  & scope=user_profile, user_media
  & response_type=code

Fill in variables like this:  

https://api.instagram.com/oauth/authorize
  ? client_id = 509631933891140
  & redirect_uri=https://nathanielmordetzky.com/
  & scope=user_profile, user_media
  & response_type=code

And Minify if necessary like this:

  https://api.instagram.com/oauth/authorize?client_id=509631933891140&redirect_uri=https://nathanielmordetzky.com/&scope=user_profile,user_media&response_type=code

Your authorization code will be appended to your redirect URL.It's the characters between code={this is your authorization code}#_ , so remember to remove #_ to get the final code.

EX:
https://nathanielmordetzky.com/?code=AQBx_qidvGqGYGuCjxwhPmbNNQfT6pUn0-fai6M6pkuxC4A2YzqynGv9DeUbKRjVtb2_bIMVu1EiXc45Vek2Gmn5pejsVQ-DW4_ebOs9yDGJopZH-J8Y8GEo5rkTGHZtfi8XbUtOBMoBDmE2TOghj8782vW6i9BSZhWwHoxvhWdfhx1-gdfMvxAuxvLFDF-tPsmAyuktbVdbmI47--DZ_moixYd4GwoXySqkhGOiTUerYQ#_

Extracted authorization code:
AQBx_qidvGqGYGuCjxwhPmbNNQfT6pUn0 - fai6M6pkuxC4A2YzqynGv9DeUbKRjVtb2_bIMVu1EiXc45Vek2Gmn5pejsVQ - DW4_ebOs9yDGJopZH - J8Y8GEo5rkTGHZtfi8XbUtOBMoBDmE2TOghj8782vW6i9BSZhWwHoxvhWdfhx1 - gdfMvxAuxvLFDF - tPsmAyuktbVdbmI47--DZ_moixYd4GwoXySqkhGOiTUerYQ

2. Get a token by running this in terminal:

curl - X POST \
https://api.instagram.com/oauth/access_token \
-F client_id = { app- id} \
-F client_secret = { app- secret} \
-F grant_type = authorization_code \
-F redirect_uri = { redirect- uri} \
-F code = { code }

curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id=509631933891140 \
  -F client_secret=9720491097a3b7d940e619096dc1118f \
  -F grant_type=authorization_code \
  -F redirect_uri=https://nathanielmordetzky.com/ \
  -F code=AQBx_qidvGqGYGuCjxwhPmbNNQfT6pUn0 - fai6M6pkuxC4A2YzqynGv9DeUbKRjVtb2_bIMVu1EiXc45Vek2Gmn5pejsVQ - DW4_ebOs9yDGJopZH - J8Y8GEo5rkTGHZtfi8XbUtOBMoBDmE2TOghj8782vW6i9BSZhWwHoxvhWdfhx1 - gdfMvxAuxvLFDF - tPsmAyuktbVdbmI47--DZ_moixYd4GwoXySqkhGOiTUerYQ

3. Get the returned access token and test it:

Take this from terminal
{
  "access_token": "IGQVJWeHJIbzM1SURmUnpJV1YyUjNiWTBibXVYSmpOX3p2LUpDaVB1dW4wX0JBMzdVaFVGUjBBTlBnQ3ZAYZAGFuS3B1R1I2ZAS1kajc1SWJJeW14a0FVZAlNQTUhFRjZACSUZAWakNfSGFWNWFOamJiSlJPQmM5WURiZA1JLQTE4",

    "user_id": 17841403152081781
}

And use it to fill in this:
https://graph.instagram.com/{user-id}?fields=id,username&access_token={access-token}

And then paste it in the browser's search bar:
https://graph.instagram.com/17841403152081781?fields=id,username&access_token=IGQVJWeHJIbzM1SURmUnpJV1YyUjNiWTBibXVYSmpOX3p2LUpDaVB1dW4wX0JBMzdVaFVGUjBBTlBnQ3ZAYZAGFuS3B1R1I2ZAS1kajc1SWJJeW14a0FVZAlNQTUhFRjZACSUZAWakNfSGFWNWFOamJiSlJPQmM5WURiZA1JLQTE4

this should return a json object like this
{
  "id": "5663694586990910",
    "username": "njmordetzky"
}

4. Exchange this for a 60 day Long Lived access token:

"https://graph.instagram.com/access_token
  ?grant_type=ig_exchange_token
  &client_secret={instagram-app-secret}
  &access_token={short-lived-access-token}"

Fill in the { placeholders } and paste it in to your browser's search bar:
https://graph.instagram.com/access_token
  ? grant_type = ig_exchange_token
  & client_secret=9720491097a3b7d940e619096dc1118f
    & access_token=IGQVJWeHJIbzM1SURmUnpJV1YyUjNiWTBibXVYSmpOX3p2LUpDaVB1dW4wX0JBMzdVaFVGUjBBTlBnQ3ZAYZAGFuS3B1R1I2ZAS1kajc1SWJJeW14a0FVZAlNQTUhFRjZACSUZAWakNfSGFWNWFOamJiSlJPQmM5WURiZA1JLQTE4

This should return a json object like this
{
  "access_token": "IGQVJVVDhpTEFMWTVXQWVSZAUNHbWhRU2o4bzJESHhRc2lQYzRXNnJJeXdYV1NfNjJCQWtBenBIOWVUMXA1cFBrOFppWVRSLXNrc1NhVC10ME5hekRoQ3hNaHpteGxpTjE4Nnc5cjRn",
    "token_type": "bearer",
      "expires_in": 5184000 // Number of seconds until token expires
}

{ --OBTAIN YOUR 1 HOUR AND LONG LIVED ACCESS TOKENS - END-- }


{ --REFRESH LONG LIVED ACCESS TOKEN-- }

Refresh a long-lived Instagram User Access Token that is at least 24 hours old but has not expired. Refreshed tokens are valid for 60 days from the date at which they are refreshed.

Fill in the blank and paste this into your browser's search bar:
https://graph.instagram.com/refresh_access_token
  ?grant_type=ig_refresh_token
  &access_token={long-lived-access-token}

{ --REFRESH LONG LIVED ACCESS TOKEN - END-- }


{ --GET YOUR ID-- }

https://graph.instagram.com/me?access_token=ACCESS-TOKEN

{ --GET YOUR ID - END-- }


{ --MY STUFF FOR TODAY-- }
"access_token": "IGQVJWWFJoa3hBTUxoVXhIaS02ZA1drYU01bHg0c3pZAU3ZAwbHoxd1hTb0lUN0JkdTNMV3p3RkRQb0QyN1g1bmc5VDRZAVncxR0p4RXlYQWI5RDNRTnJCempvZAFE1UWE3LVBZAZAVd0WnBKcHpqS01JTWRpWm1XMFNhT0RfLVpN", 
"user_id": 17841403152081781

"id": "5663694586990910",
"username": "njmordetzky"

"access_token": "IGQVJYemJ6bHV4X0swLXBRNEVoT1VQT3I4QmVTUC1fSmNFWV85TU9YSmVSbzJrOWp6cTRsN0o0VXNEZAzVCeWhBbHpNWGQwMnVGOFlfdEhLY29UU0hESndPXzRzbGYwa0dYRTRBQzNR",
"token_type": "bearer",
"expires_in": 5184000

"id": "5663694586990910"

{ --MY STUFF FOR TODAY - END-- }