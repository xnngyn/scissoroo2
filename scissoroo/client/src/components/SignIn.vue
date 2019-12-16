<template>
    <div>
        <div class="container-fluid padding">
		
            <div class="row justify-content-center text-center">
			    <div>
				    <section class="loginuser">
                    <h3>SignIn</h3>

					<form action="/users/login" method="post">
						<input id="emaillogin" type="text" name="emaillogin" placeholder="E-Mail"><br/>
						<input id="passlogin" type="password" name="passlogin" placeholder="Password"><br/>
						<button type="submit" class="btn btn-primary btn-block">Anmelden</button><br/>
						<a href="signup">Need a new Account?</a><br/>
						<a href="forgot">Forgot password?</a>
					</form>
				    </section>
			    </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>