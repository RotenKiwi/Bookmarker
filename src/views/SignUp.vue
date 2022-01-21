<template>
    <div>
        <h1>SIGN UP</h1>
        <form @submit.prevent="SignUp">
            <input type="email" placeholder="Email"><br>
            <input type="password" placeholder="Password"><br>
            <button>Submit</button>
        </form>
    </div>
</template>