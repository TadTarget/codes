// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTabId(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var tab_id = tab.id;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof tab_id == 'integer', 'tab.id é inteiro');
    callback(tab.id);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function renderHTML(statusText) {
  document.getElementById('result').innerHTML = statusText;
}

function getPedidos(domCtx){
/*
   autor: Tadeu Luis P. Gaudio
   objetivo: auxíliar na busca de pedidos perdidos.
 */
    var textFile = null,
        makeTextFile = function (text) {
            var data = new Blob([text], {type: 'text/plain'});

            if (textFile !== null) {
              window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
          },

          c
        items = jQuery(domCtx).find('#marketplace_log_grid_table tbody tr td:nth-child(3)'),
        url_b2w_pedidos = 'https://www.bonmarketplace.com.br/#/pedidos/detalhes/',
        url_cnova_pedidos = 'https://lojista.ehub.com.br/adm-seller/order/jsp/ordersDetail.jsp?orderId=',
        win = false,
        pedidos = [];

    jQuery.each(items, function(i){

        mkt = jQuery(this).parent().find('td:nth-child(4)').text().trim().toLowerCase()
        url = mkt == 'cnova' ? url_cnova_pedidos : url_b2w_pedidos
        pedidos.push(url+jQuery(this).text().trim())
    })

    var _pedidos = "";

    if(pedidos.length>0){
            for(var j=0; j<pedidos.length;j++){
                _pedidos +=  '<a target="_blank" href="'+pedidos[j]+'">'+pedidos[j]+'</a><br>'
            }

            renderStatus("Total de Pedidos Perdidos: "+pedidos.length)
            renderHTML(_pedidos)
    }


    return _pedidos;
}

document.addEventListener('DOMContentLoaded', function(tab) {
  /*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log('nois')
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response.farewell);
    });
  });*/

  getCurrentTabId(function(tabid) {
    // Put the image URL in Google search.
    renderStatus('Verificando nos Logs pelos pedidos perdidos');
    chrome.tabs.sendMessage(tabid, { text: "report_back" }, getPedidos);
    //texto = getPedidos()
    //renderStatus(texto)
  });
});
