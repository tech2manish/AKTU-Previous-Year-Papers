
// search box code starts
document.getElementById('searchBox').addEventListener('input', function() {
    var searchQuery = this.value.toLowerCase();
    var items = document.getElementsByClassName('searchable-item');
    
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var text = item.textContent.toLowerCase();
      
      if (text.includes(searchQuery)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
  
// search box code ends
