<template>
  <div class="login-dropdown--container">
    <div class="login-dropdown--header">
      <span>INICIAR SESSÃO</span>
      <p>Acesse sua conta e faça o seu pedido</p>
    </div>
    <form class="login-dropdown--form">
      <div>
        <label for="email-dropdown">Seu e-mail *</label>
        <input id="email-dropdown" type="email" placeholder="">
      </div>
      <input type="password" placeholder="Senha *">
    </form>
  </div>
</template>

<script>
export default {
  name: 'login-dropdown'
}
</script>

<style scoped>
.login-dropdown--container {
  color: red;
  background: #FFF;
  max-width: inherit;
  margin-left: -15px;
  padding: 14px;
}
.login-dropdown--header{
  padding: 0;
}
.login-dropdown--header span{
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}
.login-dropdown--header p{
  font-size: 9px;
  font-weight: 400;
  margin: 10px 0 20px 0;
}
.login-dropdown--form {
  display: flex;
  flex-direction: column;
}
</style>