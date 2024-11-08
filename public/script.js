$(document).ready(function() {
  $('#resourceForm').on('submit', function(event) {
    event.preventDefault();

    const url = $('#resourceUrl').val();
    const title = $('#resourceTitle').val();

    if (url && title) {
      const newListItem = $('<li></li>');
      const newLink = $('<a></a>');

      newLink.attr('href', url);
      newLink.attr('target', '_blank');
      newLink.text(title);

      newListItem.append(newLink);
      $('#resourceList').append(newListItem);

      $('#resourceForm')[0].reset();
    }
  });
});
