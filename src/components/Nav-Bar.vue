<template>
    <div>
        <header class="site-header">
            <nav class="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
                <div class="container">
                    <b-link class="navbar-brand mr-4 grow" to="/">
                        M<i class="fas fa-heartbeat"></i>menta
                    </b-link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggle"
                        aria-controls="navbarToggle"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggle">
                        <div class="navbar-nav mr-auto">
                            <b-link class="nav-item nav-link" to="/">
                                <i class="fas fa-home"></i> Home
                            </b-link>

                            <!--<a class="nav-item nav-link" href="#"><i class="fas fa-tools"></i> Admin Console</a>-->
                        </div>
                        <!-- Navbar Right Side -->
                        <div class="navbar-nav">
                            <b-link
                                v-if="user.loggedIn"
                                class="nav-link"
                                @click.prevent="signOut"
                            >
                                <i class="fas fa-user-slash"></i> Sign out
                            </b-link>
                            <b-link
                                v-if="!user.loggedIn"
                                class="nav-item nav-link"
                                to="/signin"
                            >
                                <i class="fas fa-user"></i> Sign In
                            </b-link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
    name: "NavBar",
    methods: {
        check() {
            this.checked = !this.checked;
        },
        signOut() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace({
                        path: "/signin",
                    });
                });
        },
    },
    mounted() {},
    computed: {
        ...mapGetters({
            user: "user",
        }),
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:500i&display=swap");

.site-header .navbar-nav .nav-link {
    color: #cbd5db;
}

.site-header .navbar-nav .nav-link:hover {
    color: #ffffff;
}

.site-header .navbar-nav .nav-link.active {
    font-weight: 500;
}
.bg-steel {
    background-color: #5f788a;
}

.site-header {
    font-family: "Poppins", sans-serif;
}
</style>
