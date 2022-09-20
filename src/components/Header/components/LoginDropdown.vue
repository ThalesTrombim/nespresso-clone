<template>
  <div class="login-dropdown--container">
    <div class="login-dropdown--header">
      <span>INICIAR SESSÃO</span>
      <p>Acesse sua conta e faça o seu pedido</p>
    </div>
    <form class="login-dropdown--form">
      <div class="login-dropdown--input">
        <label for="email-dropdown"></label>
        <input id="email-dropdown" type="email" placeholder="Seu e-mail *">
      </div>
      <div class="login-dropdown--input">
        <input type="password" placeholder="Senha *">
      </div>
      <a href="#">Esqueceu sua senha?</a>

      <div class="keep-loged-wrapper">
        <input id="check-keep-loged" type="checkbox" checked>
        <label for="check-keep-loged">Continuar conectado</label>
      </div>
      <square-button mode="inverted">
        Entrar >
      </square-button>
    </form>

    <div class="login-dropdown--divisor"></div>

    <div class="login-dropdown--register">
      <p>Ainda não tem uma conta online?</p>
      <square-button mode="inverted">
        Registre-se agora >
      </square-button>
    </div>
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
  margin-left: -16px;
  min-width: 227px;
}
.login-dropdown--header{
  padding: 0;
}
.login-dropdown--header span{
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
  gap: 20px;
}
.login-dropdown--form a {
  color: #986f38;
  text-transform: none;
}

.login-dropdown--input input {
  border-radius: 4px;
  border: 1px solid #CCC;
  padding: 16px 4px 4px;
  font-size: 16px;
}
.login-dropdown--input input:focus {
  border: 1px solid #000;
  outline: 0;
}
.keep-loged-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}
.keep-loged-wrapper label{
  font-weight: 500;
  text-transform: none;
}
.keep-loged-wrapper input{
  margin: 0;
}
.login-dropdown--divisor {
  width: 100%;
  border-bottom: .5px solid #EEE;
  margin: 20px 0;
}
.login-dropdown--register {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.login-dropdown--register button{
  text-transform: none;
  width: 100%;
}
.login-dropdown--register p{
  margin: 10px 0;
  font-size: 12px;
  text-transform: none;
}
</style>