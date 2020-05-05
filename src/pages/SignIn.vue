/* eslint-disable no-unused-vars */
<template>
    <div>
        <div id="forms"></div>

        <button v-on:click="google_signin">Sign in With Google</button>
    </div>
</template>

<script>
import firebase from "firebase";
//import router from '@/routes/index'
let user;
export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
    },
    name: "SignIn",
    methods: {
        async google_signin() {
            var provider = new firebase.auth.GoogleAuthProvider();
            //provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

            firebase
                .auth()
                .signInWithPopup(provider)
                .then(async function(result) {
                    //if signed in with google then remove option to sign in with google again.SO you would have to sign out.

                    if (result.credential) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        // eslint-disable-next-line no-unused-vars
                        var token = result.credential.accessToken;

                        // ...
                    }
                    user = await firebase.auth().currentUser;
                    //generate single use id
                    const signle_use_id = generatePassword(20);

                    // eslint-disable-next-line no-console
                    console.log("user in sign up code", user.uid);
                    firebase
                        .database()
                        .ref()
                        .child("users")
                        .child(user.uid)
                        .set({
                            placeholder: "placeholder2",
                            signle_use_id: signle_use_id,
                        });

                    window.location.replace("../");
                    //user = firebase.auth().currentUser;
                })
                .catch(function(error) {
                    //a global var so other functions can acsess this

                    // Handle Errors here.
                    var errorCode = error.code;
                    // eslint-disable-next-line no-unused-vars
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    // eslint-disable-next-line no-unused-vars

                    // The firebase.auth.AuthCredential type that was used.
                    // eslint-disable-next-line no-unused-vars
                    var credential = error.credential;
                    // eslint-disable-next-line no-console
                    console.log(errorCode, errorMessage);
                    // ...
                });
        },
    },
};

function generatePassword(len) {
    const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]=-;',,";
    let retVal = "";
    for (let i = 0, n = charset.length; i < len; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
</script>

<style scoped>
#warning,
#speedwarning,
#no_user,
#wrong_pwd,
#short_pass,
#location {
    display: none;
}
#reset {
    margin-top: 5px;
}
#submit {
    margin-top: 5px;
}

#forms {
    text-align: center;
}

#email,
#password {
    display: inline-block;
    width: 50%;
}
</style>
