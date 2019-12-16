<template>
  <div id="createAcc">
    <section class="insertuser">
      <h3>Create an User-Account</h3>
      <form action="/insertuser" method="post" @submit="checkForm">
        <select id="sex" name="sex">
          <option value="Female" selected>Frau</option>
          <option value="Male">Herr</option>
        </select>
        <br />

        <input id="fname" v-model="fname" name="fname" type="text" placeholder="Vorname" required />
        <input id="lname" v-model="lname" name="lname" type="text" placeholder="Nachname" required />
        <br />
        <input id="gdatum" type="date" name="gdatum" required />
        <br />
        <input id="strasse" type="text" name="strasse" placeholder="Straße" required />
        <input id="hausnr" type="text" name="hausnr" placeholder="Hausnummer" required />
        <br />
        <input id="plz" type="text" name="plz" placeholder="PLZ" required />
        <input id="stadt" type="text" name="stadt" placeholder="Stadt" required />
        <br />
        <input id="email" name="email" type="email" placeholder="Email" required />
        <br />
        <input id="pass" name="pass" type="password" placeholder="Password" required />
        <br />
        <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
        <br />
        <a href="signin">Already have an account?</a>
        <br />
        <h6>By pressing Sign Up you agree with the Terms of Services and Privacy Policy</h6>
      </form>
    </section>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>