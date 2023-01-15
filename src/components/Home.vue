<template>
  <div>
    <h1>SHOP Client</h1>
    <p>
      <a class="btn btn-lg btn-warning" href="@{http://localhost:8081/auth/realms/realm1/protocol/openid-connect/auth?response_type=code&client_id=client_shopping}">Login</a>
      <!--      http://localhost:8081/auth/realms/realm1/protocol/openid-connect/logout?redirect_url="http://localhost:3000"-->
      <a class="btn btn-lg btn-warning" href="@{http://localhost:8081/auth/realms/realm1/protocol/openid-connect/logout}">Logout</a>
      <!--      <a class="btn btn-lg btn-warning" th:href="@{http://localhost:8081/auth/realms/realm1/protocol/openid-connect/logout/logout-confirm?client_id=client_shopping}">Logout</a>-->
    </p>
    <br>
    <p class="lead">모든 사람 사용 가능</p>
    <p>
      <a class="btn btn-lg btn-warning" href="/shopping/hello">Hello</a>
      <!--      <a class="btn btn-lg btn-warning" href="/shopping/shopping">둘러보기</a>-->
    </p>
    <br>
    <p class="lead">인증된 유저만 사용 가능</p>
    <p>
      <a class="btn btn-lg btn-warning" href="/items/new">상품 등록</a>
      <!--      <a class="btn btn-lg btn-warning" href="/items">이벤트 응모</a>-->
    </p>
  </div>
</template>

<script>
export default {
    name: 'TheHome'
}
</script>

<style>

</style>