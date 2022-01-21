<template>
    <div>
        <h1>Log In</h1>
        <form @submit.prevent="LogIn">
            <input type="email" placeholder="Email" v-model="email"><br>
            <input type="password" placeholder="Password" v-model="password"><br>
            <button>Submit</button>
        </form>
    <hr> Signed in:{{isAuthenticated}}<br>
    <button @click="logout">Log Out</button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default{
    name:'LogIn',
    data (){
        return{
            email:'',
            password:'',
            isAunthenticated: false
        }
    },
     created(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.isAunthenticated=true
            }
        })
    },
    methods:{
        LogIn(){
            firebase.auth().signInUserWithEmailAndPassword(this.email, this.password)
            .catch(error => alert(error.message))
        },
        logout(){
            firebase.auth().signOut()
            .then(()=>{
                this.isAunthenticated=false
            })
        }
    }
}
</script>
