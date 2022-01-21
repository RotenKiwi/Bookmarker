<template>
    <div>
        <h1>SIGN UP</h1>
        <form @submit.prevent="SignUp">
            <input type="email" placeholder="Email" v-model="email"><br>
            <input type="password" placeholder="Password" v-model="password"><br>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default{
    name:'SignUp',
    data (){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        SignUp(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .catch(error => alert(error.message))
        }
    }
}
</script>
