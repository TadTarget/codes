/* Apaga Linhas duplicadas e Linhas com o conteúdo de uma coluna específica,
   inicialmente este script foi desenvolvido para ser utilizado com a planilha
   baixada do Google Merchants Feed, o objetivo dela é criar planilhas e separar
   os dados entre avisos e erros.

 * Autor: Tadeu Luis Pires Gaudio
 * Como utilizar:
     1 - Vá no Google Merchants Feed > Feeds clique em "Fazer donwload do relatório completo".
     Isso irá baixar a planilha com o relatório de erros e avisos sobre os produtos do Feed Google Shopping.

     2 - O arquivo é CSV abra ele junto ao Google Spreadsheet.

     3 - O arquivo é convertido na planilha do Google Spreadsheet agora vá em Tools > Script Editor e copie o código abaixo e copie esse arquivo.

     4 - Dentro da Função "removeRowsForSpecificColumnsContent", no primeiro campo coloque o número da coluna que deseja pesquisar o valor
     e onde está "Aviso" mude para o conteúdo que deseja filtrar para determinar se a linha deve ou não ser excluida.

     5 - Na seleção das funções escolha "executeall" e clique em Rodar quando o script terminar a execução a planilha aberta terá sido atualizada.
     
*/


function removeDuplicates(get_return) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var newData = new Array();
  for(i in data){
    var row = data[i];
    var duplicate = false;
    for(j in newData){
      if(row.join() == newData[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData.push(row);
    }
  }

  if(get_return) return newData;
  else{
    sheet.clearContents();
    sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
  }
}

function removeRowsForSpecificColumnsContent(coluna, pesquisa, tabela){
 var sheet = tabela ? null : SpreasheetApp.getActiveSheet();
 var data = tabela ? tabela : sheet.getDataRange().getValues();
 var newData = new Array();


 for(i in data){
    var row = data[i];
    var apagar = false;

    if(row[coluna] == pesquisa){
        apagar = true;
    }

    if(!apagar){
      newData.push(row);
    }
  }

  sheet = SpreadsheetApp.getActiveSheet();
  sheet.clearContents();
  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);

}

function executeAll(){
  var tabela =  removeDuplicates(true);
  removeRowsForSpecificColumnsContent(3, 'Aviso', tabela);
}
