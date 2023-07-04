// Variáveis globais
var total = 0;
var itemList = document.getElementById('item-list');
var totalElement = document.getElementById('total');

// Função para adicionar um item
function addItem() {
  var itemName = document.getElementById('item-name').value;
  var itemValue = parseFloat(document.getElementById('item-value').value);
  
  if (isNaN(itemValue)) {
    alert('Digite um valor numérico válido.');
    return;
  }
  
  // Criar novo item de lista
  var listItem = document.createElement('li');
  
  var itemNameSpan = document.createElement('span');
  itemNameSpan.textContent = itemName;
  itemNameSpan.classList.add('item-name');
  listItem.appendChild(itemNameSpan);
  
  var itemValueSpan = document.createElement('span');
  itemValueSpan.textContent = 'R$ ' + itemValue.toFixed(2);
  listItem.appendChild(itemValueSpan);
  
  var itemActions = document.createElement('div');
  itemActions.classList.add('item-actions');
  
  var removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.addEventListener('click', function() {
    removeItem(listItem, itemValue);
  });
  itemActions.appendChild(removeButton);
  
  listItem.appendChild(itemActions);
  
  // Adicionar item à lista
  itemList.appendChild(listItem);
  
  // Atualizar total
  total += itemValue;
  totalElement.textContent = total.toFixed(2);
  
  // Limpar campos
  document.getElementById('item-name').value = '';
  document.getElementById('item-value').value = '';
}

// Função para remover um item
function removeItem(item, itemValue) {
  itemList.removeChild(item);
  
  // Atualizar total
  total -= itemValue;
  totalElement.textContent = total.toFixed(2);
}

// Função para reiniciar a lista
function resetList() {
  itemList.innerHTML = '';
  
  // Resetar total
  total = 0;
  totalElement.textContent = total.toFixed(2);
}
