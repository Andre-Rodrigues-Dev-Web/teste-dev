<template>
  <div class="wrap">
      <div class="content">
          <h1>Gerenciamento de livraria</h1>
          <table>
              <thead>
                  <tr>
                      <th colspan="8">Título</th>
                      <th colspan="8">Nome</th>
                      <th colspan="8">Autor</th>
                      <th colspan="8">Categoria</th>
                      <th colspan="8">Código</th>
                      <th colspan="8">Tipo</th>
                      <th colspan="8">Tamanho</th>
                      <th colspan="8">Ações</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td colspan="8"></td>
                      <td colspan="8"></td>
                      <td colspan="8"></td>
                      <td colspan="8"></td>
                      <td colspan="8"></td>
                      <td colspan="8"></td>
                      <td colspan="8"></td>
                      <td colspan="6">
                          <a class="bt bt_add" href="http://">Adicionar</a>
                          <button class="bt bt_remove">Remover</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Buttons*/
.bt{
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    color: #fff;
    display: inline-block;
    font-size: 1vw;
    font-weight: 600;
    padding: 10px 1em;
    text-decoration: none;
}
.bt:last-child{margin-left: 10px;}
.bt_add{
    background-color: rgb(0, 187, 255);
    border-color: rgb(0, 187, 255); 
}
.bt_remove{
    background-color: crimson;
    border-color: crimson;
}
/*Container*/
.wrap{
    background-color: rgb(248, 250, 254);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
}
.content{
    background-color: #fff;
    box-shadow: 1px 3px 6px 0 #0003;
    border-radius: 8px;
    min-height: 30vh;
    padding: 1em .67em;
    width: 60%;
}
/*Tabela*/
table, td, th, tfoot {
    padding:5px;
}
table, td, th{
    border: 1px solid rgba(51, 51, 51, 0.098);
}
table{
    width: 100%;
}
th {
    background-color:rgb(64, 102, 230);
    color: #fff;
}


</style>
