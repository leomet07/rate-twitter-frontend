<template>
    <div>
        <h1 class="f1 mt2">
            Welcome to
            <br />M<i class="fas fa-heartbeat"></i>menta
        </h1>
        <button v-if="signed_in" v-on:click="send_request">Send Request</button>
    </div>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log" ,"warn", "error"] }] */
import firebase from "firebase"; // eslint-disable-line no-unused-vars
import { mapGetters } from "vuex"; // eslint-disable-line no-unused-vars

export default {
    name: "Home",
    data() {
        return {
            signed_in: false,
        };
    },
    components: {},
    methods: {
        async send_request() {
            // eslint-disable-next-line no-console
            if (user) {
                // read a key from db

                firebase
                    .database()
                    .ref()
                    .child("users")
                    .child(user.uid)

                    .once("value", function(datasnapshot) {
                        const val = datasnapshot.val();
                        console.log("Db read");
                        console.log(val);
                        let single_use_id = val["signle_use_id"];
                        // 1. Create a new XMLHttpRequest object
                        let xhr = new XMLHttpRequest();

                        // 2. Configure it: GET-request for the URL /article/.../load
                        xhr.open(
                            "GET",
                            "http://46.101.117.119/api/v1/rate?uid=" +
                                String(user.uid) +
                                "&tweet_status=" +
                                "1257334423386808320" +
                                "&key=" +
                                String(single_use_id)
                        );
                        xhr.setRequestHeader(
                            "content-type",
                            "application/x-www-form-urlencoded;charset=UTF-8"
                        );

                        // 3. Send the request over the network
                        xhr.send();

                        // 4. This will be called after the response is received
                        xhr.onload = function() {
                            if (xhr.status != 200) {
                                // analyze HTTP status of the response
                                // eslint-disable-next-line no-console
                                console.log(
                                    `Error ${xhr.status}: ${xhr.statusText}`
                                ); // e.g. 404: Not Found
                            } else {
                                // show the result
                                // eslint-disable-next-line no-console
                                console.log(
                                    `Done, got ${xhr.response.length} bytes`
                                ); // response is the server
                            }

                            // eslint-disable-next-line no-console
                            console.log(xhr.response);
                            let json = JSON.parse(xhr.response);
                            console.log(json);
                        };
                    });

                console.log("Send Request");
            }

            /*
                .then((data) => {
                    // eslint-disable-next-line no-console
                    console.log(data);
                });
                */
        },
    },
    computed: {
        ...mapGetters({
            user: "user",
        }),
    },
    created() {
        // eslint-disable-next-line no-unused-vars
        let refs = this.$refs;
        // eslint-disable-next-line no-console
        console.log("created");
        // arrow must be used to presserve class scope and not turn into firebase listener scope.
        firebase.auth().onAuthStateChanged((user_local) => {
            if (user_local) {
                this.signed_in = true;
                user = user_local;
                // eslint-disable-next-line no-console
                console.log("User found", user.uid);

                let firebaseheadingref = firebase
                    .database()
                    .ref()
                    .child("users")
                    .child(user.uid); //eslint-disable-line no-unused-vars

                firebaseheadingref.on("value", async function(datasnapshot) {
                    // eslint-disable-next-line no-unused-vars
                    let data = datasnapshot.val();
                });
                //make login and signupnforms not seen
            } else {
                this.signed_in = false;
                //making verif not seen
                // eslint-disable-next-line no-console
                console.log("user NOT found");
            }
        });
    },
};

let user;
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
</script>

<style scoped></style>
